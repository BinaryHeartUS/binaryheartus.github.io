/**
 * BinaryHeart Northwestern: mailing list signup collector.
 *
 * Install this as a container-bound script on the signup Google Sheet
 * (Extensions → Apps Script), signed in as the chapter Gmail account that
 * receives mail for nu@binaryheart.org. See signup/README.md for setup.
 *
 * It does two things:
 *   1. doPost: receives web signups from the Cloudflare Pages function.
 *   2. processMailtoSignups: runs every few minutes, finds the pre-filled
 *      "join" emails in the inbox, and adds the sender (or the Northwestern
 *      email they typed in the body) to the sheet.
 */

const CONFIG = {
  SHEET_NAME: 'Signups',
  CHAPTER_NAME: 'BinaryHeart at Northwestern',
  CHAPTER_ADDRESS: 'nu@binaryheart.org',
  // Must match MAILTO_SUBJECT in signup/public/index.html.
  MAILTO_SUBJECT: 'Join the BinaryHeart NU mailing list',
  PROCESSED_LABEL: 'Mailing List Signup',
  // Send a short "you're on the list" email to each new signup.
  SEND_CONFIRMATION: true,
  INSTAGRAM_URL: 'https://instagram.com/binaryheartatnu',
  INSTAGRAM_HANDLE: '@binaryheartatnu',
  JOIN_PAGE_URL: 'https://binaryheart.org/nu/join',
  CATS_ON_CAMPUS_URL: 'https://catsoncampus.northwestern.edu/binaryheart/club_signup',
  DISCORD_URL: 'https://discord.gg/66ccvwV7J', // national BinaryHeart server, all chapters
  // Web signups beyond this in one minute get the page's email fallback instead.
  MAX_WEB_SIGNUPS_PER_MINUTE: 60,
  // How the emails describe the first meeting (date, time and place come from firstMeeting.json).
  // Keep in sync with subtitle/description in src/data/chapters/nu/firstMeeting.json.
  FIRST_MEETING_SUBTITLE: 'Intro to BinaryHeart: Hardware & Software',
  FIRST_MEETING_BLURB: 'Meet the team and see the work we do on both sides: hardware, where we repair and refurbish computers for donation, and software, where we build our OpenClaw cluster and other internal tools.',
  LOGO_URL: 'https://www.binaryheart.org/assets/images/chapters/national/icon.png',
  // Same file the website's first-meeting section reads, so the email is never
  // out of date with binaryheart.org/nu/join.
  MEETING_JSON_URL: 'https://raw.githubusercontent.com/BinaryHeartUS/binaryheartus.github.io/main/src/data/chapters/nu/firstMeeting.json',
  TIME_ZONE: 'America/Chicago',
  TRIGGER_MINUTES: 1,
};

const HEADERS = ['Timestamp', 'Email', 'Northwestern', 'Method', 'Source', 'Notes'];
const NU_EMAIL = /^[a-z0-9._%+'-]+@(u\.)?northwestern\.edu$/;
const NU_EMAIL_IN_TEXT = /[a-z0-9._%+'-]+@(?:u\.)?northwestern\.edu/gi;

/* ------------------------------------------------------------------------ */
/* One-time setup                                                           */
/* ------------------------------------------------------------------------ */

/** Run once from the editor. Creates the sheet, label, and trigger. */
function setup() {
  getSheet_();
  GmailApp.getUserLabelByName(CONFIG.PROCESSED_LABEL) || GmailApp.createLabel(CONFIG.PROCESSED_LABEL);

  const props = PropertiesService.getScriptProperties();
  if (!props.getProperty('LAST_MAIL_CHECK')) {
    // Pick up signups sent in the last week on the first run.
    props.setProperty('LAST_MAIL_CHECK', String(Date.now() - 7 * 24 * 60 * 60 * 1000));
  }

  ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === 'processMailtoSignups')
    .forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('processMailtoSignups').timeBased().everyMinutes(CONFIG.TRIGGER_MINUTES).create();

  Logger.log('Setup done.');
}

/* ------------------------------------------------------------------------ */
/* Web signups (from Cloudflare Pages)                                      */
/* ------------------------------------------------------------------------ */

function doPost(e) {
  let body;
  try {
    body = JSON.parse(e.postData.contents);
  } catch (err) {
    return json_({ ok: false, error: 'bad_request' });
  }

  // The signup page (binaryheart.org/nu/signup) posts here directly, so this
  // endpoint is public. Filter bots and cap the rate before touching the Sheet.
  if (body.website) return json_({ ok: true }); // honeypot field was filled in

  let email = String(body.email || '').trim().toLowerCase().replace(/^mailto:/, '').replace(/\s+/g, '');
  if (email && email.indexOf('@') === -1) email += '@u.northwestern.edu';
  if (email.length > 254 || !NU_EMAIL.test(email)) return json_({ ok: false, error: 'not_northwestern' });

  const cache = CacheService.getScriptCache();
  const recent = Number(cache.get('WEB_POSTS') || 0);
  if (recent >= CONFIG.MAX_WEB_SIGNUPS_PER_MINUTE) return json_({ ok: false, error: 'busy' });
  cache.put('WEB_POSTS', String(recent + 1), 60);

  const source = String(body.source || 'web').toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 40) || 'web';
  const result = addSignup_(email, 'web', source, '');
  if (result.added && CONFIG.SEND_CONFIRMATION) sendConfirmation_(email);
  return json_({ ok: true, duplicate: !result.added });
}

function doGet() {
  return json_({ ok: true, service: 'binaryheart-nu-signup' });
}

/* ------------------------------------------------------------------------ */
/* Mailto signups (from the chapter inbox)                                  */
/* ------------------------------------------------------------------------ */

/** Time-driven: every CONFIG.TRIGGER_MINUTES minutes. Safe to run by hand. */
function processMailtoSignups() {
  processMail_({ silent: false });
}

/**
 * Scans the inbox for join emails. Each message is handled exactly once (its ID
 * is remembered), so deleting rows from the Sheet never causes a resend.
 * silent: record signups without sending any emails.
 */
function processMail_({ silent }) {
  const props = PropertiesService.getScriptProperties();
  const handled = new Set(JSON.parse(props.getProperty('HANDLED_MESSAGE_IDS') || '[]'));
  const since = Number(props.getProperty('LAST_MAIL_CHECK')) || Date.now() - 24 * 60 * 60 * 1000;
  const startedAt = Date.now();

  // Overlap the window by 10 minutes because Gmail search can lag on new mail.
  // Messages seen in an earlier run are skipped via their remembered IDs.
  const afterSeconds = Math.floor((since - 10 * 60 * 1000) / 1000);
  const query = `subject:"${CONFIG.MAILTO_SUBJECT}" after:${afterSeconds} -in:sent -in:drafts`;
  const label = GmailApp.getUserLabelByName(CONFIG.PROCESSED_LABEL) || GmailApp.createLabel(CONFIG.PROCESSED_LABEL);
  const me = [CONFIG.CHAPTER_ADDRESS, Session.getEffectiveUser().getEmail()].map(s => s.toLowerCase());

  GmailApp.search(query, 0, 100).forEach(thread => {
    thread.getMessages().forEach(message => {
      if (message.getDate().getTime() < since - 10 * 60 * 1000) return;
      if (handled.has(message.getId())) return;
      handled.add(message.getId());
      const from = extractAddress_(message.getFrom());
      if (!from) return;
      const fromUs = me.indexOf(from) !== -1;

      // Prefer a Northwestern address typed in the body (people often send from a
      // personal account), then the sender if it's already a Northwestern address.
      const typed = latestReplyText_(message.getPlainBody()).match(NU_EMAIL_IN_TEXT) || [];
      const nuEmail = typed.map(s => s.toLowerCase()).find(s => NU_EMAIL.test(s)) ||
        (NU_EMAIL.test(from) && !fromUs ? from : null);

      // Our own replies are in these threads too; only count one if it carries a
      // signup (e.g. the web fallback sent from a chapter phone at tabling).
      if (fromUs && !nuEmail) return;

      if (nuEmail) {
        const result = addSignup_(nuEmail, 'email', 'mailto', nuEmail === from ? '' : `Sent from ${from}`);
        // Also keep the address they actually sent from (e.g. a personal @me.com).
        const sender = !fromUs && from !== nuEmail
          ? addSignup_(from, 'email', 'mailto', `Sender address; Northwestern email is ${nuEmail}`)
          : { added: false };
        // Confirm whenever this email added anyone, so someone already signed up
        // on the web still hears back when they email from a new address.
        if ((result.added || sender.added) && CONFIG.SEND_CONFIRMATION && !fromUs && !silent) {
          const meeting = getUpcomingMeeting_();
          message.reply(confirmationText_(nuEmail, meeting), {
            name: CONFIG.CHAPTER_NAME,
            htmlBody: confirmationHtml_(nuEmail, meeting),
          });
        }
      } else {
        // Keep the address so nobody is lost, and ask once for their Northwestern email.
        const result = addSignup_(from, 'email', 'mailto', 'Needs Northwestern email');
        if (result.added && !silent) {
          const meeting = getUpcomingMeeting_();
          message.reply(needsNuEmailText_(meeting), { name: CONFIG.CHAPTER_NAME, htmlBody: needsNuEmailHtml_(meeting) });
        }
      }
    });
    thread.addLabel(label);
  });

  props.setProperty('LAST_MAIL_CHECK', String(startedAt));
  // Keep the most recent IDs; property values max out around 9 KB.
  props.setProperty('HANDLED_MESSAGE_IDS', JSON.stringify([...handled].slice(-300)));
}

/**
 * Run once by hand to re-scan the last 7 days of join emails into the Sheet,
 * e.g. after changing what gets recorded. Sends no emails, so nobody hears
 * from us twice. Rows already in the Sheet are skipped.
 */
function reprocessLastWeek() {
  const props = PropertiesService.getScriptProperties();
  props.setProperty('LAST_MAIL_CHECK', String(Date.now() - 7 * 24 * 60 * 60 * 1000));
  props.deleteProperty('HANDLED_MESSAGE_IDS');
  processMail_({ silent: true });
}

/* ------------------------------------------------------------------------ */
/* Sheet helpers                                                            */
/* ------------------------------------------------------------------------ */

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(CONFIG.SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  }
  return sheet;
}

/** Appends a row unless the email is already present. Returns { added }. */
function addSignup_(email, method, source, notes) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const sheet = getSheet_();
    const lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      const existing = sheet.getRange(2, 2, lastRow - 1, 1).getValues();
      if (existing.some(row => String(row[0]).toLowerCase() === email)) return { added: false };
    }
    sheet.appendRow([new Date(), email, NU_EMAIL.test(email), method, source, notes]);
    return { added: true };
  } finally {
    lock.releaseLock();
  }
}

/* ------------------------------------------------------------------------ */
/* Email helpers                                                            */
/* ------------------------------------------------------------------------ */

function extractAddress_(from) {
  const match = String(from).match(/<([^>]+)>/);
  return (match ? match[1] : String(from)).trim().toLowerCase();
}

/** Drops quoted history so we don't pick up addresses from earlier messages. */
function latestReplyText_(body) {
  return String(body).split(/\n\s*(?:On .+wrote:|-----Original Message-----|From: .+)\s*\n/)[0];
}

function sendConfirmation_(email) {
  const meeting = getUpcomingMeeting_();
  GmailApp.sendEmail(email, "You're on the BinaryHeart Northwestern list", confirmationText_(email, meeting), {
    name: CONFIG.CHAPTER_NAME,
    replyTo: CONFIG.CHAPTER_ADDRESS,
    htmlBody: confirmationHtml_(email, meeting),
  });
}

/**
 * Run from the editor to preview the confirmation email in your own inbox.
 * The first run also asks for the permission to read the meeting info.
 */
function sendTestConfirmation() {
  CacheService.getScriptCache().remove('meeting');
  const me = Session.getEffectiveUser().getEmail();
  const meeting = getUpcomingMeeting_();
  GmailApp.sendEmail(me, "[Test] You're on the BinaryHeart Northwestern list", confirmationText_(me, meeting), {
    name: CONFIG.CHAPTER_NAME,
    replyTo: CONFIG.CHAPTER_ADDRESS,
    htmlBody: confirmationHtml_('yourname2029@u.northwestern.edu', meeting),
  });
  Logger.log('Sent test to %s. Meeting shown: %s', me, meeting ? meeting.displayDate : 'none (link only)');
}

/** The website's first meeting if it hasn't happened yet (Chicago time), else null. */
function getUpcomingMeeting_() {
  const cache = CacheService.getScriptCache();
  let raw = cache.get('meeting');
  if (!raw) {
    try {
      const res = UrlFetchApp.fetch(CONFIG.MEETING_JSON_URL, { muteHttpExceptions: true });
      if (res.getResponseCode() !== 200) return null;
      raw = res.getContentText();
      cache.put('meeting', raw, 60 * 60);
    } catch (err) {
      console.error('Could not load meeting info:', err);
      return null;
    }
  }
  try {
    const meeting = JSON.parse(raw);
    const today = Utilities.formatDate(new Date(), CONFIG.TIME_ZONE, 'yyyy-MM-dd');
    return meeting.date && today <= meeting.date ? meeting : null;
  } catch (err) {
    return null;
  }
}

function confirmationText_(email, meeting) {
  const lines = [
    `You're on the list! We'll send BinaryHeart Northwestern updates to ${email}.`,
    '',
    `Also join us on Cats on Campus: ${CONFIG.CATS_ON_CAMPUS_URL}`,
    '',
  ];
  if (meeting) {
    lines.push(
      `${meeting.title}: ${CONFIG.FIRST_MEETING_SUBTITLE}`,
      CONFIG.FIRST_MEETING_BLURB,
      `${meeting.displayDate}, ${meeting.time}`,
      `${meeting.locationName}, ${meeting.address}`,
      `Drop in anytime between ${meeting.dropInWindow}. No prior experience required.`,
      '',
    );
  }
  lines.push(
    `When and where we meet: ${CONFIG.JOIN_PAGE_URL}`,
    `Instagram: ${CONFIG.INSTAGRAM_URL}`,
    `Discord: ${CONFIG.DISCORD_URL}`,
    '',
    'Questions? Just reply to this email. Reply "unsubscribe" anytime to be removed.',
    '',
    `– ${CONFIG.CHAPTER_NAME}`,
  );
  return lines.join('\n');
}

/** Styled to match the chapter's other emails (Lexend, BinaryHeart blue/red, NU purple). */
function confirmationHtml_(email, meeting) {
  const font = "font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;";
  const link = 'color: #2F4A70; text-decoration: none; font-weight: 500;';
  const wordmark = '<span style="color: #2F4A70;">Binary</span><span style="color: #FF0040;">Heart</span>';
  const e = escapeHtml_;


  return `
<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<div style="text-align: center; margin: 30px 0;">
  <img src="${CONFIG.LOGO_URL}" alt="BinaryHeart Logo" style="max-width: 115px; height: auto; display: block; margin: 0 auto;">
</div>

<h1 style="${font} color: #333333; text-align: center;"><strong>You're on the ${wordmark} at <span style="color: #4e2a84;">Northwestern</span> list!</strong></h1>

<div style="${font} font-size: 14px; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 0 20px;">

  <p style="margin: 20px 0;">Thanks for joining! We'll send meeting and event updates to <strong>${e(email)}</strong>.</p>
  <p style="margin: 20px 0 0 0; text-align: center;">Also join us on Cats on Campus, Northwestern's club directory:</p>
  <p style="margin: 12px 0 20px 0; text-align: center;"><a href="${CONFIG.CATS_ON_CAMPUS_URL}" style="${font} display: inline-block; background-color: #4e2a84; color: #ffffff; text-decoration: none; font-weight: 600; padding: 12px 22px; border-radius: 8px;">Join us on Cats on Campus</a></p>
${meetingBlocksHtml_(meeting, 'red')}

  <div style="background-color: #f6f2fb; border-radius: 8px; padding: 25px; margin: 30px 0; border-left: 4px solid #4e2a84;">
    <h2 style="${font} color: #4e2a84; margin: 0 0 15px 0; font-size: 20px; font-weight: 600;">Questions?</h2>
    <hr style="border: none; height: 1px; background-color: #dee2e6; margin: 15px 0;">
    <p style="margin: 15px 0;">Just reply to this email. We're happy to help!</p>
  </div>

  <div style="background-color: #ffffff; border-radius: 8px; padding: 25px; margin: 30px 0; border: 1px solid #dee2e6; text-align: center;">
    <p style="margin: 15px 0; font-size: 16px;"><strong>Follow us on Instagram <a href="${CONFIG.INSTAGRAM_URL}" style="${link}">${CONFIG.INSTAGRAM_HANDLE}</a> for updates and behind-the-scenes content!</strong></p>
    <p style="margin: 15px 0 5px 0;"><a href="${CONFIG.DISCORD_URL}" style="${font} display: inline-block; background-color: #5865F2; color: #ffffff; text-decoration: none; font-weight: 600; padding: 12px 22px; border-radius: 8px;">Join BinaryHeart's Discord</a></p>
    <p style="margin: 5px 0 0 0; color: #666; font-size: 13px;">Chat with members from every BinaryHeart chapter.</p>
  </div>

  <div style="margin: 30px 0; padding: 20px 0; border-top: 2px solid #dee2e6;">
    <p style="margin: 5px 0;"><strong>See you soon,</strong></p>
    <p style="margin: 5px 0; color: #000000; font-weight: 600;"><strong>${wordmark} at <span style="color: #4e2a84;">Northwestern</span></strong></p>
    <p style="margin: 5px 0; color: #666;"><a href="mailto:${CONFIG.CHAPTER_ADDRESS}" style="${link}">${CONFIG.CHAPTER_ADDRESS}</a></p>
    <p style="margin: 15px 0 0 0; color: #999; font-size: 12px;">Don't want these emails? Reply "unsubscribe" and we'll remove you.</p>
  </div>

</div>`;
}

/**
 * First-meeting box (while it's upcoming) plus the "See meeting times" button.
 * Shared by both emails. accent picks the meeting box color so it never sits
 * right under another red box.
 */
function meetingBlocksHtml_(meeting, accent) {
  const c = accent === 'blue'
    ? { bg: '#f0f8ff', line: '#2F4A70' }
    : { bg: '#fff5f5', line: '#FF0040' };
  const font = "font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;";
  const link = 'color: #2F4A70; text-decoration: none; font-weight: 500;';
  const e = escapeHtml_;
  const meetingSection = meeting ? `
    <div style="background-color: ${c.bg}; border-radius: 8px; padding: 25px; margin: 30px 0; border-left: 4px solid ${c.line};">
      <h2 style="${font} color: ${c.line}; margin: 0 0 15px 0; font-size: 20px; font-weight: 600;">${e(meeting.title)}</h2>
      <hr style="border: none; height: 1px; background-color: #dee2e6; margin: 15px 0;">
      <p style="margin: 15px 0;"><strong>${e(CONFIG.FIRST_MEETING_SUBTITLE)}</strong></p>
      <p style="margin: 15px 0;">${e(CONFIG.FIRST_MEETING_BLURB)}</p>
      <p style="margin: 15px 0;">
        <strong>When:</strong> ${e(meeting.displayDate)}, ${e(meeting.time)}<br>
        <strong>Where:</strong> ${e(meeting.locationName)}, <a href="${e(meeting.mapUrl)}" style="${link}">${e(meeting.address)}</a>
      </p>
      <p style="margin: 15px 0;">Drop in anytime between ${e(meeting.dropInWindow)}. No prior experience required.</p>
    </div>` : '';

  return `${meetingSection}
  <div style="background-color: #f0f8ff; border-radius: 8px; padding: 25px; margin: 30px 0; border-left: 4px solid #2F4A70;">
    <h2 style="${font} color: #2F4A70; margin: 0 0 15px 0; font-size: 20px; font-weight: 600;">When We Meet</h2>
    <hr style="border: none; height: 1px; background-color: #dee2e6; margin: 15px 0;">
    <p style="margin: 15px 0;">Our latest meeting times and directions to the BinaryHeart Space are always on our website.</p>
    <p style="margin: 20px 0 5px 0;"><a href="${CONFIG.JOIN_PAGE_URL}" style="${font} display: inline-block; background-color: #FF0040; color: #ffffff; text-decoration: none; font-weight: 600; padding: 12px 22px; border-radius: 8px;">See meeting times</a></p>
  </div>
`;
}

/** Same look as the confirmation: asks people who emailed from a personal address for their Northwestern one. */
function needsNuEmailHtml_(meeting) {
  const font = "font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;";
  const link = 'color: #2F4A70; text-decoration: none; font-weight: 500;';
  const wordmark = '<span style="color: #2F4A70;">Binary</span><span style="color: #FF0040;">Heart</span>';
  return `
<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<div style="text-align: center; margin: 30px 0;">
  <img src="${CONFIG.LOGO_URL}" alt="BinaryHeart Logo" style="max-width: 115px; height: auto; display: block; margin: 0 auto;">
</div>

<h1 style="${font} color: #333333; text-align: center;"><strong>Thanks for joining ${wordmark} at <span style="color: #4e2a84;">Northwestern</span>!</strong></h1>

<div style="${font} font-size: 14px; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 0 20px;">

  <div style="background-color: #f6f2fb; border-radius: 8px; padding: 25px; margin: 30px 0; border-left: 4px solid #4e2a84;">
    <h2 style="${font} color: #4e2a84; margin: 0 0 15px 0; font-size: 20px; font-weight: 600;">One Quick Thing</h2>
    <hr style="border: none; height: 1px; background-color: #dee2e6; margin: 15px 0;">
    <p style="margin: 15px 0;"><strong>Reply to this email with your @u.northwestern.edu address</strong> so we can add you to our Cats on Campus page too. Northwestern only lets us add Northwestern emails.</p>
    <p style="margin: 15px 0;">That's it. We'll confirm once you're added. Or join Cats on Campus yourself:</p>
    <p style="margin: 15px 0 5px 0; text-align: center;"><a href="${CONFIG.CATS_ON_CAMPUS_URL}" style="${font} display: inline-block; background-color: #4e2a84; color: #ffffff; text-decoration: none; font-weight: 600; padding: 12px 22px; border-radius: 8px;">Join us on Cats on Campus</a></p>
  </div>
${meetingBlocksHtml_(meeting, 'red')}

  <div style="background-color: #ffffff; border-radius: 8px; padding: 25px; margin: 30px 0; border: 1px solid #dee2e6; text-align: center;">
    <p style="margin: 15px 0; font-size: 16px;"><strong>Follow us on Instagram <a href="${CONFIG.INSTAGRAM_URL}" style="${link}">${CONFIG.INSTAGRAM_HANDLE}</a> for updates and behind-the-scenes content!</strong></p>
    <p style="margin: 15px 0 5px 0;"><a href="${CONFIG.DISCORD_URL}" style="${font} display: inline-block; background-color: #5865F2; color: #ffffff; text-decoration: none; font-weight: 600; padding: 12px 22px; border-radius: 8px;">Join BinaryHeart's Discord</a></p>
    <p style="margin: 5px 0 0 0; color: #666; font-size: 13px;">Chat with members from every BinaryHeart chapter.</p>
  </div>

  <div style="margin: 30px 0; padding: 20px 0; border-top: 2px solid #dee2e6;">
    <p style="margin: 5px 0;"><strong>Thanks,</strong></p>
    <p style="margin: 5px 0; color: #000000; font-weight: 600;"><strong>${wordmark} at <span style="color: #4e2a84;">Northwestern</span></strong></p>
    <p style="margin: 5px 0; color: #666;"><a href="mailto:${CONFIG.CHAPTER_ADDRESS}" style="${link}">${CONFIG.CHAPTER_ADDRESS}</a></p>
  </div>

</div>`;
}

function escapeHtml_(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function needsNuEmailText_(meeting) {
  const lines = [
    'Thanks for joining BinaryHeart at Northwestern!',
    '',
    'One quick thing: reply with your @u.northwestern.edu email so we can add you to our Cats on Campus page too. (Northwestern only lets us add Northwestern emails.)',
    `Or join Cats on Campus yourself: ${CONFIG.CATS_ON_CAMPUS_URL}`,
    '',
  ];
  if (meeting) {
    lines.push(
      `${meeting.title}: ${CONFIG.FIRST_MEETING_SUBTITLE}`,
      CONFIG.FIRST_MEETING_BLURB,
      `${meeting.displayDate}, ${meeting.time}`,
      `${meeting.locationName}, ${meeting.address}`,
      `Drop in anytime between ${meeting.dropInWindow}. No prior experience required.`,
      '',
    );
  }
  lines.push(`When and where we meet: ${CONFIG.JOIN_PAGE_URL}`, `Discord: ${CONFIG.DISCORD_URL}`, '', `– ${CONFIG.CHAPTER_NAME}`);
  return lines.join('\n');
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
