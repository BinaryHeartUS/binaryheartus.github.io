import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMeasurementIds } from '../utils/analyticsConfig';

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

/**
 * Custom hook to track pageviews with Google Analytics on route changes
 * Automatically sends pageviews to both the main property and chapter-specific
 * properties based on the current URL path
 */
export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if gtag is available (it should be loaded from index.html)
    if (typeof window.gtag === 'function') {
      const fullPath = location.pathname + location.search + location.hash;
      
      // Get all measurement IDs that should receive this pageview
      const measurementIds = getMeasurementIds(location.pathname);
      
      // Send pageview to each relevant property
      measurementIds.forEach(id => {
        window.gtag!('config', id, {
          page_path: fullPath,
        });
      });
    }
  }, [location]);
};
