import React from 'react';
import { ArrowRight, ShieldCheck, Lock } from 'lucide-react';

const caseBriefs = [
  {
    code: 'BRIEF-804',
    domain: 'Business Consulting',
    title: 'Hostile M&A Defense & Restructuring',
    challenge: 'Enterprise conglomerate facing $450M hostile takeover attempt during market volatility.',
    outcome: 'Formulated counter-positioning architecture & stakeholder consensus. 100% hostile offer containment within 18 days.',
  },
  {
    code: 'BRIEF-412',
    domain: 'Political Strategy',
    title: 'National Infrastructure Regulatory Framework',
    challenge: 'Cross-border energy consortium stalled by legislative deadlock and regulatory resistance.',
    outcome: 'Re-aligned policy positioning & media narrative framework. Secured unanimous bipartisan regulatory approval.',
  },
  {
    code: 'BRIEF-109',
    domain: 'Life Advisory',
    title: 'Executive Founder Succession & Governance',
    challenge: 'High-net-worth founder navigating high-stakes intergenerational transition and board dispute.',
    outcome: 'Structured 100% discrete succession protocol, protecting multi-billion asset portfolio and institutional harmony.',
  }
];

export default function MattersAdvised({ onOpenConsultation }) {
  return (
    <section 
      id="engagements" 
      className="py-14 sm:py-28 px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto relative z-10 scroll-mt-24 border-t border-white/10"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-[130px] pointer-events-none -translate-y-1/2"></div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 sm:mb-14 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-secondary font-bold px-3.5 py-1.5 bg-white/10 rounded-full border border-white/15 backdrop-blur-md">
            SELECTED ENGAGEMENTS
          </span>
          <h2 className="font-headline text-2.5xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight mt-3 sm:mt-4">
            MATTERS WE HAVE ADVISED ON
          </h2>
          <p className="font-body text-xs sm:text-base text-gray-300 max-w-2xl mt-2 sm:mt-3 font-light">
            Selected cases. Discreetly presented. Strategically resolved.
          </p>
        </div>
        
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-400">
          <Lock className="w-3.5 h-3.5 text-secondary" />
          <span>Sanitized for client confidentiality</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {caseBriefs.map((brief, idx) => (
          <div 
            key={idx}
            className="card-white-surface p-6 sm:p-7 rounded-2xl flex flex-col justify-between group hover:border-secondary/50 transition-all duration-300 active:scale-[0.98] shadow-2xl"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-xs text-secondary font-bold px-2.5 py-1 bg-white/10 rounded-full border border-white/15">
                  {brief.code}
                </span>
                <span className="text-xs font-mono text-gray-400 font-medium">
                  {brief.domain}
                </span>
              </div>

              <h3 className="font-headline text-lg sm:text-xl text-white font-semibold mb-3 group-hover:text-secondary transition-colors leading-snug">
                {brief.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-gray-300 font-light mb-5 leading-relaxed">
                <strong className="text-white font-medium">Challenge:</strong> {brief.challenge}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-xs sm:text-sm text-secondary font-mono leading-relaxed">
                ✓ <span className="text-gray-200">{brief.outcome}</span>
              </p>
              
              <button
                onClick={() => onOpenConsultation(brief.domain)}
                className="mt-5 w-full py-2.5 px-3 rounded-xl bg-white/[0.03] hover:bg-secondary hover:text-on-secondary border border-white/10 hover:border-secondary text-xs font-mono uppercase tracking-wider text-gray-200 flex items-center justify-between transition-all duration-300 group-hover:shadow-md"
              >
                <span>Request Similar Brief</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
