import React from 'react';
import logoImg from '../assets/Logo_OCD.png';

interface BrandLogoProps {
  className?: string;
  imgClassName?: string;
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  imgClassName = 'h-14 sm:h-16 md:h-20 w-auto',
  variant = 'dark',
  showSubtitle = false,
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Real brand logo uploaded by user, prominently sized */}
      <img
        src={logoImg}
        alt="Óscar Carballo - Teleformación Informática"
        className={`${imgClassName} object-contain transition-all duration-200 ${
          variant === 'light' ? 'brightness-0 invert' : ''
        }`}
      />
      {showSubtitle && (
        <span
          className={`hidden sm:inline-block text-xs font-bold tracking-wider uppercase border-l-2 pl-3 py-1 ${
            variant === 'light'
              ? 'border-slate-700 text-blue-200'
              : 'border-slate-200 text-[#003882]'
          }`}
        >
          Teleformación TI
        </span>
      )}
    </div>
  );
};
