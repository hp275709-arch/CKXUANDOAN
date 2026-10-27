import React, { useState } from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation } from 'lucide-react';
import { Showroom, Language } from '../types';

interface ShowroomLocatorProps {
  showrooms: Showroom[];
  lang: Language;
}

export const ShowroomLocator: React.FC<ShowroomLocatorProps> = ({ showrooms, lang }) => {
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [activeShowroom, setActiveShowroom] = useState<Showroom>(showrooms[0]);

  const t = {
    VI: {
      tag: 'Trải nghiệm thực tế',
      title: 'Hệ Thống Showroom & Trung Tâm Phân Phối',
      selectLabel: 'Chọn Khu Vực / Tỉnh Thành',
      allCities: 'Tất cả khu vực',
      langson: 'Lạng Sơn (Trụ sở mới)',
      hanoi: 'Hà Nội',
      hcm: 'TP. Hồ Chí Minh',
      danang: 'Đà Nẵng',
      haiphong: 'Hải Phòng',
      cantho: 'Cần Thơ',
      callNow: 'Gọi hotline',
      directions: 'Chỉ đường',
      openHours: 'Giờ mở cửa',
    },
    EN: {
      tag: 'Experience In Person',
      title: 'Showroom & Distribution Center Network',
      selectLabel: 'Filter by Region / Province',
      allCities: 'All Regions',
      langson: 'Lang Son (HQ Branch)',
      hanoi: 'Hanoi',
      hcm: 'Ho Chi Minh City',
      danang: 'Da Nang',
      haiphong: 'Hai Phong',
      cantho: 'Can Tho',
      callNow: 'Call Hotline',
      directions: 'Get Directions',
      openHours: 'Opening Hours',
    }
  }[lang];

  const filteredShowrooms = selectedCity === 'all'
    ? showrooms
    : showrooms.filter((s) => s.city === selectedCity);

  return (
    <section id="showrooms" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00a859] mb-2 block">
          {t.tag}
        </span>
        <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#003366]">
          {t.title}
        </h2>
        <div className="w-16 h-1 bg-[#00a859] mx-auto mt-4 rounded-full" />
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
        {/* Left Column: Showroom Filter & Listing */}
        <div className="lg:col-span-5 p-6 sm:p-7 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col justify-between">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-600 mb-2">
              {t.selectLabel}
            </label>
            <select
              value={selectedCity}
              onChange={(e) => {
                const newCity = e.target.value;
                setSelectedCity(newCity);
                const matching = showrooms.filter((s) => newCity === 'all' || s.city === newCity);
                if (matching.length > 0) {
                  setActiveShowroom(matching[0]);
                }
              }}
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl mb-4 focus:ring-2 focus:ring-[#003366] font-semibold text-sm outline-none"
            >
              <option value="all">{t.allCities}</option>
              <option value="langson">{t.langson}</option>
              <option value="hanoi">{t.hanoi}</option>
              <option value="hcm">{t.hcm}</option>
              <option value="danang">{t.danang}</option>
              <option value="haiphong">{t.haiphong}</option>
              <option value="cantho">{t.cantho}</option>
            </select>

            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
              {filteredShowrooms.map((s) => {
                const isSelected = activeShowroom.id === s.id;
                return (
                  <div
                    key={s.id}
                    onClick={() => setActiveShowroom(s)}
                    className={`p-4 rounded-2xl border transition cursor-pointer ${
                      isSelected
                        ? 'border-[#00a859] bg-[#00a859]/5 shadow-sm ring-1 ring-[#00a859]'
                        : 'border-gray-200 hover:border-gray-300 bg-[#f8f9fa]'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-heading font-bold text-sm text-[#003366]">{s.name}</h4>
                      <span className="text-[10px] uppercase font-bold bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">
                        {s.cityName}
                      </span>
                    </div>

                    <p className="text-xs text-gray-600 mt-2 flex items-start gap-1.5 leading-relaxed">
                      <MapPin className="w-3.5 h-3.5 text-[#00a859] shrink-0 mt-0.5" />
                      <span>{s.address}</span>
                    </p>

                    <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-gray-200/60 text-xs">
                      <a
                        href={`tel:${s.phone.replace(/\s+/g, '')}`}
                        className="text-[#003366] font-bold hover:text-[#00a859] flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Phone className="w-3 h-3 text-[#00a859]" />
                        <span>{s.phone}</span>
                      </a>

                      <span className="text-gray-500 text-[11px] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span>{s.hours.split(' ')[0]}</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <span>Tổng cộng: <strong>{filteredShowrooms.length} điểm trưng bày</strong></span>
            <span className="text-[#00a859] font-medium">Mở cửa cả tuần</span>
          </div>
        </div>

        {/* Right Column: Active Showroom Map & Details */}
        <div className="lg:col-span-7 bg-gray-100 relative min-h-[360px] lg:min-h-full flex flex-col">
          {/* Map Preview Iframe */}
          <div className="flex-grow relative">
            <iframe
              title={activeShowroom.name}
              src={activeShowroom.mapEmbedUrl}
              className="w-full h-full border-0 absolute inset-0"
              loading="lazy"
              allowFullScreen
            />
          </div>

          {/* Bottom Info Ribbon */}
          <div className="bg-[#001A33] text-white p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 z-10">
            <div>
              <p className="text-xs text-[#00a859] font-bold uppercase tracking-wider">
                Showroom đang chọn
              </p>
              <h4 className="font-heading font-bold text-sm sm:text-base text-white">
                {activeShowroom.name}
              </h4>
              <p className="text-xs text-gray-300 mt-0.5 max-w-md truncate">
                {activeShowroom.address}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${activeShowroom.phone.replace(/\s+/g, '')}`}
                className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-3 py-2 rounded-xl transition flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#00a859]" />
                <span>{t.callNow}</span>
              </a>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  activeShowroom.name + ' ' + activeShowroom.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00a859] hover:bg-[#008545] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 shadow-md"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{t.directions}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
