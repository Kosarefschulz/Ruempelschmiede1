'use client'
import { useState } from 'react'
import CitiesSection from '../components/common/CitiesSection'
import QualitySeals from '../components/common/QualitySeals'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Ist die Anfrage wirklich kostenlos und unverbindlich?",
    answer: "Ja, absolut! Die Anfrage, Beratung und auch die Vor-Ort-Besichtigung sind komplett kostenlos. Sie bleiben völlig unverbindlich und entscheiden erst nach unserem Angebot."
  },
  {
    question: "Wie schnell können Sie mit der Entrümpelung beginnen?",
    answer: "In dringenden Fällen können wir innerhalb von 48 Stunden beginnen. Normalerweise vereinbaren wir einen Termin innerhalb von 3-7 Tagen nach Ihrer Anfrage."
  },
  {
    question: "Was passiert mit meinen persönlichen Daten?",
    answer: "Ihre Daten werden streng vertraulich behandelt und nur zur Bearbeitung Ihrer Anfrage verwendet. Wir halten uns an die DSGVO und schützen Ihre Daten vor unbefugtem Zugriff."
  },
  {
    question: "Arbeiten Sie auch am Wochenende?",
    answer: "Ja, wir sind flexibel und arbeiten auch samstags. In Notfällen sind wir sogar sonntags für Sie da. Wochenendtermine sind ohne Aufpreis möglich."
  },
  {
    question: "Welche Zahlungsmöglichkeiten bieten Sie an?",
    answer: "Sie können bar, per Überweisung oder EC-Karte bezahlen. Die Zahlung erfolgt erst nach vollständiger Erledigung der Arbeiten zu Ihrer Zufriedenheit."
  },
  {
    question: "Was ist im Festpreis alles enthalten?",
    answer: "Unser Festpreis umfasst alle Arbeitsleistungen, die Entsorgungsgebühren, Fahrtkosten und die besenreine Übergabe. Es gibt keine versteckten Kosten."
  },
  {
    question: "Können wertvolle Gegenstände angerechnet werden?",
    answer: "Ja, verwertbare Gegenstände rechnen wir fair auf den Gesamtpreis an. Dies kann Ihre Kosten erheblich reduzieren. Die Bewertung erfolgt transparent vor Ort."
  },
  {
    question: "Wie läuft eine Messie-Entrümpelung ab?",
    answer: "Messie-Entrümpelungen führen wir besonders diskret und respektvoll durch. Unser speziell geschultes Team arbeitet ohne Vorurteile und auf Wunsch auch außerhalb der regulären Zeiten."
  },
  {
    question: "Übernehmen Sie auch die Endreinigung?",
    answer: "Ja, die besenreine Übergabe ist bei uns Standard. Auf Wunsch führen wir auch eine gründliche Endreinigung durch, sodass die Räume sofort neu genutzt werden können."
  },
  {
    question: "Sind Sie versichert?",
    answer: "Selbstverständlich! Wir sind vollumfänglich versichert. Unsere Betriebshaftpflichtversicherung deckt eventuelle Schäden ab, die während der Arbeiten entstehen könnten."
  },
  {
    question: "Entsorgen Sie auch Sondermüll und Gefahrstoffe?",
    answer: "Ja, wir sind für die fachgerechte Entsorgung aller Arten von Abfällen zertifiziert, einschließlich Farben, Chemikalien und Elektrogeräte. Die Entsorgung erfolgt umweltgerecht."
  },
  {
    question: "Wie lange dauert eine durchschnittliche Entrümpelung?",
    answer: "Eine normale Wohnungsentrümpelung dauert 1-2 Tage. Bei größeren Objekten oder Messie-Wohnungen kann es 3-5 Tage dauern. Den genauen Zeitrahmen teilen wir Ihnen nach der Besichtigung mit."
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1a2b36] via-[#2C4F5E] to-[#1E3A47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Häufig gestellte Fragen
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Hier finden Sie Antworten auf die wichtigsten Fragen rund um unsere Entrümpelungsdienste
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-[#2C4F5E]">
                    {faq.question}
                  </h3>
                  <svg 
                    className={`w-6 h-6 text-[#C73E3A] transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-4 text-gray-700">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#2C4F5E] mb-4">
              Noch Fragen?
            </h2>
            <p className="text-gray-700 mb-6">
              Wir sind für Sie da! Kontaktieren Sie uns gerne für eine persönliche Beratung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#C73E3A] text-white font-semibold rounded-lg hover:bg-[#B02E2A] transition-all"
              >
                Kontaktformular
              </a>
              <a
                href="tel:+4908000060970"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#C73E3A] text-[#C73E3A] font-semibold rounded-lg hover:bg-[#C73E3A] hover:text-white transition-all"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0800 0060970
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Städte-Bereich */}
      <CitiesSection />
      
      {/* Qualitätssiegel */}
      <QualitySeals />
    </div>
  )
}