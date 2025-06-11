'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Icon from '../components/Icon'

export default function NachhaltigkeitPage() {
  const [activeTab, setActiveTab] = useState('recycling')

  const stats = [
    { number: '85%', label: 'Wiederverwertungsquote' },
    { number: '1200+', label: 'Gespendete Möbelstücke' },
    { number: '50+', label: 'Soziale Partner' },
    { number: '100%', label: 'CO2-neutraler Service' }
  ]

  const partners = [
    { name: 'Caritas', description: 'Möbel & Haushaltsgeräte für Bedürftige' },
    { name: 'Deutsches Rotes Kreuz', description: 'Kleidung & Textilien' },
    { name: 'Sozialkaufhäuser', description: 'Wiederverkauf günstiger Gegenstände' },
    { name: 'Flüchtlingshilfe', description: 'Möbel für Erstausstattungen' },
    { name: 'Kinderheime', description: 'Spielzeug & Kinderausstattung' },
    { name: 'Seniorenheime', description: 'Bücher & Unterhaltung' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden w-full bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2C4F5E] mb-6">
              Nachhaltigkeit bei der Rümpel Schmiede
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto">
              Verantwortungsvolle Entrümpelung mit 85% Wiederverwertungsquote und 
              sozialem Engagement für eine bessere Zukunft.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/kontakt" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all">
                Nachhaltigkeit anfragen
              </a>
              <a href="#recycling" className="border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiken */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C4F5E] mb-4">
              Unsere Nachhaltigkeits-Bilanz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zahlen und Fakten zu unserem Umwelt- und Sozialengagement
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-green-600 mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2C4F5E] mb-4">
              Unser Nachhaltigkeitskonzept
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vier Säulen für verantwortungsvolle Entrümpelung
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('recycling')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'recycling' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-green-50'
              }`}
            >
              Recycling & Wiederverwertung
            </button>
            <button
              onClick={() => setActiveTab('spenden')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'spenden' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-green-50'
              }`}
            >
              Spenden & Soziales
            </button>
            <button
              onClick={() => setActiveTab('umweltschutz')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'umweltschutz' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-green-50'
              }`}
            >
              Umweltgerechte Entsorgung
            </button>
            <button
              onClick={() => setActiveTab('co2-neutral')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'co2-neutral' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-green-50'
              }`}
            >
              CO2-neutraler Service
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            {activeTab === 'recycling' && (
              <div id="recycling">
                <h3 className="text-3xl font-bold text-[#2C4F5E] mb-6">
                  Recycling & Wiederverwertung
                </h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-gray-700 mb-6">
                      Unser Ziel ist es, so viele Materialien wie möglich dem Wertstoffkreislauf 
                      zurückzuführen. Mit einer Wiederverwertungsquote von 85% gehören wir zu 
                      den nachhaltigsten Entrümpelungsunternehmen Deutschlands.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="recycle" size={24} className="text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#2C4F5E] mb-2">Metalle & Elektrogeräte</h4>
                          <p className="text-gray-600">100% Wiederverwertung durch zertifizierte Fachbetriebe</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="leaf" size={24} className="text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#2C4F5E] mb-2">Holz & Papier</h4>
                          <p className="text-gray-600">95% Recyclingquote durch sortenreine Trennung</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="kiste" size={24} className="text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#2C4F5E] mb-2">Textilien & Stoffe</h4>
                          <p className="text-gray-600">80% Weiterverwendung oder Recycling</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-[#2C4F5E] mb-4">Recycling-Prozess</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                        <span>Sortenreine Trennung vor Ort</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                        <span>Transport zu Recyclingpartnern</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                        <span>Dokumentierte Wiederverwertung</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                        <span>Nachweis & Zertifikat</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'spenden' && (
              <div id="spenden">
                <h3 className="text-3xl font-bold text-[#2C4F5E] mb-6">
                  Spenden & Soziales Engagement
                </h3>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div>
                    <p className="text-lg text-gray-700 mb-6">
                      Gut erhaltene Gegenstände erhalten bei uns ein zweites Leben. Durch unsere 
                      Zusammenarbeit mit sozialen Einrichtungen unterstützen wir Menschen in 
                      schwierigen Lebenssituationen.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-6">
                      <p className="font-semibold text-green-800">
                        Über 1.200 Möbelstücke haben wir bereits an soziale Einrichtungen gespendet.
                      </p>
                    </div>
                    <h4 className="text-xl font-bold text-[#2C4F5E] mb-4">Was wir spenden:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        Funktionsfähige Möbel für Flüchtlingsunterkünfte
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        Kleidung an Bedürftige über soziale Kleiderkammern
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        Spielzeug an Kinderheime und Kindergärten
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        Bücher an Bibliotheken und Seniorenheime
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        Haushaltsgeräte für soziale Projekte
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#2C4F5E] mb-4">Unsere Spendenpartner</h4>
                    <div className="space-y-4">
                      {partners.map((partner, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-bold text-[#2C4F5E] mb-2">{partner.name}</h5>
                          <p className="text-gray-600 text-sm">{partner.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Spendenbescheinigung:</strong> Auf Wunsch erhalten Sie eine 
                        Spendenbescheinigung für Ihre gespendeten Gegenstände.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'umweltschutz' && (
              <div id="umweltschutz">
                <h3 className="text-3xl font-bold text-[#2C4F5E] mb-6">
                  Umweltgerechte Entsorgung
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-lg text-gray-700 mb-6">
                      Was nicht wiederverwendet oder recycelt werden kann, entsorgen wir 
                      fachgerecht über zertifizierte Entsorgungsfachbetriebe. Dabei halten 
                      wir alle gesetzlichen Vorschriften ein.
                    </p>
                    <h4 className="text-xl font-bold text-[#2C4F5E] mb-4">Unsere Standards:</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="shield" size={24} className="text-blue-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-[#2C4F5E] mb-2">Zertifizierte Partner</h5>
                          <p className="text-gray-600">Zusammenarbeit nur mit zertifizierten Entsorgungsfachbetrieben</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="eye" size={24} className="text-blue-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-[#2C4F5E] mb-2">Vollständige Dokumentation</h5>
                          <p className="text-gray-600">Lückenlose Nachweise für alle Entsorgungswege</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="leaf" size={24} className="text-blue-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-[#2C4F5E] mb-2">Schadstoff-Behandlung</h5>
                          <p className="text-gray-600">Fachgerechte Behandlung von Schadstoffen und Gefahrstoffen</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-[#2C4F5E] mb-4">Entsorgungskategorien</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Hausmüll & Sperrmüll</h5>
                        <p className="text-sm text-gray-600">Thermische Verwertung in Müllverbrennungsanlagen</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Elektroschrott</h5>
                        <p className="text-sm text-gray-600">WEEE-konforme Behandlung nach ElektroG</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Schadstoffe</h5>
                        <p className="text-sm text-gray-600">Spezialbehandlung in Sondermüllanlagen</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Baustoffe</h5>
                        <p className="text-sm text-gray-600">Deponierung oder Aufbereitung nach AbfallV</p>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-green-100 rounded-lg">
                      <p className="text-sm text-green-800 font-semibold">
                        Sie erhalten von uns alle erforderlichen Entsorgungsnachweise 
                        für Ihre Unterlagen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'co2-neutral' && (
              <div id="co2-neutral">
                <h3 className="text-3xl font-bold text-[#2C4F5E] mb-6">
                  CO2-neutraler Service
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-lg text-gray-700 mb-6">
                      Als eines der ersten Entrümpelungsunternehmen bieten wir einen 
                      vollständig CO2-neutralen Service an. Wir kompensieren alle 
                      entstehenden Emissionen durch zertifizierte Klimaschutzprojekte.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-6">
                      <p className="font-semibold text-green-800">
                        100% CO2-neutrale Entrümpelung ohne Aufpreis für Sie!
                      </p>
                    </div>
                    <h4 className="text-xl font-bold text-[#2C4F5E] mb-4">Was wir kompensieren:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        Fahrzeug-Emissionen (Anfahrt & Transport)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        Energieverbrauch bei der Entsorgung
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        Büro- und Verwaltungsemissionen
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        Indirekte Emissionen der Lieferkette
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#2C4F5E] mb-4">Unsere Klimaschutzprojekte</h4>
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h5 className="font-bold text-green-600 mb-2">Waldschutz in Brasilien</h5>
                        <p className="text-gray-600 text-sm">
                          Schutz von 1.2 Millionen Hektar Regenwald im Amazonas-Gebiet
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h5 className="font-bold text-green-600 mb-2">Solarenergie in Indien</h5>
                        <p className="text-gray-600 text-sm">
                          Bau und Betrieb von Solaranlagen zur sauberen Stromgewinnung
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h5 className="font-bold text-green-600 mb-2">Aufforstung in Deutschland</h5>
                        <p className="text-gray-600 text-sm">
                          Wiederaufforstung heimischer Wälder mit klimaresistenten Baumarten
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Zertifiziert:</strong> Alle Projekte sind nach Gold Standard 
                        oder VCS (Verified Carbon Standard) zertifiziert.
                      </p>
                    </div>
                    <div className="mt-4 p-4 bg-green-100 rounded-lg">
                      <p className="text-sm text-green-800 font-semibold">
                        Sie erhalten ein CO2-Neutralitätszertifikat für Ihre Entrümpelung.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Gemeinsam für eine nachhaltige Zukunft
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Entscheiden Sie sich für eine verantwortungsvolle Entrümpelung und 
            leisten Sie einen aktiven Beitrag zum Umwelt- und Klimaschutz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/kontakt" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
              Nachhaltige Entrümpelung anfragen
            </a>
            <a href="/preise" className="border-2 border-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all">
              Preise berechnen
            </a>
          </div>
        </div>
      </section>
    </>
  )
}