'use client'

export default function UeberUnsPage() {
  const teamMembers = [
    {
      name: 'Michael Michalowski',
      role: 'Geschäftsführer & Gründer',
      specialty: 'Der erfahrene Stratege – seit über 20 Jahren im Einsatz für klare Verhältnisse bei Haushaltsauflösungen.',
      image: '/images/team-michael.jpg', // Bitte Bildpfad anpassen
      bio: 'Michael schmiedet nicht nur Pläne, sondern auch Vertrauen. Seine Vision von einem ehrlichen und menschlichen Entrümpelungsservice ist das Fundament der Rümpelschmiede.'
    },
    {
      name: 'Markus Knaub',
      role: 'Geschäftsführer',
      specialty: 'Meister der Gewerbeauflösungen, Betriebsauflösungen und komplexen Entrümpelungsprojekte.',
      image: '/images/team-markus.jpg', // Bitte Bildpfad anpassen
      bio: 'Markus packt an, wo Präzision und Effizienz gefragt sind. Bei ihm ist jede Betriebsauflösung in besten Händen – strukturiert und termingerecht.'
    },
    {
      name: 'Sergej Schulz',
      role: 'Geschäftsführer',
      specialty: 'Spezialist für sensible Wohnungsauflösungen, Nachlass-Entrümpelungen und Messie-Wohnungen.',
      image: '/images/team-sergej.jpg', // Bitte Bildpfad anpassen
      bio: 'Sergej beweist täglich, dass professionelle Entrümpelung viel mit Einfühlungsvermögen zu tun hat. Er ist Ihr diskreter Partner in besonders herausfordernden Lebenslagen.'
    },
  ];

  const coreValues = [
    {
      // icon: <FaHandshake className="text-5xl text-[#C73E3A]" />,
      iconPlaceholder: '🤝',
      title: 'Ehrlichkeit & Vertrauen',
      description: 'Transparente Festpreise und absolute Zuverlässigkeit bei jeder Entrümpelung sind unser oberstes Gebot.',
    },
    {
      // icon: <FaRecycle className="text-5xl text-[#C73E3A]" />,
      iconPlaceholder: '♻️',
      title: 'Nachhaltigkeit & Umweltbewusstsein',
      description: 'Wir schmieden eine bessere Zukunft durch fachgerechte Entsorgung, Recycling und Ressourcenschonung.',
    },
    {
      // icon: <FaHeart className="text-5xl text-[#C73E3A]" />,
      iconPlaceholder: '❤️',
      title: 'Menschlichkeit & Empathie',
      description: 'Wir begegnen Ihnen bei jeder Haushaltsauflösung mit Respekt, Verständnis und echter Nächstenliebe.',
    },
    {
      // icon: <FaStar className="text-5xl text-[#C73E3A]" />,
      iconPlaceholder: '🛠️',
      title: 'Professionalität & Sorgfalt',
      description: 'Unsere Entrümpelungsarbeiten sind präzise, gründlich und werden so ausgeführt, als wäre es unser eigenes Zuhause.',
    },
  ];

  const differentiators = [
    { title: 'Ein fester Ansprechpartner', description: 'Von der ersten Besichtigung bis zur besenreinen Übergabe haben Sie eine Vertrauensperson an Ihrer Seite – keine undurchsichtigen Subunternehmer.', iconPlaceholder: '👤' },
    { title: 'Premium-Entrümpelungsservice aus einer Hand', description: 'Wir koordinieren alle notwendigen Schritte Ihrer Haushaltsauflösung und gewährleisten höchste Qualität ohne Umwege über Dritte.', iconPlaceholder: '🏆'},
    { title: 'Sozialkompetenz & Diskretion', description: 'Unser speziell geschultes Entrümpelungsteam agiert stets mit Feingefühl und wahrt Ihre Privatsphäre bei sensiblen Räumungen.', iconPlaceholder: '🤫'},
    { title: 'Begleitung über die Entrümpelung hinaus', description: 'Wir unterstützen Sie auch bei weiteren Abwicklungen und der Koordination mit Handwerkern – als Ihr verlässlicher Partner.', iconPlaceholder: '🔗'},
  ];

  // Floating WhatsApp Button Component
  const WhatsAppButton = () => (
    <a 
      href="https://wa.me/491234567890?text=Hallo%20Rümpelschmiede,%20ich%20interessiere%20mich%20für%20eine%20Entrümpelung" 
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Kontakt"
    >
      <span className="text-2xl">💬</span>
    </a>
  );

  return (
    <div className="bg-gray-50 text-gray-700">
      {/* SEO-optimierter Title und Meta-Description sollten im Head-Bereich ergänzt werden */}
      
      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
      
      {/* Storytelling Hero Section mit CTA */}
      <section className="relative bg-gradient-to-br from-[#2C4F5E] to-[#1E3A47] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           {/* <GiForge className="w-full h-full text-white/50 transform scale-150" /> */}
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight animate-fadeInUp">
              Willkommen bei der <span className="text-[#C73E3A]">Rümpelschmiede</span>
            </h1>
            <p className="text-xl sm:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
              Ihre Experten für professionelle Entrümpelung, Haushaltsauflösung und Wohnungsauflösung in Ihrer Region
            </p>
            
            {/* Neuer CTA Button im Hero */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
              <a
                href="/kontakt"
                className="inline-block bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Jetzt kostenlos beraten lassen
              </a>
              <a
                href="tel:+491234567890"
                className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 border-white/50"
              >
                📞 Sofort anrufen
              </a>
            </div>
          </div>

          <div className="bg-white/10 p-8 md:p-10 rounded-xl shadow-2xl backdrop-blur-sm animate-fadeInUp animation-delay-400 mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Unsere Philosophie: Mehr als nur Entrümpelung – <span className="text-[#C73E3A]">Wir schmieden Freiräume.</span>
            </h2>
            <p className="text-lg text-gray-200 mb-4 leading-relaxed">
              In einem Markt für Entrümpelungsfirmen, der oft von unseriösen Anbietern und reinen Billigdiensten überschwemmt wird, haben wir von der Rümpelschmiede uns etwas ganz Besonderes zu Herzen genommen: Wir leben unsere Vision von einem Entrümpelungsdienstleister, der wirklich für Sie da ist. Bei uns haben Sie <span className="font-semibold text-gray-100">einen festen Ansprechpartner</span> und erhalten <span className="font-semibold text-gray-100">alle Entrümpelungsleistungen aus einer Hand</span> – ohne undurchsichtige Weitergabe an Dritte. Das verstehen wir unter einem echten Premium-Service für Wohnungsauflösungen, der von <span className="font-semibold text-gray-100">Sozialkompetenz und absoluter Diskretion</span> getragen wird.
            </p>
            <p className="text-lg text-gray-200 mb-4 leading-relaxed">
              Wir kümmern uns um Ihre Haushaltsauflösung, <span className="font-semibold text-gray-100">als wären es unsere eigenen Räumlichkeiten</span>. Menschlichkeit und Empathie sind nicht nur Worte für uns, sondern der Kern unserer Entrümpelungsfirma. Unser Personal ist <span className="font-semibold text-gray-100">speziell geschult</span> im Umgang mit Senioren-Wohnungsauflösungen, Nachlass-Entrümpelungen, den emotionalen Herausforderungen nach Scheidungen oder in anderen anspruchsvollen Lebenslagen wie Messie-Wohnungen. Wir verstehen zutiefst, dass eine Entrümpelung oft auch eine emotionale Angelegenheit ist.
            </p>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              Deshalb endet unsere Betreuung nicht mit dem letzten geräumten Gegenstand. Wir sind auch <span className="font-semibold text-gray-100">nach der Entrümpelung für Sie da</span>, helfen bei der Abwicklung weiterer Aufgaben oder der Koordination mit Handwerkern für Renovierungsarbeiten. Wir sehen uns nicht nur als Entrümpelungsfirma, sondern als <span className="font-semibold text-gray-100">Ihren verlässlichen Begleiter</span> in Phasen des Wandels. Umweltgerechte Entsorgung, konsequentes Recycling und gelebte Nachhaltigkeit sind dabei ebenso selbstverständlich wie Ehrlichkeit und Nächstenliebe.
            </p>
            <blockquote className="text-center text-xl text-gray-100 italic border-l-4 border-[#C73E3A] pl-4 py-2">
              "Wir vereinen Ehrlichkeit und Nächstenliebe mit professionellen Entrümpelungsdienstleistungen, damit jeder Kontakt <span className="font-semibold text-[#C73E3A]">wertvoll</span> bleibt."
            </blockquote>
            
            {/* CTA nach der Philosophie */}
            <div className="text-center mt-8">
              <a
                href="/kontakt"
                className="inline-block bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Unverbindliches Angebot einholen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Was uns auszeichnet - mit CTA */}
      <section className="py-16 md:py-24 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C4F5E] mb-4">Ihre Vorteile mit der Rümpelschmiede Entrümpelungsfirma</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entdecken Sie, was unseren Entrümpelungsservice so besonders und vertrauenswürdig macht.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#C73E3A] text-white rounded-full flex items-center justify-center text-2xl">
                  {item.iconPlaceholder}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2C4F5E] mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA nach den Vorteilen */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">Überzeugen Sie sich selbst von unserem erstklassigen Entrümpelungsservice!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontakt"
                className="inline-block bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Kostenlose Besichtigung vereinbaren
              </a>
              <a
                href="/leistungen"
                className="inline-block bg-[#2C4F5E] hover:bg-[#1E3A47] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Unsere Leistungen ansehen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Zertifikat/Ehrenkodex - mit CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#C73E3A] to-[#B02E2A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft text-center md:text-left">
              <div className="mx-auto md:mx-0 mb-6 md:mb-0 w-32 h-32 bg-white/20 rounded-full flex items-center justify-center ring-4 ring-white/30">
                <span className="text-6xl">🏅</span>
              </div>
            </div>
            <div className="animate-fadeInRight">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
                Unser Engagement: <br/>Der Rümpelschmiede Ehrenkodex für professionelle Entrümpelung
              </h2>
              <p className="text-lg opacity-90 mb-6 leading-relaxed">
                Wir arbeiten nach einem festen Ehrenkodex, der unser Versprechen für seriöse Haushaltsauflösungen an Sie untermauert – für einen Entrümpelungsservice, dem Sie voll und ganz vertrauen können:
              </p>
              <ul className="space-y-3">
                {[
                  { text: 'Kontinuierliche Schulung unserer Entrümpelungsteams für den einfühlsamen Umgang in emotionalen Ausnahmesituationen.' },
                  { text: 'Konfliktlösung und Deeskalation als Kernkompetenz für einen stets respektvollen Dialog bei schwierigen Wohnungsauflösungen.' },
                  { text: 'Höchste Diskretion und absolute Verschwiegenheit bei Messie-Entrümpelungen – Ihre persönlichen Angelegenheiten bleiben privat.' },
                  { text: 'Flexible und individuelle Terminabsprachen für Entrümpelungen, die sich ganz nach Ihren Bedürfnissen richten.' },
                  { text: 'Behandlung Ihres Eigentums bei der Haushaltsauflösung mit größter Sorgfalt und Respekt, als wäre es unser eigenes.'}
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span className="opacity-90">{item.text}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA im Ehrenkodex */}
              <div className="mt-8">
                <a
                  href="tel:+491234567890"
                  className="inline-block bg-white hover:bg-gray-100 text-[#C73E3A] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Jetzt anrufen und persönlich beraten lassen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unser Team - mit individuellen CTAs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C4F5E] mb-4">
              Die <span className="text-[#C73E3A]">Schmiedemeister</span> Ihres Vertrauens für Entrümpelung
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lernen Sie die Geschäftsführer kennen, die mit Fachwissen, Engagement und Herzblut hinter Ihrer professionellen Haushaltsauflösung stehen.
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#F5F5F0] rounded-xl shadow-lg p-6 text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center"
              >
                <img
                  src={member.image}
                  alt={`${member.name} - Experte für Entrümpelung`}
                  className="w-40 h-40 rounded-full mx-auto mb-6 object-cover shadow-md border-4 border-white group-hover:border-[#C73E3A] transition-colors duration-300"
                />
                <h3 className="text-2xl font-bold text-[#2C4F5E] mb-1">{member.name}</h3>
                <p className="text-[#C73E3A] font-semibold mb-2 text-lg">{member.role}</p>
                <p className="text-sm text-gray-500 mb-4 italic px-2">{member.specialty}</p>
                <p className="text-gray-600 text-sm leading-relaxed px-2 flex-grow">{member.bio}</p>
                
                {/* Mini CTA für jeden Geschäftsführer */}
                <a
                  href="/kontakt"
                  className="mt-4 text-[#C73E3A] hover:text-[#B02E2A] font-semibold text-sm transition-colors duration-300"
                >
                  Mit {member.name.split(' ')[0]} Kontakt aufnehmen →
                </a>
              </div>
            ))}
          </div>
          
          {/* Team CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">Vertrauen Sie auf über 60 Jahre kombinierte Erfahrung in der Entrümpelungsbranche!</p>
            <a
              href="/kontakt"
              className="inline-block bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Termin mit unseren Experten vereinbaren
            </a>
          </div>
        </div>
      </section>

      {/* Unsere Werte */}
      <section className="py-16 md:py-24 bg-[#2C4F5E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Das Fundament unserer <span className="text-[#C73E3A]">Entrümpelungs-Schmiedekunst</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Diese Werte sind nicht nur Worte – sie sind die Leitplanken unseres täglichen Handelns bei jeder Wohnungsauflösung.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white/10 hover:bg-white/20 p-8 rounded-xl text-center transition-all duration-300 transform hover:scale-105 flex flex-col items-center"
              >
                <div className="mb-4 text-5xl text-[#C73E3A]">
                  {value.iconPlaceholder}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{value.title}</h3>
                <p className="opacity-80 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertrauenssignale vor dem finalen CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <span className="text-4xl mb-2 block">✓</span>
              <h3 className="font-bold text-[#2C4F5E] mb-2">Festpreisgarantie</h3>
              <p className="text-gray-600 text-sm">Keine versteckten Kosten bei Ihrer Entrümpelung</p>
            </div>
            <div className="p-6">
              <span className="text-4xl mb-2 block">⏰</span>
              <h3 className="font-bold text-[#2C4F5E] mb-2">24h Erreichbarkeit</h3>
              <p className="text-gray-600 text-sm">Auch für Notfall-Entrümpelungen da</p>
            </div>
            <div className="p-6">
              <span className="text-4xl mb-2 block">🏢</span>
              <h3 className="font-bold text-[#2C4F5E] mb-2">Versichert & Zertifiziert</h3>
              <p className="text-gray-600 text-sm">Professionelle Haushaltsauflösung mit Garantie</p>
            </div>
            <div className="p-6">
              <span className="text-4xl mb-2 block">🌟</span>
              <h3 className="font-bold text-[#2C4F5E] mb-2">100% Kundenzufriedenheit</h3>
              <p className="text-gray-600 text-sm">Über 5000 erfolgreiche Entrümpelungen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Erweiterter Call to Action mit mehreren Optionen */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C4F5E] mb-6">
            Bereit, Platz für Neues zu schmieden? Ihre Entrümpelung wartet!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ob Haushaltsauflösung, Wohnungsauflösung, Nachlassräumung oder Messie-Entrümpelung – wir beraten Sie gerne unverbindlich und erstellen Ihnen ein faires Festpreis-Angebot, das auf Ihre individuelle Situation zugeschnitten ist.
          </p>
          
          {/* Mehrere CTA Optionen */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <span className="text-3xl mb-3 block">📞</span>
              <h3 className="font-bold text-[#2C4F5E] mb-3">Sofort-Kontakt</h3>
              <p className="text-gray-600 mb-4 text-sm">Rufen Sie uns jetzt an für eine schnelle Beratung</p>
              <a
                href="tel:+491234567890"
                className="inline-block bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Jetzt anrufen
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <span className="text-3xl mb-3 block">📧</span>
              <h3 className="font-bold text-[#2C4F5E] mb-3">Online-Anfrage</h3>
              <p className="text-gray-600 mb-4 text-sm">Kostenloses Angebot für Ihre Entrümpelung</p>
              <a
                href="/kontakt"
                className="inline-block bg-[#2C4F5E] hover:bg-[#1E3A47] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Angebot anfordern
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <span className="text-3xl mb-3 block">💬</span>
              <h3 className="font-bold text-[#2C4F5E] mb-3">WhatsApp</h3>
              <p className="text-gray-600 mb-4 text-sm">Schnell und unkompliziert per WhatsApp</p>
              <a
                href="https://wa.me/491234567890?text=Hallo%20Rümpelschmiede,%20ich%20benötige%20eine%20Entrümpelung"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
          
          {/* Zusätzliche Informationen */}
          <div className="bg-white/80 backdrop-blur p-6 rounded-xl max-w-2xl mx-auto">
            <p className="text-gray-700 font-semibold mb-2">✓ Kostenlose Besichtigung ✓ Festpreisgarantie ✓ Kurzfristige Termine möglich</p>
            <p className="text-gray-600 text-sm">Unsere Entrümpelungsfirma ist in ganz Ihrer Region für Sie da – schnell, zuverlässig und diskret.</p>
          </div>
        </div>
      </section>
    </div>
  )
}