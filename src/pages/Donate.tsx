import { getRelativePath, getAllChapters } from '../utils/urlHelpers';

export default function Donate() {
  const allChapters = getAllChapters();

  // Color schemes for chapters
  const colorSchemes = [
    'from-purple-50 to-indigo-50 hover:from-purple-100 hover:to-indigo-100 group-hover:text-purple-700',
    'from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100 group-hover:text-red-700',
    'from-yellow-50 to-amber-50 hover:from-yellow-100 hover:to-amber-100 group-hover:text-yellow-800',
    'from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 group-hover:text-rose-700',
    'from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 group-hover:text-blue-700',
    'from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 group-hover:text-emerald-700',
  ];

  return (
    <main className="grow relative z-10">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-10 sm:pb-16 lg:px-8 lg:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Support <span className="text-blue-600">Binary</span><span className="text-rose-600">Heart</span>
            </h1>
            <p className="text-xl leading-8 text-gray-700">
              Help us bridge the digital divide by donating devices or funds to support our mission.
            </p>
          </div>
        </div>
      </div>

      {/* Device Donations Section */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Device Donations Card */}
            <div className="relative rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg ring-1 ring-gray-900/5 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Device Donations</h2>
              </div>

              <p className="text-gray-700 mb-6">
                BinaryHeart accepts tech donations at various locations. Select your local chapter below to learn more about device drop-off locations and accepted items.
              </p>

              {/* Chapter Selection */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                {allChapters.map((chapter, index) => {
                  const isLastOdd = allChapters.length % 3 === 1 && index === allChapters.length - 1;
                  const chapterPath = getRelativePath(chapter.url);
                  return (
                    <a
                      key={chapter.url}
                      href={`${chapterPath}/donate`}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br ${colorSchemes[index % colorSchemes.length]} transition-all duration-300 group ${isLastOdd ? 'col-span-2 sm:col-span-1' : ''}`}
                    >
                      <img src={chapter.icon} alt={chapter.name} className="h-8 w-8" />
                      <span className="text-sm font-medium text-gray-900">{chapter.name}</span>
                    </a>
                  );
                })}
              </div>

              {/* Warning Note */}
              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                <svg className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <p className="text-sm text-red-800">
                  Please check your local chapter's guidelines for accepted devices and preparation instructions.
                </p>
              </div>
            </div>

            {/* Monetary Donations Section */}
            <div className="relative rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg ring-1 ring-gray-900/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Monetary Donations</h2>
              </div>

              <p className="text-gray-700 mb-6">
                Your monetary donations go directly to BinaryHeart Inc., our 501(c)(3) organization, supporting BinaryHeart-wide initiatives and services.
              </p>

              {/* Info Note */}
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100 mb-8">
                <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                <p className="text-sm text-blue-800">
                  Individual chapters cannot accept monetary donations. The 501(c)(3) organization supports all chapters through various services and initiatives.
                </p>
              </div>

              {/* Donation Options */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Donate by Bank */}
                <div className="rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-white">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Donate by Bank</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-6">
                    Connect your bank account directly through AeroPay for lower processing fees, allowing more of your donation to support our mission.
                  </p>
                  
                  <div className="mb-4">
                    <label htmlFor="bank-amount" className="block text-sm font-medium text-gray-700 mb-2">
                      Donate to BinaryHeart
                    </label>
                    <input
                      type="number"
                      id="bank-amount"
                      defaultValue="10"
                      min="1"
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 px-4 py-2"
                    />
                  </div>

                  <button className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    Donate
                  </button>

                  <p className="text-xs text-center text-gray-500 mt-3">$1.00 (+ 0.4%/mo max) fee</p>
                </div>

                {/* Donate by Card */}
                <div className="rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500 text-white">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Donate by Card</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-6">
                    Make a secure donation using your credit or debit card through Stripe.
                  </p>
                  
                  <div className="mb-4">
                    <label htmlFor="card-amount" className="block text-sm font-medium text-gray-700 mb-2">
                      Donate to BinaryHeart
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="text"
                        id="card-amount"
                        defaultValue="0.00"
                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 pl-8 pr-4 py-2"
                      />
                    </div>
                  </div>

                  <button className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-300">
                    Donate
                  </button>

                  <p className="text-xs text-center text-gray-500 mt-3">Card payments secured by Stripe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
