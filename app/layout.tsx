import './globals.css'
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './components/WhatsAppButton'
import GoogleAnalytics from './components/GoogleAnalytics'
import CookieConsent from './components/CookieConsent'
import RecaptchaProvider from './providers/RecaptchaProvider'
import StructuredData from './components/StructuredData'
import PerformanceMonitor from './components/PerformanceMonitor'
import SearchConsole from './components/SearchConsole'
import CoreWebVitals from './components/CoreWebVitals'
import CriticalCSS from './components/CriticalCSS'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Lazy load non-critical components for better performance
const DynamicWhatsAppButton = dynamic(() => import('./components/WhatsAppButton'), {
  ssr: false,
  loading: () => null
})

const DynamicCookieConsent = dynamic(() => import('./components/CookieConsent'), {
  ssr: false,
  loading: () => null
})

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ruempelschmiede.de'),
  title: {
    default: 'Rümpel Schmiede - Entrümpelung Bielefeld & Steinhagen | Professionelle Haushaltsauflösung ab 650€',
    template: '%s | Rümpel Schmiede'
  },
  description: 'Professionelle Entrümpelung in Bielefeld, Steinhagen & OWL ✓ Haushaltsauflösung ab 650€ ✓ Express-Service 48h ✓ Kostenlose Besichtigung ✓ Festpreise ohne Nachkosten ✓ Seit 2017',
  keywords: 'Entrümpelung Bielefeld, Haushaltsauflösung Steinhagen, Wohnungsauflösung Gütersloh, Messie Hilfe Bielefeld, Kellerentrümpelung OWL, Dachbodenentrümpelung, Büroauflösung, Gewerbeauflösung, Express-Service, Festpreis, 08000060970',
  authors: [{ name: 'Rümpel Schmiede' }],
  creator: 'Rümpel Schmiede',
  publisher: 'Rümpel Schmiede',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://ruempelschmiede.de',
    languages: {
      'de-DE': 'https://ruempelschmiede.de',
    },
  },
  openGraph: {
    title: 'Rümpel Schmiede - Entrümpelung Bielefeld & Steinhagen ab 650€',
    description: 'Professionelle Entrümpelung in Bielefeld, Steinhagen & OWL ✓ Haushaltsauflösung ab 650€ ✓ Express-Service 48h ✓ Kostenlose Besichtigung ✓ Festpreise',
    url: 'https://ruempelschmiede.de',
    siteName: 'Rümpel Schmiede',
    images: [
      {
        url: '/Logo.png',
        width: 800,
        height: 600,
        alt: 'Rümpel Schmiede Logo',
      }
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rümpel Schmiede - Professionelle Entrümpelung',
    description: 'Professionelle Entrümpelung deutschlandweit ✓ Festpreise ✓ 24h Service',
    images: ['/Logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    yandex: '',
    yahoo: '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <CriticalCSS />
        <StructuredData />
      </head>
      <body suppressHydrationWarning={true}>
        <RecaptchaProvider>
          <Suspense fallback={null}>
            <GoogleAnalytics />
          </Suspense>
          <PerformanceMonitor />
          <SearchConsole />
          <CoreWebVitals />
          <Header />
          <main>{children}</main>
          <Footer />
          {/* <DynamicWhatsAppButton /> */}
          <DynamicCookieConsent />
        </RecaptchaProvider>
      </body>
    </html>
  )
}
