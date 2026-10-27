import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calculator, Globe, Search, Headset, Menu, X } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenConsultation: () => void;
  onOpenCatalogue: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  searchQuery,
  onSearchChange,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    VI: {
      hotline: 'Hotline: 1900 98 98 29',
      address: 'Số 6 Trung Cấp, Mai Pha, TP Lạng Sơn',
      calc: 'Tính vật liệu',
      home: 'Trang chủ',
      about: 'Giới thiệu',
      products: 'Vật liệu xây dựng',
      solutions: 'Giải pháp xanh',
      showrooms: 'Showroom',
      contact: 'Liên hệ',
      searchPlaceholder: 'Tìm gạch, đá, kính, sứ...',
      consultBtn: 'Tư vấn',
      subtitle: 'VẬT LIỆU XÂY DỰNG',
    },
    EN: {
      hotline: 'Hotline: 1900 98 98 29',
      address: 'No. 6 Trung Cap, Mai Pha, Lang Son City',
      calc: 'Material Calculator',
      home: 'Home',
      about: 'About Us',
      products: 'Building Materials',
      solutions: 'Green Solutions',
      showrooms: 'Showrooms',
      contact: 'Contact',
      searchPlaceholder: 'Search tiles, stone, glass, sanitary...',
      consultBtn: 'Consulting',
      subtitle: 'BUILDING MATERIALS',
    }
  }[lang];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#001A33] text-white text-xs py-2 px-4 border-b border-[#002548]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:1900989829" className="flex items-center gap-1.5 hover:text-[#00a859] transition">
              <Phone className="w-3.5 h-3.5 text-[#00a859]" />
              <span>Hotline: <strong className="text-white">1900 98 98 29</strong></span>
            </a>
            <a href="mailto:info@ckxuandoan.com.vn" className="hidden md:inline-flex items-center gap-1.5 hover:text-[#00a859] transition">
              <Mail className="w-3.5 h-3.5 text-[#00a859]" />
              <span>info@ckxuandoan.com.vn</span>
            </a>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#00a859]" />
              <span>{t.address}</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#calculator" className="flex items-center gap-1.5 text-gray-300 hover:text-white transition">
              <Calculator className="w-3.5 h-3.5 text-[#00a859]" />
              <span>{t.calc}</span>
            </a>
            <span className="text-gray-600">|</span>
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 hover:text-[#00a859] transition font-bold px-1.5 py-0.5 rounded cursor-pointer"
              title="Chuyển đổi ngôn ngữ / Switch language"
            >
              <span>{lang}</span>
              <Globe className="w-3.5 h-3.5 text-[#00a859]" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center group">
              <div className="flex items-center">
                <span className="text-3xl font-black tracking-wider text-[#003366] group-hover:text-[#00a859] transition duration-300 font-heading">
                  CKXUANDOAN
                </span>
                <span className="ml-2.5 pl-2.5 border-l-2 border-[#00a859] text-[11px] font-bold text-gray-600 uppercase tracking-widest hidden sm:block">
                  {t.subtitle}
                </span>
              </div>
            </a>

            {/* Desktop Nav Items */}
            <nav className="hidden lg:flex space-x-6 xl:space-x-8 font-heading text-sm font-semibold uppercase text-[#003366]">
              <a href="#" className="hover:text-[#00a859] text-[#00a859] transition duration-200">{t.home}</a>
              <a href="#about" className="hover:text-[#00a859] transition duration-200">{t.about}</a>
              <a href="#products" className="hover:text-[#00a859] transition duration-200">{t.products}</a>
              <a href="#solutions" className="hover:text-[#00a859] transition duration-200">{t.solutions}</a>
              <a href="#showrooms" className="hover:text-[#00a859] transition duration-200">{t.showrooms}</a>
              <a href="#contact" className="hover:text-[#00a859] transition duration-200">{t.contact}</a>
            </nav>

            {/* Search & Actions */}
            <div className="hidden sm:flex items-center space-x-3">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="w-48 xl:w-64 pl-9 pr-7 py-2 text-sm bg-gray-100 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#003366] focus:bg-white transition duration-200"
                />
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    className="absolute right-2.5 top-2.5 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              <button
                onClick={onOpenConsultation}
                className="bg-[#00a859] hover:bg-[#008545] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition duration-200 flex items-center gap-2 cursor-pointer"
              >
                <Headset className="w-4 h-4" />
                <span>{t.consultBtn}</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={onOpenConsultation}
                className="bg-[#00a859] text-white p-2 rounded-full text-xs font-bold sm:hidden"
                title={t.consultBtn}
              >
                <Headset className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#003366] hover:text-[#00a859] focus:outline-none p-2"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
            <div className="relative my-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-gray-100 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#003366]"
              />
              <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
            </div>
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-bold text-[#00a859]"
            >
              {t.home}
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-[#003366] hover:bg-gray-50 font-semibold"
            >
              {t.about}
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-[#003366] hover:bg-gray-50 font-semibold"
            >
              {t.products}
            </a>
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-[#003366] hover:bg-gray-50 font-semibold"
            >
              {t.solutions}
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-[#003366] hover:bg-gray-50 font-semibold"
            >
              {t.calc}
            </a>
            <a
              href="#showrooms"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-[#003366] hover:bg-gray-50 font-semibold"
            >
              {t.showrooms}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-[#003366] hover:bg-gray-50 font-semibold"
            >
              {t.contact}
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full bg-[#00a859] hover:bg-[#008545] text-white font-bold py-2.5 rounded-xl flex items-center justify-center gap-2"
              >
                <Headset className="w-4 h-4" />
                <span>{t.consultBtn}</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
