import BinaryHeartText from '../../components/BinaryHeartText';
import { NEW_TRIER_COLORS } from '../../utils/brandColors';

export default function Contact() {
  const handleSubmit = () => {
    // Let the form submit naturally to Google Forms
    // The form will redirect or show a success message automatically
  };

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
                        <a href="mailto:newtrier@binaryheart.org" className={`${NEW_TRIER_COLORS.TEXT_BLUE} ${NEW_TRIER_COLORS.TEXT_HOVER}`}>
                          newtrier@binaryheart.org
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
              <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg ring-1 ring-gray-900/5">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
                <form 
                  action="https://docs.google.com/forms/u/6/d/e/1FAIpQLSfohnccUTZild_Fvq-aF1QTVnx_FJEOVOJ6OFPzoUEhrWbkXQ/formResponse" 
                  method="POST"
                  target="_blank"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name Fields */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                        First name
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          name="entry.1475264147"
                          id="firstName"
                          className={`block w-full rounded-lg border-0 py-3 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[${NEW_TRIER_COLORS.PRIMARY_BLUE}]`}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                        Last name
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          name="entry.307727203"
                          id="lastName"
                          className={`block w-full rounded-lg border-0 py-3 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[${NEW_TRIER_COLORS.PRIMARY_BLUE}]`}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        name="entry.1302188399"
                        id="email"
                        className={`block w-full rounded-lg border-0 py-3 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[${NEW_TRIER_COLORS.PRIMARY_BLUE}]`}
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone number
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                      <input
                        type="tel"
                        name="entry.1751717741"
                        id="phone"
                        className={`block w-full rounded-lg border-0 py-3 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[${NEW_TRIER_COLORS.PRIMARY_BLUE}]`}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute top-3 left-3">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                      </div>
                      <textarea
                        name="entry.1800868177"
                        id="message"
                        rows={5}
                        className={`block w-full rounded-lg border-0 py-3 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[${NEW_TRIER_COLORS.PRIMARY_BLUE}] resize-none`}
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className={`w-full rounded-lg bg-gradient-to-r ${NEW_TRIER_COLORS.GRADIENT_PRIMARY} px-6 py-3 text-base font-semibold text-white shadow-lg ${NEW_TRIER_COLORS.GRADIENT_PRIMARY_HOVER} transition-all duration-200`}
                    >
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
