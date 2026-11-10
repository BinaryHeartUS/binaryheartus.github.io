export interface DonateFormFieldIds {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  donationContents: string;
  additionalNotes: string;
  heardAbout?: string;
}

export interface DonateFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  donationContents: string;
  additionalNotes: string;
  heardAbout: string;
}

export interface DonateFormSubmitInfo {
  secondsToFill: number;
}
