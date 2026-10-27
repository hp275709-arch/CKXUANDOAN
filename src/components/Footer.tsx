import React from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = {
    VI: {
      desc: 'Tổng Công Ty CKXUANDOAN là doanh nghiệp hàng đầu trong lĩnh vực sản xuất & phân phối Vật Liệu Xây Dựng cao cấp và Giải Pháp Xanh tại Việt Nam.',
      productsTitle: 'Sản Phẩm Chính',
      p1: 'Đá Nung Kết Vasta Stone',
      p2: 'Kính Tiết Kiệm Năng Lượng Low-E',
      p3: 'Sứ Vệ Sinh Thông Minh CKXUANDOAN',
      p4: 'Bê Tông Khí Chưng Áp ALC',
      p5: 'Gạch Granite & Ceramic Eurotile',
      solutionsTitle: 'Giải Pháp & Dự Án',
      s1: 'Giải Pháp Công Trình Xanh',
      s2: 'Công Cụ Dự Toán Vật Liệu',
      s3: 'Tìm Kiếm Showroom Gần Bạn',
      s4: 'Tư Vấn Kiến Trúc & Thiết Kế',
      s5: 'Hệ Thống Phân Phối Toàn Cầu',
      hqTitle: 'Trụ Sở Chính',
      hqAddress: 'Số 6 Trung Cấp, Mai Pha, TP Lạng Sơn',
      copyright: '© 2026 Tổng Công Ty CKXUANDOAN. Bản quyền đã được bảo hộ.',
      backToTop: 'Lên đầu trang',
    },
    EN: {
      desc: 'CKXUANDOAN Corporation is a leading enterprise in the field of Premium Building Materials manufacturing and Green Eco Solutions in Vietnam.',
      productsTitle: 'Main Products',
      p1: 'Vasta Stone Sintered Stone',
      p2: 'Low-E Energy Saving Glass',
      p3: 'Smart Sanitaryware CKXUANDOAN',
      p4: 'Autoclaved Aerated Concrete ALC',
      p5: 'Eurotile Granite & Ceramic Tiles',
      solutionsTitle: 'Solutions & Projects',
      s1: 'Green Building Solutions',
      s2: 'Material Estimation Tool',
      s3: 'Showroom & Dealer Network',
      s4: 'Architectural Project Consulting',
      s5: 'Global Distribution Network',
      hqTitle: 'Headquarters',
      hqAddress: 'No. 6 Trung Cap, Mai Pha, Lang Son City, Vietnam',
      copyright: '© 2026 Viglacera Corporation - JSC. All rights reserved.',
      backToTop: 'Back to top',
    }
  }[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#001A33] text-white border-t border-[#002548] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <a href="#" className="inline-block">
              <span className="font-heading font-black text-2xl text-white tracking-wider">
                CKXUANDOAN
              </span>
            </a>
            <p className="text-xs text-gray-400 leading-relaxed">
              {t.desc}
            </p>
            <div className="pt-2">
              <span className="text-[11px] text-gray-400 block mb-2 font-semibold">Theo dõi chúng tôi:</span>
              <div className="flex space-x-2.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#002548] hover:bg-[#00a859] flex items-center justify-center text-gray-300 hover:text-white transition text-xs font-bold"
                >
                  f
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#002548] hover:bg-[#00a859] flex items-center justify-center text-gray-300 hover:text-white transition text-xs font-bold"
                >
                  yt
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#002548] hover:bg-[#00a859] flex items-center justify-center text-gray-300 hover:text-white transition text-xs font-bold"
                >
                  in
                </a>
              </div>
            </div>
          </div>

          {/* Products Link */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase text-white mb-4 border-l-2 border-[#00a859] pl-2.5">
              {t.productsTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li><a href="#products" className="hover:text-[#00a859] transition">{t.p1}</a></li>
              <li><a href="#products" className="hover:text-[#00a859] transition">{t.p2}</a></li>
              <li><a href="#products" className="hover:text-[#00a859] transition">{t.p3}</a></li>
              <li><a href="#products" className="hover:text-[#00a859] transition">{t.p4}</a></li>
              <li><a href="#products" className="hover:text-[#00a859] transition">{t.p5}</a></li>
            </ul>
          </div>

          {/* Solutions Link */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase text-white mb-4 border-l-2 border-[#00a859] pl-2.5">
              {t.solutionsTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li><a href="#solutions" className="hover:text-[#00a859] transition">{t.s1}</a></li>
              <li><a href="#calculator" className="hover:text-[#00a859] transition">{t.s2}</a></li>
              <li><a href="#showrooms" className="hover:text-[#00a859] transition">{t.s3}</a></li>
              <li><a href="#contact" className="hover:text-[#00a859] transition">{t.s4}</a></li>
              <li><a href="#showrooms" className="hover:text-[#00a859] transition">{t.s5}</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase text-white mb-4 border-l-2 border-[#00a859] pl-2.5">
              {t.hqTitle}
            </h4>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-start gap-2.5 leading-relaxed">
                <MapPin className="w-4 h-4 text-[#00a859] shrink-0 mt-0.5" />
                <span>{t.hqAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00a859] shrink-0" />
                <a href="tel:1900989829" className="hover:text-white transition font-medium">Hotline: 1900 98 98 29</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00a859] shrink-0" />
                <a href="mailto:info@ckxuandoan.com.vn" className="hover:text-white transition">info@ckxuandoan.com.vn</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#002548] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>{t.copyright}</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-300 hover:text-[#00a859] transition cursor-pointer"
          >
            <span>{t.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
