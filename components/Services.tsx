
import React from 'react';

interface BusinessCardProps {
  category: string;
  title: string;
  description: string;
  image: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ category, title, description, image }) => {
  return (
    <div
      className="
        group relative aspect-[3/4]
        rounded-[3rem] overflow-hidden
        shadow-2xl
        transition-all duration-700
        hover:-translate-y-6 hover:shadow-[#0090C6]/20
        isolate transform-gpu will-change-transform
      "
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-1000 group-hover:scale-110
          rounded-[3rem]
          transform-gpu will-change-transform
        "
      />

      {/* Bottom Gradient Overlay (TEXT LEGIBILITY 핵심) */}
      <div
        className="
          absolute inset-0 rounded-[3rem] z-[10]
          bg-[linear-gradient(to_top,
            rgba(17,24,39,0.95)_0%,
            rgba(17,24,39,0.85)_25%,
            rgba(17,24,39,0.55)_45%,
            rgba(17,24,39,0.25)_65%,
            rgba(17,24,39,0.0)_85%
          )]
        "
      />

      {/* Content */}
      <div className="relative z-10 p-10 h-full flex flex-col justify-end">
        <div className="mb-4">
          <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-[#0090C6] bg-[#111827]/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 inline-block">
            {category}
          </span>
        </div>

        <h3 className="text-[16px] md:text-[20px] font-bold leading-[1.35] text-white whitespace-pre-line tracking-tight drop-shadow-xl">
          {description}
        </h3>
      </div>

      {/* Interactive Border */}
      <div className="absolute inset-0 border-[3px] border-[#0090C6]/0 group-hover:border-[#0090C6]/30 transition-all duration-500 rounded-[3rem] z-20"></div>
    </div>
  );
};



const Services: React.FC = () => {
  const businessAreas = [
    {
      category: "VR/AR/XR",
      title: "Mixed Reality",
      description: "참여자의'사고와 경험의 폭'을\n확장시켜 세상을 이롭게 연결",
      image: "https://www.yoyointeractive.com/img/gif_main_vrarxr.gif"
    },
    {
      category: "가상융합기술",
      title: "Convergence",
      description: "현실과 가상의 공존을 촉진,\n물리적 한계를 해소하는 가상융합기술",
      image: "https://www.yoyointeractive.com/img/gif_main_xr5.gif"
    },
    {
      category: "실감형 콘텐츠",
      title: "Immersive",
      description: "실감형 콘텐츠 관람객과의\n상호작용 콘텐츠 개발",
      image: "https://www.yoyointeractive.com/img/gif_main_realistic.gif"
    }
  ];

  return (
    <section id="services" className="py-40 px-6 md:px-12 lg:px-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-[#0090C6]"></div>
            <span className="text-[#0090C6] font-black uppercase tracking-[0.5em] text-xs">Business Expertise</span>
            <div className="w-12 h-[2px] bg-[#0090C6]"></div>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
            실감형 가상융합기술의<br />
            <span className="text-[#0090C6]">새로운 스탠다드.</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl font-medium tracking-tight border-t border-white/5 pt-8 max-w-2xl mx-auto">
            요요인터랙티브는 미래 지향적 기술을 통해<br />새로운 차원의 사용자 경험을 정의합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {businessAreas.map((item, index) => (
            <BusinessCard 
              key={index} 
              category={item.category} 
              title={item.title} 
              description={item.description} 
              image={item.image}
            />
          ))}
        </div>

        {/* Branding accent */}
        <div className="mt-40 flex justify-center opacity-20">
           <div className="flex items-center gap-10 grayscale hover:grayscale-0 transition-all duration-700 cursor-default">
             <div className="h-[1px] w-20 bg-white"></div>
             <span className="text-5xl font-black tracking-tighter text-white">YOYO INTERACTIVE</span>
             <div className="h-[1px] w-20 bg-white"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
