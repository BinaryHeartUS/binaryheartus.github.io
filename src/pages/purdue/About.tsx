import StatsGrid from '../../components/StatsGrid';
import BinaryHeartText from '../../components/BinaryHeartText';
import InfoCard from '../../components/InfoCard';
import PictureCard from '../../components/PictureCard';

export default function About() {
  return (
    <main className="grow relative z-10">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-10 sm:pb-16 lg:px-8 lg:pt-16">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              About <BinaryHeartText /> at Purdue University
            </h1>
            <p className="text-xl leading-8 text-gray-700">
              Bridging the digital divide through technology recycling and student empowerment at Purdue University.
            </p>
          </div>
        </div>
      </div>

      {/* Our Chapter Section */}
      <div className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Who We Are</h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Founded in 2025,  Binary Heart at Purdue University is part of a nationwide movement to make technology accessible to everyone. As students at a leading research institution, we leverage our technical expertise and passion for service to refurbish and redistribute technology to those in need.
              </p>
              <p>
                We combine Purdue's spirit of innovation and community engagement with Binary Heart's proven model of student-led service. Our chapter works to ensure that students, families, and community organizations in the Greater Lafayette area and beyond have access to the technology they need to succeed in an increasingly digital world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Binary Heart */}
      <div className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">About Binary Heart</h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Binary Heart is a student-run 501(c)(3) nonprofit organization that was founded at New Trier High School in 2016. Since then, we've grown into a nationwide network of chapters, each working to address the digital divide in their local communities.
              </p>
              <p>
                Our mission is simple but powerful: collect unwanted computers and electronics, refurbish them to like-new condition, and distribute them to students and families who need them. In the process, we keep thousands of pounds of e-waste out of landfills and provide students with hands-on technical skills that prepare them for careers in technology.
              </p>
              <p>
                As a 501(c)(3) organization, donations to Binary Heart are tax-deductible, and we operate with full transparency about our impact and operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter Impact */}
      <div className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600">
              Making a difference in the Greater Lafayette community
            </p>
          </div>

          <StatsGrid chapterId="purdue" colorClass="text-amber-600" columns={3} />
        </div>
      </div>

      {/* What We Do */}
      <div className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6 text-center">What We Do</h2>
            <div className="space-y-6">
              <InfoCard
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                  </svg>
                }
                title="Device Collection & Assessment"
                description="We accept donations of laptops, desktops, tablets, and other electronics from individuals, businesses, and organizations. Each device is carefully assessed to determine if it can be refurbished or should be responsibly recycled."
                bgColorClass="bg-amber-100"
                iconColorClass="text-amber-600"
              />

              <InfoCard
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                }
                title="Expert Refurbishment"
                description="Our students diagnose hardware issues, perform repairs, upgrade components when possible, securely wipe all data, and install fresh operating systems and essential software. Every device leaves our lab in excellent working condition."
                bgColorClass="bg-amber-100"
                iconColorClass="text-amber-600"
              />

              <InfoCard
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                }
                title="Community Distribution"
                description="Refurbished devices are distributed to students, families, and community organizations in need—both locally in Greater Lafayette and internationally. Through partnerships with schools, nonprofits, and social service agencies, we ensure technology reaches those who need it most."
                bgColorClass="bg-amber-100"
                iconColorClass="text-amber-600"
              />

              <InfoCard
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                }
                title="Environmental Sustainability"
                description="By refurbishing electronics instead of discarding them, we prevent e-waste from entering landfills. Devices that can't be refurbished are responsibly recycled through certified partners, ensuring hazardous materials are handled safely."
                bgColorClass="bg-amber-100"
                iconColorClass="text-amber-600"
              />

              <InfoCard
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                }
                title="Skills Development"
                description="Members gain hands-on experience with hardware troubleshooting, software installation, data security protocols, and project management. These practical skills complement academic learning and prepare students for careers in technology."
                bgColorClass="bg-amber-100"
                iconColorClass="text-amber-600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Executive Board */}
      <div className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8 text-center">Meet Our Leadership</h2>
            <div className="flex justify-center">
              <PictureCard
                name="Jacob Doreski"
                role="President"
                imageSrc="/assets/images/chapters/purdue/people/JacobDoreski.png"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Get Involved CTA */}
      <div className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Join Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're a Purdue student looking to make a difference or someone with equipment to donate, there are many ways to get involved with Binary Heart.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/purdue/join"
                className="rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Join Our Chapter
              </a>
              <a
                href="/purdue/donate"
                className="rounded-xl bg-gradient-to-r from-slate-700 to-slate-900 px-6 py-3 text-base font-semibold text-white shadow-lg hover:from-slate-800 hover:to-black transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Donate Equipment
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
