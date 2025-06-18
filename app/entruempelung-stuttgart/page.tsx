import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Stuttgart - Professionell & Günstig ab 720€ | Rümpel Schmiede',
  description: 'Entrümpelung in Stuttgart ✓ Festpreise ab 720€ ✓ 24h Express-Service ✓ Kostenlose Besichtigung ✓ Besenreine Übergabe. Jetzt anfragen!',
  keywords: 'Entrümpelung Stuttgart, Haushaltsauflösung Stuttgart, Wohnungsauflösung Stuttgart, Messie Entrümpelung Stuttgart, Kellerentrümpelung Stuttgart, Geschäftsauflösung Stuttgart',
  openGraph: {
    title: 'Entrümpelung Stuttgart - Professionell & Günstig ab 720€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Stuttgart. Festpreise ab 720€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-stuttgart',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/stuttgart-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Stuttgart - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Stuttgart - Ab 720€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Stuttgart. Faire Festpreise.',
    images: ['/images/stuttgart-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-stuttgart',
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

export default function StuttgartPage() {
  return <CityPageClient />
}
