'use client';

import Link from 'next/link';
import Image from 'next/image';

const processSteps = [
  {
    number: 1,
    title: 'Step 1 Title Here',
    description: 'Edit this text to describe your first step in the house rental locating process.',
  },
  {
    number: 2,
    title: 'Step 2 Title Here',
    description: 'Edit this text to describe your second step in the house rental locating process.',
  },
  {
    number: 3,
    title: 'Step 3 Title Here',
    description: 'Edit this text to describe your final step in helping clients find rental homes.',
  },
];

const featuredHouses = [
  {
    id: 'house-1',
    name: 'House Name Here',
    city: 'Dallas',
    price: '$X,XXX',
    beds: 'X Beds',
    baths: 'X Baths',
    sqft: 'X,XXX sqft',
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80',
    smartMoveHighlights: 'Brief description highlighting why this rental home is featured. Mention key benefits, yard space, or what makes it stand out.',
  },
  {
    id: 'house-2',
    name: 'House Name Here',
    city: 'Plano',
    price: '$X,XXX',
    beds: 'X Beds',
    baths: 'X Baths',
    sqft: 'X,XXX sqft',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    smartMoveHighlights: 'Brief description highlighting why this rental home is featured. Mention key benefits, yard space, or what makes it stand out.',
  },
  {
    id: 'house-3',
    name: 'House Name Here',
    city: 'Frisco',
    price: '$X,XXX',
    beds: 'X Beds',
    baths: 'X Baths',
    sqft: 'X,XXX sqft',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
    smartMoveHighlights: 'Brief description highlighting why this rental home is featured. Mention key benefits, yard space, or what makes it stand out.',
  },
  {
    id: 'house-4',
    name: 'House Name Here',
    city: 'Fort Worth',
    price: '$X,XXX',
    beds: 'X Beds',
    baths: 'X Baths',
    sqft: 'X,XXX sqft',
    imageUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&q=80',
    smartMoveHighlights: 'Brief description highlighting why this rental home is featured. Mention key benefits, yard space, or what makes it stand out.',
  },
  {
    id: 'house-5',
    name: 'House Name Here',
    city: 'Richardson',
    price: '$X,XXX',
    beds: 'X Beds',
    baths: 'X Baths',
    sqft: 'X,XXX sqft',
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80',
    smartMoveHighlights: 'Brief description highlighting why this rental home is featured. Mention key benefits, yard space, or what makes it stand out.',
  },
];

const neighborhoods = [
  {
    id: 'uptown-dallas',
    name: 'Uptown Dallas',
    city: 'Dallas',
    description: 'Edit this description to highlight rental homes in Uptown - walkability, urban living, access to amenities.',
    avgRent: '$2,500 - $4,000',
    topAmenities: ['Urban Living', 'Walkable', 'Restaurants', 'Entertainment'],
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80',
  },
  {
    id: 'plano',
    name: 'Plano',
    city: 'Plano',
    description: 'Edit this description for Plano rental homes - family neighborhoods, excellent schools, spacious yards, suburban comfort.',
    avgRent: '$2,200 - $3,500',
    topAmenities: ['Great Schools', 'Family-Friendly', 'Yards', 'Safe'],
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
  },
  {
    id: 'frisco',
    name: 'Frisco',
    city: 'Frisco',
    description: 'Edit this description for Frisco rental homes - newer constructions, modern amenities, family-oriented communities.',
    avgRent: '$2,400 - $3,800',
    topAmenities: ['New Homes', 'Modern', 'Sports', 'Growing'],
    imageUrl: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=1200&q=80',
  },
  {
    id: 'fort-worth',
    name: 'Fort Worth',
    city: 'Fort Worth',
    description: 'Edit this description for Fort Worth rental homes - character homes, larger lots, better value, western charm.',
    avgRent: '$1,800 - $3,000',
    topAmenities: ['Affordable', 'Large Lots', 'Character', 'Space'],
    imageUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&q=80',
  },
  {
    id: 'richardson',
    name: 'Richardson',
    city: 'Richardson',
    description: 'Edit this description for Richardson rental homes - central location, diverse neighborhoods, convenient access.',
    avgRent: '$2,000 - $3,200',
    topAmenities: ['Central', 'Diverse', 'Convenient', 'Established'],
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
  },
  {
    id: 'arlington',
    name: 'Arlington',
    city: 'Arlington',
    description: 'Edit this description for Arlington rental homes - entertainment proximity, family neighborhoods, good value.',
    avgRent: '$1,700 - $2,800',
    topAmenities: ['Entertainment', 'Family Areas', 'Value', 'Central'],
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
  },
  {
    id: 'addison',
    name: 'Addison',
    city: 'Addison',
    description: 'Edit this description for Addison rental homes - urban convenience, smaller community feel, central location.',
    avgRent: '$2,300 - $3,600',
    topAmenities: ['Central', 'Urban', 'Dining', 'Convenient'],
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
  },
  {
    id: 'irving',
    name: 'Irving',
    city: 'Irving',
    description: 'Edit this description for Irving rental homes - diverse neighborhoods, near airport, corporate proximity, value.',
    avgRent: '$1,900 - $3,100',
    topAmenities: ['Diverse', 'Airport', 'Value', 'Corporate'],
    imageUrl: 'https://images.unsplash.com/photo-1502672260066-6bc09da3c8fe?w=1200&q=80',
  },
];

export default function HousesPage() {
  return (
    <>
      <section className="py-16 md:py-20 bg-white">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-12 text-center">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step) => (
                <div key={step.number} className="text-center p-6">
                  <div className="w-16 h-16 bg-primary-300 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-display font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-neutral-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 font-body">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6 leading-tight">
              Houses of the Week!
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 font-body">
              Featured rental homes across the Dallas-Fort Worth metroplex. Updated weekly with exceptional properties.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {featuredHouses.map((house, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={house.id}
                  className={`flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer`}
                >
                  <div className="lg:w-5/12 relative h-80 lg:h-auto">
                    <Image
                      src={house.imageUrl}
                      alt={house.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-2xl font-display font-bold text-white mb-1">
                        {house.name}
                      </h3>
                      <p className="text-neutral-200 font-sans text-sm">
                        {house.city}
                      </p>
                    </div>
                  </div>

                  <div className="lg:w-7/12 p-8 flex flex-col justify-center">
                    <div className="mb-6">
                      <div className="grid grid-cols-2 gap-4 text-neutral-700 mb-4">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-sans font-semibold">{house.price}/mo</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                          <span className="font-sans font-semibold">{house.beds}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="font-sans font-semibold">{house.baths}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                          <span className="font-sans font-semibold">{house.sqft}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-display font-bold text-primary-300 mb-3">
                        Smart Move Highlights
                      </h4>
                      <p className="text-neutral-700 font-body leading-relaxed">
                        {house.smartMoveHighlights}
                      </p>
                    </div>

                    <div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-neutral-50 text-neutral-900 px-6 py-3 rounded-md font-sans font-semibold hover:bg-primary-300 hover:text-neutral-50 transition-all duration-300 border-2 border-neutral-300 hover:border-primary-300"
                      >
                        Learn More
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-8">
              Shop by Budget
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/contact"
                className="group bg-neutral-50 p-6 rounded-lg border-2 border-neutral-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-primary-300 mb-2">
                    Under $2,000
                  </div>
                  <p className="text-neutral-600 font-body mb-4">
                    Affordable rental homes across DFW
                  </p>
                  <span className="text-sm font-sans font-semibold text-primary-300 group-hover:translate-x-1 inline-flex items-center gap-2 transition-transform duration-300">
                    View Options
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>

              <Link
                href="/contact"
                className="group bg-neutral-50 p-6 rounded-lg border-2 border-neutral-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-primary-300 mb-2">
                    $2,000 - $3,500
                  </div>
                  <p className="text-neutral-600 font-body mb-4">
                    Quality homes in prime locations
                  </p>
                  <span className="text-sm font-sans font-semibold text-primary-300 group-hover:translate-x-1 inline-flex items-center gap-2 transition-transform duration-300">
                    View Options
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>

              <Link
                href="/contact"
                className="group bg-neutral-50 p-6 rounded-lg border-2 border-neutral-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-primary-300 mb-2">
                    $3,500+
                  </div>
                  <p className="text-neutral-600 font-body mb-4">
                    Luxury rental homes with premium features
                  </p>
                  <span className="text-sm font-sans font-semibold text-primary-300 group-hover:translate-x-1 inline-flex items-center gap-2 transition-transform duration-300">
                    View Options
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-6">
                Shop by Neighborhood
              </h2>
              <p className="text-xl text-neutral-600 font-body">
                Explore rental homes in the best areas across the Dallas-Fort Worth metroplex.
              </p>
            </div>

            <div className="space-y-16">
              {neighborhoods.map((neighborhood, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={neighborhood.id}
                    className={`flex flex-col ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } gap-8 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300`}
                  >
                    <div className="lg:w-5/12 relative h-80 lg:h-auto">
                      <Image
                        src={neighborhood.imageUrl}
                        alt={neighborhood.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <h3 className="text-2xl font-display font-bold text-white mb-1">
                          {neighborhood.name}
                        </h3>
                        <p className="text-neutral-200 font-sans text-sm">
                          {neighborhood.city}
                        </p>
                      </div>
                    </div>

                    <div className="lg:w-7/12 p-8 flex flex-col justify-center">
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-4">
                          <svg className="w-5 h-5 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-sans font-semibold text-neutral-700">
                            Average Rent: {neighborhood.avgRent}
                          </span>
                        </div>
                        
                        <p className="text-neutral-700 font-body leading-relaxed mb-4">
                          {neighborhood.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {neighborhood.topAmenities.map((amenity, i) => (
                            <span
                              key={i}
                              className="inline-block bg-primary-300 text-white px-3 py-1 rounded-full text-sm font-sans font-semibold"
                            >
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 bg-neutral-50 text-neutral-900 px-6 py-3 rounded-md font-sans font-semibold hover:bg-primary-300 hover:text-neutral-50 transition-all duration-300 border-2 border-neutral-300 hover:border-primary-300"
                        >
                          View Houses in {neighborhood.name}
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-neutral-900 to-neutral-800 text-neutral-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Find Your Perfect Rental Home?
            </h2>
            <p className="text-xl font-body mb-8 text-neutral-300">
              Let's start your house search today. Professional guidance every step of the way.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-neutral-50 text-neutral-900 px-10 py-4 rounded-lg text-lg font-sans font-semibold hover:bg-primary-300 hover:text-neutral-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
