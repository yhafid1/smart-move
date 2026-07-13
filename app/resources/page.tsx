'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

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

const externalResources = [
  { title: '11 Apartment Search Tips for 2025', description: 'Practical apartment hunting advice including budget planning, neighborhood research, and sustainability considerations.', url: 'https://www.rentcafe.com/blog/apartment-search-2/apartment-search-tips-2025/', source: 'RentCafe', category: 'Apartment Hunting' },
  { title: 'All the Apartment Hunting Tips You Need', description: 'Comprehensive guide covering lifestyle considerations, lease negotiations, and avoiding common rental mistakes.', url: 'https://www.rentenigma.com/all-the-apartment-hunting-tips-you-need-to-find-a-place-youll-love', source: 'RentEnigma', category: 'Apartment Hunting' },
  { title: '12 Apartment Hunting Tips for a Smarter Move', description: 'Expert advice on budgeting, timing your move, and navigating lease terms with confidence.', url: 'https://www.guardianstorage.com/12-apartment-hunting-tips/', source: 'Guardian Storage', category: 'Moving Tips' },
  { title: 'When to Start Looking for Apartments', description: 'Strategic timing guide for apartment searches, including seasonal trends and optimal move-in dates.', url: 'https://www.apartmentlist.com/renter-life/when-to-start-apartment-search', source: 'Apartment List', category: 'Planning' },
  { title: 'Apartment Hunting in a Changing Market', description: 'Navigate market trends, vacancy rates, and leverage digital tools for efficient apartment hunting.', url: 'https://www.rentcafe.com/blog/apartment-search-2/apartment-hunting-tips-stay-ahead-rental-market/', source: 'RentCafe', category: 'Market Insights' },
  { title: 'Top 5 Apartment Hunting Tips', description: 'Essential preparation checklist including documentation, online platforms, and community considerations.', url: 'https://www.furnitureoptions.com/blog/apartments/top-five-cant-miss-apartment-hunting-tips', source: 'Furniture Options', category: 'Getting Started' },
];

const ourGuides = [
  { title: 'DFW Neighborhood Guide', description: 'Coming soon — a comprehensive guide to Dallas-Fort Worth neighborhoods, including rent averages and local amenities.' },
  { title: 'Moving to DFW Checklist', description: 'Coming soon — a step-by-step checklist for relocating to the Dallas-Fort Worth area.' },
  { title: 'First-Time Renter Guide', description: 'Coming soon — everything first-time renters need to know about the DFW rental market.' },
];

export default function ResourcesPage() {
  const pageRef = useScrollReveal();

  return (
    <div ref={pageRef}>
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="reveal mb-16">
            <p className="heading-sm mb-4">Knowledge Base</p>
            <h1 className="heading-lg text-neutral-900 mb-6">Resources for DFW Renters</h1>
            <div className="divider"></div>
          </div>

          <div className="reveal mb-20">
            <p className="heading-sm mb-8">Our Guides</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ourGuides.map((guide, i) => (
                <div key={guide.title} className={`reveal reveal-delay-${i + 1} border-2 border-neutral-200 p-8`}>
                  <span className="text-xs font-display uppercase tracking-widest border border-neutral-300 text-neutral-400 px-3 py-1 mb-6 inline-block">Coming Soon</span>
                  <h3 className="text-lg font-display font-bold uppercase tracking-wider text-neutral-900 mb-3">{guide.title}</h3>
                  <p className="font-body text-neutral-500 text-sm leading-relaxed">{guide.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal mb-8">
            <p className="heading-sm mb-4">Curated Reading</p>
            <h2 className="heading-lg text-neutral-900 mb-6">Helpful Articles</h2>
            <div className="divider mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {externalResources.map((resource, i) => (
                <a
                  key={i}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal group border-2 border-neutral-200 hover:border-primary-300 p-8 transition-all duration-300 hover:shadow-lg block"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-display uppercase tracking-widest border border-primary-300 text-primary-300 px-3 py-1">{resource.category}</span>
                    <svg className="w-4 h-4 text-neutral-300 group-hover:text-primary-300 transition-colors duration-300 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-display font-bold uppercase tracking-wider text-neutral-900 mb-3 group-hover:text-primary-300 transition-colors duration-300">{resource.title}</h3>
                  <p className="font-body text-neutral-500 text-sm leading-relaxed mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-body text-neutral-400">Source: {resource.source}</span>
                    <span className="text-xs font-display uppercase tracking-widest text-primary-300 group-hover:gap-2 inline-flex items-center gap-1 transition-all duration-300">
                      Read Article <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-900 text-white">
        <div className="section-container text-center">
          <div className="reveal max-w-2xl mx-auto">
            <p className="heading-sm text-primary-300 mb-4">Personalized Help</p>
            <h2 className="heading-lg text-white mb-8">Need Expert Advice?</h2>
            <div className="divider mx-auto mb-8"></div>
            <p className="body-lg text-white/60 mb-12">Skip the research. Let us guide your apartment search with local expertise and insider access.</p>
            <Link href="/contact" className="btn-primary bg-white text-neutral-900 hover:bg-primary-300 hover:text-white">Get Started Free</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
