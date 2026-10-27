export type ProductCategory = 'all' | 'tile' | 'sanitary' | 'glass' | 'concrete';

export interface Product {
  id: number;
  name: string;
  category: 'tile' | 'sanitary' | 'glass' | 'concrete';
  code: string;
  size: string;
  img: string;
  desc: string;
  badge: string;
  features?: string[];
  specs?: { label: string; value: string }[];
}

export interface Showroom {
  id: string;
  city: 'langson' | 'hanoi' | 'hcm' | 'danang' | 'haiphong' | 'cantho';
  cityName: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapEmbedUrl: string;
}

export interface Catalogue {
  id: string;
  title: string;
  category: string;
  pages: number;
  fileSize: string;
  coverImg: string;
  downloadUrl: string;
}

export type Language = 'VI' | 'EN';
