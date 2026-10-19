import React from 'react';
import { ArrowRight, ShieldCheck, Zap, HelpCircle } from 'lucide-react';

interface LastCallSectionProps {
  onOpenTrial: () => void;
}

export const LastCallSection: React.FC<LastCallSectionProps> = ({ onOpenTrial }) => {
  return (
    <section id="last-call" className="relative py-20 md:py-28 bg-[#090f1d] text-white overflow-hidden border-t border-slate-800">
      {/* Background glow highlights */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#003882]/40 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Unboxed subtle kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-6">
          <span>Última llamada</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Acceso inmediato</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Sin permanencia</span>
        </div>

        {/* Título que refuerce la oferta */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 [text-wrap:balance]">
          Empieza a dominar la informática del futuro con 10 días de prueba sin coste
        </h2>

        {/* Subtítulo persuasivo */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
          Descubre el impacto de formarte con contenidos 100% actualizados, laboratorios de Realidad Virtual y Aumentada, y el acompañamiento continuo de tutores e Inteligencia Artificial.
        </p>

        {/* Botón CTA final */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            type="button"
            onClick={onOpenTrial}
            className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-9 py-5 text-lg font-bold text-white bg-[#0047AB] hover:bg-[#003882] active:scale-[0.99] rounded-xl shadow-xl shadow-blue-950/60 hover:shadow-2xl transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            <span>10 días de prueba</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 3 Garantías / Elementos de tranquilidad */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 border-t border-slate-800/80 text-xs text-slate-300">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Sin datos bancarios ni tarjeta</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Activación del campus en menos de 5 min</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Soporte directo con Óscar Carballo</span>
          </div>
        </div>

      </div>
    </section>
  );
};
