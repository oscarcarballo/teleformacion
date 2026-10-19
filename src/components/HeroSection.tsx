import React, { useState } from 'react';
import { Sparkles, Glasses, Cpu, ArrowRight, ShieldCheck, CheckCircle2, Play } from 'lucide-react';

interface HeroSectionProps {
  onOpenTrial: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTrial }) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white">
      {/* Subtle architectural ambient background */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-slate-100/70 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Hero: Left Text & CTA, Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Lado izquierdo */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed kicker with typographic separators */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#003882] tracking-wide mb-4">
              <span>Teleformación en Informática</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Edición Vanguardia 2026</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-600">Bonificable y Particular</span>
            </div>

            {/* Título principal grande */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6 [text-wrap:balance]">
              Contenidos actualizados y con las últimas novedades
            </h1>

            {/* Subtítulo claro */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
              Utilización de <strong className="font-semibold text-slate-900">Realidad Aumentada</strong>, <strong className="font-semibold text-slate-900">Realidad Virtual</strong> e <strong className="font-semibold text-slate-900">Inteligencia Artificial</strong> para una experiencia formativa inmersiva, práctica y adaptada a la demanda real de las empresas tecnológicas.
            </p>

            {/* Botón de llamada a la acción (CTA) llamativo */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                type="button"
                onClick={onOpenTrial}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-white bg-[#003882] hover:bg-[#002d6b] active:scale-[0.99] rounded-xl shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003882]"
              >
                <span>10 días de prueba</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#beneficios"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors"
              >
                <Play className="w-4 h-4 text-[#003882] fill-[#003882]" />
                <span>Ver metodología inmersiva</span>
              </a>
            </div>

            {/* Reassurances / Social proof snippet */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sin tarjeta de crédito</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Acceso inmediato al campus virtual</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tutor técnico asignado</span>
              </div>
            </div>
          </div>

          {/* Lado derecho: Espacio reservado para imagen o ilustración relevante */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-900 shadow-2xl shadow-slate-900/10">
              {imageLoaded ? (
                <img
                  src="/src/assets/images/hero_teleformacion_tech_1792420809618.jpg"
                  alt="Estudiante e ingenieros interactuando con interfaz holográfica en teleformación tecnológica con Realidad Aumentada e Inteligencia Artificial"
                  className="w-full h-auto aspect-[4/3] object-cover transition-opacity duration-300"
                  referrerPolicy="no-referrer"
                  onError={() => setImageLoaded(false)}
                />
              ) : (
                /* High-fidelity CSS/SVG fallback container */
                <div className="w-full aspect-[4/3] bg-gradient-to-tr from-[#001f4d] via-[#003882] to-slate-900 flex flex-col items-center justify-center p-8 text-center text-white">
                  <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-4 border border-white/20">
                    <Glasses className="w-8 h-8 text-blue-200" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Campus Inmersivo AR · VR · IA</h3>
                  <p className="text-sm text-blue-100 max-w-xs">
                    Simulación de redes, arquitecturas cloud y aprendizaje asistido por algoritmos de última generación.
                  </p>
                </div>
              )}

              {/* In-image interactive status bar */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <span className="font-medium tracking-wide">Campus Virtual Interactivo 3D</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 font-mono text-[11px]">
                  <span>AR</span>
                  <span>·</span>
                  <span>VR</span>
                  <span>·</span>
                  <span>IA</span>
                </div>
              </div>
            </div>

            {/* Floating feature pill (domain subtle highlight) */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white border border-slate-200 p-3.5 rounded-xl shadow-lg items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#003882] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Actualización 2026</p>
                <p className="text-[11px] text-slate-500">Módulos revisados mes a mes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Debajo: Lista de 3 puntos destacados (beneficios rápidos) */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center mb-8">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#003882]">
              Tres pilares diferenciales de nuestra formación
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Punto 1: Contenido */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#003882]/40 transition-colors shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#003882] flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                1. Contenido
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Temarios permanentemente actualizados a las últimas versiones de software, lenguajes de programación, ciberseguridad y servicios cloud empresariales.
              </p>
            </div>

            {/* Punto 2: Novedad */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#003882]/40 transition-colors shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">
                <Glasses className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                2. Novedad
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pioneros en la integración pedagógica de Realidad Aumentada (AR), Realidad Virtual (VR) y tutores inteligentes basados en IA que resuelven dudas al instante.
              </p>
            </div>

            {/* Punto 3: Utilidad */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#003882]/40 transition-colors shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                3. Utilidad
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Enfoque práctico orientado a resultados reales de contratación y promoción laboral, con proyectos de código funcionales y preparación para certificaciones oficiales.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
