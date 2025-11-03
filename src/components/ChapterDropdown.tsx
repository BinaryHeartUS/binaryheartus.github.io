import { useState } from 'react';
import chaptersData from '../data/chapters.json';

interface Chapter {
  name: string;
  shortName?: string;
  url: string;
  icon: string;
}

interface ChaptersData {
  national: Chapter;
  higherEducation: Chapter[];
  highSchool: Chapter[];
}

interface ChapterDropdownProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

export default function ChapterDropdown({ mobile = false, onItemClick }: ChapterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const chapters = chaptersData as ChaptersData;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  if (mobile) {
    return (
      <div>
        <button
          type="button"
          className="-mx-3 flex w-full items-center justify-between rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
          onClick={handleClick}
        >
          <span className="flex items-center gap-x-2">
            <img src="/assets/images/chapters/national/icon.svg" alt="" className="size-4" />
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
              <a
                href={chapters.national.url}
                className="flex items-center gap-x-3 rounded-lg px-3 py-2 text-base/7 font-medium text-gray-900 hover:bg-gray-50"
                onClick={onItemClick}
              >
                <img src={chapters.national.icon} alt="" className="h-5 w-5" />
                {chapters.national.name}
              </a>
            </div>

            {/* Higher Education */}
            {chapters.higherEducation.length > 0 && (
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">
                  Higher Education
                </p>
                <div className="space-y-1">
                  {chapters.higherEducation.map((chapter) => (
                    <a
                      key={chapter.url}
                      href={chapter.url}
                      className="flex items-center gap-x-3 rounded-lg px-3 py-2 text-base/7 font-medium text-gray-900 hover:bg-gray-50"
                      onClick={onItemClick}
                    >
                      <img src={chapter.icon} alt="" className="h-5 w-5" />
                      {chapter.name}
                    </a>
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
                    <a
                      key={chapter.url}
                      href={chapter.url}
                      className="flex items-center gap-x-3 rounded-lg px-3 py-2 text-base/7 font-medium text-gray-900 hover:bg-gray-50"
                      onClick={onItemClick}
                    >
                      <img src={chapter.icon} alt="" className="h-5 w-5" />
                      {chapter.name}
                    </a>
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
    <div className="relative">
      <button
        type="button"
        className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900"
        onClick={handleClick}
      >
        <img src="/assets/images/chapters/national/icon.svg" alt="" className="size-4" />
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
                <a
                  href={chapters.national.url}
                  className="group flex items-center gap-x-3 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors"
                >
                  <img src={chapters.national.icon} alt="" className="h-5 w-5 flex-none" />
                  <span className="font-medium text-gray-900">{chapters.national.name}</span>
                </a>
              </div>

              {/* Higher Education */}
              {chapters.higherEducation.length > 0 && (
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
                    Higher Education
                  </p>
                  <div className="space-y-1">
                    {chapters.higherEducation.map((chapter) => (
                      <a
                        key={chapter.url}
                        href={chapter.url}
                        className="group flex items-center gap-x-3 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors"
                      >
                        <img src={chapter.icon} alt="" className="h-5 w-5 flex-none" />
                        <span className="font-medium text-gray-900">{chapter.name}</span>
                      </a>
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
                      <a
                        key={chapter.url}
                        href={chapter.url}
                        className="group flex items-center gap-x-3 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors"
                      >
                        <img src={chapter.icon} alt="" className="h-5 w-5 flex-none" />
                        <span className="font-medium text-gray-900">{chapter.name}</span>
                      </a>
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
