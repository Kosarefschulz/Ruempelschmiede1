import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Lage - Schnell & Zuverlässig ab 650€ | Rümpel Schmiede',
  description: 'Professionelle Entrümpelung Lage ✓ Faire Festpreise ab 650€ ✓ Schnell & zuverlässig ✓ Kostenlose Erstbesichtigung. Angebot erhalten!',
  keywords: 'Entrümpelung Lage, Haushaltsauflösung Lage, Wohnungsauflösung Lage, Messie Entrümpelung Lage, Kellerentrümpelung Lage, Geschäftsauflösung Lage',
  openGraph: {
    title: 'Entrümpelung Lage - Schnell & Zuverlässig ab 650€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Lage. Festpreise ab 650€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-lage',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/lage-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Lage - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Lage - Ab 650€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Lage. Faire Festpreise.',
    images: ['/images/lage-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-lage',
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

export default function LagePage() {
  return <CityPageClient />
}
