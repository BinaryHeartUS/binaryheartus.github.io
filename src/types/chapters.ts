/**
 * Request form configuration
 */
export interface RequestFormConfig {
  formUrl: string;
  fieldIds: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    organization: string;
    location: string;
    details: string;
  };
}

/**
 * Chapter data structure
 */
export interface Chapter {
  name: string;
  shortName?: string;
  url: string;
  icon: string;
  measurementId?: string;
  latitude?: number;
  longitude?: number;
  requestForm?: RequestFormConfig;
}

/**
 * Complete chapters data structure from chapters.json
 */
export interface ChaptersData {
  national: Chapter;
  higherEducation: Chapter[];
  highSchool: Chapter[];
}
