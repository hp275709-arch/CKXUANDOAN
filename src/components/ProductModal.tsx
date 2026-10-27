import React, { useEffect } from 'react';
import { X, Check, Download, Send, ShieldCheck, Ruler, Award } from 'lucide-react';
import { Product, Language } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: (product: Product) => void;
  onDownloadSpec: (product: Product) => void;
  lang: Language;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onRequestQuote,
  onDownloadSpec,
  lang,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const t = {
    VI: {
      codePrefix: 'MÃ SP:',
      standardSize: 'Kích thước chuẩn:',
      cert1: 'Đạt chứng chỉ Xanh Quốc Tế LEED / Lotus',
      cert2: 'Bảo hành chính hãng từ Tổng Công Ty CKXUANDOAN',
      quoteBtn: 'Nhận Báo Giá Dự Án',
      specBtn: 'Tải Spec Sheet (PDF)',
      specsTitle: 'Thông số kỹ thuật',
      featuresTitle: 'Đặc tính nổi bật',
    },
    EN: {
      codePrefix: 'ITEM CODE:',
      standardSize: 'Standard Dimension:',
      cert1: 'LEED & Lotus Green Building International Certified',
      cert2: 'Official warranty from CKXUANDOAN Corporation',
      quoteBtn: 'Request Project Quote',
      specBtn: 'Download Spec Sheet',
      specsTitle: 'Technical Specifications',
      featuresTitle: 'Key Highlights',
    }
  }[lang];

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-700 w-9 h-9 rounded-full flex items-center justify-center z-10 transition cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Image Preview */}
            <div>
              <div className="rounded-2xl overflow-hidden aspect-square border border-gray-200 shadow-sm relative group bg-gray-50">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#003366] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {product.badge}
                </span>
              </div>

              {/* Specs table */}
              {product.specs && product.specs.length > 0 && (
                <div className="mt-4 bg-gray-50 rounded-xl p-3.5 border border-gray-200">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                    {t.specsTitle}
                  </h4>
                  <div className="space-y-1.5 text-xs">
                    {product.specs.map((s, idx) => (
                      <div key={idx} className="flex justify-between border-b border-gray-200/50 pb-1">
                        <span className="text-gray-500">{s.label}:</span>
                        <span className="font-semibold text-gray-800 text-right">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="inline-block bg-[#00a859]/10 text-[#00a859] border border-[#00a859]/30 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {t.codePrefix} {product.code}
                </span>

                <h2 className="font-heading font-extrabold text-2xl text-[#003366] mb-2 leading-snug">
                  {product.name}
                </h2>

                <p className="text-xs text-gray-500 font-semibold mb-4 flex items-center gap-1.5">
                  <Ruler className="w-4 h-4 text-gray-400" />
                  <span>{t.standardSize} {product.size}</span>
                </p>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {product.desc}
                </p>

                {/* Features */}
                {product.features && product.features.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase text-gray-700 tracking-wider mb-2.5">
                      {t.featuresTitle}
                    </h4>
                    <div className="space-y-2">
                      {product.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-700">
                          <Check className="w-3.5 h-3.5 text-[#00a859] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Certifications */}
                <div className="space-y-2.5 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                    <Award className="w-4 h-4 text-[#00a859] shrink-0" />
                    <span>{t.cert1}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#00a859] shrink-0" />
                    <span>{t.cert2}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onRequestQuote(product);
                  }}
                  className="flex-1 bg-[#00a859] hover:bg-[#008545] text-white text-center font-bold text-xs py-3.5 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.quoteBtn}</span>
                </button>

                <button
                  onClick={() => onDownloadSpec(product)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs px-4 py-3.5 rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t.specBtn}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
