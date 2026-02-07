'use client';
import Link from 'next/link';
import Image from 'next/image';
export default function HomePage() {
  return (
    <>
      {}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80"
            alt="Modern DFW Housing"
            fill
            className="object-cover scale-105 animate-slow-zoom"
            priority
          />
          {}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
        {}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-neutral-50 mb-6 tracking-tight leading-none">
            Smart Move DFW
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-primary-300 font-body font-light mb-10 tracking-wide italic">
            Make the Smart Move
          </p>
          <button
            onClick={() => {
              document.getElementById('services')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
            className="bg-neutral-50 text-neutral-900 px-10 py-4 rounded-lg text-lg font-sans font-semibold hover:bg-primary-300 hover:text-neutral-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Explore Services
          </button>
        </div>
        {}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            className="w-6 h-6 text-white opacity-75" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </section>
      {}
      <section id="services" className="py-20 md:py-32 bg-neutral-50">
        <div className="section-container">
          {}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-neutral-900 mb-6 leading-tight">
              Our Services
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto font-body">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </div>
          {}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {}
            <Link 
              href="/apartments" 
              className="group relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
            >
              {}
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
                  alt="Modern Apartments"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
              </div>
              {}
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-3 leading-tight">
                  Apartment Locating
                </h3>
                <p className="text-lg md:text-xl text-neutral-200 mb-4 line-clamp-2 font-body">
                  Discover your perfect apartment in the DFW metroplex. Free locating service with access to exclusive listings.
                </p>
                <div className="flex items-center text-neutral-50 font-sans font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Browse Apartments
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
            {}
            <Link 
              href="/homes" 
              className="group relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up animate-delay-100"
            >
              {}
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80"
                  alt="Residential Homes"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
              </div>
              {}
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-3 leading-tight">
                  Residential Homes
                </h3>
                <p className="text-lg md:text-xl text-neutral-200 mb-4 line-clamp-2 font-body">
                  From cozy townhomes to spacious family houses. Your dream home awaits in DFW's finest neighborhoods.
                </p>
                <div className="flex items-center text-neutral-50 font-sans font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  View Homes
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
            {}
            <Link 
              href="/investors" 
              className="group relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up animate-delay-200"
            >
              {}
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="Investment Properties"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
              </div>
              {}
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-3 leading-tight">
                  Investor's Corner
                </h3>
                <p className="text-lg md:text-xl text-neutral-200 mb-4 line-clamp-2 font-body">
                  Curated investment opportunities with strong returns. Multi-family properties across the DFW metroplex.
                </p>
                <div className="flex items-center text-neutral-50 font-sans font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Explore Investments
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
