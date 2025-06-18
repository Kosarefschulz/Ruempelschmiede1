import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Düsseldorf - Express-Service ab 720€ | Rümpel Schmiede',
  description: 'Günstige Entrümpelung in Düsseldorf ✓ Festpreise ab 720€ ✓ Express-Service möglich ✓ Professionell & versichert. Kostenlos anfragen!',
  keywords: 'Entrümpelung Düsseldorf, Haushaltsauflösung Düsseldorf, Wohnungsauflösung Düsseldorf, Messie Entrümpelung Düsseldorf, Kellerentrümpelung Düsseldorf, Geschäftsauflösung Düsseldorf',
  openGraph: {
    title: 'Entrümpelung Düsseldorf - Express-Service ab 720€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Düsseldorf. Festpreise ab 720€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-duesseldorf',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/duesseldorf-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Düsseldorf - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Düsseldorf - Ab 720€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Düsseldorf. Faire Festpreise.',
    images: ['/images/duesseldorf-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-duesseldorf',
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

export default function DüsseldorfPage() {
  return <CityPageClient />
}
