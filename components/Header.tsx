'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Apartments', href: '/apartments' },
    { name: 'Buy/Sell', href: '/buy-sell' },
    { name: "Investor's Corner", href: '/investors' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <nav className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">

          <Link href="/" className="flex items-center gap-4">
            <Image src="/logo.png" alt="Smart Move DFW" width={80} height={80} className="object-contain" />
            <span className="font-display text-lg md:text-xl font-bold uppercase tracking-[0.15em] text-neutral-900 hover:text-primary-300 transition-colors duration-300">
              Smart Move DFW
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-display font-semibold uppercase tracking-[0.15em] text-neutral-600 hover:text-neutral-900 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-primary-300 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-px bg-neutral-900 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`}></span>
            <span className={`w-6 h-px bg-neutral-900 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-px bg-neutral-900 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`}></span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-neutral-100">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-display font-semibold uppercase tracking-[0.15em] text-neutral-600 hover:text-neutral-900 transition-colors duration-200 py-1"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
