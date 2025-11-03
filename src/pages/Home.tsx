import { Link } from 'react-router-dom';
import chapterStats from '../data/chapterStats.json';

export default function Home() {
  // Aggregate stats from all chapters
  const aggregateStats = Object.values(chapterStats).reduce(
    (acc, chapter) => ({
      devicesValue: acc.devicesValue + chapter.devicesValue,
      volunteerCount: acc.volunteerCount + chapter.volunteerCount,
      volunteerHours: acc.volunteerHours + chapter.volunteerHours,
    }),
    { devicesValue: 0, volunteerCount: 0, volunteerHours: 0 }
  );

  const chapterCount = Object.keys(chapterStats).length;

  // Format large numbers with K suffix
  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(num % 1000 === 0 ? 0 : 1)}K`;
    }
    return num.toString();
  };

  return (
    <main className="grow relative z-10">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-10 sm:pb-16 lg:px-8 lg:pt-20">
          {/* Hero Content - Centered */}
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-8">
              <Link to="/about" className="inline-flex items-center space-x-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-900/10 hover:bg-white transition-colors">
                <img src="/assets/images/chapters/national/icon.svg" alt="" className="h-5 w-5" />
                <span>Student-Run Electronics Recycling.</span>
                <span className="text-rose-600 font-semibold">Learn more →</span>
              </Link>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl mb-6">
              Empowering Through Technology
            </h1>

            {/* Subheadline */}
            <p className="text-xl leading-8 text-gray-700 mb-10">
              We refurbish donated computers and electronics to bridge the digital divide—one device at a time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
              <Link
                to="/request"
                className="group relative rounded-2xl bg-gradient-to-br from-rose-500/90 to-pink-600/90 px-8 py-4 text-base font-semibold text-white shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:from-rose-500 hover:to-pink-600"
              >
                <span className="relative z-10">Request a Device</span>
                <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </Link>
              <Link
                to="/donate"
                className="group relative rounded-2xl bg-gradient-to-br from-blue-500/90 to-indigo-600/90 px-8 py-4 text-base font-semibold text-white shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:from-blue-500 hover:to-indigo-600"
              >
                <span className="relative z-10">Donate a Device</span>
                <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </Link>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">${formatNumber(aggregateStats.devicesValue)}+</div>
                <div className="text-sm text-gray-600">Value of Devices Donated</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{aggregateStats.volunteerCount}+</div>
                <div className="text-sm text-gray-600">Student Volunteers</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{chapterCount}</div>
                <div className="text-sm text-gray-600">Active Chapters</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{formatNumber(aggregateStats.volunteerHours)}+</div>
                <div className="text-sm text-gray-600">Volunteer Hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our simple process transforms retired technology into opportunities
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Step 1 */}
              <div className="relative text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Collect</h3>
                <p className="text-gray-600">
                  We accept donations of computers, tablets, monitors, and other electronics from individuals and organizations.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Refurbish</h3>
                <p className="text-gray-600">
                  Our student volunteers securely wipe data, repair hardware, and install fresh software to restore devices.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Donate</h3>
                <p className="text-gray-600">
                  Refurbished devices are donated to students, schools, and underserved communities who need them most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that <span className="font-semibold text-gray-900">access to technology is a fundamental right</span> in today's digital age. 
                Our mission is to empower students and communities by providing them with the tools they need to succeed in an increasingly digital world.
              </p>
            </div>
            
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why This Matters</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Students gain access to educational resources and remote learning opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Communities develop crucial digital literacy skills for the modern workforce</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Electronics are kept out of landfills, contributing to environmental sustainability</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Student volunteers gain hands-on experience in technology and community service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Become part of a student-led movement making real impact in your community. Gain hands-on tech experience while helping bridge the digital divide.
            </p>
            <Link
              to="/join"
              className="group relative inline-flex items-center gap-2 rounded-2xl bg-white/60 backdrop-blur-md px-8 py-4 text-lg font-semibold text-gray-900 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:bg-white/80 hover:shadow-2xl hover:scale-105"
            >
              <span className="relative z-10">Get Involved</span>
              <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
