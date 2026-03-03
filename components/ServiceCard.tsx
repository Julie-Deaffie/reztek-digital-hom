/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onClick: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(service);
    }
  };

  return (
    <div 
      className="group flex flex-col cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444] focus-visible:ring-offset-4 bg-zinc-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-zinc-800" 
      onClick={() => onClick(service)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${service.name}`}
    >
      <div className="relative w-full aspect-square bg-zinc-800 rounded-xl overflow-hidden mb-6">
          <img 
            src={service.imageUrl} 
            alt={service.name} 
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 sepia-[0.1]"
          />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <span className="bg-white text-[#2C2A26] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                      View Details
                  </span>
              </div>
          </div>
      </div>
      
      <div className="flex flex-col flex-grow text-left">
        <div className="flex justify-between items-center mb-4">
           <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#EF4444] px-2 py-1 bg-[#EF4444]/10 rounded">
             {service.category}
           </span>
           <span className="text-xl font-display font-bold text-white tracking-tight">${service.price}</span>
        </div>
        
        <h3 className="text-2xl font-display font-bold text-white mb-4 leading-tight group-hover:text-[#EF4444] transition-colors">
          {service.name}
        </h3>
        
        <p className="text-sm font-light text-zinc-400 leading-relaxed line-clamp-2 mb-6">
          {service.description}
        </p>
        
        <div className="mt-auto flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors duration-300">
           <span className="w-4 h-[1px] bg-zinc-800 group-hover:bg-[#EF4444] transition-colors"></span>
           <span>View_Solution</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
