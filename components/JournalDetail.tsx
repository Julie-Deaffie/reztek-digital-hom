/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { JournalArticle } from '../types';

interface JournalDetailProps {
  article: JournalArticle;
  onBack: () => void;
}

const JournalDetail: React.FC<JournalDetailProps> = ({ article, onBack }) => {
  return (
    <div className="min-h-screen bg-muskeg-black text-raw-bone animate-fade-in-up relative">
       {/* Noise Overlay */}
       <div className="absolute inset-0 bg-noise pointer-events-none z-0 fixed"></div>

       {/* Hero Image for Article - Full bleed to top so navbar sits on it */}
       <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden z-10">
          <img 
             src={article.image} 
             alt={article.title} 
             className="w-full h-full object-cover grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-muskeg-black/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-muskeg-black to-transparent"></div>
       </div>

       <div className="max-w-4xl mx-auto px-6 md:px-12 -mt-32 relative z-20 pb-32">
          <div className="bg-muskeg-black/90 backdrop-blur-md p-8 md:p-16 border border-lichen-grey/20 shadow-2xl shadow-black/50">
             <div className="flex justify-between items-center mb-12 border-b border-lichen-grey/20 pb-8">
                <button 
                  onClick={onBack}
                  className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lichen-grey hover:text-signal-red transition-colors"
                >
                  <span className="group-hover:-translate-x-1 transition-transform">&lt;-</span>
                  Return_Index
                </button>
                <span className="text-xs font-mono uppercase tracking-widest text-signal-red">{article.date}</span>
             </div>

             <h1 className="text-4xl md:text-6xl font-serif italic text-raw-bone mb-12 leading-[1.1] text-center">
               {article.title}
             </h1>

             <div className="prose prose-invert prose-lg mx-auto font-sans font-light leading-loose text-lichen-grey">
               {/* We render the content directly. In a real app, this might be Markdown */}
               <p className="whitespace-pre-line">{article.content}</p>
             </div>
             
             <div className="mt-16 pt-12 border-t border-lichen-grey/20 flex justify-center flex-col items-center gap-4">
                 <span className="w-12 h-[1px] bg-signal-red"></span>
                 <span className="text-xl font-display font-bold italic text-raw-bone uppercase tracking-tighter">
                   Digital <span className="font-light text-lichen-grey not-italic">Muskeg</span>
                 </span>
             </div>
          </div>
       </div>
    </div>
  );
};

export default JournalDetail;
