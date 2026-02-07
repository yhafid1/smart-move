export interface Apartment {
  id: string;
  name: string;
  location: string;
  city: string;
  priceRange: string;
  bedrooms: string;
  amenities: string[];
  description: string;
  imageUrl: string;
  featured?: boolean;
}
export interface InvestorProperty {
  id: string;
  name: string;
  location: string;
  city: string;
  priceRange: string;
  capRate?: string;
  units: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  investmentType: 'Value-Add' | 'Turnkey' | 'Development' | 'Premium';
}
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
