import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, ChevronRight } from 'lucide-react';

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
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
          className="font-headline text-base sm:text-xl md:text-2xl font-bold tracking-tight text-white flex items-center gap-1.5 shrink-0"
        >
          <span>AXT ADVISORY</span>
          <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-secondary shadow-[0_0_8px_#e9c176]"></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10 bg-white/[0.04] px-8 py-2.5 rounded-full border border-white/10 backdrop-blur-lg">
          <a 
            href="#values" 
            className="text-xs uppercase tracking-[0.2em] font-medium text-gray-300 hover:text-secondary transition-all"
          >
            Values
          </a>
          <a 
            href="#services" 
            className="text-xs uppercase tracking-[0.2em] font-medium text-gray-300 hover:text-secondary transition-all"
          >
            Services
          </a>
          <a 
            href="#story" 
            className="text-xs uppercase tracking-[0.2em] font-medium text-gray-300 hover:text-secondary transition-all"
          >
            Philosophy
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => onOpenConsultation('Business Consulting')}
            className="btn-modern-primary px-7 py-3 text-xs uppercase font-bold tracking-[0.18em] flex items-center gap-2 group"
          >
            <Sparkles className="w-3.5 h-3.5 text-on-secondary" />
            <span>Consultation</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Action Buttons */}
        <div className="flex md:hidden items-center gap-2">
          <button 
            onClick={() => onOpenConsultation('Business Consulting')}
            className="btn-modern-primary px-3.5 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md active:scale-95"
          >
            <Sparkles className="w-3 h-3 text-on-secondary" />
            <span>Consult</span>
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 rounded-full bg-white/10 border border-white/15 active:scale-95 transition-all"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-secondary" /> : <Menu className="w-4 h-4 text-white" />}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[54px] bottom-0 z-50 bg-[#0d0f12]/98 backdrop-blur-3xl px-5 py-6 flex flex-col justify-between md:hidden animate-in fade-in slide-in-from-top-4 duration-300 border-t border-white/10 overflow-y-auto">
          <div className="space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-secondary mb-2 font-bold px-1">
              Navigation Index
            </div>
            
            <a 
              href="#values" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex justify-between items-center py-3.5 px-4 bg-white/[0.04] rounded-xl border border-white/10 text-sm font-headline text-white active:bg-white/15"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-secondary font-bold">01</span>
                <span>Core Pillars &amp; Competencies</span>
              </div>
              <ChevronRight className="w-4 h-4 text-secondary shrink-0" />
            </a>

            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex justify-between items-center py-3.5 px-4 bg-white/[0.04] rounded-xl border border-white/10 text-sm font-headline text-white active:bg-white/15"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-secondary font-bold">02</span>
                <span>Specialized Practice Areas</span>
              </div>
              <ChevronRight className="w-4 h-4 text-secondary shrink-0" />
            </a>

            <a 
              href="#story" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex justify-between items-center py-3.5 px-4 bg-white/[0.04] rounded-xl border border-white/10 text-sm font-headline text-white active:bg-white/15"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-secondary font-bold">03</span>
                <span>Brand Philosophy &amp; Story</span>
              </div>
              <ChevronRight className="w-4 h-4 text-secondary shrink-0" />
            </a>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation('Business Consulting');
              }}
              className="w-full btn-modern-primary py-3.5 text-xs font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-2 shadow-lg"
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
    </nav>
  );
}
