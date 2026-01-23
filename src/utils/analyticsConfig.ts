/**
 * Google Analytics configuration for BinaryHeart
 * Dynamically reads measurement IDs from chapters.json
 */

import chaptersData from '../data/chapters.json';

// Build a map of chapter slug to measurement ID
const chapterMeasurementIds: Record<string, string> = {};

// Add higher education chapters
chaptersData.higherEducation.forEach(chapter => {
  const slug = chapter.url.split('/').pop();
  if (slug && chapter.measurementId) {
    chapterMeasurementIds[slug] = chapter.measurementId;
  }
});

// Add high school chapters
chaptersData.highSchool.forEach(chapter => {
  const slug = chapter.url.split('/').pop();
  if (slug && chapter.measurementId) {
    chapterMeasurementIds[slug] = chapter.measurementId;
  }
});

// Get the main (national) measurement ID
export const MAIN_MEASUREMENT_ID = chaptersData.national.measurementId;

/**
 * Extract chapter slug from URL path
 * @param pathname - The URL pathname (e.g., '/iu/about')
 * @returns Chapter slug (e.g., 'iu') or null if not a chapter page
 */
export function getChapterFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/([^/]+)/);
  if (!match) return null;
  
  const slug = match[1];
  
  // Return null if it's a national page
  const nationalPages = ['about', 'contact', 'faq', 'donate', 'request', 'join'];
  if (nationalPages.includes(slug)) return null;
  
  return slug;
}

/**
 * Get the chapter-specific measurement ID for a given path
 * @param pathname - The URL pathname
 * @returns Chapter measurement ID or null if not a chapter page
 */
export function getChapterMeasurementId(pathname: string): string | null {
  const chapter = getChapterFromPath(pathname);
  if (chapter && chapterMeasurementIds[chapter]) {
    return chapterMeasurementIds[chapter];
  }
  return null;
}
