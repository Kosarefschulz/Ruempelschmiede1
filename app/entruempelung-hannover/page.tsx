import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Hannover - Faire Festpreise ab 700€ | Rümpel Schmiede',
  description: 'Entrümpelung Hannover vom Profi ✓ Ab 700€ Festpreis ✓ Schnelle Abwicklung ✓ Kostenlose Besichtigung ✓ Besenreine Übergabe!',
  keywords: 'Entrümpelung Hannover, Haushaltsauflösung Hannover, Wohnungsauflösung Hannover, Messie Entrümpelung Hannover, Kellerentrümpelung Hannover, Geschäftsauflösung Hannover',
  openGraph: {
    title: 'Entrümpelung Hannover - Faire Festpreise ab 700€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Hannover. Festpreise ab 700€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-hannover',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/hannover-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Hannover - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Hannover - Ab 700€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Hannover. Faire Festpreise.',
    images: ['/images/hannover-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-hannover',
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
}

export default function HannoverPage() {
  return <CityPageClient />
}
