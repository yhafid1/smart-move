'use client';

import Link from 'next/link';

const externalResources = [
  {
    title: '11 Apartment Search Tips for 2025',
    description: 'Practical apartment hunting resolutions including budget planning, neighborhood research, and sustainability considerations.',
    url: 'https://www.rentcafe.com/blog/apartment-search-2/apartment-search-tips-2025/',
    source: 'RentCafe',
    category: 'Apartment Hunting',
  },
  {
    title: 'All the Apartment Hunting Tips You Need',
    description: 'Comprehensive guide covering lifestyle considerations, lease negotiations, and avoiding common rental mistakes.',
    url: 'https://www.rentenigma.com/all-the-apartment-hunting-tips-you-need-to-find-a-place-youll-love',
    source: 'RentEnigma',
    category: 'Apartment Hunting',
  },
  {
    title: '12 Apartment Hunting Tips for a Smarter Move',
    description: 'Expert advice on budgeting, timing your move, and navigating lease terms with confidence.',
    url: 'https://www.guardianstorage.com/12-apartment-hunting-tips/',
    source: 'Guardian Storage',
    category: 'Moving Tips',
  },
  {
    title: 'When to Start Looking for Apartments',
    description: 'Strategic timing guide for apartment searches, including seasonal trends and optimal move-in dates.',
    url: 'https://www.apartmentlist.com/renter-life/when-to-start-apartment-search',
    source: 'Apartment List',
    category: 'Planning',
  },
  {
    title: 'Apartment Hunting in a Changing Market',
    description: 'Navigate market trends, vacancy rates, and leverage digital tools for efficient apartment hunting.',
    url: 'https://www.rentcafe.com/blog/apartment-search-2/apartment-hunting-tips-stay-ahead-rental-market/',
    source: 'RentCafe',
    category: 'Market Insights',
  },
  {
    title: 'Top 5 Apartment Hunting Tips',
    description: 'Essential preparation checklist including documentation, online platforms, and community considerations.',
    url: 'https://www.furnitureoptions.com/blog/apartments/top-five-cant-miss-apartment-hunting-tips',
    source: 'Furniture Options',
    category: 'Getting Started',
  },
];

const dfwResources = [
  {
    title: 'DFW Neighborhood Guide',
    description: 'Placeholder - Add your comprehensive guide to Dallas-Fort Worth neighborhoods, including rent averages and local amenities.',
    internal: true,
  },
  {
    title: 'Moving to DFW Checklist',
    description: 'Placeholder - Add your step-by-step checklist for relocating to the Dallas-Fort Worth area.',
    internal: true,
  },
  {
    title: 'First-Time Renter Guide',
    description: 'Placeholder - Add your guide covering everything first-time renters need to know about the DFW rental market.',
    internal: true,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="py-16 md:py-20 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-neutral-900 mb-6 leading-tight">
              Resources for DFW Renters
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 font-body">
              Essential guides and helpful articles to make your apartment search successful.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-8">
              Our Guides
            </h2>
            <p className="text-lg text-neutral-600 font-body mb-8">
              Coming soon - exclusive guides written specifically for DFW apartment hunters.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {dfwResources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg border-2 border-neutral-200 hover:border-primary-300 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full text-xs font-sans font-semibold uppercase tracking-wide">
                      Coming Soon
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-neutral-900 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-neutral-600 font-body text-sm leading-relaxed">
                    {resource.description}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-8">
              Helpful Articles from Around the Web
            </h2>
            <p className="text-lg text-neutral-600 font-body mb-8">
              Curated resources to help you navigate the apartment hunting process with confidence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {externalResources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white p-6 rounded-lg border-2 border-neutral-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block bg-primary-300 text-white px-3 py-1 rounded-full text-xs font-sans font-semibold uppercase tracking-wide">
                      {resource.category}
                    </span>
                    <svg 
                      className="w-5 h-5 text-neutral-400 group-hover:text-primary-300 transition-colors duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-neutral-900 mb-3 group-hover:text-primary-300 transition-colors duration-300">
                    {resource.title}
                  </h3>
                  
                  <p className="text-neutral-600 font-body text-sm leading-relaxed mb-4">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-sans text-neutral-500">
                      Source: {resource.source}
                    </span>
                    <span className="text-sm font-sans font-semibold text-primary-300 group-hover:translate-x-1 transition-transform duration-300">
                      Read Article →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-6">
              Need Personalized Help?
            </h2>
            <p className="text-xl text-neutral-600 font-body mb-8">
              Let us guide you through your apartment search with expert local knowledge and insider access to the best deals.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-300 text-white px-10 py-4 rounded-lg text-lg font-sans font-semibold hover:bg-primary-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
