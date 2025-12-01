import chapterStatsData from '../data/chapterStats.json';
import { getAggregateStats, getChapterCount, formatNumber } from '../utils/statsHelpers';

interface StatsGridProps {
  chapterId: string;
  colorClass?: string; // e.g., BRAND_COLORS.HEART_TEXT, BRAND_COLORS.BINARY_TEXT, 'text-blue-600'
  columns?: 3 | 4; // Number of columns in the grid
  community?: string; // Optional community name for subtitle
}

export default function StatsGrid({ 
  chapterId, 
  colorClass = 'text-blue-600',
  columns = 3,
  community
}: StatsGridProps) {
  // Check if this is a request for aggregate national stats
  const isNational = chapterId === 'national' || chapterId === 'aggregate';
  
  let stats;
  let showChapterCount = false;
  
  if (isNational) {
    stats = getAggregateStats();
    showChapterCount = true;
  } else {
    stats = chapterStatsData[chapterId as keyof typeof chapterStatsData];
    if (!stats) {
      console.error(`No stats found for chapter: ${chapterId}`);
      return null;
    }
  }

  const gridCols = columns === 3 ? 'sm:grid-cols-3' : 'grid-cols-2 md:grid-cols-4';
  const chapterCount = getChapterCount();

  return (
    <div className="mx-auto max-w-5xl">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-2">Our Impact</h2>
      {community && (
        <p className="text-lg text-gray-600 text-center mb-12">
          Making a difference in the {community} community
        </p>
      )}
      {!community && <div className="mb-12" />}
      <div className={`grid grid-cols-1 gap-8 ${gridCols}`}>
        <div className="flex flex-col items-center text-center">
          <div className={`text-5xl font-bold ${colorClass} mb-2`}>
            ${isNational ? formatNumber(stats.devicesValue) : stats.devicesValue.toLocaleString()}+
          </div>
          <div className="text-sm text-gray-600">Value of Devices {isNational ? 'Donated' : 'Refurbished'}</div>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className={`text-5xl font-bold ${colorClass} mb-2`}>
            {stats.volunteerCount}+
          </div>
          <div className="text-sm text-gray-600">{isNational ? 'Student Volunteers' : 'Active Student Members'}</div>
        </div>
        {showChapterCount && (
          <div className="flex flex-col items-center text-center">
            <div className={`text-5xl font-bold ${colorClass} mb-2`}>
              {chapterCount}
            </div>
            <div className="text-sm text-gray-600">Active Chapters</div>
          </div>
        )}
        <div className="flex flex-col items-center text-center">
          <div className={`text-5xl font-bold ${colorClass} mb-2`}>
            {isNational ? formatNumber(stats.volunteerHours) : stats.volunteerHours}+
          </div>
          <div className="text-sm text-gray-600">Volunteer Hours</div>
        </div>
      </div>
    </div>
  );
}
