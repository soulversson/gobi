import React, { useEffect } from 'react';
import { useLocation } from './types';
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
  const { pathname } = useLocation();

  let Component;
  switch (pathname) {
    case '/thjonusta':
      Component = ServicesPage;
      break;
    case '/powerbimessa':
      Component = PowerBiMessaPage;
      break;
    case '/umokkur':
      Component = AboutPage;
      break;
    case '/':
    default:
      Component = Home;
      break;
  }

  return (
      <div className="flex flex-col min-h-screen bg-white">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-grow">
          <Component />
        </main>

        <Footer />
        <ChatWidget />
      </div>
  );
}

export default App;