import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Mail, Shield, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenTrial: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTrial }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <BrandLogo variant="light" imgClassName="h-14 sm:h-18 w-auto" />
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed mb-6">
              Plataforma líder en teleformación de informática con contenidos permanentemente actualizados y tecnología pedagógica de Realidad Aumentada, Realidad Virtual e Inteligencia Artificial.
            </p>
            <div className="flex items-center gap-2 text-sm text-blue-200">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <a
                href="mailto:formacion.oscar.carballo@gmail.com"
                className="hover:underline hover:text-white transition-colors"
              >
                formacion.oscar.carballo@gmail.com
              </a>
            </div>
          </div>

          {/* Enlaces de interés */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Especialidades TI
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={onOpenTrial}
                  className="hover:text-white transition-colors text-left"
                >
                  Inteligencia Artificial y Machine Learning
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTrial}
                  className="hover:text-white transition-colors text-left"
                >
                  Realidad Virtual y Modelado 3D
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTrial}
                  className="hover:text-white transition-colors text-left"
                >
                  Desarrollo Cloud & DevOps
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTrial}
                  className="hover:text-white transition-colors text-left"
                >
                  Ciberseguridad & Infraestructura
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTrial}
                  className="hover:text-white transition-colors text-left"
                >
                  Planes para Empresas (Fundae)
                </button>
              </li>
            </ul>
          </div>

          {/* Garantías de teleformación */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Compromiso y Garantía
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>10 días de prueba gratuita sin datos bancarios.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Tutorías técnicas directas y seguimiento continuo.</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Cumplimiento RGPD y seguridad de datos garantizada.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Óscar Carballo Formación (OCD). Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Aviso Legal</span>
            <span className="hover:text-slate-400 cursor-pointer">Política de Privacidad</span>
            <span className="hover:text-slate-400 cursor-pointer">Política de Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
