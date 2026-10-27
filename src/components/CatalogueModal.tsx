import React, { useEffect } from 'react';
import { X, FileDown, BookOpen, Layers } from 'lucide-react';
import { Catalogue, Language } from '../types';

interface CatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
  catalogues: Catalogue[];
  onDownload: (item: Catalogue) => void;
  lang: Language;
}

export const CatalogueModal: React.FC<CatalogueModalProps> = ({
  isOpen,
  onClose,
  catalogues,
  onDownload,
  lang,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const t = {
    VI: {
      title: 'Tài Liệu Kỹ Thuật & E-Catalogues 2026',
      desc: 'Tải trọn bộ tài liệu thông số kỹ thuật, chứng chỉ chất lượng và bộ sưu tập sản phẩm mới nhất của CKXUANDOAN.',
      pages: 'trang',
      downloadBtn: 'Tải PDF',
      close: 'Đóng',
    },
    EN: {
      title: 'Technical Documents & E-Catalogues 2026',
      desc: 'Download the comprehensive collection of technical specs, quality certs, and newest CKXUANDOAN product lines.',
      pages: 'pages',
      downloadBtn: 'Download PDF',
      close: 'Close',
    }
  }[lang];

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#003366] text-white p-6 sm:p-7 flex items-center justify-between">
          <div>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl">{t.title}</h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl">{t.desc}</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal List */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {catalogues.map((cat) => (
              <div
                key={cat.id}
                className="bg-[#f8f9fa] border border-gray-200 hover:border-[#00a859] rounded-2xl p-4 flex gap-4 items-center group transition"
              >
                <div className="w-20 h-24 rounded-xl overflow-hidden shrink-0 border border-gray-200 bg-gray-200 shadow-sm">
                  <img src={cat.coverImg} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>

                <div className="flex-grow flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[10px] font-bold text-[#00a859] uppercase tracking-wider bg-[#00a859]/10 px-2 py-0.5 rounded-full inline-block mb-1">
                      {cat.category}
                    </span>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-[#003366] line-clamp-2">
                      {cat.title}
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-1 flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        {cat.pages} {t.pages}
                      </span>
                      <span>•</span>
                      <span>{cat.fileSize}</span>
                    </p>
                  </div>

                  <div className="mt-3">
                    <button
                      onClick={() => onDownload(cat)}
                      className="bg-white hover:bg-[#00a859] hover:text-white text-[#003366] border border-gray-200 hover:border-transparent font-bold text-xs py-1.5 px-3 rounded-lg shadow-xs transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <FileDown className="w-3.5 h-3.5" />
                      <span>{t.downloadBtn}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-gray-50 p-4 border-t border-gray-200 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-gray-600 hover:text-gray-800 bg-gray-200 hover:bg-gray-300 transition cursor-pointer"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
