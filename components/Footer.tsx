/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';
import Logo from './Logo';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribeStatus('loading');
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <footer className="bg-[#EBE7DE] pt-24 pb-12 px-6 text-[#5D5A53]">
      <div className="max-w-[1800px] mx-auto mb-16 flex flex-col md:flex-row justify-between items-start gap-8">
        <a 
          href="#" 
          onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-block transition-transform duration-500 hover:scale-105"
        >
          <Logo variant="dark" className="h-16 w-auto" />
        </a>
        
        <div className="flex gap-4">
             {/* Social Icons */}
             <a href="#" className="p-2 bg-[#D6D1C7]/30 rounded-full hover:bg-[#EF4444] hover:text-white transition-all duration-300 group" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
             </a>
             <a href="#" className="p-2 bg-[#D6D1C7]/30 rounded-full hover:bg-[#EF4444] hover:text-white transition-all duration-300 group" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
             </a>
             <a href="#" className="p-2 bg-[#D6D1C7]/30 rounded-full hover:bg-[#EF4444] hover:text-white transition-all duration-300 group" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
             </a>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-[#D6D1C7] pt-16">
        
        <div className="md:col-span-3">
          <h4 className="font-medium text-[#2C2A26] mb-6 tracking-wide text-sm uppercase">About Us</h4>
          <p className="font-light leading-relaxed mb-6">
            The work speaks. We just write the code. RezTek Digital is a 100% Aboriginal owned and operated digital agency.
          </p>
          <div className="flex flex-col gap-2 text-sm">
             <a href="mailto:reztek.digital@gmail.com" className="hover:text-[#EF4444] transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                reztek.digital@gmail.com
             </a>
             <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                Northern Manitoba
             </span>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-medium text-[#2C2A26] mb-6 tracking-wide text-sm uppercase">Sitemap</h4>
          <ul className="space-y-3 font-light text-sm">
            <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); onLinkClick(e, ''); }} className="hover:text-[#EF4444] transition-colors">Home</a></li>
            <li><a href="#services" onClick={(e) => onLinkClick(e, 'services')} className="hover:text-[#EF4444] transition-colors">What We Do</a></li>
            <li><a href="#portfolio" onClick={(e) => onLinkClick(e, 'portfolio')} className="hover:text-[#EF4444] transition-colors">How We Work</a></li>
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-[#EF4444] transition-colors">Who We Are</a></li>
            <li><a href="#journal" onClick={(e) => onLinkClick(e, 'journal')} className="hover:text-[#EF4444] transition-colors">Digital Muskeg</a></li>
            <li><a href="#contact" onClick={(e) => onLinkClick(e, 'contact')} className="hover:text-[#EF4444] transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-medium text-[#2C2A26] mb-6 tracking-wide text-sm uppercase">Legal</h4>
          <ul className="space-y-3 font-light text-sm">
            <li><a href="#" className="hover:text-[#EF4444] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#EF4444] transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[#EF4444] transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-5">
          <h4 className="font-medium text-[#2C2A26] mb-6 tracking-wide text-sm uppercase">Land Acknowledgement</h4>
          <p className="text-[11px] font-light leading-relaxed opacity-80">
            Operating on Treaty One Territory and the National Homeland of the Red River Métis, in Wiiniibak, Manido Abi. We acknowledge these are the ancestral lands of the Anishinaabeg, Anisininew, Ininiwak/Nehethowuk, Oceti Sakowin/Dakota Oyate, and Michif (Métis) Peoples. This territory is also a place of significance for the Denesuline and the Inuit, some of whom have been living here for generations.
          </p>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto mt-20 pt-8 border-t border-[#D6D1C7] flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest opacity-60">
        <p>© 2026 RezTek Digital. Stay True.</p>
        <p className="mt-2 md:mt-0">100% Aboriginal Owned & Operated</p>
      </div>
    </footer>
  );
};

export default Footer;
