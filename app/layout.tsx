import './globals.css'
import Header from './Header'
import Footer from './Footer'
import WhatsAppButton from './components/WhatsAppButton'
import GoogleAnalytics from './components/GoogleAnalytics'
import CookieConsent from './components/CookieConsent'
import RecaptchaProvider from './providers/RecaptchaProvider'
import StructuredData from './components/StructuredData'
import { Suspense } from 'react'

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ruempelschmiede.de'),
  title: {
    default: 'Rümpelschmiede - Professionelle Entrümpelung Deutschlandweit | 24h Service',
    template: '%s | Rümpelschmiede'
  },
  description: 'Professionelle Entrümpelung, Haushaltsauflösung & Gewerbeauflösung deutschlandweit ✓ Festpreise ✓ 98% Kundenzufriedenheit ✓ 24h Express-Service ✓ Kostenlose Besichtigung',
  keywords: 'Entrümpelung, Haushaltsauflösung, Gewerbeauflösung, Messie-Entrümpelung, Kellerentrümpelung, Dachbodenentrümpelung, Wohnungsauflösung, Räumung, Deutschland, Express-Service, Festpreis',
  authors: [{ name: 'Rümpelschmiede' }],
  creator: 'Rümpelschmiede',
  publisher: 'Rümpelschmiede',
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
    title: 'Rümpelschmiede - Professionelle Entrümpelung Deutschlandweit',
    description: 'Professionelle Entrümpelung, Haushaltsauflösung & Gewerbeauflösung ✓ Festpreise ✓ 98% Kundenzufriedenheit ✓ 24h Express-Service',
    url: 'https://ruempelschmiede.de',
    siteName: 'Rümpelschmiede',
    images: [
      {
        url: '/Logo.png',
        width: 800,
        height: 600,
        alt: 'Rümpelschmiede Logo',
      }
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rümpelschmiede - Professionelle Entrümpelung',
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
        <StructuredData />
      </head>
      <body>
        <RecaptchaProvider>
          <Suspense fallback={null}>
            <GoogleAnalytics />
          </Suspense>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <CookieConsent />
        </RecaptchaProvider>
      </body>
    </html>
  )
}
