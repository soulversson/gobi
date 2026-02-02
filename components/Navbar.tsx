import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const currentHash = location.hash;

  const isActive = (path: string, hash?: string) => {
    if (hash) {
      return currentPath === path && currentHash === hash;
    }
    // Strict check for root, otherwise standard check
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  const navItems = [
    { label: 'Heim', to: '/', hash: '', active: isActive('/') && !currentHash },
    { label: 'Þjónusta', to: '/thjonusta', active: isActive('/thjonusta') },
    { label: 'Power BI Messa', to: '/powerbimessa', active: isActive('/powerbimessa') },
    { label: 'Um Okkur', to: '/umokkur', active: isActive('/umokkur') },
    { label: 'Hafa Samband', to: '/', hash: '#contact', active: currentHash === '#contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gobi-secondary/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer h-full py-4">
            <Logo className="h-full w-auto text-gobi-dark" />
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={`${item.to}${item.hash || ''}`}
                className={`${
                  item.active ? 'text-gobi-primary font-bold' : 'text-gobi-dark hover:text-gobi-primary'
                } transition-colors duration-200 text-sm uppercase tracking-wide`}
              >
                {item.label}
              </Link>
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
              <Link
                key={index}
                to={`${item.to}${item.hash || ''}`}
                onClick={handleNavClick}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    item.active ? 'text-gobi-primary bg-orange-50' : 'text-gobi-dark hover:text-gobi-primary hover:bg-orange-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;