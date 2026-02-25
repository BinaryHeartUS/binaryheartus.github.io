import BinaryHeartText from '../../components/BinaryHeartText';
import ContactForm from '../../components/ContactForm';
import { IU_COLORS } from '../../utils/brandColors';
import chaptersData from '../../data/chapters.json';

export default function Contact() {
  const chapterData = chaptersData.higherEducation.find(ch => ch.shortName === 'IU');
  const contactFormConfig = chapterData?.contactForm;

  return (
    <main className="grow relative z-10">
      {/* Hero Section */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Get in touch with <BinaryHeartText /> at IU
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
                        src="/assets/images/chapters/iu/icon.svg" 
                        alt="IU Binary Heart Logo" 
                        className="h-10 w-10"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">
                        <BinaryHeartText /> <span className="text-gray-900">at IU</span>
                      </h2>
                      <p className="text-sm text-gray-600">
                        Indiana University Bloomington
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
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${IU_COLORS.BG_LIGHT}`}>
                          <svg className={`h-6 w-6 ${IU_COLORS.TEXT}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Email</p>
                        <a href={`mailto:${chapterData?.email}`} className={`${IU_COLORS.TEXT} ${IU_COLORS.TEXT_HOVER}`}>
                          {chapterData?.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-900/5">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${IU_COLORS.BG_LIGHT}`}>
                          <svg className={`h-6 w-6 ${IU_COLORS.TEXT}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Phone</p>
                        <a href="tel:+12039988746" className={`${IU_COLORS.TEXT} ${IU_COLORS.TEXT_HOVER}`}>
                          (203) 998-8746
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-900/5">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${IU_COLORS.BG_LIGHT}`}>
                          <svg className={`h-6 w-6 ${IU_COLORS.TEXT}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Address</p>
                        <p className="text-gray-600">515 N Park Ave</p>
                        <p className="text-gray-600">Bloomington, IN 47408</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className={`rounded-2xl bg-gradient-to-br ${IU_COLORS.BG_GRADIENT} ${IU_COLORS.BG_GRADIENT_END} p-6`}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <a href="/iu/join" className={`flex items-center gap-2 ${IU_COLORS.TEXT} ${IU_COLORS.TEXT_HOVER}`}>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span>Join Our Chapter</span>
                    </a>
                    <a href="/iu/about" className={`flex items-center gap-2 ${IU_COLORS.TEXT} ${IU_COLORS.TEXT_HOVER}`}>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span>Learn About Us</span>
                    </a>
                    <a href="/iu/donate" className={`flex items-center gap-2 ${IU_COLORS.TEXT} ${IU_COLORS.TEXT_HOVER}`}>
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
                  buttonGradientClass={IU_COLORS.GRADIENT_PRIMARY}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
