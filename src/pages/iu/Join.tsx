import { useMemo } from 'react';
import BinaryHeartText from '../../components/BinaryHeartText';
import { IU_COLORS } from '../../utils/brandColors';
import gbmData from '../../data/chapters/iu/generalBodyMeetings.json';

// Operational area icons
const areaIcons: Record<string, React.ReactNode> = {
  inbound: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  ),
  internal: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
  outbound: (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  ),
};

// Operational areas data
const operationalAreas = [
  {
    id: 'inbound',
    name: 'Inbound Logistics',
    description: 'Device Collection and Financial Acquisition',
    icon: areaIcons.inbound,
    idealFor: 'Students interested in business development, sales, nonprofit management, or building relationships with corporate partners.',
    exampleProjects: [
      'Community Collection Events: Organize donation drives in collaboration with local organizations like farmers markets or libraries',
      'Corporate Donor Pipeline: Develop strategy to acquire local businesses as donors of technology or funds',
      'Kirkwood Fundraiser: Organize a fundraiser with businesses on Kirkwood to raise awareness and funds for our organization, with the business that converts the most donations receiving good PR and a portfion of winnings',
    ],
  },
  {
    id: 'internal',
    name: 'Internal Logistics',
    description: 'Refurbishment and Process Management',
    icon: areaIcons.internal,
    idealFor: 'Students interested in technical operations, process improvement, computer science, or hands-on technology work.',
    exampleProjects: [
      'Procedure Documentation: Develop standardized refurbishment documentation',
      'Lab Optimization: Reorganize refurbishment space for efficiency',
      'Device Refurbishment: Lead specialized repair projects',
    ],
  },
  {
    id: 'outbound',
    name: 'Outbound Logistics',
    description: 'Distribution and Impact Measurement',
    icon: areaIcons.outbound,
    idealFor: 'Students interested in nonprofit work, community engagement, marketing, event management, or measuring social impact.',
    exampleProjects: [
      'Communications: Develop marketing materials and newsletters',
      'Event Management: Plan social events and secure speakers',
      'Distribution Campaigns: Lead targeted distribution efforts',
    ],
  },
];

export default function Join() {
  // Calculate next meeting
  const nextMeeting = useMemo(() => {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0]; // Get YYYY-MM-DD format
    
    for (const meeting of gbmData.meetings) {
      // Compare date strings directly to avoid timezone issues
      if (meeting.date >= todayStr) {
        return meeting;
      }
    }
    return null;
  }, []);

  return (
    <main className="grow relative z-10">
      {/* Global gradient blobs for all sections */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Blob for Operational Areas section */}
        <div className="absolute left-[calc(50%-20rem)] top-[100vh] aspect-[1155/678] w-[50rem] -translate-x-1/2 rotate-[15deg] bg-gradient-to-tr from-[#9a0202]/20 to-[#c41e1e]/20 opacity-70 blur-3xl"></div>
        
        {/* Blob for Responsibilities section */}
        <div className="absolute right-[calc(50%-15rem)] top-[220vh] aspect-[1155/678] w-[45rem] translate-x-1/2 rotate-[-25deg] bg-gradient-to-tr from-[#808080]/20 to-[#a0a0a0]/20 opacity-70 blur-3xl"></div>
        
        {/* Blob for GBM Schedule section - right side */}
        <div className="absolute left-[calc(50%+10rem)] top-[340vh] aspect-[1155/678] w-[40rem] -translate-x-1/2 rotate-[40deg] bg-gradient-to-tr from-[#9a0202]/20 to-[#808080]/20 opacity-70 blur-3xl"></div>
        
        {/* Blob for GBM Schedule section - center left */}
        <div className="absolute left-[calc(50%-25rem)] top-[350vh] aspect-[1155/678] w-[38rem] -translate-x-1/2 rotate-[-20deg] bg-gradient-to-tr from-[#808080]/20 to-[#9a0202]/20 opacity-70 blur-3xl"></div>
      </div>
      
      {/* First Section: Operations Manager Expectations */}
      <div className="relative isolate overflow-hidden h-screen flex flex-col items-center justify-center py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex-1 flex items-center">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4">
              Join <BinaryHeartText /> at Indiana University as an Operations Manager!
            </h1>
            <p className="text-base sm:text-lg leading-6 sm:leading-7 text-gray-700 mb-3">
              Take part in the processes that power our donation pipeline by helping collect, process, or distribute technology. Learn about our different operational areas below, and how you can get involved!
            </p>
            <p className="text-sm sm:text-base text-gray-600 italic">
              You aren't applying for a specific area—you'll have the chance to work on any project we offer across all operational areas!
            </p>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="flex-shrink-0 flex flex-col items-center gap-2 pb-4" style={{ animation: 'bounce 2s infinite' }}>
          <span className="text-sm text-gray-500 font-medium">Scroll to learn more</span>
          <svg 
            className={`h-6 w-6 ${IU_COLORS.TEXT}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="2" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </div>

      {/* Second Section: Operational Areas */}
      <div className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Operational Areas</h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Three areas working together to create a seamless technology donation supply chain
            </p>
          </div>

          <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-3">
            {operationalAreas.map((area) => (
              <div key={area.id} className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 sm:p-8 shadow-lg ring-1 ring-gray-900/5">
                <div className="flex flex-col items-center text-center">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${IU_COLORS.GRADIENT_PRIMARY} text-white mb-4`}>
                    {area.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{area.name}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-6">{area.description}</p>
                  
                  <div className="w-full text-left space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Ideal For:</h4>
                      <p className="text-sm text-gray-600">{area.idealFor}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Example Projects:</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {area.exampleProjects.map((project, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className={`${IU_COLORS.TEXT} flex-shrink-0`}>•</span>
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Third Section: Recruitment */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                How to Get Involved
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4">
                At the start of every semester, BHIU offers a volunteer recruitment schedule to onboard a large number of volunteers at once. However, if you missed it, no worries! We offer recruitment all year round. Follow the steps below to get involved!
              </p>
              <p className={`text-base sm:text-lg font-semibold ${IU_COLORS.TEXT}`}>
                Note: We ask our members for 22 hours per semester to contribute to BinaryHeart. The formal breakdown is below!
              </p>
            </div>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className={`relative rounded-2xl bg-gradient-to-br ${IU_COLORS.GRADIENT_PRIMARY_90} backdrop-blur-sm p-6 sm:p-8 shadow-xl text-white`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm font-bold text-xl">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                      Apply During Our Recruitment Cycle
                    </h3>
                    <p className="text-white/90 mb-2 text-sm sm:text-base">
                      Apply during our recruitment cycle at the beginning of each semester. Information regarding the schedule will be available on our Instagram page:
                    </p>
                    <a 
                      href="https://www.instagram.com/binaryheartatiu/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-semibold hover:underline"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      @binaryheartatiu
                    </a>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className={`relative rounded-2xl bg-gradient-to-br ${IU_COLORS.GRADIENT_SECONDARY} backdrop-blur-sm p-6 sm:p-8 shadow-xl text-white`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm font-bold text-xl">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                      Missed Recruitment? No Problem!
                    </h3>
                    <p className="text-white/90 mb-4 text-sm sm:text-base">
                      If you missed our recruitment cycle, fill out this survey and send an email to <a href="mailto:iu@binaryheart.org" className="underline font-semibold hover:opacity-80">iu@binaryheart.org</a>—we will get back to you with a time to chat!
                    </p>
                    <a
                      href="https://forms.gle/uATD5UBrR3U9Ch6CA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-white/20 hover:bg-white/30 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                      </svg>
                      Fill Out Survey
                    </a>
                    <p className="text-white/90 mt-3 text-xs sm:text-sm italic">
                      Note: You must complete this step to be formally considered a member of BinaryHeart.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative rounded-2xl bg-white/80 backdrop-blur-sm p-6 sm:p-8 shadow-lg ring-1 ring-gray-900/5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${IU_COLORS.GRADIENT_PRIMARY} text-white font-bold text-xl`}>
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                      Attend General Body Meetings
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Attend any of our General Body Meetings to learn more about the organization, meet the team, and get started on projects!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section: Responsibilities */}
      <div className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Operations Manager Responsibilities
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Collaborate and contribute to a fast-paced, lean operational team pushing to get devices into the hands of people in need.
              </p>
            </div>

            <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 sm:p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What You'll Do:</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Our Directors offer projects during General Body Meetings that you, as an Operations Manager, can contribute to. At most of our General Body Meetings, you can choose which projects you want to work on across the operational areas we have.
                  </p>
                  <ul className="space-y-3 text-sm sm:text-base text-gray-600">
                    <li className="flex items-start gap-2">
                      <svg className={`h-5 w-5 ${IU_COLORS.TEXT} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Choose and complete projects across all operational areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className={`h-5 w-5 ${IU_COLORS.TEXT} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Attend majority of General Body Meetings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className={`h-5 w-5 ${IU_COLORS.TEXT} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Attend two 2-hour Open Refurbishment Events per semester</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className={`h-5 w-5 ${IU_COLORS.TEXT} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Flexible cross-operational-area project support</span>
                    </li>
                  </ul>
                </div>

                <div className={`rounded-lg ${IU_COLORS.BG_LIGHT} p-6`}>
                  <h4 className="font-semibold text-gray-900 mb-3">Time Commitment (20 hours/semester):</h4>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className={`${IU_COLORS.TEXT} flex-shrink-0 font-bold`}>•</span>
                      <span><strong>General Body Meetings:</strong> 6–8 hours (6–8 meetings × 1 hour)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className={`${IU_COLORS.TEXT} flex-shrink-0 font-bold`}>•</span>
                      <span><strong>Refurbishment Events:</strong> 4 hours (2 events × 2 hours)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className={`${IU_COLORS.TEXT} flex-shrink-0 font-bold`}>•</span>
                      <span><strong>Project Work:</strong> ~8–10 hours (flexible based on projects chosen)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* General Body Meeting Schedule */}
      <div className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl mb-4">
                General Body Meeting Schedule ({gbmData.semester})
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                {gbmData.dayOfWeek}, {gbmData.time} at {gbmData.location}
              </p>
            </div>

            <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 sm:p-8 shadow-lg">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {gbmData.meetings.map((meeting, index) => {
                  const isNextMeeting = nextMeeting && meeting.date === nextMeeting.date;
                  return (
                    <div
                      key={index}
                      className={`flex items-center justify-center rounded-lg px-4 py-3 text-center transition-all ${
                        isNextMeeting
                          ? `bg-gradient-to-br ${IU_COLORS.GRADIENT_PRIMARY} text-white shadow-lg ring-2 ring-offset-2 ${IU_COLORS.BG}`
                          : `${IU_COLORS.BG_LIGHT}`
                      }`}
                    >
                      <div>
                        <span className={`text-base sm:text-lg font-semibold ${isNextMeeting ? 'text-white' : IU_COLORS.TEXT}`}>
                          {meeting.displayDate}
                        </span>
                        {isNextMeeting && (
                          <div className="text-xs text-white/90 mt-1">Next Meeting</div>
                        )}
                      </div>
                    </div>
                  );
                })}
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
              Follow us on Instagram or email us for recruitment updates and to connect with our team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
              <a
                href="https://www.instagram.com/binaryheartatiu/"
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl bg-gradient-to-r ${IU_COLORS.GRADIENT_PRIMARY} px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Follow @binaryheartatiu</span>
                <svg className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="/iu/contact"
                className={`group inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl bg-gradient-to-r ${IU_COLORS.GRADIENT_SECONDARY} px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>Contact Us</span>
                <svg className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
