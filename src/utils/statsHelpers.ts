import chapterStats from '../data/chapterStats.json';

/**
 * Aggregate stats from all chapters
 * @returns Aggregated statistics across all chapters
 */
export const getAggregateStats = () => {
  return Object.values(chapterStats).reduce(
    (acc, chapter) => ({
      devicesValue: acc.devicesValue + chapter.devicesValue,
      volunteerCount: acc.volunteerCount + chapter.volunteerCount,
      volunteerHours: acc.volunteerHours + chapter.volunteerHours,
    }),
    { devicesValue: 0, volunteerCount: 0, volunteerHours: 0 }
  );
};

/**
 * Get the total count of chapters
 * @returns Number of active chapters
 */
export const getChapterCount = () => {
  return Object.keys(chapterStats).length;
};

/**
 * Format large numbers with K suffix for display
 * @param num - Number to format
 * @returns Formatted string (e.g., "1.5K" or "500")
 */
export const formatNumber = (num: number): string => {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(num % 1000 === 0 ? 0 : 1)}K`;
  }
  return num.toString();
};
