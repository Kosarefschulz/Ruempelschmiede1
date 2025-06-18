import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Leipzig - Ihr Partner vor Ort ab 700€ | Rümpel Schmiede',
  description: 'Entrümpelung Leipzig - Ihr lokaler Partner ✓ Ab 700€ ✓ Komplettservice ✓ Wertanrechnung ✓ Kostenlose Besichtigung. Jetzt beraten lassen!',
  keywords: 'Entrümpelung Leipzig, Haushaltsauflösung Leipzig, Wohnungsauflösung Leipzig, Messie Entrümpelung Leipzig, Kellerentrümpelung Leipzig, Geschäftsauflösung Leipzig',
  openGraph: {
    title: 'Entrümpelung Leipzig - Ihr Partner vor Ort ab 700€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Leipzig. Festpreise ab 700€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-leipzig',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/leipzig-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Leipzig - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Leipzig - Ab 700€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Leipzig. Faire Festpreise.',
    images: ['/images/leipzig-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-leipzig',
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

export default function LeipzigPage() {
  return <CityPageClient />
}
