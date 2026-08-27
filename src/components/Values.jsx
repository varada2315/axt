import React from 'react';
import { Shield, Scale, Target, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: "Strategic Thinking",
    description: "Long-term vision applied to immediate challenges with high-yield foresight."
  },
  {
    icon: Scale,
    title: "Balanced Judgment",
    description: "Objective analysis and composure in high-stakes, high-pressure environments."
  },
  {
    icon: Target,
    title: "Precision Execution",
    description: "Flawless, structured implementation of complex multi-layered directives."
  },
  {
    icon: TrendingUp,
    title: "Measurable Impact",
    description: "Quantifiable results and lasting transformation that drive real growth."
  }
];

export default function Values() {
  return (
    <section id="values" className="py-14 sm:py-24 px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto relative z-10">
      {/* White Ambient Light Spot in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="text-center max-w-xl mx-auto mb-10 sm:mb-16 relative">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-secondary font-bold px-4 py-1.5 bg-white/10 rounded-full border border-white/15 backdrop-blur-md">
          Core Pillars
        </span>
        <h2 className="font-headline text-2.5xl sm:text-4xl md:text-5xl font-semibold text-white mt-3 sm:mt-4">
          Executive Competencies
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 relative">
        {values.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div 
              key={idx} 
              className="card-white-surface p-6 sm:p-8 rounded-2xl group relative overflow-hidden transition-all duration-500 active:scale-[0.98]"
            >
              <div className="flex justify-between items-start mb-5 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-300 shadow-lg">
                  <IconComp className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" />
                </div>
                <span className="font-mono text-xs text-secondary font-bold px-2.5 py-1 bg-white/5 rounded-full border border-white/10">
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
          );
        })}
      </div>
    </section>
  );
}
