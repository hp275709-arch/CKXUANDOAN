import React from 'react';
import { Leaf, ArrowRight, FileText, Award, Globe, ShieldCheck, Factory } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
  onOpenCatalogue: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenCatalogue }) => {
  const content = {
    VI: {
      badge: 'Tương lai cho công trình công nghệ xanh',
      title1: 'Nâng Tầm Giá Trị Sống',
      title2: 'Kiến Tạo Hệ Giải Pháp Xanh',
      desc: 'Tiên phong cung cấp giải pháp đồng bộ vật liệu xây dựng cao cấp: Đá nung kết khổ lớn, Kính tiết kiệm năng lượng Low-E, Sứ vệ sinh thông minh & Bê tông khí chưng áp ALC.',
      exploreBtn: 'Khám phá danh mục',
      catalogueBtn: 'Tải E-Catalogues 2026',
      stat1Val: '50+',
      stat1Label: 'Năm Uy Tín Hàng Đầu',
      stat2Val: '40+',
      stat2Label: 'Quốc Gia Xuất Khẩu',
      stat3Val: '100%',
      stat3Label: 'Đạt Chuẩn Xanh Quốc Tế',
      stat4Val: 'TOP 1',
      stat4Label: 'Sản Xuất VLXD Tại Việt Nam',
      aboutTag: 'Về Chúng Tôi',
      aboutTitle: 'Tập Đoàn Sản Xuất Vật Liệu Xây Dựng Hàng Đầu Việt Nam',
      aboutDesc: 'Với hơn 5 thập kỷ hình thành và phát triển, CKXUANDOAN không ngừng đầu tư đổi mới công nghệ chuẩn Châu Âu, tự hào mang sản phẩm thương hiệu Việt chinh phục các thị trường khắt khe nhất thế giới như Mỹ, Nhật Bản, Châu Âu.',
    },
    EN: {
      badge: 'Future for Green Tech Construction',
      title1: 'Elevating Living Values',
      title2: 'Pioneering Green Solutions',
      desc: 'Pioneering synchronized premium building materials: Large-format sintered stone, Low-E energy-saving glass, smart sanitaryware & ALC autoclaved aerated concrete.',
      exploreBtn: 'Explore Products',
      catalogueBtn: 'Download 2026 E-Catalogue',
      stat1Val: '50+',
      stat1Label: 'Years of Excellence',
      stat2Val: '40+',
      stat2Label: 'Export Countries',
      stat3Val: '100%',
      stat3Label: 'International Green Certified',
      stat4Val: 'TOP 1',
      stat4Label: 'Building Materials Maker in VN',
      aboutTag: 'About CKXUANDOAN',
      aboutTitle: 'Vietnam Leading Building Materials Corporation',
      aboutDesc: 'With over 5 decades of continuous innovation and European technology adoption, CKXUANDOAN proudly exports Vietnamese high-grade building materials to demanding markets worldwide including the US, Japan, and Europe.',
    }
  }[lang];

  return (
    <>
      {/* Hero Showcase Banner */}
      <section className="relative bg-[#001A33] text-white min-h-[580px] lg:min-h-[620px] flex items-center overflow-hidden">
        {/* Background Image Overlay with Gradient */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-overlay transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001A33] via-[#003366]/90 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 bg-[#00a859]/20 text-[#00a859] border border-[#00a859]/40 font-semibold text-xs tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-5 backdrop-blur-md">
              <Leaf className="w-3.5 h-3.5" />
              <span>{content.badge}</span>
            </span>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-6">
              {content.title1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a859] via-emerald-300 to-teal-200">
                {content.title2}
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
              {content.desc}
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#products"
                className="bg-[#00a859] hover:bg-[#008545] text-white font-heading font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg hover:shadow-[#00a859]/30 transition duration-300 flex items-center gap-2 group cursor-pointer"
              >
                <span>{content.exploreBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenCatalogue}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-heading font-bold text-sm px-7 py-3.5 rounded-xl transition duration-300 flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-red-400" />
                <span>{content.catalogueBtn}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Metric Highlights Banner at Bottom of Hero */}
        <div className="absolute bottom-0 inset-x-0 bg-[#003366]/85 backdrop-blur-md border-t border-white/10 hidden md:block z-10">
          <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-4 gap-4 text-center">
            <div className="border-r border-white/15 px-2">
              <p className="font-heading font-extrabold text-2xl lg:text-3xl text-[#00a859]">{content.stat1Val}</p>
              <p className="text-[11px] lg:text-xs text-gray-300 uppercase tracking-wider mt-0.5">{content.stat1Label}</p>
            </div>
            <div className="border-r border-white/15 px-2">
              <p className="font-heading font-extrabold text-2xl lg:text-3xl text-[#00a859]">{content.stat2Val}</p>
              <p className="text-[11px] lg:text-xs text-gray-300 uppercase tracking-wider mt-0.5">{content.stat2Label}</p>
            </div>
            <div className="border-r border-white/15 px-2">
              <p className="font-heading font-extrabold text-2xl lg:text-3xl text-[#00a859]">{content.stat3Val}</p>
              <p className="text-[11px] lg:text-xs text-gray-300 uppercase tracking-wider mt-0.5">{content.stat3Label}</p>
            </div>
            <div className="px-2">
              <p className="font-heading font-extrabold text-2xl lg:text-3xl text-[#00a859]">{content.stat4Val}</p>
              <p className="text-[11px] lg:text-xs text-gray-300 uppercase tracking-wider mt-0.5">{content.stat4Label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Anchor */}
      <section id="about" className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00a859] block mb-2">
                {content.aboutTag}
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#003366] leading-snug">
                {content.aboutTitle}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {content.aboutDesc}
              </p>
              <div className="mt-4 flex flex-wrap gap-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                  <Award className="w-4 h-4 text-[#00a859]" />
                  <span>Chứng nhận LEED & Lotus Green</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                  <Factory className="w-4 h-4 text-[#00a859]" />
                  <span>Công nghệ nung Sacmi Continua+ từ Ý</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                  <Globe className="w-4 h-4 text-[#00a859]" />
                  <span>Xuất khẩu 40+ thị trường toàn cầu</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                  <ShieldCheck className="w-4 h-4 text-[#00a859]" />
                  <span>Bảo hành chính hãng toàn quốc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
