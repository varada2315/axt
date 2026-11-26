import React, { useState, useEffect } from 'react';
import { Mail, ArrowUpRight, ArrowUp, Linkedin, Twitter } from 'lucide-react';
import axtLogo from '../bda9048c-832f-477d-ad22-2eb5c26e0dab.jpg';

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
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <img
              src={axtLogo}
              alt="AXT Advisory"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mix-blend-lighten flex-shrink-0"
            />
            <div className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-white">
              AXT ADVISORY
            </div>
          </div>
          <p className="font-body text-xs sm:text-sm text-gray-300 max-w-md font-light leading-relaxed mb-5 sm:mb-6">
            Clarity in Complexity. Discreet counsel for decisions that shape businesses, lives and institutions.
          </p>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/15 rounded-full text-[11px] sm:text-xs font-mono text-secondary">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Advisory Active • Global Availability</span>
            </div>
          </div>

          {/* Social Channels: LinkedIn, Twitter, Telegram */}
          <div className="mt-5 pt-4 border-t border-white/10">
            <div className="text-[10px] sm:text-[11px] font-mono text-gray-400 uppercase tracking-widest mb-3 font-semibold">
              Follow & Connect:
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <a 
                href="https://www.linkedin.com/company/axt-advisory/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-secondary hover:text-on-secondary border border-white/15 hover:border-secondary rounded-full text-xs font-mono text-gray-200 transition-all duration-300 active:scale-95 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://x.com/AxTADVISORY" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-secondary hover:text-on-secondary border border-white/15 hover:border-secondary rounded-full text-xs font-mono text-gray-200 transition-all duration-300 active:scale-95 group"
                aria-label="Twitter / X"
              >
                <Twitter className="w-3.5 h-3.5" />
                <span>Twitter</span>
                <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://t.me/axtadvisory" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-secondary hover:text-on-secondary border border-white/15 hover:border-secondary rounded-full text-xs font-mono text-gray-200 transition-all duration-300 active:scale-95 group"
                aria-label="Telegram Channel"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
                <span>Telegram Channel</span>
                <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
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
