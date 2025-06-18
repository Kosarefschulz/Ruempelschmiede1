import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Lemgo - Express-Service ab 650€ | Rümpel Schmiede',
  description: 'Günstige Entrümpelung in Lemgo ✓ Festpreise ab 650€ ✓ Express-Service möglich ✓ Professionell & versichert. Kostenlos anfragen!',
  keywords: 'Entrümpelung Lemgo, Haushaltsauflösung Lemgo, Wohnungsauflösung Lemgo, Messie Entrümpelung Lemgo, Kellerentrümpelung Lemgo, Geschäftsauflösung Lemgo',
  openGraph: {
    title: 'Entrümpelung Lemgo - Express-Service ab 650€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Lemgo. Festpreise ab 650€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-lemgo',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/lemgo-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Lemgo - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Lemgo - Ab 650€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Lemgo. Faire Festpreise.',
    images: ['/images/lemgo-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-lemgo',
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

export default function LemgoPage() {
  return <CityPageClient />
}
