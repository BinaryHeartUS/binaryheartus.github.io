# NU Mailing List Signup

Collects Northwestern emails for the BinaryHeart NU chapter. The signup page is part of the main site at **binaryheart.org/nu/signup/**, and every signup goes into a **Google Sheet** through a Google Apps Script.

```
            ┌───────────── Web flow ─────────────┐
Phone ──▶  binaryheart.org/nu/signup/ ──▶ Apps Script doPost ──▶ Google Sheet
            └── "Join by email instead" ──▶ nu@binaryheart.org ──▶ Apps Script (every minute) ──┘
```

| Path | What it is |
| --- | --- |
| `../public/nu/signup/index.html` | The signup page. Plain HTML/CSS/JS with no build step; Vite copies it into the site as is |
| `apps-script/Code.gs` | Google Apps Script bound to the Sheet. Saves web signups, scans the inbox for mailto signups, sends confirmations |
| `apps-script/.clasp.json` | Connects this folder to the live script for `clasp push` |
| `redirect/_redirects`, `wrangler.toml` | The `join.binaryheart.org` short link (Cloudflare Pages, redirects only) |

The page posts straight to the Apps Script web app, so that endpoint is public. `doPost` ignores submissions that fill the hidden honeypot field, only accepts Northwestern emails, and allows `CONFIG.MAX_WEB_SIGNUPS_PER_MINUTE` web signups per minute (60 by default). Anything over the cap gets the page's "Join by email" fallback, so real people still get through.

## Signup flows

Every flow ends in the same Sheet and is deduplicated by email.

1. **Web page, one field and one tap.** People type only the part before the @. `@u.northwestern.edu` is added for them, and a full address is also accepted. The page blocks non-Northwestern addresses and catches common typos (`u.northwestern.com` → "Did you mean…?"). It uses `autocomplete="email"`, so iOS/Android keyboards suggest the saved address, and `enterkeyhint="go"`, so the keyboard's Go key submits.
2. **Pre-filled email.** The "Join by email instead" button opens the mail app with the recipient, subject, and body already filled in, so people only tap Send. The Apps Script checks the inbox every minute and adds the sender automatically.
   - If they send from a personal account (common on iPhone, where Mail defaults to iCloud/Gmail), the script saves that address with the note *Needs Northwestern email* and replies once to ask for their Northwestern email. When they reply, their Northwestern address is picked up from the reply and added.
   - Direct mailto link for GroupMe, Instagram, and email:
     `mailto:nu@binaryheart.org?subject=Join%20the%20BinaryHeart%20NU%20mailing%20list&body=Hi%20BinaryHeart!%20Please%20add%20me%20to%20the%20Northwestern%20chapter%20mailing%20list.`
3. **Automatic fallback.** If the web path fails (Apps Script down, no signal at tabling), the page shows a **Join by email** button with the person's address already in the body, so nobody is lost.
4. **Tabling kiosk.** Open `…/?kiosk` on a chapter iPad or phone. After each signup the page resets in 4 seconds for the next person, doesn't remember anyone on the device, hides the mailto option, and records the source as `tabling`.
5. **Returning visitors.** The page remembers the last signup on that device and shows "You're already on the list" instead of the form.

### Links for each channel

Add `?src=` so the Sheet shows where each signup came from:

`join.binaryheart.org/nu` is a short link that redirects to `binaryheart.org/nu/signup/` and keeps the `?src=` part, so either works.

| Channel | Link |
| --- | --- |
| Flyers (QR code) | `https://join.binaryheart.org/nu?src=flyer` |
| Instagram bio / story link | `https://join.binaryheart.org/nu?src=instagram` |
| GroupMe | `https://join.binaryheart.org/nu?src=groupme` |
| Email blasts | `https://join.binaryheart.org/nu?src=email` |
| Tabling iPad | `https://join.binaryheart.org/nu?kiosk` |
| Main website (already linked from `/nu/join`) | `/nu/signup/?src=website` |

### iPhone-native options (no app needed)

- **QR code on flyers.** The iPhone Camera reads it with no app. Point it at the `?src=flyer` link.
- **NFC sticker at the table.** Write the `?src=tabling` URL to an NTAG213 sticker (about $0.50) with any NFC writer app. iPhone XS and newer read NFC tags in the background, so people just hold their phone near the sticker and tap the notification.
- **"Scan to email" QR.** A QR code that encodes the `mailto:` link above opens a ready-to-send email straight from the Camera app. It's good for people who won't type anything.
- **AirDrop at tabling.** AirDrop the link from a chapter phone, and it opens in Safari automatically.

App Clips could run the flow without opening Safari, but they need a published App Store app, which is overkill for collecting emails.

## Setup (one time, about 15 minutes)

### 1. Google Sheet + Apps Script

1. Sign in as the **chapter Gmail account** (the one that receives mail for `nu@binaryheart.org`). The script reads that inbox, so it must run as this account.
2. Create a new Google Sheet, e.g. *BinaryHeart NU Mailing List*.
3. **Extensions → Apps Script**, delete the placeholder code, and paste in `apps-script/Code.gs`. Save.
4. Pick `setup` in the function dropdown and click **Run**. Approve the permissions (Sheets, Gmail, triggers). This creates the `Signups` tab with headers, creates the Gmail label *Mailing List Signup*, and installs a trigger that checks the inbox every minute.
5. **Deploy → New deployment → Web app**, Execute as **Me**, Who has access **Anyone**. Copy the web app URL (ends in `/exec`) into `APPS_SCRIPT_URL` near the top of the script in `public/nu/signup/index.html`.

> If `nu@binaryheart.org` is a Google Group or alias that forwards to a personal Gmail, run the script from whichever account actually receives the mail.

### 2. The page

Nothing to set up: the page ships with the main site and deploys on every merge to `main`.

### 3. Short link (optional)

`join.binaryheart.org` is a Cloudflare Pages project (`binaryheart-nu-join`, on the `admin@binaryheart.org` account) that only serves `redirect/_redirects`. To change it, edit that file and run `npx wrangler pages deploy --branch main` from this `signup/` directory. The DNS record is a `CNAME` from `join` to `binaryheart-nu-join.pages.dev`.

### 4. Optional tweaks

- **Buttons after signup.** `CATS_ON_CAMPUS_URL` near the top of the script in `index.html` sets the purple Cats on Campus button (clear it to hide the button). The Instagram and Discord buttons are plain links in the `#next` section.
- **Discord.** The Discord invite is the national BinaryHeart server. It's in `index.html`, `CONFIG.DISCORD_URL` in `Code.gs`, and `DISCORD_URL` in `src/pages/nu/Join.tsx`.
- **Confirmation emails.** `CONFIG.SEND_CONFIRMATION` in `Code.gs` (on by default). The "you're on the list" email is styled like the chapter's other emails and helps people catch typos. It shows the first meeting from `src/data/chapters/nu/firstMeeting.json` (the same file `/nu/join` uses) until that date passes, and always links to `/nu/join` for current meeting times. Run `sendTestConfirmation` in the Apps Script editor to preview it in your inbox.
- **Subject line.** If you change `MAILTO_SUBJECT` in `index.html`, change `CONFIG.MAILTO_SUBJECT` in `Code.gs` to match. The inbox scan searches for that subject.

## Updating the Apps Script

`apps-script/` is connected to the live script with [clasp](https://github.com/google/clasp) (`.clasp.json` holds the script ID). One-time setup on a new computer: turn on the Apps Script API at https://script.google.com/home/usersettings, then run `npx @google/clasp login` and sign in as `nu@binaryheart.org`.

After changing `Code.gs`, from `signup/apps-script/`:

```bash
npx @google/clasp push -f
npx @google/clasp update-deployment AKfycby4E0zi8MbhMewZhH4bXmc-Nu2KlNaJNv6AVY8hXuwS1ht1Liu94FLv_hcWx0gh7pF7pQ -d "BinaryHeart Northwestern Chapter Mailing List Sign-Up"
```

The first command uploads the code (the 1-minute inbox check uses it right away). The second points the web app at the new version while keeping its URL, so the page needs no change. If a change needs new permissions, run `sendTestConfirmation` once in the editor to approve them.

Without clasp: paste `Code.gs` into the editor, save, then **Deploy → Manage deployments → ✏️ → New version → Deploy**.

## Testing after setup

1. Open the page and submit your own Northwestern email. Within seconds a row appears in the Sheet with Method `web`.
2. Submit the same email again. The page says "already on the list" and no new row is added.
3. Tap **Join by email instead** and send it. Within a minute or two a row appears with Method `email`, and the thread gets the *Mailing List Signup* label. To skip the wait, run `processMailtoSignups` by hand in Apps Script.

## Exporting for the real mailing list

Later, filter the Sheet to `Northwestern = TRUE` and copy the Email column into Cats on Campus, Google Groups, Mailchimp, etc. Rows marked *Needs Northwestern email* are people who haven't sent their Northwestern address yet.
