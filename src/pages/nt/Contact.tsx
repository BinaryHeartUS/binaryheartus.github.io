import BinaryHeartText from '../../components/BinaryHeartText';
import ContactForm from '../../components/ContactForm';
import { NEW_TRIER_COLORS } from '../../utils/brandColors';
import chaptersData from '../../data/chapters.json';

export default function Contact() {
  const contactFormConfig = chaptersData.highSchool.find(ch => ch.shortName === 'NT')?.contactForm;

  return (
    <main className="grow relative z-10">
      {/* Hero Section */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Get in touch with <BinaryHeartText /> at New Trier
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
                        src="/assets/images/chapters/nt/icon.svg" 
                        alt="New Trier Binary Heart Logo" 
                        className="h-10 w-10"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">
                        <BinaryHeartText /> <span className="text-gray-900">at New Trier</span>
                      </h2>
                      <p className="text-sm text-gray-600">
                        New Trier High School
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
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${NEW_TRIER_COLORS.BG_BLUE_LIGHT}`}>
                          <svg className={`h-6 w-6 ${NEW_TRIER_COLORS.TEXT_BLUE}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Email</p>
                        <a href="mailto:nt@binaryheart.org" className={`${NEW_TRIER_COLORS.TEXT_BLUE} ${NEW_TRIER_COLORS.TEXT_HOVER}`}>
                          nt@binaryheart.org
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Meeting Location */}
                  <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-900/5">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${NEW_TRIER_COLORS.BG_BLUE_LIGHT}`}>
                          <svg className={`h-6 w-6 ${NEW_TRIER_COLORS.TEXT_BLUE}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Weekly Meetings</p>
                        <p className="text-gray-600">Tuesday & Thursday, 3:30 PM - 5:00 PM</p>
                        <p className="text-gray-600 mt-2">New Trier High School</p>
                        <p className="text-gray-600">385 Winnetka Avenue</p>
                        <p className="text-gray-600">Winnetka, IL 60093</p>
                        <p className="text-gray-600">Room 504</p>
                      </div>
                    </div>
                  </div>

                  {/* Map Link */}
                  <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-900/5">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${NEW_TRIER_COLORS.BG_BLUE_LIGHT}`}>
                          <svg className={`h-6 w-6 ${NEW_TRIER_COLORS.TEXT_BLUE}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Get Directions</p>
                        <a 
                          href="https://maps.google.com/?q=385+Winnetka+Avenue,+Winnetka,+IL+60093" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`${NEW_TRIER_COLORS.TEXT_BLUE} ${NEW_TRIER_COLORS.TEXT_HOVER}`}
                        >
                          View on Google Maps
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className={`rounded-2xl bg-gradient-to-br ${NEW_TRIER_COLORS.GRADIENT_LIGHT} p-6`}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <a href="/nt/join" className={`flex items-center gap-2 ${NEW_TRIER_COLORS.TEXT_BLUE} ${NEW_TRIER_COLORS.TEXT_HOVER}`}>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span>Join Our Chapter</span>
                    </a>
                    <a href="/nt/about" className={`flex items-center gap-2 ${NEW_TRIER_COLORS.TEXT_BLUE} ${NEW_TRIER_COLORS.TEXT_HOVER}`}>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span>Learn About Us</span>
                    </a>
                    <a href="/nt/donate" className={`flex items-center gap-2 ${NEW_TRIER_COLORS.TEXT_BLUE} ${NEW_TRIER_COLORS.TEXT_HOVER}`}>
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
                  buttonGradientClass={NEW_TRIER_COLORS.GRADIENT_PRIMARY}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
