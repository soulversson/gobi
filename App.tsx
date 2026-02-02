import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import PowerBiMessaPage from './components/PowerBiMessaPage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';

// Helper component to handle scrolling on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there is a hash, attempt to scroll to the element
      const id = hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

// The Home page component combining the sections
const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  );
};

function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-white">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thjonusta" element={<ServicesPage />} />
            <Route path="/powerbimessa" element={<PowerBiMessaPage />} />
            <Route path="/umokkur" element={<AboutPage />} />
          </Routes>
        </main>

        <Footer />
        <ChatWidget />
      </div>
    </HashRouter>
  );
}

export default App;