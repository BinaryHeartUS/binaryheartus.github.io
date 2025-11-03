import { useState } from 'react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQSection {
  title: string;
  icon: React.ReactNode;
  color: string;
  items: FAQItem[];
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (sectionIndex: number, itemIndex: number) => {
    const key = `${sectionIndex}-${itemIndex}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const faqSections: FAQSection[] = [
    {
      title: 'General Information',
      color: 'from-purple-500 to-indigo-600',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
      ),
      items: [
        {
          question: 'What is BinaryHeart?',
          answer: 'BinaryHeart is a student service organization dedicated to spreading digital access. We collect, refurbish, and donate computers to groups and individuals in need of technology resources.',
        },
        {
          question: 'Who receives the donated computers?',
          answer: 'We work with various organizations and individuals across Illinois, Indiana, and beyond. We have also collaborated with international organizations, delivering devices to countries such as Nigeria and Kenya.',
        },
      ],
    },
    {
      title: 'For Donors',
      color: 'from-green-500 to-emerald-600',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ),
      items: [
        {
          question: 'What kind of donations do you accept?',
          answer: 'Almost anything! Computers, keyboards, iPads, tablets, monitors, mice, and other technology items are just a few examples of what we accept.',
        },
        {
          question: 'How do I donate?',
          answer: (
            <>
              Head over to our <Link to="/donate" className="text-blue-600 hover:text-blue-700 font-semibold">donate page</Link>! We'll talk and schedule a drop-off date that works for you.
            </>
          ),
        },
        {
          question: 'What should I do before donating?',
          answer: 'If you can, please factory reset your device and remove all stickers, post-its, etc. This helps us prepare the device for its new owner more quickly.',
        },
        {
          question: 'What happens to my storage drive?',
          answer: 'We use a tool called Darik\'s Boot and Nuke (DBAN) to write over and erase all storage drives. By doing so, any data is permanently removed and no longer recoverable. Alternatively, we can physically destroy your storage drive upon request by drilling through it with a drill press, and then installing our own solid-state drives (SSDs). If you\'d feel more comfortable removing the storage drive(s) first, you are welcome to do so, but know that we will absolutely do it for you as well.',
        },
        {
          question: 'Do you provide tax deduction receipts for donations?',
          answer: 'Yes, we do! As a registered 501(c)(3) nonprofit organization, your donations are tax-deductible. We\'ll provide you with a receipt for your records.',
        },
      ],
    },
    {
      title: 'For Members',
      color: 'from-blue-500 to-cyan-600',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      items: [
        {
          question: 'Do I need to come to all meetings?',
          answer: 'Nope! Many members have other commitments and just come once a week or during their sports\' off seasons. Come whenever you can!',
        },
        {
          question: 'When does BinaryHeart run?',
          answer: (
            <>
              BinaryHeart meets weekly at a variety of universities and high schools. See your school's specific chapter page for more information about meeting times and locations.
            </>
          ),
        },
        {
          question: 'Do I need experience?',
          answer: 'Nope! Most members and leaders actually began with no experience, and we\'re 100% willing to show you the ropes. Everyone is welcome, regardless of technical background.',
        },
      ],
    },
    {
      title: 'For New Chapters',
      color: 'from-red-500 to-pink-600',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      ),
      items: [
        {
          question: 'What are some of the benefits of creating a club as a BinaryHeart chapter?',
          answer: 'As a chapter, we\'ll support the founding and operations of your club. For example, we can provide guidance, supplies, branding, and connections. You\'ll receive a BinaryHeart email address and a section on this website.',
        },
        {
          question: 'What is the process of starting a new chapter?',
          answer: (
            <>
              <p className="font-semibold mb-3">The basic outline of founding a chapter is the following:</p>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>Find 4-6 other students at your school interested in starting a chapter.</li>
                <li>Contact us at <a href="mailto:contact@binaryheart.org" className="text-blue-600 hover:text-blue-700 font-semibold">contact@binaryheart.org</a>. We'll schedule meetings to discuss logistics including receiving donations, maintaining an inventory, finding potential recipients, and operating the club. You'll also receive BinaryHeart resources.</li>
                <li>Register as a club at your school.</li>
                <li>Begin club operations!</li>
              </ol>
            </>
          ),
        },
      ],
    },
  ];

  return (
    <main className="grow relative z-10">
      {/* Hero Section */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Frequently asked questions
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Can't find the answer you're looking for?{' '}
              <Link to="/contact" className="text-red-600 hover:text-red-700 font-semibold">
                Contact us
              </Link>{' '}
              and we'll help you out.
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="mx-auto max-w-4xl space-y-8">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg ring-1 ring-gray-900/5">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${section.color} text-white shadow-lg`}>
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => {
                    const key = `${sectionIndex}-${itemIndex}`;
                    const isOpen = openItems[key];

                    return (
                      <div
                        key={itemIndex}
                        className="rounded-xl border border-gray-200 bg-white overflow-hidden transition-all duration-200"
                      >
                        {/* Question Button */}
                        <button
                          onClick={() => toggleItem(sectionIndex, itemIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                        >
                          <span className="font-semibold text-gray-900 pr-8">{item.question}</span>
                          <svg
                            className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-200 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </button>

                        {/* Answer */}
                        <div
                          className={`overflow-hidden transition-all duration-200 ${
                            isOpen ? 'max-h-[1000px]' : 'max-h-0'
                          }`}
                        >
                          <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 shadow-lg ring-1 ring-blue-900/5">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                We're here to help! Reach out to us and we'll get back to you as soon as possible.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
              >
                Contact us
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
