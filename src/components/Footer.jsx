import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenConsultation }) {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10 py-24 px-6 md:px-16 text-on-surface relative z-10" id="contact">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Brand Col */}
        <div className="md:col-span-5">
          <div className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-4">
            AXT ADVISORY
          </div>
          <p className="font-body text-sm text-on-surface-variant max-w-md font-light leading-relaxed mb-6">
            Clarity in Complexity. Dedicated to providing strategic counsel for the most critical decisions across enterprise, private life, and national spheres.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low border border-outline-variant/20 rounded text-xs font-mono text-secondary">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Advisory Active • Global Availability</span>
          </div>
        </div>

        {/* Services Col */}
        <div className="md:col-span-3 md:col-start-7">
          <h4 className="font-mono text-xs text-on-surface mb-6 tracking-widest uppercase font-semibold">
            Services
          </h4>
          <ul className="space-y-3 font-body text-sm text-on-surface-variant">
            <li>
              <a href="#services" className="hover:text-secondary transition-colors flex items-center gap-1 group">
                <span>Business Consulting</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-secondary transition-colors flex items-center gap-1 group">
                <span>Life Advisory</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-secondary transition-colors flex items-center gap-1 group">
                <span>Political Strategy</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
          </ul>
        </div>

        {/* Connect Col */}
        <div className="md:col-span-3">
          <h4 className="font-mono text-xs text-on-surface mb-6 tracking-widest uppercase font-semibold">
            Connect
          </h4>
          <ul className="space-y-4 font-body text-sm">
            <li>
              <a 
                href="mailto:abhishekthakur@axtadvisory.com" 
                className="text-secondary hover:underline flex items-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="break-all font-mono text-xs">abhishekthakur@axtadvisory.com</span>
              </a>
            </li>
            <li>
              <button
                onClick={onOpenConsultation}
                className="text-xs uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors text-left"
              >
                Request Consultation Brief →
              </button>
            </li>
          </ul>
        </div>

        {/* Bottom Bar */}
        <div className="md:col-span-12 mt-12 pt-8 border-t border-outline-variant/10 flex flex-col sm:flex-row justify-between items-center text-xs text-on-surface-variant gap-4">
          <p>© {new Date().getFullYear()} AXT ADVISORY. Clarity in Complexity.</p>
          <div className="flex gap-6 font-mono text-[11px]">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-secondary transition-colors">Security Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
