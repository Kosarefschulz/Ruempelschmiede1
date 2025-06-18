import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Dresden - Ihr Partner vor Ort ab 700€ | Rümpel Schmiede',
  description: 'Entrümpelung Dresden - Ihr lokaler Partner ✓ Ab 700€ ✓ Komplettservice ✓ Wertanrechnung ✓ Kostenlose Besichtigung. Jetzt beraten lassen!',
  keywords: 'Entrümpelung Dresden, Haushaltsauflösung Dresden, Wohnungsauflösung Dresden, Messie Entrümpelung Dresden, Kellerentrümpelung Dresden, Geschäftsauflösung Dresden',
  openGraph: {
    title: 'Entrümpelung Dresden - Ihr Partner vor Ort ab 700€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Dresden. Festpreise ab 700€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-dresden',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/dresden-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Dresden - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Dresden - Ab 700€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Dresden. Faire Festpreise.',
    images: ['/images/dresden-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-dresden',
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

export default function DresdenPage() {
  return <CityPageClient />
}
