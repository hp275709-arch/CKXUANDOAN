import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductSection } from './components/ProductSection';
import { GreenSolutions } from './components/GreenSolutions';
import { Calculator } from './components/Calculator';
import { ShowroomLocator } from './components/ShowroomLocator';
import { ConsultationForm } from './components/ConsultationForm';
import { ProductModal } from './components/ProductModal';
import { CatalogueModal } from './components/CatalogueModal';
import { Footer } from './components/Footer';

import { productsData, showroomsData, cataloguesData } from './data/mockData';
import { Product, ProductCategory, Language, Catalogue as CatalogueType } from './types';
import { Phone, CheckCircle2, Bookmark, ArrowUp } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('VI');
  const [currentCategory, setCurrentCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCatalogueOpen, setIsCatalogueOpen] = useState<boolean>(false);
  const [savedProductIds, setSavedProductIds] = useState<number[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Prefill states for consultation form
  const [prefilledNotes, setPrefilledNotes] = useState<string>('');
  const [prefilledCategory, setPrefilledCategory] = useState<string>('');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 4000);
  };

  const handleToggleLang = () => {
    if (lang === 'VI') {
      setLang('EN');
      showToast('Switched to English interface');
    } else {
      setLang('VI');
      showToast('Đã chuyển sang giao diện Tiếng Việt');
    }
  };

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      const matchCat = currentCategory === 'all' || p.category === currentCategory;
      const matchSearch =
        !searchQuery.trim() ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [currentCategory, searchQuery]);

  const handleToggleSaveProduct = (id: number) => {
    setSavedProductIds((prev) => {
      if (prev.includes(id)) {
        showToast(lang === 'VI' ? 'Đã bỏ lưu sản phẩm khỏi danh sách dự án' : 'Removed from project wishlist');
        return prev.filter((pId) => pId !== id);
      } else {
        showToast(lang === 'VI' ? 'Đã lưu sản phẩm vào danh sách quan tâm!' : 'Saved product to project list!');
        return [...prev, id];
      }
    });
  };

  const handleRequestQuoteForProduct = (product: Product) => {
    let catText = 'Đá Nung Kết & Gạch Ốp Lát';
    if (product.category === 'glass') catText = 'Kính Tiết Kiệm Năng Lượng Low-E';
    if (product.category === 'sanitary') catText = 'Sứ Vệ Sinh & Thiết Bị Sen Vòi';
    if (product.category === 'concrete') catText = 'Bê Tông Khí Chưng Áp ALC';

    setPrefilledCategory(catText);
    setPrefilledNotes(`Yêu cầu báo giá & tư vấn kỹ thuật sản phẩm: ${product.name} (Mã: ${product.code}, Kích thước: ${product.size}).`);

    // Smooth scroll to contact form
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCatalogue = (cat: CatalogueType) => {
    showToast(lang === 'VI' ? `Đang tải: ${cat.title} (${cat.fileSize})...` : `Downloading: ${cat.title} (${cat.fileSize})...`);
    setTimeout(() => {
      showToast(lang === 'VI' ? `Tải hoàn tất: ${cat.title}` : `Downloaded: ${cat.title}`);
    }, 1200);
  };

  const handleDownloadSpec = (product: Product) => {
    showToast(lang === 'VI' ? `Đang tải Spec Sheet kỹ thuật: ${product.code}.pdf` : `Downloading Technical Spec Sheet: ${product.code}.pdf`);
  };

  const scrollToContact = () => {
    const elem = document.getElementById('contact');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-gray-800">
      {/* Top Bar & Navigation */}
      <Header
        lang={lang}
        onToggleLang={handleToggleLang}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenConsultation={scrollToContact}
        onOpenCatalogue={() => setIsCatalogueOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenCatalogue={() => setIsCatalogueOpen(true)}
        />

        {/* Product Catalog */}
        <ProductSection
          products={filteredProducts}
          currentCategory={currentCategory}
          onSelectCategory={setCurrentCategory}
          searchQuery={searchQuery}
          onSelectProduct={setSelectedProduct}
          savedProductIds={savedProductIds}
          onToggleSaveProduct={handleToggleSaveProduct}
          onRequestQuoteForProduct={handleRequestQuoteForProduct}
          lang={lang}
        />

        {/* Green Solutions & Technology */}
        <GreenSolutions lang={lang} />

        {/* Material Estimator Tool */}
        <Calculator
          lang={lang}
          onApplyToQuote={(notes) => setPrefilledNotes(notes)}
          showToast={showToast}
        />

        {/* Showrooms Locator & Interactive Map */}
        <ShowroomLocator showrooms={showroomsData} lang={lang} />

        {/* Consultation & Quotation Form */}
        <ConsultationForm
          lang={lang}
          prefilledNotes={prefilledNotes}
          prefilledCategory={prefilledCategory}
          showToast={showToast}
        />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={handleRequestQuoteForProduct}
        onDownloadSpec={handleDownloadSpec}
        lang={lang}
      />

      {/* Catalogue Download Modal */}
      <CatalogueModal
        isOpen={isCatalogueOpen}
        onClose={() => setIsCatalogueOpen(false)}
        catalogues={cataloguesData}
        onDownload={handleDownloadCatalogue}
        lang={lang}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Saved Count Badge */}
        {savedProductIds.length > 0 && (
          <button
            onClick={() => {
              const elem = document.getElementById('products');
              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              showToast(lang === 'VI' ? `Bạn đang có ${savedProductIds.length} sản phẩm trong danh sách quan tâm` : `You have ${savedProductIds.length} items in your wishlist`);
            }}
            className="w-12 h-12 rounded-full bg-[#003366] text-white shadow-xl flex items-center justify-center hover:scale-110 transition relative group cursor-pointer"
            title="Sản phẩm đã lưu"
          >
            <Bookmark className="w-5 h-5 fill-current" />
            <span className="absolute -top-1 -right-1 bg-[#00a859] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
              {savedProductIds.length}
            </span>
          </button>
        )}

        {/* Hotline Quick Call */}
        <a
          href="tel:1900989829"
          className="w-12 h-12 rounded-full bg-[#00a859] hover:bg-[#008545] text-white shadow-xl flex items-center justify-center hover:scale-110 transition cursor-pointer"
          title="Gọi ngay hotline 1900 98 98 29"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 max-w-sm bg-[#001A33] text-white px-5 py-3.5 rounded-2xl shadow-2xl z-50 flex items-center gap-3 border border-[#00a859] animate-bounce-subtle">
          <CheckCircle2 className="w-5 h-5 text-[#00a859] shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
