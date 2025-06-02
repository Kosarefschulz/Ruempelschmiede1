'use client'
import { useEffect, useState } from 'react'

export default function BielefeldPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    // Auto-slide every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const slider = document.getElementById('testimonial-slider')
    const dots = [
      document.getElementById('dot-1'),
      document.getElementById('dot-2'),
      document.getElementById('dot-3')
    ]

    if (slider) {
      slider.style.transform = `translateX(-${currentSlide * 100}%)`
    }

    dots.forEach((dot, index) => {
      if (dot) {
        if (index === currentSlide) {
          dot.classList.add('bg-[#C73E3A]')
          dot.classList.remove('bg-gray-300')
        } else {
          dot.classList.remove('bg-[#C73E3A]')
          dot.classList.add('bg-gray-300')
        }
      }
    })
  }, [currentSlide])

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3)
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3)
  }

  const handleDotClick = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <>
      {/* Hero Section mit Video - VOLLE BREITE */}
      <section className="relative overflow-hidden w-full">
        {/* Video als Hintergrund */}
        <div className="absolute inset-0 z-0">
          <video 
            className="w-full h-full object-cover" 
            autoPlay
            loop
            muted
            playsInline
            poster="/video-poster.jpg"
          >
            <source src="/240409_Rümpelmeister Vorher Nachher_v1.mp4" type="video/mp4" />
            Ihr Browser unterstützt keine Videos.
          </video>
          {/* Overlay für bessere Lesbarkeit */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2C4F5E]/10 to-[#2C4F5E]/40"></div>
        </div>

        {/* Content über dem Video - OHNE max-width Begrenzung */}
        <div className="relative z-10 text-white py-20 px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Entrümpelung Bielefeld - Wir machen kaputt, aber das richtig gut!
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-4xl mx-auto">
              Professionelle Entrümpelung, Haushaltsauflösung und Gewerbeauflösung 
              in Bielefeld und Umgebung - Alles aus einer Hand mit Zufriedenheitsgarantie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/preise#kalkulator" className="bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-8 py-4 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all">
                 Preis berechnen
              </a>
              <a href="/kontakt" className="border-2 border-white hover:bg-white hover:text-[#2C4F5E] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                ✉️ Direktanfrage
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
              🧮 Entrümpelungskosten in Bielefeld sofort berechnen!
            </h2>
            <p className="text-xl text-gray-600">
              Unser einzigartiger Kalkulator zeigt Ihnen in 2 Minuten, was Ihre Entrümpelung in Bielefeld kostet
            </p>
          </div>

          {/* Pakete */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-[#2C4F5E]">BASIC</h2>
              <p className="text-3xl font-bold text-[#C73E3A] my-4">ab 890 €</p>
              <p className="text-gray-600 mb-6">für 1-Zimmer-Wohnung in Bielefeld</p>
              <ul className="text-left space-y-2 mb-6">
                <li>✓ Komplette Räumung aller Räume</li>
                <li>✓ Fachgerechte Entsorgung</li>
                <li>✓ Wertanrechnung möglich</li>
                <li>✓ Entsorgungsnachweise</li>
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
              <p className="text-gray-600 mb-6">für 1-Zimmer-Wohnung in Bielefeld</p>
              <ul className="text-left space-y-2 mb-6">
                <li>✓ Alle Leistungen aus BASIC</li>
                <li>✓ Besenreine Endreinigung</li>
                <li>✓ Kleine Reparaturen</li>
                <li>✓ Schlüsselübergabe an Vermieter</li>
                <li>✓ Abmeldung Strom/Gas möglich</li>
              </ul>
              <a href="/kontakt" className="w-full bg-[#C73E3A] text-white py-3 rounded-lg font-semibold hover:bg-[#B02E2A] inline-block">
                Anfrage stellen
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-[#2C4F5E]">PREMIUM</h2>
              <p className="text-3xl font-bold text-[#C73E3A] my-4">ab 1.890 €</p>
              <p className="text-gray-600 mb-6">für 1-Zimmer-Wohnung in Bielefeld</p>
              <ul className="text-left space-y-2 mb-6">
                <li>✓ Alle Leistungen aus KOMFORT</li>
                <li>✓ Persönlicher Projektmanager</li>
                <li>✓ Komplette Behördengänge</li>
                <li>✓ Nachlass-Verwaltung</li>
                <li>✓ 6 Monate Nachbetreuung</li>
                <li>✓ Digitales Erinnerungsalbum</li>
              </ul>
              <a href="/kontakt" className="w-full bg-[#C73E3A] text-white py-3 rounded-lg font-semibold hover:bg-[#B02E2A] inline-block">
                Anfrage stellen
              </a>
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="/preise#kalkulator" className="text-[#2C4F5E] hover:text-[#1E3A47] font-semibold">
              Zum detaillierten Preisrechner für Bielefeld →
            </a>
          </div>
        </div>
      </section>

      {/* Warum wir - mit Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C4F5E] mb-4">
              Ihre Entrümpelung in Bielefeld in sicheren Händen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seit über 20 Jahren sind wir der vertrauenswürdige Partner für Entrümpelungen in ganz Bielefeld. 
              Von Brackwede bis Schildesche - wir machen Platz für Neues.
            </p>
          </div>

          {/* Statistiken */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#C73E3A] mb-2">20+</div>
              <p className="text-gray-600">Jahre Erfahrung</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#C73E3A] mb-2">3000+</div>
              <p className="text-gray-600">Zufriedene Kunden in Bielefeld</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#C73E3A] mb-2">48h</div>
              <p className="text-gray-600">Schnellservice</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#C73E3A] mb-2">100%</div>
              <p className="text-gray-600">Zufriedenheit</p>
            </div>
          </div>

          {/* Ablauf Timeline - Schönere Version */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#2C4F5E] text-center mb-4">
              So einfach funktioniert's in Bielefeld
            </h3>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              In nur 4 einfachen Schritten zu Ihrer professionellen Entrümpelung in Bielefeld - 
              transparent, fair und zuverlässig.
            </p>
            
            <div className="relative">
              {/* Timeline Line - mit Gradient */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#C73E3A] via-[#C73E3A] to-transparent"></div>
              
              {/* Timeline Items */}
              <div className="space-y-16">
                {/* Step 1 */}
                <div className="relative flex items-center md:justify-between">
                  <div className="md:w-5/12 md:text-right md:pr-12 opacity-0 animate-fadeInLeft">
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <h4 className="text-xl font-bold text-[#2C4F5E] mb-3">Kostenlose Besichtigung in Bielefeld</h4>
                      <p className="text-gray-600">
                        Wir kommen zu Ihnen nach Bielefeld, schauen uns alles an und erstellen ein unverbindliches Angebot - 
                        natürlich kostenlos und ohne versteckte Kosten.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#C73E3A] to-[#B02E2A] rounded-full flex items-center justify-center text-white font-bold text-lg">
                        1
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-5/12"></div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-center md:justify-between">
                  <div className="hidden md:block md:w-5/12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#C73E3A] to-[#B02E2A] rounded-full flex items-center justify-center text-white font-bold text-lg">
                        2
                      </div>
                    </div>
                  </div>
                  <div className="md:w-5/12 md:pl-12 opacity-0 animate-fadeInRight animation-delay-200">
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <h4 className="text-xl font-bold text-[#2C4F5E] mb-3">Transparente Preisgestaltung</h4>
                      <p className="text-gray-600">
                        Sie erhalten ein detailliertes Festpreisangebot für Ihre Bielefelder Immobilie. Keine Überraschungen, 
                        keine nachträglichen Kosten - versprochen!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-center md:justify-between">
                  <div className="md:w-5/12 md:text-right md:pr-12 opacity-0 animate-fadeInLeft animation-delay-400">
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <h4 className="text-xl font-bold text-[#2C4F5E] mb-3">Professionelle Durchführung</h4>
                      <p className="text-gray-600">
                        Unser erfahrenes Bielefelder Team räumt schnell, sauber und zuverlässig. 
                        Wertgegenstände werden selbstverständlich angerechnet.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#C73E3A] to-[#B02E2A] rounded-full flex items-center justify-center text-white font-bold text-lg">
                        3
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-5/12"></div>
                </div>

                {/* Step 4 */}
                <div className="relative flex items-center md:justify-between">
                  <div className="hidden md:block md:w-5/12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#C73E3A] to-[#B02E2A] rounded-full flex items-center justify-center text-white font-bold text-lg">
                        ✓
                      </div>
                    </div>
                  </div>
                  <div className="md:w-5/12 md:pl-12 opacity-0 animate-fadeInRight animation-delay-600">
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <h4 className="text-xl font-bold text-[#2C4F5E] mb-3">Besenreine Übergabe</h4>
                      <p className="text-gray-600">
                        Wir hinterlassen Ihre Bielefelder Wohnung besenrein. Auf Wunsch übernehmen wir auch 
                        die Schlüsselübergabe an den Vermieter.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Elements - Professioneller */}
          <div className="bg-gradient-to-r from-[#2C4F5E] to-[#1E3A47] text-white rounded-2xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 text-center">
              Warum über 3.000 Bielefelder Kunden uns vertrauen
            </h3>
            <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
              Ihre Zufriedenheit ist unser Antrieb. Deshalb garantieren wir höchste Standards bei jeder Entrümpelung in Bielefeld.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <span className="text-4xl">✓</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Festpreisgarantie</h4>
                <p className="text-sm opacity-80">Keine versteckten Kosten</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <span className="text-4xl">🛡</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Vollversichert</h4>
                <p className="text-sm opacity-80">Für Ihre Sicherheit</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <span className="text-4xl">♻</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Umweltgerecht</h4>
                <p className="text-sm opacity-80">Fachgerechte Entsorgung</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <span className="text-4xl">🤝</span>
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
                  <p className="text-sm opacity-80">Anfahrtskosten in Bielefeld</p>
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
              Ihre Vorteile bei Entrümpelung Bielefeld
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bei uns erhalten Sie nicht nur eine professionelle Entrümpelung in Bielefeld, 
              sondern ein Rundum-sorglos-Paket mit echtem Mehrwert.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Sicherheit & Qualität */}
            <div className="bg-[#F5F5F0] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2C4F5E] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <span className="text-2xl">🔒</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4F5E] mb-2">Maximale Sicherheit in Bielefeld</h3>
                  <p className="text-gray-600 text-sm">
                    Vollversichert und zertifiziert nach DIN EN ISO 9001. Ihre Bielefelder Immobilie ist bei uns in professionellen Händen - 
                    garantierte Qualität und Kundenzufriedenheit. Unsere Mitarbeiter sind geschult im Umgang mit sensiblen 
                    Gegenständen und arbeiten stets diskret. Mit über 20 Jahren Erfahrung in Bielefeld wissen wir genau, worauf es ankommt. 
                    Alle Arbeiten werden dokumentiert und Sie erhalten eine Abnahmebestätigung.
                  </p>
                </div>
              </div>
            </div>

            {/* Kostenlos & Unverbindlich */}
            <div className="bg-[#F5F5F0] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2C4F5E] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <span className="text-2xl">💶</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4F5E] mb-2">Kostenlose Besichtigung</h3>
                  <p className="text-gray-600 text-sm">
                    Unverbindliche Beratung vor Ort in Bielefeld - völlig kostenfrei und ohne Verpflichtungen. Transparente, günstige Festpreise 
                    ohne versteckte Kosten - Sie wissen immer, was auf Sie zukommt. Unser detailliertes Angebot listet alle 
                    Positionen einzeln auf. Keine Anfahrtskosten in ganz Bielefeld. Faire Preisgestaltung mit Bestpreis-Garantie. 
                    Zahlung erst nach erfolgreicher Durchführung möglich.
                  </p>
                </div>
              </div>
            </div>

            {/* Nachhaltige Entsorgung */}
            <div className="bg-[#F5F5F0] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2C4F5E] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4F5E] mb-2">Nachhaltige Entsorgung in Bielefeld</h3>
                  <p className="text-gray-600 text-sm">
                    Fachgerechte und umweltschonende Entsorgung nach Bielefelder Standards. Wir trennen sorgfältig, recyceln 
                    maximal und führen Wertstoffe dem Kreislauf wieder zu. Über 85% der Materialien werden wiederverwertet. 
                    Zusammenarbeit mit zertifizierten Bielefelder Entsorgungsfachbetrieben. Sie erhalten alle erforderlichen 
                    Entsorgungsnachweise für Ihre Unterlagen. Aktiver Beitrag zum Umweltschutz.
                  </p>
                </div>
              </div>
            </div>

            {/* Wertanrechnung */}
            <div className="bg-[#F5F5F0] rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2C4F5E] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4F5E] mb-2">Wertanrechnung garantiert</h3>
                  <p className="text-gray-600 text-sm">
                    Wertvolle Gegenstände rechnen wir fair und transparent an. Möbel, Antiquitäten, Elektrogeräte - alles wird 
                    geprüft. Wiederverkauf über unsere Bielefelder Partner möglich - Sie profitieren direkt von reduzierten Kosten. 
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
                  <span className="text-2xl">❤️</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4F5E] mb-2">Soziales Engagement in Bielefeld</h3>
                  <p className="text-gray-600 text-sm">
                    Gut erhaltene Gegenstände spenden wir an Bielefelder gemeinnützige Organisationen wie Caritas, DRK oder lokale 
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
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4F5E] mb-2">Höchste Professionalität</h3>
                  <p className="text-gray-600 text-sm">
                    Geschultes und festangestelltes Bielefelder Personal - keine Subunternehmer. Modernste Ausrüstung und Fahrzeuge 
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
              Überzeugt? Lassen Sie uns gemeinsam Ihr Projekt in Bielefeld angehen!
            </h3>
            <p className="mb-6 opacity-90">
              Kostenlose Besichtigung • Unverbindliches Angebot • Günstige Festpreise für Bielefeld
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/kontakt" className="bg-white text-[#C73E3A] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all">
                Jetzt Termin vereinbaren
              </a>
              <a href="tel:+495211234567" className="border-2 border-white hover:bg-white hover:text-[#C73E3A] px-8 py-3 rounded-lg font-semibold transition-all">
                📞 Direkt anrufen
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
              Unsere Entrümpelungs-Leistungen in Bielefeld
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von der kleinen Kellerentrümpelung bis zur kompletten Entkernung - 
              wir bieten maßgeschneiderte Lösungen für jeden Bedarf in Bielefeld.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Haushaltsauflösung */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <img 
                  src="/haushaltsaufloesung.jpg" 
                  alt="Haushaltsauflösung Bielefeld"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Haushaltsauflösungen</h3>
                <p className="text-gray-700 mb-4">
                  Komplette Wohnungsauflösungen in Bielefeld mit Wertanrechnung. Wir kümmern uns um alles - 
                  von der Entrümpelung bis zur Endreinigung.
                </p>
                <a href="/leistungen" className="inline-flex items-center text-[#C73E3A] hover:text-[#B02E2A] font-semibold">
                  Mehr erfahren 
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Gewerbeauflösung */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <img 
                  src="/gewerbeaufloesung.jpg" 
                  alt="Gewerbeauflösung Bielefeld"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Gewerbeauflösungen</h3>
                <p className="text-gray-700 mb-4">
                  Büros, Praxen, Läden in Bielefeld - schnell und diskret. Auch am Wochenende und 
                  außerhalb der Geschäftszeiten möglich.
                </p>
                <a href="/leistungen" className="inline-flex items-center text-[#C73E3A] hover:text-[#B02E2A] font-semibold">
                  Mehr erfahren 
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Messie-Wohnungen */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <img 
                  src="/messie-wohnung.jpg" 
                  alt="Messie-Wohnung Entrümpelung Bielefeld"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Messie-Wohnungen</h3>
                <p className="text-gray-700 mb-4">
                  Sensible Räumung in Bielefeld mit Desinfektion. Wir arbeiten diskret, respektvoll 
                  und ohne Vorurteile.
                </p>
                <a href="/leistungen" className="inline-flex items-center text-[#C73E3A] hover:text-[#B02E2A] font-semibold">
                  Mehr erfahren 
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Kellerentrümpelung */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <img 
                  src="/kellerentruempelung.jpg" 
                  alt="Kellerentrümpelung Bielefeld"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Kellerentrümpelung</h3>
                <p className="text-gray-700 mb-4">
                  Endlich wieder Platz im Bielefelder Keller! Schnell und günstig - oft schon ab 390€. 
                  Inkl. fachgerechter Entsorgung.
                </p>
                <a href="/leistungen" className="inline-flex items-center text-[#C73E3A] hover:text-[#B02E2A] font-semibold">
                  Mehr erfahren 
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Dachbodenentrümpelung */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <img 
                  src="/dachboden.jpg" 
                  alt="Dachbodenentrümpelung Bielefeld"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Dachbodenentrümpelung</h3>
                <p className="text-gray-700 mb-4">
                  Schwer zugängliche Bielefelder Dachböden? Kein Problem für unser erfahrenes Team! 
                  Sicher und professionell.
                </p>
                <a href="/leistungen" className="inline-flex items-center text-[#C73E3A] hover:text-[#B02E2A] font-semibold">
                  Mehr erfahren 
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Express-Service */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <img 
                  src="/express-service.jpg" 
                  alt="Express Entrümpelung Bielefeld"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-[#C73E3A] text-white px-3 py-1 rounded-full text-sm font-bold">
                  48h Service
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2C4F5E] mb-3">Express-Service Bielefeld</h3>
                <p className="text-gray-700 mb-4">
                  Eilig? Innerhalb von 48 Stunden räumen wir in Bielefeld für Sie - garantiert! 
                  Perfekt bei kurzfristigen Terminen.
                </p>
                <a href="/leistungen" className="inline-flex items-center text-[#C73E3A] hover:text-[#B02E2A] font-semibold">
                  Mehr erfahren 
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* CTA am Ende */}
          <div className="text-center mt-12">
            <a href="/leistungen" className="inline-flex items-center bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-8 py-4 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all">
              Alle Leistungen für Bielefeld ansehen
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials - Komplett neu mit Slider */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C4F5E] mb-4">
              Das sagen unsere Bielefelder Kunden
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Über 3.000 zufriedene Kunden in ganz Bielefeld - ihre Geschichten sprechen für sich
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" id="testimonial-slider">
              {/* Slide 1 - Bewertungen 1-3 */}
              <div className="min-w-full">
                <div className="grid md:grid-cols-3 gap-8 px-4">
                  {/* Bewertung 1 */}
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Nach dem plötzlichen Tod meiner Mutter stand ich völlig überfordert vor ihrer Wohnung in Schildesche. 
                      Das Team von Rümpel Schmiedel war nicht nur professionell, sondern auch unglaublich einfühlsam. 
                      Sie haben alles sortiert, Erinnerungsstücke beiseite gelegt und sogar ein Fotoalbum der 
                      Wohnung für mich erstellt. Diese Menschlichkeit in einer so schweren Zeit werde ich nie vergessen."
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Maria Schneider</p>
                      <p className="text-sm text-gray-600">Haushaltsauflösung in Schildesche</p>
                    </div>
                  </div>

                  {/* Bewertung 2 */}
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Wir mussten unsere Messie-Wohnung in Brackwede räumen lassen und hatten große Angst vor Verurteilung. 
                      Aber das Team war diskret, respektvoll und hat uns keine Sekunde das Gefühl gegeben, 
                      uns schämen zu müssen. Innerhalb von zwei Tagen war alles erledigt. 
                      Endlich können wir wieder durchatmen. Danke für diese zweite Chance!"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Familie Weber</p>
                      <p className="text-sm text-gray-600">Messie-Entrümpelung in Brackwede</p>
                    </div>
                  </div>

                  {/* Bewertung 3 */}
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Das Übergabe-Paket war perfekt für unsere Wohnung in Mitte! Nicht nur die Entrümpelung war top, sondern auch die 
                      Endreinigung, kleine Reparaturen und sogar die Schlüsselübergabe an den Vermieter wurde 
                      übernommen. Ich musste mich um nichts kümmern. Der Preis war fair und transparent - 
                      keine bösen Überraschungen!"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Thomas Bauer</p>
                      <p className="text-sm text-gray-600">Wohnungsauflösung in Bielefeld-Mitte</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2 - Bewertungen 4-6 */}
              <div className="min-w-full">
                <div className="grid md:grid-cols-3 gap-8 px-4">
                  {/* Bewertung 4 */}
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Unser Keller in Jöllenbeck war 30 Jahre lang eine Rumpelkammer. Das Team hat in nur 4 Stunden 
                      Ordnung geschaffen! Sie haben sogar alte Werkzeuge gefunden, die noch Wert hatten 
                      und uns den Betrag angerechnet. Jetzt haben wir endlich wieder Platz für wichtige Dinge. 
                      Absolut empfehlenswert!"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Petra und Klaus Müller</p>
                      <p className="text-sm text-gray-600">Kellerentrümpelung in Jöllenbeck</p>
                    </div>
                  </div>

                  {/* Bewertung 5 */}
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Als Betreuer musste ich kurzfristig eine Wohnung in Heepen räumen lassen. Der Express-Service 
                      war unglaublich! Innerhalb von 48 Stunden war alles erledigt, inkl. Dokumentation 
                      für das Gericht. Die Zusammenarbeit war professionell und unkompliziert. 
                      Ich empfehle Rümpel Schmiedel allen meinen Kollegen!"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Michael Hoffmann</p>
                      <p className="text-sm text-gray-600">Berufsbetreuer, Express-Service Heepen</p>
                    </div>
                  </div>

                  {/* Bewertung 6 */}
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Wir mussten unser Büro in der Altstadt schnell auflösen. Das Team kam am Wochenende, arbeitete 
                      diskret und effizient. Besonders beeindruckt hat uns, dass funktionierende Büromöbel 
                      an eine Schule gespendet wurden. So hatte unsere Geschäftsaufgabe noch etwas Positives. 
                      Vielen Dank!"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">StartUp GmbH</p>
                      <p className="text-sm text-gray-600">Büroauflösung in Bielefeld-Altstadt</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 3 - Bewertungen 7-9 */}
              <div className="min-w-full">
                <div className="grid md:grid-cols-3 gap-8 px-4">
                  {/* Bewertung 7 */}
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Nach 40 Jahren im Haus in Gadderbaum stand der Umzug ins Seniorenheim an. Das Team hat uns 
                      liebevoll beim Aussortieren geholfen, wichtige Erinnerungen bewahrt und alles 
                      andere fachgerecht entsorgt. Die Wertanrechnung für unsere Antiquitäten war mehr 
                      als fair. Wir fühlten uns bestens aufgehoben."
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Ingrid und Heinz Schmidt</p>
                      <p className="text-sm text-gray-600">Haushaltsauflösung in Gadderbaum</p>
                    </div>
                  </div>

                  {/* Bewertung 8 */}
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Der Dachboden in unserem Altbau in Sieker war eine Zeitkapsel. Das Team hat jeden Fund 
                      mit mir besprochen, historische Dokumente gesichert und sogar ein altes Gemälde 
                      entdeckt, das viel wert war. Die Sensibilität und Fachkenntnis waren beeindruckend. 
                      Absolute Profis mit Herz!"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Lisa Zimmermann</p>
                      <p className="text-sm text-gray-600">Dachbodenentrümpelung in Sieker</p>
                    </div>
                  </div>

                  {/* Bewertung 9 */}
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Als Vermieter hatte ich schon viele Entrümpelungsfirmen. Aber Rümpel Schmiedel 
                      ist mit Abstand die beste! Pünktlich, sauber, fair im Preis und immer erreichbar. 
                      Die Wohnungen werden besenrein übergeben. Mittlerweile beauftrage ich niemand anderen mehr. 
                      Meine absolute Empfehlung!"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-[#2C4F5E]">Robert Wagner, Immobilienverwaltung</p>
                      <p className="text-sm text-gray-600">Mehrere Objekte in ganz Bielefeld</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex justify-center mt-8 gap-2">
              <button 
                className="w-3 h-3 bg-[#C73E3A] rounded-full transition-all duration-300" 
                id="dot-1"
                onClick={() => handleDotClick(0)}
              ></button>
              <button 
                className="w-3 h-3 bg-gray-300 rounded-full transition-all duration-300 hover:bg-gray-400" 
                id="dot-2"
                onClick={() => handleDotClick(1)}
              ></button>
              <button 
                className="w-3 h-3 bg-gray-300 rounded-full transition-all duration-300 hover:bg-gray-400" 
                id="dot-3"
                onClick={() => handleDotClick(2)}
              ></button>
            </div>

            {/* Navigation Arrows */}
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300"
              onClick={handlePrevSlide}
            >
              <svg className="w-6 h-6 text-[#2C4F5E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300"
              onClick={handleNextSlide}
            >
              <svg className="w-6 h-6 text-[#2C4F5E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Städte-Bereich - Bielefeld Umgebung */}
      <section className="py-16 bg-[#2C4F5E] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Entrümpelung im Großraum Bielefeld
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Nicht nur in Bielefeld, sondern auch in allen umliegenden Städten und Gemeinden 
              im Umkreis von 100 km sind wir für Sie da! Professionelle Entrümpelung in Ostwestfalen-Lippe und darüber hinaus.
            </p>
          </div>

          <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
            <a href="/entruempelung-guetersloh" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Gütersloh</h3>
              <p className="text-sm opacity-80">15 km von Bielefeld</p>
            </a>
            <a href="/entruempelung-paderborn" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Paderborn</h3>
              <p className="text-sm opacity-80">45 km von Bielefeld</p>
            </a>
            <a href="/entruempelung-detmold" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Detmold</h3>
              <p className="text-sm opacity-80">25 km von Bielefeld</p>
            </a>
            <a href="/entruempelung-herford" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Herford</h3>
              <p className="text-sm opacity-80">15 km von Bielefeld</p>
            </a>
            <a href="/entruempelung-bad-oeynhausen" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Bad Oeynhausen</h3>
              <p className="text-sm opacity-80">35 km von Bielefeld</p>
            </a>
            <a href="/entruempelung-minden" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Minden</h3>
              <p className="text-sm opacity-80">45 km von Bielefeld</p>
            </a>
            <a href="/entruempelung-lemgo" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Lemgo</h3>
              <p className="text-sm opacity-80">20 km von Bielefeld</p>
            </a>
            <a href="/entruempelung-lippstadt" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Lippstadt</h3>
              <p className="text-sm opacity-80">55 km von Bielefeld</p>
            </a>
            <a href="/entruempelung-rheda-wiedenbrueck" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Rheda-Wiedenbrück</h3>
              <p className="text-sm opacity-80">20 km von Bielefeld</p>
            </a>
            <a href="/entruempelung-verl" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Verl</h3>
              <p className="text-sm opacity-80">15 km von Bielefeld</p>
            </a>
            <a href="/entruempelung-halle-westfalen" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Halle (Westfalen)</h3>
              <p className="text-sm opacity-80">10 km von Bielefeld</p>
            </a>
            <a href="/entruempelung-buende" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Bünde</h3>
              <p className="text-sm opacity-80">20 km von Bielefeld</p>
            </a>
            <a href="/entruempelung-loehne" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Löhne</h3>
              <p className="text-sm opacity-80">25 km von Bielefeld</p>
            </a>
            <a href="/entruempelung-enger" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Enger</h3>
              <p className="text-sm opacity-80">15 km von Bielefeld</p>
            </a>
            <a href="/entruempelung-steinhagen" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Steinhagen</h3>
              <p className="text-sm opacity-80">10 km von Bielefeld</p>
            </a>
            <a href="/entruempelung-werther" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Werther</h3>
              <p className="text-sm opacity-80">10 km von Bielefeld</p>
            </a>
            <a href="/entruempelung-bad-salzuflen" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Bad Salzuflen</h3>
              <p className="text-sm opacity-80">20 km von Bielefeld</p>
            </a>
            <a href="/entruempelung-osnabrueck" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Osnabrück</h3>
              <p className="text-sm opacity-80">50 km von Bielefeld</p>
            </a>
            <a href="/entruempelung-hamm" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Hamm</h3>
              <p className="text-sm opacity-80">75 km von Bielefeld</p>
            </a>
            <a href="/entruempelung-muenster" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Münster</h3>
              <p className="text-sm opacity-80">85 km von Bielefeld</p>
            </a>
          </div>

          <div className="text-center">
            <p className="text-lg mb-4 opacity-90">
              Ihr Ort ist nicht dabei? Kein Problem!
            </p>
            <p className="text-sm opacity-80 max-w-2xl mx-auto mb-6">
              Wir fahren im gesamten Raum Ostwestfalen-Lippe und Nordrhein-Westfalen. 
              Kontaktieren Sie uns für eine individuelle Lösung!
            </p>
            <a href="/kontakt" className="inline-flex items-center bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-8 py-3 rounded-lg font-semibold transition-all">
              Jetzt Anfrage für Bielefeld senden
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}