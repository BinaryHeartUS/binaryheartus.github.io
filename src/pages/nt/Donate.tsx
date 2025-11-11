import BinaryHeartText from '../../components/BinaryHeartText';
import { NEW_TRIER_COLORS } from '../../utils/brandColors';

export default function Donate() {
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
              Donate to <BinaryHeartText /> at New Trier
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Help us bridge the digital divide by donating computers, electronics, or equipment
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Information Section */}
              <div className="space-y-8">
                {/* What We Accept */}
                <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${NEW_TRIER_COLORS.GRADIENT_SECONDARY} text-white`}>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">What We Accept</h2>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <svg className={`h-5 w-5 ${NEW_TRIER_COLORS.TEXT_GREEN} mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Desktop computers and laptops</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className={`h-5 w-5 ${NEW_TRIER_COLORS.TEXT_GREEN} mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Tablets and iPads</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className={`h-5 w-5 ${NEW_TRIER_COLORS.TEXT_GREEN} mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Monitors and displays</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className={`h-5 w-5 ${NEW_TRIER_COLORS.TEXT_GREEN} mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Other technology equipment</span>
                    </li>
                  </ul>
                </div>

                {/* Before You Donate */}
                <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${NEW_TRIER_COLORS.GRADIENT_PRIMARY} text-white`}>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Before You Donate</h2>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <svg className={`h-5 w-5 ${NEW_TRIER_COLORS.TEXT_BLUE} mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span>Factory reset your device</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className={`h-5 w-5 ${NEW_TRIER_COLORS.TEXT_BLUE} mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span>Remove all stickers and post-its if possible</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className={`h-5 w-5 ${NEW_TRIER_COLORS.TEXT_BLUE} mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span>We'll securely wipe all data</span>
                    </li>
                  </ul>
                </div>

                {/* Data Security */}
                <div className={`rounded-2xl bg-gradient-to-br ${NEW_TRIER_COLORS.GRADIENT_LIGHT} p-6`}>
                  <div className="flex items-start gap-3 mb-3">
                    <svg className={`h-6 w-6 ${NEW_TRIER_COLORS.TEXT_BLUE} flex-shrink-0`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Data is Safe</h3>
                      <p className="text-sm text-gray-700">
                        We use professional-grade tools to permanently erase all data from storage drives. Because of this, once you donate your device, the information on it will be unrecoverable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Donation Form */}
              <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg ring-1 ring-gray-900/5">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Donation</h2>
                <form 
                  action="https://docs.google.com/forms/u/6/d/e/1FAIpQLSdbmal7MkIn5rSH5fEh5MghICRhM1Lc-70wjaNaUDAhWT8aZA/formResponse" 
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

                  {/* Donation Contents */}
                  <div>
                    <label htmlFor="donationContents" className="block text-sm font-semibold text-gray-900 mb-2">
                      What are the contents of your donation?
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute top-3 left-3">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                      </div>
                      <textarea
                        name="entry.1800868177"
                        id="donationContents"
                        rows={4}
                        placeholder="e.g., 2 laptops, 1 tablet, 1 phone"
                        className={`block w-full rounded-lg border-0 py-3 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[${NEW_TRIER_COLORS.PRIMARY_BLUE}] resize-none`}
                        required
                      />
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label htmlFor="additionalNotes" className="block text-sm font-semibold text-gray-900 mb-2">
                      Anything else you'd like to share?
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute top-3 left-3">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                      </div>
                      <textarea
                        name="entry.659377643"
                        id="additionalNotes"
                        rows={3}
                        placeholder="Special pickup instructions, preferred times, etc."
                        className={`block w-full rounded-lg border-0 py-3 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[${NEW_TRIER_COLORS.PRIMARY_BLUE}] resize-none`}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className={`w-full rounded-lg bg-gradient-to-r ${NEW_TRIER_COLORS.GRADIENT_PRIMARY} px-6 py-3 text-base font-semibold text-white shadow-lg ${NEW_TRIER_COLORS.GRADIENT_PRIMARY_HOVER} transition-all duration-200`}
                    >
                      Submit Donation Request
                    </button>
                  </div>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                  We'll reach out to coordinate a pickup or drop-off time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
