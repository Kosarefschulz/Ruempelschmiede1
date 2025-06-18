import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Bochum - Ihr Partner vor Ort ab 690€ | Rümpel Schmiede',
  description: 'Entrümpelung Bochum - Ihr lokaler Partner ✓ Ab 690€ ✓ Komplettservice ✓ Wertanrechnung ✓ Kostenlose Besichtigung. Jetzt beraten lassen!',
  keywords: 'Entrümpelung Bochum, Haushaltsauflösung Bochum, Wohnungsauflösung Bochum, Messie Entrümpelung Bochum, Kellerentrümpelung Bochum, Geschäftsauflösung Bochum',
  openGraph: {
    title: 'Entrümpelung Bochum - Ihr Partner vor Ort ab 690€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Bochum. Festpreise ab 690€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-bochum',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/bochum-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Bochum - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Bochum - Ab 690€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Bochum. Faire Festpreise.',
    images: ['/images/bochum-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-bochum',
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

export default function BochumPage() {
  return <CityPageClient />
}
