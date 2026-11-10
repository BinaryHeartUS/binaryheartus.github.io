import type { DonateFormData, DonateFormFieldIds, DonateFormSubmitInfo } from '../../types/forms';
import { submitDonateFormToGoogle } from '../../utils/googleForms';

const SALESFORCE = {
  endpoint: 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Di80000044X6m',
  orgId: '00Di80000044X6m',
  chapter: 'NT',
  fieldIds: {
    chapter: '00Ni800000Gdyr9',
    donationContents: '00Ni800000GdyrA',
    additionalNotes: '00Ni800000Gdyr8',
    heardAbout: '00Ni800000GdyrC',
    fillSeconds: '00Ni800000GdyrB',
  },
};

function submitToSalesforce(data: DonateFormData, info: DonateFormSubmitInfo) {
  const body = new URLSearchParams({
    oid: SALESFORCE.orgId,
    retURL: `${window.location.origin}/`,
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    phone: data.phone,
    company: 'Individual donor',
    lead_source: 'Web',
    [SALESFORCE.fieldIds.chapter]: SALESFORCE.chapter,
    [SALESFORCE.fieldIds.donationContents]: data.donationContents,
    [SALESFORCE.fieldIds.additionalNotes]: data.additionalNotes,
    [SALESFORCE.fieldIds.heardAbout]: data.heardAbout,
    [SALESFORCE.fieldIds.fillSeconds]: String(info.secondsToFill),
  });

  return fetch(SALESFORCE.endpoint, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body.toString(),
  });
}

export function makeNtDonateSubmit(formUrl: string, fieldIds: DonateFormFieldIds) {
  return async (data: DonateFormData, info: DonateFormSubmitInfo) => {
    const results = await Promise.allSettled([
      submitDonateFormToGoogle(formUrl, fieldIds, data),
      submitToSalesforce(data, info),
    ]);
    results
      .filter((r): r is PromiseRejectedResult => r.status === 'rejected')
      .forEach(r => console.error('Error submitting form:', r.reason));
    if (!results.some(r => r.status === 'fulfilled')) {
      throw new Error('Submission failed');
    }
  };
}
