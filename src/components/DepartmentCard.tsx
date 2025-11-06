import type { ReactNode } from 'react';

interface LearnMoreContent {
  whatYoullDo: string[];
  skillsYoullGain: string;
  idealFor: string;
}

interface DepartmentCardProps {
  name: string;
  description: string;
  icon: ReactNode;
  responsibilities: string[];
  requiresApplication: boolean;
  teamId: string;
  isExpanded: boolean;
  onToggle: (teamId: string) => void;
  learnMoreContent: LearnMoreContent;
  colorClasses: {
    TEXT: string;
    TEXT_HOVER: string;
    GRADIENT_PRIMARY: string;
  };
}

export default function DepartmentCard({
  name,
  description,
  icon,
  responsibilities,
  requiresApplication,
  teamId,
  isExpanded,
  onToggle,
  learnMoreContent,
  colorClasses,
}: DepartmentCardProps) {
  return (
    <div className="relative rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg ring-1 ring-gray-900/5">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${colorClasses.GRADIENT_PRIMARY} text-white`}>
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${
                requiresApplication
                  ? 'bg-rose-50 text-rose-700 ring-rose-600/20'
                  : 'bg-green-50 text-green-700 ring-green-600/20'
              }`}
            >
              {requiresApplication ? 'Application Required' : 'Open to All'}
            </span>
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          <ul className="space-y-2 text-sm text-gray-600">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start gap-2">
                <svg
                  className={`h-5 w-5 ${colorClasses.TEXT} flex-shrink-0 mt-0.5`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  {index === responsibilities.length - 1 && !requiresApplication ? (
                    <strong>{responsibility}</strong>
                  ) : (
                    responsibility
                  )}
                </span>
              </li>
            ))}
          </ul>

          {/* Learn More Button */}
          <button
            onClick={() => onToggle(teamId)}
            className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold ${colorClasses.TEXT_HOVER} transition-colors`}
          >
            <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
            <svg
              className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          {/* Expanded Content */}
          {isExpanded && (
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-4 animate-in slide-in-from-top">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What You'll Do:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {learnMoreContent.whatYoullDo.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className={`${colorClasses.TEXT} mt-1`}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Skills You'll Gain:</h4>
                <p className="text-sm text-gray-600">{learnMoreContent.skillsYoullGain}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Ideal For:</h4>
                <p className="text-sm text-gray-600">{learnMoreContent.idealFor}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
