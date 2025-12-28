import React from "react";
import { Icon } from "@iconify/react";

interface PortfolioItem {
  id: number;
  tags: string[];
  title: string;
  subtitle: string;
  image: string;
  gridClass: string;
  icon: string;
}

const portfolioData: PortfolioItem[] = [
  // 1) 상단 왼쪽 (가로 큰 카드)
  {
    id: 1,
    tags: ["#사회안전", "#VR", "#교육"],
    title: "사이버도박 예방 VR",
    subtitle: "청소년/학부모를 위한 실감형 교육 콘텐츠",
    image:
      "https://www.yoyointeractive.com/upload/1744099218596.jpg",
    gridClass: "md:col-start-1 md:col-span-6 md:row-start-1 md:row-span-2",
    icon: "solar:mask-happly-bold",
  },

  // 2) 상단 오른쪽 (가로 큰 카드)
  {
    id: 2,
    tags: ["#국방", "#미디어아트", "2025"],
    title: "논산 밀리터리 파크",
    subtitle: "가상현실 시가지 전투 및 헬기 탑승 시뮬레이터",
    image:
      "https://www.yoyointeractive.com/upload/1751609368165.jpg",
    gridClass: "md:col-start-7 md:col-span-6 md:row-start-1 md:row-span-2",
    icon: "solar:tank-bold",
  },

  // 3) 좌측 큰 세로 카드
  {
    id: 3,
    tags: ["#공공", "#훈련", "2025"],
    title: "해양 구조 드론 훈련",
    subtitle: "VR 기반 해상 조난 구조 조치 및 가상 훈련",
    image:
      "https://www.yoyointeractive.com/upload/1750992887082.jpg",
    gridClass: "md:col-start-1 md:col-span-4 md:row-start-3 md:row-span-4",
    icon: "solar:map-arrow-square-bold",
  },

  // 4) 가운데 위 (작은 카드)
  {
    id: 4,
    tags: ["#국방", "#VR", "2025"],
    title: "수송 드론 훈련체계",
    subtitle: "험지 보급품 수송 및 정밀 투하 시뮬레이션",
    image:
      "https://www.yoyointeractive.com/upload/1750386387992.jpg",
    gridClass: "md:col-start-5 md:col-span-4 md:row-start-3 md:row-span-2",
    icon: "solar:box-bold",
  },

  // 5) 가운데 아래 (작은 카드)
  {
    id: 5,
    tags: ["#미디어아트", "#공공", "2024-25"],
    title: "영인산 산림박물관",
    subtitle: "인터렉티브 실감형 미디어 아트 공간 구축",
    image:
      "https://www.yoyointeractive.com/upload/1749792638580.jpg",
    gridClass: "md:col-start-5 md:col-span-4 md:row-start-5 md:row-span-2",
    icon: "solar:leaf-bold",
  },

  // 6) 우측 큰 세로 카드
  {
    id: 6,
    tags: ["#우주", "#교육", "2024"],
    title: "우주천문체험 플랫폼",
    subtitle: "우주선 발사부터 도킹까지의 가상 탐사",
    image:
      "https://www.yoyointeractive.com/upload/1737618745475.jpg",
    gridClass: "md:col-start-9 md:col-span-4 md:row-start-3 md:row-span-4",
    icon: "solar:ufo-bold",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-40 px-6 md:px-12 lg:px-24 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-[#0090C6]" />
              <span className="text-[#0090C6] font-black uppercase tracking-[0.5em] text-xs">
                Portfolio
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
              현실을 넘어서는<br />
              <span className="text-[#0090C6]">무한한 상상력의 구현.</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-lg font-medium max-w-sm mb-2">
            요요인터랙티브의 독보적인 기술력으로 탄생한<br />
            프로젝트들을 확인해보세요.
          </p>
        </div>

        {/* ✅ Reference-like Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[260px] md:auto-rows-[180px]">
          {portfolioData.map((item) => (
            <div key={item.id} className={item.gridClass}>
              <div className="group relative h-full rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl transition-all duration-700 hover:scale-[0.985]">
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />

                {/* Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-100 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-[#0090C6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-end">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-black tracking-widest uppercase bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full text-white/80 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight group-hover:text-[#0090C6] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-300 text-sm font-medium line-clamp-2 mb-6">
                    {item.subtitle}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0090C6] opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                      View Case <Icon icon="solar:arrow-right-linear" />
                    </div>
                    <div className="text-white/20 group-hover:text-[#0090C6]/40 transition-colors">
                      <Icon icon={item.icon} className="text-5xl" />
                    </div>
                  </div>
                </div>

                {/* Subtle Border */}
                <div className="absolute inset-0 border border-white/5 rounded-[2.5rem] group-hover:border-[#0090C6]/40 transition-colors z-20" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action (기존 유지) */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-between p-12 rounded-[3rem] bg-[#1e293b]/30 border border-white/5 backdrop-blur-xl">
          <div className="flex items-center gap-8 mb-8 md:mb-0">
            <div className="w-16 h-16 rounded-3xl bg-[#0090C6] flex items-center justify-center text-white shadow-xl shadow-[#0090C6]/30">
              <Icon icon="solar:folder-favourite-star-bold" className="text-3xl" />
            </div>
            <div>
              <h4 className="text-2xl font-black text-white mb-2">
                더 많은 프로젝트가 궁금하신가요?
              </h4>
              <p className="text-zinc-500 font-medium">
                지난 12년간의 혁신적인 기록들을 모아둔 포트폴리오 북을 보내드립니다.
              </p>
            </div>
          </div>
          <button className="px-10 py-5 bg-white text-[#0d1117] rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#0090C6] hover:text-white transition-all transform active:scale-95 shadow-xl">
            Request Book
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
