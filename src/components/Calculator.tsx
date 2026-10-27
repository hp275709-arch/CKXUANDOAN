import React, { useState } from 'react';
import { Calculator as CalcIcon, RefreshCw, Send, Check } from 'lucide-react';
import { Language } from '../types';

interface CalculatorProps {
  lang: Language;
  onApplyToQuote: (details: string) => void;
  showToast: (msg: string) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ lang, onApplyToQuote, showToast }) => {
  const [length, setLength] = useState<number>(5);
  const [width, setWidth] = useState<number>(4);
  const [tileSize, setTileSize] = useState<number>(3.84);
  const [tileLabel, setTileLabel] = useState<string>('160x240 cm (Đá Nung Kết Khổ Tấm)');
  const [wasteFactor, setWasteFactor] = useState<number>(1.05); // 5%

  const t = {
    VI: {
      headerTitle: 'Công Cụ Tính Nhu Cầu Vật Liệu Dự Án',
      headerDesc: 'Dễ dàng ước tính số lượng gạch, đá ốp lát cần dùng cho không gian của bạn',
      lengthLabel: 'Chiều dài diện tích (m)',
      widthLabel: 'Chiều rộng diện tích (m)',
      sizeLabel: 'Kích thước gạch/đá mong muốn',
      wasteLabel: 'Tỷ lệ hao hụt dự phòng thi công',
      waste5: '5% (Lát thẳng thông thường)',
      waste10: '10% (Lát xương cá / chéo góc)',
      calcBtn: 'Tính Toán Ngay',
      appliedBtn: 'Đã chuyển vào form báo giá',
      resultTitle: 'Kết quả dự toán vật liệu',
      totalArea: 'Tổng diện tích bề mặt:',
      estimatedPieces: 'Số lượng tấm/viên ước tính:',
      sendToForm: 'Đưa kết quả vào yêu cầu báo giá',
      toastSuccess: 'Đã tính toán số lượng vật liệu thành công!',
      toastApplied: 'Đã áp dụng kết quả vào form liên hệ tư vấn!',
    },
    EN: {
      headerTitle: 'Project Material Estimator Tool',
      headerDesc: 'Easily calculate the required quantity of tiles or sintered stone for your space',
      lengthLabel: 'Area Length (m)',
      widthLabel: 'Area Width (m)',
      sizeLabel: 'Desired Tile / Slab Dimension',
      wasteLabel: 'Construction reserve wastage factor',
      waste5: '5% (Standard straight laying)',
      waste10: '10% (Herringbone / Diagonal laying)',
      calcBtn: 'Recalculate Now',
      appliedBtn: 'Transferred to quote form',
      resultTitle: 'Material Estimation Results',
      totalArea: 'Total Surface Area:',
      estimatedPieces: 'Estimated Slabs / Tiles:',
      sendToForm: 'Transfer result to quote form',
      toastSuccess: 'Calculated material requirements successfully!',
      toastApplied: 'Transferred calculation to contact form!',
    }
  }[lang];

  const area = Math.max(0, length * width);
  const totalPieces = Math.ceil((area / tileSize) * wasteFactor);

  const tileOptions = [
    { value: 0.36, label: '60x60 cm (Định dạng tiêu chuẩn)' },
    { value: 0.64, label: '80x80 cm (Định dạng vừa)' },
    { value: 0.72, label: '60x120 cm (Khổ chữ nhật Granit)' },
    { value: 1.44, label: '120x120 cm (Khổ lớn Granit)' },
    { value: 3.84, label: '160x240 cm (Đá Nung Kết Khổ Tấm)' },
    { value: 5.12, label: '160x320 cm (Đá Nung Kết Khổ Đại)' },
  ];

  const handleTileSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = parseFloat(e.target.value);
    setTileSize(val);
    const selected = tileOptions.find((o) => o.value === val);
    if (selected) setTileLabel(selected.label);
  };

  const handleApply = () => {
    const message = `Dự toán vật liệu: Diện tích ${area.toFixed(1)} m² (Dài ${length}m x Rộng ${width}m). Loại đá/gạch: ${tileLabel}. Số lượng ước tính cần: ${totalPieces} tấm/viên (hao hụt ${(wasteFactor - 1) * 100}%).`;
    onApplyToQuote(message);
    showToast(t.toastApplied);

    // Scroll to contact form
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Header Bar */}
        <div className="bg-[#003366] p-6 sm:p-8 text-white text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-2xl mb-3 text-[#00a859]">
            <CalcIcon className="w-6 h-6" />
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold">{t.headerTitle}</h2>
          <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl mx-auto">
            {t.headerDesc}
          </p>
        </div>

        {/* Calculator Body */}
        <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                  {t.lengthLabel}
                </label>
                <input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(Math.max(0.5, parseFloat(e.target.value) || 0))}
                  min="0.5"
                  step="0.5"
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#003366] focus:bg-white focus:outline-none text-sm font-semibold"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                  {t.widthLabel}
                </label>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(Math.max(0.5, parseFloat(e.target.value) || 0))}
                  min="0.5"
                  step="0.5"
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#003366] focus:bg-white focus:outline-none text-sm font-semibold"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                {t.sizeLabel}
              </label>
              <select
                value={tileSize}
                onChange={handleTileSizeChange}
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#003366] focus:bg-white focus:outline-none text-sm font-medium"
              >
                {tileOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                {t.wasteLabel}
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setWasteFactor(1.05)}
                  className={`p-2.5 rounded-xl text-xs font-semibold border transition text-center cursor-pointer ${
                    wasteFactor === 1.05
                      ? 'border-[#003366] bg-[#003366]/5 text-[#003366] font-bold'
                      : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {t.waste5}
                </button>
                <button
                  type="button"
                  onClick={() => setWasteFactor(1.10)}
                  className={`p-2.5 rounded-xl text-xs font-semibold border transition text-center cursor-pointer ${
                    wasteFactor === 1.10
                      ? 'border-[#003366] bg-[#003366]/5 text-[#003366] font-bold'
                      : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {t.waste10}
                </button>
              </div>
            </div>

            <button
              onClick={() => showToast(t.toastSuccess)}
              className="w-full bg-[#003366] hover:bg-[#002548] text-white font-bold py-3.5 rounded-xl transition shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>{t.calcBtn}</span>
            </button>
          </div>

          {/* Results Box */}
          <div className="bg-[#f8f9fa] p-7 rounded-2xl border border-gray-200 text-center flex flex-col justify-between h-full">
            <div>
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest block mb-1">
                {t.resultTitle}
              </span>

              <div className="my-5">
                <span className="text-5xl font-black text-[#00a859]">{area.toFixed(1)}</span>
                <span className="text-gray-600 font-bold ml-1 text-lg">m²</span>
                <p className="text-xs text-gray-500 mt-1">{t.totalArea}</p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">
                  {t.estimatedPieces}
                </p>
                <p className="text-4xl font-black text-[#003366] mt-2">
                  {totalPieces} <span className="text-lg font-bold text-gray-600">{lang === 'VI' ? 'tấm / viên' : 'pieces'}</span>
                </p>
                <p className="text-[11px] text-gray-400 mt-1">
                  Đã gồm {(wasteFactor - 1) * 100}% hao hụt thi công cắt gọt
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <button
                onClick={handleApply}
                className="w-full bg-[#00a859] hover:bg-[#008545] text-white text-xs font-bold py-3 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{t.sendToForm}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
