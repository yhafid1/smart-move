import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with DFW Apartment Locator. Free apartment search assistance, investment inquiries, and real estate consulting. We respond within 24 hours.',
};
export default function ContactPage() {
  return (
    <>
      {}
      <section className="bg-gradient-to-br from-primary-50 to-neutral-100 py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-neutral-700">
              Ready to find your perfect apartment or explore investment opportunities? We're here to help.
            </p>
          </div>
        </div>
      </section>
      {}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {}
            <div>
              <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
            {}
            <div>
              <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">
                Other Ways to Reach Us
              </h2>
              <div className="space-y-6">
                {}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-1">Phone</h3>
                    <p className="text-neutral-700">(214) 555-0100</p>
                    <p className="text-sm text-neutral-500">Mon-Fri: 9am - 6pm CST</p>
                  </div>
                </div>
                {}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-1">Email</h3>
                    <p className="text-neutral-700">info@dfwapartmentlocator.com</p>
                    <p className="text-sm text-neutral-500">We respond within 24 hours</p>
                  </div>
                </div>
                {}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-1">Service Area</h3>
                    <p className="text-neutral-700">Dallas-Fort Worth Metroplex</p>
                    <p className="text-sm text-neutral-500">Serving all DFW cities and suburbs</p>
                  </div>
                </div>
              </div>
              {}
              <div className="mt-10 bg-primary-50 p-6 rounded-lg">
                <h3 className="font-bold text-neutral-900 mb-3">What Happens Next?</h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">1.</span>
                    <span>We'll review your message and contact you within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">2.</span>
                    <span>We'll discuss your needs and preferences in detail</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">3.</span>
                    <span>We'll start searching for your perfect apartment or investment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">4.</span>
                    <span>You'll receive personalized recommendations within 48 hours</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {}
      <section className="py-16 bg-neutral-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-neutral-900 mb-10 text-center">
              Common Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-neutral-900 mb-2">How much does your service cost?</h3>
                <p className="text-neutral-700">
                  Our apartment locating service is completely free for you. We're compensated by the apartment communities when you lease through us.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-neutral-900 mb-2">How quickly can you help me find an apartment?</h3>
                <p className="text-neutral-700">
                  Most clients receive their first set of recommendations within 48 hours. The entire process from search to move-in typically takes 2-4 weeks, depending on your timeline.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-neutral-900 mb-2">Do I have to work exclusively with you?</h3>
                <p className="text-neutral-700">
                  No obligation whatsoever. You're free to search on your own or work with others. We're here to provide value, not to lock you in.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-neutral-900 mb-2">Can you help with investment properties?</h3>
                <p className="text-neutral-700">
                  Yes! Visit our Investor's Corner for multi-family investment opportunities, or contact us directly to discuss your investment criteria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
