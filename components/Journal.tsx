/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { JOURNAL_ARTICLES } from '../constants';
import { JournalArticle } from '../types';

interface JournalProps {
  onArticleClick: (article: JournalArticle) => void;
}

const Journal: React.FC<JournalProps> = ({ onArticleClick }) => {
  return (
    <section id="journal" className="min-h-screen flex items-center py-24 px-6 md:px-12 bg-muskeg-black text-raw-bone relative overflow-hidden">
      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none z-0"></div>

      <div className="max-w-[1800px] mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 pb-8 border-b border-lichen-grey/20">
            <div>
                <span className="block text-xs font-mono font-bold uppercase tracking-[0.2em] text-signal-red mb-4">
                  // Insights_Log
                </span>
                <h2 className="text-4xl md:text-7xl font-serif italic text-raw-bone leading-[0.9]">
                  Digital <span className="font-light text-lichen-grey not-italic font-display uppercase tracking-tighter">Muskeg</span>
                </h2>
            </div>
            <div className="hidden md:block text-right">
               <p className="font-mono text-xs text-lichen-grey uppercase tracking-widest">
                 System.Read(Latest_Entries)
               </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {JOURNAL_ARTICLES.map((article) => (
                <div key={article.id} className="group cursor-pointer flex flex-col text-left" onClick={() => onArticleClick(article)}>
                    <div className="w-full aspect-[4/3] overflow-hidden mb-8 bg-zinc-900 relative border border-lichen-grey/10">
                        <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100"
                        />
                        <div className="absolute inset-0 bg-signal-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
                    </div>
                    <div className="flex flex-col flex-1 text-left">
                        <div className="flex items-center gap-3 mb-4">
                           <span className="w-2 h-2 bg-signal-red rounded-full animate-pulse"></span>
                           <span className="text-xs font-mono uppercase tracking-widest text-lichen-grey">{article.date}</span>
                        </div>
                        <h3 
                          className="text-3xl font-serif italic text-raw-bone mb-4 leading-tight group-hover:text-signal-red transition-colors duration-300"
                        >
                          {article.title}
                        </h3>
                        <p className="text-lichen-grey font-sans font-light leading-relaxed line-clamp-3">
                          {article.excerpt}
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-signal-red opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                          <span>Read_Entry</span>
                          <span>-&gt;</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
