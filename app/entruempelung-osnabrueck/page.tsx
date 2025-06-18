import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Osnabrück - Express-Service ab 680€ | Rümpel Schmiede',
  description: 'Günstige Entrümpelung in Osnabrück ✓ Festpreise ab 680€ ✓ Express-Service möglich ✓ Professionell & versichert. Kostenlos anfragen!',
  keywords: 'Entrümpelung Osnabrück, Haushaltsauflösung Osnabrück, Wohnungsauflösung Osnabrück, Messie Entrümpelung Osnabrück, Kellerentrümpelung Osnabrück, Geschäftsauflösung Osnabrück',
  openGraph: {
    title: 'Entrümpelung Osnabrück - Express-Service ab 680€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Osnabrück. Festpreise ab 680€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-osnabrueck',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/osnabrueck-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Osnabrück - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Osnabrück - Ab 680€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Osnabrück. Faire Festpreise.',
    images: ['/images/osnabrueck-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-osnabrueck',
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

export default function OsnabrückPage() {
  return <CityPageClient />
}
