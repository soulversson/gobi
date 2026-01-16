import React from 'react';
import { SectionId } from '../types';
import { Logo } from './Logo';
import { Coffee } from 'lucide-react';

interface FooterProps {
    scrollToSection: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer className="bg-gobi-dark text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
             {/* The Logo component now includes the text "Gobi" in SVG format */}
             <div className="bg-white/5 rounded-lg p-2">
                <Logo className="h-12 w-auto" />
             </div>
          </div>
          <div className="flex space-x-6">
             <button onClick={() => scrollToSection(SectionId.HOME)} className="hover:text-gobi-primary transition-colors">Heim</button>
             <button onClick={() => scrollToSection(SectionId.SERVICES)} className="hover:text-gobi-primary transition-colors">Þjónusta</button>
             <button onClick={() => scrollToSection(SectionId.ABOUT)} className="hover:text-gobi-primary transition-colors">Um Okkur</button>
             <button onClick={() => scrollToSection(SectionId.CONTACT)} className="hover:text-gobi-primary transition-colors">Hafa Samband</button>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-sm text-center md:text-left flex flex-col md:flex-row justify-between">
           <p>&copy; {new Date().getFullYear()} Gobi.is - Öll réttindi áskilin.</p>
           <p className="mt-2 md:mt-0 flex items-center justify-center md:justify-start">
             Hannað með <Coffee className="h-4 w-4 mx-1 text-gobi-primary" /> á Íslandi
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;