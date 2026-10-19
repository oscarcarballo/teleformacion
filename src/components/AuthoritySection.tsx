import React from 'react';
import { Award, Users, BookMarked, Clock } from 'lucide-react';

export const AuthoritySection: React.FC = () => {
  const metrics = [
    {
      id: 'students',
      icon: Users,
      value: '+15.400',
      label: 'Alumnos y profesionales formados',
      sublabel: 'Empresas y alumnos particulares',
    },
    {
      id: 'satisfaction',
      icon: Award,
      value: '98,7%',
      label: 'Índice de satisfacción auditada',
      sublabel: 'Evaluación media de 4.9/5',
    },
    {
      id: 'courses',
      icon: BookMarked,
      value: '+120',
      label: 'Cursos y módulos tecnológicos',
      sublabel: 'Con integración AR, VR e IA',
    },
    {
      id: 'activation',
      icon: Clock,
      value: '< 5 min',
      label: 'Activación inmediata del campus',
      sublabel: 'Tus 10 días empiezan al instante',
    },
  ];

  const techBadges = [
    { name: 'Python' },
    { name: 'AWS Cloud' },
    { name: 'Microsoft Azure' },
    { name: 'Google Cloud' },
    { name: 'OpenAI & LLMs' },
    { name: 'Unity AR / VR' },
    { name: 'Linux Foundation' },
    { name: 'Docker & K8s' },
  ];

  return (
    <section id="autoridad" className="relative bg-[#003882] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Frase de autoridad principal */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-300 mb-3">
            Garantía de calidad académica y tecnológica
          </p>
          <blockquote className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug [text-wrap:balance]">
            «Más de 15 años de liderazgo en teleformación informática, capacitando a profesionales con las tecnologías que definen el mercado laboral actual.»
          </blockquote>
          <p className="mt-4 text-sm text-blue-200">
            Dirección docente y contenidos liderados por Óscar Carballo · Metodología avalada para bonificación empresarial Fundae.
          </p>
        </div>

        {/* Métricas en bloque horizontal */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 pb-16 border-b border-blue-400/20">
          {metrics.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="text-center sm:text-left flex flex-col sm:items-start items-center">
                <div className="w-10 h-10 rounded-lg bg-blue-700/50 flex items-center justify-center text-cyan-300 mb-3 border border-blue-400/20">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight mb-1">
                  {item.value}
                </div>
                <p className="text-sm font-semibold text-blue-100 mb-0.5">
                  {item.label}
                </p>
                <p className="text-xs text-blue-300/80">
                  {item.sublabel}
                </p>
              </div>
            );
          })}
        </div>

        {/* Ecosistema de tecnologías y estándares de confianza */}
        <div>
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-blue-200 mb-6">
            Ecosistemas tecnológicos certificados en nuestros programas
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
            {techBadges.map((badge, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-lg bg-blue-900/60 border border-blue-400/30 text-xs sm:text-sm font-medium text-white hover:border-cyan-300 transition-colors"
              >
                {badge.name}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
