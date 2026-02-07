'use client';
import Link from 'next/link';
import Image from 'next/image';
const featuredApartments = [
  {
    id: 'apt-1',
    name: 'Apartment Name Here',
    city: 'Dallas',
    price: '$1,XXX - $X,XXX',
    beds: '1-2 Beds',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    smartMoveHighlights: 'Brief description highlighting why this property is featured. Mention key benefits, current specials, or what makes it stand out.',
  },
  {
    id: 'apt-2',
    name: 'Apartment Name Here',
    city: 'Plano',
    price: '$1,XXX - $X,XXX',
    beds: '1-3 Beds',
    imageUrl: 'https://images.unsplash.com/photo-1502672260066-6bc09da3c8fe?w=1200&q=80',
    smartMoveHighlights: 'Brief description highlighting why this property is featured. Mention key benefits, current specials, or what makes it stand out.',
  },
  {
    id: 'apt-3',
    name: 'Apartment Name Here',
    city: 'Frisco',
    price: '$1,XXX - $X,XXX',
    beds: '2-3 Beds',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80',
    smartMoveHighlights: 'Brief description highlighting why this property is featured. Mention key benefits, current specials, or what makes it stand out.',
  },
  {
    id: 'apt-4',
    name: 'Apartment Name Here',
    city: 'Fort Worth',
    price: '$1,XXX - $X,XXX',
    beds: '1-2 Beds',
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
    smartMoveHighlights: 'Brief description highlighting why this property is featured. Mention key benefits, current specials, or what makes it stand out.',
  },
  {
    id: 'apt-5',
    name: 'Apartment Name Here',
    city: 'Richardson',
    price: '$1,XXX - $X,XXX',
    beds: '1-3 Beds',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
    smartMoveHighlights: 'Brief description highlighting why this property is featured. Mention key benefits, current specials, or what makes it stand out.',
  },
];
export default function ApartmentsPage() {
  return (
    <>
      {}
      <section className="relative bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-neutral-900 mb-6 leading-tight">
              Featured Apartments
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 font-body mb-8">
              This week's handpicked apartments across the Dallas-Fort Worth metroplex. 
              Updated weekly with the best deals and newest openings.
            </p>
          </div>
        </div>
      </section>
      {}
      <section className="py-16 bg-neutral-50">
        <div className="section-container">
          <div className="max-w-6xl mx-auto space-y-16">
            {featuredApartments.map((apartment, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={apartment.id}
                  className={`flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 bg-neutral-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300`}
                >
                  {}
                  <div className="lg:w-5/12 relative h-80 lg:h-auto">
                    <Image
                      src={apartment.imageUrl}
                      alt={apartment.name}
                      fill
                      className="object-cover"
                    />
                    {}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-2xl font-display font-bold text-white mb-1">
                        {apartment.name}
                      </h3>
                      <p className="text-neutral-200 font-sans text-sm">
                        {apartment.city}
                      </p>
                    </div>
                  </div>
                  {}
                  <div className="lg:w-7/12 p-8 flex flex-col justify-center">
                    {}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-4 text-neutral-700 mb-4">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-sans font-semibold">{apartment.price}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                          <span className="font-sans font-semibold">{apartment.beds}</span>
                        </div>
                      </div>
                    </div>
                    {}
                    <div className="mb-6">
                      <h4 className="text-lg font-display font-bold text-primary-300 mb-3">
                        Smart Move Highlights
                      </h4>
                      <p className="text-neutral-700 font-body leading-relaxed">
                        {apartment.smartMoveHighlights}
                      </p>
                    </div>
                    {}
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
      {}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-8 text-center">
              How Our Service Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-300 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display font-bold">1</span>
                </div>
                <h3 className="text-xl font-display font-bold text-neutral-900 mb-2">
                  Tell Us What You Need
                </h3>
                <p className="text-neutral-600 font-body">
                  Share your preferences, budget, and ideal location with us.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-300 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display font-bold">2</span>
                </div>
                <h3 className="text-xl font-display font-bold text-neutral-900 mb-2">
                  We Find Perfect Matches
                </h3>
                <p className="text-neutral-600 font-body">
                  Access exclusive listings and special promotions not available online.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-300 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display font-bold">3</span>
                </div>
                <h3 className="text-xl font-display font-bold text-neutral-900 mb-2">
                  Move In With Ease
                </h3>
                <p className="text-neutral-600 font-body">
                  We handle tours, applications, and negotiations. Completely free for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16 bg-gradient-to-r from-neutral-900 to-neutral-800 text-neutral-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Find Your Perfect Apartment?
            </h2>
            <p className="text-xl font-body mb-8 text-neutral-300">
              Let's start your apartment search today. Free consultation, no obligation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-neutral-50 text-neutral-900 px-10 py-4 rounded-lg text-lg font-sans font-semibold hover:bg-primary-300 hover:text-neutral-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
