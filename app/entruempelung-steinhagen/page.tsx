import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Steinhagen - Schnell & Zuverlässig ab 650€ | Rümpel Schmiede',
  description: 'Entrümpelung in Steinhagen ✓ Festpreise ab 650€ ✓ Express-Service in 24h ✓ Kostenlose Besichtigung ✓ Besenreine Übergabe. Jetzt anfragen!',
  keywords: 'Entrümpelung Steinhagen, Haushaltsauflösung Steinhagen, Wohnungsauflösung Steinhagen, Messie Entrümpelung Steinhagen, Gewerbeauflösung Steinhagen, Nachlassauflösung Steinhagen',
  openGraph: {
    title: 'Entrümpelung Steinhagen - Schnell & Zuverlässig | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Steinhagen. Festpreise ab 650€. Express-Service in 24h. Kostenlose Erstbesichtigung!',
    url: 'https://ruempelschmiede.de/entruempelung-steinhagen',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/steinhagen-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Steinhagen - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Steinhagen - Ab 650€ | Rümpel Schmiede',
    description: 'Schnelle & zuverlässige Entrümpelung in Steinhagen. 24h Service möglich.',
    images: ['/images/steinhagen-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-steinhagen',
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

export default function SteinhagenPage() {
  return <CityPageClient />
}