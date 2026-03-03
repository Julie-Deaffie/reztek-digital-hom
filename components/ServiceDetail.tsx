import React from 'react';
import { Service } from '../types';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
  onInquire: (service: Service) => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack, onInquire }) => {
  return (
    <main className="min-h-screen bg-muskeg-black text-raw-bone animate-fade-in-up relative" role="main">
      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none z-0 fixed" aria-hidden="true"></div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 pt-32 pb-24 relative z-10">
        
        {/* Breadcrumb / Back */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lichen-grey hover:text-signal-red transition-colors mb-12 focus-visible:ring-2 focus-visible:ring-signal-red focus-visible:outline-none rounded-sm"
          aria-label="Return to all solutions"
        >
          <span className="group-hover:-translate-x-1 transition-transform" aria-hidden="true">&lt;-</span>
          Return_to_Solutions
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left: Image with Glitch Feel */}
          <div className="relative group">
            <div className="w-full aspect-[4/5] bg-zinc-800 overflow-hidden border border-lichen-grey/10 shadow-2xl">
              <img 
                src={service.imageUrl} 
                alt={`Visual representation of ${service.name}`} 
                className="w-full h-full object-cover grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100"
              />
              <div className="absolute inset-0 bg-signal-red/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
            </div>
            {/* Decorative Technical Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-signal-red/30 pointer-events-none" aria-hidden="true"></div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col">
             <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 bg-signal-red rounded-full animate-pulse" aria-hidden="true"></span>
                <span className="text-xs font-mono uppercase tracking-widest text-signal-red">{service.category}</span>
             </div>
             
             <h1 className="text-5xl md:text-7xl font-serif italic text-raw-bone mb-6 leading-[0.9]">
               {service.name.split(' ').map((word, i) => (
                 <span key={i} className={i % 2 === 1 ? 'font-light text-lichen-grey not-italic font-display uppercase tracking-tighter' : ''}>
                   {word}{' '}
                 </span>
               ))}
             </h1>

             <div className="flex items-baseline gap-4 mb-10">
                <span className="text-xs font-mono text-lichen-grey uppercase tracking-widest">Investment_Start:</span>
                <span className="text-3xl font-display font-bold text-white">${service.price}</span>
             </div>
             
             <p className="text-lichen-grey leading-relaxed font-sans font-light text-xl mb-12 border-b border-lichen-grey/20 pb-12">
               {service.longDescription || service.description}
             </p>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <section aria-labelledby="features-heading">
                  <h4 id="features-heading" className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-6 flex items-center gap-2">
                    <span className="w-1 h-1 bg-signal-red" aria-hidden="true"></span>
                    Core_Features
                  </h4>
                  <ul className="space-y-4 text-sm text-lichen-grey font-light">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1 h-1 bg-lichen-grey/30 rounded-full" aria-hidden="true"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>
                
                <section className="bg-zinc-900/50 p-8 border border-lichen-grey/10 backdrop-blur-sm" aria-labelledby="process-heading">
                   <h4 id="process-heading" className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">The_Process</h4>
                   <p className="text-xs text-lichen-grey font-light leading-loose">
                     Our approach is rooted in Northern resilience. We build digital tools that are as enduring as the muskeg. Every project undergoes rigorous testing and optimization to ensure peak performance in any digital environment.
                   </p>
                </section>
             </div>

             <button 
               onClick={() => onInquire(service)}
               className="group relative w-full py-6 bg-signal-red text-white uppercase tracking-widest text-sm font-bold overflow-hidden transition-all hover:bg-red-700 active:scale-[0.98] focus-visible:ring-4 focus-visible:ring-white/20 focus-visible:outline-none"
               aria-label={`Inquire about ${service.name} service`}
             >
               <span className="relative z-10">Initiate_Project_Inquiry</span>
               <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" aria-hidden="true"></div>
             </button>
             
             <div className="mt-8 text-center">
                <p className="text-[10px] font-mono text-lichen-grey/40 uppercase tracking-[0.3em]">
                  RezTek_Digital // System_v2.6
                </p>
             </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default ServiceDetail;
