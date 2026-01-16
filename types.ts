import React from 'react';

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

export type ViewState = 'HOME' | 'SERVICES_DETAIL' | 'POWER_BI_MESSA' | 'ABOUT_PAGE';