import { Metadata } from 'next'
import CityPageClient from './CityPageClient'

export const metadata: Metadata = {
  title: 'Entrümpelung Höxter - Professionell & Günstig ab 690€ | Rümpel Schmiede',
  description: 'Entrümpelung in Höxter ✓ Festpreise ab 690€ ✓ Die Steinpfleger Partner ✓ 500+ zufriedene Kunden ✓ 24h Express-Service. Kostenlose Besichtigung!',
  keywords: 'Entrümpelung Höxter, Haushaltsauflösung Höxter, Wohnungsauflösung Höxter, Die Steinpfleger Höxter, Steinreinigung Höxter, Messie Entrümpelung Höxter, Kellerentrümpelung Höxter',
  openGraph: {
    title: 'Entrümpelung Höxter - Professionell & Günstig | Rümpel Schmiede',
    description: 'Entrümpelung in Höxter mit Die Steinpfleger Services. Festpreise ab 690€. 24h Express-Service verfügbar.',
    url: 'https://ruempelschmiede.de/entruempelung-hoexter',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/images/hoexter-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Entrümpelung Höxter - Rümpel Schmiede',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrümpelung Höxter - Ab 690€ | Rümpel Schmiede',
    description: 'Professionelle Entrümpelung in Höxter. Die Steinpfleger Partner. 24h Service.',
    images: ['/images/hoexter-hero.jpg'],
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de/entruempelung-hoexter',
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

export default function HoexterPage() {
  return <CityPageClient />
}