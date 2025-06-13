'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Icon from '../components/Icon'
import Link from 'next/link'
import Script from 'next/script'

// Structured Data for Höxter
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://ruempelschmiede.de/entruempelung-hoexter#localbusiness',
  name: 'Rümpel Schmiede Höxter - Entrümpelung',
  image: [
    'https://ruempelschmiede.de/images/hoexter-hero.jpg',
    'https://ruempelschmiede.de/images/logo.png'
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Servicegebiet Höxter',
    addressLocality: 'Höxter',
    postalCode: '37671',
    addressRegion: 'NW',
    addressCountry: 'DE'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.7745,
    longitude: 9.3811
  },
  url: 'https://ruempelschmiede.de/entruempelung-hoexter',
  telephone: '+4915755854945',
  priceRange: '€€',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '20:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '16:00'
    }
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Höxter'
    },
    {
      '@type': 'City',
      name: 'Holzminden'
    },
    {
      '@type': 'City',
      name: 'Bad Driburg'
    },
    {
      '@type': 'City',
      name: 'Brakel'
    },
    {
      '@type': 'City',
      name: 'Beverungen'
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '487',
    bestRating: '5',
    worstRating: '1'
  }
}

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was kostet eine Entrümpelung in Höxter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Kosten für eine Entrümpelung in Höxter beginnen bei 690€ für eine 1-Zimmer-Wohnung. Der finale Preis hängt von Faktoren wie Wohnungsgröße, Zugänglichkeit und Entsorgungsmenge ab. Wir bieten kostenlose Besichtigungen und Festpreise.'
      }
    },
    {
      '@type': 'Question',
      name: 'Wie schnell können Sie in Höxter entrümpeln?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wir bieten einen 48-Stunden Express-Service in Höxter. In dringenden Fällen können wir oft noch am selben Tag mit der Entrümpelung beginnen.'
      }
    }
  ]
}

export default function CityPageClient() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  const handleDotClick = (index: number) => {
    setCurrentSlide(index)
  }

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3)
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3)
  }

  // Lazy load video after initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // FAQ data
  const faqItems = [
    {
      question: 'Was kostet eine Entrümpelung in Höxter?',
      answer: 'Die Kosten für eine Entrümpelung in Höxter beginnen bei 690€ für eine 1-Zimmer-Wohnung. Der finale Preis hängt von verschiedenen Faktoren ab: Wohnungsgröße, Zugänglichkeit, Entsorgungsmenge und gewünschte Zusatzleistungen. Wir bieten immer eine kostenlose Besichtigung und verbindliche Festpreise an.'
    },
    {
      question: 'Welche Stadtteile in Höxter bedienen Sie?',
      answer: 'Wir entrümpeln in ganz Höxter und allen Stadtteilen: Höxter-Kernstadt, Albaxen, Bödexen, Brenkhausen, Bruchhausen, Fürstenau, Godelheim, Lüchtringen, Lütmarsen, Ottbergen, Ovenhausen und Stahle. Auch in den umliegenden Gemeinden wie Holzminden, Bad Driburg und Beverungen sind wir aktiv.'
    },
    {
      question: 'Wie läuft eine Entrümpelung in Höxter ab?',
      answer: '1. Kontaktaufnahme und Terminvereinbarung. 2. Kostenlose Besichtigung vor Ort in Höxter. 3. Erstellung eines verbindlichen Festpreisangebots. 4. Durchführung der Entrümpelung zum Wunschtermin. 5. Besenreine Übergabe und Entsorgungsnachweise.'
    },
    {
      question: 'Arbeiten Sie auch am Wochenende in Höxter?',
      answer: 'Ja, wir bieten flexible Termine auch am Wochenende an. Besonders für Berufstätige oder bei dringenden Entrümpelungen in Höxter sind Samstags-Termine möglich. Sprechen Sie uns einfach bei der Terminvereinbarung darauf an.'
    }
  ]

  return (
    <>
      {/* Structured Data */}
      <Script
        id="structured-data-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <Script
        id="structured-data-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData)
        }}
      />
      
      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-100 py-3" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-600 hover:text-[#C73E3A]">
                Startseite
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/leistungen" className="text-gray-600 hover:text-[#C73E3A]">
                Leistungen
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-[#2C4F5E] font-semibold">Entrümpelung Höxter</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section optimiert */}
      <section className="relative overflow-hidden w-full bg-gradient-to-br from-[#2C4F5E] to-[#1E3A47]">
        <div className="relative z-10 text-white px-4" style={{ minHeight: '600px', display: 'flex', alignItems: 'center' }}>
          <div className="text-center w-full max-w-7xl mx-auto py-20">
            {/* Local Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <svg className="w-5 h-5 mr-2 text-[#C73E3A]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">Ihr lokaler Partner in Höxter seit 2016</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
              Entrümpelung Höxter<br />
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 opacity-90 max-w-4xl mx-auto">
              Professionelle Entrümpelung in Höxter, Holzminden, Bad Driburg und Umgebung. 
              ✓ Festpreise ab 690€ ✓ 24h Express ✓ Ihr lokaler Partner
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <svg className="w-5 h-5 mr-2 text-[#C73E3A]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold">4.9/5</span>
                <span className="ml-1 opacity-80">(487 Bewertungen)</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <svg className="w-5 h-5 mr-2 text-[#C73E3A]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Ø 2 Tage</span>
                <span className="ml-1 opacity-80">Reaktionszeit</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#preisrechner" className="bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-8 py-4 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all shadow-lg">
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Sofort Preis berechnen
                </span>
              </a>
              <a href="tel:+4915755854945" className="bg-white/20 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-[#2C4F5E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Jetzt anrufen
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Instant Price Calculator Section */}
      <section id="preisrechner" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C4F5E] mb-4">
              Berechnen Sie Ihre Entrümpelungskosten in Höxter sofort!
            </h2>
            <p className="text-xl text-gray-600">
              Unser einzigartiger Kalkulator zeigt Ihnen in 2 Minuten, was Ihre Entrümpelung in Höxter kostet
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-[#2C4F5E]">BASIC</h2>
              <p className="text-3xl font-bold text-[#C73E3A] my-4">ab 690 €</p>
              <p className="text-gray-600 mb-6">für 1-Zimmer-Wohnung in Höxter</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#C73E3A] rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Komplette Räumung aller Räume</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#C73E3A] rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Fachgerechte Entsorgung</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#C73E3A] rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Wertanrechnung möglich</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#C73E3A] rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Entsorgungsnachweise</span>
                </li>
              </ul>
              <a href="/kontakt" className="w-full bg-[#C73E3A] text-white py-3 rounded-lg font-semibold hover:bg-[#B02E2A] inline-block">
                Anfrage stellen
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-2 border-[#2C4F5E] transform scale-105">
              <div className="bg-[#2C4F5E] text-white py-1 px-4 rounded-full inline-block mb-4">
                BELIEBTESTE WAHL
              </div>
              <h2 className="text-2xl font-bold text-[#2C4F5E]">KOMFORT</h2>
              <p className="text-3xl font-bold text-[#C73E3A] my-4">ab 1.390 €</p>
              <p className="text-gray-600 mb-6">für 1-Zimmer-Wohnung in Höxter</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#C73E3A] rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Alle Leistungen aus BASIC</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#C73E3A] rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Besenreine Endreinigung</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#C73E3A] rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Kleine Reparaturen</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#C73E3A] rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Schlüsselübergabe an Vermieter</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#C73E3A] rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Abmeldung Strom/Gas möglich</span>
                </li>
              </ul>
              <a href="/kontakt" className="w-full bg-[#C73E3A] text-white py-3 rounded-lg font-semibold hover:bg-[#B02E2A] inline-block">
                Anfrage stellen
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-[#2C4F5E]">PREMIUM</h2>
              <p className="text-3xl font-bold text-[#C73E3A] my-4">ab 2.090 €</p>
              <p className="text-gray-600 mb-6">für 1-Zimmer-Wohnung in Höxter</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#C73E3A] rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Alle Leistungen aus KOMFORT</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#C73E3A] rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Persönlicher Projektmanager</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#C73E3A] rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Komplette Behördengänge</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#C73E3A] rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Nachlass-Verwaltung</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#C73E3A] rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>6 Monate Nachbetreuung</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#C73E3A] rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                  <span>Digitales Erinnerungsalbum</span>
                </li>
              </ul>
              <a href="/kontakt" className="w-full bg-[#C73E3A] text-white py-3 rounded-lg font-semibold hover:bg-[#B02E2A] inline-block">
                Anfrage stellen
              </a>
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="/preise#kalkulator" className="text-[#2C4F5E] hover:text-[#1E3A47] font-semibold">
              Zum detaillierten Preisrechner für Höxter →
            </a>
          </div>
        </div>
      </section>

      {/* Combined Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C4F5E] mb-4">
              Unsere Services in Höxter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wählen Sie zwischen unseren Kernkompetenzen oder kombinieren Sie beide Services
            </p>
          </div>

          {/* Service Content */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Haushaltsauflösung */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <Image 
                    src="/Karton.png" 
                    alt="Haushaltsauflösung Höxter"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Haushaltsauflösungen</h3>
                  <p className="text-gray-700 mb-4">
                    Komplette Wohnungsauflösungen in Höxter mit Wertanrechnung. Wir kümmern uns um alles - 
                    von der Entrümpelung bis zur Endreinigung.
                  </p>
                  <a href="/leistungen#haushaltsaufloesung" className="inline-flex items-center text-[#C73E3A] hover:text-[#B02E2A] font-semibold">
                    Mehr erfahren
                    <Icon name="arrow-right" size={20} className="ml-2" />
                  </a>
                </div>
              </div>

              {/* Express-Service */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <Image 
                    src="/76f2dd53-6826-4e2f-b45b-aaa99c3206c9.png" 
                    alt="Express Entrümpelung Höxter"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 bg-[#C73E3A] text-white px-3 py-1 rounded-full text-sm font-bold">
                    48h Service
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Express-Service Höxter</h3>
                  <p className="text-gray-700 mb-4">
                    Eilig? Innerhalb von 48 Stunden räumen wir in Höxter für Sie - garantiert! 
                    Perfekt bei kurzfristigen Terminen.
                  </p>
                  <a href="/leistungen#express-service" className="inline-flex items-center text-[#C73E3A] hover:text-[#B02E2A] font-semibold">
                    Mehr erfahren
                    <Icon name="arrow-right" size={20} className="ml-2" />
                  </a>
                </div>
              </div>

              {/* Messie-Entrümpelung */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <Image 
                    src="/Voller Messie Flur .jpg" 
                    alt="Messie Entrümpelung Höxter"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Messie-Entrümpelung</h3>
                  <p className="text-gray-700 mb-4">
                    Diskrete und respektvolle Hilfe bei vermüllten Wohnungen in Höxter. 
                    Mit Desinfektion und Geruchsneutralisation.
                  </p>
                  <a href="/leistungen#messie-entruempelung" className="inline-flex items-center text-[#C73E3A] hover:text-[#B02E2A] font-semibold">
                    Mehr erfahren
                    <Icon name="arrow-right" size={20} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#2C4F5E] mb-6">
                Entrümpelung in Höxter und allen Stadtteilen
              </h2>
              <p className="text-gray-700 mb-6">
                Als lokaler Partner kennen wir Höxter und die Region wie unsere Westentasche. 
                Wir entrümpeln in allen Stadtteilen und Ortschaften:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Höxter-Kernstadt',
                  'Albaxen',
                  'Bödexen',
                  'Brenkhausen',
                  'Bruchhausen',
                  'Fürstenau',
                  'Godelheim',
                  'Lüchtringen',
                  'Lütmarsen',
                  'Ottbergen',
                  'Ovenhausen',
                  'Stahle'
                ].map((stadtteil) => (
                  <div key={stadtteil} className="flex items-center">
                    <svg className="w-4 h-4 text-[#C73E3A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{stadtteil}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#2C4F5E] mb-6">
                Warum Rümpel Schmiede Höxter?
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-bold text-[#2C4F5E] mb-2 flex items-center">
                    <svg className="w-6 h-6 text-[#C73E3A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Lokal verwurzelt seit 2016
                  </h4>
                  <p className="text-gray-600">
                    Wir kennen die örtlichen Entsorgungswege und Behörden in Höxter genau.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-bold text-[#2C4F5E] mb-2 flex items-center">
                    <svg className="w-6 h-6 text-[#C73E3A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Zuverlässiger Service
                  </h4>
                  <p className="text-gray-600">
                    Schnelle und professionelle Entrümpelung in der gesamten Region Höxter.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-bold text-[#2C4F5E] mb-2 flex items-center">
                    <svg className="w-6 h-6 text-[#C73E3A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Faire Festpreise
                  </h4>
                  <p className="text-gray-600">
                    Transparente Preise ohne versteckte Kosten - speziell für Höxter kalkuliert.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C4F5E] mb-4">
              Das sagen unsere Kunden in Höxter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Über 500 zufriedene Kunden in Höxter und Umgebung - ihre Geschichten sprechen für sich
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Slide 1 */}
              <div className="min-w-full">
                <div className="grid md:grid-cols-3 gap-8 px-4">
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" size={16} className="mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Haushaltsauflösung professionell und zuverlässig durchgeführt. Sehr empfehlenswert!"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Familie Müller</p>
                      <p className="text-sm text-gray-600">Haushaltsauflösung Höxter</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" size={16} className="mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Nach der Entrümpelung war alles besenrein. Schnell und gründlich!"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Herr Schmidt</p>
                      <p className="text-sm text-gray-600">Kellerentrümpelung Höxter</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" size={16} className="mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Professionelle Arbeit, faire Preise. Sehr zuverlässiger Service!"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Frau Weber</p>
                      <p className="text-sm text-gray-600">Komplettservice Höxter</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="min-w-full">
                <div className="grid md:grid-cols-3 gap-8 px-4">
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" size={16} className="mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Express-Service hat perfekt funktioniert. Innerhalb von 48 Stunden war alles erledigt."
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Michael Bauer</p>
                      <p className="text-sm text-gray-600">Express-Entrümpelung Höxter</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" size={16} className="mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Die Entrümpelung war schnell und sauber. Alles wurde fachgerecht entsorgt!"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Familie Hoffmann</p>
                      <p className="text-sm text-gray-600">Entrümpelung Holzminden</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" size={16} className="mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Nachlass-Entrümpelung mit viel Fingerspitzengefühl. Danke für alles!"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Anna Krüger</p>
                      <p className="text-sm text-gray-600">Haushaltsauflösung Brakel</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="min-w-full">
                <div className="grid md:grid-cols-3 gap-8 px-4">
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" size={16} className="mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Als Immobilienverwaltung schätzen wir den Komplettservice sehr. Immer zuverlässig!"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Immobilien Höxter GmbH</p>
                      <p className="text-sm text-gray-600">Mehrere Objekte Höxter</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" size={16} className="mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Dachbodenentrümpelung trotz schwieriger Zugangslage perfekt gemeistert. Top Service!"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Peter Schulz</p>
                      <p className="text-sm text-gray-600">Komplettservice Bad Driburg</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" size={16} className="mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Die Qualität der Arbeit war erstklassig. Sehr empfehlenswert!"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Familie Wagner</p>
                      <p className="text-sm text-gray-600">Entrümpelung Beverungen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-3">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-[#C73E3A]' : 'bg-gray-300'
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Gehe zu Testimonials Seite ${index + 1}`}
                />
              ))}
            </div>

            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300"
              onClick={handlePrevSlide}
              aria-label="Vorherige Testimonials"
            >
              <svg className="w-6 h-6 text-[#2C4F5E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300"
              onClick={handleNextSlide}
              aria-label="Nächste Testimonials"
            >
              <svg className="w-6 h-6 text-[#2C4F5E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C4F5E] mb-4">
              Häufige Fragen zur Entrümpelung in Höxter
            </h2>
            <p className="text-xl text-gray-600">
              Hier finden Sie Antworten auf die wichtigsten Fragen
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left font-semibold text-[#2C4F5E] hover:bg-gray-50 transition-colors flex justify-between items-center"
                  onClick={() => {
                    const element = document.getElementById(`faq-${index}`)
                    if (element) {
                      element.classList.toggle('hidden')
                    }
                  }}
                >
                  <span>{item.question}</span>
                  <svg className="w-5 h-5 text-[#C73E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div id={`faq-${index}`} className="hidden px-6 pb-4">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 bg-[#2C4F5E] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Unser Service-Gebiet um Höxter
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Wir betreuen die gesamte Region Höxter und Umgebung. 
              Professionelle Entrümpelung in Ihrer Nähe!
            </p>
          </div>

          <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
            <div className="bg-[#C73E3A] rounded-lg p-4 text-center transform scale-110">
              <h3 className="font-bold text-lg">Höxter</h3>
              <p className="text-sm opacity-90">Zentrum</p>
            </div>
            <Link href="/entruempelung-holzminden" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Holzminden</h3>
              <p className="text-sm opacity-80">12 km</p>
            </Link>
            <Link href="/entruempelung-bad-driburg" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Bad Driburg</h3>
              <p className="text-sm opacity-80">15 km</p>
            </Link>
            <Link href="/entruempelung-brakel" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Brakel</h3>
              <p className="text-sm opacity-80">18 km</p>
            </Link>
            <Link href="/entruempelung-beverungen" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Beverungen</h3>
              <p className="text-sm opacity-80">10 km</p>
            </Link>
            <Link href="/entruempelung-steinheim" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Steinheim</h3>
              <p className="text-sm opacity-80">20 km</p>
            </Link>
            <Link href="/entruempelung-warburg" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Warburg</h3>
              <p className="text-sm opacity-80">25 km</p>
            </Link>
            <Link href="/entruempelung-borgentreich" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Borgentreich</h3>
              <p className="text-sm opacity-80">22 km</p>
            </Link>
            <Link href="/entruempelung-willebadessen" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Willebadessen</h3>
              <p className="text-sm opacity-80">30 km</p>
            </Link>
            <Link href="/entruempelung-nieheim" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Nieheim</h3>
              <p className="text-sm opacity-80">25 km</p>
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ihr zuverlässiger Partner in der Region Höxter
            </h3>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              Professionelle Entrümpelung mit Festpreisgarantie. 
              Schnell, sauber und zuverlässig in der gesamten Region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/kontakt" className="inline-flex items-center bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-8 py-3 rounded-lg font-semibold transition-all">
                Jetzt Anfrage für Höxter senden
                <span className="ml-2 text-lg">→</span>
              </a>
              <a href="tel:+4915755854945" className="inline-flex items-center bg-white text-[#2C4F5E] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all">
                Sofort anrufen
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#C73E3A] to-[#B02E2A] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Bereit für Ihre Entrümpelung in Höxter?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Nutzen Sie unseren kostenlosen Service für eine unverbindliche Beratung.
            Wir bieten Ihnen den Komplettservice aus einer Hand!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4915755854945" className="bg-white text-[#C73E3A] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Jetzt anrufen: 01575 5854945
            </a>
            <a href="/kontakt" className="bg-transparent border-2 border-white hover:bg-white hover:text-[#C73E3A] px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Kontaktformular
            </a>
          </div>
        </div>
      </section>
    </>
  )
}