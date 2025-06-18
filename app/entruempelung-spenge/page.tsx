import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Spenge - Faire Festpreise ab 650€ | Rümpel Schmiede',
  description: 'Entrümpelung Spenge vom Profi ✓ Ab 650€ Festpreis ✓ Schnelle Abwicklung ✓ Kostenlose Besichtigung ✓ Besenreine Übergabe!',
  keywords: 'Entrümpelung Spenge, Haushaltsauflösung Spenge, Wohnungsauflösung Spenge, Messie Entrümpelung Spenge, Kellerentrümpelung Spenge, Geschäftsauflösung Spenge',
  openGraph: {
    title: 'Entrümpelung Spenge - Faire Festpreise ab 650€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Spenge. Festpreise ab 650€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-spenge',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/spenge-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Spenge - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Spenge - Ab 650€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Spenge. Faire Festpreise.',
    images: ['/images/spenge-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-spenge',
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

export default function SpengePage() {
  return <CityPageClient />
}
