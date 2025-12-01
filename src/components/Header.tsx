import { useState, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ChapterDropdown from './ChapterDropdown';
import BinaryHeartText from './BinaryHeartText';
import chaptersData from '../data/chapters.json';
import type { ChaptersData } from '../types/chapters';
import { getCurrentChapterInfo, getHomeLink, getNavLink, setPreferredChapter } from '../utils/urlHelpers';
import { BRAND_COLORS } from '../utils/brandColors';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const chapters = chaptersData as ChaptersData;

  // Extract current chapter and page from URL
  const { currentChapter, currentPage, currentChapterIcon } = useMemo(
    () => getCurrentChapterInfo(location.pathname, chapters),
    [location.pathname, chapters]
  );

  // Store preferred chapter whenever we're on a chapter page
  // Don't clear preference when on national-only pages (FAQ, Request)
  useEffect(() => {
    if (currentChapter) {
      // On a chapter page - store the preference
      setPreferredChapter(currentChapter);
    } else {
      // On a national page - only clear if it's a "real" national page, not FAQ/Request
      const isNationalOnlyPage = currentPage === 'faq' || currentPage === 'request';
      if (!isNationalOnlyPage) {
        setPreferredChapter('');
      }
    }
  }, [currentChapter, currentPage]);

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo & Brand */}
        <div className="flex lg:flex-1">
          <Link to={getHomeLink(currentChapter)} className="-m-1.5 p-1.5">
            <span className="sr-only">BinaryHeart</span>
            <img
              className="h-8 w-auto"
              src={currentChapterIcon}
              alt="BinaryHeart Logo"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link to={getNavLink(currentChapter, 'about')} className="text-sm/6 font-semibold text-gray-900">
            About
          </Link>
          <Link to={getNavLink(currentChapter, 'contact')} className="text-sm/6 font-semibold text-gray-900">
            Contact
          </Link>
          <ChapterDropdown currentChapter={currentChapter} currentPage={currentPage} currentChapterIcon={currentChapterIcon} />
          <Link to="/faq" className="text-sm/6 font-semibold text-gray-900">
            FAQs
          </Link>
          <Link to="/request" className="text-sm/6 font-semibold text-gray-900">
            Request Device
          </Link>
        </div>

        {/* CTA buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
          <Link
            to={getNavLink(currentChapter, 'join')}
            className={`rounded-full ${BRAND_COLORS.BINARY_BG} px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
          >
            Join Us
          </Link>
          <Link
            to={getNavLink(currentChapter, 'donate')}
            className={`rounded-full ${BRAND_COLORS.HEART_BG} px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600`}
          >
            Donate
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-black/20"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to={getHomeLink(currentChapter)} className="-m-1.5 p-1.5 flex items-center gap-2">
                <span className="text-xl font-semibold">
                  <BinaryHeartText />
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    to={getNavLink(currentChapter, 'about')}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    to={getNavLink(currentChapter, 'contact')}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <ChapterDropdown mobile currentChapter={currentChapter} currentPage={currentPage} currentChapterIcon={currentChapterIcon} onItemClick={() => setMobileMenuOpen(false)} />
                  <Link
                    to="/faq"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FAQs
                  </Link>
                  <Link
                    to="/request"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Request Device
                  </Link>
                </div>
                <div className="py-6 space-y-2">
                  <Link
                    to={getNavLink(currentChapter, 'join')}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Join Us
                  </Link>
                  <Link
                    to={getNavLink(currentChapter, 'donate')}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Donate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
