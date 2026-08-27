import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, X, Sparkles } from 'lucide-react';

const servicesData = [
  {
    id: 'business',
    title: 'Business Consulting',
    subtitle: 'Strategic Restructuring & Market Dominance',
    description: 'Navigating corporate complexity with on-ground expertise. Strategic restructuring, market entry, M&A advisory, and crisis management for enterprise organizations.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIzdqOftDIfFV79pvsXQrI1xNuL-lV_eNY_RHcI0JbH8nAOPHvOGGdonmDIGKZ-tT9Tn5pts9hTgDj6nz4omcM-S_XyoeQaGjUd7cNpgfWI34h4k91HKEqslIt5Sf9zRP8KQapUaSdOi8AZGnbF1ktPDwyXDa9VWOBfxloLX4HkqmHnvJCMvuQqWJ8ND58Ee4fIAu0nwfrkl9GWRX9UJh0LAA8pp_uCMoK0db73d6uG5MMEITU-FE0o7BbAWRCqHgiDwBv4HpwJvw',
    tags: ['Corporate Strategy', 'Risk Assessment', 'M&A Advisory', 'Crisis Management'],
    deliverables: [
      'C-Suite Strategic Playbooks',
      'Market Penetration Architecture',
      'Organizational Alignment Diagnostics',
      'Operational Efficiency Optimization'
    ]
  },
  {
    id: 'life',
    title: 'Life Advisory',
    subtitle: 'Private Counsel for Key Decision Makers',
    description: 'Personal consulting for high-stakes decision making. Objective, high-confidentiality counsel for leaders, founders, and executives navigating personal and professional crossroads.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv0LjVQYVXJROYCJhpXBEMDJCilgNO6bw0S9-AjmjJgQ1xWG1FyXft8VJmb-zBivBN5CPMlmQNIuLWXXW4-NTVFRQH6VJNtU5LWivs2j8JOnlOB6mjchImnHdq_nn9KEJs3lSGUInuMsX9F8TOKtCGrc3bG6nvnECorLvQwCHk96aHNtajb4kYQObBOEsDvOYRTNp3USUkbuECrnbihwWsW437ttR4SMybhyl_ivfkJfa7rjcTYC0sU8mGtABWCkItPJGkK5I6TSI',
    tags: ['Leadership Alignment', 'Legacy Planning', 'Conflict Resolution', 'Confidential Counsel'],
    deliverables: [
      'Executive Leadership Profiling',
      'Succession & Legacy Architecture',
      'High-Stakes Conflict Strategy',
      'Discrete 1-on-1 Advisory'
    ]
  },
  {
    id: 'political',
    title: 'Political Strategy',
    subtitle: 'National Influence & Narrative Control',
    description: 'Strategic planning for influence and national-level impact. Comprehensive campaign architecture, narrative positioning, regulatory foresight, and policy positioning.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1VwLHqMATrgUe4wEM7JBm1NNqqn1KJ50KNNDV4NBCsOL3Hf3LaEpKszhCAdJykiH4UcchzlbUCV0cveZxyzPbg5x3UM1A_qN28lLTf4qrJu_UnlosRB4KSFmzavwQIK2_OqQej176MxG5Tna-skvtBOp8r4rkkiZA4LIw3HCMJ_wd5GjcpqFn3XBA4KFgOR68gX1IML9SrIHs9niT0E2Bu6qkhgmrYusi7dyEdsNGRiTXUgre0VuMy6Dg1UO1bwIm8FvL--r5MyI',
    tags: ['Policy Architecture', 'Public Relations', 'Geopolitical Insight', 'Campaign Command'],
    deliverables: [
      'Public Policy & Campaign Frameworks',
      'Narrative & Crisis Containment',
      'Cross-Border Regulatory Strategy',
      'Stakeholder Perception Mapping'
    ]
  }
];

export default function Services({ onOpenConsultation }) {
  const [selectedService, setSelectedService] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredServices = activeFilter === 'All' 
    ? servicesData 
    : servicesData.filter(s => s.title.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(s.title.toLowerCase()));

  return (
    <section className="py-14 sm:py-32 bg-[#0c0e10]/80 px-4 sm:px-8 md:px-16 border-y border-white/10 relative" id="services">
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto relative">
        <div className="mb-6 sm:mb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center md:items-end gap-3 sm:gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-secondary font-bold px-3.5 py-1.5 bg-white/10 rounded-full border border-white/15 backdrop-blur-md">
              Specialized Practice
            </span>
            <h2 className="font-headline text-2.5xl sm:text-4xl md:text-5xl text-white mt-3 sm:mt-4 font-semibold">
              Areas of Expertise
            </h2>
            <p className="font-body text-xs sm:text-base text-gray-300 max-w-xl mt-2 sm:mt-3 font-light">
              Tailored strategic consulting designed for distinct domains of global influence.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-xs uppercase font-mono tracking-widest text-gray-400 px-3 py-1 bg-white/5 rounded-full border border-white/10">
              03 Practice Disciplines
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar mb-6 sm:mb-10 pb-1">
          {['All', 'Business Consulting', 'Life Advisory', 'Political Strategy'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-xs font-mono whitespace-nowrap transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-secondary text-on-secondary font-bold shadow-[0_0_15px_rgba(233,193,118,0.4)] scale-105'
                  : 'bg-white/5 text-gray-300 hover:bg-white/15 border border-white/10'
              }`}
            >
              {category === 'All' ? 'All Practice Areas' : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="card-white-surface rounded-2xl overflow-hidden cursor-pointer flex flex-col h-full shadow-2xl group transition-all duration-300 active:scale-[0.98]"
            >
              {/* Image Container */}
              <div className="h-48 sm:h-72 overflow-hidden relative">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-90 contrast-105" 
                  style={{ backgroundImage: `url('${service.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#16191c] via-[#16191c]/20 to-transparent"></div>
                <span className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[10px] sm:text-xs font-mono px-2.5 py-1 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 text-white font-medium shadow-lg">
                  Explore →
                </span>
              </div>

              {/* Service Details */}
              <div className="p-5 sm:p-8 relative flex-1 flex flex-col justify-between bg-[#16191c]">
                <div>
                  <h3 className="font-headline text-lg sm:text-2xl text-white mb-1.5 group-hover:text-secondary transition-colors font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-secondary font-mono mb-2.5 uppercase tracking-widest">
                    {service.subtitle}
                  </p>
                  <p className="font-body text-xs sm:text-sm text-gray-300 mb-4 sm:mb-5 line-clamp-3 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                    {service.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-[10px] sm:text-[11px] font-mono px-2.5 py-0.5 sm:py-1 bg-white/10 rounded-full text-gray-200 border border-white/15">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="btn-modern-secondary py-2.5 sm:py-3 px-4 sm:px-5 text-[11px] sm:text-xs uppercase tracking-widest font-semibold flex items-center justify-between group-hover:bg-white/20 transition-all">
                    <span>View Framework</span>
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal - Optimized for Mobile Dialog */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="bg-[#16191c] border border-white/20 rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-4 sm:p-8 relative text-white shadow-2xl my-auto">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 p-2 rounded-full bg-white/15 hover:bg-secondary hover:text-on-secondary transition-colors z-10"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>

            <div className="mb-3 sm:mb-6 pr-8">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-secondary font-bold px-3 py-1 bg-white/10 rounded-full border border-white/15">
                Specialized Practice
              </span>
              <h2 className="font-headline text-xl sm:text-4xl text-white mt-2.5 font-semibold">{selectedService.title}</h2>
              <p className="text-[11px] sm:text-sm font-mono text-secondary mt-1">{selectedService.subtitle}</p>
            </div>

            <div className="aspect-video w-full rounded-xl overflow-hidden mb-4 sm:mb-5 border border-white/15 shadow-xl">
              <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
            </div>

            <p className="font-body text-xs sm:text-base text-gray-200 mb-5 sm:mb-6 leading-relaxed font-light">
              {selectedService.description}
            </p>

            <div className="mb-5 sm:mb-6">
              <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-white mb-2.5">Core Deliverables</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 sm:p-3 bg-white/5 rounded-xl border border-white/10 text-xs text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-4 border-t border-white/15">
              <button
                onClick={() => {
                  const domainToPass = selectedService.title;
                  setSelectedService(null);
                  onOpenConsultation(domainToPass);
                }}
                className="w-full sm:flex-1 btn-modern-primary py-3 sm:py-3.5 px-5 text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <Sparkles className="w-4 h-4 text-on-secondary" />
                <span>Schedule {selectedService.title}</span>
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto btn-modern-secondary py-3 sm:py-3.5 px-6 text-xs uppercase tracking-widest font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
