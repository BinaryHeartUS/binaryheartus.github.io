import { Link } from 'react-router-dom';
import StatsGrid from '../../components/StatsGrid';
import BinaryHeartText from '../../components/BinaryHeartText';
import { BRAND_COLORS, IU_COLORS } from '../../utils/brandColors';
import FeatureCard from '../../components/FeatureCard';

export default function Home() {

  return (
    <main className="grow relative z-10">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden min-h-screen flex items-center">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          {/* Hero Content - Centered */}
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-8">
              <Link to="/iu/about" className="hidden sm:inline-flex items-center space-x-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-900/10 hover:bg-white transition-colors">
                <img src="/assets/images/chapters/iu/icon.svg" alt="" className="h-5 w-5" />
                <span>Student-Run Electronics Recycling</span>
                <span className={`${BRAND_COLORS.BINARY_TEXT} font-semibold`}>Learn more →</span>
              </Link>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl mb-6">
              <BinaryHeartText /> at Indiana University
            </h1>

            {/* Subheadline */}
            <p className="text-xl leading-8 text-gray-700 mb-10">
              Hoosier students refurbishing technology to bridge the digital divide in Bloomington and beyond.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
              <Link
                to="/iu/join"
                className={`group relative rounded-2xl bg-gradient-to-br ${IU_COLORS.GRADIENT_PRIMARY_90} px-8 py-4 text-base font-semibold text-white shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:scale-105 ${IU_COLORS.GRADIENT_PRIMARY_HOVER}`}
              >
                <span className="relative z-10">Join Our Team</span>
                <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </Link>
              <Link
                to="/iu/donate"
                className={`group relative rounded-2xl bg-gradient-to-br ${IU_COLORS.GRADIENT_SECONDARY} px-8 py-4 text-base font-semibold text-white shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:scale-105 ${IU_COLORS.GRADIENT_SECONDARY_HOVER}`}
              >
                <span className="relative z-10">Donate Equipment</span>
                <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What We Do</h2>
            <p className="mt-4 text-lg text-gray-600">
              Making technology accessible to the Bloomington community
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              <FeatureCard
                title="Refurbishment & Repair"
                description="Diagnose, repair, and upgrade donated computers and electronics with hands-on technical skills."
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                }
                gradientFrom="from-blue-500"
                gradientTo="to-indigo-600"
              />

              <FeatureCard
                title="Data Security"
                description="Ensure complete data sanitization using professional-grade tools and best practices."
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                }
                gradientFrom="from-purple-500"
                gradientTo="to-violet-600"
              />

              <FeatureCard
                title="Distribution"
                description="Deliver refurbished devices to students and families in need throughout the Bloomington community."
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                }
                gradientFrom="from-rose-500"
                gradientTo="to-pink-600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StatsGrid chapterId="iu" colorClass={IU_COLORS.TEXT} columns={3} community="Bloomington" />
        </div>
      </div>

      {/* Meeting Info Section */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-xl ring-1 ring-gray-900/5">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Join Us This Week</h2>
                <p className="text-lg text-gray-600">All IU students welcome—no experience required!</p>
              </div>

              <div className="flex justify-center">
                <Link
                  to="/iu/join"
                  className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${IU_COLORS.GRADIENT_PRIMARY} px-6 py-3 text-base font-semibold text-white shadow-lg ${IU_COLORS.GRADIENT_PRIMARY_HOVER} transition-all duration-200`}
                >
                  <span>Learn More & Join</span>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get Involved Section */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get Involved</h2>
            <p className="mt-4 text-lg text-gray-600">
              Multiple ways to support our mission
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Join as Member */}
              <div className={`relative rounded-2xl bg-gradient-to-br ${IU_COLORS.GRADIENT_PRIMARY_90} backdrop-blur-sm p-8 shadow-xl text-white`}>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Become a Member</h3>
                <p className="text-white/90 mb-6">
                  Join our team of Hoosiers making a difference. Gain hands-on experience while helping your community.
                </p>
                <Link
                  to="/iu/join"
                  className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <span>Join the Team</span>
                  <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>

              {/* Donate Equipment */}
              <div className={`relative rounded-2xl bg-gradient-to-br ${IU_COLORS.GRADIENT_SECONDARY} backdrop-blur-sm p-8 shadow-xl text-white`}>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Donate Equipment</h3>
                <p className="text-white/90 mb-6">
                  Have unused computers or electronics? Your donation helps us provide technology to those in need.
                </p>
                <Link
                  to="/iu/donate"
                  className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <span>Donate Now</span>
                  <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
