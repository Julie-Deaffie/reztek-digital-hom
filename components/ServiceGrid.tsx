/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useMemo, useEffect } from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';
import ServiceCard from './ServiceCard';
import ServiceSkeleton from './ServiceSkeleton';

const categories = ['All', 'Design', 'SEO', 'Google Business', 'Site Hosting', 'Site Monitoring'];

interface ServiceGridProps {
  onServiceClick: (service: Service) => void;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ onServiceClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching services
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredServices = useMemo(() => {
    if (activeCategory === 'All') return SERVICES;
    return SERVICES.filter(s => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="services" className="min-h-screen flex items-center py-24 px-6 md:px-12 bg-[#F5F2EB]">
      <div className="max-w-[1800px] mx-auto w-full">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-24 space-y-8">
          <h2 className="text-4xl md:text-6xl font-display text-[#2C2A26] tracking-tighter uppercase">
            What <span className="font-light text-red-600">We Do</span>
          </h2>
          
          {/* Minimal Filter */}
          <div className="flex flex-wrap justify-center gap-8 pt-4 border-t border-[#D6D1C7]/50 w-full max-w-2xl">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm uppercase tracking-widest pb-1 border-b transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'border-[#2C2A26] text-[#2C2A26]' 
                    : 'border-transparent text-[#A8A29E] hover:text-[#2C2A26]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Large Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {isLoading ? (
            // Display 6 skeletons while loading
            Array.from({ length: 6 }).map((_, idx) => (
              <ServiceSkeleton key={idx} />
            ))
          ) : (
            filteredServices.map(service => (
              <ServiceCard key={service.id} service={service} onClick={onServiceClick} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
