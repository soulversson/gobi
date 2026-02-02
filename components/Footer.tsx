import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gobi-dark text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
             <div className="bg-white/5 rounded-lg p-2">
                <Logo className="h-12 w-auto text-white" />
             </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
             <Link to="/" className="hover:text-gobi-primary transition-colors">Heim</Link>
             <Link to="/thjonusta" className="hover:text-gobi-primary transition-colors">Þjónusta</Link>
             <Link to="/powerbimessa" className="hover:text-gobi-primary transition-colors">Power BI Messa</Link>
             <Link to="/umokkur" className="hover:text-gobi-primary transition-colors">Um Okkur</Link>
             <Link to="/#contact" className="hover:text-gobi-primary transition-colors">Hafa Samband</Link>
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