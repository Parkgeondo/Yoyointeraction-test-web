
import React from 'react';
import { Icon } from '@iconify/react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 border-t border-white/5 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5">
          <div className="flex items-center mb-10 group cursor-pointer">
            <img 
              src="https://www.yoyointeractive.com/img/logo-color.png" 
              alt="YOYO Interactive" 
              className="h-10 md:h-12 w-auto brightness-0 invert opacity-80 transition-all group-hover:opacity-100"
            />
          </div>
          <p className="text-zinc-400 max-w-sm text-xl leading-relaxed mb-12 font-medium">
            We transform complex ideas into intuitive digital realities. Excellence is our only standard.
          </p>
          <div className="flex gap-6">
            {['instagram', 'linkedin', 'dribbble', 'behance'].map((social) => (
              <a key={social} href="#" className="w-12 h-12 rounded-2xl border border-white/5 bg-[#1e293b] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#0090C6] hover:border-[#0090C6] transition-all transform hover:-translate-y-1 shadow-lg">
                <Icon icon={`solar:share-circle-bold`} className="text-2xl" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.4em] text-[#0090C6] font-black mb-10">Company</h4>
            <ul className="space-y-6 text-base font-bold text-zinc-500">
              <li><a href="#" className="hover:text-white transition-colors">Our Ethos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Insights</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.4em] text-[#0090C6] font-black mb-10">Studio</h4>
            <ul className="space-y-6 text-base font-bold text-zinc-500">
              <li><a href="mailto:contact@yoyo.studio" className="hover:text-white transition-colors">contact@yoyo.studio</a></li>
              <li><span className="text-zinc-600 block mt-2 font-medium">Gangnam-gu, Seoul</span></li>
              <li><span className="text-zinc-600 block font-medium">+82 2 123 4567</span></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-[11px] uppercase tracking-[0.4em] text-[#0090C6] font-black mb-10">Connect</h4>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Stay updated" 
                className="w-full bg-[#1e293b] border-2 border-white/5 rounded-2xl p-5 focus:outline-none focus:border-[#0090C6] transition-all text-white placeholder:text-zinc-600 font-bold" 
              />
              <button className="absolute right-3 top-3 w-10 h-10 bg-[#0090C6] text-white rounded-xl flex items-center justify-center shadow-lg">
                <Icon icon="solar:arrow-right-bold" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-black">
        <p>© 2024 YOYO INTERACTIVE. DEFINING DIGITAL EXCELLENCE.</p>
        <div className="flex gap-12 mt-8 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Legal</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
