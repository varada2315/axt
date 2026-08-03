import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    domain: 'Business Consulting',
    brief: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      organization: '',
      email: '',
      domain: 'Business Consulting',
      brief: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
      <div className="bg-[#16191c] border border-white/20 rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 md:p-10 relative text-white shadow-2xl my-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-white/15 hover:bg-secondary hover:text-on-secondary transition-colors z-10"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6 sm:mb-8 pr-8">
              <div className="inline-flex items-center gap-2 text-secondary text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] font-bold px-3 py-1 bg-white/10 rounded-full border border-white/15">
                <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                <span>Strictly Confidential Advisory</span>
              </div>
              <h2 className="font-headline text-2xl sm:text-3xl font-semibold text-white mt-3">Request Executive Consultation</h2>
              <p className="font-body text-xs sm:text-sm text-gray-300 mt-1 sm:mt-2 font-light">
                Direct strategic channel for leaders, enterprise CEOs, and national advisors.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-widest text-white mb-1.5">
                    Full Name *
                  </label>
                  <input 
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g. Victor Sterling"
                    className="w-full bg-white/5 border border-white/15 focus:border-secondary px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-widest text-white mb-1.5">
                    Organization / Entity
                  </label>
                  <input 
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                    placeholder="e.g. Apex Global Corp"
                    className="w-full bg-white/5 border border-white/15 focus:border-secondary px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-widest text-white mb-1.5">
                    Official Email *
                  </label>
                  <input 
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="v.sterling@apex.com"
                    className="w-full bg-white/5 border border-white/15 focus:border-secondary px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-widest text-white mb-1.5">
                    Domain of Interest
                  </label>
                  <select 
                    value={formData.domain}
                    onChange={(e) => setFormData({...formData, domain: e.target.value})}
                    className="w-full bg-[#1e2020] border border-white/15 focus:border-secondary px-4 py-3 text-sm text-white outline-none transition-colors rounded-xl"
                  >
                    <option value="Business Consulting">Business Consulting</option>
                    <option value="Life Advisory">Life Advisory</option>
                    <option value="Political Strategy">Political Strategy</option>
                    <option value="Integrated Executive Advisory">Integrated Executive Advisory</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-widest text-white mb-1.5">
                  Strategic Overview / Briefing
                </label>
                <textarea 
                  rows={3}
                  value={formData.brief}
                  onChange={(e) => setFormData({...formData, brief: e.target.value})}
                  placeholder="Outline key strategic challenges, objectives, or high-level requirements..."
                  className="w-full bg-white/5 border border-white/15 focus:border-secondary px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors rounded-xl resize-none"
                ></textarea>
              </div>

              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[10px] sm:text-[11px] font-mono text-gray-400 text-center sm:text-left">
                  🔒 Encrypted 256-bit advisory communication.
                </p>
                <button
                  type="submit"
                  className="w-full sm:w-auto btn-modern-primary px-8 py-3.5 text-xs font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-on-secondary" />
                  <span>Transmit Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 sm:py-12 text-center">
            <CheckCircle2 className="w-14 h-14 sm:w-16 sm:h-16 text-secondary mx-auto mb-4 sm:mb-6 animate-bounce" />
            <h3 className="font-headline text-2xl sm:text-3xl text-white mb-2 sm:mb-3 font-semibold">Consultation Request Received</h3>
            <p className="font-body text-xs sm:text-sm text-gray-300 max-w-md mx-auto mb-6 sm:mb-8 leading-relaxed font-light">
              Thank you, <span className="text-secondary font-semibold">{formData.name}</span>. Your brief has been encrypted and routed directly to Abhishek Thakur's executive desk. Expect discrete contact within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="w-full sm:w-auto btn-modern-primary px-8 py-3.5 text-xs uppercase font-bold tracking-widest"
            >
              Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
