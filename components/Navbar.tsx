
import React from 'react';
import { Icon } from '@iconify/react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center transition-all duration-300">
      <div className="flex items-center group cursor-pointer">
        {/* Adjusted Logo Image - Styled to be white and resized */}
        <img 
          src="https://www.yoyointeractive.com/img/logo-color.png" 
          alt="YOYO Interactive"
          className="h-7 md:h-9 w-auto brightness-0 invert opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
        />
      </div>
      
      <div className="hidden md:flex items-center space-x-12 text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-400">
        <a href="#services" className="hover:text-[#0090C6] transition-colors relative group">
          Services
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#0090C6] transition-all group-hover:w-full"></span>
        </a>
        <a href="#portfolio" className="hover:text-[#0090C6] transition-colors relative group">
          Portfolio
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#0090C6] transition-all group-hover:w-full"></span>
        </a>
        <a href="#" className="hover:text-[#0090C6] transition-colors relative group">
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#0090C6] transition-all group-hover:w-full"></span>
        </a>
        <button className="px-8 py-2.5 border-2 border-[#0090C6] text-[#0090C6] rounded-full font-black hover:bg-[#0090C6] hover:text-white transition-all duration-300 transform active:scale-95 shadow-lg shadow-[#0090C6]/10">
          HIRE US
        </button>
      </div>

      <button className="md:hidden text-white p-2">
        <Icon icon="solar:menu-dots-bold" className="w-8 h-8" />
      </button>
    </nav>
  );
};

export default Navbar;
