import React, { useState } from 'react';
import { 
  Search, 
  Layers, 
  Cpu, 
  TrendingUp, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Sparkles,
  Shield
} from 'lucide-react';

const phases = [
  {
    id: 1,
    step: 'STEP 01',
    phaseTag: 'PHASE 01',
    phaseNumber: '01',
    title: 'Discovery & Situation Assessment',
    subtitle: 'Understanding the real problem before recommending a solution.',
    description: 'We evaluate your current situation, objectives, challenges, risks, stakeholders, and external factors to identify root causes rather than symptoms.',
    deliverables: [
      'Requirement Analysis',
      'Stakeholder Mapping',
      'Risk & Opportunity Assessment',
      'Situation Brief',
      'Priority Matrix'
    ],
    icon: Search,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    step: 'STEP 02',
    phaseTag: 'PHASE 02',
    phaseNumber: '02',
    title: 'Strategy Design & Planning',
    subtitle: 'Building the right roadmap for the desired outcome.',
    description: 'Once the problem is understood, we develop strategic options, evaluate scenarios, and create a tailored action plan aligned with your goals.',
    deliverables: [
      'Strategic Roadmap',
      'Scenario Planning',
      'Decision Framework',
      'Resource Planning',
      'Growth / Influence Strategy'
    ],
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    step: 'STEP 03',
    phaseTag: 'PHASE 03',
    phaseNumber: '03',
    title: 'Execution Support & Advisory',
    subtitle: 'Turning plans into measurable action.',
    description: 'We provide continuous guidance during implementation, helping clients navigate challenges, make critical decisions, and maintain momentum.',
    deliverables: [
      'Execution Monitoring',
      'Strategic Counsel',
      'Crisis Response Support',
      'Performance Tracking',
      'Course Corrections'
    ],
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 4,
    step: 'STEP 04',
    phaseTag: 'PHASE 04',
    phaseNumber: '04',
    title: 'Growth, Optimization & Long-Term Impact',
    subtitle: 'Ensuring sustainable results beyond the engagement.',
    description: 'We help institutionalize successful practices, identify future opportunities, and prepare clients for their next phase of growth and influence.',
    deliverables: [
      'Impact Measurement',
      'Process Optimization',
      'Future Growth Blueprint',
      'Leadership Guidance',
      'Long-Term Strategy Review'
    ],
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80'
  }
];

export default function ExecutionTimeline() {
  const [activePhase, setActivePhase] = useState(phases[0]);

  const handlePrevPhase = () => {
    const currentIndex = phases.findIndex(p => p.id === activePhase.id);
    const prevIndex = (currentIndex - 1 + phases.length) % phases.length;
    setActivePhase(phases[prevIndex]);
  };

  const handleNextPhase = () => {
    const currentIndex = phases.findIndex(p => p.id === activePhase.id);
    const nextIndex = (currentIndex + 1) % phases.length;
    setActivePhase(phases[nextIndex]);
  };

  return (
    <section id="methodology" className="py-14 sm:py-24 px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto relative z-20 scroll-mt-24">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-secondary/5 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 relative">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-secondary font-bold px-3.5 py-1.5 bg-white/10 rounded-full border border-white/15 backdrop-blur-md">
          THE METHODOLOGY
        </span>
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mt-3 sm:mt-4">
          THE AXT METHODOLOGY
        </h2>
        <p className="font-body text-xs sm:text-base md:text-[17px] text-gray-300 mt-3 sm:mt-4 font-light leading-relaxed">
          A structured four-phase approach to understand the challenge, shape the strategy, execute with precision, and achieve lasting results
        </p>
      </div>

      {/* DESKTOP ROADMAP: Sequential Horizontal Step-by-Step Bar */}
      <div className="hidden md:block mb-8 sm:mb-10 relative">
        {/* Continuous Connecting Roadmap Track (Brought down below text) */}
        <div className="absolute bottom-[22px] sm:bottom-[24px] left-[8%] right-[8%] h-[2px] bg-white/10 z-0"></div>
        <div 
          className="absolute bottom-[22px] sm:bottom-[24px] left-[8%] h-[2px] bg-gradient-to-r from-secondary/60 to-secondary transition-all duration-500 z-0 shadow-[0_0_12px_rgba(233,193,118,0.5)]"
          style={{ width: `${((activePhase.id - 1) / 3) * 84}%` }}
        ></div>

        <div className="grid grid-cols-4 gap-4 sm:gap-5 relative z-10">
          {phases.map((item, index) => {
            const IconComp = item.icon;
            const isActive = activePhase.id === item.id;
            const isPassed = activePhase.id > item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActivePhase(item)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group cursor-pointer active:scale-[0.98] ${
                  isActive
                    ? 'border-secondary shadow-[0_0_30px_rgba(233,193,118,0.25)] ring-1 ring-secondary/50'
                    : isPassed
                    ? 'border-white/20 hover:border-secondary/40'
                    : 'border-white/10 hover:border-white/25'
                }`}
              >
                {/* Full-bleed background image with dark luxury overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#0e1115]">
                  <div
                    className={`w-full h-full bg-cover bg-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 ${
                      isActive 
                        ? 'opacity-80 brightness-110 contrast-110' 
                        : 'opacity-60 group-hover:opacity-80 brightness-105 contrast-105'
                    }`}
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  {/* High-Contrast Dark Gradient Overlay for Maximum Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e]/95 via-[#090b0e]/55 to-[#090b0e]/15" />
                  {isActive && (
                    <div className="absolute inset-0 bg-secondary/[0.08] mix-blend-overlay" />
                  )}
                </div>

                <div className="relative z-10">
                  {/* Step Connector Indicator Pill */}
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded-full ${
                        isActive 
                          ? 'bg-secondary text-on-secondary shadow-sm' 
                          : isPassed 
                          ? 'bg-white/15 text-secondary backdrop-blur-md' 
                          : 'bg-white/10 text-gray-300 backdrop-blur-md'
                      }`}>
                        {item.step}
                      </span>
                      <span className="text-[10px] font-mono text-gray-300 uppercase tracking-wider">
                        {item.phaseTag}
                      </span>
                    </div>

                    <div className={`p-2 rounded-xl transition-all backdrop-blur-md ${
                      isActive 
                        ? 'bg-secondary text-on-secondary shadow-md' 
                        : 'bg-white/10 text-secondary border border-white/15 group-hover:bg-white/20'
                    }`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h4 className={`text-xs sm:text-sm font-headline font-bold leading-snug transition-colors ${
                    isActive ? 'text-white' : 'text-gray-100 group-hover:text-white'
                  }`}>
                    {item.title}
                  </h4>
                  
                  <p className="text-[11px] text-gray-300 font-body mt-1 line-clamp-1 font-light">
                    {item.subtitle}
                  </p>

                  {/* Bottom Step Flow Tag */}
                  <div className="mt-3 pt-2 border-t border-white/15 flex items-center justify-between text-[10px] font-mono">
                    <span className={isActive ? 'text-secondary font-bold' : 'text-gray-300'}>
                      {isActive ? 'Active Phase' : `Phase ${item.phaseNumber}`}
                    </span>
                    {index < 3 && (
                      <ArrowRight className={`w-3 h-3 ${isActive ? 'text-secondary' : 'text-gray-400'}`} />
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* MOBILE ROADMAP: Sequential Vertical Step-by-Step Progression */}
      <div className="md:hidden space-y-2.5 mb-6 relative">
        <div className="grid grid-cols-2 gap-2">
          {phases.map((item) => {
            const IconComp = item.icon;
            const isActive = activePhase.id === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActivePhase(item)}
                className={`p-3 rounded-xl border text-left transition-all duration-300 relative overflow-hidden active:scale-95 ${
                  isActive
                    ? 'border-secondary shadow-[0_0_20px_rgba(233,193,118,0.25)] ring-1 ring-secondary/50'
                    : 'border-white/15 hover:border-secondary/40'
                }`}
              >
                {/* Full-bleed background image with dark luxury overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#0e1115]">
                  <div
                    className={`w-full h-full bg-cover bg-center ${
                      isActive ? 'opacity-80 brightness-110' : 'opacity-60 brightness-105'
                    }`}
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e]/95 via-[#090b0e]/55 to-[#090b0e]/15" />
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className={`text-[10px] font-mono font-bold tracking-widest ${isActive ? 'text-secondary font-bold' : 'text-gray-300'}`}>
                      {item.step}
                    </span>
                    <div className={`p-1 rounded-lg ${isActive ? 'bg-secondary text-on-secondary' : 'bg-white/10 text-secondary'}`}>
                      <IconComp className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="text-[9px] font-mono text-gray-300 uppercase tracking-wider mb-1">
                    {item.phaseTag}
                  </div>

                  <h4 className={`text-xs font-headline font-bold leading-tight ${isActive ? 'text-white' : 'text-gray-100'}`}>
                    {item.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* DETAILED PHASE DEEP-DIVE CARD */}
      <div className="card-white-surface p-5 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl relative overflow-hidden animate-in fade-in duration-500 shadow-2xl border border-white/20">
        {/* Ambient Flare */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-5 sm:pb-6 mb-6 sm:mb-8 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-secondary px-3 py-1 bg-white/10 rounded-full border border-white/15">
              {activePhase.phaseTag}
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-gray-400 tracking-wider uppercase">
              {activePhase.step} OF 04
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1.5 mr-2 text-[11px] font-mono text-gray-400">
              <span className={activePhase.id === 1 ? 'text-secondary font-bold' : ''}>01</span>
              <span>→</span>
              <span className={activePhase.id === 2 ? 'text-secondary font-bold' : ''}>02</span>
              <span>→</span>
              <span className={activePhase.id === 3 ? 'text-secondary font-bold' : ''}>03</span>
              <span>→</span>
              <span className={activePhase.id === 4 ? 'text-secondary font-bold' : ''}>04</span>
            </div>

            <button
              onClick={handlePrevPhase}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer active:scale-95 border border-white/15"
              title="Previous Phase"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextPhase}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer active:scale-95 border border-white/15"
              title="Next Phase"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Detailed Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center relative z-10">
          
          {/* Left Column: Phase Content & Deliverables */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div>
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-secondary font-semibold mb-2">
                {activePhase.step} · {activePhase.phaseTag}
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight">
                {activePhase.title}
              </h3>
              <p className="font-mono text-xs sm:text-sm text-secondary font-medium tracking-wide mt-2">
                {activePhase.subtitle}
              </p>
            </div>

            <div className="p-4 sm:p-5 bg-white/[0.03] border border-white/10 rounded-2xl">
              <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400 mb-1.5 font-bold">
                Description
              </p>
              <p className="font-body text-xs sm:text-base text-gray-200 leading-relaxed font-light">
                {activePhase.description}
              </p>
            </div>

            {/* Deliverables */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-secondary" />
                <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold">
                  Deliverables:
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {activePhase.deliverables.map((deliverable, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2.5 p-3 bg-white/[0.03] rounded-xl border border-white/10 hover:border-secondary/30 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span className="font-body text-xs sm:text-sm text-gray-200 font-medium">
                      {deliverable}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Strategic Protocol Roadmap Visualization */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full rounded-2xl bg-gradient-to-br from-white/10 via-[#121417] to-[#0a0c0e] border border-white/20 p-5 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xl relative overflow-hidden">
              
              {/* Subtle background image of the active phase */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-25">
                <div 
                  className="w-full h-full bg-cover bg-center filter blur-[1px]"
                  style={{ backgroundImage: `url('${activePhase.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0e] via-[#0a0c0e]/80 to-transparent" />
              </div>

              <div className="relative z-10 flex items-center justify-between text-[10px] sm:text-xs font-mono text-secondary uppercase tracking-widest font-semibold border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-secondary" />
                  <span>AXT ROADMAP PROTOCOL</span>
                </div>
                <span>{activePhase.phaseNumber} / 04</span>
              </div>

              {/* Sequential 4-Node Micro Progression */}
              <div className="relative z-10 space-y-3 py-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                  Methodology Progression
                </div>

                <div className="space-y-2">
                  {phases.map((p) => {
                    const isCur = p.id === activePhase.id;
                    const isDone = p.id < activePhase.id;

                    return (
                      <div 
                        key={p.id}
                        onClick={() => setActivePhase(p)}
                        className={`p-2.5 rounded-xl border flex items-center justify-between text-xs font-mono transition-all cursor-pointer ${
                          isCur 
                            ? 'bg-secondary/20 border-secondary text-white font-bold shadow-sm backdrop-blur-md'
                            : isDone
                            ? 'bg-white/5 border-white/15 text-gray-300 backdrop-blur-md'
                            : 'bg-white/[0.02] border-white/5 text-gray-500 backdrop-blur-md'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                            isCur 
                              ? 'bg-secondary text-on-secondary' 
                              : isDone 
                              ? 'bg-white/20 text-white' 
                              : 'bg-white/5 text-gray-500'
                          }`}>
                            {p.phaseNumber}
                          </span>
                          <span className="truncate">{p.title}</span>
                        </div>

                        <span className="text-[10px] text-secondary">
                          {isCur ? 'ACTIVE' : isDone ? '✓' : ''}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Progress Track */}
              <div className="relative z-10 space-y-1.5 pt-2 border-t border-white/10">
                <div className="flex justify-between text-[10px] font-mono text-gray-400">
                  <span>Methodology Coverage</span>
                  <span className="text-secondary font-bold">{activePhase.id * 25}%</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-secondary transition-all duration-500 shadow-[0_0_10px_#e9c176]" 
                    style={{ width: `${activePhase.id * 25}%` }}
                  ></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
