/**
 * Chapter data structure
 */
export interface Chapter {
  name: string;
  shortName?: string;
  url: string;
  icon: string;
}

/**
 * Complete chapters data structure from chapters.json
 */
export interface ChaptersData {
  national: Chapter;
  higherEducation: Chapter[];
  highSchool: Chapter[];
}
