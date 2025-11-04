import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import chaptersData from '../data/chapters.json';
import type { ChaptersData } from '../types/chapters';
import { getCurrentChapterInfo } from '../utils/urlHelpers';

/**
 * Custom hook to update the page title based on current route and chapter
 */
export const usePageTitle = () => {
  const location = useLocation();
  const chapters = chaptersData as ChaptersData;

  useEffect(() => {
    const { currentChapter, currentPage } = getCurrentChapterInfo(location.pathname, chapters);
    
    // Map page names to readable titles
    const pageTitles: { [key: string]: string } = {
      '': 'Home',
      'about': 'About',
      'contact': 'Contact',
      'faq': 'FAQs',
      'donate': 'Donate',
      'request': 'Request Device',
      'join': 'Join Us',
    };

    // Get chapter name if on a chapter page
    let chapterName = '';
    if (currentChapter) {
      const allChapters = [...chapters.higherEducation, ...chapters.highSchool];
      const chapter = allChapters.find(ch => {
        const chapterPath = new URL(ch.url).pathname.split('/').filter(Boolean)[0];
        return chapterPath === currentChapter;
      });
      chapterName = chapter?.shortName || chapter?.name || '';
    }

    // Build the title
    const pageTitle = pageTitles[currentPage] || 'Home';
    const prefix = chapterName ? `${chapterName} - ` : '';
    document.title = `${prefix}${pageTitle} | BinaryHeart`;
  }, [location.pathname, chapters]);
};
