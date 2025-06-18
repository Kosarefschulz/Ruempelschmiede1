import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Bad Salzuflen - Professionell & Günstig ab 650€ | Rümpel Schmiede',
  description: 'Entrümpelung in Bad Salzuflen ✓ Festpreise ab 650€ ✓ 24h Express-Service ✓ Kostenlose Besichtigung ✓ Besenreine Übergabe. Jetzt anfragen!',
  keywords: 'Entrümpelung Bad Salzuflen, Haushaltsauflösung Bad Salzuflen, Wohnungsauflösung Bad Salzuflen, Messie Entrümpelung Bad Salzuflen, Kellerentrümpelung Bad Salzuflen, Geschäftsauflösung Bad Salzuflen',
  openGraph: {
    title: 'Entrümpelung Bad Salzuflen - Professionell & Günstig ab 650€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Bad Salzuflen. Festpreise ab 650€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-bad-salzuflen',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/bad-salzuflen-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Bad Salzuflen - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Bad Salzuflen - Ab 650€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Bad Salzuflen. Faire Festpreise.',
    images: ['/images/bad-salzuflen-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-bad-salzuflen',
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

export default function BadSalzuflenPage() {
  return <CityPageClient />
}
