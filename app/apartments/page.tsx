'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { allApartments } from '@/data/apartments';

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('revealed'); }); },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const elements = ref.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const processSteps = [
  { number: '01', title: 'Tell Us What You Need', description: 'Share your budget, preferred neighborhoods, move-in date, and must-haves. The more detail, the better we can match you.' },
  { number: '02', title: 'We Find Your Options', description: 'We search our network of 150+ communities, including exclusive deals and move-in specials not listed online.' },
  { number: '03', title: 'Move In With Ease', description: 'We schedule tours, assist with applications, and negotiate on your behalf. Completely free from start to finish.' },
];

const neighborhoods = [
  { id: 'uptown-dallas', name: 'Uptown Dallas', city: 'Dallas', description: 'Uptown is Dallas\'s most walkable urban neighborhood, centered on McKinney Ave and the Katy Trail. Young professionals flock here for a thriving dining scene, boutique retail, and nightlife. DART rail access makes car-free living possible. Expect premium pricing with an unmatched urban lifestyle.', avgRent: '$1,800 - $2,500', topAmenities: ['Walkable', 'Nightlife', 'Restaurants', 'Shopping'], imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80' },
  { id: 'plano', name: 'Plano', city: 'Plano', description: 'Consistently ranked one of the safest and most livable cities in America, Plano offers top-rated schools, Fortune 500 corporate headquarters, and pristine suburban neighborhoods. The Legacy West corridor delivers upscale dining, retail, and entertainment. A top destination for families and professionals relocating to North Texas.', avgRent: '$1,400 - $2,200', topAmenities: ['Great Schools', 'Safe', 'Corporate Jobs', 'Family-Friendly'], imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80' },
  { id: 'frisco', name: 'Frisco', city: 'Frisco', description: 'One of the fastest-growing cities in America, Frisco is defined by new construction, world-class sports venues including the Dallas Cowboys Star, and an expanding restaurant scene. Excellent Frisco ISD schools, modern apartment communities, and easy tollway access make it a top choice for families and young professionals.', avgRent: '$1,600 - $2,400', topAmenities: ['New Development', 'Sports', 'Shopping', 'Growing'], imageUrl: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=1200&q=80' },
  { id: 'richardson', name: 'Richardson', city: 'Richardson', description: 'Home to the Telecom Corridor and UT Dallas, Richardson blends suburban comfort with urban walkability at the CityLine mixed-use district. DART rail access, diverse dining along Campbell Road, and a strong tech job market make it ideal for professionals. Top-rated RISD schools and competitive rent prices round it out.', avgRent: '$1,300 - $2,000', topAmenities: ['Central', 'Tech Jobs', 'Diverse', 'Transit'], imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80' },
  { id: 'addison', name: 'Addison', city: 'Addison', description: 'Addison boasts more restaurants per capita than almost any other U.S. city — over 180 dining options packed into just 4.4 square miles. The lively Addison Circle district, year-round outdoor festivals, and central location between Dallas and Plano make it a magnet for young professionals who want energy without downtown prices.', avgRent: '$1,500 - $2,300', topAmenities: ['Walkable', 'Dining', 'Central', 'Young Professionals'], imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80' },
  { id: 'fort-worth', name: 'Fort Worth', city: 'Fort Worth', description: 'Fort Worth offers a distinct Western character found nowhere else in DFW. The Sundance Square entertainment district, world-class Cultural District museums, and the historic Stockyards attract residents who value authenticity. Lower cost of living than Dallas with a strong downtown core, expanding job market, and a genuine community feel.', avgRent: '$1,200 - $1,900', topAmenities: ['Affordable', 'Culture', 'Western Charm', 'Museums'], imageUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&q=80' },
  { id: 'arlington', name: 'Arlington', city: 'Arlington', description: 'Centrally positioned between Dallas and Fort Worth, Arlington is home to AT&T Stadium, Globe Life Field, and Six Flags. A competitive rental market with larger floor plans at lower price points makes it a strong value play. Easy access to DFW Airport, major highways, and both city centers makes it one of the most connected locations in the metroplex.', avgRent: '$1,100 - $1,800', topAmenities: ['Sports', 'Entertainment', 'Affordable', 'Central'], imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80' },
  { id: 'irving', name: 'Irving', city: 'Irving', description: 'Irving sits at the geographic heart of DFW, minutes from the international airport and the upscale Las Colinas urban center. A diverse international community, strong corporate presence, and competitive pricing attract professionals across industries. The Toyota Music Factory adds a lively entertainment district with concerts, restaurants, and nightlife.', avgRent: '$1,200 - $1,900', topAmenities: ['Diverse', 'Airport Access', 'Corporate Jobs', 'Value'], imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80' },
];

const POOLS = ['Dallas', 'North Dallas', 'Plano', 'Richardson', 'Addison'];

function pickOnePerPool(listings: typeof allApartments) {
  const groups: Record<string, typeof allApartments> = {};
  POOLS.forEach(p => { groups[p] = []; });
  listings.forEach(l => { if (groups[l.pool] !== undefined) groups[l.pool].push(l); });
  const picked = POOLS.flatMap(p => {
    const pool = groups[p];
    return pool.length > 0 ? [pool[Math.floor(Math.random() * pool.length)]] : [];
  });
  return picked.sort(() => Math.random() - 0.5);
}

export default function ApartmentsPage() {
  const [featuredApartments] = useState(() => pickOnePerPool(allApartments));
  const pageRef = useScrollReveal();

  return (
    <div ref={pageRef}>
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="reveal mb-16">
            <p className="heading-sm mb-4">How It Works</p>
            <h2 className="heading-lg text-neutral-900 mb-6">Our Process</h2>
            <div className="divider"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {processSteps.map((step, i) => (
              <div key={step.number} className={`reveal reveal-delay-${i + 1}`}>
                <p className="text-6xl font-display font-bold text-neutral-200 mb-4">{step.number}</p>
                <h3 className="text-xl font-display font-bold uppercase tracking-wider text-neutral-900 mb-3">{step.title}</h3>
                <p className="font-body text-neutral-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="section-container">
          <div className="reveal mb-16">
            <p className="heading-sm mb-4">Updated Weekly</p>
            <h2 className="heading-lg text-neutral-900 mb-6">Apartments of the Week</h2>
            <div className="divider"></div>
          </div>
          <div className="space-y-8">
            {featuredApartments.map((apartment, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={apartment.id} className={`reveal flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white overflow-hidden group hover:-translate-y-1 hover:shadow-2xl transition-all duration-500`}>
                  <div className="lg:w-5/12 relative h-72 lg:h-auto">
                    <Image src={apartment.imageUrl} alt={apartment.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-xl font-display font-bold uppercase tracking-wider text-white">{apartment.name}</h3>
                      <p className="text-white/70 text-sm font-body">{apartment.city}</p>
                    </div>
                  </div>
                  <div className="lg:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-6 mb-6">
                      <div>
                        <p className="text-xs font-display uppercase tracking-widest text-neutral-400 mb-1">Floor Plans</p>
                        <p className="font-display font-bold text-neutral-900 text-lg uppercase">{apartment.beds}</p>
                      </div>
                    </div>
                    <div className="w-8 h-0.5 bg-primary-300 mb-6"></div>
                    <p className="text-xs font-display uppercase tracking-widest text-primary-300 mb-2">Smart Move Highlights</p>
                    <p className="font-body text-neutral-600 leading-relaxed mb-8">{apartment.smartMoveHighlights}</p>
                    <Link href="/contact" className="btn-outline self-start">Learn More</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="reveal mb-12">
            <p className="heading-sm mb-4">Filter Your Search</p>
            <h2 className="heading-lg text-neutral-900 mb-6">Find by Budget</h2>
            <div className="divider"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { range: 'Under $1,500', desc: 'Budget-friendly options across DFW' },
              { range: '$1,500 – $2,000', desc: 'Great value in prime locations' },
              { range: '$2,000+', desc: 'Luxury apartments with premium amenities' },
            ].map((item, i) => (
              <Link key={item.range} href="/contact" className={`reveal reveal-delay-${i + 1} group border-2 border-neutral-200 hover:border-primary-300 p-10 transition-all duration-300 hover:shadow-lg`}>
                <p className="text-3xl font-display font-bold text-neutral-900 mb-2 uppercase group-hover:text-primary-300 transition-colors duration-300">{item.range}</p>
                <p className="font-body text-neutral-500 mb-6">{item.desc}</p>
                <span className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-widest text-neutral-400 group-hover:text-primary-300 group-hover:gap-4 transition-all duration-300">
                  View Options <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="section-container">
          <div className="reveal mb-16">
            <p className="heading-sm mb-4">Explore DFW</p>
            <h2 className="heading-lg text-neutral-900 mb-6">Find by Neighborhood</h2>
            <div className="divider"></div>
          </div>
          <div className="space-y-8">
            {neighborhoods.map((n, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={n.id} className={`reveal flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white overflow-hidden group hover:-translate-y-1 hover:shadow-2xl transition-all duration-500`}>
                  <div className="lg:w-5/12 relative h-64 lg:h-auto">
                    <Image src={n.imageUrl} alt={n.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-xl font-display font-bold uppercase tracking-wider text-white">{n.name}</h3>
                      <p className="text-white/70 text-sm font-body">{n.city}</p>
                    </div>
                  </div>
                  <div className="lg:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <p className="text-xs font-display uppercase tracking-widest text-neutral-400 mb-1">Average Rent</p>
                      <p className="font-display font-bold text-neutral-900 text-lg uppercase">{n.avgRent}</p>
                    </div>
                    <div className="w-8 h-0.5 bg-primary-300 mb-6"></div>
                    <p className="font-body text-neutral-600 leading-relaxed mb-6">{n.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {n.topAmenities.map((a) => (
                        <span key={a} className="text-xs font-display uppercase tracking-wider border border-primary-300 text-primary-300 px-3 py-1">{a}</span>
                      ))}
                    </div>
                    <Link href="/contact" className="btn-outline self-start">View Apartments Here</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-900 text-white">
        <div className="section-container text-center">
          <div className="reveal max-w-2xl mx-auto">
            <p className="heading-sm text-primary-300 mb-4">Free Service</p>
            <h2 className="heading-lg text-white mb-8">Ready to Find Your Apartment?</h2>
            <div className="divider mx-auto mb-8"></div>
            <p className="body-lg text-white/60 mb-12">Free consultation, no obligation. Let's start your search today.</p>
            <Link href="/contact" className="btn-primary bg-white text-neutral-900 hover:bg-primary-300 hover:text-white">Get Started Free</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
