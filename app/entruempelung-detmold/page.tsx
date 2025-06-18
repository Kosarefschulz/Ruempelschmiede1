import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Detmold - Professionell & Günstig ab 650€ | Rümpel Schmiede',
  description: 'Entrümpelung in Detmold ✓ Festpreise ab 650€ ✓ 24h Express-Service ✓ Kostenlose Besichtigung ✓ Besenreine Übergabe. Jetzt anfragen!',
  keywords: 'Entrümpelung Detmold, Haushaltsauflösung Detmold, Wohnungsauflösung Detmold, Messie Entrümpelung Detmold, Kellerentrümpelung Detmold, Geschäftsauflösung Detmold',
  openGraph: {
    title: 'Entrümpelung Detmold - Professionell & Günstig ab 650€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Detmold. Festpreise ab 650€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-detmold',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/detmold-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Detmold - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Detmold - Ab 650€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Detmold. Faire Festpreise.',
    images: ['/images/detmold-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-detmold',
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

export default function DetmoldPage() {
  return <CityPageClient />
}
