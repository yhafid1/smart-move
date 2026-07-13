import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export const metadata: Metadata = {
  metadataBase: new URL('https://smartmovedfw.com'),
  title: {
    default: 'Smart Move DFW | Find Your Perfect Apartment in Dallas-Fort Worth',
    template: '%s | Smart Move DFW',
  },
  description: 'Apartment locating service in the Dallas-Fort Worth metroplex. Find your perfect home with personalized service, local expertise, and access to exclusive listings. Free apartment search assistance.',
  keywords: [
    'DFW apartments',
    'Dallas apartments',
    'Fort Worth apartments',
    'apartment locator',
    'apartment finder DFW',
    'Dallas housing',
    'Plano apartments',
    'Frisco apartments',
    'Irving apartments',
    'real estate DFW',
  ],
  authors: [{ name: 'Smart Move DFW' }],
  creator: 'Smart Move DFW',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://smartmovedfw.com',
    siteName: 'Smart Move DFW',
    title: 'Smart Move DFW | Find Your Perfect Apartment in Dallas-Fort Worth',
    description: 'Apartment locating service in the Dallas-Fort Worth metroplex. Free personalized apartment search assistance.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Smart Move DFW',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Move DFW | Find Your Perfect Apartment',
    description: 'Apartment locating service in Dallas-Fort Worth. Free personalized search assistance.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', 
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Barlow:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        {}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'Smart Move DFW',
              description: 'Apartment locating service in Dallas-Fort Worth',
              url: 'https://smartmovedfw.com',
              telephone: '(214) 555-0100',
              email: 'info@smartmovedfw.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Dallas',
                addressRegion: 'TX',
                addressCountry: 'US',
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Dallas',
                },
                {
                  '@type': 'City',
                  name: 'Fort Worth',
                },
                {
                  '@type': 'City',
                  name: 'Plano',
                },
                {
                  '@type': 'City',
                  name: 'Frisco',
                },
                {
                  '@type': 'City',
                  name: 'Irving',
                },
              ],
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
