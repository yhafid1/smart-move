import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Apartments', href: '/apartments' },
    { name: 'Buy / Sell', href: '/buy-sell' },
    { name: "Investor's Corner", href: '/investors' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-2">
            <p className="text-xs font-display uppercase tracking-[0.2em] text-primary-300 mb-4">Dallas-Fort Worth</p>
            <h3 className="text-2xl font-display font-bold uppercase tracking-wider text-white mb-4">
              Smart Move DFW
            </h3>
            <p className="text-sm text-neutral-400 max-w-md leading-relaxed font-body mb-6">
              Your trusted partner for apartment locating and real estate services across the Dallas-Fort Worth metroplex. Expert guidance, completely free.
            </p>
            <Image src="/logo.png" alt="Smart Move DFW" width={128} height={64} className="object-contain" />
          </div>

          <div>
            <p className="text-xs font-display uppercase tracking-[0.2em] text-neutral-500 mb-4">Quick Links</p>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-body text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-neutral-500 font-body">
              &copy; {currentYear} Smart Move DFW. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs text-neutral-500">
              <Link href="https://www.iabs.net" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">IABS</Link>
              <Link href="https://www.trec.texas.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">TREC</Link>
            </div>
          </div>
          <p className="text-xs text-neutral-600 mt-4 font-body">Equal Housing Opportunity.</p>
        </div>
      </div>
    </footer>
  );
}
