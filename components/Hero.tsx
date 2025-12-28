
import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';

const Hero: React.FC = () => {
  useEffect(() => {
    // Force Unicorn Studio to initialize or refresh if it exists
    if ((window as any).UnicornStudio && typeof (window as any).UnicornStudio.init === 'function') {
      (window as any).UnicornStudio.init();
    }
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#111827]">
      {/* Unicorn Studio Background Effect */}
      <div className="absolute inset-0 z-0">
        <div 
          data-us-project="e6vyaJLfxgfTve1TizEM" 
          className="w-full h-full opacity-70 scale-105"
        ></div>
      </div>

      {/* Decorative Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/30 via-transparent to-[#111827] pointer-events-none z-10"></div>

      {/* Floating Info Panels */}
      <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-start p-10 lg:p-20">
        <div className="mt-24 lg:mt-32 flex justify-between items-start">
          <div className="bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
            <div className="text-[9px] uppercase tracking-[0.4em] font-black text-[#0090C6] mb-1">
              Pioneering
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/60 leading-tight">
              Digital Evolution<br />Since 2012
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/10 text-right">
            <div className="text-[9px] uppercase tracking-[0.4em] font-black text-[#0090C6] mb-1">
              Location
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/60 leading-tight">
              Seoul HQ<br />Global Presence
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layer */}
      <div className="relative z-30 flex flex-col items-center text-center px-4">
        <div className="font-oswald text-7xl md:text-9xl lg:text-[11rem] leading-[0.8] flex flex-col items-center select-none uppercase tracking-tighter drop-shadow-2xl">
          <div className="flex items-center gap-6 group">
            <span className="text-white group-hover:text-[#0090C6] transition-colors duration-500">BEYOND</span>
            <div className="bg-[#0090C6] text-white p-2 md:p-5 rotate-12 shadow-[0_0_50px_rgba(0,144,198,0.4)] animate-pulse rounded-2xl">
              <Icon icon="solar:rocket-bold" className="w-10 h-10 md:w-20 md:h-20" />
            </div>
          </div>
          
          <div className="flex items-center gap-4 mt-4">
            <span className="text-zinc-400/50">THE</span>
            <span className="text-[#0090C6]">ORDINARY</span>
          </div>

          <div className="flex items-center gap-6 mt-4">
            <div className="bg-white text-[#111827] rounded-3xl p-3 md:p-5 rotate-[-15deg] shadow-2xl transition-transform hover:rotate-0 duration-500">
              <Icon icon="solar:stars-bold" className="w-10 h-10 md:w-16 md:h-16" />
            </div>
            <span className="text-white">DIGITAL</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-20">
          <button className="group relative bg-[#0090C6] text-white px-14 py-6 rounded-full flex items-center gap-8 shadow-[0_20px_50px_rgba(0,144,198,0.3)] hover:shadow-[0_25px_60px_rgba(0,144,198,0.5)] transition-all duration-500 hover:scale-105 active:scale-95 border-2 border-white/10">
            <span className="font-black uppercase tracking-[0.25em] text-sm">Our Portfolio</span>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center transition-transform group-hover:rotate-45 group-hover:bg-white group-hover:text-[#0090C6]">
              <Icon icon="solar:arrow-right-up-bold" className="text-xl" />
            </div>
          </button>
        </div>
      </div>
      
      {/* Interactive Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3">
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#0090C6] to-transparent animate-shimmer"></div>
        <span className="text-[9px] uppercase tracking-[0.6em] font-black text-[#0090C6] animate-pulse">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
