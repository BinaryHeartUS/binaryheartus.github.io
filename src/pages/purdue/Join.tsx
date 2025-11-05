import { Link } from 'react-router-dom';
import FeatureCard from '../../components/FeatureCard';
import InfoCard from '../../components/InfoCard';
import BinaryHeartText from '../../components/BinaryHeartText';

export default function Join() {
  return (
    <main className="grow relative z-10">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-10 sm:pb-16 lg:px-8 lg:pt-16">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Join <BinaryHeartText /> at Purdue
            </h1>
            <p className="text-xl leading-8 text-gray-700">
              Be part of a community making technology accessible while gaining valuable hands-on experience.
            </p>
          </div>
        </div>
      </div>

      {/* Get Involved CTA */}
      <div className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="relative rounded-2xl bg-gradient-to-br from-amber-500/90 to-yellow-600/90 backdrop-blur-sm p-8 sm:p-12 shadow-xl text-white">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4">Ready to Get Involved?</h2>
                <p className="text-xl text-white/90 mb-6">
                  Contact us to learn more about meeting times and how to join!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/purdue/contact"
                    className="rounded-xl bg-white px-6 py-3 text-base font-semibold text-amber-600 shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    Contact Us
                  </Link>
                  <a
                    href="https://boilerlink.purdue.edu/organization/binaryheart"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-slate-700 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-xl"
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6 text-center">
              Everyone Is Welcome
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
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

      {/* Why Join Section */}
      <div className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Join Binary Heart?</h2>
            <p className="mt-4 text-lg text-gray-600">
              More than just volunteer hours—build skills, make connections, and create impact
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                }
                title="Hands-On Tech Skills"
                description="Learn computer repair, operating system installation, hardware troubleshooting, and data security practices."
                gradientFrom="from-amber-500"
                gradientTo="to-yellow-600"
              />

              <FeatureCard
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                }
                title="Build Your Network"
                description="Connect with students across majors, faculty mentors, and professionals in the tech industry."
                gradientFrom="from-rose-500"
                gradientTo="to-pink-600"
              />

              <FeatureCard
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                }
                title="Community Impact"
                description="Make a real difference in the Greater Lafayette area by providing technology to those who need it most."
                gradientFrom="from-purple-500"
                gradientTo="to-violet-600"
              />

              <FeatureCard
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                }
                title="Leadership Experience"
                description="Take on roles leading projects, organizing events, and managing teams—great for your resume."
                gradientFrom="from-blue-500"
                gradientTo="to-indigo-600"
              />

              <FeatureCard
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="Flexible Commitment"
                description="Participate as much or as little as your schedule allows. Drop in for a meeting or get deeply involved—it's up to you."
                gradientFrom="from-emerald-500"
                gradientTo="to-teal-600"
              />

              <FeatureCard
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                }
                title="Resume Builder"
                description="Stand out in internship and job applications with meaningful volunteer work and demonstrated technical skills."
                gradientFrom="from-cyan-500"
                gradientTo="to-blue-600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What We Do</h2>
            <p className="mt-4 text-lg text-gray-600">
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
              bgColorClass="bg-amber-100"
              iconColorClass="text-amber-600"
            />

            <InfoCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              }
              title="Software Installation & Security"
              description="Install operating systems, set up essential software, configure security settings, and ensure devices are ready to use."
              bgColorClass="bg-yellow-100"
              iconColorClass="text-yellow-600"
            />

            <InfoCard
              icon={
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              }
              title="Device Collection & Distribution"
              description="Organize donation drives, coordinate with community partners, and distribute refurbished technology to those in need."
              bgColorClass="bg-amber-100"
              iconColorClass="text-amber-600"
            />
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Have Questions?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Reach out to learn more about our chapter, meeting times, and how to get involved!
            </p>
            <Link
              to="/purdue/contact"
              className="inline-block rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
