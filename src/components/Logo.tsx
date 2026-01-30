import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-gray-900';
  const accentColor = variant === 'light' ? 'text-gray-400' : 'text-gray-500';

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect width="40" height="40" rx="2" className={variant === 'light' ? 'fill-white/10' : 'fill-blue-900'} />
        {/* W Shape */}
        <path
          d="M7 13L12 27L17 13L22 27L27 13"
          className="stroke-white"
          strokeWidth="2.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        {/* L Shape */}
        <path
          d="M32 13V27H37"
          className="stroke-white"
          strokeWidth="2.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </svg>
      
      <div className="flex flex-col justify-center">
        <span className={`font-serif text-xl tracking-tight font-bold ${textColor} leading-none`}>
          Whitt Lewis
        </span>
        <span className={`text-xs uppercase tracking-[0.2em] font-bold ${accentColor} mt-1`}>
          Holdings
        </span>
      </div>
    </div>
  );
};
