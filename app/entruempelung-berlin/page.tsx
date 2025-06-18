import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Berlin - Schnell & Zuverlässig ab 750€ | Rümpel Schmiede',
  description: 'Professionelle Entrümpelung Berlin ✓ Faire Festpreise ab 750€ ✓ Schnell & zuverlässig ✓ Kostenlose Erstbesichtigung. Angebot erhalten!',
  keywords: 'Entrümpelung Berlin, Haushaltsauflösung Berlin, Wohnungsauflösung Berlin, Messie Entrümpelung Berlin, Kellerentrümpelung Berlin, Geschäftsauflösung Berlin',
  openGraph: {
    title: 'Entrümpelung Berlin - Schnell & Zuverlässig ab 750€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Berlin. Festpreise ab 750€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-berlin',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/berlin-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Berlin - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Berlin - Ab 750€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Berlin. Faire Festpreise.',
    images: ['/images/berlin-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-berlin',
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

export default function BerlinPage() {
  return <CityPageClient />
}
