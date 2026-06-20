export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  originalPrice?: string;
  price: string;
  packSize: string;
  ply: number | string;
  accentBg: string;
  badge?: string;
  description: string;
}

export interface StatItem {
  number: string;
  label: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating: number;
  avatarSeed: string;
}

export interface CategoryCard {
  id: string;
  name: string;
  tagline: string;
  packSizeInfo: string;
  image: string;
  startingPrice: string;
}
