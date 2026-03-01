import { Link } from 'react-router-dom';
import InfoCard from '../../components/InfoCard';
import WhyJoin from '../../components/WhyJoin';
import BinaryHeartText from '../../components/BinaryHeartText';
import { NORTHWESTERN_COLORS } from '../../utils/brandColors';

export default function Join() {
  return (
    <main className="grow relative z-10">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-10 sm:pb-16 lg:px-8 lg:pt-16">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
              Join <BinaryHeartText /> at Northwestern
            </h1>
            <p className="text-lg sm:text-xl leading-7 sm:leading-8 text-gray-700">
              Be part of a community making technnology accessible while gaining valuable hands-on experience.
            </p>
          </div>
        </div>
      </div>

      {/* Meeting Information - Prominent Section */}
      <div className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className={`relative rounded-2xl bg-gradient-to-br ${NORTHWESTERN_COLORS.GRADIENT_PRIMARY_90} backdrop-blur-sm p-6 sm:p-8 lg:p-12 shadow-xl text-white`}>
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Weekly Meetings</h2>
                <p className="text-base sm:text-lg text-white/90 mb-4 sm:mb-6">
                  Drop-in repair sessions, device testing, and donation preparation
                </p>
              </div>
              
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 mb-6 sm:mb-8">
                <div className="flex flex-col items-center gap-3 rounded-xl bg-white/10 backdrop-blur-sm p-4 sm:p-6">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/20">
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-base sm:text-lg font-bold mb-1">Monday, Wednesday, and Friday</p>
                    <p className="text-sm sm:text-base text-white/90">3:30 PM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 rounded-xl bg-white/10 backdrop-blur-sm p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-base sm:text-lg font-bold mb-1">BinaryHeart Space</p>
                    <a 
                      href="https://maps.app.goo.gl/L545szRTfoJvYsrR7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-white/90 hover:text-white underline"
                    >
                      1910 Orrington Ave, Evanston
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm sm:text-base text-white/90 mb-4">
                  <strong>All skill levels welcome!</strong> No experience necessary—we'll teach you everything you need to know.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who Can Join */}
      <div className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl mb-6 text-center">
              Everyone Is Welcome
            </h2>
            <div className="text-gray-600 space-y-4 text-sm sm:text-base">
              <p>
                BinaryHeart at Northwestern is open to <strong>all students</strong>, regardless of major, year, or technical experience. Whether you're a CS major or studying humanities, there's a place for you here.
              </p>
              <p>
                We welcome students from all backgrounds and experience levels—from complete beginners to tech enthusiasts. Our team includes engineers, designers, business students, and students from every school at Northwestern, all united by a shared commitment to making technology accessible.
              </p>
              <p>
                <strong>No prior experience required.</strong> We'll teach you everything you need to know about computer refurbishment, software installation, and hardware troubleshooting. All you need is enthusiasm and a willingness to learn!
              </p>
            </div>
          </div>
        </div>
      </div>

      <WhyJoin communityName="Evanston and Chicago" />

      {/* What to Expect */}
      <div className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">What to Expect</h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Hands-on learning through practical workshops
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-6">
            <InfoCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                </svg>
              }
              title="Computer Repair & Refurbishment"
              description="Learn to diagnose issues, repair hardware, upgrade components, and restore devices to like-new condition."
              bgColorClass="bg-purple-100"
              iconColorClass="text-purple-600"
            />

            <InfoCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              }
              title="Hardware & Troubleshooting"
              description="Gain hands-on experience with hardware components, system diagnostics, and troubleshooting techniques."
              bgColorClass="bg-blue-100"
              iconColorClass="text-blue-600"
            />

            <InfoCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              }
              title="Software Installation & Optimization"
              description="Install operating systems, configure security settings, and optimize devices for end users."
              bgColorClass="bg-emerald-100"
              iconColorClass="text-emerald-600"
            />

            <InfoCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              }
              title="Device Testing & Quality Assurance"
              description="Test refurbished devices to ensure they meet quality standards before distribution to recipients."
              bgColorClass="bg-rose-100"
              iconColorClass="text-rose-600"
            />

            <InfoCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              }
              title="Donation Preparation"
              description="Prepare devices for distribution and participate in the rewarding process of connecting recipients with technology."
              bgColorClass="bg-amber-100"
              iconColorClass="text-amber-600"
            />
          </div>
        </div>
      </div>

      {/* Get Connected Section */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                Ready to Get Involved?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mt-4">
                Drop in anytime during our open hours—no RSVP needed!
              </p>
            </div>

            <div className="space-y-6">
              {/* Instagram Follow */}
              <div className={`relative rounded-2xl bg-gradient-to-br ${NORTHWESTERN_COLORS.GRADIENT_PRIMARY_90} backdrop-blur-sm p-6 sm:p-8 shadow-xl text-white`}>
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                      Follow Us on Instagram
                    </h3>
                    <p className="text-white/90 mb-6 text-sm sm:text-base">
                      Stay updated with weekly schedules, behind-the-scenes content, and any last-minute changes. Connect with the community and see our impact in action!
                    </p>
                    <a
                      href="https://instagram.com/binaryheartatnu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <span>@binaryheartatnu</span>
                      <svg className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Contact */}
              <div className={`relative rounded-2xl bg-gradient-to-br ${NORTHWESTERN_COLORS.GRADIENT_SECONDARY} backdrop-blur-sm p-6 sm:p-8 shadow-xl text-white`}>
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3">Have Questions?</h3>
                  <p className="text-sm sm:text-base text-white/90 mb-6">
                    Reach out to our team anytime—we're here to help!
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                    <a
                      href="mailto:nu@binaryheart.org"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-gray-900 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <span>nu@binaryheart.org</span>
                    </a>
                    <Link
                      to="/nu/about"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-gray-900 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <span>Meet Our Team</span>
                      <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                    <Link
                      to="/faq"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-gray-900 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <span>View FAQ</span>
                      <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
