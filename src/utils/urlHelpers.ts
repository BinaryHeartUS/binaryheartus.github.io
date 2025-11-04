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
