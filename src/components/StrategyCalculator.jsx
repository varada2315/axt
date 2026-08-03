import React, { useState } from 'react';
import { Sliders, Shield, Zap, Sparkles, ArrowRight, Gauge, CheckCircle2 } from 'lucide-react';

export default function StrategyCalculator({ onOpenConsultation }) {
  const [scope, setScope] = useState(75);
  const [risk, setRisk] = useState(85);
  const [urgency, setUrgency] = useState(60);

  const complexityScore = Math.round((scope * 0.4) + (risk * 0.4) + (urgency * 0.2));

  const getProfileName = (score) => {
    if (score > 80) return "Sovereign Crisis & High-Stakes Directive";
    if (score > 60) return "Enterprise Restructuring & Global Expansion";
    if (score > 40) return "Executive Realignment & Market Defense";
    return "Targeted Strategic Advisory";
  };

  const getRecommendedAction = (score) => {
    if (score > 80) return "Immediate 24-Hour Confidential War-Room Briefing & Rapid Narrative Control Architecture.";
    if (score > 60) return "C-Suite Alignment & 90-Day Execution Roadmap with Risk Mitigation Matrices.";
    if (score > 40) return "Strategic Diagnostics & Stakeholder Perception Re-engineering.";
    return "Executive Mentorship & Private Advisory Session.";
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto relative z-20">
      <div className="card-white-surface rounded-2xl sm:rounded-3xl p-5 sm:p-10 md:p-14 relative overflow-hidden bg-grid-pattern shadow-2xl">
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-white/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="mb-8 sm:mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-secondary font-mono text-[11px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Assessment Tool</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-4xl md:text-5xl text-white font-semibold">
            Calculate Your Strategic Directive Index
          </h2>
          <p className="font-body text-xs sm:text-base text-gray-300 mt-2 sm:mt-3 font-light">
            Adjust the strategic parameters below to diagnose organizational complexity and receive a tailored counsel roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Sliders Area */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Slider 1 */}
            <div className="bg-white/[0.04] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/15">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 sm:p-2.5 bg-white/10 rounded-xl text-secondary">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white">Strategic Scale &amp; Scope</h4>
                    <p className="text-[10px] sm:text-xs text-gray-400 font-mono">Local Enterprise → Sovereign Level</p>
                  </div>
                </div>
                <span className="text-base sm:text-lg font-mono font-bold text-secondary">{scope}%</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="100" 
                value={scope} 
                onChange={(e) => setScope(Number(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Slider 2 */}
            <div className="bg-white/[0.04] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/15">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 sm:p-2.5 bg-white/10 rounded-xl text-secondary">
                    <Gauge className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white">Risk Exposure &amp; Crisis Pressure</h4>
                    <p className="text-[10px] sm:text-xs text-gray-400 font-mono">Controlled → Critical Volatility</p>
                  </div>
                </div>
                <span className="text-base sm:text-lg font-mono font-bold text-secondary">{risk}%</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="100" 
                value={risk} 
                onChange={(e) => setRisk(Number(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Slider 3 */}
            <div className="bg-white/[0.04] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/15">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 sm:p-2.5 bg-white/10 rounded-xl text-secondary">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white">Execution Speed Required</h4>
                    <p className="text-[10px] sm:text-xs text-gray-400 font-mono">Long-Term → Immediate Crisis (24h)</p>
                  </div>
                </div>
                <span className="text-base sm:text-lg font-mono font-bold text-secondary">{urgency}%</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="100" 
                value={urgency} 
                onChange={(e) => setUrgency(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          {/* Diagnostic Result Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-white/15 via-white/[0.05] to-[#121414] p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl relative overflow-hidden text-center backdrop-blur-xl">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>

              {/* Score Circle */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-white/10 stroke-current"
                    strokeWidth="3.5"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-secondary stroke-current transition-all duration-700 ease-out"
                    strokeDasharray={`${complexityScore}, 100`}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-headline text-3xl sm:text-4xl font-bold text-gold-gradient">{complexityScore}</span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-gray-400 uppercase tracking-widest">Index Score</span>
                </div>
              </div>

              {/* Readout Details */}
              <div className="mb-4 sm:mb-6">
                <span className="text-[10px] sm:text-[11px] font-mono text-secondary uppercase tracking-widest font-bold">Diagnosed Profile</span>
                <h3 className="font-headline text-lg sm:text-xl text-white font-semibold mt-1">
                  {getProfileName(complexityScore)}
                </h3>
              </div>

              <div className="p-3.5 sm:p-4 bg-white/5 rounded-xl border border-white/10 mb-6 sm:mb-8 text-left">
                <div className="flex items-start gap-2 text-xs text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span className="text-[11px] sm:text-xs">{getRecommendedAction(complexityScore)}</span>
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full btn-modern-primary py-3.5 sm:py-4 text-xs font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 text-on-secondary" />
                <span>Request Custom Briefing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
