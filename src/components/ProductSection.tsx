import React from 'react';
import { Eye, Bookmark, Ruler, ArrowUpRight, Search, Sparkles } from 'lucide-react';
import { Product, ProductCategory, Language } from '../types';

interface ProductSectionProps {
  products: Product[];
  currentCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  searchQuery: string;
  onSelectProduct: (product: Product) => void;
  savedProductIds: number[];
  onToggleSaveProduct: (id: number) => void;
  onRequestQuoteForProduct: (product: Product) => void;
  lang: Language;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  products,
  currentCategory,
  onSelectCategory,
  searchQuery,
  onSelectProduct,
  savedProductIds,
  onToggleSaveProduct,
  onRequestQuoteForProduct,
  lang,
}) => {
  const content = {
    VI: {
      tag: 'Danh mục sản phẩm',
      title: 'Vật Liệu Xây Dựng Đột Phá & Đồng Bộ',
      all: 'Tất cả sản phẩm',
      tile: 'Đá Nung Kết & Gạch',
      sanitary: 'Sứ Vệ Sinh & Sen Vòi',
      glass: 'Kính Tiết Kiệm Năng Lượng',
      concrete: 'Bê Tông Khí ALC & Ngói',
      viewDetail: 'Xem Chi Tiết',
      requestQuote: 'Báo Giá',
      size: 'Kích thước',
      noResults: 'Không tìm thấy sản phẩm phù hợp với từ khóa',
      resetFilter: 'Xem tất cả sản phẩm',
      saveTooltip: 'Lưu vào danh sách dự án',
    },
    EN: {
      tag: 'Product Catalog',
      title: 'Breakthrough & Synchronized Materials',
      all: 'All Products',
      tile: 'Sintered Stone & Tiles',
      sanitary: 'Sanitaryware & Faucets',
      glass: 'Energy-Saving Glass',
      concrete: 'ALC Aerated Concrete & Roof',
      viewDetail: 'Quick View',
      requestQuote: 'Get Quote',
      size: 'Size',
      noResults: 'No products matched your search term',
      resetFilter: 'View all products',
      saveTooltip: 'Save to project list',
    }
  }[lang];

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: content.all },
    { id: 'tile', label: content.tile },
    { id: 'sanitary', label: content.sanitary },
    { id: 'glass', label: content.glass },
    { id: 'concrete', label: content.concrete },
  ];

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00a859] mb-2 inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{content.tag}</span>
        </span>
        <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#003366] mt-1">
          {content.title}
        </h2>
        <div className="w-16 h-1 bg-[#00a859] mx-auto mt-4 rounded-full" />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
        {categories.map((cat) => {
          const isActive = currentCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-xs ${
                isActive
                  ? 'bg-[#003366] text-white shadow-md'
                  : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Search Result Info */}
      {searchQuery && (
        <div className="mb-8 text-center text-sm text-gray-600 bg-gray-100/70 py-2 px-4 rounded-xl max-w-md mx-auto flex items-center justify-center gap-2">
          <Search className="w-4 h-4 text-gray-400" />
          <span>
            {lang === 'VI' ? 'Kết quả cho:' : 'Results for:'} <strong className="text-[#003366]">"{searchQuery}"</strong> ({products.length})
          </span>
        </div>
      )}

      {/* Products Grid */}
      {products.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center max-w-md mx-auto shadow-sm">
          <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-gray-700 mb-1">{content.noResults}</h3>
          <p className="text-xs text-gray-500 mb-4">Hãy thử tìm kiếm với mã sản phẩm hoặc danh mục khác.</p>
          <button
            onClick={() => {
              onSelectCategory('all');
            }}
            className="text-xs font-bold text-[#00a859] hover:underline"
          >
            {content.resetFilter}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {products.map((p) => {
            const isSaved = savedProductIds.includes(p.id);
            return (
              <div
                key={p.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group relative"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-100 cursor-pointer" onClick={() => onSelectProduct(p)}>
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#003366]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {p.badge}
                  </span>

                  {/* Bookmark Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleSaveProduct(p.id);
                    }}
                    title={content.saveTooltip}
                    className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition ${
                      isSaved
                        ? 'bg-[#00a859] text-white'
                        : 'bg-white/80 hover:bg-white text-gray-700'
                    }`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#00a859] font-bold uppercase tracking-wider mb-1">
                      <span>{p.code}</span>
                    </div>

                    <h3
                      onClick={() => onSelectProduct(p)}
                      className="font-heading font-bold text-base text-[#003366] mb-2 group-hover:text-[#00a859] transition cursor-pointer line-clamp-1"
                    >
                      {p.name}
                    </h3>

                    <p className="text-xs text-gray-500 mb-3 flex items-center gap-1.5 font-medium">
                      <Ruler className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span className="truncate">{content.size}: {p.size}</span>
                    </p>

                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4">
                      {p.desc}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
                    <button
                      onClick={() => onSelectProduct(p)}
                      className="bg-gray-100 hover:bg-[#003366] hover:text-white text-[#003366] font-bold text-xs py-2 rounded-lg transition duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{content.viewDetail}</span>
                    </button>

                    <button
                      onClick={() => onRequestQuoteForProduct(p)}
                      className="bg-[#00a859]/10 hover:bg-[#00a859] text-[#00a859] hover:text-white font-bold text-xs py-2 rounded-lg transition duration-200 flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>{content.requestQuote}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
