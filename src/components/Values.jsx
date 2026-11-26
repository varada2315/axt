import React from 'react';
import { Shield, Scale, Target, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: "Strategic Foresight",
    description: "See beyond the immediate. We connect signals, risks and opportunities to build strategies for what comes next.",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Scale,
    title: "Balanced Judgment",
    description: "Navigate complexity without losing perspective. We weigh facts, interests and consequences before making the call.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Target,
    title: "Precision Execution",
    description: "Strategy means little without execution. We translate complex decisions into clear priorities, decisive action and disciplined delivery.",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: TrendingUp,
    title: "Measurable Impact",
    description: "Ideas must create movement. We focus on outcomes that can be measured, sustained and scaled.",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Values() {
  return (
    <section id="values" className="py-16 sm:py-32 px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto relative z-10 scroll-mt-24">
      {/* Ambient Lighting Spot */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-white/5 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Section Header */}
      <div className="text-center max-w-5xl mx-auto mb-10 sm:mb-16 relative">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-secondary font-bold px-4 py-1.5 bg-white/10 rounded-full border border-white/15 backdrop-blur-md inline-block">
          Core Pillars
        </span>

        <h2 className="font-headline text-2.5xl sm:text-4xl md:text-5xl font-semibold text-white mt-3 sm:mt-4 tracking-tight">
          Executive Competencies
        </h2>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 relative">
        {values.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={idx}
              className="card-white-surface p-6 sm:p-8 rounded-2xl group relative overflow-hidden transition-all duration-500 active:scale-[0.98]"
            >
              {/* Full-bleed background image & dark gradient overlays */}
              {item.image && (
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <div
                    className="w-full h-full bg-cover bg-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 opacity-65 group-hover:opacity-80"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  {/* Dark gradient overlay, subtle at the top and darkening at the bottom for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e]/95 via-[#090b0e]/65 to-[#090b0e]/15" />
                </div>
              )}

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-5 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-300 shadow-lg backdrop-blur-md">
                    <IconComp className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" />
                  </div>
                  <span className="font-mono text-xs text-secondary font-bold px-2.5 py-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-headline text-lg sm:text-xl text-white mb-2 sm:mb-3 font-semibold group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
