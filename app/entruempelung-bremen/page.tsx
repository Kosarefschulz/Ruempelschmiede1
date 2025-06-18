import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Bremen - Faire Festpreise ab 690€ | Rümpel Schmiede',
  description: 'Entrümpelung Bremen vom Profi ✓ Ab 690€ Festpreis ✓ Schnelle Abwicklung ✓ Kostenlose Besichtigung ✓ Besenreine Übergabe!',
  keywords: 'Entrümpelung Bremen, Haushaltsauflösung Bremen, Wohnungsauflösung Bremen, Messie Entrümpelung Bremen, Kellerentrümpelung Bremen, Geschäftsauflösung Bremen',
  openGraph: {
    title: 'Entrümpelung Bremen - Faire Festpreise ab 690€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Bremen. Festpreise ab 690€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-bremen',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/bremen-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Bremen - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Bremen - Ab 690€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Bremen. Faire Festpreise.',
    images: ['/images/bremen-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-bremen',
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

export default function BremenPage() {
  return <CityPageClient />
}
