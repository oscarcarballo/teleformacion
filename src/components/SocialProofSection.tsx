import React, { useState } from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  const [img1Error, setImg1Error] = useState(false);
  const [img2Error, setImg2Error] = useState(false);

  const testimonials = [
    {
      id: 'elena',
      name: 'Elena Morales Prieto',
      role: 'Lead Frontend Engineer',
      company: 'NexaTech Solutions',
      image: '/src/assets/images/avatar_testimonial_elena_1792420809130.jpg',
      hasError: img1Error,
      onError: () => setImg1Error(true),
      initials: 'EM',
      rating: 5,
      verified: 'Alumna Certificada en IA y Web Moderna',
      quote:
        'La integración de Realidad Virtual para comprender la arquitectura de redes y los asistentes de Inteligencia Artificial para depuración de código hicieron que completara el curso en la mitad de tiempo. El contenido está genuinamente al día, nada que ver con otros cursos que siguen enseñando tecnologías de hace 5 años.',
    },
    {
      id: 'carlos',
      name: 'Carlos Méndez Sanjuán',
      role: 'Director de Sistemas TI',
      company: 'Global Data Ibérica',
      image: '/src/assets/images/avatar_testimonial_carlos_1792420809680.jpg',
      hasError: img2Error,
      onError: () => setImg2Error(true),
      initials: 'CM',
      rating: 5,
      verified: 'Formación Bonificada para Equipo Técnico (18 personas)',
      quote:
        'Capacitamos a nuestro equipo de infraestructura mediante estos cursos de teleformación. Los 10 días de prueba nos convencieron de inmediato por la calidad de las prácticas interactivas y la aplicabilidad directa desde el primer día en nuestros proyectos de producción.',
    },
  ];

  return (
    <section id="testimonios" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#003882] mb-3">
            Prueba social verificada
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 [text-wrap:balance]">
            Lo que opinan quienes ya se forman con nuestra metodología
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Profesionales y directores de equipo que han comprobado la diferencia de aprender con contenidos actualizados y tecnologías inmersivas.
          </p>
        </div>

        {/* Dos testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col justify-between bg-slate-50/70 p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow transition-shadow"
            >
              {/* Quote mark decoration */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-200 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-slate-700">5.0 / 5.0</span>
                </div>

                {/* Opinión del cliente */}
                <p className="text-slate-700 text-base leading-relaxed italic mb-8 relative z-10">
                  «{item.quote}»
                </p>
              </div>

              {/* Author lockup: Foto circular, nombre y cargo */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                {/* Foto circular con fallback */}
                <div className="relative shrink-0">
                  {!item.hasError ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      onError={item.onError}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm ring-2 ring-[#003882]/20"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-[#003882] text-white font-bold text-lg flex items-center justify-center border-2 border-white shadow-sm">
                      {item.initials}
                    </div>
                  )}
                </div>

                <div className="flex flex-col min-w-0">
                  <h3 className="text-base font-bold text-slate-900 truncate">
                    {item.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-600 truncate">
                    {item.role} · <span className="text-[#003882] font-semibold">{item.company}</span>
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-[11px] text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{item.verified}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
