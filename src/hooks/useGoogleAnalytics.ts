import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
 */
export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if gtag is available (it should be loaded from index.html)
    if (typeof window.gtag === 'function') {
      // Send pageview to Google Analytics
      window.gtag('config', 'G-0NMX89D74W', {
        page_path: location.pathname + location.search + location.hash,
      });
    }
  }, [location]);
};
