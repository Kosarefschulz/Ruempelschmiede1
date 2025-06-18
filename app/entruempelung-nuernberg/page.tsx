import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Nürnberg - Ihr Partner vor Ort ab 700€ | Rümpel Schmiede',
  description: 'Entrümpelung Nürnberg - Ihr lokaler Partner ✓ Ab 700€ ✓ Komplettservice ✓ Wertanrechnung ✓ Kostenlose Besichtigung. Jetzt beraten lassen!',
  keywords: 'Entrümpelung Nürnberg, Haushaltsauflösung Nürnberg, Wohnungsauflösung Nürnberg, Messie Entrümpelung Nürnberg, Kellerentrümpelung Nürnberg, Geschäftsauflösung Nürnberg',
  openGraph: {
    title: 'Entrümpelung Nürnberg - Ihr Partner vor Ort ab 700€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Nürnberg. Festpreise ab 700€. 24h Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-nuernberg',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/nuernberg-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Nürnberg - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Nürnberg - Ab 700€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Nürnberg. Faire Festpreise.',
    images: ['/images/nuernberg-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-nuernberg',
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

export default function NürnbergPage() {
  return <CityPageClient />
}
