import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Dortmund - Schnell & Zuverlässig ab 720€ | Rümpel Schmiede',
  description: 'Professionelle Entrümpelung Dortmund ✓ Faire Festpreise ab 720€ ✓ Schnell & zuverlässig ✓ Kostenlose Erstbesichtigung. Angebot erhalten!',
  keywords: 'Entrümpelung Dortmund, Haushaltsauflösung Dortmund, Wohnungsauflösung Dortmund, Messie Entrümpelung Dortmund, Kellerentrümpelung Dortmund, Geschäftsauflösung Dortmund',
  openGraph: {
    title: 'Entrümpelung Dortmund - Schnell & Zuverlässig ab 720€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Dortmund. Festpreise ab 720€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-dortmund',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/dortmund-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Dortmund - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Dortmund - Ab 720€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Dortmund. Faire Festpreise.',
    images: ['/images/dortmund-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-dortmund',
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

export default function DortmundPage() {
  return <CityPageClient />
}
