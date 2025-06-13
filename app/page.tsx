'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Icon from './components/Icon'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showBielefeldCities, setShowBielefeldCities] = useState(false)

  const handleDotClick = (index: number) => {
    setCurrentSlide(index)
  }

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3)
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3)
  }

  return (
    <>
      {/* Hero Section mit Video */}
      <section className="relative overflow-hidden w-full">
        <div className="absolute inset-0 z-0">
          <video 
            className="w-full h-full object-cover" 
            autoPlay
            loop
            muted
            playsInline
            style={{ height: '70vh' }}
          >
            <source src="https://ruempelschmiede-cdn.b-cdn.net/Mein%20Film.mp4" type="video/mp4" />
            Video wird geladen...
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-[#2C4F5E]/40 to-[#2C4F5E]/40"></div>
        </div>

        <div className="relative z-10 text-white px-4" style={{ height: 'clamp(400px, 70vh, 800px)', display: 'flex', alignItems: 'center' }}>
          <div className="text-center w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
              Wir machen kaputt, aber das richtig gut!
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 opacity-90 max-w-4xl mx-auto">
              Professionelle Entrümpelung, Haushaltsauflösung und Gewerbeauflösung 
              Deutschlandweit - Alles aus einer Hand mit Zufriedenheitsgarantie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/preise#kalkulator" className="bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-8 py-4 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all">
                Preis berechnen
              </a>
              <a href="/kontakt" className="border-2 border-white hover:bg-white hover:text-[#2C4F5E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                Direktanfrage
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Preispakete */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C4F5E] mb-4">
              Berechnen Sie Ihre Entrümpelungskosten sofort!
            </h2>
            <p className="text-xl text-gray-600">
              Unser einzigartiger Kalkulator zeigt Ihnen in 2 Schritten, was Ihre Entrümpelung kostet
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-[#2C4F5E]">BASIC</h2>
              <p className="text-3xl font-bold text-[#C73E3A] my-4">ab 650 €</p>
              <p className="text-gray-600 mb-6">für 1-Zimmer-Wohnung</p>
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

            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-2 border-[#2C4F5E]">
              <div className="bg-[#2C4F5E] text-white py-1 px-4 rounded-full inline-block mb-4">
                BELIEBTESTE WAHL
              </div>
              <h2 className="text-2xl font-bold text-[#2C4F5E]">KOMFORT</h2>
              <p className="text-3xl font-bold text-[#C73E3A] my-4">ab 1.290 €</p>
              <p className="text-gray-600 mb-6">für 1-Zimmer-Wohnung</p>
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

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-[#2C4F5E]">PREMIUM</h2>
              <p className="text-3xl font-bold text-[#C73E3A] my-4">ab 1.890 €</p>
              <p className="text-gray-600 mb-6">für 1-Zimmer-Wohnung</p>
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
              Zum detaillierten Preisrechner →
            </a>
          </div>
        </div>
      </section>

      {/* Warum wir */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C4F5E] mb-4">
              Ihre Entrümpelung in sicheren Händen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seit über 20 Jahren sind wir der vertrauenswürdige Partner für Entrümpelungen in ganz Deutschland 
              - wir machen Platz für Neues.
            </p>
          </div>

          {/* Statistiken */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#C73E3A] mb-2">7+</div>
              <p className="text-gray-600">Jahre Erfahrung</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#C73E3A] mb-2">1200+</div>
              <p className="text-gray-600">Zufriedene Kunden</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#C73E3A] mb-2">24h</div>
              <p className="text-gray-600">Schnellservice</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#C73E3A] mb-2">100%</div>
              <p className="text-gray-600">Zufriedenheit</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#2C4F5E] text-center mb-4">
              So einfach funktioniert's
            </h3>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              In nur 4 einfachen Schritten zu Ihrer professionellen Entrümpelung - 
              transparent, fair und zuverlässig.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C73E3A] to-[#B02E2A] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    1
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-1">
                  <h4 className="text-xl font-bold text-[#2C4F5E] mb-3">Kostenlose Besichtigung</h4>
                  <p className="text-gray-600">
                    Wir kommen vorbei, schauen uns alles an und erstellen ein unverbindliches Festpreis Angebot - 
                    natürlich kostenlos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C73E3A] to-[#B02E2A] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    2
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-1">
                  <h4 className="text-xl font-bold text-[#2C4F5E] mb-3">Transparente Preisgestaltung</h4>
                  <p className="text-gray-600">
                    Sie erhalten ein detailliertes Festpreisangebot. Transparente Preise, 
                    garantierte Kostensicherheit - versprochen!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C73E3A] to-[#B02E2A] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    3
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-1">
                  <h4 className="text-xl font-bold text-[#2C4F5E] mb-3">Professionelle Durchführung</h4>
                  <p className="text-gray-600">
                    Unser erfahrenes Team räumt schnell, sauber und zuverlässig. 
                    Wertgegenstände werden selbstverständlich angerechnet.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C73E3A] to-[#B02E2A] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    4
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-1">
                  <h4 className="text-xl font-bold text-[#2C4F5E] mb-3">Besenreine Übergabe</h4>
                  <p className="text-gray-600">
                    Wir hinterlassen alles besenrein. Auf Wunsch übernehmen wir auch 
                    die Schlüsselübergabe an den Vermieter.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Elements */}
          <div className="bg-gradient-to-r from-[#2C4F5E] to-[#1E3A47] text-white rounded-2xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 text-center">
              Warum über 1.200 Kunden uns vertrauen
            </h3>
            <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
              Ihre Zufriedenheit ist unser Antrieb. Deshalb garantieren wir höchste Standards bei jeder Entrümpelung.
            </p>
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
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-3xl font-bold">98%</p>
                  <p className="text-sm opacity-80">Weiterempfehlungsrate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="text-sm opacity-80">Erreichbarkeit im Notfall</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">0€</p>
                  <p className="text-sm opacity-80">Anfahrtskosten</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C4F5E] mb-4">
              Ihre Vorteile auf einen Blick
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bei uns erhalten Sie eine professionelle Entrümpelung 
              und zusätzlich ein Rundum-sorglos-Paket mit echtem Mehrwert.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Sicherheit & Qualität */}
            <div className="bg-[#F5F5F0] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2C4F5E] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {/* Icon Platzhalter für Sicherheit */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4F5E] mb-2">Maximale Sicherheit</h3>
                  <p className="text-gray-600 text-sm">
                    Wir sind Vollversichert- Ihre Immobilie ist bei uns in professionellen Händen - 
                    garantierte Qualität und Kundenzufriedenheit. Unsere Mitarbeiter sind geschult im Umgang mit sensiblen 
                    Gegenständen und arbeiten stets diskret. Mit über 7 Jahren Erfahrung wissen wir genau, worauf es ankommt. 
                    Alle Arbeiten werden dokumentiert und Sie erhalten eine Abnahmebestätigung.
                  </p>
                </div>
              </div>
            </div>

            {/* Kostenlos & Unverbindlich */}
            <div className="bg-[#F5F5F0] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2C4F5E] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {/* Icon Platzhalter für Kostenlose Besichtigung */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4F5E] mb-2">Kostenlose Besichtigung</h3>
                  <p className="text-gray-600 text-sm">
                    Unverbindliche Beratung vor Ort - völlig kostenfrei und unverbindlich. Transparente, günstige Festpreise 
                    mit garantierter Kostensicherheit - Sie wissen immer, was auf Sie zukommt. Unser detailliertes Angebot listet alle 
                    Positionen einzeln auf. Kostenfreie Anfahrt in ganz Deutschland. Faire Preisgestaltung mit Bestpreis-Garantie. 
                    Zahlung erst nach erfolgreicher Durchführung möglich.
                  </p>
                </div>
              </div>
            </div>

            {/* Nachhaltige Entsorgung */}
            <div className="bg-[#F5F5F0] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2C4F5E] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {/* Icon Platzhalter für Recycling */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4F5E] mb-2">Nachhaltige Entsorgung</h3>
                  <p className="text-gray-600 text-sm">
                    Fachgerechte und umweltschonende Entsorgung nach neuesten Standards. Wir trennen sorgfältig, recyceln 
                    maximal und führen Wertstoffe dem Kreislauf wieder zu. Über 85% der Materialien werden wiederverwertet. 
                    Zusammenarbeit mit zertifizierten Entsorgungsfachbetrieben. Sie erhalten alle erforderlichen 
                    Entsorgungsnachweise für Ihre Unterlagen. Aktiver Beitrag zum Umweltschutz.
                  </p>
                </div>
              </div>
            </div>

            {/* Wertanrechnung */}
            <div className="bg-[#F5F5F0] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2C4F5E] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {/* Icon Platzhalter für Wertanrechnung */}
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4F5E] mb-2">Wertanrechnung garantiert</h3>
                  <p className="text-gray-600 text-sm">
                    Wertvolle Gegenstände rechnen wir fair und transparent an. Möbel, Antiquitäten, Elektrogeräte - alles wird 
                    geprüft. Wiederverkauf über unsere Partner möglich - Sie profitieren direkt von reduzierten Kosten. 
                    Kostenlose Wertermittlung durch unsere Experten. Oft reduziert sich der Endpreis um 30-50%. 
                    Direktauszahlung oder Verrechnung mit den Entrümpelungskosten möglich.
                  </p>
                </div>
              </div>
            </div>

            {/* Soziales Engagement */}
            <div className="bg-[#F5F5F0] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2C4F5E] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {/* Icon Platzhalter für Herz/Soziales */}
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4F5E] mb-2">Soziales Engagement</h3>
                  <p className="text-gray-600 text-sm">
                    Gut erhaltene Gegenstände spenden wir an gemeinnützige Organisationen wie Caritas, DRK oder lokale 
                    Sozialkaufhäuser. Unterstützung sozialer Projekte - Ihre Entrümpelung hilft Menschen in Not. 
                    Möbel für Flüchtlingsunterkünfte, Kleidung für Bedürftige, Spielzeug für Kinderheime. 
                    Sie erhalten auf Wunsch eine Spendenbescheinigung. Gemeinsam Gutes tun!
                  </p>
                </div>
              </div>
            </div>

            {/* Professionell */}
            <div className="bg-[#F5F5F0] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2C4F5E] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {/* Icon Platzhalter für Professionalität */}
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4F5E] mb-2">Höchste Professionalität</h3>
                  <p className="text-gray-600 text-sm">
                    Geschultes und festangestelltes Personal - ausschließlich eigene Mitarbeiter. Modernste Ausrüstung und Fahrzeuge 
                    für effiziente Arbeit. Bewährte Prozesse und Qualitätsmanagement für perfekte Ergebnisse. 
                    Pünktlichkeit und Zuverlässigkeit sind selbstverständlich. Saubere Arbeitskleidung und höfliches 
                    Auftreten. 98% Kundenzufriedenheit sprechen für sich.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-[#C73E3A] to-[#B02E2A] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Überzeugt? Lassen Sie uns gemeinsam Ihr Projekt angehen!
            </h3>
            <p className="mb-6 opacity-90">
              Kostenlose Besichtigung • Unverbindliches Angebot • Günstige Festpreise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/kontakt" className="bg-white text-[#C73E3A] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all">
                Jetzt Termin vereinbaren
              </a>
              <a href="tel:+4915755854945" className="border-2 border-white hover:bg-white hover:text-[#C73E3A] px-8 py-3 rounded-lg font-semibold transition-all">
                Direkt anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen mit Bildern */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C4F5E] mb-4">
              Unsere Leistungen im Überblick
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von der kleinen Kellerentrümpelung bis zur kompletten Entkernung - 
              wir bieten maßgeschneiderte Lösungen für jeden Bedarf.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Haushaltsauflösung */}
            <a href="/leistungen#haushaltsaufloesung" className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <Image 
                    src="/Karton.png" 
                    alt="Haushaltsauflösung Bielefeld - Komplette Wohnungsräumung mit Umzugskartons in OWL"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Haushaltsauflösungen</h3>
                  <p className="text-gray-700 mb-4">
                    Komplette Wohnungsauflösungen mit Wertanrechnung. Wir kümmern uns um alles - 
                    von der Entrümpelung bis zur Endreinigung.
                  </p>
                  <span className="inline-flex items-center text-[#C73E3A] hover:text-[#B02E2A] font-semibold">
                    Mehr erfahren
                    <Icon name="arrow-right" size={20} className="ml-2" />
                  </span>
                </div>
              </div>
            </a>

            {/* Gewerbeauflösung */}
            <a href="/leistungen#gewerbeaufloesung" className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <Image 
                    src="/Gewerbe 2.jpg" 
                    alt="Gewerbeauflösung Bielefeld - Professionelle Büroräumung & Betriebsauflösung in OWL"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Gewerbeauflösungen</h3>
                  <p className="text-gray-700 mb-4">
                    Büros, Praxen, Läden - schnell und diskret. Auch am Wochenende und 
                    außerhalb der Geschäftszeiten möglich.
                  </p>
                  <span className="inline-flex items-center text-[#C73E3A] hover:text-[#B02E2A] font-semibold">
                    Mehr erfahren
                    <Icon name="arrow-right" size={20} className="ml-2" />
                  </span>
                </div>
              </div>
            </a>

            {/* Messie-Wohnungen */}
            <a href="/leistungen#messie-entruempelung" className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <Image 
                    src="/Voller Messie Flur .jpg" 
                    alt="Messie-Wohnung Entrümpelung Steinhagen - Diskrete Wohnungsräumung mit Desinfektion OWL"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Messie-Wohnungen</h3>
                  <p className="text-gray-700 mb-4">
                    Sensible Räumung mit Desinfektion. Wir arbeiten diskret, respektvoll 
                    und mit respektvollem Verständnis.
                  </p>
                  <span className="inline-flex items-center text-[#C73E3A] hover:text-[#B02E2A] font-semibold">
                    Mehr erfahren
                    <Icon name="arrow-right" size={20} className="ml-2" />
                  </span>
                </div>
              </div>
            </a>

            {/* Kellerentrümpelung */}
            <a href="/leistungen#keller-dachboden" className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <Image 
                    src="/1-2.jpg" 
                    alt="Kellerentrümpelung Bielefeld - Günstige Kellerräumung ab 390€ in OWL Region"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Kellerentrümpelung</h3>
                  <p className="text-gray-700 mb-4">
                    Endlich wieder Platz im Keller! Schnell und günstig - oft schon ab 390€. 
                    Inkl. fachgerechter Entsorgung.
                  </p>
                  <span className="inline-flex items-center text-[#C73E3A] hover:text-[#B02E2A] font-semibold">
                    Mehr erfahren
                    <Icon name="arrow-right" size={20} className="ml-2" />
                  </span>
                </div>
              </div>
            </a>

            {/* Dachbodenentrümpelung */}
            <a href="/leistungen#keller-dachboden" className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <Image 
                    src="/Dachboden.jpg" 
                    alt="Dachbodenentrümpelung Steinhagen - Sichere Dachbodenräumung schwer zugänglicher Bereiche OWL"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Dachbodenentrümpelung</h3>
                  <p className="text-gray-700 mb-4">
                    Schwer zugängliche Dachböden? Kein Problem für unser erfahrenes Team! 
                    Sicher und professionell.
                  </p>
                  <span className="inline-flex items-center text-[#C73E3A] hover:text-[#B02E2A] font-semibold">
                    Mehr erfahren
                    <Icon name="arrow-right" size={20} className="ml-2" />
                  </span>
                </div>
              </div>
            </a>

            {/* Express-Service */}
            <a href="/leistungen#express-service" className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <Image 
                    src="/76f2dd53-6826-4e2f-b45b-aaa99c3206c9.png" 
                    alt="Express Entrümpelung Bielefeld - 48h Schnellservice Haushaltsauflösung in OWL"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 bg-[#C73E3A] text-white px-3 py-1 rounded-full text-sm font-bold">
                    48h Service
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Express-Service</h3>
                  <p className="text-gray-700 mb-4">
                    Eilig? Innerhalb von 48 Stunden räumen wir für Sie - garantiert! 
                    Perfekt bei kurzfristigen Terminen.
                  </p>
                  <span className="inline-flex items-center text-[#C73E3A] hover:text-[#B02E2A] font-semibold">
                    Mehr erfahren
                    <Icon name="arrow-right" size={20} className="ml-2" />
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* CTA am Ende */}
          <div className="text-center mt-12">
            <a href="/leistungen" className="inline-flex items-center bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-8 py-4 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all">
              Alle Leistungen ansehen
              <span className="ml-2 text-lg">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Alles aus einer Hand - Renovierung */}
      <section className="py-16 bg-gradient-to-br from-[#1E3A47] to-[#2C4F5E] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Mehr als nur Entrümpelung - Ihre Komplettlösung
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Nach der Entrümpelung geht es oft erst richtig los. Deshalb bieten wir Ihnen 
              gemeinsam mit unserem Partner alles aus einer Hand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                  <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Von der Entrümpelung zur Traumimmobilie
                </h3>
                <p className="opacity-90 mb-4">
                  Ob Nachlasswohnung, Messie-Haushalt oder einfach nur Renovierungsbedarf - 
                  wir machen nicht nur sauber, sondern auch schön!
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#C73E3A] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Komplettsanierung nach Entrümpelung</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#C73E3A] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Renovierung für Verkauf oder Vermietung</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#C73E3A] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Modernisierung und Werterhöhung</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#C73E3A] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Alles aus einer Hand - ein Ansprechpartner</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#C73E3A] rounded-xl p-6">
                <h4 className="text-xl font-bold mb-2 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Wussten Sie schon?
                </h4>
                <p className="opacity-90">
                  Die Rümpel Schmiede und der Renovierungstrupp gehören zusammen! 
                  Das bedeutet für Sie: Perfekte Abstimmung, nahtlose Übergänge und 
                  garantierte Qualität von Anfang bis Ende.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ihr Plus: Renovierung nach Maß
              </h3>
              <p className="opacity-90 mb-6">
                Entdecken Sie, wie wir Ihre Immobilie nach der Entrümpelung 
                in neuem Glanz erstrahlen lassen.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-center mb-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="font-semibold">Komplettrenovierung</p>
                  <p className="text-sm opacity-80">Vom Boden bis zur Decke</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-center mb-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <p className="font-semibold">Malerarbeiten</p>
                  <p className="text-sm opacity-80">Frische Farben, neue Atmosphäre</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-center mb-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <p className="font-semibold">Bad & Sanitär</p>
                  <p className="text-sm opacity-80">Moderne Bäder, zeitgemäße Technik</p>
                </div>
              </div>

              <a 
                href="https://renovierungstrupp.de" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-[#2C4F5E] hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transform hover:scale-105 transition-all shadow-lg"
              >
                Zum Renovierungstrupp
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg opacity-90">
              <span className="font-bold">Sparen Sie Zeit und Nerven:</span> Ein Auftrag, ein Ansprechpartner, 
              eine Rechnung - von der Entrümpelung bis zur schlüsselfertigen Übergabe.
            </p>
          </div>
        </div>
      </section>

      {/* Die Steinpfleger Partnerschaft */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C4F5E] mb-4">
              Unser Partner für professionelle Steinreinigung
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Als Franchise-Partner von Die Steinpfleger für das Gebiet um Höxter bieten wir Ihnen 
              zusätzlich professionelle Steinreinigung und -sanierung aus einer Hand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-[#F5F5F0] to-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#2C4F5E] mb-4 flex items-center">
                <svg className="w-8 h-8 mr-3 text-[#C73E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Die Steinpfleger - Unser Partner im Raum Höxter
              </h3>
              
              <p className="text-gray-700 mb-6">
                Nach einer Entrümpelung sind oft auch Außenbereiche, Terrassen, Einfahrten oder 
                Fassaden renovierungsbedürftig. Als offizieller Franchise-Partner von Die Steinpfleger 
                bieten wir Ihnen im Raum Höxter professionelle Steinreinigung und -pflege.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#C73E3A] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Professionelle Terrassenreinigung</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#C73E3A] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Fassadenreinigung und -schutz</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#C73E3A] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Pflasterstein- und Natursteinreinigung</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#C73E3A] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Langzeitschutz und Imprägnierung</span>
                </li>
              </ul>

              <div className="bg-[#2C4F5E] text-white rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold mb-1">Exklusiv für die Region Höxter</p>
                <p className="text-sm opacity-90">
                  Als einziger autorisierter Die Steinpfleger Partner im Raum Höxter garantieren 
                  wir höchste Qualität nach bewährtem System.
                </p>
              </div>

              <a 
                href="https://www.die-steinpfleger.de" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-6 py-3 rounded-lg font-semibold transition-all w-full justify-center"
              >
                Mehr über Die Steinpfleger erfahren
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="space-y-6">
              <div className="bg-[#F5F5F0] rounded-xl p-6">
                <h4 className="text-xl font-bold text-[#2C4F5E] mb-3">
                  Perfekte Ergänzung zur Entrümpelung
                </h4>
                <p className="text-gray-700 mb-4">
                  Nach einer Haushaltsauflösung oder Entrümpelung sind oft auch die Außenbereiche 
                  in einem schlechten Zustand. Mit unserem Steinpflege-Service machen wir auch 
                  Terrassen, Einfahrten und Fassaden wieder wie neu.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-[#C73E3A]">95%</div>
                    <div className="text-sm text-gray-600">Schmutzentfernung</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-[#C73E3A]">10+</div>
                    <div className="text-sm text-gray-600">Jahre Erfahrung</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-[#C73E3A] rounded-xl p-6">
                <h4 className="text-lg font-bold text-[#2C4F5E] mb-2">
                  Unser Service-Gebiet für Steinpflege:
                </h4>
                <p className="text-gray-700 mb-3">
                  Als Die Steinpfleger Franchise-Partner betreuen wir exklusiv die Region um Höxter:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#F5F5F0] px-3 py-1 rounded-full text-sm">Höxter</span>
                  <span className="bg-[#F5F5F0] px-3 py-1 rounded-full text-sm">Holzminden</span>
                  <span className="bg-[#F5F5F0] px-3 py-1 rounded-full text-sm">Bad Driburg</span>
                  <span className="bg-[#F5F5F0] px-3 py-1 rounded-full text-sm">Brakel</span>
                  <span className="bg-[#F5F5F0] px-3 py-1 rounded-full text-sm">Beverungen</span>
                  <span className="bg-[#F5F5F0] px-3 py-1 rounded-full text-sm">und Umgebung</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#2C4F5E] to-[#1E3A47] text-white rounded-xl p-6">
                <h4 className="text-lg font-bold mb-2">
                  Alles aus einer Hand
                </h4>
                <p className="text-sm opacity-90">
                  Entrümpelung + Renovierung + Steinpflege = Ihre Immobilie in Bestform! 
                  Profitieren Sie von unserem einzigartigen Komplettservice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C4F5E] mb-4">
              Das sagen unsere Kunden
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Über 1.200 zufriedene Kunden in ganz Deutschland - ihre Geschichten sprechen für sich
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
                      "Nach dem plötzlichen Tod meiner Mutter stand ich völlig überfordert vor ihrer Wohnung. 
                      Das Team war sowohl professionell als auch unglaublich einfühlsam."
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Maria Schneider</p>
                      <p className="text-sm text-gray-600">Haushaltsauflösung in Bielefeld</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" size={16} className="mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Das Team war diskret, respektvoll und hat uns stets das Gefühl gegeben, 
                      verstanden zu werden. Endlich können wir wieder durchatmen."
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Familie Weber</p>
                      <p className="text-sm text-gray-600">Messie-Entrümpelung in Hamburg</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" size={16} className="mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Das Komfort-Paket war perfekt! Der Preis war fair und transparent - 
                      alles wie versprochen!"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Thomas Bauer</p>
                      <p className="text-sm text-gray-600">Wohnungsauflösung in München</p>
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
                      "Unser Keller war 30 Jahre eine Rumpelkammer. In nur 4 Stunden haben sie Ordnung geschaffen!"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Petra und Klaus Müller</p>
                      <p className="text-sm text-gray-600">Kellerentrümpelung in Berlin</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" size={16} className="mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Der Express-Service war unglaublich! Innerhalb von 48 Stunden war alles erledigt."
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Michael Hoffmann</p>
                      <p className="text-sm text-gray-600">Express-Service Frankfurt</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" size={16} className="mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Das Team kam am Wochenende und arbeitete diskret. Funktionierende Büromöbel wurden an eine Schule gespendet."
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">StartUp GmbH</p>
                      <p className="text-sm text-gray-600">Büroauflösung in Köln</p>
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
                      "Das Team hat uns liebevoll beim Aussortieren geholfen und wichtige Erinnerungen bewahrt."
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Ingrid und Heinz Schmidt</p>
                      <p className="text-sm text-gray-600">Haushaltsauflösung in Stuttgart</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" size={16} className="mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Das Team hat jeden Fund mit mir besprochen und sogar ein wertvolles Gemälde entdeckt."
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Lisa Zimmermann</p>
                      <p className="text-sm text-gray-600">Dachbodenentrümpelung in Düsseldorf</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" size={16} className="mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Pünktlich, sauber, fair im Preis. Die Wohnungen werden besenrein übergeben."
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Robert Wagner</p>
                      <p className="text-sm text-gray-600">Immobilienverwaltung Deutschland</p>
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
                />
              ))}
            </div>

            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300"
              onClick={handlePrevSlide}
            >
              <div className="w-0 h-0 border-t-[6px] border-r-[10px] border-b-[6px] border-t-transparent border-r-[#2C4F5E] border-b-transparent"></div>
            </button>
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300"
              onClick={handleNextSlide}
            >
              <div className="w-0 h-0 border-t-[6px] border-l-[10px] border-b-[6px] border-t-transparent border-l-[#2C4F5E] border-b-transparent"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Städte-Bereich */}
      <section className="py-16 bg-[#2C4F5E] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Deutschlandweit für Sie da
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Von Hamburg bis München, von Berlin bis Köln - wir sind in allen großen Städten 
              und deren Umgebung für Sie im Einsatz.
            </p>
          </div>

          {/* Hauptstädte */}
          <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
            <a href="/entruempelung-berlin" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Berlin</h3>
              <p className="text-sm opacity-80">3,7 Mio. Einwohner</p>
            </a>
            <a href="/entruempelung-hamburg" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Hamburg</h3>
              <p className="text-sm opacity-80">1,9 Mio. Einwohner</p>
            </a>
            <a href="/entruempelung-muenchen" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">München</h3>
              <p className="text-sm opacity-80">1,5 Mio. Einwohner</p>
            </a>
            <a href="/entruempelung-koeln" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Köln</h3>
              <p className="text-sm opacity-80">1,1 Mio. Einwohner</p>
            </a>
            <a href="/entruempelung-frankfurt" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Frankfurt am Main</h3>
              <p className="text-sm opacity-80">750.000 Einwohner</p>
            </a>
            <a href="/entruempelung-stuttgart" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Stuttgart</h3>
              <p className="text-sm opacity-80">630.000 Einwohner</p>
            </a>
            <a href="/entruempelung-duesseldorf" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Düsseldorf</h3>
              <p className="text-sm opacity-80">620.000 Einwohner</p>
            </a>
            <a href="/entruempelung-leipzig" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Leipzig</h3>
              <p className="text-sm opacity-80">600.000 Einwohner</p>
            </a>
            <a href="/entruempelung-dortmund" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Dortmund</h3>
              <p className="text-sm opacity-80">590.000 Einwohner</p>
            </a>
            <a href="/entruempelung-essen" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Essen</h3>
              <p className="text-sm opacity-80">580.000 Einwohner</p>
            </a>
            <a href="/entruempelung-bremen" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Bremen</h3>
              <p className="text-sm opacity-80">570.000 Einwohner</p>
            </a>
            <a href="/entruempelung-dresden" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Dresden</h3>
              <p className="text-sm opacity-80">560.000 Einwohner</p>
            </a>
            <a href="/entruempelung-hannover" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Hannover</h3>
              <p className="text-sm opacity-80">540.000 Einwohner</p>
            </a>
            <a href="/entruempelung-nuernberg" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Nürnberg</h3>
              <p className="text-sm opacity-80">520.000 Einwohner</p>
            </a>
            <a href="/entruempelung-duisburg" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Duisburg</h3>
              <p className="text-sm opacity-80">500.000 Einwohner</p>
            </a>
            <a href="/entruempelung-bochum" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Bochum</h3>
              <p className="text-sm opacity-80">365.000 Einwohner</p>
            </a>
            <a href="/entruempelung-wuppertal" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Wuppertal</h3>
              <p className="text-sm opacity-80">355.000 Einwohner</p>
            </a>
            <a href="/entruempelung-bielefeld" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Bielefeld</h3>
              <p className="text-sm opacity-80">340.000 Einwohner</p>
            </a>
            <a href="/entruempelung-bonn" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Bonn</h3>
              <p className="text-sm opacity-80">330.000 Einwohner</p>
            </a>
            <a href="/entruempelung-muenster" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Münster</h3>
              <p className="text-sm opacity-80">320.000 Einwohner</p>
            </a>
          </div>

          {/* Bielefeld Region - Aufklappbarer Bereich */}
          <div className="mb-8">
            <button 
              onClick={() => setShowBielefeldCities(!showBielefeldCities)}
              className="bg-white/20 hover:bg-white/30 rounded-lg p-4 text-center transition-all duration-300 w-full flex items-center justify-center gap-3 group"
            >
              <h3 className="font-bold text-lg">Region Bielefeld</h3>
              <p className="text-sm opacity-80">12 weitere Städte</p>
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${showBielefeldCities ? 'rotate-180' : ''}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {showBielefeldCities && (
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 animate-fadeIn">
                <a href="/entruempelung-guetersloh" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                  <h3 className="font-bold text-lg">Gütersloh</h3>
                  <p className="text-sm opacity-80">18 km</p>
                </a>
                <a href="/entruempelung-herford" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                  <h3 className="font-bold text-lg">Herford</h3>
                  <p className="text-sm opacity-80">20 km</p>
                </a>
                <a href="/entruempelung-paderborn" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                  <h3 className="font-bold text-lg">Paderborn</h3>
                  <p className="text-sm opacity-80">45 km</p>
                </a>
                <a href="/entruempelung-bad-salzuflen" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                  <h3 className="font-bold text-lg">Bad Salzuflen</h3>
                  <p className="text-sm opacity-80">25 km</p>
                </a>
                <a href="/entruempelung-osnabrueck" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                  <h3 className="font-bold text-lg">Osnabrück</h3>
                  <p className="text-sm opacity-80">50 km</p>
                </a>
                <a href="/entruempelung-steinhagen" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                  <h3 className="font-bold text-lg">Steinhagen</h3>
                  <p className="text-sm opacity-80">8 km</p>
                </a>
                <a href="/entruempelung-spenge" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                  <h3 className="font-bold text-lg">Spenge</h3>
                  <p className="text-sm opacity-80">15 km</p>
                </a>
                <a href="/entruempelung-halle-westfalen" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                  <h3 className="font-bold text-lg">Halle (Westfalen)</h3>
                  <p className="text-sm opacity-80">12 km</p>
                </a>
                <a href="/entruempelung-lage" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                  <h3 className="font-bold text-lg">Lage</h3>
                  <p className="text-sm opacity-80">19 km</p>
                </a>
                <a href="/entruempelung-melle" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                  <h3 className="font-bold text-lg">Melle</h3>
                  <p className="text-sm opacity-80">23 km</p>
                </a>
                <a href="/entruempelung-detmold" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                  <h3 className="font-bold text-lg">Detmold</h3>
                  <p className="text-sm opacity-80">25 km</p>
                </a>
                <a href="/entruempelung-lemgo" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                  <h3 className="font-bold text-lg">Lemgo</h3>
                  <p className="text-sm opacity-80">22 km</p>
                </a>
              </div>
            )}
          </div>

          <div className="text-center">
            <p className="text-lg mb-4 opacity-90">
              Ihre Stadt fehlt noch? Wir kommen trotzdem zu Ihnen!
            </p>
            <p className="text-sm opacity-80 max-w-2xl mx-auto mb-6">
              Wir sind deutschlandweit im Einsatz und kommen auch in kleinere Städte und Gemeinden. 
              Kontaktieren Sie uns einfach - wir finden eine Lösung für Sie!
            </p>
            <a href="/kontakt" className="inline-flex items-center bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-8 py-3 rounded-lg font-semibold transition-all">
              Jetzt anfragen
              <span className="ml-2 text-lg">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}