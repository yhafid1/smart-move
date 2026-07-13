'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';

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

export default function BuySellPage() {
  const pageRef = useScrollReveal();

  return (
    <div ref={pageRef}>
      <section className="section-padding bg-neutral-900 text-white">
        <div className="section-container text-center">
          <div className="reveal max-w-2xl mx-auto">
            <p className="heading-sm text-primary-300 mb-4">Let's Talk</p>
            <h1 className="heading-lg text-white mb-8">Ready to Buy or Sell?</h1>
            <div className="divider mx-auto mb-8"></div>
            <p className="body-lg text-white/60 mb-12">
              Professional guidance every step of the way. Schedule a consultation today.
            </p>
            <Link href="/contact" className="btn-primary bg-white text-neutral-900 hover:bg-primary-300 hover:text-white">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
