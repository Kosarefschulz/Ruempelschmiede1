import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Wuppertal - Schnell & Zuverlässig ab 690€ | Rümpel Schmiede',
  description: 'Professionelle Entrümpelung Wuppertal ✓ Faire Festpreise ab 690€ ✓ Schnell & zuverlässig ✓ Kostenlose Erstbesichtigung. Angebot erhalten!',
  keywords: 'Entrümpelung Wuppertal, Haushaltsauflösung Wuppertal, Wohnungsauflösung Wuppertal, Messie Entrümpelung Wuppertal, Kellerentrümpelung Wuppertal, Geschäftsauflösung Wuppertal',
  openGraph: {
    title: 'Entrümpelung Wuppertal - Schnell & Zuverlässig ab 690€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Wuppertal. Festpreise ab 690€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-wuppertal',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/wuppertal-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Wuppertal - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Wuppertal - Ab 690€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Wuppertal. Faire Festpreise.',
    images: ['/images/wuppertal-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-wuppertal',
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

export default function WuppertalPage() {
  return <CityPageClient />
}
