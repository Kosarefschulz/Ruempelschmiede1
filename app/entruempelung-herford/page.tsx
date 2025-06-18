import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Herford - Professioneller Service ab 670€ | Rümpel Schmiede',
  description: 'Entrümpelung in Herford ✓ Festpreise ab 670€ ✓ Professioneller Service ✓ Kostenlose Besichtigung ✓ Besenreine Übergabe. Unverbindlich anfragen!',
  keywords: 'Entrümpelung Herford, Haushaltsauflösung Herford, Wohnungsauflösung Herford, Messie Entrümpelung Herford, Seniorenumzüge Herford, Betriebsauflösung Herford',
  openGraph: {
    title: 'Entrümpelung Herford - Professioneller Service | Rümpel Schmiede',
    description: 'Zuverlässige Entrümpelung in Herford. Festpreise ab 670€. Professioneller Service mit kostenloser Besichtigung.',
    url: 'https://ruempelschmiede.de/entruempelung-herford',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/herford-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Herford - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Herford - Ab 670€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Herford. Faire Festpreise und schneller Service.',
    images: ['/images/herford-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-herford',
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

export default function HerfordPage() {
  return <CityPageClient />
}