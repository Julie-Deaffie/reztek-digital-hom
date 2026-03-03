/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect } from 'react';
import { BRAND_NAME } from '../constants';
import Logo from './Logo';
import { Linkedin, Github, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  const handleContactClick = (e: React.MouseEvent) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      onNavClick(e as any, 'contact');
  }

  // Determine text color based on state
  const textColorClass = (scrolled || mobileMenuOpen) ? 'text-[#2C2A26]' : 'text-[#F5F2EB]';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled || mobileMenuOpen 
            ? 'bg-[#F5F2EB]/95 backdrop-blur-xl py-3 shadow-sm border-b border-black/5' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-8 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onNavClick(e, ''); // Pass empty string to just reset to home
            }}
            className="z-50 relative transition-transform duration-500 hover:scale-105"
          >
            <Logo variant={scrolled || mobileMenuOpen ? 'dark' : 'light'} />
          </a>
          
          {/* Center Links - Desktop */}
          <div className={`hidden md:flex items-center gap-10 text-sm font-medium tracking-widest uppercase transition-colors duration-500 ${textColorClass}`}>
            {[
              { id: 'services', label: 'What We Do', cree: 'ê-itwayâhk', syllabics: 'ᐁ ᐃᑗᔭᕽ' },
              { id: 'portfolio', label: 'How We Work', cree: 'nitahtoskêwininân', syllabics: 'ᓂᑕᐦᑐᐢᑫᐏᓂᓈᐣ' },
              { id: 'about', label: 'Who We Are', cree: 'awînikâniyâhk', syllabics: 'ᐊᐑᓂᑳᓂᔭᕽ' },
              { id: 'journal', label: 'Digital Muskeg', cree: 'maskêk digital', syllabics: 'ᒪᐢᑫᐠ ᑎᒋᑕᓪ' }
            ].map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => handleLinkClick(e, link.id)} 
                className="group flex flex-col items-center relative focus-visible:ring-2 focus-visible:ring-signal-red focus-visible:outline-none rounded-sm px-1"
                aria-label={link.label}
              >
                <span className="relative">
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-[#2C2A26]' : 'bg-[#F5F2EB]'}`}></span>
                </span>
                <span className="cree-text text-[0.65em] leading-tight opacity-80 text-zinc-900 mt-0.5 transition-opacity group-hover:opacity-100" aria-hidden="true">{link.cree}</span>
                <span className="cree-text text-[0.65em] leading-tight opacity-80 text-red-600 transition-opacity group-hover:opacity-100" aria-hidden="true">{link.syllabics}</span>
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className={`flex items-center gap-6 z-50 relative transition-colors duration-500 ${textColorClass}`}>
            {/* Social Icons - Desktop, appearing when scrolled */}
            <div className="hidden lg:flex items-center gap-4 mr-2">
              <AnimatePresence>
                {scrolled && (
                  <>
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#EF4444] transition-colors focus-visible:ring-2 focus-visible:ring-signal-red focus-visible:outline-none rounded-sm"
                      aria-label="LinkedIn profile"
                    >
                      <Linkedin size={18} />
                    </motion.a>
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: 0.1 }}
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#EF4444] transition-colors focus-visible:ring-2 focus-visible:ring-signal-red focus-visible:outline-none rounded-sm"
                      aria-label="GitHub profile"
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: 0.2 }}
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#EF4444] transition-colors focus-visible:ring-2 focus-visible:ring-signal-red focus-visible:outline-none rounded-sm"
                      aria-label="Twitter profile"
                    >
                      <Twitter size={18} />
                    </motion.a>
                  </>
                )}
              </AnimatePresence>
            </div>

            <button 
              onClick={handleContactClick}
              className="px-6 py-2.5 bg-[#EF4444] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#DC2626] transition-all hover:shadow-lg hover:-translate-y-0.5 rounded-sm hidden sm:block focus-visible:ring-2 focus-visible:ring-signal-red focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Contact Us
            </button>
            <button 
              className={`block md:hidden focus:outline-none transition-colors duration-500 ${textColorClass} focus-visible:ring-2 focus-visible:ring-signal-red rounded-sm`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
               {mobileMenuOpen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
               ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                 </svg>
               )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#F5F2EB]/98 backdrop-blur-xl z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
          <div className="flex flex-col items-center space-y-8 text-xl font-display font-medium text-[#2C2A26]">
            {[
              { id: 'services', label: 'What We Do', cree: 'ê-itwayâhk', syllabics: 'ᐁ ᐃᑗᔭᕽ' },
              { id: 'portfolio', label: 'How We Work', cree: 'nitahtoskêwininân', syllabics: 'ᓂᑕᐦᑐᐢᑫᐏᓂᓈᐣ' },
              { id: 'about', label: 'Who We Are', cree: 'awînikâniyâhk', syllabics: 'ᐊᐑᓂᑳᓂᔭᕽ' },
              { id: 'journal', label: 'Digital Muskeg', cree: 'maskêk digital', syllabics: 'ᒪᐢᑫᐠ ᑎᒋᑕᓪ' }
            ].map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => handleLinkClick(e, link.id)} 
                className="group flex flex-col items-center focus-visible:ring-2 focus-visible:ring-signal-red focus-visible:outline-none rounded-sm px-4"
                aria-label={link.label}
              >
                <span className="text-2xl mb-1">{link.label}</span>
                <span className="cree-text text-sm leading-tight opacity-70 text-zinc-900" aria-hidden="true">{link.cree}</span>
                <span className="cree-text text-sm leading-tight opacity-70 text-red-600" aria-hidden="true">{link.syllabics}</span>
              </a>
            ))}
            
            {/* Social Icons for Mobile */}
            <div className="flex items-center gap-8 pt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#2C2A26] hover:text-[#EF4444] transition-colors focus-visible:ring-2 focus-visible:ring-signal-red focus-visible:outline-none rounded-sm" aria-label="LinkedIn profile">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#2C2A26] hover:text-[#EF4444] transition-colors focus-visible:ring-2 focus-visible:ring-signal-red focus-visible:outline-none rounded-sm" aria-label="GitHub profile">
                <Github size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#2C2A26] hover:text-[#EF4444] transition-colors focus-visible:ring-2 focus-visible:ring-signal-red focus-visible:outline-none rounded-sm" aria-label="Twitter profile">
                <Twitter size={24} />
              </a>
            </div>

            <button 
                onClick={handleContactClick} 
                className="px-10 py-3.5 bg-[#EF4444] text-white text-sm uppercase tracking-widest font-bold mt-8 rounded-sm shadow-md active:scale-95 transition-transform focus-visible:ring-2 focus-visible:ring-signal-red focus-visible:ring-offset-2 focus-visible:outline-none"
            >
                Contact Us
            </button>
          </div>
      </div>
    </>
  );
};

export default Navbar;
