import Link from 'next/link';
import JPARLogo from './JPARLogo';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black text-neutral-50 mt-20 font-sans">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {}
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-4">
              DFW Apartment Locator
            </h3>
            <p className="text-sm text-neutral-400 mb-4">
              Your trusted partner for finding the perfect apartment in the Dallas-Fort Worth metroplex.
            </p>
            <div className="flex items-center space-x-2">
              <JPARLogo />
            </div>
          </div>
          {}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-300 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/apartments" className="hover:text-primary-300 transition-colors duration-200">
                  Apartments
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-300 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {}
        <div className="border-t border-neutral-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-neutral-400">
              <p>&copy; {currentYear} DFW Apartment Locator. All rights reserved.</p>
              <p className="mt-1">Independently Owned and Operated by JPAR® Real Estate</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <Link 
                href="https://www.iabs.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-300 transition-colors duration-200"
              >
                IABS Compliance
              </Link>
              <span className="text-neutral-600">|</span>
              <Link 
                href="/privacy-policy" 
                className="hover:text-primary-300 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <span className="text-neutral-600">|</span>
              <Link 
                href="/terms" 
                className="hover:text-primary-300 transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <span className="text-neutral-600">|</span>
              <Link 
                href="https://www.trec.texas.gov/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-300 transition-colors duration-200"
              >
                TREC Info
              </Link>
            </div>
          </div>
          {}
          <div className="mt-6 text-center text-xs text-neutral-500">
            <p>
              Equal Housing Opportunity. Licensed Real Estate Brokerage. 
              This is not intended to solicit properties already listed.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
