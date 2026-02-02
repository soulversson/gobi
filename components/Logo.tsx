import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <div className={`flex items-center ${className}`}>
    <svg 
      id="Layer_2" 
      data-name="Layer 2" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 595.78 284.36"
      className="h-full w-auto"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="gobi-linear-gradient" x1="261.85" y1="54.84" x2="269.27" y2="222.81" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f95851"/>
          <stop offset="1" stopColor="#ffd57a"/>
        </linearGradient>
        <clipPath id="gobi-clippath">
          <circle cx="265.65" cy="140.97" r="84.49" fill="none"/>
        </clipPath>
        <linearGradient id="gobi-linear-gradient-2" x1="347.37" y1="278.77" x2="297.03" y2="153.66" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#d0852b"/>
          <stop offset="1" stopColor="#fad890"/>
        </linearGradient>
        <linearGradient id="gobi-linear-gradient-3" x1="224.77" y1="235.76" x2="214.48" y2="145.77" xlinkHref="#gobi-linear-gradient-2" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#d0852b"/>
          <stop offset="1" stopColor="#fad890"/>
        </linearGradient>
        <linearGradient id="gobi-linear-gradient-4" x1="271.81" y1="174.62" x2="182.71" y2="256.4" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#d0852b"/>
          <stop offset="1" stopColor="#edb153"/>
        </linearGradient>
      </defs>
      <g id="Layer_1-2" data-name="Layer 1">
        <g>
          {/* Text paths set to currentColor to inherit color from props (white in footer, dark in navbar) */}
          <path fill="currentColor" d="M80.97,61.81C33.49,61.81,0,95.29,0,140.97c0,51.15,37.13,77.93,76.11,77.93,25.26,0,46.27-11.57,56.62-31.06v17.36c0,39.26-20.4,53.89-51.13,53.89-21.94,0-39.58-7.62-46.59-24.98H5.47c10.35,34.72,39.28,50.24,76.13,50.24,44.45,0,79.76-22.53,79.76-80.37v-61.81c0-48.42-32.88-80.38-80.38-80.38ZM80.97,191.8c-31.04,0-51.74-20.38-51.74-50.83s20.7-52.37,51.74-52.37,51.76,21.92,51.76,52.37-20.7,50.83-51.76,50.83Z"/>
          <path fill="currentColor" d="M455.73,61.81c-24.35,0-45.05,10.96-56.01,30.45V0h-28.93v139.76c0,49.01,33.51,80.37,80.08,80.37s81.3-32.88,81.3-80.06c0-49.94-37.15-78.26-76.43-78.26ZM451.17,193.34c-30.75,0-51.46-21.92-51.46-52.37s20.7-52.37,51.46-52.37,51.76,21.92,51.76,52.37-20.7,52.37-51.76,52.37Z"/>
          <path fill="currentColor" d="M561.38,65.78v150.4h28.91V65.78h-28.91ZM575.68,1.54c-11.57,0-20.1,8.51-20.1,20.1s8.53,20.38,20.1,20.38,20.1-8.81,20.1-20.38-8.53-20.1-20.1-20.1Z"/>
          
          {/* Graphic Element (The O) with Gradients */}
          <path fill="url(#gobi-linear-gradient)" d="M265.64,56.48c-46.66,0-84.48,37.83-84.48,84.5,0,12.35,2.65,24.08,7.42,34.67l22.67-14.16c-2.4-6.38-3.72-13.28-3.72-20.51,0-32.09,26.01-58.11,58.11-58.11s58.11,26.01,58.11,58.11c0,7.58-1.45,14.8-4.09,21.44l22.74,13.93c4.97-10.76,7.74-22.74,7.74-35.36,0-46.66-37.83-84.5-84.5-84.5ZM265.64,199.08c-20.61,0-38.73-10.75-49.04-26.93l-22.37,13.98c14.98,23.64,41.35,39.32,71.41,39.32s56.46-15.7,71.44-39.35l-22.51-13.78c-10.32,16.09-28.39,26.76-48.93,26.76Z"/>
          <g clipPath="url(#gobi-clippath)">
            <path fill="url(#gobi-linear-gradient-2)" d="M236.57,184.78c2.32,12.39,53.45,1,69.71,7.7,9.79,4.03,8.62,18.24-5.21,32.97h97.92l-133.61-84.19s-31.14,31.13-28.81,43.52Z"/>
            <path fill="url(#gobi-linear-gradient-3)" d="M301.07,225.46c13.83-14.73,15-28.94,5.21-32.97-16.27-6.7-67.39,4.69-69.71-7.7-2.32-12.39,28.81-43.52,28.81-43.52l-133.61,84.19h169.3Z"/>
            <path fill="url(#gobi-linear-gradient-4)" d="M301.07,225.46c13.83-14.73,15-28.94,5.21-32.97-16.27-6.7-67.39,4.69-69.71-7.7-2.32-12.39,28.81-43.52,28.81-43.52l-133.61,84.19h169.3Z"/>
          </g>
        </g>
      </g>
    </svg>
  </div>
);

export default Logo;