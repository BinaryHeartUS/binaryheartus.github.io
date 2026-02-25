import BinaryHeartText from '../../components/BinaryHeartText';
import ContactForm from '../../components/ContactForm';
import { ROSE_HULMAN_COLORS } from '../../utils/brandColors';
import chaptersData from '../../data/chapters.json';
import chapterForms from '../../data/chapterForms.json';

export default function Contact() {
  const chapterData = chaptersData.higherEducation.find(ch => ch.shortName === 'Rose-Hulman');
  const contactFormConfig = chapterForms['Rose-Hulman']?.contactForm;

  return (
    <main className="grow relative z-10">
      {/* Hero Section */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Get in touch with <BinaryHeartText /> at Rose-Hulman
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Have questions about our chapter? Want to get involved or donate equipment? We'd love to hear from you!
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="space-y-8">
                {/* Chapter Info */}
                <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <img 
                        src="/assets/images/chapters/rose-hulman/icon.svg" 
                        alt="Rose-Hulman Binary Heart Logo" 
                        className="h-10 w-10"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">
                        <BinaryHeartText /> <span className="text-gray-900">at Rose-Hulman</span>
                      </h2>
                      <p className="text-sm text-gray-600">
                        Rose-Hulman Institute of Technology
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4">
                  {/* Email */}
                  <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-900/5">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${ROSE_HULMAN_COLORS.BG_LIGHT}`}>
                          <svg className={`h-6 w-6 ${ROSE_HULMAN_COLORS.TEXT}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Email</p>
                        <a href={`mailto:${chapterData?.email}`} className={`${ROSE_HULMAN_COLORS.TEXT} ${ROSE_HULMAN_COLORS.TEXT_HOVER}`}>
                          {chapterData?.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Meeting Location */}
                  <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-900/5">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${ROSE_HULMAN_COLORS.BG_LIGHT}`}>
                          <svg className={`h-6 w-6 ${ROSE_HULMAN_COLORS.TEXT}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Weekly Meetings</p>
                        <p className="text-gray-600">Fridays at 5:00 PM</p>
                        <p className="text-gray-600">Percopo Classroom, Percopo Basement</p>
                      </div>
                    </div>
                  </div>

                  {/* Campus Groups */}
                  <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-900/5">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${ROSE_HULMAN_COLORS.BG_LIGHT}`}>
                          <svg className={`h-6 w-6 ${ROSE_HULMAN_COLORS.TEXT}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Are you a Rose student? Join our community!</p>
                        <a 
                          href="https://rosehulman.campusgroups.com/BinaryHeart/club_signup" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`${ROSE_HULMAN_COLORS.TEXT} ${ROSE_HULMAN_COLORS.TEXT_HOVER}`}
                        >
                          Campus Groups
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className={`rounded-2xl bg-gradient-to-br ${ROSE_HULMAN_COLORS.BG_GRADIENT} ${ROSE_HULMAN_COLORS.BG_GRADIENT_END} p-6`}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <a href="/rose-hulman/join" className={`flex items-center gap-2 ${ROSE_HULMAN_COLORS.TEXT} ${ROSE_HULMAN_COLORS.TEXT_HOVER}`}>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span>Join Our Chapter</span>
                    </a>
                    <a href="/rose-hulman/about" className={`flex items-center gap-2 ${ROSE_HULMAN_COLORS.TEXT} ${ROSE_HULMAN_COLORS.TEXT_HOVER}`}>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span>Learn About Us</span>
                    </a>
                    <a href="/donate" className={`flex items-center gap-2 ${ROSE_HULMAN_COLORS.TEXT} ${ROSE_HULMAN_COLORS.TEXT_HOVER}`}>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span>Donate Equipment</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              {contactFormConfig && (
                <ContactForm 
                  formUrl={contactFormConfig.formUrl}
                  fieldIds={contactFormConfig.fieldIds}
                  buttonGradientClass={ROSE_HULMAN_COLORS.GRADIENT_PRIMARY}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
