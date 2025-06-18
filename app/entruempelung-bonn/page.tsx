import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Bonn - Express-Service ab 690€ | Rümpel Schmiede',
  description: 'Günstige Entrümpelung in Bonn ✓ Festpreise ab 690€ ✓ Express-Service möglich ✓ Professionell & versichert. Kostenlos anfragen!',
  keywords: 'Entrümpelung Bonn, Haushaltsauflösung Bonn, Wohnungsauflösung Bonn, Messie Entrümpelung Bonn, Kellerentrümpelung Bonn, Geschäftsauflösung Bonn',
  openGraph: {
    title: 'Entrümpelung Bonn - Express-Service ab 690€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Bonn. Festpreise ab 690€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-bonn',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/bonn-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Bonn - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Bonn - Ab 690€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Bonn. Faire Festpreise.',
    images: ['/images/bonn-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-bonn',
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

export default function BonnPage() {
  return <CityPageClient />
}
