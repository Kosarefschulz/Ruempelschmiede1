import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Melle - Faire Festpreise ab 650€ | Rümpel Schmiede',
  description: 'Entrümpelung Melle vom Profi ✓ Ab 650€ Festpreis ✓ Schnelle Abwicklung ✓ Kostenlose Besichtigung ✓ Besenreine Übergabe!',
  keywords: 'Entrümpelung Melle, Haushaltsauflösung Melle, Wohnungsauflösung Melle, Messie Entrümpelung Melle, Kellerentrümpelung Melle, Geschäftsauflösung Melle',
  openGraph: {
    title: 'Entrümpelung Melle - Faire Festpreise ab 650€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Melle. Festpreise ab 650€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-melle',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/melle-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Melle - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Melle - Ab 650€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Melle. Faire Festpreise.',
    images: ['/images/melle-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-melle',
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

export default function MellePage() {
  return <CityPageClient />
}
