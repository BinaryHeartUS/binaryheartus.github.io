import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { getChapterColors } from '../utils/brandColors';
import { getCurrentChapterInfo } from '../utils/urlHelpers';
import chaptersData from '../data/chapters.json';

interface BinaryHeartTextProps {
  className?: string;
  binaryColor?: string;
  heartColor?: string;
}

/**
 * Reusable component for displaying "BinaryHeart" text with proper brand colors
 * Automatically detects the current chapter from the URL and applies chapter-specific colors
 * Binary color = chapter primary, Heart color = chapter secondary
 * Colors can be overridden using binaryColor and heartColor props
 */
export default function BinaryHeartText({ 
  className = '', 
  binaryColor,
  heartColor 
}: BinaryHeartTextProps) {
  const location = useLocation();
  
  const chapterColors = useMemo(() => {
    const { currentChapter } = getCurrentChapterInfo(location.pathname, chaptersData);
    return getChapterColors(currentChapter || 'national');
  }, [location.pathname]);

  const finalBinaryColor = binaryColor || chapterColors.binaryText;
  const finalHeartColor = heartColor || chapterColors.heartText;

  return (
    <>
      <span className={`${finalBinaryColor} ${className}`}>Binary</span>
      <span className={`${finalHeartColor} ${className}`}>Heart</span>
    </>
  );
}
