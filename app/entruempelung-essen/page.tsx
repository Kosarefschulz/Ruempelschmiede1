import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Essen - Professionell & Günstig ab 720€ | Rümpel Schmiede',
  description: 'Entrümpelung in Essen ✓ Festpreise ab 720€ ✓ 24h Express-Service ✓ Kostenlose Besichtigung ✓ Besenreine Übergabe. Jetzt anfragen!',
  keywords: 'Entrümpelung Essen, Haushaltsauflösung Essen, Wohnungsauflösung Essen, Messie Entrümpelung Essen, Kellerentrümpelung Essen, Geschäftsauflösung Essen',
  openGraph: {
    title: 'Entrümpelung Essen - Professionell & Günstig ab 720€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Essen. Festpreise ab 720€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-essen',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/essen-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Essen - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Essen - Ab 720€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Essen. Faire Festpreise.',
    images: ['/images/essen-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-essen',
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

export default function EssenPage() {
  return <CityPageClient />
}
