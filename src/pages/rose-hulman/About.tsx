import PhotoCarousel from '../../components/PhotoCarousel';
import StatsGrid from '../../components/StatsGrid';
import BinaryHeartText from '../../components/BinaryHeartText';
import InfoCard from '../../components/InfoCard';
import PictureCard from '../../components/PictureCard';
import PictureCardGrid from '../../components/PictureCardGrid';
import { ROSE_HULMAN_COLORS } from '../../utils/brandColors';

export default function About() {
  const galleryImages = [
    '/assets/images/chapters/rose-hulman/photos/gallery-1.jpg',
    '/assets/images/chapters/rose-hulman/photos/gallery-2.jpg',
    '/assets/images/chapters/rose-hulman/photos/gallery-3.jpg',
    '/assets/images/chapters/rose-hulman/photos/gallery-4.jpg',
    '/assets/images/chapters/rose-hulman/photos/gallery-5.jpg',
    '/assets/images/chapters/rose-hulman/photos/gallery-6.jpg'
  ];

  return (
    <main className="grow relative z-10">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-10 sm:pb-16 lg:px-8 lg:pt-16">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              About <BinaryHeartText /> at Rose-Hulman Institute of Technology
            </h1>
            <p className="text-xl leading-8 text-gray-700">
              Bridging the digital divide through technology recycling and student empowerment at Rose-Hulman Institute of Technology.
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
                Founded in 2025, Binary Heart at Rose-Hulman represents the latest expansion of a nationwide movement to make technology accessible to everyone. As engineering students at one of the nation's top technical institutions, we bring unique expertise in hardware, software, and systems to our mission of refurbishing and redistributing technology.
              </p>
              <p>
                We combine Rose-Hulman's culture of innovation and hands-on problem-solving with Binary Heart's proven model of student-led community service. We work to ensure that students, families, and community organizations in the Terre Haute area and beyond have access to the technology they need to succeed in an increasingly digital world.
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
          <StatsGrid chapterId="rose-hulman" colorClass={ROSE_HULMAN_COLORS.TEXT} columns={3} community="Terre Haute" />
        </div>
      </div>

      {/* Photo Gallery Carousel */}
      <PhotoCarousel 
        images={galleryImages}
        title="Our Chapter in Action"
        subtitle="See our team making an impact in the community"
      />

      {/* Instagram Follow Link */}
      <div className="pb-8 -mt-4">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center">
            <a
              href="https://www.instagram.com/binaryheartrhit"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-gray-600 ${ROSE_HULMAN_COLORS.TEXT_HOVER} transition-colors`}
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="font-medium">Follow our journey on Instagram @binaryheartrhit</span>
            </a>
          </div>
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
                bgColorClass={ROSE_HULMAN_COLORS.BG_LIGHT}
                iconColorClass={ROSE_HULMAN_COLORS.TEXT}
              />

              <InfoCard
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                }
                title="Expert Refurbishment"
                description="Our engineering students diagnose hardware issues, perform repairs, upgrade components when possible, securely wipe all data, and install fresh operating systems and essential software. Every device leaves our lab in excellent working condition."
                bgColorClass={ROSE_HULMAN_COLORS.BG_LIGHT}
                iconColorClass={ROSE_HULMAN_COLORS.TEXT}
              />

              <InfoCard
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                }
                title="Community Distribution"
                description="Refurbished devices are distributed to students, families, and community organizations in need—both locally in Terre Haute and internationally. Through partnerships with schools, nonprofits, and social service agencies, we ensure technology reaches those who need it most."
                bgColorClass={ROSE_HULMAN_COLORS.BG_LIGHT}
                iconColorClass={ROSE_HULMAN_COLORS.TEXT}
              />

              <InfoCard
                icon={
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                }
                title="Skills Development"
                description="Our volunteers gain hands-on experience with hardware troubleshooting, software installation, data security, project management, and community outreach—skills that are invaluable for future careers in engineering and technology."
                bgColorClass={ROSE_HULMAN_COLORS.BG_LIGHT}
                iconColorClass={ROSE_HULMAN_COLORS.TEXT}
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
              Meet the students leading Binary Heart at Rose-Hulman
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <PictureCardGrid>
              <PictureCard
                imageSrc="/assets/images/chapters/rose-hulman/people/TalBelkind.jpg"
                name="Tal Belkind"
                role="President"
                linkedin="https://www.linkedin.com/in/tal-belkind-4a2a752aa/"
                github="https://github.com/2tmb2"
                email="talbelkind@binaryheart.org"
              />

              <PictureCard
                imageSrc="/assets/images/chapters/rose-hulman/people/JosephZeru.jpg"
                name="Joseph Zeru"
                role="Vice President"
                linkedin="https://www.linkedin.com/in/joseph-zeru/"
                github="https://github.com/jose-up"
                email="zerujb@rose-hulman.edu"
              />

              <PictureCard
                imageSrc="/assets/images/chapters/rose-hulman/people/HunterSnyder.jpg"
                name="Hunter Snyder"
                role="Secretary"
                linkedin="https://www.linkedin.com/in/hunter-snyder-ba834032b/"
                email="snyderh1@rose-hulman.edu"
              />

              <PictureCard
                imageSrc="/assets/images/chapters/rose-hulman/people/BryceHuey.jpeg"
                name="Bryce Huey"
                role="Treasurer"
                linkedin="https://www.linkedin.com/in/bryce-huey-858ba628b/"
                email="hueybm@rose-hulman.edu"
              />

              <PictureCard
                imageSrc="/assets/images/chapters/rose-hulman/people/AnthonyFlores.jpg"
                name="Anthony Flores"
                role="Director of Internal Affairs"
                linkedin="https://www.linkedin.com/in/anthony-flores-b5287a332/"
                email="floresa@rose-hulman.edu"
              />

              <PictureCard
                imageSrc="/assets/images/chapters/rose-hulman/people/KatieCotellesso.jpg"
                name="Katie Cotellesso"
                role="Director of Outreach"
                linkedin="https://www.linkedin.com/in/katie-cotellesso-93a41632a/"
                email="cotellkl@rose-hulman.edu"
              />
            </PictureCardGrid>
          </div>
        </div>
      </div>

      {/* Get Involved CTA */}
      <div className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className={`relative rounded-2xl bg-gradient-to-br ${ROSE_HULMAN_COLORS.GRADIENT_PRIMARY} p-8 sm:p-12 shadow-2xl overflow-hidden`}>
              <div className="relative">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                  Join Our Mission
                </h2>
                <p className="text-lg text-red-100 mb-8">
                  Whether you want to volunteer, donate devices, or support our work financially, there are many ways to get involved with Binary Heart at Rose-Hulman.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <a
                    href="/rose-hulman/join"
                    className={`inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold ${ROSE_HULMAN_COLORS.TEXT} shadow-sm hover:bg-gray-50 transition-colors`}
                  >
                    Become a Volunteer
                  </a>
                  <a
                    href="/rose-hulman/donate"
                    className="inline-flex items-center justify-center rounded-lg bg-[#700000] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#600000] transition-colors ring-1 ring-white/20"
                  >
                    Donate Devices
                  </a>
                  <a
                    href="/rose-hulman/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-[#700000] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#600000] transition-colors ring-1 ring-white/20"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <a
                    href="https://www.instagram.com/binaryheartrhit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                  >
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-lg font-medium">Follow us @binaryheartrhit</span>
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
