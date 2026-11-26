import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, ChevronRight } from 'lucide-react';
import axtLogo from '../bda9048c-832f-477d-ad22-2eb5c26e0dab.jpg';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-[#0d0f12]/90 backdrop-blur-2xl border-white/15 shadow-2xl py-3' 
          : 'bg-[#0d0f12]/60 backdrop-blur-md border-white/10 py-4 md:py-5'
      }`}>
        {/* Top Reading Progress Bar */}
        <div 
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-secondary via-[#f5d796] to-secondary transition-all duration-150 shadow-[0_0_10px_#e9c176]"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="flex justify-between items-center px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto">
          <a 
            href="#" 
            className="flex items-center gap-2 sm:gap-3 shrink-0 group"
          >
            <img
              src={axtLogo}
              alt="AXT Advisory"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mix-blend-lighten group-hover:scale-105 transition-transform duration-300"
            />
            <span className="font-headline text-base sm:text-xl md:text-2xl font-bold tracking-tight text-white leading-none">
              AXT ADVISORY
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-7 xl:space-x-9 bg-white/[0.04] px-7 py-2.5 rounded-full border border-white/10 backdrop-blur-lg">
            <a 
              href="#services" 
              className="text-[11px] xl:text-xs uppercase tracking-[0.16em] xl:tracking-[0.18em] font-medium text-gray-300 hover:text-secondary transition-all whitespace-nowrap"
            >
              Services
            </a>
            <a 
              href="#principal-consultant" 
              className="text-[11px] xl:text-xs uppercase tracking-[0.16em] xl:tracking-[0.18em] font-medium text-gray-300 hover:text-secondary transition-all whitespace-nowrap"
            >
              Principal Consultant
            </a>
            <a 
              href="#engagements" 
              className="text-[11px] xl:text-xs uppercase tracking-[0.16em] xl:tracking-[0.18em] font-medium text-gray-300 hover:text-secondary transition-all whitespace-nowrap"
            >
              Matters We Have Advised On
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button 
              type="button"
              onClick={() => onOpenConsultation('Business Consulting')}
              className="btn-modern-primary px-6 xl:px-7 py-2.5 xl:py-3 text-[11px] xl:text-xs uppercase font-bold tracking-[0.16em] xl:tracking-[0.18em] flex items-center gap-2 group"
            >
              <Sparkles className="w-3.5 h-3.5 text-on-secondary" />
              <span>Consultation</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Action Buttons */}
          <div className="flex lg:hidden items-center gap-2">
            <button 
              type="button"
              onClick={() => onOpenConsultation('Business Consulting')}
              className="btn-modern-primary px-3.5 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md active:scale-95"
            >
              <Sparkles className="w-3 h-3 text-on-secondary" />
              <span>Consult</span>
            </button>

            <button 
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2.5 rounded-full bg-white/10 border border-white/15 active:scale-95 transition-all cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-secondary" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Drawer with Fixed Footer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0c0e10] flex flex-col justify-between lg:hidden h-[100dvh] max-h-[100dvh] overflow-hidden">
          {/* Top Header inside Drawer */}
          <div className="flex justify-between items-center p-5 sm:p-6 pb-4 border-b border-white/10 shrink-0">
            <a 
              href="#" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
            >
              <img
                src={axtLogo}
                alt="AXT Advisory"
                className="w-10 h-10 rounded-full object-cover mix-blend-lighten"
              />
              <span className="font-headline text-lg font-bold tracking-tight text-white leading-none">
                AXT ADVISORY
              </span>
            </a>

            <button 
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white p-2.5 rounded-full bg-white/10 border border-white/15 active:scale-95 transition-all cursor-pointer text-secondary"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Scrollable Navigation Items Area */}
          <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-4 space-y-3.5">
            <div className="text-[10px] font-mono uppercase tracking-widest text-secondary mb-3 font-bold px-1">
              Navigation Index
            </div>
            
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex justify-between items-center py-4 px-4 bg-white/[0.04] rounded-xl border border-white/10 text-base font-headline text-white hover:border-secondary/40 active:bg-white/15 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <span className="font-mono text-xs text-secondary font-bold">01</span>
                <span className="font-medium">Services (Areas of Counsel)</span>
              </div>
              <ChevronRight className="w-4 h-4 text-secondary shrink-0" />
            </a>

            <a 
              href="#principal-consultant" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex justify-between items-center py-4 px-4 bg-white/[0.04] rounded-xl border border-white/10 text-base font-headline text-white hover:border-secondary/40 active:bg-white/15 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <span className="font-mono text-xs text-secondary font-bold">02</span>
                <span className="font-medium">Principal Consultant</span>
              </div>
              <ChevronRight className="w-4 h-4 text-secondary shrink-0" />
            </a>

            <a 
              href="#engagements" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex justify-between items-center py-4 px-4 bg-white/[0.04] rounded-xl border border-white/10 text-base font-headline text-white hover:border-secondary/40 active:bg-white/15 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <span className="font-mono text-xs text-secondary font-bold">03</span>
                <span className="font-medium">Matters We Have Advised On</span>
              </div>
              <ChevronRight className="w-4 h-4 text-secondary shrink-0" />
            </a>
          </div>

          {/* Fixed Bottom Action in Drawer */}
          <div className="p-5 sm:p-6 pt-4 border-t border-white/10 bg-[#0c0e10] shrink-0 space-y-2.5">
            <button 
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation('Business Consulting');
              }}
              className="w-full btn-modern-primary py-3.5 sm:py-4 text-xs font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-2 shadow-lg active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-on-secondary" />
              <span>Schedule Executive Session</span>
            </button>
            <p className="text-center text-[10px] font-mono text-gray-400">
              🔒 Discrete Executive Advisory Directive
            </p>
          </div>
        </div>
      )}
    </>
  );
}
