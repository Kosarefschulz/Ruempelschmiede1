import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Münster - Schnell & Zuverlässig ab 680€ | Rümpel Schmiede',
  description: 'Professionelle Entrümpelung Münster ✓ Faire Festpreise ab 680€ ✓ Schnell & zuverlässig ✓ Kostenlose Erstbesichtigung. Angebot erhalten!',
  keywords: 'Entrümpelung Münster, Haushaltsauflösung Münster, Wohnungsauflösung Münster, Messie Entrümpelung Münster, Kellerentrümpelung Münster, Geschäftsauflösung Münster',
  openGraph: {
    title: 'Entrümpelung Münster - Schnell & Zuverlässig ab 680€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Münster. Festpreise ab 680€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-muenster',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/muenster-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Münster - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Münster - Ab 680€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Münster. Faire Festpreise.',
    images: ['/images/muenster-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-muenster',
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

export default function MünsterPage() {
  return <CityPageClient />
}
