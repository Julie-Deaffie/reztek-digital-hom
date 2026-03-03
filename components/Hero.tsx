/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      
      // Update URL hash without jumping, safely ignoring errors in sandboxed environments
      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {
        // Ignore SecurityError in restricted environments
      }
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-[#D6D1C7]">
      
      {/* Background Image - Serene Nature */}
      <div className="absolute inset-0 w-full h-full">
        <img 
            src="https://picsum.photos/seed/river-forest/1920/1080?blur=4" 
            alt="River and forest landscape" 
            className="w-full h-full object-cover grayscale contrast-[0.7] brightness-[0.95] animate-[pulse_15s_ease-in-out_infinite_alternate]" referrerPolicy="no-referrer"
        />
        {/* Warmer Brown Overlay for Richness */}
        <div className="absolute inset-0 bg-[#433E38]/40 mix-blend-multiply"></div>
        {/* Deep Sepia Tone for Shadow Depth */}
        <div className="absolute inset-0 bg-[#313030]/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start text-left md:items-center md:text-center px-6">
        <div className="animate-fade-in-up w-full md:w-auto">
          <span className="cree-text block text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-white/90 mb-6 backdrop-blur-md bg-black/20 px-6 py-2 rounded-none border border-white/20 mx-0 md:mx-auto w-fit">
            Rooted in Community: 100% Aboriginal Owned & Operated
          </span>
          <div className="mb-8 flex justify-center">
            <Logo variant="light" className="h-24 md:h-32 w-auto" />
          </div>
          <p className="max-w-xl mx-0 md:mx-auto text-lg md:text-xl text-white/90 font-medium leading-relaxed mb-12 text-shadow-lg">
            Small business is community business. We build clean, fast, no-nonsense websites for small businesses and the people doing the real work — no bloat, no BS, just the tools your business actually needs. Nothing more.
          </p>
          
          <a 
            href="#services" 
            onClick={(e) => handleNavClick(e, 'services')}
            className="group relative px-12 py-5 bg-[#EF4444] text-white rounded-none text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#DC2626] transition-all duration-500 overflow-hidden shadow-2xl inline-block"
          >
            <span className="relative z-10">Get a Quote</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
