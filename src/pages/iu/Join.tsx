import { useState } from 'react';
import BinaryHeartText from '../../components/BinaryHeartText';
import DepartmentCard from '../../components/DepartmentCard';
import { IU_COLORS } from '../../utils/brandColors';
import type { Department } from '../../types/departments';

// Department icons
const departmentIcons: Record<string, React.ReactNode> = {
  inbound: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  ),
  internal: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
  outbound: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  ),
};

// Define departments with new structure
const departments: Department[] = [
  {
    id: 'inbound',
    name: 'Inbound Logistics',
    description: 'Collection and Financial Acquisition',
    icon: departmentIcons.inbound,
    responsibilities: [
      'Donation Acquisition: Regular business outreach, securing drop-off times',
      'Inbound Logistics: Focus on collecting computers',
      'Financial Flows: Maintaining consistent financial flows and discretionary funding',
      'Fundraising: Procuring donors, corporate sponsors, and fundraising methods',
    ],
    requiresApplication: false,
    learnMoreContent: {
      kpi: 'Tech Collected (Number of Devices) & Money Raised',
      projects: [
        'Corporate Donor Pipeline: Developing strategy to onboard new large-scale corporate donors',
        'Dine & Donate: Procurement and execution of fundraisers (including marketing)',
        'Large-Scale Drives: Planning, marketing, and execution of major donation drives',
      ],
      skillsYoullGain: 'Partnership development, fundraising strategy, donor relations, financial planning, and event coordination.',
      idealFor: 'Students interested in business development, finance, nonprofit management, or building relationships with corporate partners.',
    },
  },
  {
    id: 'internal',
    name: 'Internal Logistics',
    description: 'Refurbishment and Process Management',
    icon: departmentIcons.internal,
    responsibilities: [
      'Refurbishment Events: Present at 2-hour weekly refurbishment meetings',
      'Internal Logistics: Focus on creating donation-ready computers',
      'Volunteer Management: Communicating hours and tracking attendance',
    ],
    requiresApplication: false,
    learnMoreContent: {
      kpi: 'Devices refurbished/Week',
      projects: [
        'Procedure Documentation: Developing standardized documentation for secure data wiping (NIST standards) and refurbishment',
        'Lab Optimization: Reorganizing the refurbishment space for maximum efficiency',
        'Device Refurbishment: Leading specialized refurbishment projects (e.g., laptop repairs, software installation)',
      ],
      skillsYoullGain: 'Computer hardware expertise, process optimization, volunteer coordination, technical documentation, and quality assurance.',
      idealFor: 'Students interested in technical operations, process improvement, computer science, or hands-on technology work.',
    },
  },
  {
    id: 'outbound',
    name: 'Outbound Logistics',
    description: 'Distribution and Impact Measurement',
    icon: departmentIcons.outbound,
    responsibilities: [
      'Distribution: Focus on distributing computers',
      'Support: Delivering maintenance and service',
      'Impact Measurement: Validating target consumers and conducting follow-ups',
    ],
    requiresApplication: false,
    learnMoreContent: {
      kpi: 'Tech Donated (Number of Distributed Devices) & Attendance (for Outbound-led events)',
      projects: [
        'Communications: Developing marketing materials and monthly newsletter',
        'Event Management: Planning two social events and securing guest speakers/panelists',
        'Targeted Distribution Campaigns: Leading targeted campaigns (e.g., desktop distribution to homeless shelters)',
      ],
      skillsYoullGain: 'Community outreach, impact measurement, event planning, marketing communications, and social impact assessment.',
      idealFor: 'Students interested in nonprofit work, community engagement, marketing, event management, or measuring social impact.',
    },
  },
];

export default function Join() {
  const [expandedDept, setExpandedDept] = useState<string | null>(null);

  const toggleDept = (deptId: string) => {
    setExpandedDept(expandedDept === deptId ? null : deptId);
  };

  return (
    <main className="grow relative z-10">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-10 sm:pb-16 lg:px-8 lg:pt-16">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
              Join <BinaryHeartText /> at IU
            </h1>
            <p className="text-lg sm:text-xl leading-7 sm:leading-8 text-gray-700 mb-8">
              Be part of a community making technology accessible while gaining valuable hands-on experience.
            </p>
            
            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
              <a
                href="#membership-tracks"
                className={`inline-flex items-center justify-center rounded-lg bg-gradient-to-r ${IU_COLORS.GRADIENT_PRIMARY} px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105`}
              >
                Membership Tracks
              </a>
              <a
                href="#departments"
                className={`inline-flex items-center justify-center rounded-lg bg-gradient-to-r ${IU_COLORS.GRADIENT_PRIMARY} px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105`}
              >
                Our Departments
              </a>
              <a
                href="#how-join"
                className={`inline-flex items-center justify-center rounded-lg bg-gradient-to-r ${IU_COLORS.GRADIENT_PRIMARY} px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105`}
              >
                How to Join
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Membership Tracks Section */}
      <div id="membership-tracks" className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Membership Tracks</h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Choose the commitment level that works best for you
            </p>
          </div>

          <div className="mx-auto max-w-5xl grid gap-8 lg:grid-cols-2">
            {/* Committee Members */}
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${IU_COLORS.GRADIENT_PRIMARY} text-white`}>
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Committee Members</h3>
                  <p className={`text-sm font-semibold ${IU_COLORS.TEXT}`}>28–30 hours/semester</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                Operational leadership (3-4 members per department) responsible for developing, executing, and leading all continuous work and high-impact projects.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Core Responsibilities:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <svg className={`h-5 w-5 ${IU_COLORS.TEXT} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Lead 1–2 key high-impact projects per semester</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className={`h-5 w-5 ${IU_COLORS.TEXT} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Manage daily, weekly, and monthly departmental workflow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className={`h-5 w-5 ${IU_COLORS.TEXT} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Attend weekly Committee Meetings (1 hour/week)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className={`h-5 w-5 ${IU_COLORS.TEXT} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Lead Refurbishment Events and Open Houses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className={`h-5 w-5 ${IU_COLORS.TEXT} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Plan and execute 8 General Body Meetings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className={`h-5 w-5 ${IU_COLORS.TEXT} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Delegate tasks and mentor Operating Members</span>
                    </li>
                  </ul>
                </div>

                <div className={`rounded-lg ${IU_COLORS.BG_LIGHT} p-4`}>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Time Breakdown:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• GBMs: 6–8 hours (6–8 meetings × 1 hour)</li>
                    <li>• Committee Meetings: 12 hours (12 meetings × 1 hour)</li>
                    <li>• Operations/Project Work: ~10 hours</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Operations Members */}
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${IU_COLORS.GRADIENT_SECONDARY} text-white`}>
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Operations Members</h3>
                  <p className="text-sm font-semibold text-gray-600">20–22 hours/semester</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                The primary volunteer workforce, contributing to both continuous operations and project-based work within their chosen department.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Core Responsibilities:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Aid assigned department in continuous operations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Attend two 2-hour Open Refurbishment Events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Attend majority of General Body Meetings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Complete tasks assigned by Committee Members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Flexible cross-departmental project support</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Time Breakdown:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• GBMs: 6–8 hours (6–8 meetings × 1 hour)</li>
                    <li>• Refurbishment Events: 4 hours (2 events × 2 hours)</li>
                    <li>• Operations/Project Work: ~10 hours</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Departments Section */}
      <div id="departments" className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Departments</h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Three departments working together to create a seamless supply chain
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-6">
              {departments.map((dept) => (
                <DepartmentCard
                  key={dept.id}
                  name={dept.name}
                  description={dept.description}
                  icon={dept.icon}
                  responsibilities={dept.responsibilities}
                  requiresApplication={dept.requiresApplication}
                  teamId={dept.id}
                  isExpanded={expandedDept === dept.id}
                  onToggle={toggleDept}
                  learnMoreContent={dept.learnMoreContent}
                  colorClasses={IU_COLORS}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How to Join Section */}
      <div id="how-join" className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl mb-4">
                How to Join
              </h2>
              <p className="text-lg text-gray-600">
                Different joining timelines for each membership track
              </p>
            </div>

            <div className="space-y-6">
              {/* Committee Members */}
              <div className={`relative rounded-2xl bg-gradient-to-br ${IU_COLORS.GRADIENT_PRIMARY_90} backdrop-blur-sm p-6 sm:p-8 shadow-xl text-white`}>
                <div className="flex flex-col items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                      Committee Members
                    </h3>
                    <p className="text-white/90 mb-6 text-sm sm:text-base">
                      Committee Member positions are recruited at the end of each semester.
                    </p>
                    <ul className="space-y-3 mb-4 text-sm sm:text-base">
                      <li className="flex items-start gap-2">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Follow our Instagram for recruitment announcements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Apply for your preferred department during recruitment period</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Lead high-impact projects from day one</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Operations Members */}
              <div className={`relative rounded-2xl bg-gradient-to-br ${IU_COLORS.GRADIENT_SECONDARY} backdrop-blur-sm p-6 sm:p-8 shadow-xl text-white`}>
                <div className="flex flex-col items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                      Operations Members
                    </h3>
                    <p className="text-white/90 mb-6 text-sm sm:text-base">
                      Operations Members can join at any point during the semester—we welcome new volunteers year-round!
                    </p>
                    <ul className="space-y-3 mb-4 text-sm sm:text-base">
                      <li className="flex items-start gap-2">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Reach out anytime via Instagram DM or email</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Choose your preferred department</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Start volunteering immediately with flexible commitment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="text-center pt-4">
                <p className="text-gray-600 text-sm sm:text-base">
                  Questions about joining? DM us on Instagram <a href="https://www.instagram.com/binaryheartatiu/" target="_blank" rel="noopener noreferrer" className={`${IU_COLORS.TEXT} underline hover:opacity-80 font-semibold`}>@binaryheartatiu</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* General Body Meeting Schedule */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl mb-4">
                General Body Meeting Schedule (Spring 2026)
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Thursdays, 7-8pm at Hodge Hall/on campus
              </p>
            </div>

            <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 sm:p-8 shadow-lg">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {['1/29', '2/12', '2/26', '3/12', '3/26', '4/9', '4/23', '4/30'].map((date, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center rounded-lg ${IU_COLORS.BG_LIGHT} px-4 py-3 text-center`}
                  >
                    <span className={`text-base sm:text-lg font-semibold ${IU_COLORS.TEXT}`}>
                      {date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl mb-4">
              Ready to Get Involved?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Follow us on Instagram for recruitment updates and to connect with our team
            </p>
            <a
              href="https://www.instagram.com/binaryheartatiu/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-2 sm:gap-3 rounded-xl bg-gradient-to-r ${IU_COLORS.GRADIENT_PRIMARY} px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Follow @binaryheartatiu</span>
              <svg className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
