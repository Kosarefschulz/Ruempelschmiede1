import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung München - Professionell & Günstig ab 750€ | Rümpel Schmiede',
  description: 'Entrümpelung in München ✓ Festpreise ab 750€ ✓ 24h Express-Service ✓ Kostenlose Besichtigung ✓ Besenreine Übergabe. Jetzt anfragen!',
  keywords: 'Entrümpelung München, Haushaltsauflösung München, Wohnungsauflösung München, Messie Entrümpelung München, Kellerentrümpelung München, Geschäftsauflösung München',
  openGraph: {
    title: 'Entrümpelung München - Professionell & Günstig ab 750€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in München. Festpreise ab 750€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-muenchen',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/muenchen-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung München - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung München - Ab 750€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in München. Faire Festpreise.',
    images: ['/images/muenchen-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-muenchen',
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

export default function MünchenPage() {
  return <CityPageClient />
}
