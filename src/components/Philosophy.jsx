import React from 'react';
import { Quote } from 'lucide-react';

export default function Philosophy() {
  return (
    <section className="py-14 sm:py-28 px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto relative z-10 scroll-mt-24" id="story">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        {/* Story Image */}
        <div className="lg:col-span-5">
          <div className="aspect-video sm:aspect-[3/4] rounded-2xl overflow-hidden border border-white/20 relative shadow-2xl group">
            <div 
              className="w-full h-full bg-cover bg-center absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-90 contrast-105" 
              style={{ 
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBl3RGUManY3wfvX3m-jczBEBryD_DJ51x2ihap0tnOWiTMOfURlBy5toLkheXEAP-SUyKyABwkQ44Ya1JelQU_pvhOvsVpW4QjODJPn20GkujIDvR5e8niy0wfZ0FYsWaxjlFT3EoJjTCUJ3c_NCqCuAAkQ6edOHXcPxrBzGfaKcoIYYfDKw8VfdguS9PyQKKvbyxkXtZFTVV6mjJAwZnc1O2lBllRRd3MitrVOhlmuhMuPAihH2Bal_9BLx7PlOT-86SO-wQVMWo')` 
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12]/90 via-transparent to-transparent"></div>
            
            {/* Subtle Overlay Badge */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 bg-[#0d0f12]/80 backdrop-blur-md border border-white/20 rounded-xl">
              <p className="text-[10px] sm:text-xs font-mono text-secondary uppercase tracking-widest font-semibold">Architectural Clarity</p>
              <p className="text-[11px] sm:text-xs text-gray-300 mt-0.5 sm:mt-1">Structure over speculation in high-impact decisions.</p>
            </div>
          </div>
        </div>

        {/* Story Text */}
        <div className="lg:col-span-6 lg:col-start-7">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-secondary font-bold px-3.5 py-1.5 bg-white/10 rounded-full border border-white/15 backdrop-blur-md">
            THE PHILOSOPHY
          </span>
          <h2 className="font-headline text-2.5xl sm:text-4xl md:text-5xl text-white mt-3 sm:mt-4 mb-4 sm:mb-8 font-semibold leading-tight tracking-tight">
            CLARITY IN COMPLEXITY
          </h2>
          
          <div className="space-y-4 sm:space-y-5 font-body text-sm sm:text-base md:text-[17px] text-gray-300 font-light leading-relaxed">
            <p>
              AXT Advisory was built on a simple belief: the most consequential decisions rarely exist in black and white.
            </p>
            <p>
              Business, politics and life operate within layers of competing interests, incomplete information and shifting realities. We navigate these white, black and grey areas to identify what matters, what is possible and what moves the situation forward.
            </p>
            <p>
              From street-level realities to boardroom strategy, we bring diverse perspectives into one integrated view—turning complexity into clarity, and clarity into decisive action.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/15 relative pl-5 sm:pl-6">
            <div className="absolute left-0 top-6 sm:top-8 text-secondary">
              <Quote className="w-3.5 h-3.5 sm:w-4 sm:h-4 rotate-180" />
            </div>
            <p className="font-headline text-lg sm:text-2xl text-white italic font-medium">
              “In complexity, clarity is the ultimate advantage.”
            </p>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-secondary font-mono mt-1.5 sm:mt-2 font-medium">
              — ABHISHEK THAKUR, Principal Consultant
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
