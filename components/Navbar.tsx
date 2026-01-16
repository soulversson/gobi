import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId, ViewState } from '../types';
import { Logo } from './Logo';

interface NavbarProps {
  currentView: ViewState;
  activeSection: SectionId;
  navigateTo: (view: ViewState, target?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, activeSection, navigateTo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Heim', action: () => navigateTo('HOME', SectionId.HOME), active: currentView === 'HOME' && activeSection === SectionId.HOME },
    { label: 'Þjónusta', action: () => navigateTo('SERVICES_DETAIL'), active: currentView === 'SERVICES_DETAIL' },
    { label: 'Power BI Messa', action: () => navigateTo('POWER_BI_MESSA'), active: currentView === 'POWER_BI_MESSA' },
    { label: 'Um Okkur', action: () => navigateTo('ABOUT_PAGE'), active: currentView === 'ABOUT_PAGE' },
    { label: 'Hafa Samband', action: () => navigateTo('HOME', SectionId.CONTACT), active: currentView === 'HOME' && activeSection === SectionId.CONTACT },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gobi-secondary/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer h-full py-4" onClick={() => navigateTo('HOME', SectionId.HOME)}>
            <Logo className="h-full w-auto" />
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className={`${
                  item.active ? 'text-gobi-primary font-bold' : 'text-gobi-dark hover:text-gobi-primary'
                } transition-colors duration-200 text-sm uppercase tracking-wide`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gobi-dark hover:text-gobi-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.action();
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    item.active ? 'text-gobi-primary bg-orange-50' : 'text-gobi-dark hover:text-gobi-primary hover:bg-orange-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;