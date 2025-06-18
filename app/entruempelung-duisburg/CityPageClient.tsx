'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Icon from '../components/Icon'
import CitiesSection from '../components/common/CitiesSection'
import QualitySeals from '../components/common/QualitySeals'

export default function CityPageClient() {
  const [currentSlide, setCurrentSlide] = useState(0)

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
            poster="/video-poster.jpg"
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
              Entrümpelung Duisburg - Stark am Rhein!
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 opacity-90 max-w-4xl mx-auto">
              Professionelle Entrümpelung, Haushaltsauflösung und Gewerbeauflösung 
              in Duisburg und Umgebung - Alles aus einer Hand mit Zufriedenheitsgarantie.
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
              Berechnen Sie Ihre Entrümpelungskosten in Duisburg sofort!
            </h2>
            <p className="text-xl text-gray-600">
              Unser einzigartiger Kalkulator zeigt Ihnen in 2 Minuten, was Ihre Entrümpelung in Duisburg kostet
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-[#2C4F5E]">BASIC</h2>
              <p className="text-3xl font-bold text-[#C73E3A] my-4">ab 685 €</p>
              <p className="text-gray-600 mb-6">für 1-Zimmer-Wohnung in Duisburg</p>
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
              <p className="text-3xl font-bold text-[#C73E3A] my-4">ab 1370 €</p>
              <p className="text-gray-600 mb-6">für 1-Zimmer-Wohnung in Duisburg</p>
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
              <p className="text-3xl font-bold text-[#C73E3A] my-4">ab 2040 €</p>
              <p className="text-gray-600 mb-6">für 1-Zimmer-Wohnung in Duisburg</p>
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
              Zum detaillierten Preisrechner für Duisburg →
            </a>
          </div>
        </div>
      </section>

      {/* Warum wir */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C4F5E] mb-4">
              Ihre Entrümpelung in Duisburg in sicheren Händen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seit über 8 Jahren sind wir der vertrauenswürdige Partner für Entrümpelungen in ganz Duisburg 
              - wir machen Platz für Neues.
            </p>
          </div>

          {/* Statistiken */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#C73E3A] mb-2">8+</div>
              <p className="text-gray-600">Jahre Erfahrung</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#C73E3A] mb-2">600+</div>
              <p className="text-gray-600">Zufriedene Kunden in Duisburg</p>
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
              So einfach funktioniert's in Duisburg
            </h3>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              In nur 4 einfachen Schritten zu Ihrer professionellen Entrümpelung in Duisburg - 
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
                  <h4 className="text-xl font-bold text-[#2C4F5E] mb-3">Kostenlose Besichtigung in Duisburg</h4>
                  <p className="text-gray-600">
                    Wir kommen zu Ihnen nach Duisburg, schauen uns alles an und erstellen ein unverbindliches Festpreis Angebot - 
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
                    Sie erhalten ein detailliertes Festpreisangebot für Ihre Immobilie in Duisburg. Keine Überraschungen, 
                    garantierte Kostentransparenz - versprochen!
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
                    Unser erfahrenes Team in Duisburg räumt schnell, sauber und zuverlässig. 
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
                    Wir hinterlassen Ihre Wohnung in Duisburg besenrein. Auf Wunsch übernehmen wir auch 
                    die Schlüsselübergabe an den Vermieter.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Elements */}
          <div className="bg-gradient-to-r from-[#2C4F5E] to-[#1E3A47] text-white rounded-2xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 text-center">
              Warum über 600 Kunden in Duisburg uns vertrauen
            </h3>
            <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
              Ihre Zufriedenheit ist unser Antrieb. Deshalb garantieren wir höchste Standards bei jeder Entrümpelung in Duisburg.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" /><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" /></svg>
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
                  <p className="text-sm opacity-80">Anfahrtskosten in Duisburg</p>
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
              Ihre Vorteile bei Entrümpelung Duisburg
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bei uns erhalten Sie sowohl eine professionelle Entrümpelung in Duisburg, 
              sondern ein Rundum-sorglos-Paket mit echtem Mehrwert.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Sicherheit & Qualität */}
            <div className="bg-[#F5F5F0] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2C4F5E] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4F5E] mb-2">Maximale Sicherheit in Duisburg</h3>
                  <p className="text-gray-600 text-sm">
                    Vollversichert und zertifiziert - Ihre Immobilie in Duisburg ist bei uns in professionellen Händen. 
                    Garantierte Qualität und Kundenzufriedenheit.
                  </p>
                </div>
              </div>
            </div>

            {/* Kostenlos & Unverbindlich */}
            <div className="bg-[#F5F5F0] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2C4F5E] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4F5E] mb-2">Kostenlose Besichtigung</h3>
                  <p className="text-gray-600 text-sm">
                    Unverbindliche Beratung vor Ort in Duisburg - völlig kostenfrei. Transparente Festpreise 
                    mit garantierter Kostensicherheit. Kostenfreie Anfahrt in ganz Duisburg.
                  </p>
                </div>
              </div>
            </div>

            {/* Nachhaltige Entsorgung */}
            <div className="bg-[#F5F5F0] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2C4F5E] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4F5E] mb-2">Nachhaltige Entsorgung in Duisburg</h3>
                  <p className="text-gray-600 text-sm">
                    Fachgerechte und umweltschonende Entsorgung nach lokalen Standards. Über 85% der Materialien werden wiederverwertet. 
                    Sie erhalten alle erforderlichen Entsorgungsnachweise.
                  </p>
                </div>
              </div>
            </div>

            {/* Wertanrechnung */}
            <div className="bg-[#F5F5F0] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2C4F5E] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" /><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4F5E] mb-2">Wertanrechnung garantiert</h3>
                  <p className="text-gray-600 text-sm">
                    Wertvolle Gegenstände rechnen wir fair und transparent an. Kostenlose Wertermittlung durch unsere Experten. 
                    Oft reduziert sich der Endpreis um 30-50%.
                  </p>
                </div>
              </div>
            </div>

            {/* Soziales Engagement */}
            <div className="bg-[#F5F5F0] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2C4F5E] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4F5E] mb-2">Soziales Engagement in Duisburg</h3>
                  <p className="text-gray-600 text-sm">
                    Gut erhaltene Gegenstände spenden wir an lokale gemeinnützige Organisationen in Duisburg. 
                    Sie erhalten auf Wunsch eine Spendenbescheinigung.
                  </p>
                </div>
              </div>
            </div>

            {/* Professionell */}
            <div className="bg-[#F5F5F0] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2C4F5E] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4F5E] mb-2">Höchste Professionalität</h3>
                  <p className="text-gray-600 text-sm">
                    Geschultes Personal in Duisburg - ausschließlich eigene Mitarbeiter. Modernste Ausrüstung für effiziente Arbeit. 
                    98% Kundenzufriedenheit sprechen für sich.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-[#C73E3A] to-[#B02E2A] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Überzeugt? Lassen Sie uns gemeinsam Ihr Projekt in Duisburg angehen!
            </h3>
            <p className="mb-6 opacity-90">
              Kostenlose Besichtigung • Unverbindliches Angebot • Günstige Festpreise für Duisburg
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/kontakt" className="bg-white text-[#C73E3A] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all">
                Jetzt Termin vereinbaren
              </a>
              <a href="tel:+4908000060970" className="border-2 border-white hover:bg-white hover:text-[#C73E3A] px-8 py-3 rounded-lg font-semibold transition-all">
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
              Unsere Entrümpelungs-Leistungen in Duisburg
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von der kleinen Kellerentrümpelung bis zur kompletten Entkernung - 
              wir bieten maßgeschneiderte Lösungen für jeden Bedarf in Duisburg.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Haushaltsauflösung */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <Image 
                  src="/Karton.png" 
                  alt="Haushaltsauflösung Duisburg"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Haushaltsauflösungen</h3>
                <p className="text-gray-700 mb-4">
                  Komplette Wohnungsauflösungen in Duisburg mit Wertanrechnung. Wir kümmern uns um alles - 
                  von der Entrümpelung bis zur Endreinigung.
                </p>
                <a href="/leistungen" className="inline-flex items-center text-[#C73E3A] hover:text-[#B02E2A] font-semibold">
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
                  alt="Gewerbeauflösung Duisburg"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Gewerbeauflösungen</h3>
                <p className="text-gray-700 mb-4">
                  Büros, Praxen, Läden in Duisburg - schnell und diskret. Auch am Wochenende und 
                  außerhalb der Geschäftszeiten möglich.
                </p>
                <a href="/leistungen" className="inline-flex items-center text-[#C73E3A] hover:text-[#B02E2A] font-semibold">
                  Mehr erfahren
                  <Icon name="arrow-right" size={20} className="ml-2" />
                </a>
              </div>
            </div>

            {/* Messie-Wohnungen */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <Image 
                  src="/Voller Messie Flur .jpg" 
                  alt="Messie-Wohnung Entrümpelung Duisburg"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Messie-Wohnungen</h3>
                <p className="text-gray-700 mb-4">
                  Sensible Räumung in Duisburg mit Desinfektion. Wir arbeiten diskret, respektvoll 
                  und mit respektvollem Verständnis.
                </p>
                <a href="/leistungen" className="inline-flex items-center text-[#C73E3A] hover:text-[#B02E2A] font-semibold">
                  Mehr erfahren
                  <Icon name="arrow-right" size={20} className="ml-2" />
                </a>
              </div>
            </div>

            {/* Kellerentrümpelung */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <Image 
                  src="/1-2.jpg" 
                  alt="Kellerentrümpelung Duisburg"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Kellerentrümpelung</h3>
                <p className="text-gray-700 mb-4">
                  Endlich wieder Platz im Keller in Duisburg! Schnell und günstig - oft schon ab 410€. 
                  Inkl. fachgerechter Entsorgung.
                </p>
                <a href="/leistungen" className="inline-flex items-center text-[#C73E3A] hover:text-[#B02E2A] font-semibold">
                  Mehr erfahren
                  <Icon name="arrow-right" size={20} className="ml-2" />
                </a>
              </div>
            </div>

            {/* Dachbodenentrümpelung */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <Image 
                  src="/Dachboden.jpg" 
                  alt="Dachbodenentrümpelung Duisburg"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Dachbodenentrümpelung</h3>
                <p className="text-gray-700 mb-4">
                  Schwer zugängliche Dachböden in Duisburg? Kein Problem für unser erfahrenes Team! 
                  Sicher und professionell.
                </p>
                <a href="/leistungen" className="inline-flex items-center text-[#C73E3A] hover:text-[#B02E2A] font-semibold">
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
                  alt="Express Entrümpelung Duisburg"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-[#C73E3A] text-white px-3 py-1 rounded-full text-sm font-bold">
                  48h Service
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Express-Service Duisburg</h3>
                <p className="text-gray-700 mb-4">
                  Eilig? Innerhalb von 48 Stunden räumen wir in Duisburg für Sie - garantiert! 
                  Perfekt bei kurzfristigen Terminen.
                </p>
                <a href="/leistungen" className="inline-flex items-center text-[#C73E3A] hover:text-[#B02E2A] font-semibold">
                  Mehr erfahren
                  <Icon name="arrow-right" size={20} className="ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA am Ende */}
          <div className="text-center mt-12">
            <a href="/leistungen" className="inline-flex items-center bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-8 py-4 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all">
              Alle Leistungen für Duisburg ansehen
              <span className="ml-2 text-lg">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C4F5E] mb-4">
              Das sagen unsere Kunden in Duisburg
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Über 600 zufriedene Kunden in ganz Duisburg - ihre Geschichten sprechen für sich
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
                      "Professionelle Entrümpelung in Duisburg. Das Team war pünktlich, freundlich und sehr gründlich."
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Familie Müller</p>
                      <p className="text-sm text-gray-600">Haushaltsauflösung Duisburg</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" size={16} className="mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Express-Service in Duisburg - innerhalb von 48 Stunden war alles erledigt. Top!"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Michael Schmidt</p>
                      <p className="text-sm text-gray-600">Express-Entrümpelung</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" size={16} className="mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Faire Preise und transparente Abrechnung. Gerne wieder bei der nächsten Entrümpelung!"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Anna Weber</p>
                      <p className="text-sm text-gray-600">Wohnungsauflösung Duisburg</p>
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
                      "Kellerentrümpelung in Duisburg - schnell und sauber. Der Festpreis wurde eingehalten."
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Familie Bauer</p>
                      <p className="text-sm text-gray-600">Keller Duisburg</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" size={16} className="mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Diskrete und respektvolle Räumung. Das Team hat mit viel Fingerspitzengefühl gearbeitet."
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Vertraulich</p>
                      <p className="text-sm text-gray-600">Messie-Hilfe Duisburg</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" size={16} className="mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Komplette Gewerbeauflösung am Wochenende. Perfekt organisiert und termingerecht."
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Consulting GmbH</p>
                      <p className="text-sm text-gray-600">Büroauflösung Duisburg</p>
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
                      "Nachlass-Entrümpelung mit viel Einfühlungsvermögen. Danke für die professionelle Betreuung."
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Thomas Hofmann</p>
                      <p className="text-sm text-gray-600">Nachlassauflösung Duisburg</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" size={16} className="mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Dachbodenentrümpelung trotz schwierigem Zugang perfekt bewältigt. Sehr zu empfehlen!"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Sandra Krüger</p>
                      <p className="text-sm text-gray-600">Dachboden Duisburg</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" size={16} className="mr-1" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Als Immobilienverwaltung sind wir sehr zufrieden. Zuverlässig und immer pünktlich in Duisburg."
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Immobilien Service GmbH</p>
                      <p className="text-sm text-gray-600">Mehrere Objekte Duisburg</p>
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
      <CitiesSection />

      {/* Qualitätssiegel */}
      <QualitySeals />
    </>
  )
}