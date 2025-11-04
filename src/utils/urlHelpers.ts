import type { ChaptersData } from '../types/chapters';

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
 * Build a chapter-aware link that preserves the current page
 * @param chapterUrl - Full chapter URL from chapters.json
 * @param currentPage - Current page name (e.g., "about", "contact")
 * @returns Complete path (e.g., "/purdue/about" or "/contact")
 */
export const getChapterLink = (chapterUrl: string, currentPage?: string): string => {
  const chapterPath = getRelativePath(chapterUrl);
  
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
  
  // Find the chapter in the data
  const allChapters = [...chaptersData.higherEducation, ...chaptersData.highSchool];
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
