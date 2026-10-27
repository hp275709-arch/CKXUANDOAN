import React, { useState } from 'react';
import { Leaf, Zap, Box, Droplets, CheckCircle, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface GreenSolutionsProps {
  lang: Language;
}

export const GreenSolutions: React.FC<GreenSolutionsProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const content = {
    VI: {
      badge: 'Xu Hướng Xanh 2026',
      title: 'Giải Pháp Công Trình Xanh & Bảo Vệ Môi Trường',
      desc: 'CKXUANDOAN là doanh nghiệp tiên phong cam kết phát triển bền vững, ứng dụng công nghệ Châu Âu để giảm thiểu phát thải Carbon, tiết kiệm năng lượng vận hành cho các công trình hiện đại.',
      statVal: '40%',
      statDesc: 'Tiết kiệm năng lượng cho các công trình đạt chứng chỉ LEED & Lotus',
      tabs: [
        {
          title: 'Kính Low-E Solar Control',
          icon: Zap,
          headline: 'Kính Tiết Kiệm Năng Lượng Low-E / Solar Control',
          desc: 'Cản đến 79% bức xạ nhiệt mặt trời, giảm tải 50% chi phí điện điều hòa cho tòa nhà cao tầng và biệt thự kính.',
          points: [
            'Phủ hợp chất nano Bạc (Ag) lọc chọn lọc quang phổ',
            'Độ truyền sáng cao, giữ trọn view tự nhiên',
            'Ngăn chặn đến 99% tia cực tím (UV) bảo vệ nội thất'
          ]
        },
        {
          title: 'Bê Tông Khí ALC Siêu Nhẹ',
          icon: Box,
          headline: 'Bê Tông Khí Chưng Áp ALC Siêu Nhẹ',
          desc: 'Thi công nhanh gấp 3 lần, cách âm, cách nhiệt tiêu chuẩn Châu Âu và tái chế 100% tài nguyên.',
          points: [
            'Khả năng chống cháy vượt trội lên đến 4 giờ (EI 240)',
            'Giảm tải trọng công trình, tiết kiệm 12-15% chi phí kết cấu móng',
            'Sản xuất từ tro bay & cát, hoàn toàn không phát thải carbon nung'
          ]
        },
        {
          title: 'Sứ Men Nano Diệt Khuẩn',
          icon: Droplets,
          headline: 'Sứ Vệ Sinh Men Nano Anti-bacterial',
          desc: 'Kháng khuẩn đến 89%, xả xoáy kép siêu tiết kiệm nước chỉ với 3.5L/lần xả.',
          points: [
            'Men Nano Titan nung chảy cùng men sứ, bền bỉ trọn đời',
            'Công nghệ xả hút siphon xoáy đẩy không tiếng ồn',
            'Tiết kiệm đến 20,000 lít nước sạch mỗi hộ gia đình mỗi năm'
          ]
        }
      ]
    },
    EN: {
      badge: 'Green Trends 2026',
      title: 'Green Building Solutions & Environmental Care',
      desc: 'CKXUANDOAN pioneers sustainable development, adopting European tech to minimize Carbon emissions and operational energy consumption in modern constructions.',
      statVal: '40%',
      statDesc: 'Energy saving for projects certified with LEED & Lotus standard',
      tabs: [
        {
          title: 'Low-E Solar Control Glass',
          icon: Zap,
          headline: 'Low-E / Solar Control Energy-Saving Glass',
          desc: 'Blocks up to 79% of solar thermal radiation, cutting 50% AC operational electricity in high-rises and residences.',
          points: [
            'Multi-layer Silver (Ag) nanocoating for spectrum-selective filtration',
            'High natural daylight transmission with crystal clear clarity',
            'Blocks 99% harmful ultraviolet (UV) rays to protect luxury interior'
          ]
        },
        {
          title: 'Lightweight ALC Concrete',
          icon: Box,
          headline: 'Autoclaved Aerated Concrete (ALC) Lightweight Panels',
          desc: '3x faster installation, European standard sound & thermal insulation, 100% recyclable.',
          points: [
            'Class-leading fire resistance up to 4 continuous hours (EI 240)',
            'Reduces overall building load, lowering foundation costs by 12-15%',
            'Eco-friendly manufacturing without traditional high-emission baking'
          ]
        },
        {
          title: 'Antibacterial Nano Sanitaryware',
          icon: Droplets,
          headline: 'Antibacterial Nano-Glaze Sanitaryware',
          desc: '89% antibacterial efficacy, dual-flush vortex flushing using only 3.5L per cycle.',
          points: [
            'Nano Titanium glaze fused into porcelain at 1200°C for lifetime durability',
            'Whisper-quiet siphon dual vortex flushing system',
            'Saves up to 20,000 liters of freshwater per household annually'
          ]
        }
      ]
    }
  }[lang];

  return (
    <section id="solutions" className="bg-[#001A33] text-white py-20 relative overflow-hidden scroll-mt-16">
      {/* Background Decorative Circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#00a859]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#003366]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Info & Tabs */}
          <div>
            <span className="text-[#00a859] font-bold text-xs uppercase tracking-widest inline-flex items-center gap-1.5 mb-3 bg-[#00a859]/10 px-3 py-1 rounded-full border border-[#00a859]/30">
              <Leaf className="w-3.5 h-3.5" />
              <span>{content.badge}</span>
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
              {content.title}
            </h2>

            <p className="text-gray-300 mb-8 leading-relaxed text-sm sm:text-base">
              {content.desc}
            </p>

            {/* Interactive Solution Selector */}
            <div className="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/10 mb-6">
              {content.tabs.map((tab, idx) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex-1 py-2 px-2 sm:px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-[#00a859] text-white shadow-md'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span className="truncate">{tab.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Tab Details */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-md">
              <h3 className="font-heading font-bold text-lg text-white mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#00a859]" />
                <span>{content.tabs[activeTab].headline}</span>
              </h3>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                {content.tabs[activeTab].desc}
              </p>

              <div className="space-y-2.5 pt-3 border-t border-white/10">
                {content.tabs[activeTab].points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                    <CheckCircle className="w-4 h-4 text-[#00a859] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Image & Floating Stat */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
                alt="Green Architecture Solutions"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001A33]/80 via-transparent to-transparent" />
            </div>

            {/* Floating Highlight Card */}
            <div className="absolute -bottom-6 -left-6 bg-[#00a859] text-white p-6 rounded-2xl shadow-xl hidden sm:block max-w-xs border border-white/20">
              <p className="font-heading font-black text-4xl">{content.statVal}</p>
              <p className="text-xs uppercase font-semibold mt-1 leading-snug">
                {content.statDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
