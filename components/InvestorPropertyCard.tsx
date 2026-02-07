import Image from 'next/image';
import Link from 'next/link';
import { InvestorProperty } from '@/data/types';
interface InvestorPropertyCardProps {
  property: InvestorProperty;
}
export default function InvestorPropertyCard({ property }: InvestorPropertyCardProps) {
  const getTypeColor = (type: InvestorProperty['investmentType']) => {
    const colors = {
      'Value-Add': 'bg-blue-100 text-blue-800',
      'Turnkey': 'bg-green-100 text-green-800',
      'Development': 'bg-purple-100 text-purple-800',
      'Premium': 'bg-amber-100 text-amber-800',
    };
    return colors[type];
  };
  return (
    <div className="card group animate-slide-up">
      {}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={property.imageUrl}
          alt={property.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute top-4 right-4 ${getTypeColor(property.investmentType)} text-xs font-semibold px-3 py-1 rounded-full`}>
          {property.investmentType}
        </div>
      </div>
      {}
      <div className="p-6">
        <h3 className="text-2xl font-display font-bold text-neutral-900 mb-2">
          {property.name}
        </h3>
        <div className="flex items-center text-sm text-neutral-600 mb-4">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{property.location}, {property.city}</span>
        </div>
        {}
        <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-neutral-200">
          <div>
            <div className="text-xs text-neutral-500 mb-1">Price</div>
            <div className="text-sm font-bold text-primary-700">{property.priceRange}</div>
          </div>
          <div>
            <div className="text-xs text-neutral-500 mb-1">Units</div>
            <div className="text-sm font-bold text-neutral-900">{property.units}</div>
          </div>
          {property.capRate && (
            <div>
              <div className="text-xs text-neutral-500 mb-1">Cap Rate</div>
              <div className="text-sm font-bold text-green-700">{property.capRate}</div>
            </div>
          )}
        </div>
        <p className="text-sm text-neutral-700 mb-4">
          {property.description}
        </p>
        {}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-neutral-900 mb-2 uppercase tracking-wide">
            Investment Highlights
          </h4>
          <ul className="space-y-1">
            {property.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="text-xs text-neutral-600 flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        {}
        <Link href="/contact" className="btn-primary w-full text-center">
          Request Details
        </Link>
      </div>
    </div>
  );
}
