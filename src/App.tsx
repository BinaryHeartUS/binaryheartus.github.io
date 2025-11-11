import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { usePageTitle } from './hooks/usePageTitle';

// National pages
import NationalHome from './pages/national/Home';
import NationalAbout from './pages/national/About';
import NationalContact from './pages/national/Contact';
import NationalFAQ from './pages/national/FAQ';
import NationalDonate from './pages/national/Donate';
import NationalRequest from './pages/national/Request';
import NationalJoin from './pages/national/Join';

// IU pages
import IUHome from './pages/iu/Home';
import IUAbout from './pages/iu/About';
import IUContact from './pages/iu/Contact';
import IUDonate from './pages/iu/Donate';
import IUJoin from './pages/iu/Join';

// Purdue pages
import PurdueHome from './pages/purdue/Home';
import PurdueAbout from './pages/purdue/About';
import PurdueContact from './pages/purdue/Contact';
import PurdueDonate from './pages/purdue/Donate';
import PurdueJoin from './pages/purdue/Join';

// NT pages
import NTHome from './pages/nt/Home';
import NTAbout from './pages/nt/About';
import NTContact from './pages/nt/Contact';
import NTDonate from './pages/nt/Donate';
import NTJoin from './pages/nt/Join';

// Rose-Hulman pages
import RoseHulmanHome from './pages/rose-hulman/Home';
import RoseHulmanAbout from './pages/rose-hulman/About';
import RoseHulmanContact from './pages/rose-hulman/Contact';
import RoseHulmanDonate from './pages/rose-hulman/Donate';
import RoseHulmanJoin from './pages/rose-hulman/Join';

// NU pages
import NUHome from './pages/nu/Home';
import NUAbout from './pages/nu/About';
import NUContact from './pages/nu/Contact';
import NUDonate from './pages/nu/Donate';
import NUJoin from './pages/nu/Join';

// WP pages
import WPHome from './pages/wp/Home';
import WPAbout from './pages/wp/About';
import WPContact from './pages/wp/Contact';
import WPDonate from './pages/wp/Donate';
import WPJoin from './pages/wp/Join';

function AppContent() {
  // Update page title based on current route
  usePageTitle();

  return (
    <div className="flex flex-col min-h-screen relative isolate overflow-hidden">
      {/* Global background gradients */}
      <div className="absolute inset-x-0 -top-40 z-0 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-400 to-blue-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      <div className="absolute inset-x-0 top-[calc(50%-13rem)] z-0 transform-gpu overflow-hidden blur-3xl sm:top-[calc(50%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-red-400 to-pink-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div>

      <Header />
      <Routes>
        {/* National routes */}
        <Route path="/" element={<NationalHome />} />
        <Route path="/about" element={<NationalAbout />} />
        <Route path="/contact" element={<NationalContact />} />
        <Route path="/faq" element={<NationalFAQ />} /> 
        <Route path="/donate" element={<NationalDonate />} />
        <Route path="/request" element={<NationalRequest />} />
        <Route path="/join" element={<NationalJoin />} />

        {/* IU Chapter routes */}
        <Route path="/iu" element={<IUHome />} />
        <Route path="/iu/about" element={<IUAbout />} />
        <Route path="/iu/contact" element={<IUContact />} />
        <Route path="/iu/donate" element={<IUDonate />} />
        <Route path="/iu/join" element={<IUJoin />} />

        {/* Purdue Chapter routes */}
        <Route path="/purdue" element={<PurdueHome />} />
        <Route path="/purdue/about" element={<PurdueAbout />} />
        <Route path="/purdue/contact" element={<PurdueContact />} />
        <Route path="/purdue/donate" element={<PurdueDonate />} />
        <Route path="/purdue/join" element={<PurdueJoin />} />

        {/* NT Chapter routes */}
        <Route path="/nt" element={<NTHome />} />
        <Route path="/nt/about" element={<NTAbout />} />
        <Route path="/nt/contact" element={<NTContact />} />
        <Route path="/nt/donate" element={<NTDonate />} />
        <Route path="/nt/join" element={<NTJoin />} />

        {/* Rose-Hulman Chapter routes */}
        <Route path="/rose-hulman" element={<RoseHulmanHome />} />
        <Route path="/rose-hulman/about" element={<RoseHulmanAbout />} />
        <Route path="/rose-hulman/contact" element={<RoseHulmanContact />} />
        <Route path="/rose-hulman/donate" element={<RoseHulmanDonate />} />
        <Route path="/rose-hulman/join" element={<RoseHulmanJoin />} />

        {/* NU Chapter routes */}
        <Route path="/nu" element={<NUHome />} />
        <Route path="/nu/about" element={<NUAbout />} />
        <Route path="/nu/contact" element={<NUContact />} />
        <Route path="/nu/donate" element={<NUDonate />} />
        <Route path="/nu/join" element={<NUJoin />} />

        {/* WP Chapter routes */}
        <Route path="/wp" element={<WPHome />} />
        <Route path="/wp/about" element={<WPAbout />} />
        <Route path="/wp/contact" element={<WPContact />} />
        <Route path="/wp/donate" element={<WPDonate />} />
        <Route path="/wp/join" element={<WPJoin />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
