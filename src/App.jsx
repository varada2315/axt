import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Values from './components/Values';
import Services from './components/Services';
import GlobalMapBanner from './components/GlobalMapBanner';
import ExecutionTimeline from './components/ExecutionTimeline';
import InitialConsultationAssessment from './components/InitialConsultationAssessment';
import PrincipalConsultant from './components/PrincipalConsultant';
import Philosophy from './components/Philosophy';
import MattersAdvised from './components/MattersAdvised';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import MouseSpotlight from './components/MouseSpotlight';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [initialDomain, setInitialDomain] = useState('Business Consulting');
  const [assessmentData, setAssessmentData] = useState(null);

  const handleOpenConsultation = (param = 'Business Consulting', extra = null) => {
    if (typeof param === 'object' && param !== null) {
      setInitialDomain(param.domain || param.pathway || 'Initial Consultation Assessment');
      setAssessmentData(param);
    } else if (typeof param === 'string') {
      setInitialDomain(param);
      setAssessmentData(extra);
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
        {/* 1. HERO */}
        <Hero onOpenConsultation={handleOpenConsultation} />
        
        {/* 2. CORE PILLARS */}
        <Values />
        
        {/* 3. AREAS OF COUNSEL / SERVICES (Specialized Practice) */}
        <Services onOpenConsultation={handleOpenConsultation} />
        
        {/* GLOBAL STRATEGIC MAP */}
        <GlobalMapBanner />
        
        {/* 4. THE AXT METHODOLOGY */}
        <ExecutionTimeline />
        
        {/* 5. INITIAL CONSULTATION ASSESSMENT */}
        <InitialConsultationAssessment onOpenConsultation={handleOpenConsultation} />
        
        {/* 6. PRINCIPAL CONSULTANT */}
        <PrincipalConsultant onOpenConsultation={handleOpenConsultation} />
        
        {/* 7. PHILOSOPHY */}
        <Philosophy />
        
        {/* 8. MATTERS WE HAVE ADVISED ON */}
        <MattersAdvised onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* 9. FOOTER */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={handleCloseConsultation} 
        initialDomain={initialDomain}
        assessmentData={assessmentData}
      />
    </div>
  );
}
