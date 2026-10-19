import React from 'react';
import { Layers, Bot, Rocket, ArrowRight, Check } from 'lucide-react';

interface BenefitsSectionProps {
  onOpenTrial: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onOpenTrial }) => {
  const benefits = [
    {
      id: 'contenido',
      icon: Layers,
      title: 'Contenido Continuamente Actualizado',
      description:
        'Aprende exactamente las herramientas, lenguajes y arquitecturas que las empresas de vanguardia utilizan hoy. Nuestros programas se revisan de forma continua para eliminar conceptos en desuso.',
      highlights: [
        'Versiones vigentes en Python, JavaScript/TypeScript, Go y Rust',
        'Arquitecturas Cloud en AWS, Azure y Google Cloud Platform',
        'Ciberseguridad aplicada, DevSecOps y contenedores Kubernetes',
      ],
      iconBg: 'bg-blue-50 text-[#003882]',
      accentBorder: 'hover:border-blue-300',
    },
    {
      id: 'novedad',
      icon: Bot,
      title: 'Novedad con AR, VR e Inteligencia Artificial',
      description:
        'Rompe las barreras de la teleformación tradicional. Integra laboratorios de Realidad Virtual para simular centros de datos y diagramas en AR, junto a tutores de IA dedicados 24/7.',
      highlights: [
        'Simuladores inmersivos de topologías de red en 3D y VR',
        'Visualización de flujos y microservicios con Realidad Aumentada',
        'Asistente de Inteligencia Artificial para depuración de código en tiempo real',
      ],
      iconBg: 'bg-indigo-50 text-indigo-700',
      accentBorder: 'hover:border-indigo-300',
    },
    {
      id: 'utilidad',
      icon: Rocket,
      title: 'Utilidad y Aplicabilidad Laboral Inmediata',
      description:
        'Cada hora invertida tiene un retorno directo en tu carrera o en la productividad de tu empresa. Construyes proyectos reales desde el día uno que validan tu competencia técnica.',
      highlights: [
        'Portfolio de proyectos reales listos para GitHub y entrevistas técnicas',
        'Preparación orientada a certificaciones oficiales de la industria',
        'Alineado con los requerimientos de contratación y bonificaciones Fundae',
      ],
      iconBg: 'bg-emerald-50 text-emerald-700',
      accentBorder: 'hover:border-emerald-300',
    },
  ];

  return (
    <section id="beneficios" className="py-20 md:py-28 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#003882] mb-3">
            Ventajas competitivas
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 [text-wrap:balance]">
            Diseñado para quien necesita dominar la informática sin perder tiempo
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Unimos rigor técnico y tecnología de última generación para crear la experiencia de teleformación más efectiva del mercado hispanohablante.
          </p>
        </div>

        {/* Grid de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.id}
                className={`flex flex-col bg-white p-8 rounded-2xl border border-slate-200 ${benefit.accentBorder} shadow-sm transition-all duration-200 hover:shadow-md`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${benefit.iconBg} flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {benefit.description}
                </p>

                {/* Highlights */}
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <ul className="space-y-2.5">
                    {benefit.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-normal">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Debajo: Botón CTA centrado */}
        <div className="flex flex-col items-center justify-center text-center">
          <button
            type="button"
            onClick={onOpenTrial}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-white bg-[#003882] hover:bg-[#002d6b] active:scale-[0.99] rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003882]"
          >
            <span>10 días de prueba</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="mt-3 text-xs text-slate-500">
            Prueba sin compromiso · Acceso total al campus virtual y laboratorios
          </p>
        </div>
      </div>
    </section>
  );
};
