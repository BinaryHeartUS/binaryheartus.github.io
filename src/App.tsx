import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ChapterRouter from './components/ChapterRouter';
import { usePageTitle } from './hooks/usePageTitle';
import { useGoogleAnalytics } from './hooks/useGoogleAnalytics';
import { getBackgroundGradients } from './utils/brandColors';
import { getCurrentChapterInfo } from './utils/urlHelpers';
import chaptersData from './data/chapters.json';
import type { ChaptersData } from './types/chapters';

// National pages
import NationalHome from './pages/national/Home';
import NationalAbout from './pages/national/About';
import NationalContact from './pages/national/Contact';
import NationalFAQ from './pages/national/FAQ';
import NationalDonate from './pages/national/Donate';
import NationalRequest from './pages/national/Request';
import NationalJoin from './pages/national/Join';

function AppContent() {
  const location = useLocation();
  const chapters = chaptersData as ChaptersData;
  
  // Update page title based on current route
  usePageTitle();
  
  // Track pageviews with Google Analytics on route changes
  useGoogleAnalytics();

  // Get current chapter slug from pathname using urlHelpers
  const { currentChapter } = useMemo(
    () => getCurrentChapterInfo(location.pathname, chapters),
    [location.pathname, chapters]
  );

  // Get background gradient colors based on current chapter
  const { top, middle } = useMemo(
    () => getBackgroundGradients(currentChapter),
    [currentChapter]
  );

  return (
    <div className="flex flex-col min-h-screen relative isolate overflow-hidden">
      {/* Global background gradients */}
      <div className="absolute inset-x-0 -top-40 z-0 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className={`relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr ${top} opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]`}></div>
      </div>
      <div className="absolute inset-x-0 top-[calc(50%-13rem)] z-0 transform-gpu overflow-hidden blur-3xl sm:top-[calc(50%-30rem)]" aria-hidden="true">
        <div className={`relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr ${middle} opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]`}></div>
      </div>

      <Header />
      <Routes>
        {/* National routes */}
        <Route path="/" element={<NationalHome />} />
        <Route path="/about" element={<NationalAbout />} />
        <Route path="/contact" element={<NationalContact />} />
        <Route path="/faq" element={<NationalFAQ />} /> 
        <Route path="/donate" element={<NationalDonate />} />
        <Route path="/request" element={<NationalRequest />} />
        <Route path="/join" element={<NationalJoin />} />

        {/* Dynamic chapter routes - works for any chapter in chapters.json */}
        <Route path="/:chapter" element={<ChapterRouter />} />
        <Route path="/:chapter/:page" element={<ChapterRouter />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
