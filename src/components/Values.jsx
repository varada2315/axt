import React from 'react';

const values = [
  {
    icon: "chess",
    title: "Strategic Thinking",
    description: "Long-term vision applied to immediate challenges with high-yield foresight."
  },
  {
    icon: "balance",
    title: "Balanced Judgment",
    description: "Objective analysis and composure in high-stakes, high-pressure environments."
  },
  {
    icon: "target",
    title: "Precision Execution",
    description: "Flawless, structured implementation of complex multi-layered directives."
  },
  {
    icon: "monitoring",
    title: "Measurable Impact",
    description: "Quantifiable results and lasting transformation that drive real growth."
  }
];

export default function Values() {
  return (
    <section id="values" className="py-24 px-6 md:px-16 max-w-[1440px] mx-auto relative z-10">
      {/* White Ambient Light Spot in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="text-center max-w-xl mx-auto mb-16 relative">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-secondary font-bold px-4 py-1.5 bg-white/10 rounded-full border border-white/15 backdrop-blur-md">
          Core Pillars
        </span>
        <h2 className="font-headline text-3xl md:text-5xl font-semibold text-white mt-4">
          Executive Competencies
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {values.map((item, idx) => (
          <div 
            key={idx} 
            className="card-white-surface p-8 rounded-2xl hover-lift group relative overflow-hidden transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all"></div>
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-300 shadow-lg">
              <span 
                className="material-symbols-outlined text-3xl block"
                style={{ fontWeight: 300 }}
              >
                {item.icon}
              </span>
            </div>

            <h3 className="font-headline text-xl text-white mb-3 font-semibold group-hover:text-secondary transition-colors">
              {item.title}
            </h3>
            <p className="font-body text-sm text-gray-300 leading-relaxed font-light">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
