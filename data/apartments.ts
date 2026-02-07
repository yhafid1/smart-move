import { Apartment } from './types';
/**
 * APARTMENTS DATA FILE
 * 
 * This file contains all apartment listings for the "Apartments of the Week" section.
 * 
 * HOW TO UPDATE LISTINGS:
 * 1. Edit the apartments array below
 * 2. Set featured: true for listings you want to highlight on the home page (max 3-4 recommended)
 * 3. Add new listings by copying the template below
 * 4. Commit changes to GitHub - Vercel will auto-deploy
 * 
 * LISTING TEMPLATE:
 * {
 *   id: 'unique-id',
 *   name: 'Apartment Name',
 *   location: 'Neighborhood/Area',
 *   city: 'City, TX',
 *   priceRange: '$1,200 - $2,000',
 *   bedrooms: '1-2 Beds',
 *   amenities: ['Pool', 'Fitness Center', 'Pet Friendly'],
 *   description: 'Brief description highlighting key features',
 *   imageUrl: 'https://placehold.co/800x600/e7cfb8/525252?text=Apartment+Name',
 *   featured: true, 
 * }
 */
export const apartments: Apartment[] = [
  {
    id: 'skyline-uptown',
    name: 'Skyline Towers',
    location: 'Uptown Dallas',
    city: 'Dallas, TX',
    priceRange: '$1,500 - $2,800',
    bedrooms: '1-3 Beds',
    amenities: ['Rooftop Pool', 'Fitness Center', '24/7 Concierge', 'Pet Friendly', 'Parking Garage'],
    description: 'Luxury high-rise living in the heart of Uptown. Walking distance to restaurants, entertainment, and the Katy Trail. Floor-to-ceiling windows with stunning city views.',
    imageUrl: 'https://placehold.co/800x600/e7cfb8/525252?text=Skyline+Towers',
    featured: true,
  },
  {
    id: 'legacy-west',
    name: 'Legacy West Residences',
    location: 'Legacy West',
    city: 'Plano, TX',
    priceRange: '$1,800 - $3,200',
    bedrooms: '1-2 Beds',
    amenities: ['Resort-Style Pool', 'Smart Home Tech', 'Dog Park', 'Business Center', 'Valet Service'],
    description: 'Modern apartments adjacent to The Shops at Legacy. Premium finishes, smart home features, and direct access to dining and shopping.',
    imageUrl: 'https://placehold.co/800x600/d9b08f/525252?text=Legacy+West',
    featured: true,
  },
  {
    id: 'bishop-arts',
    name: 'The Bishop',
    location: 'Bishop Arts District',
    city: 'Dallas, TX',
    priceRange: '$1,300 - $2,200',
    bedrooms: '1-2 Beds',
    amenities: ['Rooftop Lounge', 'Bike Storage', 'Pet Spa', 'Coffee Bar', 'Co-Working Space'],
    description: 'Boutique community in trendy Bishop Arts. Walk to galleries, local restaurants, and unique shops. Industrial-chic design with exposed brick and modern finishes.',
    imageUrl: 'https://placehold.co/800x600/ca8f65/525252?text=The+Bishop',
    featured: true,
  },
  {
    id: 'southlake-town',
    name: 'Southlake Town Square Apartments',
    location: 'Southlake Town Square',
    city: 'Southlake, TX',
    priceRange: '$1,900 - $3,500',
    bedrooms: '1-3 Beds',
    amenities: ['Infinity Pool', 'Wine Room', 'Guest Suites', 'Gourmet Kitchens', 'Private Balconies'],
    description: 'Upscale living at Southlake Town Square. Steps from high-end shopping and dining. Award-winning schools and family-friendly community.',
    imageUrl: 'https://placehold.co/800x600/b8794e/525252?text=Southlake+Square',
    featured: false,
  },
  {
    id: 'deep-ellum-lofts',
    name: 'Deep Ellum Lofts',
    location: 'Deep Ellum',
    city: 'Dallas, TX',
    priceRange: '$1,400 - $2,500',
    bedrooms: 'Studio-2 Beds',
    amenities: ['Urban Garden', 'Art Gallery', 'Music Studios', 'Bike Repair Shop', 'Pet Friendly'],
    description: 'Converted warehouse lofts in Dallas\' most artistic neighborhood. High ceilings, exposed ductwork, and creative community. Live music and nightlife at your doorstep.',
    imageUrl: 'https://placehold.co/800x600/9d6542/525252?text=Deep+Ellum+Lofts',
    featured: false,
  },
  {
    id: 'frisco-square',
    name: 'Frisco Square Flats',
    location: 'Frisco Square',
    city: 'Frisco, TX',
    priceRange: '$1,600 - $2,700',
    bedrooms: '1-2 Beds',
    amenities: ['Saltwater Pool', 'Outdoor Kitchen', 'Tech Lounge', 'Yoga Studio', 'Package Concierge'],
    description: 'Modern apartments in Frisco\'s urban center. Walk to restaurants, movie theater, and events. Top-rated schools and family amenities nearby.',
    imageUrl: 'https://placehold.co/800x600/7f4f39/525252?text=Frisco+Square',
    featured: false,
  },
];
export const getFeaturedApartments = (): Apartment[] => {
  return apartments.filter(apt => apt.featured);
};
export const getAllApartments = (): Apartment[] => {
  return apartments;
};
