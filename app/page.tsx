'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const elements = ref.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function HomePage() {
  const pageRef = useScrollReveal();

  return (
    <div ref={pageRef}>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80" alt="Modern DFW Housing" fill className="object-cover animate-slow-zoom" priority />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="animate-fade-up">
            <p className="heading-sm text-white/70 mb-6">Dallas-Fort Worth Real Estate</p>
          </div>
          <h1 className="heading-xl text-white mb-8 animate-fade-up-delay-1">Smart Move DFW</h1>
          <div className="w-24 h-0.5 bg-primary-300 mx-auto mb-8 line-grow"></div>
          <p className="text-xl md:text-2xl text-white/80 font-body font-light mb-12 max-w-2xl mx-auto animate-fade-up-delay-2">
            Expert apartment locating and real estate services across the metroplex. Completely free.
          </p>
          <div className="animate-fade-up-delay-3">
            <Link href="/apartments" className="btn-primary bg-white text-neutral-900 hover:bg-primary-300 hover:text-white">Start Your Search</Link>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-white/40"></div>
        </div>
      </section>

      <section id="services" className="section-padding bg-white">
        <div className="section-container">
          <div className="reveal mb-20">
            <p className="heading-sm mb-4">What We Do</p>
            <h2 className="heading-lg text-neutral-900 mb-6">Our Services</h2>
            <div className="divider"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/apartments" className="group reveal reveal-delay-1">
              <div className="relative h-[480px] overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80" alt="Apartment Locating" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-xs font-display uppercase tracking-[0.3em] text-primary-300 mb-3">Free Service</p>
                  <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider mb-3">Apartment Locating</h3>
                  <p className="text-white/70 font-body text-sm mb-4">Expert apartment search across DFW. We do the research, you pick your favorite.</p>
                  <span className="inline-flex items-center gap-2 text-white font-display text-xs uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                    Browse Apartments
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </div>
            </Link>
            <Link href="/buy-sell" className="group reveal reveal-delay-2">
              <div className="relative h-[480px] overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80" alt="Buy and Sell" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-xs font-display uppercase tracking-[0.3em] text-primary-300 mb-3">Buy & Sell</p>
                  <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider mb-3">Purchase a Home</h3>
                  <p className="text-white/70 font-body text-sm mb-4">Professional guidance buying or selling residential properties throughout DFW.</p>
                  <span className="inline-flex items-center gap-2 text-white font-display text-xs uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                    View Homes
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </div>
            </Link>
            <Link href="/investors" className="group reveal reveal-delay-3">
              <div className="relative h-[480px] overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" alt="Investors Corner" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-xs font-display uppercase tracking-[0.3em] text-primary-300 mb-3">Exclusive Access</p>
                  <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider mb-3">Investor's Corner</h3>
                  <p className="text-white/70 font-body text-sm mb-4">Curated off-market deals and investment opportunities across the DFW metroplex.</p>
                  <span className="inline-flex items-center gap-2 text-white font-display text-xs uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                    Request Access
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-900 text-white relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="reveal">
                <p className="heading-sm text-primary-300 mb-4">Why Choose Us</p>
                <h2 className="heading-lg text-white mb-8">The Smart Way to Find Home</h2>
                <div className="divider mb-8"></div>
              </div>
              <div className="space-y-6">
                {[
                  { n: '01', title: 'We Do the Research', body: 'Hours of searching condensed into a curated list tailored to your needs.' },
                  { n: '02', title: 'Exclusive Off-Market Deals', body: 'Access specials and listings you won\'t find on public websites.' },
                  { n: '03', title: 'Expert Negotiation', body: 'We negotiate lease terms and move-in costs on your behalf.' },
                  { n: '04', title: '100% Free to You', body: 'Apartment communities compensate us. You pay absolutely nothing.' },
                ].map((item, i) => (
                  <div key={item.n} className={`reveal reveal-delay-${i + 1} flex items-start gap-4`}>
                    <div className="w-10 h-10 flex-shrink-0 border border-primary-300 flex items-center justify-center">
                      <span className="text-primary-300 font-display text-sm font-bold">{item.n}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-bold uppercase tracking-wider mb-1 text-white">{item.title}</h3>
                      <p className="text-white/60 font-body">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="relative">
                <div className="relative h-[500px] overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" alt="Modern apartment" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary-300 text-white p-8">
                  <p className="text-4xl font-display font-bold">100%</p>
                  <p className="text-sm font-display uppercase tracking-widest">Free Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="reveal">
              <p className="heading-sm mb-4">Get Started</p>
              <h2 className="heading-lg text-neutral-900 mb-8">Ready to Make Your Move?</h2>
              <div className="divider mx-auto mb-8"></div>
              <p className="body-lg mb-12">Whether searching for an apartment or buying a home, we guide you every step of the way.</p>
            </div>
            <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">Contact Us Today</Link>
              <Link href="/apartments" className="btn-outline">Browse Apartments</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
