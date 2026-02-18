'use client';

import Link from 'next/link';

export default function InvestorsPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>

      <div className="relative z-10 section-container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block bg-primary-300 text-white px-6 py-2 rounded-full font-sans font-semibold text-sm tracking-wide uppercase">
              Exclusive Access
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight">
            Investor's Corner
          </h1>

          <p className="text-2xl md:text-3xl font-body text-neutral-100 mb-8 leading-relaxed">
            Edit this headline text to describe your exclusive investor list and value proposition.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-xl md:text-2xl text-white font-body leading-relaxed mb-6">
              We find exclusive off-market deals and work with other realtors to find the best listings so that you can max your price to ARV ratio.
            </p>
            <p className="text-lg text-neutral-200 font-body leading-relaxed">
              Edit this text to provide more details about your investment opportunities, the types of properties you find, and what makes your list exclusive. Explain the benefits of being on your investor list and what sets you apart.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  Off-Market Deals
                </h3>
                <p className="text-neutral-200 font-body">
                  Access properties before they hit the market
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  Vetted Opportunities
                </h3>
                <p className="text-neutral-200 font-body">
                  Every property analyzed for maximum ROI
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  Expert Guidance
                </h3>
                <p className="text-neutral-200 font-body">
                  Market insights and deal structuring support
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-block bg-primary-300 text-white px-10 py-5 rounded-lg text-xl font-sans font-bold hover:bg-primary-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Request Access to the List
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-lg text-xl font-sans font-bold hover:bg-white/20 transition-all duration-300"
            >
              Schedule a Call
            </Link>
          </div>

          <p className="text-sm text-neutral-300 mt-8 font-sans">
            Limited spots available. Serious investors only.
          </p>
        </div>
      </div>
    </div>
  );
}
