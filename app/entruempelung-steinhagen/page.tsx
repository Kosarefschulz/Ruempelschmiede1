'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Icon from '../components/Icon'

export default function SteinhagenPage() {
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
            Ihr Browser unterstützt keine Videos.
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-[#2C4F5E]/40 to-[#2C4F5E]/40"></div>
        </div>

        <div className="relative z-10 text-white px-4" style={{ height: 'clamp(400px, 70vh, 800px)', display: 'flex', alignItems: 'center' }}>
          <div className="text-center w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
              Entrümpelung Steinhagen - Schnell und nah!
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 opacity-90 max-w-4xl mx-auto">
              Professionelle Entrümpelung, Haushaltsauflösung und Gewerbeauflösung 
              in Steinhagen und Umgebung - Alles aus einer Hand mit Zufriedenheitsgarantie.
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
              Berechnen Sie Ihre Entrümpelungskosten in Steinhagen sofort!
            </h2>
            <p className="text-xl text-gray-600">
              Unser einzigartiger Kalkulator zeigt Ihnen in 2 Minuten, was Ihre Entrümpelung in Steinhagen kostet
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-[#2C4F5E]">BASIC</h2>
              <p className="text-3xl font-bold text-[#C73E3A] my-4">ab 660 €</p>
              <p className="text-gray-600 mb-6">für 1-Zimmer-Wohnung in Steinhagen</p>
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
              <p className="text-3xl font-bold text-[#C73E3A] my-4">ab 1320 €</p>
              <p className="text-gray-600 mb-6">für 1-Zimmer-Wohnung in Steinhagen</p>
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
              <p className="text-3xl font-bold text-[#C73E3A] my-4">ab 1980 €</p>
              <p className="text-gray-600 mb-6">für 1-Zimmer-Wohnung in Steinhagen</p>
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
              Zum detaillierten Preisrechner für Steinhagen →
            </a>
          </div>
        </div>
      </section>

      {/* Warum wir */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C4F5E] mb-4">
              Ihre Entrümpelung in Steinhagen in sicheren Händen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seit über 7 Jahren sind wir der vertrauenswürdige Partner für Entrümpelungen in ganz Steinhagen 
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
              <div className="text-5xl font-bold text-[#C73E3A] mb-2">300+</div>
              <p className="text-gray-600">Zufriedene Kunden in Steinhagen</p>
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
              So einfach funktioniert's in Steinhagen
            </h3>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              In nur 4 einfachen Schritten zu Ihrer professionellen Entrümpelung in Steinhagen - 
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
                  <h4 className="text-xl font-bold text-[#2C4F5E] mb-3">Kostenlose Besichtigung in Steinhagen</h4>
                  <p className="text-gray-600">
                    Wir kommen zu Ihnen nach Steinhagen, schauen uns alles an und erstellen ein unverbindliches Festpreis Angebot - 
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
                    Sie erhalten ein detailliertes Festpreisangebot für Ihre Immobilie in Steinhagen. Keine Überraschungen, 
                    keine nachträglichen Kosten - versprochen!
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
                    Unser erfahrenes Team in Steinhagen räumt schnell, sauber und zuverlässig. 
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
                    Wir hinterlassen Ihre Wohnung in Steinhagen besenrein. Auf Wunsch übernehmen wir auch 
                    die Schlüsselübergabe an den Vermieter.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Elements */}
          <div className="bg-gradient-to-r from-[#2C4F5E] to-[#1E3A47] text-white rounded-2xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 text-center">
              Warum über 300 Kunden in Steinhagen uns vertrauen
            </h3>
            <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
              Ihre Zufriedenheit ist unser Antrieb. Deshalb garantieren wir höchste Standards bei jeder Entrümpelung in Steinhagen.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <img src="/icons/icons8-euro.svg" alt="Festpreis" className="w-10 h-10 filter brightness-0 invert" />
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
                  <p className="text-sm opacity-80">Anfahrtskosten in Steinhagen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen mit Bildern */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C4F5E] mb-4">
              Unsere Entrümpelungs-Leistungen in Steinhagen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von der kleinen Kellerentrümpelung bis zur kompletten Entkernung - 
              wir bieten maßgeschneiderte Lösungen für jeden Bedarf in Steinhagen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Haushaltsauflösung */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <Image 
                  src="/Karton.png" 
                  alt="Haushaltsauflösung Steinhagen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Haushaltsauflösungen</h3>
                <p className="text-gray-700 mb-4">
                  Komplette Wohnungsauflösungen in Steinhagen mit Wertanrechnung. Wir kümmern uns um alles - 
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
                  alt="Gewerbeauflösung Steinhagen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Gewerbeauflösungen</h3>
                <p className="text-gray-700 mb-4">
                  Büros, Praxen, Läden in Steinhagen - schnell und diskret. Auch am Wochenende und 
                  außerhalb der Geschäftszeiten möglich.
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
                  alt="Kellerentrümpelung Steinhagen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Kellerentrümpelung</h3>
                <p className="text-gray-700 mb-4">
                  Endlich wieder Platz im Keller in Steinhagen! Schnell und günstig - oft schon ab 395€. 
                  Inkl. fachgerechter Entsorgung.
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
              Alle Leistungen für Steinhagen ansehen
              <span className="ml-2 text-lg">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Städte-Bereich - Umgebung */}
      <section className="py-16 bg-[#2C4F5E] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Entrümpelung im Großraum Steinhagen
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Nicht nur in Steinhagen, sondern auch in allen umliegenden Städten und Gemeinden 
              sind wir für Sie da! Professionelle Entrümpelung in der ganzen Region.
            </p>
            <p className="text-sm opacity-80 mt-4">
              9 km von Bielefeld - Schnell erreichbar aus der Bielefeld-Region
            </p>
          </div>

          <div className="text-center">
            <p className="text-lg mb-4 opacity-90">
              Ihr Ort ist nicht dabei? Kein Problem!
            </p>
            <p className="text-sm opacity-80 max-w-2xl mx-auto mb-6">
              Wir fahren im gesamten Großraum Steinhagen und in die angrenzenden Regionen. 
              Kontaktieren Sie uns für eine individuelle Lösung!
            </p>
            <a href="/kontakt" className="inline-flex items-center bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-8 py-3 rounded-lg font-semibold transition-all">
              Jetzt Anfrage für Steinhagen senden
              <span className="ml-2 text-lg">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}