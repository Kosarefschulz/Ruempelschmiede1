import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Gütersloh - Ihr Partner vor Ort ab 680€ | Rümpel Schmiede',
  description: 'Entrümpelung in Gütersloh ✓ Festpreise ab 680€ ✓ Lokaler Service ✓ 24h Notfall-Entrümpelung ✓ Kostenlose Besichtigung. Jetzt beraten lassen!',
  keywords: 'Entrümpelung Gütersloh, Haushaltsauflösung Gütersloh, Wohnungsauflösung Gütersloh, Messie Entrümpelung Gütersloh, Büroauflösung Gütersloh, Geschäftsauflösung Gütersloh',
  openGraph: {
    title: 'Entrümpelung Gütersloh - Ihr Partner vor Ort | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Gütersloh. Festpreise ab 680€. Lokaler Service mit 24h Notfall-Option. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-guetersloh',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/guetersloh-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Gütersloh - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Gütersloh - Ab 680€ | Rümpel Schmiede',
    description: 'Ihr lokaler Partner für Entrümpelungen in Gütersloh. Faire Festpreise.',
    images: ['/images/guetersloh-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-guetersloh',
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

export default function GueterslohPage() {
  return <CityPageClient />
}