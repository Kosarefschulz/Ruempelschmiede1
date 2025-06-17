'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Icon from './Icon'
import Link from 'next/link'
import Script from 'next/script'

interface CityData {
  name: string
  slug: string
  region: string
  postalCode: string
  coordinates: {
    lat: number
    lng: number
  }
  basePrice: number
  komfortPrice: number
  premiumPrice: number
  customerCount: number
  reviewCount: number
  districts?: string[]
  nearbyTowns: Array<{
    name: string
    slug: string
    distance: string
  }>
  localSpecialty?: string
  specialPartnership?: {
    name: string
    description: string
    url: string
  }
  heroTitle?: string
  heroSubtitle?: string
  uniqueServices?: Array<{
    title: string
    description: string
    icon: string
  }>
  testimonials: Array<{
    name: string
    text: string
    service: string
    rating: number
  }>
  faqs: Array<{
    question: string
    answer: string
  }>
}

interface CityPageTemplateProps {
  cityData: CityData
}

export default function CityPageTemplate({ cityData }: CityPageTemplateProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState('services')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  // Lazy load video after initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Structured Data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://ruempelschmiede.de/entruempelung-${cityData.slug}#localbusiness`,
    name: `Rümpel Schmiede ${cityData.name} - Entrümpelung & Haushaltsauflösung`,
    image: [
      `https://ruempelschmiede.de/images/${cityData.slug}-hero.jpg`,
      'https://ruempelschmiede.de/images/logo.png'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: `Servicegebiet ${cityData.name}`,
      addressLocality: cityData.name,
      postalCode: cityData.postalCode,
      addressRegion: cityData.region,
      addressCountry: 'DE'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: cityData.coordinates.lat,
      longitude: cityData.coordinates.lng
    },
    url: `https://ruempelschmiede.de/entruempelung-${cityData.slug}`,
    telephone: '+4908000060970',
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
        name: cityData.name
      },
      ...cityData.nearbyTowns.map(town => ({
        '@type': 'City',
        name: town.name
      }))
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: cityData.reviewCount.toString(),
      bestRating: '5',
      worstRating: '1'
    }
  }

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cityData.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  const handleDotClick = (index: number) => {
    setCurrentSlide(index)
  }

  const handlePrevSlide = () => {
    const totalSlides = Math.ceil(cityData.testimonials.length / 3)
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const handleNextSlide = () => {
    const totalSlides = Math.ceil(cityData.testimonials.length / 3)
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

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
            <li className="text-[#2C4F5E] font-semibold">Entrümpelung {cityData.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section optimiert */}
      <section className="relative overflow-hidden w-full bg-gradient-to-br from-[#2C4F5E] to-[#1E3A47]">
        <div className="absolute inset-0 z-0">
          {/* Placeholder image while video loads */}
          <Image
            src={`/images/${cityData.slug}-hero.jpg`}
            alt={`Entrümpelung ${cityData.name}`}
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          
          {/* Lazy loaded video */}
          {showVideo && (
            <video 
              className="absolute inset-0 w-full h-full object-cover opacity-20" 
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setIsVideoLoaded(true)}
              style={{ opacity: isVideoLoaded ? 0.2 : 0, transition: 'opacity 1s' }}
            >
              <source src="https://ruempelschmiede-cdn.b-cdn.net/Mein%20Film.mp4" type="video/mp4" />
            </video>
          )}
        </div>

        <div className="relative z-10 text-white px-4" style={{ minHeight: '600px', display: 'flex', alignItems: 'center' }}>
          <div className="text-center w-full max-w-7xl mx-auto py-20">
            {/* Local Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <svg className="w-5 h-5 mr-2 text-[#C73E3A]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">Ihr lokaler Partner in {cityData.name}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
              {cityData.heroTitle || `Entrümpelung ${cityData.name}`}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 opacity-90 max-w-4xl mx-auto">
              {cityData.heroSubtitle || `Professionelle Entrümpelung und Haushaltsauflösung in ${cityData.name} und Umgebung. ✓ Festpreise ab ${cityData.basePrice}€ ✓ 24h Express-Service ✓ ${cityData.customerCount}+ zufriedene Kunden`}
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <svg className="w-5 h-5 mr-2 text-[#C73E3A]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold">4.9/5</span>
                <span className="ml-1 opacity-80">({cityData.reviewCount} Bewertungen)</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <svg className="w-5 h-5 mr-2 text-[#C73E3A]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Ø 2 Tage</span>
                <span className="ml-1 opacity-80">Reaktionszeit</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <svg className="w-5 h-5 mr-2 text-[#C73E3A]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">100%</span>
                <span className="ml-1 opacity-80">Zufriedenheit</span>
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
              <a href="tel:+4908000060970" className="bg-white/20 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-[#2C4F5E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all">
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
              Berechnen Sie Ihre Entrümpelungskosten in {cityData.name} sofort!
            </h2>
            <p className="text-xl text-gray-600">
              Unser einzigartiger Kalkulator zeigt Ihnen in 2 Minuten, was Ihre Entrümpelung in {cityData.name} kostet
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-[#2C4F5E]">BASIC</h2>
              <p className="text-3xl font-bold text-[#C73E3A] my-4">ab {cityData.basePrice} €</p>
              <p className="text-gray-600 mb-6">für 1-Zimmer-Wohnung in {cityData.name}</p>
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
              <p className="text-3xl font-bold text-[#C73E3A] my-4">ab {cityData.komfortPrice} €</p>
              <p className="text-gray-600 mb-6">für 1-Zimmer-Wohnung in {cityData.name}</p>
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
              <p className="text-3xl font-bold text-[#C73E3A] my-4">ab {cityData.premiumPrice} €</p>
              <p className="text-gray-600 mb-6">für 1-Zimmer-Wohnung in {cityData.name}</p>
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
              Zum detaillierten Preisrechner für {cityData.name} →
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C4F5E] mb-4">
              Unsere Leistungen in {cityData.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von der kleinen Kellerentrümpelung bis zur kompletten Haushaltsauflösung - 
              wir bieten maßgeschneiderte Lösungen für jeden Bedarf.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Haushaltsauflösung */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <Image 
                  src="/Karton.png" 
                  alt={`Haushaltsauflösung ${cityData.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Haushaltsauflösungen</h3>
                <p className="text-gray-700 mb-4">
                  Komplette Wohnungsauflösungen in {cityData.name} mit Wertanrechnung. Wir kümmern uns um alles - 
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
                  alt={`Express Entrümpelung ${cityData.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-[#C73E3A] text-white px-3 py-1 rounded-full text-sm font-bold">
                  48h Service
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Express-Service {cityData.name}</h3>
                <p className="text-gray-700 mb-4">
                  Eilig? Innerhalb von 48 Stunden räumen wir in {cityData.name} für Sie - garantiert! 
                  Perfekt bei kurzfristigen Terminen.
                </p>
                <a href="/leistungen#express-service" className="inline-flex items-center text-[#C73E3A] hover:text-[#B02E2A] font-semibold">
                  Mehr erfahren
                  <Icon name="arrow-right" size={20} className="ml-2" />
                </a>
              </div>
            </div>

            {/* Gewerbeauflösung */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <Image 
                  src="/Gewerbe 2.jpg" 
                  alt={`Gewerbeauflösung ${cityData.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Gewerbeauflösungen</h3>
                <p className="text-gray-700 mb-4">
                  Büros, Praxen, Läden in {cityData.name} - schnell und diskret. Auch am Wochenende und 
                  außerhalb der Geschäftszeiten möglich.
                </p>
                <a href="/leistungen#gewerbeaufloesung" className="inline-flex items-center text-[#C73E3A] hover:text-[#B02E2A] font-semibold">
                  Mehr erfahren
                  <Icon name="arrow-right" size={20} className="ml-2" />
                </a>
              </div>
            </div>

            {/* Additional Services */}
            {cityData.uniqueServices && cityData.uniqueServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-64 bg-gradient-to-br from-[#2C4F5E] to-[#1E3A47] relative overflow-hidden flex items-center justify-center">
                  <Icon name={service.icon} size={80} className="text-white/20" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-4">
                    {service.description}
                  </p>
                  <a href="/leistungen" className="inline-flex items-center text-[#C73E3A] hover:text-[#B02E2A] font-semibold">
                    Mehr erfahren
                    <Icon name="arrow-right" size={20} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#2C4F5E] mb-6">
                Entrümpelung in {cityData.name} {cityData.districts && 'und allen Stadtteilen'}
              </h2>
              <p className="text-gray-700 mb-6">
                Als lokaler Partner kennen wir {cityData.name} und die Region wie unsere Westentasche. 
                {cityData.districts && ' Wir entrümpeln in allen Stadtteilen und Ortschaften:'}
              </p>
              {cityData.districts && (
                <div className="grid grid-cols-2 gap-3">
                  {cityData.districts.map((district) => (
                    <div key={district} className="flex items-center">
                      <svg className="w-4 h-4 text-[#C73E3A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{district}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#2C4F5E] mb-6">
                Warum Rümpel Schmiede {cityData.name}?
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-bold text-[#2C4F5E] mb-2 flex items-center">
                    <svg className="w-6 h-6 text-[#C73E3A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Lokal verwurzelt
                  </h4>
                  <p className="text-gray-600">
                    Wir kennen die örtlichen Entsorgungswege und Behörden in {cityData.name} genau.
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
                    Transparente Preise ohne versteckte Kosten - speziell für {cityData.name} kalkuliert.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-bold text-[#2C4F5E] mb-2 flex items-center">
                    <svg className="w-6 h-6 text-[#C73E3A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Schneller Service
                  </h4>
                  <p className="text-gray-600">
                    Kurze Wege in {cityData.name} bedeuten schnelle Reaktionszeiten für Sie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Elements Section */}
      <section className="py-16 bg-[#2C4F5E] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Ihre Entrümpelung in {cityData.name} in sicheren Händen
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Seit über 8 Jahren sind wir der vertrauenswürdige Partner für Entrümpelungen in {cityData.name} 
              - wir machen Platz für Neues.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#C73E3A] mb-2">8+</div>
              <p>Jahre Erfahrung</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#C73E3A] mb-2">{cityData.customerCount}+</div>
              <p>Zufriedene Kunden in {cityData.name}</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#C73E3A] mb-2">24h</div>
              <p>Schnellservice</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#C73E3A] mb-2">100%</div>
              <p>Zufriedenheit</p>
            </div>
          </div>

          {/* Trust Elements Grid */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Festpreisgarantie</h4>
              <p className="text-sm opacity-80">Keine versteckten Kosten</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Vollversichert</h4>
              <p className="text-sm opacity-80">Für Ihre Sicherheit</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                  <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Umweltgerecht</h4>
              <p className="text-sm opacity-80">Fachgerechte Entsorgung</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Persönlich</h4>
              <p className="text-sm opacity-80">Ein Ansprechpartner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C4F5E] mb-4">
              Das sagen unsere Kunden in {cityData.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Über {cityData.customerCount} zufriedene Kunden in {cityData.name} und Umgebung - ihre Geschichten sprechen für sich
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Group testimonials into slides of 3 */}
              {Array.from({ length: Math.ceil(cityData.testimonials.length / 3) }, (_, slideIndex) => (
                <div key={slideIndex} className="min-w-full">
                  <div className="grid md:grid-cols-3 gap-8 px-4">
                    {cityData.testimonials.slice(slideIndex * 3, (slideIndex + 1) * 3).map((testimonial, index) => (
                      <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Icon key={i} name="star" size={16} className="mr-1" />
                          ))}
                        </div>
                        <p className="text-gray-700 mb-6 italic">
                          "{testimonial.text}"
                        </p>
                        <div className="border-t pt-4">
                          <p className="font-bold text-[#2C4F5E]">{testimonial.name}</p>
                          <p className="text-sm text-gray-600">{testimonial.service}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            {cityData.testimonials.length > 3 && (
              <>
                <div className="flex justify-center mt-8 gap-3">
                  {Array.from({ length: Math.ceil(cityData.testimonials.length / 3) }, (_, index) => (
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
              </>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C4F5E] mb-4">
              Häufige Fragen zur Entrümpelung in {cityData.name}
            </h2>
            <p className="text-xl text-gray-600">
              Hier finden Sie Antworten auf die wichtigsten Fragen
            </p>
          </div>

          <div className="space-y-4">
            {cityData.faqs.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left font-semibold text-[#2C4F5E] hover:bg-gray-100 transition-colors flex justify-between items-center"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span>{item.question}</span>
                  <svg 
                    className={`w-5 h-5 text-[#C73E3A] transform transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`px-6 pb-4 ${expandedFaq === index ? 'block' : 'hidden'}`}>
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
              Unser Service-Gebiet um {cityData.name}
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Professionelle Entrümpelung nicht nur in {cityData.name}, sondern auch in allen umliegenden Städten und Gemeinden!
            </p>
          </div>

          <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
            <div className="bg-[#C73E3A] rounded-lg p-4 text-center transform scale-110">
              <h3 className="font-bold text-lg">{cityData.name}</h3>
              <p className="text-sm opacity-90">Zentrum</p>
            </div>
            {cityData.nearbyTowns.map((town, index) => (
              <Link 
                key={index}
                href={`/entruempelung-${town.slug}`} 
                className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105"
              >
                <h3 className="font-bold text-lg">{town.name}</h3>
                <p className="text-sm opacity-80">{town.distance}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg mb-4 opacity-90">
              Ihr Ort fehlt noch? Wir kommen trotzdem zu Ihnen!
            </p>
            <p className="text-sm opacity-80 max-w-2xl mx-auto mb-6">
              Wir fahren im gesamten Umkreis von {cityData.name}. 
              Kontaktieren Sie uns für eine individuelle Lösung!
            </p>
            <a href="/kontakt" className="inline-flex items-center bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-8 py-3 rounded-lg font-semibold transition-all">
              Jetzt Anfrage für {cityData.name} senden
              <span className="ml-2 text-lg">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#C73E3A] to-[#B02E2A] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Bereit für Ihre Entrümpelung in {cityData.name}?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Nutzen Sie unseren kostenlosen Service für eine unverbindliche Beratung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4908000060970" className="bg-white text-[#C73E3A] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Jetzt anrufen: 0800 0060970
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