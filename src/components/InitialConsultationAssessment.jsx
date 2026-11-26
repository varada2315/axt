import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Cpu, 
  Activity, 
  ShieldCheck, 
  CheckCircle2,
  Lock,
  Clock,
  Users,
  Flame,
  Building2
} from 'lucide-react';

const scopeOptions = [
  'Entrepreneur',
  'Public leader',
  'Startup',
  'SME',
  'Enterprise',
  'Institution'
];

const urgencyOptions = [
  'Low Priority',
  'Moderate Priority',
  'Immediate Attention Needed'
];

const timelineOptions = [
  'Flexible',
  'Within 30 Days',
  'Within 7 Days',
  'Immediate'
];

const complexityOptions = [
  'Single Decision Maker',
  'Multiple Stakeholders',
  'Public Impact'
];

const sensitivityOptions = [
  'Standard',
  'Confidential',
  'Highly Confidential'
];

const quickPresets = [
  {
    id: 'growth',
    name: 'Business Growth',
    scopeVal: 60, // SME
    urgencyVal: 50, // Moderate Priority
    timelineVal: 33.3, // Within 30 Days
    complexityVal: 50, // Multiple Stakeholders
    sensitivityVal: 50, // Confidential
    summaryPathway: 'Structured Growth Advisory & Scale Optimization',
    summaryText: 'Calibrated for enterprise expansion, market entry, and resource allocation across key stakeholders.'
  },
  {
    id: 'challenges',
    name: 'Business Challenges',
    scopeVal: 80, // Enterprise
    urgencyVal: 100, // Immediate Attention Needed
    timelineVal: 66.6, // Within 7 Days
    complexityVal: 50, // Multiple Stakeholders
    sensitivityVal: 50, // Confidential
    summaryPathway: 'Critical Issue Containment & Operational Turnaround',
    summaryText: 'Immediate diagnostic intervention and risk mitigation framework for urgent operational realignments.'
  },
  {
    id: 'decisions',
    name: 'Strategic Decisions',
    scopeVal: 80, // Enterprise
    urgencyVal: 50, // Moderate Priority
    timelineVal: 33.3, // Within 30 Days
    complexityVal: 50, // Multiple Stakeholders
    sensitivityVal: 100, // Highly Confidential
    summaryPathway: 'Executive Strategic Counsel & Decision Architecture',
    summaryText: 'Confidential C-suite alignment, scenario modeling, and comprehensive risk-weighted strategic pathways.'
  },
  {
    id: 'change',
    name: 'Organizational Change',
    scopeVal: 60, // SME
    urgencyVal: 50, // Moderate Priority
    timelineVal: 33.3, // Within 30 Days
    complexityVal: 50, // Multiple Stakeholders
    sensitivityVal: 50, // Confidential
    summaryPathway: 'Structural Realignment & Institutional Governance',
    summaryText: 'Multi-stakeholder consensus building, change management protocols, and sustained organizational momentum.'
  },
  {
    id: 'affairs',
    name: 'Public Affairs',
    scopeVal: 100, // Institution
    urgencyVal: 100, // Immediate Attention Needed
    timelineVal: 100, // Immediate
    complexityVal: 100, // Public Impact
    sensitivityVal: 100, // Highly Confidential
    summaryPathway: 'High-Stakes Public Strategy & Stakeholder Mapping',
    summaryText: 'National-level positioning, regulatory foresight, and discrete crisis counsel for high-visibility environments.'
  },
  {
    id: 'personal',
    name: 'Personal Advisory',
    scopeVal: 0, // Entrepreneur
    urgencyVal: 50, // Moderate Priority
    timelineVal: 33.3, // Within 30 Days
    complexityVal: 0, // Single Decision Maker
    sensitivityVal: 100, // Highly Confidential
    summaryPathway: 'Confidential Principal Counsel & Legacy Blueprint',
    summaryText: 'Private, high-trust strategic guidance for personal leadership, succession, and high-impact decision-making.'
  }
];

export default function InitialConsultationAssessment({ onOpenConsultation }) {
  // Continuous 0-100 values for silky smooth dragging
  const [scopeVal, setScopeVal] = useState(60);
  const [urgencyVal, setUrgencyVal] = useState(50);
  const [timelineVal, setTimelineVal] = useState(33.3);
  const [complexityVal, setComplexityVal] = useState(50);
  const [sensitivityVal, setSensitivityVal] = useState(50);
  const [activePreset, setActivePreset] = useState('growth');

  // Helper to map continuous 0-100 values smoothly to discrete label indices
  const getIndex = (val, count) => {
    const idx = Math.round((val / 100) * (count - 1));
    return Math.min(count - 1, Math.max(0, idx));
  };

  const scopeIdx = getIndex(scopeVal, scopeOptions.length);
  const urgencyIdx = getIndex(urgencyVal, urgencyOptions.length);
  const timelineIdx = getIndex(timelineVal, timelineOptions.length);
  const complexityIdx = getIndex(complexityVal, complexityOptions.length);
  const sensitivityIdx = getIndex(sensitivityVal, sensitivityOptions.length);

  // Dynamic Advisory Priority Score calculation (continuous, silky smooth response)
  const priorityScore = useMemo(() => {
    const totalWeighted = (scopeVal * 0.2) + (urgencyVal * 0.25) + (timelineVal * 0.2) + (complexityVal * 0.2) + (sensitivityVal * 0.15);
    return Math.min(98, Math.max(30, Math.round(30 + (totalWeighted * 0.68))));
  }, [scopeVal, urgencyVal, timelineVal, complexityVal, sensitivityVal]);

  // Dynamic Assessment Summary & Consultation Pathway
  const assessmentSummary = useMemo(() => {
    if (activePreset) {
      const match = quickPresets.find(p => p.id === activePreset);
      if (match) return match;
    }

    if (priorityScore >= 80) {
      return {
        summaryPathway: 'High-Priority Strategic Directive & Rapid Advisory',
        summaryText: 'Urgent multi-stakeholder diagnostic assessment and discrete tactical execution architecture.'
      };
    } else if (priorityScore >= 60) {
      return {
        summaryPathway: 'Executive Strategy Design & Structured Consultation',
        summaryText: 'Structured evaluation of core priorities, governance frameworks, and 90-day actionable roadmap.'
      };
    } else {
      return {
        summaryPathway: 'Targeted Advisory Briefing & Roadmap Optimization',
        summaryText: 'Focused advisory session to define strategic direction, mitigate risks, and calibrate long-term outcomes.'
      };
    }
  }, [priorityScore, activePreset]);

  const handleApplyPreset = (preset) => {
    setActivePreset(preset.id);
    setScopeVal(preset.scopeVal);
    setUrgencyVal(preset.urgencyVal);
    setTimelineVal(preset.timelineVal);
    setComplexityVal(preset.complexityVal);
    setSensitivityVal(preset.sensitivityVal);
  };

  const handleSliderChange = (setter) => (e) => {
    setActivePreset(null);
    setter(Number(e.target.value));
  };

  return (
    <section id="assessment" className="py-14 sm:py-28 px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto relative z-20 scroll-mt-24">
      {/* Background Deep-Tech AI Ambient Lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-secondary/[0.04] rounded-full blur-[160px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/[0.03] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="card-white-surface rounded-2xl sm:rounded-3xl p-5 sm:p-10 md:p-14 relative overflow-hidden bg-grid-pattern shadow-2xl border border-white/20">
        
        {/* Subtle Deep-Tech Telemetry Scanline */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary/60 to-transparent"></div>

        {/* SECTION HEADER */}
        <div className="mb-8 sm:mb-12 text-center max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-secondary font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] mb-3 sm:mb-4 backdrop-blur-md shadow-lg">
            <Cpu className="w-3.5 h-3.5 text-secondary animate-pulse" />
            <span>INITIAL CONSULTATION ASSESSMENT</span>
          </div>

          <h2 className="font-headline text-2.5xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Evaluate Your Strategic Priority
          </h2>

          <p className="font-body text-xs sm:text-base text-gray-200 mt-2 sm:mt-3 font-light leading-relaxed">
            Answer a few key questions to help us understand your requirements and recommend the most suitable advisory approach.
          </p>

          <p className="font-mono text-[11px] sm:text-xs text-secondary/90 mt-2 max-w-2xl mx-auto leading-normal">
            Use the sliders below to indicate your current situation. Based on your responses, AXT Advisory will generate a priority score and recommend the appropriate consultation pathway.
          </p>
        </div>

        {/* MAIN INTERACTIVE ASSESSMENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-stretch relative z-10">
          
          {/* LEFT AREA: Quick Presets & 5 Sliders */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 flex flex-col justify-between">
            
            {/* Quick Presets Bar */}
            <div className="bg-[#0f1216]/90 p-4 rounded-2xl border border-white/15 backdrop-blur-md shadow-lg">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-secondary font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-secondary" />
                  Quick Presets
                </span>
                <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest hidden sm:inline">
                  Select predefined profile
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {quickPresets.map((preset) => {
                  const isSelected = activePreset === preset.id;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleApplyPreset(preset)}
                      className={`px-3 py-2 rounded-xl text-xs font-mono text-left transition-all duration-300 border flex items-center justify-between group active:scale-95 cursor-pointer ${
                        isSelected
                          ? 'bg-secondary text-on-secondary font-bold border-secondary shadow-[0_0_15px_rgba(233,193,118,0.3)]'
                          : 'bg-white/[0.04] text-gray-200 border-white/10 hover:border-secondary/40 hover:bg-white/[0.08]'
                      }`}
                    >
                      <span className="truncate">{preset.name}</span>
                      <span className={`text-[10px] ml-1 shrink-0 ${isSelected ? 'text-on-secondary' : 'text-secondary opacity-70 group-hover:opacity-100'}`}>
                        {isSelected ? '✓' : '→'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SLIDER 1: Scope of Requirement */}
            <div className="bg-[#0d1013]/80 p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all shadow-md">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-white/5 rounded-xl text-secondary border border-white/10 shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-headline font-bold text-white">
                      Scope of Requirement
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-400 font-mono mt-0.5">
                      Entrepreneur → Public leader → Startup → SME → Enterprise → Institution
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-lg border border-secondary/20 shrink-0 ml-2 transition-all">
                  {scopeOptions[scopeIdx]}
                </span>
              </div>
              <div className="pt-2 relative">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  step="0.5"
                  value={scopeVal} 
                  onChange={handleSliderChange(setScopeVal)}
                  style={{
                    background: `linear-gradient(to right, #e9c176 0%, #e9c176 ${scopeVal}%, rgba(255,255,255,0.12) ${scopeVal}%, rgba(255,255,255,0.12) 100%)`
                  }}
                  className="w-full cursor-pointer transition-colors"
                />
              </div>
            </div>

            {/* SLIDER 2: Urgency Level */}
            <div className="bg-[#0d1013]/80 p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all shadow-md">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-white/5 rounded-xl text-secondary border border-white/10 shrink-0">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-headline font-bold text-white">
                      Urgency Level
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-400 font-mono mt-0.5">
                      Low Priority → Moderate Priority → Immediate Attention Needed
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-lg border border-secondary/20 shrink-0 ml-2 transition-all">
                  {urgencyOptions[urgencyIdx]}
                </span>
              </div>
              <div className="pt-2 relative">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  step="0.5"
                  value={urgencyVal} 
                  onChange={handleSliderChange(setUrgencyVal)}
                  style={{
                    background: `linear-gradient(to right, #e9c176 0%, #e9c176 ${urgencyVal}%, rgba(255,255,255,0.12) ${urgencyVal}%, rgba(255,255,255,0.12) 100%)`
                  }}
                  className="w-full cursor-pointer transition-colors"
                />
              </div>
            </div>

            {/* SLIDER 3: Decision Timeline */}
            <div className="bg-[#0d1013]/80 p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all shadow-md">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-white/5 rounded-xl text-secondary border border-white/10 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-headline font-bold text-white">
                      Decision Timeline
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-400 font-mono mt-0.5">
                      Flexible → Within 30 Days → Within 7 Days → Immediate
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-lg border border-secondary/20 shrink-0 ml-2 transition-all">
                  {timelineOptions[timelineIdx]}
                </span>
              </div>
              <div className="pt-2 relative">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  step="0.5"
                  value={timelineVal} 
                  onChange={handleSliderChange(setTimelineVal)}
                  style={{
                    background: `linear-gradient(to right, #e9c176 0%, #e9c176 ${timelineVal}%, rgba(255,255,255,0.12) ${timelineVal}%, rgba(255,255,255,0.12) 100%)`
                  }}
                  className="w-full cursor-pointer transition-colors"
                />
              </div>
            </div>

            {/* SLIDER 4: Stakeholder Complexity */}
            <div className="bg-[#0d1013]/80 p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all shadow-md">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-white/5 rounded-xl text-secondary border border-white/10 shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-headline font-bold text-white">
                      Stakeholder Complexity
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-400 font-mono mt-0.5">
                      Single Decision Maker → Multiple Stakeholders → Public Impact
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-lg border border-secondary/20 shrink-0 ml-2 transition-all">
                  {complexityOptions[complexityIdx]}
                </span>
              </div>
              <div className="pt-2 relative">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  step="0.5"
                  value={complexityVal} 
                  onChange={handleSliderChange(setComplexityVal)}
                  style={{
                    background: `linear-gradient(to right, #e9c176 0%, #e9c176 ${complexityVal}%, rgba(255,255,255,0.12) ${complexityVal}%, rgba(255,255,255,0.12) 100%)`
                  }}
                  className="w-full cursor-pointer transition-colors"
                />
              </div>
            </div>

            {/* SLIDER 5: Information Sensitivity */}
            <div className="bg-[#0d1013]/80 p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all shadow-md">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-white/5 rounded-xl text-secondary border border-white/10 shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-headline font-bold text-white">
                      Information Sensitivity
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-400 font-mono mt-0.5">
                      Standard → Confidential → Highly Confidential
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-lg border border-secondary/20 shrink-0 ml-2 transition-all">
                  {sensitivityOptions[sensitivityIdx]}
                </span>
              </div>
              <div className="pt-2 relative">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  step="0.5"
                  value={sensitivityVal} 
                  onChange={handleSliderChange(setSensitivityVal)}
                  style={{
                    background: `linear-gradient(to right, #e9c176 0%, #e9c176 ${sensitivityVal}%, rgba(255,255,255,0.12) ${sensitivityVal}%, rgba(255,255,255,0.12) 100%)`
                  }}
                  className="w-full cursor-pointer transition-colors"
                />
              </div>
            </div>

          </div>

          {/* RIGHT AREA: Deep Tech AI Assessment / Results Panel */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-gradient-to-b from-white/[0.12] via-[#121519]/95 to-[#090b0d] p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl relative overflow-hidden flex-1 flex flex-col justify-between backdrop-blur-2xl">
              
              {/* Telemetry Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[10px] font-mono">
                <div className="flex items-center gap-1.5 text-secondary font-bold uppercase tracking-wider">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>AI STRATEGIC ASSESSMENT</span>
                </div>
                <span className="text-gray-400 uppercase tracking-widest">
                  CALIBRATED
                </span>
              </div>

              {/* Dynamic Score Ring Visualization */}
              <div className="my-6 text-center">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto flex items-center justify-center">
                  {/* Subtle Tech Outer Glow */}
                  <div className="absolute inset-0 rounded-full bg-secondary/10 blur-xl"></div>

                  <svg className="w-full h-full transform -rotate-90 relative z-10" viewBox="0 0 36 36">
                    <path
                      className="text-white/10 stroke-current"
                      strokeWidth="3.2"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-secondary stroke-current transition-all duration-300 ease-out"
                      strokeDasharray={`${priorityScore}, 100`}
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                    <span className="font-headline text-3xl sm:text-5xl font-extrabold text-gold-gradient tracking-tight">
                      {priorityScore}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono text-secondary uppercase tracking-widest font-semibold mt-0.5">
                      / 100
                    </span>
                  </div>
                </div>

                <div className="mt-3">
                  <h3 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-secondary font-bold">
                    Advisory Priority Score
                  </h3>
                  <p className="text-[10px] font-mono text-gray-400 mt-0.5">
                    Calculated from 5 organizational vectors
                  </p>
                </div>
              </div>

              {/* Assessment Summary Output */}
              <div className="space-y-4">
                <div className="p-4 sm:p-5 bg-white/[0.04] rounded-2xl border border-white/10 text-left relative overflow-hidden">
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-secondary uppercase tracking-widest font-bold mb-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-secondary shrink-0" />
                    <span>Assessment Summary</span>
                  </div>

                  <h4 className="font-headline text-base sm:text-lg text-white font-bold tracking-tight">
                    {assessmentSummary.summaryPathway}
                  </h4>

                  <p className="font-body text-xs sm:text-[13px] text-gray-300 leading-relaxed font-light mt-1.5">
                    {assessmentSummary.summaryText}
                  </p>
                </div>

                {/* CTA BUTTON */}
                <button
                  type="button"
                  onClick={() => onOpenConsultation({
                    domain: 'Initial Consultation Assessment',
                    score: priorityScore,
                    pathway: assessmentSummary.summaryPathway,
                    text: assessmentSummary.summaryText,
                    scope: scopeOptions[scopeIdx],
                    urgency: urgencyOptions[urgencyIdx],
                    timeline: timelineOptions[timelineIdx],
                    complexity: complexityOptions[complexityIdx],
                    sensitivity: sensitivityOptions[sensitivityIdx]
                  })}
                  className="w-full btn-modern-primary py-4 px-6 text-xs font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-2 group shadow-[0_0_25px_rgba(233,193,118,0.3)] active:scale-95 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-on-secondary shrink-0" />
                  <span>Request Initial Assessment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform shrink-0" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
