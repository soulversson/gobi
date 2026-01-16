import React, { useState } from 'react';
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
import { SectionId, ViewState } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HOME);
  const [scrollTarget, setScrollTarget] = useState<string | undefined>(undefined);

  const navigateTo = (view: ViewState, target?: string) => {
    setCurrentView(view);
    setScrollTarget(undefined); // Reset previous target
    
    if (view === 'HOME' && target) {
      // For Home, target is usually a SectionId
      setActiveSection(target as SectionId);
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else if (target) {
        // For other pages, target is an ID within that page
        setScrollTarget(target);
    } else {
        // Reset scroll when changing full views without a target
        window.scrollTo(0,0);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        currentView={currentView}
        activeSection={activeSection} 
        navigateTo={navigateTo} 
      />
      
      <main>
        {currentView === 'HOME' && (
          <>
            <Hero scrollToSection={(id) => navigateTo('HOME', id)} />
            <Services navigateTo={navigateTo} />
            <About navigateTo={navigateTo} />
            <Contact />
          </>
        )}
        
        {currentView === 'SERVICES_DETAIL' && (
           <ServicesPage navigateTo={navigateTo} scrollTarget={scrollTarget} />
        )}

        {currentView === 'POWER_BI_MESSA' && (
            <PowerBiMessaPage />
        )}

        {currentView === 'ABOUT_PAGE' && (
            <AboutPage />
        )}
      </main>

      <Footer scrollToSection={(id) => navigateTo('HOME', id)} />
      <ChatWidget />
    </div>
  );
}

export default App;