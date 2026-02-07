import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllInvestorProperties } from '@/data/investors';
import InvestorPropertyCard from '@/components/InvestorPropertyCard';
export const metadata: Metadata = {
  title: "Investor's Corner",
  description: 'Exclusive investment-grade multi-family properties in Dallas-Fort Worth. Curated opportunities for real estate investors seeking value-add, turnkey, and development projects.',
  openGraph: {
    title: "Investor's Corner | DFW Multi-Family Investment Properties",
    description: 'Exclusive investment-grade multi-family properties in Dallas-Fort Worth.',
  },
};
export default function InvestorsPage() {
  const properties = getAllInvestorProperties();
  return (
    <>
      {}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-900 text-white py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Investor's Corner
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Exclusive multi-family investment opportunities in the Dallas-Fort Worth metroplex. Curated properties with strong fundamentals and compelling returns.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-semibold">Accredited Investors Only</span>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-8 text-center">
              Our Investment Focus
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Value-Add Opportunities</h3>
                <p className="text-neutral-700">
                  Properties with proven upside through operational improvements, interior renovations, or market repositioning. Typically targeting 15%+ IRR.
                </p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Turnkey Assets</h3>
                <p className="text-neutral-700">
                  Stabilized, cash-flowing properties with strong occupancy and professional management in place. Ideal for passive investors seeking immediate returns.
                </p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Development Projects</h3>
                <p className="text-neutral-700">
                  Ground-up or major redevelopment opportunities in high-growth submarkets. For investors with development experience and risk tolerance.
                </p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Premium Properties</h3>
                <p className="text-neutral-700">
                  Class A assets in premier locations. Trophy properties with institutional-quality construction and strong appreciation potential.
                </p>
              </div>
            </div>
            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg">
              <p className="text-neutral-800 font-semibold mb-2">Why DFW Multi-Family?</p>
              <ul className="space-y-2 text-neutral-700">
                <li>Strong population growth and job creation</li>
                <li>Diverse economy with major corporate presence</li>
                <li>Business-friendly environment and no state income tax</li>
                <li>Consistent rental demand across multiple price points</li>
                <li>Below-average cap rates relative to fundamentals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16 bg-neutral-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              Current Opportunities
            </h2>
            <p className="text-lg text-neutral-600">
              Hand-selected investment properties meeting our strict criteria for location, condition, and return potential.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {properties.map((property) => (
              <InvestorPropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm inline-block max-w-2xl">
              <h3 className="text-2xl font-display font-bold text-neutral-900 mb-4">
                Request Full Investment Package
              </h3>
              <p className="text-neutral-700 mb-6">
                Interested in learning more about any of these properties? Contact us for complete financial analysis, market reports, and investment materials.
              </p>
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Contact Investment Team
              </Link>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-12 text-center">
              Our Investment Process
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Initial Consultation</h3>
                  <p className="text-neutral-700">
                    We discuss your investment criteria, risk tolerance, target returns, and preferred deal structures. This helps us identify the best opportunities for your portfolio.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Property Presentation</h3>
                  <p className="text-neutral-700">
                    Receive comprehensive investment packages including financial analysis, market data, property condition reports, and comparable sales.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Due Diligence Support</h3>
                  <p className="text-neutral-700">
                    Coordination with property inspectors, lenders, and other professionals. We facilitate your due diligence process and help navigate complex transactions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Transaction Closing</h3>
                  <p className="text-neutral-700">
                    Support through contract negotiation, closing coordination, and post-closing transition. We ensure a smooth acquisition process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-12 bg-neutral-100">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-sm text-neutral-600">
            <p className="mb-4">
              <strong>Investment Disclaimer:</strong> All investment opportunities presented are for accredited investors only. Past performance does not guarantee future results. Real estate investments involve substantial risk including loss of principal. Investors should conduct their own due diligence and consult with financial, tax, and legal advisors before making investment decisions.
            </p>
            <p>
              Properties shown may be subject to prior sale, price change, or withdrawal from market without notice. Financial projections and cap rates are estimates and not guaranteed. Actual returns may vary significantly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
