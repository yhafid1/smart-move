import Image from 'next/image';
import Link from 'next/link';
import { Apartment } from '@/data/types';
interface ApartmentCardProps {
  apartment: Apartment;
}
export default function ApartmentCard({ apartment }: ApartmentCardProps) {
  return (
    <div className="card group animate-slide-up">
      {}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={apartment.imageUrl}
          alt={apartment.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {apartment.featured && (
          <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      {}
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-neutral-900 mb-2">
          {apartment.name}
        </h3>
        <div className="flex items-center text-sm text-neutral-600 mb-3">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{apartment.location}, {apartment.city}</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold text-primary-700">{apartment.priceRange}</span>
          <span className="text-sm text-neutral-600">{apartment.bedrooms}</span>
        </div>
        <p className="text-sm text-neutral-700 mb-4 line-clamp-3">
          {apartment.description}
        </p>
        {}
        <div className="flex flex-wrap gap-2 mb-4">
          {apartment.amenities.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="text-xs bg-neutral-100 text-neutral-700 px-2 py-1 rounded"
            >
              {amenity}
            </span>
          ))}
          {apartment.amenities.length > 3 && (
            <span className="text-xs text-neutral-500">
              +{apartment.amenities.length - 3} more
            </span>
          )}
        </div>
        {}
        <Link href="/contact" className="btn-primary w-full text-center">
          Learn More
        </Link>
      </div>
    </div>
  );
}
