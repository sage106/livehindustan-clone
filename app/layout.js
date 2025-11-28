import './styles/globals.css';

export const metadata = {
  title: {
    default: 'लाइव हिन्दुस्तान - ताज़ा खबरें, ब्रेकिंग न्यूज़',
    template: '%s | लाइव हिन्दुस्तान'
  },
  description: 'लाइव हिन्दुस्तान पर पढ़ें ताज़ा हिंदी समाचार - देश, दुनिया, राजनीति, खेल, मनोरंजन की खबरें',
  keywords: ['hindi news', 'breaking news', 'india news', 'लाइव हिन्दुस्तान', 'समाचार'],
  authors: [{ name: 'LiveHindustan' }],
  creator: 'LiveHindustan',
  publisher: 'LiveHindustan',
  metadataBase: new URL('https://www.livehindustan.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'hi_IN',
    url: 'https://www.livehindustan.com',
    siteName: 'LiveHindustan',
    title: 'लाइव हिन्दुस्तान - Latest Hindi News',
    description: 'भारत की सबसे तेज़ हिंदी न्यूज़ वेबसाइट',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'LiveHindustan News',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'लाइव हिन्दुस्तान - Latest Hindi News',
    description: 'भारत की सबसे तेज़ हिंदी न्यूज़ वेबसाइट',
    images: ['https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=1200&h=630'],
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
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <head>
        {/* Structured Data for News Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NewsMediaOrganization',
              name: 'LiveHindustan',
              url: 'https://www.livehindustan.com',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.livehindustan.com/logo.png',
              },
              sameAs: [
                'https://www.facebook.com/livehindustan',
                'https://twitter.com/livehindustan',
                'https://www.instagram.com/livehindustan',
                'https://www.youtube.com/livehindustan',
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}