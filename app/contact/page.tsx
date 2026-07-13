import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Smart Move DFW. Free apartment search assistance, investment inquiries, and real estate consulting. We respond within 24 hours.',
};

export default function ContactPage() {
  return (
    <>
      <section className="section-padding bg-neutral-900 text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="heading-sm text-primary-300 mb-4">Let's Connect</p>
            <h1 className="heading-lg text-white mb-6">Get In Touch</h1>
            <div className="divider mx-auto mb-8"></div>
            <p className="body-lg text-white/60">
              Ready to find your perfect apartment or explore real estate opportunities? We're here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <p className="heading-sm mb-4">Send a Message</p>
              <h2 className="text-3xl font-display font-bold uppercase tracking-wider text-neutral-900 mb-8">Contact Us</h2>
              <ContactForm />
            </div>

            <div>
              <p className="heading-sm mb-4">Other Ways to Reach Us</p>
              <h2 className="text-3xl font-display font-bold uppercase tracking-wider text-neutral-900 mb-8">Direct Contact</h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-primary-300 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-display uppercase tracking-widest text-neutral-400 mb-1">Phone</p>
                    <p className="font-display font-bold text-neutral-900 text-lg">214-296-7143</p>
                    <p className="text-sm text-neutral-500 font-body">Mon-Fri, 9am - 6pm CST</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-primary-300 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-display uppercase tracking-widest text-neutral-400 mb-1">Email</p>
                    <p className="font-display font-bold text-neutral-900 text-lg">digitalhafid@gmail.com</p>
                    <p className="text-sm text-neutral-500 font-body">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-primary-300 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-display uppercase tracking-widest text-neutral-400 mb-1">Service Area</p>
                    <p className="font-display font-bold text-neutral-900 text-lg">Dallas-Fort Worth Metroplex</p>
                    <p className="text-sm text-neutral-500 font-body">Serving all DFW cities and suburbs</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-primary-300 pl-6">
                <p className="text-xs font-display uppercase tracking-widest text-neutral-400 mb-4">What Happens Next</p>
                <div className="space-y-3">
                  {['We review your message and reach out within 24 hours', 'We discuss your needs and preferences in detail', 'We start searching for your perfect apartment', 'You receive personalized recommendations within 48 hours'].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="font-display font-bold text-primary-300 text-sm flex-shrink-0">0{i + 1}</span>
                      <p className="text-sm font-body text-neutral-600">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="heading-sm mb-4">FAQ</p>
              <h2 className="heading-lg text-neutral-900">Common Questions</h2>
            </div>
            <div className="space-y-4">
              {[
                { q: 'How much does your service cost?', a: 'Our apartment locating service is completely free for you. We are compensated by the apartment communities when you lease through us.' },
                { q: 'How quickly can you help me find an apartment?', a: 'Most clients receive their first set of recommendations within 48 hours. The entire process from search to move-in typically takes 2-4 weeks, depending on your timeline.' },
                { q: 'Do I have to work exclusively with you?', a: 'No obligation whatsoever. You are free to search on your own or work with others. We are here to provide value, not to lock you in.' },
                { q: 'Can you help with investment properties?', a: 'Yes. Visit our Investor\'s Corner for off-market opportunities, or contact us directly to discuss your investment criteria.' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 border-l-4 border-primary-300">
                  <h3 className="font-display font-bold uppercase tracking-wider text-neutral-900 mb-3">{item.q}</h3>
                  <p className="font-body text-neutral-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
