import { Link } from 'react-router-dom';
import InfoCard from '../../components/InfoCard';
import WhyJoin from '../../components/WhyJoin';
import BinaryHeartText from '../../components/BinaryHeartText';
import { PURDUE_COLORS } from '../../utils/brandColors';

export default function Join() {
  return (
    <main className="grow relative z-10">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-10 sm:pb-16 lg:px-8 lg:pt-16">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
              Join <BinaryHeartText /> at Purdue
            </h1>
            <p className="text-lg sm:text-xl leading-7 sm:leading-8 text-gray-700">
              Be part of a community making technology accessible while gaining valuable hands-on experience.
            </p>
          </div>
        </div>
      </div>

      {/* Get Involved CTA */}
      <div className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className={`relative rounded-2xl bg-gradient-to-br ${PURDUE_COLORS.GRADIENT_PRIMARY_90} backdrop-blur-sm p-6 sm:p-8 lg:p-12 shadow-xl text-white`}>
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <svg className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Involved?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6">
                  Contact us to learn more about meeting times and how to join!
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <Link
                    to="/purdue/contact"
                    className={`rounded-xl bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold ${PURDUE_COLORS.TEXT} shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                  >
                    Contact Us
                  </Link>
                  <a
                    href="https://boilerlink.purdue.edu/organization/binaryheart"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-xl bg-gradient-to-r ${PURDUE_COLORS.GRADIENT_SECONDARY} px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-lg ${PURDUE_COLORS.GRADIENT_SECONDARY_HOVER} transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                  >
                    Join on BoilerLink
                  </a>
                </div>
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
                Binary Heart at Purdue is open to <strong>all students</strong>, regardless of major, year, or technical experience. Whether you can build a computer blindfolded or have never touched a screwdriver, there's a place for you here.
              </p>
              <p>
                We welcome students from all engineering disciplines and experience levels. Our team includes computer engineers, mechanical engineers, software engineers, and students from every major—all united by a shared commitment to making technology accessible and giving back to our community.
              </p>
              <p>
                <strong>No prior experience required.</strong> We'll teach you everything you need to know about computer refurbishment, software installation, and hardware troubleshooting. All you need is enthusiasm and a willingness to learn!
              </p>
            </div>
          </div>
        </div>
      </div>

      <WhyJoin communityName="Greater Lafayette" />

      {/* What We Do */}
      <div className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">What We Do</h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Our activities combine hands-on learning with community service
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-6">
            <InfoCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                </svg>
              }
              title="Computer Refurbishment"
              description="Learn to diagnose hardware issues, upgrade components, clean and test systems, and prepare computers for distribution."
              bgColorClass={PURDUE_COLORS.BG_LIGHT}
              iconColorClass={PURDUE_COLORS.TEXT}
            />

            <InfoCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              }
              title="Software Installation & Security"
              description="Install operating systems, set up essential software, configure security settings, and ensure devices are ready to use."
              bgColorClass={PURDUE_COLORS.BG_LIGHT}
              iconColorClass={PURDUE_COLORS.TEXT}
            />

            <InfoCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              }
              title="Device Collection & Distribution"
              description="Organize donation drives, coordinate with community partners, and distribute refurbished technology to those in need."
              bgColorClass={PURDUE_COLORS.BG_LIGHT}
              iconColorClass={PURDUE_COLORS.TEXT}
            />
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl mb-6">Have Questions?</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Reach out to learn more about our chapter, meeting times, and how to get involved!
            </p>
            <Link
              to="/purdue/contact"
              className={`inline-block rounded-xl bg-gradient-to-r ${PURDUE_COLORS.GRADIENT_PRIMARY} px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-lg ${PURDUE_COLORS.GRADIENT_PRIMARY_HOVER} transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
