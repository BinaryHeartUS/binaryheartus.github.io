import BinaryHeartText from '../../components/BinaryHeartText';
import DonateForm from '../../components/DonateForm';
import { NEW_TRIER_COLORS } from '../../utils/brandColors';
import chapterForms from '../../data/chapterForms.json';

export default function Donate() {
  const donateFormConfig = chapterForms.NT?.donateForm;

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
              {donateFormConfig && (
                <DonateForm 
                  formUrl={donateFormConfig.formUrl}
                  fieldIds={donateFormConfig.fieldIds}
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
