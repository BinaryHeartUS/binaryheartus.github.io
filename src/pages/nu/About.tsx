import StatsGrid from '../../components/StatsGrid';
import BinaryHeartText from '../../components/BinaryHeartText';
import InfoCard from '../../components/InfoCard';
import PictureCard from '../../components/PictureCard';
import PictureCardGrid from '../../components/PictureCardGrid';
import { NORTHWESTERN_COLORS } from '../../utils/brandColors';

export default function About() {

  return (
    <main className="grow relative z-10">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-10 sm:pb-16 lg:px-8 lg:pt-16">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
              About <BinaryHeartText /> at Northwestern University
            </h1>
            <p className="text-lg sm:text-xl leading-7 sm:leading-8 text-gray-700">
              Bridging the digital divide through technology recycling and student empowerment at Northwestern University.
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
                Founded in 2024, BinaryHeart at Northwestern represents the expansion of a nationwide movement to make technology accessible to everyone. As students at one of the nation's top research universities, we bring diverse expertise and perspectives to our mission of refurbishing and redistributing technology.
              </p>
              <p>
                We combine Northwestern's culture of innovation, collaboration, and service with BinaryHeart's proven model of student-led community impact. We work to ensure that students, families, and community organizations in the Evanston and Chicago area have access to the technology they need to succeed in an increasingly digital world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About BinaryHeart */}
      <div className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">About BinaryHeart</h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                BinaryHeart is a student-run 501(c)(3) nonprofit organization that was founded at New Trier High School in 2016. Since then, we've grown into a nationwide network of chapters, each working to address the digital divide in their local communities.
              </p>
              <p>
                Our mission is simple but powerful: collect unwanted computers and electronics, refurbish them to like-new condition, and distribute them to students and families who need them. In the process, we keep thousands of pounds of e-waste out of landfills and provide students with hands-on technical skills that prepare them for careers in technology.
              </p>
              <p>
                As a 501(c)(3) organization, donations to BinaryHeart are tax-deductible, and we operate with full transparency about our impact and operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter Impact */}
      <div className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StatsGrid chapterId="nu" colorClass={NORTHWESTERN_COLORS.TEXT} columns={3} community="Evanston and Chicago"/>
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
                bgColorClass={NORTHWESTERN_COLORS.BG_LIGHT}
                iconColorClass={NORTHWESTERN_COLORS.TEXT}
              />

              <InfoCard
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                }
                title="Expert Refurbishment"
                description="Our student volunteers diagnose hardware issues, perform repairs, upgrade components when possible, securely wipe all data, and install fresh operating systems and essential software. Every device leaves our workspace in excellent working condition."
                bgColorClass={NORTHWESTERN_COLORS.BG_LIGHT}
                iconColorClass={NORTHWESTERN_COLORS.TEXT}
              />

              <InfoCard
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                }
                title="Community Distribution"
                description="Refurbished devices are distributed to students, families, and community organizations in need—both locally in Evanston and the greater Chicago area. Through partnerships with schools, nonprofits, and social service agencies, we ensure technology reaches those who need it most."
                bgColorClass={NORTHWESTERN_COLORS.BG_LIGHT}
                iconColorClass={NORTHWESTERN_COLORS.TEXT}
              />

              <InfoCard
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                }
                title="Skills Development"
                description="Our volunteers gain hands-on experience with hardware troubleshooting, software installation, data security, project management, and community outreach—skills that are invaluable for future careers in technology and beyond."
                bgColorClass={NORTHWESTERN_COLORS.BG_LIGHT}
                iconColorClass={NORTHWESTERN_COLORS.TEXT}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className={`py-8 sm:py-12`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Leadership Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              Meet the students leading BinaryHeart at Northwestern
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <PictureCardGrid>
              <PictureCard
                imageSrc="/assets/images/chapters/nu/people/EnzoCaggiano.jpg"
                name="Enzo Caggiano"
                role="President"
              />

              <PictureCard
                imageSrc="/assets/images/chapters/nu/people/CoreyZhang.jpeg"
                name="Corey Zhang"
                role="Technical Director"
              />

              <PictureCard
                imageSrc="/assets/images/chapters/nu/people/BreannaLu.jpeg"
                name="Breanna Lu"
                role="Director of Operations"
              />

              <PictureCard
                imageSrc="/assets/images/chapters/nu/people/AisteSiupienius.png"
                name="Aiste Siupienius"
                role="Treasurer"
              />

              <PictureCard
                imageSrc="/assets/images/chapters/nu/people/MichaelGeohas.jpg"
                name="Michael Geohas"
                role="Chief Marketing Officer"
              />

              <PictureCard
                imageSrc="/assets/images/chapters/nu/people/LuciaMcConnell.png"
                name="Lucia McConnell"
                role="Advisor"
              />
            </PictureCardGrid>
          </div>
        </div>
      </div>

      {/* Get Involved CTA */}
      <div className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className={`relative rounded-2xl bg-gradient-to-br ${NORTHWESTERN_COLORS.GRADIENT_PRIMARY} p-8 sm:p-12 shadow-2xl overflow-hidden`}>
              <div className="relative">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                  Join Our Mission
                </h2>
                <p className="text-lg text-purple-100 mb-8">
                  Whether you want to volunteer, donate devices, or support our work financially, there are many ways to get involved with BinaryHeart at Northwestern.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/nu/join"
                    className={`inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold ${NORTHWESTERN_COLORS.TEXT} shadow-sm hover:bg-purple-50 transition-colors`}
                  >
                    Become a Volunteer
                  </a>
                  <a
                    href="/nu/donate"
                    className="inline-flex items-center justify-center rounded-lg bg-purple-800 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-purple-900 transition-colors ring-1 ring-white/20"
                  >
                    Donate Devices
                  </a>
                  <a
                    href="/nu/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-purple-800 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-purple-900 transition-colors ring-1 ring-white/20"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
