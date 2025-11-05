export default function About() {
  return (
    <main className="grow relative z-10">
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              New Trier Chapter
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A student-run organization empowering students worldwide through technology at New Trier High School.
            </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
            <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-lg ring-1 ring-gray-900/5">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
              Our Mission
              </h2>
              <p className="text-lg leading-8 text-gray-600">
              The New Trier chapter of BinaryHeart is dedicated to bridging the digital divide 
              by refurbishing computers and distributing them to students and families in need. 
              We believe that access to technology is essential for educational success and 
              personal growth. As a high school chapter, we also have a mission to empower high school 
              students with the tools and resources to make an impact in communities worldwide. 
      
              </p>
            </div>
            </div>
          </div>

          {/* What We Do Section */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
            <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 text-center">
              What We Do
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mb-4">
                <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Refurbish</h3>
              <p className="text-gray-600">
                We collect donated computers and refurbish them to extend their lifespan.
              </p>
              </div>

              <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mb-4">
                <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Distribute</h3>
              <p className="text-gray-600">
                We provide refurbished computers to students and those from underprivliged areas both locally and internationally.
              </p>
              </div>

              <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mb-4">
                <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Educate</h3>
              <p className="text-gray-600">
                We teach students valuable technical skills through hands-on experience with repair and troubleshooting.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
