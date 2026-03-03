import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#EBE7DE]">
      
      {/* Introduction / Story */}
      <div className="min-h-screen flex items-center py-24 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-16 md:gap-32 w-full">
          <div className="md:w-1/3">
            <h2 className="text-5xl md:text-8xl font-display text-[#1A1A1A] leading-[0.85] uppercase tracking-tighter font-black">
              Honest <br/> <span className="text-[#EF4444] font-light">Work.</span>
            </h2>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#EF4444] mt-8">
              That's It.
            </p>
          </div>
          <div className="md:w-2/3 max-w-2xl">
            <p className="text-xl md:text-2xl text-[#2C2A26] font-medium leading-tight mb-10 tracking-tight">
              RezTek Digital is proudly 100% Aboriginal Owned and is built on the belief that consistent, quality work — done honestly and at a fair price — will always outlast the hype.
            </p>
            <p className="text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-10">
              We come from communities in Northern Manitoba that know what it means to look after each other. We were tired of watching small businesses, community enterprises, and Indigenous-owned operations get underserved by agencies that didn't understand them and overcharged them for it. We had to change that. Good digital work should be accessible. Full stop. We're not trying to change the world. Just our little corner of it.
            </p>
            <div className="relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1559662782-b7d4a275c976?q=80&w=1200&auto=format&fit=crop" 
                alt="Northern Manitoba Landscape" 
                className="w-full h-[450px] object-cover grayscale contrast-125 brightness-90 mt-12 transition-transform duration-[3s] group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 bg-[#EF4444] text-white px-6 py-2 text-[10px] font-bold uppercase tracking-[0.4em]">
                Aboriginal Owned & Operated
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Blocks (Formerly Features) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="order-2 lg:order-1 relative h-[500px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200" 
             alt="High-Tech Workspace" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
           />
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-32 bg-white">
           <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#EF4444] mb-8 block">01 / Performance</span>
           <h3 className="text-5xl md:text-7xl font-display mb-10 text-[#1A1A1A] leading-[0.9] uppercase tracking-tighter font-black">
             Performance <span className="font-light">is</span> <br/> <span className="font-light">Politeness.</span>
           </h3>
           <p className="text-xl text-[#5D5A53] font-light leading-relaxed mb-12 max-w-md">
             Fast loads aren't a bonus — they're the baseline. We prioritize performance at every level of the engineering process.
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="flex flex-col justify-center p-12 lg:p-32 bg-[#1A1A1A] text-white">
           <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#EF4444] mb-8 block">02 / No Bloat</span>
           <h3 className="text-5xl md:text-7xl font-display mb-10 text-white leading-[0.9] uppercase tracking-tighter font-black">
             Build <span className="font-light">what</span> <br/> <span className="font-light">you need.</span>
           </h3>
           <p className="text-xl text-white/70 font-light leading-relaxed mb-12 max-w-md">
             We only build what you need. We focus on clean code and essential features that actually drive value for your business.
           </p>
        </div>
        <div className="relative h-[500px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200" 
             alt="Minimalist Design" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 brightness-90"
           />
        </div>
      </div>
    </section>
  );
};

export default About;
