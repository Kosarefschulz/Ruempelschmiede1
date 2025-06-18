import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Paderborn - Schnell & Günstig ab 690€ | Rümpel Schmiede',
  description: 'Entrümpelung in Paderborn ✓ Festpreise ab 690€ ✓ Schneller Service ✓ Kostenlose Besichtigung ✓ Fachgerechte Entsorgung. Jetzt Angebot sichern!',
  keywords: 'Entrümpelung Paderborn, Haushaltsauflösung Paderborn, Wohnungsauflösung Paderborn, Messie Entrümpelung Paderborn, Firmenauflösung Paderborn, Räumung Paderborn',
  openGraph: {
    title: 'Entrümpelung Paderborn - Schnell & Günstig | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Paderborn. Festpreise ab 690€. Schneller und zuverlässiger Service. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-paderborn',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/paderborn-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Paderborn - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Paderborn - Ab 690€ | Rümpel Schmiede',
    description: 'Schnelle & günstige Entrümpelung in Paderborn. Festpreise garantiert.',
    images: ['/images/paderborn-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-paderborn',
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

export default function PaderbornPage() {
  return <CityPageClient />
}