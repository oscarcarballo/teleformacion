import React from 'react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onOpenTrial: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTrial }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 min-h-[5.5rem] flex items-center justify-between gap-6 md:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="flex items-center shrink-0 focus-visible:outline-2 focus-visible:outline-[#003882] rounded py-1"
          aria-label="Óscar Carballo Teleformación - Inicio"
        >
          <BrandLogo imgClassName="h-14 sm:h-16 md:h-18 lg:h-20 w-auto" />
        </a>

        {/* Zone 2: 4-5 Clean single-line links */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
          aria-label="Navegación principal"
        >
          <a
            href="#hero"
            className="hover:text-[#003882] transition-colors whitespace-nowrap shrink-0"
          >
            Novedades
          </a>
          <a
            href="#beneficios"
            className="hover:text-[#003882] transition-colors whitespace-nowrap shrink-0"
          >
            Beneficios
          </a>
          <a
            href="#autoridad"
            className="hover:text-[#003882] transition-colors whitespace-nowrap shrink-0"
          >
            Avales y Cifras
          </a>
          <a
            href="#testimonios"
            className="hover:text-[#003882] transition-colors whitespace-nowrap shrink-0"
          >
            Opiniones
          </a>
          <a
            href="#last-call"
            className="hover:text-[#003882] transition-colors whitespace-nowrap shrink-0"
          >
            Prueba Gratuita
          </a>
        </nav>

        {/* Zone 3: 1 Primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenTrial}
            className="px-5 py-2.5 text-sm font-bold text-white bg-[#003882] hover:bg-[#002d6b] active:scale-[0.99] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003882]"
          >
            10 días de prueba
          </button>
        </div>
      </div>
    </header>
  );
};
