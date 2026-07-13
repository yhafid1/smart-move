'use client';

import Link from 'next/link';

export default function InvestorsPage() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 section-container py-32">
        <div className="max-w-4xl mx-auto">
          <p className="heading-sm text-primary-300 mb-6">Exclusive Access</p>
          <h1 className="text-6xl md:text-8xl font-display font-bold text-white uppercase tracking-wider leading-none mb-8">
            Investor's Corner
          </h1>
          <div className="w-16 h-0.5 bg-primary-300 mb-12"></div>

          <p className="text-2xl md:text-3xl font-body text-white/90 leading-relaxed mb-8 font-light max-w-3xl">
            We find exclusive off-market deals and work with other realtors to find the best listings so that you can max your price to ARV ratio.
          </p>

          <p className="text-lg font-body text-white/60 leading-relaxed mb-16 max-w-2xl">
            Our network spans licensed agents, wholesalers, and off-market sellers across North Texas. We focus on single-family, small multifamily, and value-add opportunities in high-demand DFW submarkets. Whether you are looking to flip, rent, or hold long-term, we bring you deals with strong fundamentals before they ever reach the open market. Join our exclusive list and be first in line when new opportunities become available.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { title: 'Off-Market Deals', body: 'Access properties before they hit the public market.' },
              { title: 'Vetted Opportunities', body: 'Every property analyzed for maximum ROI potential.' },
              { title: 'Expert Guidance', body: 'Market insights and deal structuring support.' },
            ].map((item) => (
              <div key={item.title} className="border border-white/20 p-8">
                <h3 className="text-lg font-display font-bold uppercase tracking-wider text-white mb-3">{item.title}</h3>
                <p className="font-body text-white/60 text-sm">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary bg-primary-300 text-white hover:bg-white hover:text-neutral-900">
              Request Access to the List
            </Link>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-neutral-900">
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
