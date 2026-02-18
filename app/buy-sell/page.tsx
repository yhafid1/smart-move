'use client';

import Link from 'next/link';
import Image from 'next/image';

const whatWeBring = [
  {
    title: 'Expertise',
    description: 'Edit this text to describe your expertise. Explain your knowledge of the DFW market, years of experience, and what sets you apart.',
  },
  {
    title: 'Dedication',
    description: 'Edit this text to describe your dedication. Explain how you go above and beyond for clients and your commitment to finding the perfect home.',
  },
  {
    title: 'Honesty',
    description: 'Edit this text to describe your honesty. Explain your transparent approach and how you always put clients first.',
  },
];

const featuredHomes = [
  {
    id: 'home-1',
    name: 'Home Name Here',
    city: 'Dallas',
    price: '$XXX,XXX',
    beds: 'X Beds',
    baths: 'X Baths',
    sqft: 'X,XXX sqft',
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80',
    smartMoveHighlights: 'Brief description highlighting why this home is featured. Mention key benefits, unique features, or what makes it stand out.',
  },
  {
    id: 'home-2',
    name: 'Home Name Here',
    city: 'Plano',
    price: '$XXX,XXX',
    beds: 'X Beds',
    baths: 'X Baths',
    sqft: 'X,XXX sqft',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    smartMoveHighlights: 'Brief description highlighting why this home is featured. Mention key benefits, unique features, or what makes it stand out.',
  },
  {
    id: 'home-3',
    name: 'Home Name Here',
    city: 'Frisco',
    price: '$XXX,XXX',
    beds: 'X Beds',
    baths: 'X Baths',
    sqft: 'X,XXX sqft',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
    smartMoveHighlights: 'Brief description highlighting why this home is featured. Mention key benefits, unique features, or what makes it stand out.',
  },
  {
    id: 'home-4',
    name: 'Home Name Here',
    city: 'Fort Worth',
    price: '$XXX,XXX',
    beds: 'X Beds',
    baths: 'X Baths',
    sqft: 'X,XXX sqft',
    imageUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&q=80',
    smartMoveHighlights: 'Brief description highlighting why this home is featured. Mention key benefits, unique features, or what makes it stand out.',
  },
  {
    id: 'home-5',
    name: 'Home Name Here',
    city: 'Richardson',
    price: '$XXX,XXX',
    beds: 'X Beds',
    baths: 'X Baths',
    sqft: 'X,XXX sqft',
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80',
    smartMoveHighlights: 'Brief description highlighting why this home is featured. Mention key benefits, unique features, or what makes it stand out.',
  },
];

export default function HomesPage() {
  return (
    <>
      <section className="py-16 md:py-20 bg-white">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-12 text-center">
              What We Bring
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whatWeBring.map((item) => (
                <div key={item.title} className="bg-neutral-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-display font-bold text-primary-300 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-neutral-700 font-body leading-relaxed">
                    {item.description}
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
              Featured Homes
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 font-body">
              Handpicked homes across the Dallas-Fort Worth metroplex. Updated with exceptional properties and opportunities.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {featuredHomes.map((home, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={home.id}
                  className={`flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer`}
                >
                  <div className="lg:w-5/12 relative h-80 lg:h-auto">
                    <Image
                      src={home.imageUrl}
                      alt={home.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-2xl font-display font-bold text-white mb-1">
                        {home.name}
                      </h3>
                      <p className="text-neutral-200 font-sans text-sm">
                        {home.city}
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
                          <span className="font-sans font-semibold">{home.price}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                          <span className="font-sans font-semibold">{home.beds}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="font-sans font-semibold">{home.baths}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                          <span className="font-sans font-semibold">{home.sqft}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-display font-bold text-primary-300 mb-3">
                        Smart Move Highlights
                      </h4>
                      <p className="text-neutral-700 font-body leading-relaxed">
                        {home.smartMoveHighlights}
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

      <section className="py-16 bg-gradient-to-r from-neutral-900 to-neutral-800 text-neutral-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl font-body mb-8 text-neutral-300">
              Let's start your home search today. Professional guidance every step of the way.
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
