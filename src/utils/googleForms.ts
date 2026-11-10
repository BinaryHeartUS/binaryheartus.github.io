import type { DonateFormData, DonateFormFieldIds } from '../types/forms';

export function submitDonateFormToGoogle(formUrl: string, fieldIds: DonateFormFieldIds, data: DonateFormData) {
  const formBody = new URLSearchParams({
    [fieldIds.firstName]: data.firstName,
    [fieldIds.lastName]: data.lastName,
    [fieldIds.email]: data.email,
    [fieldIds.phone]: data.phone,
    [fieldIds.donationContents]: data.donationContents,
    [fieldIds.additionalNotes]: data.additionalNotes
  });
  if (fieldIds.heardAbout) {
    formBody.set(fieldIds.heardAbout, data.heardAbout || 'Not answered');
  }

  return fetch(formUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody.toString()
  });
}
