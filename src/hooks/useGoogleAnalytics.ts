import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MAIN_MEASUREMENT_ID, getChapterMeasurementId } from '../utils/analyticsConfig';

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Custom hook to track pageviews with Google Analytics on route changes
 * Sends pageviews to main property AND chapter-specific property (if on a chapter page)
 * Disabled on localhost to prevent skewing production data
 */
export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Don't track on localhost
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1') return;
    
    // Check if gtag is available (it should be loaded from index.html)
    if (typeof window.gtag !== 'function') return;
    
    const fullPath = location.pathname + location.search + location.hash;
    const pageData = {
      page_path: fullPath,
      page_location: window.location.href,
      page_title: document.title,
    };
    
    // Always send to main property (national)
    window.gtag('event', 'page_view', {
      ...pageData,
      send_to: MAIN_MEASUREMENT_ID,
    });
    
    // If on a chapter page, also send to chapter-specific property
    const chapterMeasurementId = getChapterMeasurementId(location.pathname);
    if (chapterMeasurementId) {
      window.gtag('event', 'page_view', {
        ...pageData,
        send_to: chapterMeasurementId,
      });
    }
  }, [location]);
};
