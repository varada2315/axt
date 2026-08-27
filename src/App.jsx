import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Values from './components/Values';
import Services from './components/Services';
import StrategyCalculator from './components/StrategyCalculator';
import ExecutionTimeline from './components/ExecutionTimeline';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import MouseSpotlight from './components/MouseSpotlight';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [initialDomain, setInitialDomain] = useState('Business Consulting');

  const handleOpenConsultation = (domain = 'Business Consulting') => {
    if (typeof domain === 'string' && domain) {
      setInitialDomain(domain);
    }
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-secondary selection:text-on-secondary font-body overflow-x-hidden relative">
      {/* Interactive Cursor Spotlight */}
      <MouseSpotlight />

      {/* Global Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0"></div>

      <Navbar onOpenConsultation={handleOpenConsultation} />
      
      <main className="relative z-10 space-y-8 sm:space-y-12">
        <Hero onOpenConsultation={handleOpenConsultation} />
        <Values />
        <Services onOpenConsultation={handleOpenConsultation} />
        <StrategyCalculator onOpenConsultation={handleOpenConsultation} />
        <ExecutionTimeline />
        <Philosophy onOpenConsultation={handleOpenConsultation} />
      </main>

      <Footer onOpenConsultation={handleOpenConsultation} />

      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={handleCloseConsultation} 
        initialDomain={initialDomain}
      />
    </div>
  );
}
