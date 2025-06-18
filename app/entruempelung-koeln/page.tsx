import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Köln - Professionell & Günstig ab 750€ | Rümpel Schmiede',
  description: 'Entrümpelung in Köln ✓ Festpreise ab 750€ ✓ 24h Express-Service ✓ Kostenlose Besichtigung ✓ Besenreine Übergabe. Jetzt anfragen!',
  keywords: 'Entrümpelung Köln, Haushaltsauflösung Köln, Wohnungsauflösung Köln, Messie Entrümpelung Köln, Kellerentrümpelung Köln, Geschäftsauflösung Köln',
  openGraph: {
    title: 'Entrümpelung Köln - Professionell & Günstig ab 750€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Köln. Festpreise ab 750€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-koeln',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/koeln-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Köln - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Köln - Ab 750€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Köln. Faire Festpreise.',
    images: ['/images/koeln-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-koeln',
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

export default function KölnPage() {
  return <CityPageClient />
}
