import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

/**
 * Logo Component
 * Centralized place to manage the brand logo.
 * Updated to a text-based logo for better reliability and aesthetic consistency.
 */
const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto", variant = 'dark' }) => {
  const isLight = variant === 'light';
  
  return (
    <div className={`flex items-center select-none ${className} font-display font-bold italic uppercase tracking-tighter`}>
      <span className={isLight ? 'text-white' : 'text-zinc-900'}>
        RezTek
      </span>
      <span className="text-[#EF4444] ml-1">
        Digital
      </span>
    </div>
  );
};

export default Logo;
