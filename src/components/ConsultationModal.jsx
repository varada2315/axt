import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Sparkles, Clock } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose, initialDomain = 'Business Consulting' }) {
  const [submitted, setSubmitted] = useState(false);
  const [ticketCode, setTicketCode] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    domain: initialDomain,
    urgency: 'Normal (Within 48h)',
    brief: ''
  });

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        domain: initialDomain || 'Business Consulting'
      }));
    }
  }, [isOpen, initialDomain]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomCode = `AXT-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketCode(randomCode);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      organization: '',
      email: '',
      domain: initialDomain || 'Business Consulting',
      urgency: 'Normal (Within 48h)',
      brief: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
      <div className="bg-[#16191c] border border-white/20 rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-4 sm:p-8 md:p-10 relative text-white shadow-2xl my-auto">
        <button 
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-6 sm:right-6 p-2 sm:p-2.5 rounded-full bg-white/15 hover:bg-secondary hover:text-on-secondary transition-colors z-10"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-5 sm:mb-8 pr-8">
              <div className="inline-flex items-center gap-1.5 text-secondary text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] font-bold px-3 py-1 bg-white/10 rounded-full border border-white/15">
                <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                <span>Strictly Confidential Advisory</span>
              </div>
              <h2 className="font-headline text-xl sm:text-3xl font-semibold text-white mt-2.5">Request Executive Consultation</h2>
              <p className="font-body text-xs sm:text-sm text-gray-300 mt-1 font-light">
                Direct strategic channel for leaders, enterprise CEOs, and national advisors.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
                <div>
                  <label className="block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white mb-1">
                    Full Name *
                  </label>
                  <input 
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g. Victor Sterling"
                    className="w-full bg-white/5 border border-white/15 focus:border-secondary px-3.5 py-2.5 sm:py-3 text-base sm:text-sm text-white placeholder-gray-500 outline-none transition-colors rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white mb-1">
                    Organization / Entity
                  </label>
                  <input 
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                    placeholder="e.g. Apex Global Corp"
                    className="w-full bg-white/5 border border-white/15 focus:border-secondary px-3.5 py-2.5 sm:py-3 text-base sm:text-sm text-white placeholder-gray-500 outline-none transition-colors rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
                <div>
                  <label className="block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white mb-1">
                    Official Email *
                  </label>
                  <input 
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="v.sterling@apex.com"
                    className="w-full bg-white/5 border border-white/15 focus:border-secondary px-3.5 py-2.5 sm:py-3 text-base sm:text-sm text-white placeholder-gray-500 outline-none transition-colors rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white mb-1">
                    Domain of Interest
                  </label>
                  <select 
                    value={formData.domain}
                    onChange={(e) => setFormData({...formData, domain: e.target.value})}
                    className="w-full bg-[#1e2020] border border-white/15 focus:border-secondary px-3.5 py-2.5 sm:py-3 text-base sm:text-sm text-white outline-none transition-colors rounded-xl"
                  >
                    <option value="Business Consulting">Business Consulting</option>
                    <option value="Life Advisory">Life Advisory</option>
                    <option value="Political Strategy">Political Strategy</option>
                    <option value="Integrated Executive Advisory">Integrated Executive Advisory</option>
                  </select>
                </div>
              </div>

              {/* Urgency Level Selector */}
              <div>
                <label className="block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white mb-1.5">
                  Advisory Response Urgency
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Normal (Within 48h)', 'High Priority (24h)', 'Emergency Directive'].map((level) => (
                    <button
                      type="button"
                      key={level}
                      onClick={() => setFormData({...formData, urgency: level})}
                      className={`py-2 px-2 rounded-xl text-[10px] sm:text-xs font-mono text-center transition-all ${
                        formData.urgency === level
                          ? 'bg-secondary text-on-secondary font-bold border border-secondary shadow-md'
                          : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {level.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white mb-1">
                  Strategic Overview / Briefing
                </label>
                <textarea 
                  rows={3}
                  value={formData.brief}
                  onChange={(e) => setFormData({...formData, brief: e.target.value})}
                  placeholder="Outline key strategic challenges, objectives, or high-level requirements..."
                  className="w-full bg-white/5 border border-white/15 focus:border-secondary px-3.5 py-2.5 sm:py-3 text-base sm:text-sm text-white placeholder-gray-500 outline-none transition-colors rounded-xl resize-none"
                ></textarea>
              </div>

              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                <p className="text-[10px] sm:text-[11px] font-mono text-gray-400 text-center sm:text-left">
                  🔒 Encrypted 256-bit advisory communication.
                </p>
                <button
                  type="submit"
                  className="w-full sm:w-auto btn-modern-primary px-8 py-3 sm:py-3.5 text-xs font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-2 shadow-lg active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-on-secondary" />
                  <span>Transmit Directive Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 sm:py-10 text-center">
            <CheckCircle2 className="w-12 h-12 sm:w-16 sm:h-16 text-secondary mx-auto mb-3 sm:mb-5 animate-bounce" />
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 rounded-full border border-white/15 mb-3 font-mono text-xs text-secondary">
              <span>Directive Code: <strong>{ticketCode}</strong></span>
            </div>
            <h3 className="font-headline text-xl sm:text-3xl text-white mb-2 font-semibold">Consultation Request Transmitted</h3>
            <p className="font-body text-xs sm:text-sm text-gray-300 max-w-md mx-auto mb-6 sm:mb-8 leading-relaxed font-light">
              Thank you, <span className="text-secondary font-semibold">{formData.name}</span>. Your brief for <span className="text-white font-medium">{formData.domain}</span> ({formData.urgency}) has been encrypted and routed directly to Abhishek Thakur's executive desk.
            </p>
            <button
              onClick={handleReset}
              className="w-full sm:w-auto btn-modern-primary px-8 py-3.5 text-xs uppercase font-bold tracking-widest active:scale-95"
            >
              Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
