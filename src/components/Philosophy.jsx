import React from 'react';
import { Quote, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

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

export default function Philosophy({ onOpenConsultation }) {
  return (
    <section className="py-14 sm:py-32 px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto relative z-10" id="story">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center mb-16 sm:mb-24">
        {/* Story Image */}
        <div className="lg:col-span-5">
          <div className="aspect-video sm:aspect-[3/4] rounded-2xl overflow-hidden border border-white/20 relative shadow-2xl group">
            <div 
              className="w-full h-full bg-cover bg-center absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-90 contrast-105" 
              style={{ 
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBl3RGUManY3wfvX3m-jczBEBryD_DJ51x2ihap0tnOWiTMOfURlBy5toLkheXEAP-SUyKyABwkQ44Ya1JelQU_pvhOvsVpW4QjODJPn20GkujIDvR5e8niy0wfZ0FYsWaxjlFT3EoJjTCUJ3c_NCqCuAAkQ6edOHXcPxrBzGfaKcoIYYfDKw8VfdguS9PyQKKvbyxkXtZFTVV6mjJAwZnc1O2lBllRRd3MitrVOhlmuhMuPAihH2Bal_9BLx7PlOT-86SO-wQVMWo')` 
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12]/90 via-transparent to-transparent"></div>
            
            {/* Subtle Overlay Badge */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 bg-[#0d0f12]/80 backdrop-blur-md border border-white/20 rounded-xl">
              <p className="text-[10px] sm:text-xs font-mono text-secondary uppercase tracking-widest font-semibold">Architectural Clarity</p>
              <p className="text-[11px] sm:text-xs text-gray-300 mt-0.5 sm:mt-1">Structure over speculation in high-impact decisions.</p>
            </div>
          </div>
        </div>

        {/* Story Text */}
        <div className="lg:col-span-6 lg:col-start-7">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-secondary font-bold px-3.5 py-1.5 bg-white/10 rounded-full border border-white/15 backdrop-blur-md">
            The Philosophy
          </span>
          <h2 className="font-headline text-2.5xl sm:text-4xl md:text-5xl text-white mt-3 sm:mt-4 mb-4 sm:mb-8 font-semibold leading-tight">
            Clarity in Complexity
          </h2>
          
          <div className="space-y-4 sm:space-y-6 font-body text-sm sm:text-lg text-gray-300 font-light leading-relaxed">
            <p>
              AXT ADVISORY was born from the necessity of navigating chaotic environments with precision. We understand that at the highest levels, the lines between personal ambition, corporate strategy, and public influence blur.
            </p>
            <p>
              We provide a singular, integrated perspective. From raw street-level experience to boardroom diplomacy, our approach distills noise into actionable clarity.
            </p>
          </div>

          <div className="mt-6 sm:mt-10 pt-6 sm:pt-8 border-t border-white/15 relative pl-5 sm:pl-6">
            <div className="absolute left-0 top-6 sm:top-8 text-secondary">
              <Quote className="w-3.5 h-3.5 sm:w-4 sm:h-4 rotate-180" />
            </div>
            <p className="font-headline text-lg sm:text-2xl text-white italic font-medium">
              "The right strategy simplifies the complex."
            </p>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-secondary font-mono mt-1.5 sm:mt-2">
              — Abhishek Thakur, Managing Director
            </p>
          </div>
        </div>
      </div>

      {/* Case Briefs Sub-Section */}
      <div className="pt-10 border-t border-white/10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
          <div>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-secondary font-bold px-3 py-1 bg-white/10 rounded-full border border-white/15">
              Selected Engagements
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl text-white font-semibold mt-2.5">
              Executive Case Briefs
            </h3>
          </div>
          <p className="text-xs font-mono text-gray-400">
            🔒 Sanitized for client confidentiality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {caseBriefs.map((brief, idx) => (
            <div 
              key={idx}
              className="card-white-surface p-5 sm:p-6 rounded-2xl flex flex-col justify-between group hover:border-secondary/50 transition-all duration-300 active:scale-[0.98]"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-mono text-[10px] text-secondary font-bold px-2 py-0.5 bg-white/10 rounded border border-white/15">
                    {brief.code}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">
                    {brief.domain}
                  </span>
                </div>

                <h4 className="font-headline text-base sm:text-lg text-white font-semibold mb-2 group-hover:text-secondary transition-colors">
                  {brief.title}
                </h4>
                <p className="text-xs text-gray-300 font-light mb-4 leading-relaxed">
                  <strong className="text-white font-medium">Challenge:</strong> {brief.challenge}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <p className="text-xs text-secondary font-mono leading-relaxed">
                  ✓ <span className="text-gray-200">{brief.outcome}</span>
                </p>
                <button
                  onClick={() => onOpenConsultation(brief.domain)}
                  className="mt-4 w-full py-2 text-[11px] font-mono uppercase tracking-widest text-white hover:text-secondary flex items-center justify-between group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Request Similar Brief</span>
                  <ArrowRight className="w-3.5 h-3.5 text-secondary" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
