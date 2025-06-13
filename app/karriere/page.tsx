'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function KarrierePage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'operations' | 'office' | 'management'>('all')

  const jobs = [
    {
      id: 1,
      category: 'operations',
      title: 'Entrümpler / Räumungshelfer (m/w/d)',
      location: 'Bielefeld, Steinhagen & Umgebung',
      type: 'Vollzeit / Teilzeit',
      description: 'Werden Sie Teil unseres Teams und helfen Sie Menschen in besonderen Lebenssituationen.',
      requirements: [
        'Körperliche Fitness und Belastbarkeit',
        'Führerschein Klasse B',
        'Teamfähigkeit und Zuverlässigkeit',
        'Empathie im Umgang mit Kunden',
        'Handwerkliches Geschick von Vorteil'
      ],
      benefits: [
        'Überdurchschnittliche Bezahlung',
        'Flexible Arbeitszeiten',
        'Firmenwagen zur privaten Nutzung',
        'Weiterbildungsmöglichkeiten',
        'Familiäres Arbeitsumfeld'
      ]
    },
    {
      id: 2,
      category: 'office',
      title: 'Bürokraft / Vertriebsmitarbeiter (m/w/d)',
      location: 'Steinhagen',
      type: 'Vollzeit',
      description: 'Verstärken Sie unser Büroteam und sorgen Sie für reibungslose Abläufe im Tagesgeschäft.',
      requirements: [
        'Kaufmännische Ausbildung oder vergleichbar',
        'Sehr gute Deutschkenntnisse',
        'MS Office Kenntnisse',
        'Kommunikationsstärke',
        'Organisationstalent'
      ],
      benefits: [
        'Moderner Arbeitsplatz',
        'Flexible Arbeitszeiten',
        'Homeoffice-Möglichkeit',
        'Betriebliche Altersvorsorge',
        'Kostenlose Getränke & Obst'
      ]
    },
    {
      id: 3,
      category: 'management',
      title: 'Teamleitung / Standortleitung (m/w/d)',
      location: 'Bielefeld & neue Standorte',
      type: 'Vollzeit',
      description: 'Übernehmen Sie Verantwortung und führen Sie Ihr eigenes Team zum Erfolg.',
      requirements: [
        'Führungserfahrung von Vorteil',
        'Unternehmerisches Denken',
        'Führerschein Klasse B (C1 von Vorteil)',
        'Organisationsgeschick',
        'Kundenorientierung'
      ],
      benefits: [
        'Attraktives Fixgehalt plus Prämien',
        'Firmenwagen auch zur Privatnutzung',
        'Eigenverantwortliches Arbeiten',
        'Karriereentwicklung zum Partner',
        'Umfassende Einarbeitung'
      ]
    },
    {
      id: 4,
      category: 'operations',
      title: 'LKW-Fahrer / Berufskraftfahrer (m/w/d)',
      location: 'Bielefeld & Umgebung',
      type: 'Vollzeit',
      description: 'Sicherer Umgang mit 7,5t LKW und Freude am Kundenkontakt.',
      requirements: [
        'Führerschein Klasse C1/C1E',
        'Berufserfahrung wünschenswert',
        'Körperliche Fitness',
        'Pünktlichkeit und Zuverlässigkeit',
        'Freundliches Auftreten'
      ],
      benefits: [
        'Übertarifliche Bezahlung',
        'Geregelte Arbeitszeiten',
        'Moderne Fahrzeuge',
        'Keine Nachtfahrten',
        'Weihnachts- und Urlaubsgeld'
      ]
    }
  ]

  const filteredJobs = activeCategory === 'all' 
    ? jobs 
    : jobs.filter(job => job.category === activeCategory)

  const companyValues = [
    {
      icon: (
        <svg className="w-12 h-12 text-[#C73E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Vertrauen & Respekt',
      description: 'Wir begegnen jedem Menschen mit Respekt und schaffen Vertrauen durch transparentes Handeln.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#C73E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Teamgeist',
      description: 'Gemeinsam sind wir stark - wir unterstützen uns gegenseitig und feiern Erfolge zusammen.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#C73E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Nachhaltigkeit',
      description: 'Wir handeln umweltbewusst und sozial verantwortlich für eine bessere Zukunft.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#C73E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Qualität',
      description: 'Wir liefern erstklassige Arbeit und streben in allem was wir tun nach Exzellenz.'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2C4F5E] to-[#1E3A47] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Karriere bei der <span className="text-[#C73E3A]">Rümpel Schmiede</span>
            </h1>
            <p className="text-xl sm:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
              Werden Sie Teil eines Teams, das Menschen in besonderen Lebenssituationen unterstützt
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#jobs"
                className="inline-block bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Zu den Stellenangeboten
              </a>
              <Link
                href="/franchise"
                className="inline-block bg-white text-[#2C4F5E] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Unternehmer werden
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C4F5E] mb-4">
              Unsere Werte
            </h2>
            <p className="text-lg text-gray-600">
              Das macht uns als Arbeitgeber besonders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-[#2C4F5E] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C4F5E] mb-6">
                Warum zur Rümpel Schmiede?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#C73E3A] rounded-full flex-shrink-0 mt-1"></div>
                  <p className="ml-4 text-gray-700">
                    <strong>Sicherer Arbeitsplatz:</strong> Seit 2002 kontinuierlich wachsend mit stabiler Auftragslage
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#C73E3A] rounded-full flex-shrink-0 mt-1"></div>
                  <p className="ml-4 text-gray-700">
                    <strong>Faire Bezahlung:</strong> Überdurchschnittliche Gehälter plus Prämien und Benefits
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#C73E3A] rounded-full flex-shrink-0 mt-1"></div>
                  <p className="ml-4 text-gray-700">
                    <strong>Work-Life-Balance:</strong> Flexible Arbeitszeiten und Vereinbarkeit von Familie und Beruf
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#C73E3A] rounded-full flex-shrink-0 mt-1"></div>
                  <p className="ml-4 text-gray-700">
                    <strong>Entwicklungschancen:</strong> Vom Mitarbeiter zum Teamleiter bis zum Partner
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#C73E3A] rounded-full flex-shrink-0 mt-1"></div>
                  <p className="ml-4 text-gray-700">
                    <strong>Sinnvolle Tätigkeit:</strong> Helfen Sie Menschen in schwierigen Lebenssituationen
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#2C4F5E] text-white rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Unsere Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#C73E3A]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Betriebliche Altersvorsorge
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#C73E3A]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Firmenwagen (je nach Position)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#C73E3A]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Weiterbildungen & Schulungen
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#C73E3A]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Teamevents & Betriebsfeiern
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#C73E3A]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Urlaubs- und Weihnachtsgeld
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#C73E3A]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Moderne Arbeitsausstattung
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section id="jobs" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C4F5E] mb-4">
              Aktuelle Stellenangebote
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Finden Sie Ihre neue berufliche Herausforderung
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === 'all' 
                    ? 'bg-[#C73E3A] text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Alle Stellen
              </button>
              <button
                onClick={() => setActiveCategory('operations')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === 'operations' 
                    ? 'bg-[#C73E3A] text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Operative Tätigkeiten
              </button>
              <button
                onClick={() => setActiveCategory('office')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === 'office' 
                    ? 'bg-[#C73E3A] text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Büro & Verwaltung
              </button>
              <button
                onClick={() => setActiveCategory('management')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === 'management' 
                    ? 'bg-[#C73E3A] text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Führungspositionen
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#2C4F5E] mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                        job.category === 'operations' ? 'bg-blue-100 text-blue-800' :
                        job.category === 'office' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {job.category === 'operations' ? 'Operative Tätigkeit' :
                         job.category === 'office' ? 'Büro & Verwaltung' :
                         'Führungsposition'}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6">
                    {job.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-[#2C4F5E] mb-3">Ihre Aufgaben:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-[#C73E3A] mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2C4F5E] mb-3">Wir bieten:</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <a
                      href={`mailto:bewerbung@ruempelschmiede.de?subject=Bewerbung: ${job.title}`}
                      className="inline-flex items-center bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                    >
                      Jetzt bewerben
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C4F5E] mb-4">
              Ihr Weg zu uns
            </h2>
            <p className="text-lg text-gray-600">
              In wenigen Schritten zum neuen Job
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C73E3A] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold text-[#2C4F5E] mb-2">Bewerbung</h3>
              <p className="text-gray-600 text-sm">
                Senden Sie uns Ihre aussagekräftigen Unterlagen
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C73E3A] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold text-[#2C4F5E] mb-2">Kennenlernen</h3>
              <p className="text-gray-600 text-sm">
                Persönliches Gespräch in angenehmer Atmosphäre
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C73E3A] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold text-[#2C4F5E] mb-2">Probearbeit</h3>
              <p className="text-gray-600 text-sm">
                Lernen Sie Ihr Team und Ihre Aufgaben kennen
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C73E3A] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                4
              </div>
              <h3 className="font-semibold text-[#2C4F5E] mb-2">Start</h3>
              <p className="text-gray-600 text-sm">
                Willkommen im Team Rümpel Schmiede!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#2C4F5E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit für eine neue Herausforderung?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Wir freuen uns auf Ihre Bewerbung!
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
              <div>
                <h3 className="font-semibold mb-2">Ihre Ansprechpartnerin</h3>
                <p className="mb-4">Frau Sarah Schmidt<br />Personalleitung</p>
                <a href="tel:052049389940" className="flex items-center justify-center gap-2 hover:text-[#C73E3A] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  05204 - 9389940
                </a>
              </div>
              <div>
                <h3 className="font-semibold mb-2">E-Mail</h3>
                <p className="mb-4">Für Ihre Bewerbung</p>
                <a href="mailto:bewerbung@ruempelschmiede.de" className="flex items-center justify-center gap-2 hover:text-[#C73E3A] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  bewerbung@ruempelschmiede.de
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:bewerbung@ruempelschmiede.de"
              className="inline-block bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Initiativbewerbung senden
            </a>
            <Link
              href="/franchise"
              className="inline-block bg-white text-[#2C4F5E] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Oder Unternehmer werden
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}