import React, { useState, useEffect, createElement } from 'react';

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export enum SectionId {
  HOME = 'home',
  SERVICES = 'services',
  ABOUT = 'about',
  CONTACT = 'contact'
}

// Router Utilities
export const useLocation = () => {
  const getLoc = () => {
    // Strip the leading # from the window hash
    const fullHash = window.location.hash.replace(/^#/, '');
    // Handle split for secondary hash (anchor)
    const parts = fullHash.split('#');
    let pathname = parts[0];
    if (!pathname) pathname = '/';
    const hash = parts.length > 1 ? '#' + parts[1] : '';
    return { pathname, hash };
  };

  const [loc, setLoc] = useState(getLoc());

  useEffect(() => {
    const handler = () => setLoc(getLoc());
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  return loc;
};

export const useNavigate = () => {
  return (to: string) => {
    window.location.hash = to;
  };
};

export const Link = ({ to, children, className, onClick, ...props }: any) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented) {
      e.preventDefault();
      // Ensure we push the hash correctly
      const targetHash = to.startsWith('/') ? to : '/' + to;
      window.location.hash = targetHash;
    }
  };

  // We still provide href for accessibility and hover status, but we intercept the click.
  const href = to.startsWith('/') ? '#' + to : '#/' + to;
  
  return createElement('a', { href, className, onClick: handleClick, ...props }, children);
};