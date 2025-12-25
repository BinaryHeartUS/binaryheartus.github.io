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

// Track if we've initialized chapter measurement IDs
let isInitialized = false;

/**
 * Initialize all chapter-specific measurement IDs with gtag
 * This should be called once when the app loads
 */
export function initializeAnalytics() {
  if (isInitialized || typeof window.gtag !== 'function') return;
  
  // Initialize each chapter measurement ID
  Object.values(chapterMeasurementIds).forEach(measurementId => {
    window.gtag!('config', measurementId, {
      send_page_view: false
    });
  });
  
  isInitialized = true;
}

/**
 * Extract chapter slug from URL path
 * @param pathname - The URL pathname (e.g., '/iu/about')
 * @returns Chapter slug (e.g., 'iu') or null if not a chapter page
 */
export function getChapterFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/([^\/]+)/);
  if (!match) return null;
  
  const slug = match[1];
  
  // Return null if it's a national page
  const nationalPages = ['about', 'contact', 'faq', 'donate', 'request', 'join'];
  if (nationalPages.includes(slug)) return null;
  
  return slug;
}

/**
 * Get all measurement IDs that should receive tracking data for a given path
 * @param pathname - The URL pathname
 * @returns Array of measurement IDs to track
 */
export function getMeasurementIds(pathname: string): string[] {
  const ids: string[] = [chaptersData.national.measurementId];
  
  const chapter = getChapterFromPath(pathname);
  if (chapter && chapterMeasurementIds[chapter]) {
    ids.push(chapterMeasurementIds[chapter]);
  }
  
  return ids;
}
