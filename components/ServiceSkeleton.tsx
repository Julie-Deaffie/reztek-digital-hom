import React from 'react';

const ServiceSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col bg-zinc-900 p-6 rounded-2xl shadow-lg border border-zinc-800 animate-pulse">
      {/* Image Area Skeleton */}
      <div className="relative w-full aspect-square bg-zinc-800 rounded-xl mb-6"></div>
      
      {/* Content Area Skeleton */}
      <div className="flex flex-col flex-grow text-left">
        <div className="flex justify-between items-center mb-4">
           {/* Category Tag Skeleton */}
           <div className="h-4 w-20 bg-zinc-800 rounded"></div>
           {/* Price Skeleton */}
           <div className="h-6 w-16 bg-zinc-800 rounded"></div>
        </div>
        
        {/* Title Skeleton */}
        <div className="h-8 w-3/4 bg-zinc-800 rounded mb-4"></div>
        
        {/* Description Skeleton */}
        <div className="space-y-2 mb-6">
          <div className="h-3 w-full bg-zinc-800 rounded"></div>
          <div className="h-3 w-5/6 bg-zinc-800 rounded"></div>
        </div>
        
        {/* Footer Skeleton */}
        <div className="mt-auto flex items-center gap-2">
           <div className="w-4 h-[1px] bg-zinc-800"></div>
           <div className="h-3 w-24 bg-zinc-800 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSkeleton;
