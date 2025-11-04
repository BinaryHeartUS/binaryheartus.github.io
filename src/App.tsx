import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { usePageTitle } from './hooks/usePageTitle';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Donate from './pages/Donate';
import Request from './pages/Request';
import Join from './pages/Join';

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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} /> 
        <Route path="/donate" element={<Donate />} />
        <Route path="/request" element={<Request />} />
        <Route path="/join" element={<Join />} />
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
