import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Halle Westfalen - Ihr Partner vor Ort ab 650€ | Rümpel Schmiede',
  description: 'Entrümpelung Halle Westfalen - Ihr lokaler Partner ✓ Ab 650€ ✓ Komplettservice ✓ Wertanrechnung ✓ Kostenlose Besichtigung. Jetzt beraten lassen!',
  keywords: 'Entrümpelung Halle Westfalen, Haushaltsauflösung Halle Westfalen, Wohnungsauflösung Halle Westfalen, Messie Entrümpelung Halle Westfalen, Kellerentrümpelung Halle Westfalen, Geschäftsauflösung Halle Westfalen',
  openGraph: {
    title: 'Entrümpelung Halle Westfalen - Ihr Partner vor Ort ab 650€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Halle Westfalen. Festpreise ab 650€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-halle-westfalen',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/halle-westfalen-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Halle Westfalen - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Halle Westfalen - Ab 650€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Halle Westfalen. Faire Festpreise.',
    images: ['/images/halle-westfalen-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-halle-westfalen',
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

export default function HalleWestfalenPage() {
  return <CityPageClient />
}
