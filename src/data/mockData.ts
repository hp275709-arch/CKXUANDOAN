import { Product, Showroom, Catalogue } from '../types';

export const productsData: Product[] = [
  {
    id: 1,
    name: "Đá Nung Kết Vasta Stone Khổ Lớn",
    category: "tile",
    code: "VST-162801",
    size: "1600 x 3200 x 12 mm",
    img: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1000&auto=format&fit=crop",
    desc: "Sản xuất trên dây chuyền Sacmi Continua+ hàng đầu Ý. Kháng nhiệt, chống trầy xước, ứng dụng cho mặt bếp, đảo bếp và mặt dựng tòa nhà cao cấp.",
    badge: "Khổ Lớn Hàng Đầu",
    features: [
      "Độ hút nước gần như bằng 0 (< 0.1%)",
      "Chịu nhiệt độ cao trên 1200°C trực tiếp không biến dạng",
      "Chống bám bẩn, kháng hóa chất tẩy rửa",
      "An toàn vệ sinh thực phẩm chuẩn NSF"
    ],
    specs: [
      { label: "Độ dày", value: "12mm & 20mm" },
      { label: "Bề mặt", value: "Men mờ Satin / Bóng High-Gloss" },
      { label: "Ứng dụng", value: "Bàn bếp, sàn đại sảnh, mặt dựng façade" }
    ]
  },
  {
    id: 2,
    name: "Kính Tiết Kiệm Năng Lượng Low-E",
    category: "glass",
    code: "GLS-LOWE-02",
    size: "Tùy chỉnh theo công trình",
    img: "https://images.unsplash.com/photo-1508873696983-2df515122519?q=80&w=1000&auto=format&fit=crop",
    desc: "Phủ hợp chất Bạc (Ag) siêu mỏng giúp cản tia UV đến 99%, giảm truyền nhiệt bức xạ, tối ưu ánh sáng tự nhiên cho văn phòng và căn hộ sang trọng.",
    badge: "Tiết Kiệm Năng Lượng",
    features: [
      "Hệ số truyền nhiệt U-value cực thấp",
      "Cản tới 79% bức xạ nhiệt mặt trời",
      "Giảm tiêu thụ điện máy lạnh đến 50%",
      "Truyền sáng tự nhiên trên 65%"
    ],
    specs: [
      { label: "Hệ kính", value: "Kính hộp cách âm cách nhiệt Low-E" },
      { label: "Độ dày kính", value: "6mm - 12mm Low-E temper" },
      { label: "Chứng nhận", value: "Đạt chuẩn LEED, VGBC Lotus" }
    ]
  },
  {
    id: 3,
    name: "Bàn Cầu Thông Minh V-Smart V93",
    category: "sanitary",
    code: "V93-SMART",
    size: "720 x 410 x 520 mm",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop",
    desc: "Tự động đóng mở, sưởi ấm bệ ngồi, đóng xoáy rửa massage đa chức năng và khử trùng tia UV đạt chuẩn y tế Châu Âu.",
    badge: "Công Nghệ Thông Minh",
    features: [
      "Men Nano Titan kháng khuẩn diệt khuẩn 89%",
      "Hệ thống xả xoáy kép Turbo siêu êm chỉ 3.8L",
      "Vòi rửa đa chế độ Massage, nước ấm tức thì",
      "Đèn ban đêm LED định vị thông minh"
    ],
    specs: [
      { label: "Tâm xả", value: "300 mm" },
      { label: "Nguồn điện", value: "AC 220V / 50Hz" },
      { label: "Bảo hành", value: "10 năm phần sứ, 3 năm điện tử" }
    ]
  },
  {
    id: 4,
    name: "Tấm Panel Bê Tông Khí Chưng Áp ALC",
    category: "concrete",
    code: "ALC-PNL-10",
    size: "1200 x 600 x 100 mm",
    img: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=1000&auto=format&fit=crop",
    desc: "Khả năng chống cháy lên tới 4 giờ, gia cường lưới thép chống nứt, trọng lượng chỉ bằng 1/3 gạch đỏ truyền thống.",
    badge: "Vật Liệu Xanh",
    features: [
      "Khối lượng thể tích khô chỉ 500 - 700 kg/m³",
      "Chống cháy EI 240 phút (chuẩn PCCC cao nhất)",
      "Cách âm vượt trội đến 45 dB",
      "Tốc độ thi công nhanh gấp 3 lần"
    ],
    specs: [
      { label: "Cốt thép", value: "Lưới thép cường độ cao mạ kẽm kép" },
      { label: "Cường độ nén", value: "3.5 - 5.0 MPa" },
      { label: "Ứng dụng", value: "Tường ngăn, tường bao, sàn chịu lực" }
    ]
  },
  {
    id: 5,
    name: "Gạch Granite Đồng Chất Eurotile",
    category: "tile",
    code: "EUR-GRN-88",
    size: "800 x 800 mm",
    img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1000&auto=format&fit=crop",
    desc: "Họa tiết vân đá tự nhiên tinh xảo, độ hút nước dưới 0.1%, chuyên dụng cho sảnh khách sạn và biệt thự thương gia.",
    badge: "Mới 2026",
    features: [
      "Xương Granite đồng chất chịu lực uốn > 35 N/mm²",
      "Chống trơn trượt R10 an toàn bước chân",
      "Công nghệ in kỹ thuật số 3D độ phân giải 1200 DPI",
      "Kháng mài mòn cấp độ PEI IV"
    ],
    specs: [
      { label: "Độ dày", value: "10 mm" },
      { label: "Quy cách đóng gói", value: "3 viên/thùng (~1.92 m²)" },
      { label: "Khuyến nghị chà ron", value: "Khe ron 1.5 - 2 mm" }
    ]
  },
  {
    id: 6,
    name: "Bộ Sen Cây Nhiệt Độ Cao Cấp Vg598",
    category: "sanitary",
    code: "VG598-THERMO",
    size: "Chiều cao 1200 mm",
    img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1000&auto=format&fit=crop",
    desc: "Lõi chia nước mạ Niken-Crom 5 lớp, khóa nhiệt độ an toàn 38°C bảo vệ người già và trẻ nhỏ.",
    badge: "An Toàn Mới",
    features: [
      "Bộ điều nhiệt độ nhập khẩu công nghệ Vernet Pháp",
      "Bát sen đỉnh mưa công nghệ trộn khí Air-in êm ái",
      "Thân đúc đồng tiêu chuẩn DZR nguyên chất",
      "Chống bám cặn vôi silicon dễ vệ sinh"
    ],
    specs: [
      { label: "Chất liệu", value: "Đồng thau nguyên chất 59-1" },
      { label: "Lớp mạ", value: "Cr-Ni đa lớp tiêu chuẩn Nhật Bản" },
      { label: "Áp lực nước", value: "0.05 ~ 0.75 MPa" }
    ]
  },
  {
    id: 7,
    name: "Kính Phủ Siêu Trắng Solar Control",
    category: "glass",
    code: "GLS-SOLAR-05",
    size: "Gia công khổ max 3300 x 6000 mm",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    desc: "Giải pháp kính mặt dựng kiến trúc cao cấp phản xạ nhiệt mặt trời tối đa, mang lại diện mạo biểu tượng cho các tòa tháp chọc trời.",
    badge: "Công Trình Tiêu Biểu",
    features: [
      "Giảm tối đa hiệu ứng nhà kính trong tòa nhà",
      "Màu sắc phản xạ trung tính trang nhã",
      "Tương thích với mọi hệ profile nhôm mặt dựng Stick & Unitized",
      "Độ bền màng phủ vô cơ vĩnh cửu"
    ],
    specs: [
      { label: "Cấp tải trọng gió", value: "Chịu bão cấp 14+" },
      { label: "Hệ số hấp thụ", value: "SHGC < 0.28" },
      { label: "Bảo hành", value: "10 năm chính hãng" }
    ]
  },
  {
    id: 8,
    name: "Khối Bê Tông Khí Chưng Áp AAC Tiêu Chuẩn",
    category: "concrete",
    code: "AAC-BLK-600",
    size: "600 x 200 x 100/150/200 mm",
    img: "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?q=80&w=1000&auto=format&fit=crop",
    desc: "Khối gạch bê tông khí xốp chưng áp hơi nước ở áp suất 12 bar, thân thiện với môi trường, giảm chi phí kết cấu móng tới 15%.",
    badge: "Tiết Kiệm Kết Cấu",
    features: [
      "Chống thấm mao dẫn cực thấp",
      "Không sinh khí độc khi gặp hỏa hoạn",
      "Thi công bằng vữa chuyên dụng mạch mỏng 2-3mm",
      "Cắt, tạo rãnh điện nước dễ dàng bằng dụng cụ tay"
    ],
    specs: [
      { label: "Trọng lượng", value: "Khoảng 650 kg/m³" },
      { label: "Hệ số dẫn nhiệt", value: "0.11 W/m.K" },
      { label: "Độ chịu lửa", value: "Class A1 Không cháy" }
    ]
  }
];

export const showroomsData: Showroom[] = [
  {
    id: "langson-hq",
    city: "langson",
    cityName: "Lạng Sơn",
    name: "Trung Tâm Trưng Bày & Phân Phối CKXUANDOAN Lạng Sơn",
    address: "Số 6 Trung Cấp, Mai Pha, TP Lạng Sơn",
    phone: "0205 388 9829",
    hours: "08:00 - 18:00 (Thứ 2 - Chủ Nhật)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.582845353118!2d106.7628!3d21.8385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a51e6b36a1827%3A0x6e288d447a1262d!2zTWFpIFBoYSwgVFAuIEzhuqFuZyBTxqFuLCBM4bqhbmcgU8ahbiwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2svn!4v1710000000000!5m2!1svi!2svn"
  },
  {
    id: "hanoi-hq",
    city: "hanoi",
    cityName: "Hà Nội",
    name: "Showroom CKXUANDOAN Hà Nội",
    address: "Tòa nhà Viglacera, Mễ Trì, Nam Từ Liêm, Hà Nội",
    phone: "024 3553 6688",
    hours: "08:00 - 18:00 (Thứ 2 - Chủ Nhật)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6293370966954!2d105.78310867603358!3d21.00748928851086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aca61c572a91%3A0x6a1fbe7b1e847752!2zVMOyYSBuaMOgIFZpZ2xhY2VyYQ!5e0!3m2!1svi!2svn!4v1710000000000!5m2!1svi!2svn"
  },
  {
    id: "hcm-center",
    city: "hcm",
    cityName: "TP. Hồ Chí Minh",
    name: "Center Showroom TP. Hồ Chí Minh",
    address: "Số 218 Tô Hiến Thành, Phường 15, Quận 10, TP. Hồ Chí Minh",
    phone: "028 3863 3428",
    hours: "08:00 - 19:30 (Thứ 2 - Chủ Nhật)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4646738941014!2d106.66060197586867!3d10.775677859207036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edce413c6b5%3A0x6424e4d588ce2b33!2zMjE4IFTDtCBIaeG6v24gVGjDoG5oLCBQaMaw4budbmcgMTUsIFF14bqtbiAxMCwgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1svi!2svn!4v1710000000001!5m2!1svi!2svn"
  },
  {
    id: "danang-central",
    city: "danang",
    cityName: "Đà Nẵng",
    name: "Showroom CKXUANDOAN Đà Nẵng",
    address: "Số 452 Nguyễn Hữu Thọ, Phường Khuê Trung, Q. Cẩm Lệ, TP. Đà Nẵng",
    phone: "0236 3688 989",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.3414571735956!2d108.20337897581177!3d16.04778103998967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219be253d5a49%3A0xd68079815049a4e3!2zNDUyIE5ndXnhu4VuIEjhu691IFRo4buNLCBLaHXDqiBUcnVuZywgQ-G6qW0gTOG7hywgxJDDoCBO4bq1bmcsIFZpZXRuYW0!5e0!3m2!1svi!2svn!4v1710000000002!5m2!1svi!2svn"
  },
  {
    id: "haiphong-center",
    city: "haiphong",
    cityName: "Hải Phòng",
    name: "Showroom CKXUANDOAN Hải Phòng",
    address: "Số 268 Lê Hồng Phong, Đông Khê, Ngô Quyền, Hải Phòng",
    phone: "0225 3822 199",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.324294821102!2d106.6961!3d20.8465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7af2a5555555%3A0x1!2zSMOjaSBQaMOybmc!5e0!3m2!1svi!2svn!4v1710000000003!5m2!1svi!2svn"
  },
  {
    id: "cantho-west",
    city: "cantho",
    cityName: "Cần Thơ",
    name: "Showroom CKXUANDOAN Miền Tây",
    address: "Số 88 Đường 3/2, Phường Hưng Lợi, Quận Ninh Kiều, Cần Thơ",
    phone: "0292 3738 889",
    hours: "08:00 - 18:00 (Thứ 2 - Thứ 7)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.84752718224!2d105.765!3d10.025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0629f55555555%3A0x1!2zQ-G6p24gVGjGoQ!5e0!3m2!1svi!2svn!4v1710000000004!5m2!1svi!2svn"
  }
];

export const cataloguesData: Catalogue[] = [
  {
    id: "cat-vasta-2026",
    title: "Vasta Stone - Bộ Sưu Tập Đá Nung Kết Ý 2026",
    category: "Đá Nung Kết",
    pages: 68,
    fileSize: "18.4 MB",
    coverImg: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=400&auto=format&fit=crop",
    downloadUrl: "#download"
  },
  {
    id: "cat-sanitary-2026",
    title: "Catalogue Thiết Bị Vệ Sinh & Sen Vòi Thông Minh CKXUANDOAN",
    category: "Sứ Vệ Sinh",
    pages: 112,
    fileSize: "24.6 MB",
    coverImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop",
    downloadUrl: "#download"
  },
  {
    id: "cat-glass-2026",
    title: "Giải Pháp Kính Tiết Kiệm Năng Lượng Low-E & Solar Control",
    category: "Kính Xây Dựng",
    pages: 44,
    fileSize: "12.8 MB",
    coverImg: "https://images.unsplash.com/photo-1508873696983-2df515122519?q=80&w=400&auto=format&fit=crop",
    downloadUrl: "#download"
  },
  {
    id: "cat-alc-2026",
    title: "Tấm Panel & Khối Bê Tông Khí Chưng Áp ALC CKXUANDOAN",
    category: "Bê Tông ALC",
    pages: 56,
    fileSize: "15.1 MB",
    coverImg: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=400&auto=format&fit=crop",
    downloadUrl: "#download"
  }
];
