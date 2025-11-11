import type { ChaptersData, Chapter } from '../types/chapters';
import chaptersData from '../data/chapters.json';

const CHAPTER_PREFERENCE_KEY = 'binaryheart_preferred_chapter';

/**
 * Store the user's preferred chapter in sessionStorage (per-session, not persistent)
 * @param chapterSlug - Chapter slug (e.g., "rose-hulman", "purdue") or empty string for national
 */
export const setPreferredChapter = (chapterSlug: string): void => {
  if (chapterSlug) {
    sessionStorage.setItem(CHAPTER_PREFERENCE_KEY, chapterSlug);
  } else {
    sessionStorage.removeItem(CHAPTER_PREFERENCE_KEY);
  }
};

/**
 * Get the user's preferred chapter from sessionStorage
 * @returns Chapter slug or empty string if no preference
 */
export const getPreferredChapter = (): string => {
  return sessionStorage.getItem(CHAPTER_PREFERENCE_KEY) || '';
};

/**
 * Extract relative path from a full URL
 * @param url - Full URL (e.g., "https://binaryheart.org/nu")
 * @returns Relative pathname (e.g., "/nu")
 */
export const getRelativePath = (url: string): string => {
  try {
    const urlObj = new URL(url);
    return urlObj.pathname;
  } catch {
    return url;
  }
};

/**
 * Get all chapters (higher education and high school) as a single array
 * @returns Array of all chapters
 */
export const getAllChapters = (): Chapter[] => {
  const chapters = chaptersData as ChaptersData;
  return [...chapters.higherEducation, ...chapters.highSchool];
};

/**
 * Build a chapter-aware link that preserves the current page
 * @param chapterUrl - Full chapter URL from chapters.json
 * @param currentPage - Current page name (e.g., "about", "contact")
 * @returns Complete path (e.g., "/purdue/about" or "/contact")
 */
export const getChapterLink = (chapterUrl: string, currentPage?: string): string => {
  const chapterPath = getRelativePath(chapterUrl);
  
  // FAQ is always national, so when switching chapters from FAQ, go to chapter home
  if (currentPage === 'faq') {
    // If switching to national, stay on FAQ
    if (chapterPath === '/') {
      return '/faq';
    }
    // If switching to a chapter, go to that chapter's home page
    return chapterPath;
  } else if (currentPage === 'request') {
    // Request page is always national, so when switching chapters from Request, go to chapter home
    if (chapterPath === '/') {
      return '/request';
    }
    // If switching to a chapter, go to that chapter's home page
    return chapterPath;
  }

  // If we're on a specific page (e.g., /purdue/about), navigate to same page in new chapter
  if (currentPage) {
    // Remove trailing slash from chapter path to avoid double slashes
    const cleanPath = chapterPath.endsWith('/') && chapterPath !== '/' 
      ? chapterPath.slice(0, -1) 
      : chapterPath;
    
    // For root path (/), just return the page
    if (cleanPath === '/') {
      return `/${currentPage}`;
    }
    
    return `${cleanPath}/${currentPage}`;
  }
  
  // Otherwise, just go to the chapter's home page
  return chapterPath;
};

/**
 * Get the home link based on current chapter context
 * @param currentChapter - Current chapter slug (e.g., "purdue", "nu") or empty string for national
 * @returns Home path (e.g., "/purdue" or "/")
 */
export const getHomeLink = (currentChapter: string): string => {
  return currentChapter ? `/${currentChapter}` : '/';
};

/**
 * Build a chapter-aware navigation link
 * @param currentChapter - Current chapter slug or empty string for national
 * @param page - Page name (e.g., "about", "contact")
 * @param usePreferredChapter - Whether to use stored chapter preference when on national pages (default: true)
 * @returns Navigation path (e.g., "/purdue/about" or "/about")
 */
export const getNavLink = (currentChapter: string, page: string, usePreferredChapter: boolean = true): string => {
  // If we're on a chapter page, use that chapter
  if (currentChapter) {
    return `/${currentChapter}/${page}`;
  }
  
  // If we're on a national page and should use preference, check for stored chapter
  if (usePreferredChapter) {
    const preferredChapter = getPreferredChapter();
    if (preferredChapter) {
      return `/${preferredChapter}/${page}`;
    }
  }
  
  // Default to national page
  return `/${page}`;
};

/**
 * Extract current chapter information from URL pathname
 * @param pathname - Current URL pathname (from location.pathname)
 * @param chaptersData - Chapters data from chapters.json
 * @returns Object with currentChapter slug, currentPage name, and currentChapterIcon path
 */
export const getCurrentChapterInfo = (
  pathname: string,
  chaptersData: ChaptersData
): {
  currentChapter: string;
  currentPage: string;
  currentChapterIcon: string;
} => {
  const pathParts = pathname.split('/').filter(Boolean);
  
  // If path is empty or starts with a known page, we're on national
  const knownPages = ['about', 'contact', 'faq', 'request', 'join', 'donate'];
  if (pathParts.length === 0 || knownPages.includes(pathParts[0])) {
    return {
      currentChapter: '',
      currentPage: pathParts[0] || '',
      currentChapterIcon: chaptersData.national.icon
    };
  }
  
  // Otherwise, first part is chapter, second part (if exists) is page
  const chapterSlug = pathParts[0];
  
  // Find the chapter in the data using the helper
  const allChapters = getAllChapters();
  const foundChapter = allChapters.find(ch => {
    const chapterPath = new URL(ch.url).pathname.split('/').filter(Boolean)[0];
    return chapterPath === chapterSlug;
  });
  
  return {
    currentChapter: chapterSlug,
    currentPage: pathParts[1] || '',
    currentChapterIcon: foundChapter?.icon || chaptersData.national.icon
  };
};
