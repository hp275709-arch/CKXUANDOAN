import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, ShieldCheck, Clock, Building } from 'lucide-react';
import { Language } from '../types';

interface ConsultationFormProps {
  lang: Language;
  prefilledNotes?: string;
  prefilledCategory?: string;
  onClearPrefill?: () => void;
  showToast: (msg: string) => void;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  lang,
  prefilledNotes = '',
  prefilledCategory = '',
  showToast,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [productGroup, setProductGroup] = useState('Đá Nung Kết & Gạch Ốp Lát');
  const [projectType, setProjectType] = useState('Biệt thự / Căn hộ cao cấp');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledNotes) {
      setMessage((prev) => (prev ? `${prev}\n\n${prefilledNotes}` : prefilledNotes));
    }
  }, [prefilledNotes]);

  useEffect(() => {
    if (prefilledCategory) {
      setProductGroup(prefilledCategory);
    }
  }, [prefilledCategory]);

  const t = {
    VI: {
      title: 'Đăng Ký Nhận Tư Vấn Dự Án & Báo Giá',
      desc: 'Đội ngũ chuyên viên tư vấn kỹ thuật CKXUANDOAN sẵn sàng phản hồi trong 24 giờ',
      nameLabel: 'Họ và tên *',
      namePlaceholder: 'Nguyễn Văn A',
      phoneLabel: 'Số điện thoại *',
      phonePlaceholder: '0901 234 567',
      emailLabel: 'Email liên hệ',
      emailPlaceholder: 'example@domain.com',
      groupLabel: 'Nhóm sản phẩm quan tâm',
      projectTypeLabel: 'Loại hình công trình',
      notesLabel: 'Nội dung nhu cầu / Chi tiết dự án',
      notesPlaceholder: 'Nhập thông tin yêu cầu tư vấn, khối lượng hoặc thông số dự án...',
      submitBtn: 'Gửi Yêu Cầu Tư Vấn Ngay',
      successTitle: 'Gửi Yêu Cầu Thành Công!',
      successDesc: 'Cảm ơn bạn. Chuyên viên kinh doanh CKXUANDOAN sẽ liên hệ với bạn trong vòng 24 giờ làm việc.',
      sendAnother: 'Gửi yêu cầu dự án khác',
      commit1: 'Bảo mật thông tin dự án tuyệt đối',
      commit2: 'Hỗ trợ bản vẽ kỹ thuật & bóc tách khối lượng miễn phí',
      commit3: 'Cung cấp mẫu gạch & đá thực tế tận nơi',
    },
    EN: {
      title: 'Request Project Consultation & Quotation',
      desc: 'CKXUANDOAN engineering & commercial experts will respond within 24 working hours',
      nameLabel: 'Full Name *',
      namePlaceholder: 'John Doe',
      phoneLabel: 'Phone Number *',
      phonePlaceholder: '+84 901 234 567',
      emailLabel: 'Contact Email',
      emailPlaceholder: 'example@domain.com',
      groupLabel: 'Product Interest Group',
      projectTypeLabel: 'Project Type',
      notesLabel: 'Project Requirements / Specifications',
      notesPlaceholder: 'Enter your project requirements, quantities, or specific questions...',
      submitBtn: 'Submit Consultation Request',
      successTitle: 'Request Submitted Successfully!',
      successDesc: 'Thank you. CKXUANDOAN representative will contact you within 24 business hours.',
      sendAnother: 'Submit another request',
      commit1: 'Strict privacy of project information',
      commit2: 'Free technical drawing & BOQ takeoff support',
      commit3: 'Physical material sample delivery to site/office',
    }
  }[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      showToast(lang === 'VI' ? 'Vui lòng điền đủ họ tên và số điện thoại!' : 'Please provide name and phone number!');
      return;
    }

    setIsSubmitted(true);
    showToast(lang === 'VI' ? 'Cảm ơn bạn! Yêu cầu tư vấn đã được gửi tới CKXUANDOAN.' : 'Thank you! Your inquiry was sent to CKXUANDOAN.');
  };

  const handleReset = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="bg-[#f8f9fa] py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 scroll-mt-16">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-200 relative">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00a859] block mb-2">
            Liên hệ trực tiếp
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#003366]">
            {t.title}
          </h2>
          <p className="text-gray-600 text-sm mt-2 max-w-lg mx-auto">
            {t.desc}
          </p>
        </div>

        {isSubmitted ? (
          <div className="text-center py-12 px-6 animate-fadeIn">
            <div className="w-16 h-16 bg-[#00a859]/10 text-[#00a859] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-[#003366] mb-2">
              {t.successTitle}
            </h3>
            <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
              {t.successDesc}
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 max-w-sm mx-auto text-left text-xs text-gray-700 space-y-1 mb-6">
              <p><strong>Người liên hệ:</strong> {fullName}</p>
              <p><strong>Số điện thoại:</strong> {phone}</p>
              <p><strong>Sản phẩm quan tâm:</strong> {productGroup}</p>
            </div>
            <button
              onClick={handleReset}
              className="text-xs font-bold text-[#00a859] hover:text-[#008545] underline cursor-pointer"
            >
              {t.sendAnother}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={t.namePlaceholder}
                  className="w-full p-3.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#003366] focus:bg-white focus:outline-none font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                  {t.phoneLabel}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.phonePlaceholder}
                  className="w-full p-3.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#003366] focus:bg-white focus:outline-none font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="w-full p-3.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#003366] focus:bg-white focus:outline-none font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                  {t.groupLabel}
                </label>
                <select
                  value={productGroup}
                  onChange={(e) => setProductGroup(e.target.value)}
                  className="w-full p-3.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#003366] focus:bg-white focus:outline-none font-medium"
                >
                  <option>Đá Nung Kết & Gạch Ốp Lát</option>
                  <option>Sứ Vệ Sinh & Thiết Bị Sen Vòi</option>
                  <option>Kính Tiết Kiệm Năng Lượng Low-E</option>
                  <option>Bê Tông Khí Chưng Áp ALC</option>
                  <option>Trọn Gói Giải Pháp Dự Án</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                  {t.projectTypeLabel}
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full p-3.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#003366] focus:bg-white focus:outline-none font-medium"
                >
                  <option>Nhà phố / Căn hộ cá nhân</option>
                  <option>Biệt thự / Villa cao cấp</option>
                  <option>Tòa nhà văn phòng / Khách sạn</option>
                  <option>Dự án khu đô thị / Bất động sản</option>
                  <option>Đại lý & Nhà phân phối VLXD</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                {t.notesLabel}
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.notesPlaceholder}
                className="w-full p-3.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#003366] focus:bg-white focus:outline-none font-medium leading-relaxed"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#00a859] hover:bg-[#008545] text-white font-heading font-bold py-4 rounded-xl shadow-lg hover:shadow-[#00a859]/30 transition duration-300 text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{t.submitBtn}</span>
            </button>

            {/* Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-gray-100 text-[11px] text-gray-500 text-center">
              <div className="flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00a859]" />
                <span>{t.commit1}</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <Building className="w-4 h-4 text-[#00a859]" />
                <span>{t.commit2}</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <Clock className="w-4 h-4 text-[#00a859]" />
                <span>{t.commit3}</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
