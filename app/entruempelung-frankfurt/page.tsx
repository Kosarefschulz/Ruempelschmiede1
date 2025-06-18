import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Frankfurt - Schnell & Zuverlässig ab 750€ | Rümpel Schmiede',
  description: 'Professionelle Entrümpelung Frankfurt ✓ Faire Festpreise ab 750€ ✓ Schnell & zuverlässig ✓ Kostenlose Erstbesichtigung. Angebot erhalten!',
  keywords: 'Entrümpelung Frankfurt, Haushaltsauflösung Frankfurt, Wohnungsauflösung Frankfurt, Messie Entrümpelung Frankfurt, Kellerentrümpelung Frankfurt, Geschäftsauflösung Frankfurt',
  openGraph: {
    title: 'Entrümpelung Frankfurt - Schnell & Zuverlässig ab 750€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Frankfurt. Festpreise ab 750€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-frankfurt',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/frankfurt-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Frankfurt - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Frankfurt - Ab 750€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Frankfurt. Faire Festpreise.',
    images: ['/images/frankfurt-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-frankfurt',
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

export default function FrankfurtPage() {
  return <CityPageClient />
}
