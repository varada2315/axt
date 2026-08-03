import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
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
      <div className="flex justify-between items-center px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto">
        <a 
          href="#" 
          className="font-headline text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white flex items-center gap-2"
        >
          <span>AXT ADVISORY</span>
          <span className="inline-block w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#e9c176]"></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10 bg-white/[0.04] px-8 py-2.5 rounded-full border border-white/10 backdrop-blur-lg">
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
            Brand Story
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={onOpenConsultation}
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
            onClick={onOpenConsultation}
            className="btn-modern-primary px-4 py-2 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1"
          >
            <span>Consult</span>
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2.5 rounded-full bg-white/10 border border-white/15 active:scale-95 transition-all"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-secondary" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-50 bg-[#0d0f12]/98 backdrop-blur-3xl px-6 py-8 flex flex-col justify-between md:hidden animate-in fade-in slide-in-from-top-4 duration-300 border-t border-white/10 overflow-y-auto">
          <div className="space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-secondary mb-4">
              Navigation Menu
            </div>
            
            <a 
              href="#values" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex justify-between items-center py-4 px-4 bg-white/5 rounded-2xl border border-white/10 text-base font-headline text-white active:bg-white/15"
            >
              <span>Core Pillars &amp; Values</span>
              <ChevronRight className="w-5 h-5 text-secondary" />
            </a>

            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex justify-between items-center py-4 px-4 bg-white/5 rounded-2xl border border-white/10 text-base font-headline text-white active:bg-white/15"
            >
              <span>Practice Areas &amp; Services</span>
              <ChevronRight className="w-5 h-5 text-secondary" />
            </a>

            <a 
              href="#story" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex justify-between items-center py-4 px-4 bg-white/5 rounded-2xl border border-white/10 text-base font-headline text-white active:bg-white/15"
            >
              <span>Brand Story &amp; Philosophy</span>
              <ChevronRight className="w-5 h-5 text-secondary" />
            </a>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full btn-modern-primary py-4 text-xs font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-on-secondary" />
              <span>Schedule Advisory Session</span>
            </button>
            <p className="text-center text-[11px] font-mono text-gray-400">
              🔒 100% Discrete Executive Channel
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
