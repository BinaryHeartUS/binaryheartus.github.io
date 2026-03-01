import BinaryHeartText from '../../components/BinaryHeartText';
import ContactForm from '../../components/ContactForm';
import { WALTER_PAYTON_COLORS } from '../../utils/brandColors';
import chaptersData from '../../data/chapters.json';
import chapterForms from '../../data/chapterForms.json';

export default function Contact() {
  const chapterData = chaptersData.highSchool.find(ch => ch.shortName === 'WP');
  const contactFormConfig = chapterForms.WP?.contactForm;

  return (
    <main className="grow relative z-10">
      {/* Hero Section */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Get in touch
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Questions? Want to get involved? We'd love to hear from you! Reach out to the Walter Payton Chapter team.
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="space-y-8">
                {/* Organization Info */}
                <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <img 
                        src="/assets/images/chapters/wp/icon.svg" 
                        alt="BinaryHeart Walter Payton Logo" 
                        className="h-10 w-10"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">
                        <BinaryHeartText /> <span className="text-gray-900">at Walter Payton</span>
                      </h2>
                      <p className="text-sm text-gray-600">
                        Student chapter at Walter Payton College Preparatory High School
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
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${WALTER_PAYTON_COLORS.BG_ORANGE_LIGHT}`}>
                          <svg className={`h-6 w-6 ${WALTER_PAYTON_COLORS.TEXT_ORANGE}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Email</p>
                        <a href={`mailto:${chapterData?.email}`} className="text-blue-600 hover:text-blue-700">
                          {chapterData?.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Meeting Location & Time */}
                  <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-900/5">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${WALTER_PAYTON_COLORS.BG_ORANGE_LIGHT}`}>
                          <svg className={`h-6 w-6 ${WALTER_PAYTON_COLORS.TEXT_ORANGE}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Meeting Location</p>
                        <p className="text-gray-600">1034 N. Wells St.</p>
                        <p className="text-gray-600">Chicago, IL</p>
                        <p className="text-sm text-gray-500 mt-2">
                          <span className="font-semibold">Every Thursday</span> • 2:30 PM - 3:30 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className={`rounded-2xl bg-gradient-to-br ${WALTER_PAYTON_COLORS.BG_ORANGE_LIGHT} p-6`}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <a href="/wp/about" className={`flex items-center gap-2 ${WALTER_PAYTON_COLORS.TEXT_ORANGE} ${WALTER_PAYTON_COLORS.TEXT_ORANGE_HOVER}`}>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span>Learn About Our Chapter</span>
                    </a>
                    <a href="/wp/join" className={`flex items-center gap-2 ${WALTER_PAYTON_COLORS.TEXT_ORANGE} ${WALTER_PAYTON_COLORS.TEXT_ORANGE_HOVER}`}>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span>Join Our Team</span>
                    </a>
                    <a href="/wp/donate" className={`flex items-center gap-2 ${WALTER_PAYTON_COLORS.TEXT_ORANGE} ${WALTER_PAYTON_COLORS.TEXT_ORANGE_HOVER}`}>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span>Support Our Mission</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              {contactFormConfig && (
                <ContactForm 
                  formUrl={contactFormConfig.formUrl}
                  fieldIds={contactFormConfig.fieldIds}
                  buttonGradientClass={WALTER_PAYTON_COLORS.GRADIENT_PRIMARY}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
