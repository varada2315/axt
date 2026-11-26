import React from 'react';
import globalMapImage from '../d8582c97-1461-4fd4-87d0-d5b58dc209c4.jpg';

export default function GlobalMapBanner() {
  return (
    <section className="py-8 sm:py-14 px-4 sm:px-8 md:px-16 max-w-[1440px] mx-auto relative z-10">
      <div className="flex items-center justify-center relative">
        {/* Ambient Subtle Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-56 bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="w-full max-w-4xl rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-2xl relative bg-[#0c0e11] group">
          <img
            src={globalMapImage}
            alt="AXT Strategic Global Reach & Methodology"
            className="w-full h-auto object-contain select-none transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
