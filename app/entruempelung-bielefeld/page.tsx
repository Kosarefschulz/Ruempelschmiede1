import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Bielefeld - Professionell & Günstig ab 650€ | Rümpel Schmiede',
  description: 'Entrümpelung in Bielefeld ✓ Festpreise ab 650€ ✓ 850+ zufriedene Kunden ✓ 24h Express-Service ✓ Kostenlose Besichtigung. Jetzt Angebot erhalten!',
  keywords: 'Entrümpelung Bielefeld, Haushaltsauflösung Bielefeld, Wohnungsauflösung Bielefeld, Messie Entrümpelung Bielefeld, Kellerentrümpelung Bielefeld, Dachbodenentrümpelung Bielefeld',
  openGraph: {
    title: 'Entrümpelung Bielefeld - Professionell & Günstig | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Bielefeld. Festpreise ab 650€. 24h Express-Service verfügbar. Kostenlose Besichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-bielefeld',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/bielefeld-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Bielefeld - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Bielefeld - Ab 650€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Bielefeld. 24h Service. Kostenlose Besichtigung.',
    images: ['/images/bielefeld-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-bielefeld',
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

export default function BielefeldPage() {
  return <CityPageClient />
}