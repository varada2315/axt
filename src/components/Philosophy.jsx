import React from 'react';
import { Quote } from 'lucide-react';

export default function Philosophy() {
  return (
    <section className="py-32 px-6 md:px-16 max-w-[1440px] mx-auto relative z-10" id="story">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Story Image */}
        <div className="lg:col-span-5">
          <div className="aspect-[3/4] rounded-lg overflow-hidden border border-outline-variant/20 relative shadow-2xl group">
            <div 
              className="w-full h-full bg-cover bg-center absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-90 contrast-105" 
              style={{ 
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBl3RGUManY3wfvX3m-jczBEBryD_DJ51x2ihap0tnOWiTMOfURlBy5toLkheXEAP-SUyKyABwkQ44Ya1JelQU_pvhOvsVpW4QjODJPn20GkujIDvR5e8niy0wfZ0FYsWaxjlFT3EoJjTCUJ3c_NCqCuAAkQ6edOHXcPxrBzGfaKcoIYYfDKw8VfdguS9PyQKKvbyxkXtZFTVV6mjJAwZnc1O2lBllRRd3MitrVOhlmuhMuPAihH2Bal_9BLx7PlOT-86SO-wQVMWo')` 
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
            
            {/* Subtle Overlay Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/20 rounded">
              <p className="text-xs font-mono text-secondary uppercase tracking-widest">Architectural Clarity</p>
              <p className="text-xs text-on-surface-variant mt-1">Structure over speculation in high-impact decisions.</p>
            </div>
          </div>
        </div>

        {/* Story Text */}
        <div className="lg:col-span-6 lg:col-start-7">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-secondary font-semibold">The Philosophy</span>
          <h2 className="font-headline text-3xl md:text-5xl text-on-surface mt-2 mb-8 font-semibold leading-tight">
            Clarity in Complexity
          </h2>
          
          <div className="space-y-6 font-body text-base md:text-lg text-on-surface-variant font-light leading-relaxed">
            <p>
              AXT ADVISORY was born from the necessity of navigating chaotic environments with precision. We understand that at the highest levels, the lines between personal ambition, corporate strategy, and public influence blur.
            </p>
            <p>
              We provide a singular, integrated perspective. From raw street-level experience to boardroom diplomacy, our approach distills noise into actionable clarity.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-outline-variant/20 relative pl-6">
            <div className="absolute left-0 top-8 text-secondary">
              <Quote className="w-4 h-4 rotate-180" />
            </div>
            <p className="font-headline text-xl md:text-2xl text-on-surface italic font-medium">
              "The right strategy simplifies the complex."
            </p>
            <p className="text-xs uppercase tracking-widest text-secondary font-mono mt-2">
              — Abhishek Thakur, Managing Director
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
