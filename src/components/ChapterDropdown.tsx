import { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import chaptersData from '../data/chapters.json';
import type { ChaptersData } from '../types/chapters';
import { getChapterLink } from '../utils/urlHelpers';

interface ChapterDropdownProps {
  mobile?: boolean;
  onItemClick?: () => void;
  currentChapter?: string;
  currentPage?: string;
  currentChapterIcon?: string;
}

export default function ChapterDropdown({ 
  mobile = false, 
  onItemClick,
  currentPage = '',
  currentChapterIcon = '/assets/images/chapters/national/icon.svg'
}: ChapterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const chapters = chaptersData as ChaptersData;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Preload all chapter icons on component mount
  useEffect(() => {
    const imagesToPreload = [
      chapters.national.icon,
      ...chapters.higherEducation.map(ch => ch.icon),
      ...chapters.highSchool.map(ch => ch.icon)
    ];

    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [chapters]);

  // Close dropdown when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (mobile) {
    return (
      <div ref={dropdownRef}>
        <button
          type="button"
          className="-mx-3 flex w-full items-center justify-between rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
          onClick={handleClick}
        >
          <span className="flex items-center gap-x-2">
            <img src={currentChapterIcon} alt="" className="size-4" />
            Chapters
          </span>
          <svg
            className={`h-5 w-5 flex-none transition-transform ${isOpen ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="mt-2 space-y-2 pl-3">
            {/* National */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">
                National
              </p>
              <Link
                to={getChapterLink(chapters.national.url, currentPage)}
                className="flex items-center gap-x-3 rounded-lg px-3 py-2 text-base/7 font-medium text-gray-900 hover:bg-gray-50"
                onClick={onItemClick}
              >
                <img src={chapters.national.icon} alt="" className="h-5 w-5" />
                {chapters.national.name}
              </Link>
            </div>

            {/* Higher Education */}
            {chapters.higherEducation.length > 0 && (
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">
                  Higher Education
                </p>
                <div className="space-y-1">
                  {chapters.higherEducation.map((chapter) => (
                    <Link
                      key={chapter.url}
                      to={getChapterLink(chapter.url, currentPage)}
                      className="flex items-center gap-x-3 rounded-lg px-3 py-2 text-base/7 font-medium text-gray-900 hover:bg-gray-50"
                      onClick={onItemClick}
                    >
                      <img src={chapter.icon} alt="" className="h-5 w-5" />
                      {chapter.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* High School */}
            {chapters.highSchool.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">
                  High School
                </p>
                <div className="space-y-1">
                  {chapters.highSchool.map((chapter) => (
                    <Link
                      key={chapter.url}
                      to={getChapterLink(chapter.url, currentPage)}
                      className="flex items-center gap-x-3 rounded-lg px-3 py-2 text-base/7 font-medium text-gray-900 hover:bg-gray-50"
                      onClick={onItemClick}
                    >
                      <img src={chapter.icon} alt="" className="h-5 w-5" />
                      {chapter.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900"
        onClick={handleClick}
      >
        <img src={currentChapterIcon} alt="" className="size-4" />
        Chapters
        <svg
          className={`h-5 w-5 flex-none text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-1/2 z-10 mt-2 flex w-screen max-w-max -translate-x-1/2">
          <div className="w-64 flex-auto overflow-hidden rounded-lg bg-white/95 backdrop-blur-sm text-sm shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {/* National */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
                  National
                </p>
                <Link
                  to={getChapterLink(chapters.national.url, currentPage)}
                  className="group flex items-center gap-x-3 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors"
                >
                  <img src={chapters.national.icon} alt="" className="h-5 w-5 flex-none" />
                  <span className="font-medium text-gray-900">{chapters.national.name}</span>
                </Link>
              </div>

              {/* Higher Education */}
              {chapters.higherEducation.length > 0 && (
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
                    Higher Education
                  </p>
                  <div className="space-y-1">
                    {chapters.higherEducation.map((chapter) => (
                      <Link
                        key={chapter.url}
                        to={getChapterLink(chapter.url, currentPage)}
                        className="group flex items-center gap-x-3 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors"
                      >
                        <img src={chapter.icon} alt="" className="h-5 w-5 flex-none" />
                        <span className="font-medium text-gray-900">{chapter.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* High School */}
              {chapters.highSchool.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
                    High School
                  </p>
                  <div className="space-y-1">
                    {chapters.highSchool.map((chapter) => (
                      <Link
                        key={chapter.url}
                        to={getChapterLink(chapter.url, currentPage)}
                        className="group flex items-center gap-x-3 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors"
                      >
                        <img src={chapter.icon} alt="" className="h-5 w-5 flex-none" />
                        <span className="font-medium text-gray-900">{chapter.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
