import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Hamburg - Express-Service ab 750€ | Rümpel Schmiede',
  description: 'Günstige Entrümpelung in Hamburg ✓ Festpreise ab 750€ ✓ Express-Service möglich ✓ Professionell & versichert. Kostenlos anfragen!',
  keywords: 'Entrümpelung Hamburg, Haushaltsauflösung Hamburg, Wohnungsauflösung Hamburg, Messie Entrümpelung Hamburg, Kellerentrümpelung Hamburg, Geschäftsauflösung Hamburg',
  openGraph: {
    title: 'Entrümpelung Hamburg - Express-Service ab 750€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Hamburg. Festpreise ab 750€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-hamburg',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/hamburg-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Hamburg - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Hamburg - Ab 750€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Hamburg. Faire Festpreise.',
    images: ['/images/hamburg-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-hamburg',
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

export default function HamburgPage() {
  return <CityPageClient />
}
