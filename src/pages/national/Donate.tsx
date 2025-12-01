import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getRelativePath, getAllChapters } from '../../utils/urlHelpers';
import BinaryHeartText from '../../components/BinaryHeartText';

// TypeScript declarations for AeroPay SDK
declare global {
  interface Window {
    AeroPay: {
      init: (config: { env: string }) => void;
      button: (config: {
        location: string;
        type: string;
        onSuccess: (uuid: string) => void;
        onEvent: (event: any) => void;
      }) => {
        launch: (amount: string) => void;
      };
    };
  }
}

export default function Donate() {
  const allChapters = getAllChapters();
  const [paymentAmount, setPaymentAmount] = useState<string>('');
  const [aeroPayReady, setAeroPayReady] = useState<boolean>(false);
  const [isChrome, setIsChrome] = useState<boolean>(false);
  const aeroPayButtonRef = useRef<{ launch: (amount: string) => void } | null>(null);

  // Detect Chrome/Chromium browser
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isChromeOrChromium = (
      userAgent.includes('chrome') || 
      userAgent.includes('chromium') || 
      userAgent.includes('edg') // Edge is Chromium-based
    ) && !userAgent.includes('opr'); // Exclude Opera
    
    setIsChrome(isChromeOrChromium);
  }, []);

  // Initialize AeroPay SDK (only for Chrome/Chromium browsers)
  useEffect(() => {
    if (!isChrome) {
      console.log('Non-Chrome browser detected, skipping AeroPay initialization');
      return;
    }
    
    // Wait for AeroPay SDK to load
    const initAeroPay = () => {
      if (typeof window !== 'undefined' && window.AeroPay) {
        try {
          window.AeroPay.init({
            env: 'production'
          });

          const onSuccess = (uuid: string) => {
            console.log('Payment successful:', uuid);
            alert('Thank you for your donation! Your transaction ID: ' + uuid);
            setPaymentAmount(''); // Reset amount after successful payment
          };

          const onEvent = (event: any) => {
            console.log('AeroPay event:', event);
            
            // Firefox-specific fixes for modal rendering
            if (event.type === 'open' || event.status === 'open') {
              setTimeout(() => {
                // Find all AeroPay iframes
                const iframes = document.querySelectorAll('iframe[src*="aeropay"], iframe[src*="pay.aero"]');
                iframes.forEach((iframe) => {
                  const iframeElement = iframe as HTMLIFrameElement;
                  
                  // Force iframe to be visible and properly sized
                  iframeElement.style.cssText = `
                    position: fixed !important;
                    top: 0 !important;
                    left: 0 !important;
                    width: 100vw !important;
                    height: 100vh !important;
                    z-index: 2147483647 !important;
                    border: none !important;
                    display: block !important;
                    opacity: 1 !important;
                    visibility: visible !important;
                    background: white !important;
                  `;
                  
                  // Try to fix content rendering inside iframe
                  try {
                    if (iframeElement.contentWindow) {
                      iframeElement.contentWindow.focus();
                    }
                  } catch (e) {
                    console.log('Cannot access iframe content (cross-origin)');
                  }
                });
                
                // Force repaint
                document.body.style.transform = 'translateZ(0)';
                setTimeout(() => {
                  document.body.style.transform = '';
                }, 10);
              }, 100);
            }
          };

          aeroPayButtonRef.current = window.AeroPay.button({
            location: '78f1f1db44',
            type: 'checkout',
            onSuccess: onSuccess,
            onEvent: onEvent
          });
          setAeroPayReady(true);
          console.log('AeroPay initialized successfully');
        } catch (error) {
          console.error('Error initializing AeroPay:', error);
        }
      } else {
        // Retry after a short delay if AeroPay hasn't loaded yet
        setTimeout(initAeroPay, 100);
      }
    };

    // Give the script time to load, especially on Firefox
    const timer = setTimeout(initAeroPay, 50);
    
    // Set up a MutationObserver to watch for AeroPay iframes being added
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeName === 'IFRAME') {
            const iframe = node as HTMLIFrameElement;
            const src = iframe.src || '';
            
            if (src.includes('aeropay') || src.includes('pay.aero')) {
              console.log('AeroPay iframe detected, applying Firefox fixes');
              
              // Apply aggressive styling to ensure visibility
              iframe.style.cssText = `
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                z-index: 2147483647 !important;
                border: none !important;
                display: block !important;
                opacity: 1 !important;
                visibility: visible !important;
                background: white !important;
              `;
              
              // Force focus
              setTimeout(() => {
                try {
                  iframe.focus();
                  if (iframe.contentWindow) {
                    iframe.contentWindow.focus();
                  }
                } catch (e) {
                  console.log('Cannot focus iframe:', e);
                }
              }, 100);
            }
          }
        });
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [isChrome]);

  const handleStripeCheckout = () => {
    window.open('https://donate.stripe.com/dR6g0v7aF3Bhbuw4gg', '_blank');
  };

  const handleAeroPayCheckout = () => {
    const amount = parseInt(paymentAmount, 10);
    if (amount > 0 && aeroPayButtonRef.current) {
      console.log('Launching AeroPay with amount:', amount);
      
      try {
        aeroPayButtonRef.current.launch(amount.toString());
      } catch (error) {
        console.error('Error launching AeroPay:', error);
        alert('There was an issue opening the payment window. Please try again or use card payment instead.');
      }
    } else if (amount <= 0 || !paymentAmount) {
      alert('Please enter a valid donation amount.');
    } else {
      alert('Payment system is loading. Please try again in a moment.');
    }
  };

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
              Support <BinaryHeartText />
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
                    <Link
                      key={chapter.url}
                      to={`${chapterPath}/donate`}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br ${colorSchemes[index % colorSchemes.length]} transition-all duration-300 group ${isLastOdd ? 'col-span-2 sm:col-span-1' : ''}`}
                    >
                      <img src={chapter.icon} alt={chapter.name} className="h-8 w-8" />
                      <span className="text-sm font-medium text-gray-900">{chapter.name}</span>
                    </Link>
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
              <div className={`grid gap-6 ${isChrome ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
                {/* Donate by Bank - Only show on Chrome/Chromium browsers */}
                {isChrome && (
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

                  {/* Amount Input */}
                  <div className="flex flex-col items-center mb-4">
                    <p className="text-gray-600 mb-2 font-medium">Donate to BinaryHeart</p>
                    <div className="relative w-full max-w-[264px]">
                      <input
                        type="number"
                        id="payment-amount"
                        value={paymentAmount}
                        onChange={(e) => setPaymentAmount(e.target.value)}
                        className="w-full text-2xl font-semibold py-2 px-4 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-center"
                        placeholder="$0.00"
                        min="1"
                        step="1"
                        onInput={(e) => {
                          const target = e.target as HTMLInputElement;
                          target.value = Math.floor(Number(target.value)).toString();
                        }}
                        style={{ fontFeatureSettings: '"tnum" on, "lnum" on' }}
                      />
                    </div>
                  </div>

                  <button 
                    onClick={handleAeroPayCheckout}
                    disabled={!aeroPayReady}
                    className={`w-full max-w-[264px] mx-auto block rounded-xl px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 ${
                      aeroPayReady 
                        ? 'bg-[#ff0040] hover:bg-[#ff1a57] cursor-pointer' 
                        : 'bg-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {aeroPayReady ? 'Donate' : 'Loading...'}
                  </button>

                  {/* Supported Banks */}
                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500 mb-2">Supported payment methods:</p>
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                      <span className="text-xs text-gray-600 font-medium">Chase</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-xs text-gray-600 font-medium">Bank of America</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-xs text-gray-600 font-medium">Citibank</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-xs text-gray-600 font-medium">Wells Fargo</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-xs text-gray-600 font-medium">US Bank</span>
                      <span className="text-xs text-gray-500 ml-1">(+14,000 more)</span>
                    </div>
                  </div>
                </div>
                )}

                {/* Donate by Card */}
                <div className={`rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 p-6 ${!isChrome ? 'max-w-2xl mx-auto' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500 text-white">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Donate by Card</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-8">
                    Make a secure donation using your credit or debit card through Stripe.
                  </p>

                  <button 
                    onClick={handleStripeCheckout}
                    className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-300"
                  >
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
