import React, { useState, useEffect } from 'react';
import { Mail, ArrowUpRight, ArrowUp, Globe } from 'lucide-react';

export default function Footer({ onOpenConsultation }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0c0f0f] border-t border-white/10 py-14 sm:py-24 px-4 sm:px-8 md:px-16 text-gray-300 relative z-10" id="contact">
      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 p-3 rounded-full bg-secondary text-on-secondary shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border border-white/30"
          aria-label="Scroll to top"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5 font-bold" />
        </button>
      )}

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12">
        {/* Brand Col */}
        <div className="md:col-span-5">
          <div className="font-headline text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            AXT ADVISORY
          </div>
          <p className="font-body text-xs sm:text-sm text-gray-300 max-w-md font-light leading-relaxed mb-5 sm:mb-6">
            Clarity in Complexity. Dedicated to providing strategic counsel for the most critical decisions across enterprise, private life, and national spheres.
          </p>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/15 rounded-full text-[11px] sm:text-xs font-mono text-secondary">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Advisory Active • Global Availability</span>
            </div>
          </div>

          {/* Global Hub Timezones */}
          <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-4 text-[10px] font-mono text-gray-400">
            <div className="flex items-center gap-1">
              <Globe className="w-3 h-3 text-secondary shrink-0" />
              <span className="text-white font-bold">Global Hubs:</span>
            </div>
            <span>LON (GMT)</span>
            <span>•</span>
            <span>DXB (GST)</span>
            <span>•</span>
            <span>SIN (SGT)</span>
            <span>•</span>
            <span>NYC (EST)</span>
          </div>
        </div>

        {/* Services Col */}
        <div className="md:col-span-3 md:col-start-7">
          <h4 className="font-mono text-xs text-white mb-4 sm:mb-6 tracking-widest uppercase font-semibold">
            Services
          </h4>
          <ul className="space-y-2.5 sm:space-y-3 font-body text-xs sm:text-sm text-gray-300">
            <li>
              <a 
                href="#services" 
                onClick={() => onOpenConsultation('Business Consulting')} 
                className="hover:text-secondary transition-colors flex items-center gap-1 group"
              >
                <span>Business Consulting</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                onClick={() => onOpenConsultation('Life Advisory')}
                className="hover:text-secondary transition-colors flex items-center gap-1 group"
              >
                <span>Life Advisory</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                onClick={() => onOpenConsultation('Political Strategy')}
                className="hover:text-secondary transition-colors flex items-center gap-1 group"
              >
                <span>Political Strategy</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
          </ul>
        </div>

        {/* Connect Col */}
        <div className="md:col-span-3">
          <h4 className="font-mono text-xs text-white mb-4 sm:mb-6 tracking-widest uppercase font-semibold">
            Connect
          </h4>
          <ul className="space-y-3 sm:space-y-4 font-body text-xs sm:text-sm">
            <li>
              <a 
                href="mailto:abhishekthakur@axtadvisory.com" 
                className="text-secondary hover:underline flex items-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="font-mono text-[11px] sm:text-xs">abhishekthakur@axtadvisory.com</span>
              </a>
            </li>
            <li>
              <button
                onClick={() => onOpenConsultation('Integrated Executive Advisory')}
                className="text-xs uppercase tracking-widest text-gray-300 hover:text-secondary transition-colors text-left font-medium"
              >
                Request Consultation Brief →
              </button>
            </li>
          </ul>
        </div>

        {/* Bottom Bar */}
        <div className="md:col-span-12 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} AXT ADVISORY. Clarity in Complexity.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 font-mono text-[10px] sm:text-[11px]">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-secondary transition-colors">Security Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
