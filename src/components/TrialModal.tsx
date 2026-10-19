import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Sparkles, Mail, User, Phone, BookOpen } from 'lucide-react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  externalLink?: string;
}

export const TrialModal: React.FC<TrialModalProps> = ({
  isOpen,
  onClose,
  externalLink,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseArea: 'ia-fullstack',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Por favor, introduce tu nombre completo.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Por favor, introduce tu correo electrónico.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Introduce una dirección de correo válida.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // If a custom external URL is defined, redirect immediately
    if (externalLink && externalLink.trim() !== '') {
      window.location.href = externalLink;
      return;
    }

    setIsSubmitting(true);
    // Simulate instantaneous trial account activation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({ name: '', email: '', phone: '', courseArea: 'ia-fullstack' });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="bg-[#003882] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-300" />
            <h3 className="font-bold text-lg text-white">
              Activar tus 10 días de prueba
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-1 rounded-lg text-blue-200 hover:text-white hover:bg-blue-800/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          /* Confirmation Success State */
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-2">
              ¡Solicitud completada con éxito!
            </h4>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Hemos generado tu acceso de prueba de 10 días para <strong className="text-slate-900">{formData.name}</strong>. En unos minutos recibirás un correo en <span className="font-mono text-[#003882] font-semibold">{formData.email}</span> con tus claves personales de acceso al Campus Virtual y las instrucciones para los laboratorios AR/VR.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6 text-left text-xs text-slate-600 space-y-1.5">
              <div className="flex justify-between">
                <span className="font-medium text-slate-500">Período de prueba:</span>
                <span className="font-bold text-slate-800">10 días completos sin coste</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-500">Tutor asignado:</span>
                <span className="font-bold text-slate-800">Equipo Docente Óscar Carballo</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-500">Contacto directo:</span>
                <span className="font-semibold text-[#003882]">formacion.oscar.carballo@gmail.com</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="w-full py-3.5 px-6 font-bold text-white bg-[#003882] hover:bg-[#002d6b] rounded-xl transition-all cursor-pointer shadow-md"
            >
              Entendido, volver a la página
            </button>
          </div>
        ) : (
          /* Lead Capture Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            <p className="text-sm text-slate-600 mb-6">
              Completa tus datos para recibir acceso inmediato al campus y probar todos los contenidos actualizados sin ningún compromiso ni datos bancarios.
            </p>

            <div className="space-y-4">
              {/* Nombre */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Nombre y Apellidos <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Roberto García"
                    className={`w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#003882] transition-colors ${
                      errors.name ? 'border-red-400' : 'border-slate-200'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-red-600 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Correo electrónico <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tucorreo@empresa.com"
                    className={`w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#003882] transition-colors ${
                      errors.email ? 'border-red-400' : 'border-slate-200'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Teléfono */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Teléfono de contacto <span className="text-slate-400 font-normal">(Opcional para tutoría WhatsApp)</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+34 600 000 000"
                    className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#003882] transition-colors"
                  />
                </div>
              </div>

              {/* Área de interés */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Especialidad tecnológica que deseas probar
                </label>
                <div className="relative">
                  <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <select
                    value={formData.courseArea}
                    onChange={(e) => setFormData({ ...formData, courseArea: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#003882] transition-colors"
                  >
                    <option value="ia-fullstack">Inteligencia Artificial aplicada & Fullstack Moderno</option>
                    <option value="ar-vr">Realidad Aumentada, VR y Gemelos Digitales</option>
                    <option value="cloud-devops">Arquitectura Cloud, DevOps & Microservicios</option>
                    <option value="cybersec">Ciberseguridad Práctica & Hacking Ético</option>
                    <option value="fundae">Formación Bonificada para Empresas (Fundae)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Garantía */}
            <div className="flex items-center gap-2 mt-5 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Garantía 100% gratuita. No pedimos tarjeta ni hay permanencia.</span>
            </div>

            {/* Submit button */}
            <div className="mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 font-bold text-base text-white bg-[#003882] hover:bg-[#002d6b] active:scale-[0.99] disabled:opacity-60 rounded-xl shadow-md transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Activando tus 10 días...</span>
                ) : (
                  <>
                    <span>Confirmar y empezar mis 10 días</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
