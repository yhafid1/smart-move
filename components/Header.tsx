'use client';
import Link from 'next/link';
import { useState } from 'react';
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Apartments', href: '/apartments' },
    { name: 'Contact', href: '/contact' },
  ];
  return (
    <header className="bg-neutral-50 border-b border-neutral-200 sticky top-0 z-50 shadow-sm font-sans">
      <nav className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {}
          <Link href="/" className="flex items-center">
            {/* 
              TO ADD YOUR LOGO:
              1. Save your logo as: /public/smartmove-logo.png
              2. Uncomment the Image component below
              3. Adjust width/height to match your logo dimensions
              4. Delete this placeholder div
            */}
            <div className="h-12 w-40 bg-neutral-200 rounded flex items-center justify-center">
              <span className="text-sm text-neutral-500 font-sans">Logo Here</span>
            </div>
            {/* LOGO CODE (uncomment when ready):
            <Image
              src="/smartmove-logo.png"
              alt="Smart Move DFW"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
            */}
          </Link>
          {}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-primary-300 hover:text-primary-400 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
          {}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-primary-300 hover:text-primary-400 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-300"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-primary-300 hover:text-primary-400 font-medium py-2 px-4 rounded-md hover:bg-neutral-100 transition-colors duration-200"
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
