import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BenefitsSection } from './components/BenefitsSection';
import { AuthoritySection } from './components/AuthoritySection';
import { SocialProofSection } from './components/SocialProofSection';
import { LastCallSection } from './components/LastCallSection';
import { Footer } from './components/Footer';
import { TrialModal } from './components/TrialModal';

export default function App() {
  const [isTrialOpen, setIsTrialOpen] = useState(false);

  // Link de destino (editable o configurable; por defecto activa el formulario modal de alta conversión)
  const [destinationLink] = useState('');

  const handleOpenTrial = () => {
    setIsTrialOpen(true);
  };

  const handleCloseTrial = () => {
    setIsTrialOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#003882] selection:text-white flex flex-col font-sans">
      {/* 1. Header con Top Bar Contract */}
      <Header onOpenTrial={handleOpenTrial} />

      <main className="flex-1">
        {/* 2. Hero Section: Lado izq (Título, subtítulo, CTA), Lado der (Imagen AR/VR/IA), Debajo (3 puntos: Contenido, Novedad, Utilidad) */}
        <HeroSection onOpenTrial={handleOpenTrial} />

        {/* 3. Sección de Beneficios: Grid de 3 columnas + Botón CTA centrado */}
        <BenefitsSection onOpenTrial={handleOpenTrial} />

        {/* 4. Sección de Autoridad: Bloque horizontal con fondo de color sólido (logotipos, métricas, frases de autoridad) */}
        <AuthoritySection />

        {/* 5. Sección de Prueba Social: Dos testimonios con foto circular, nombre y opinión */}
        <SocialProofSection />

        {/* 6. Sección Final (Last Call): Bloque de cierre con fondo oscuro, título de oferta reforzada y botón CTA final */}
        <LastCallSection onOpenTrial={handleOpenTrial} />
      </main>

      {/* 7. Footer con autor, contacto y garantías */}
      <Footer onOpenTrial={handleOpenTrial} />

      {/* Modal de Registro / Formulario de Destino: 10 días de prueba */}
      <TrialModal
        isOpen={isTrialOpen}
        onClose={handleCloseTrial}
        externalLink={destinationLink}
      />
    </div>
  );
}
