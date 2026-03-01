import BinaryHeartText from '../../components/BinaryHeartText';
import DonateForm from '../../components/DonateForm';
import { NORTHWESTERN_COLORS } from '../../utils/brandColors';
import chapterForms from '../../data/chapterForms.json';

export default function Donate() {
  const donateFormConfig = chapterForms.NU?.donateForm;

  return (
    <main className="grow relative z-10">
      {/* Hero Section */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Donate to <BinaryHeartText /> at Northwestern
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">What We Accept</h2>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <svg className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Desktop computers and laptops</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Tablets and iPads</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Monitors and displays</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Keyboards, mice, and accessories</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Other technology equipment</span>
                    </li>
                  </ul>
                </div>

                {/* Before You Donate */}
                <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${NORTHWESTERN_COLORS.GRADIENT_PRIMARY} text-white`}>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Before You Donate</h2>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <svg className={`h-5 w-5 ${NORTHWESTERN_COLORS.TEXT} mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span>Factory reset your device if possible</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className={`h-5 w-5 ${NORTHWESTERN_COLORS.TEXT} mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span>Remove all stickers and post-its</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className={`h-5 w-5 ${NORTHWESTERN_COLORS.TEXT} mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span>We'll securely wipe all data</span>
                    </li>
                  </ul>
                </div>

                {/* Data Security */}
                <div className={`rounded-2xl bg-gradient-to-br ${NORTHWESTERN_COLORS.GRADIENT_LIGHT} p-6`}>
                  <div className="flex items-start gap-3 mb-3">
                    <svg className={`h-6 w-6 ${NORTHWESTERN_COLORS.TEXT} flex-shrink-0`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Data is Safe</h3>
                      <p className="text-sm text-gray-700">
                        We use professional-grade tools to permanently erase all data from storage drives. Your information will be unrecoverable.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tax Deduction */}
                <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <svg className="h-6 w-6 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Tax-Deductible Donation</h3>
                      <p className="text-sm text-gray-700">
                        BinaryHeart is a registered 501(c)(3) nonprofit. We'll provide a receipt for your tax-deductible donation.
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
                  buttonGradientClass={NORTHWESTERN_COLORS.GRADIENT_PRIMARY}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
