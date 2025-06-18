import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Duisburg - Faire Festpreise ab 690€ | Rümpel Schmiede',
  description: 'Entrümpelung Duisburg vom Profi ✓ Ab 690€ Festpreis ✓ Schnelle Abwicklung ✓ Kostenlose Besichtigung ✓ Besenreine Übergabe!',
  keywords: 'Entrümpelung Duisburg, Haushaltsauflösung Duisburg, Wohnungsauflösung Duisburg, Messie Entrümpelung Duisburg, Kellerentrümpelung Duisburg, Geschäftsauflösung Duisburg',
  openGraph: {
    title: 'Entrümpelung Duisburg - Faire Festpreise ab 690€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Duisburg. Festpreise ab 690€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-duisburg',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/duisburg-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Duisburg - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Duisburg - Ab 690€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Duisburg. Faire Festpreise.',
    images: ['/images/duisburg-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-duisburg',
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

export default function DuisburgPage() {
  return <CityPageClient />
}
