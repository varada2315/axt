import React, { useState } from 'react';
import { Target, Layers, Cpu, Globe, CheckCircle } from 'lucide-react';

const stages = [
  {
    id: 1,
    phase: '01',
    title: 'Strategic Audit & Diagnostics',
    subtitle: 'Uncovering Structural Blindspots',
    icon: Target,
    details: 'In-depth assessment of market dynamics, organizational bottlenecks, political leverage points, and personal decision parameters.',
    metrics: ['100% Confidentiality', 'Comprehensive Risk Matrix', 'Stakeholder Mapping']
  },
  {
    id: 2,
    phase: '02',
    title: 'Architecture & Positioning',
    subtitle: 'Engineering Strategic Dominance',
    icon: Layers,
    details: 'Formulating high-contrast narrative architectures, policy frameworks, and market disruption strategies.',
    metrics: ['Narrative Framework', 'C-Suite Playbook', 'Crisis Containment Protocol']
  },
  {
    id: 3,
    phase: '03',
    title: 'Precision Tactical Deployment',
    subtitle: 'Flawless Execution in High Pressure',
    icon: Cpu,
    details: 'Active advisory support during key negotiations, public campaigns, M&A operations, or structural realignments.',
    metrics: ['Real-Time War Room', 'Stakeholder Alignment', 'Operational Precision']
  },
  {
    id: 4,
    phase: '04',
    title: 'Sovereign Scale & Legacy',
    subtitle: 'Institutionalizing Long-Term Impact',
    icon: Globe,
    details: 'Solidifying market leadership, long-term governance models, legacy succession, and national-level influence.',
    metrics: ['Long-Term Governance', 'Sovereign Influence', 'Measurable ROI']
  }
];

export default function ExecutionTimeline() {
  const [activeStage, setActiveStage] = useState(stages[0]);

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto relative z-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-white/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 relative">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-secondary font-bold px-3.5 py-1.5 bg-white/10 rounded-full border border-white/15 backdrop-blur-md">
          The Methodology
        </span>
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-semibold text-white mt-4">
          Strategic Execution Roadmap
        </h2>
        <p className="font-body text-xs sm:text-base text-gray-300 mt-2 sm:mt-3 font-light">
          Click through our 4-phase strategic delivery framework designed for complex, high-stakes environments.
        </p>
      </div>

      {/* Responsive Phase Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 relative">
        {stages.map((stage) => {
          const IconComp = stage.icon;
          const isActive = activeStage.id === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStage(stage)}
              className={`p-4 sm:p-6 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group ${
                isActive 
                  ? 'bg-white/15 border-secondary shadow-[0_0_25px_rgba(233,193,118,0.2)]' 
                  : 'bg-white/[0.04] border-white/15 hover:border-secondary/40 hover:bg-white/10'
              }`}
            >
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <span className={`text-xl sm:text-2xl font-headline font-bold ${isActive ? 'text-gold-gradient' : 'text-gray-400'}`}>
                  {stage.phase}
                </span>
                <div className={`p-2 sm:p-2.5 rounded-xl ${isActive ? 'bg-secondary text-on-secondary shadow-lg' : 'bg-white/10 text-secondary'}`}>
                  <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>

              <h4 className={`text-sm sm:text-base font-semibold transition-colors ${isActive ? 'text-white' : 'text-gray-200'}`}>
                {stage.title}
              </h4>
              <p className="text-[11px] sm:text-xs text-gray-400 font-mono mt-1">
                {stage.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Phase Output Box */}
      <div className="card-white-surface p-5 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl relative overflow-hidden animate-in fade-in duration-500 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-secondary uppercase tracking-widest mb-2 sm:mb-3 font-bold">
              <span>Phase {activeStage.phase} Deep Dive</span>
            </div>
            <h3 className="font-headline text-xl sm:text-3xl md:text-4xl text-white font-semibold mb-3 sm:mb-4">
              {activeStage.title}
            </h3>
            <p className="font-body text-xs sm:text-base text-gray-300 leading-relaxed font-light mb-6 sm:mb-8">
              {activeStage.details}
            </p>

            <div className="space-y-3">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-gray-400">Phase Deliverables</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {activeStage.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/10 text-xs text-white font-mono">
                    <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                    <span className="text-[11px] sm:text-xs">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-[#121414] border border-white/20 p-5 sm:p-8 flex flex-col justify-between shadow-2xl relative">
              <div className="text-[11px] sm:text-xs font-mono text-secondary uppercase tracking-widest flex justify-between font-semibold">
                <span>AXT Protocol</span>
                <span>Phase {activeStage.phase}</span>
              </div>
              <div className="my-auto">
                <div className="text-2xl sm:text-3xl font-headline font-bold text-gold-gradient mb-1 sm:mb-2">
                  {activeStage.title.split(' ')[0]} Focus
                </div>
                <div className="text-[11px] sm:text-xs text-gray-300 font-mono">
                  Guaranteed discrete counsel &amp; high-precision output.
                </div>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-secondary transition-all duration-500 shadow-[0_0_10px_#e9c176]" 
                  style={{ width: `${activeStage.id * 25}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
