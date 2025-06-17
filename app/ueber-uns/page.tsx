'use client'
import Icon from '../components/Icon';

export default function UeberUnsPage() {
  const teamMembers = [
    {
      name: 'Michael Michalowski',
      role: 'Gründer & Geschäftsführer',
      specialty: 'Der Visionär – Mit über 8+ Jahren Erfahrung setzt er neue Standards für faire und transparente Entrümpelung.',
      image: '/images/team/michael.jpg',
      bio: 'Michael gründete die Rümpel Schmiede aus Überzeugung: Entrümpelung muss ehrlich, fair und menschlich sein. Als Gründer prägt er die Unternehmenskultur und sorgt dafür, dass jeder Kunde die beste Betreuung erhält.'
    },
    {
      name: 'Markus Knaub',
      role: 'Projektleiter & Geschäftsführer',
      specialty: 'Der Stratege – Er koordiniert alle Projekte und sorgt für reibungslose Abläufe von A bis Z.',
      image: '/images/team/markus.jpg',
      bio: 'Markus ist unser Mann für die perfekte Organisation. Mit seinem Blick fürs Detail und seiner ruhigen Art meistert er auch die komplexesten Projekte. Bei ihm laufen alle Fäden zusammen.'
    },
    {
      name: 'Sergej Schulz',
      role: 'Prozessoptimierung & Key Account Management',
      specialty: 'Der Innovator – Er entwickelt unsere Prozesse weiter und betreut unsere wichtigsten Geschäftskunden.',
      image: '/images/team/sergej.jpg',
      bio: 'Sergej verbindet technisches Know-how mit menschlichem Fingerspitzengefühl. Er optimiert unsere Abläufe und sorgt dafür, dass besonders anspruchsvolle Projekte perfekt umgesetzt werden.'
    },
    {
      name: 'Melanie',
      role: 'Finanzcontrolling & Administration',
      specialty: 'Die Zahlenkünstlerin – Sie behält den Überblick über alle finanziellen Aspekte und sorgt für transparente Abrechnungen.',
      image: '/images/team/melanie.jpg',
      bio: 'Melanie ist unser Ass im Ärmel, wenn es um Zahlen geht. Mit ihrer präzisen Art sorgt sie dafür, dass alle Abrechnungen stimmen und unsere Kunden faire, transparente Preise erhalten.'
    },
  ];

  const coreValues = [
    {
      icon: 'heart',
      title: 'Menschlichkeit & Empathie',
      description: 'Wir sehen mehr als Gegenstände – wir sehen die Geschichten dahinter und behandeln sie mit dem Respekt, den sie verdienen.',
    },
    {
      icon: 'handshake',
      title: 'Ehrlichkeit & Vertrauen',
      description: 'Ein Wort ist ein Wort. Bei uns gibt es transparente Kosten, verlässliche Planung – stets klare Absprachen.',
    },
    {
      icon: 'shield',
      title: 'Diskretion & Schutz',
      description: 'Ihre Geschichte bleibt bei uns. Absolute Verschwiegenheit ist für uns selbstverständlich, besonders in schwierigen Situationen.',
    },
    {
      icon: 'recycle',
      title: 'Nachhaltigkeit & Verantwortung',
      description: 'Wir entsorgen verantwortungsvoll – wir geben Dingen ein zweites Leben und schützen dabei unsere Umwelt.',
    },
  ];

  const differentiators = [
    { 
      title: 'Ein Gesicht, ein Versprechen', 
      description: 'Bei uns haben Sie EINEN Ansprechpartner von Anfang bis Ende. Persönlicher Service garantiert, eigene Mitarbeiter – stets Ihr persönlicher Betreuer.', 
      icon: 'heart' 
    },
    { 
      title: 'Geschulte Herzensmenschen', 
      description: 'Unser Team ist speziell ausgebildet für den Umgang mit Trauer, Demenz, Messie-Syndrom und anderen sensiblen Situationen. Wir verstehen, dass hinter jeder Entrümpelung ein Schicksal steht.', 
      icon: 'award'
    },
    { 
      title: 'Begleitung über den Auftrag hinaus', 
      description: 'Nach der Entrümpelung bleiben wir an Ihrer Seite. Wir helfen bei Behördengängen, koordinieren Handwerker und sind für Sie da – so lange Sie uns brauchen.', 
      icon: 'heart'
    },
    { 
      title: 'Premium-Service aus Überzeugung', 
      description: 'Ehrliche Preise, verlässliche Versprechen. Wir arbeiten zu fairen Preisen mit höchster Qualität – weil Ihre Zufriedenheit unser Antrieb ist.', 
      icon: 'award'
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-700">
      
      {/* Hero Section - Emotionale Eröffnung */}
      <section className="relative bg-gradient-to-br from-[#2C4F5E] to-[#1E3A47] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Die <span className="text-[#C73E3A]">Rümpel Schmiede</span>
            </h1>
            <p className="text-xl sm:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
              Ihre Entrümpelungsfirma mit Herz und Verstand
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontakt"
                className="inline-block bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Jetzt unverbindlich beraten lassen
              </a>
              <a
                href="tel:+4908000060970"
                className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 border-white/50"
              >
                <span className="inline-block w-5 h-5 bg-white/30 rounded mr-2"></span>
                Direkt anrufen: 0800 0060970
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Die Geschichte - Emotionaler Einstieg */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C4F5E] mb-8 text-center">
              Warum es uns gibt – Eine Geschichte über Menschlichkeit
            </h2>
            
            <div className="bg-[#F5F5F0] p-8 rounded-2xl mb-8">
              <p className="text-lg leading-relaxed mb-6">
                <span className="font-bold text-[#C73E3A] text-xl">Der Markt ist überschwemmt.</span> Überschwemmt von unseriösen Entrümpelungsfirmen, 
                die mit Dumpingpreisen locken und dann Nachforderungen stellen. Von Anbietern, die Ihre Notsituation 
                ausnutzen und Sie in schwierigen Zeiten im Stich lassen. Von Firmen, die versprechen und dann anders handeln.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                <span className="font-bold text-[#2C4F5E]">Wir haben genug davon gesehen.</span> Weinende Senioren, die betrogen wurden. 
                Hinterbliebene, die in ihrer Trauer auch noch kämpfen mussten. Menschen in Krisensituationen, 
                die statt Hilfe nur weitere Probleme bekamen.
              </p>
              
              <p className="text-lg leading-relaxed">
                <span className="font-bold text-[#C73E3A]">Deshalb gibt es die Rümpel Schmiede.</span> Wir haben uns geschworen, 
                es anders zu machen. Besser. Menschlicher. Ehrlicher.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-[#2C4F5E] mb-6">
              Unsere Vision: Ein Versprechen an Sie
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#C73E3A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#C73E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Ein Ansprechpartner – Ein Wort</h4>
                  <p className="text-gray-700">
                    Bei uns haben Sie einen festen Ansprechpartner. Persönlicher Service, eigene Mitarbeiter. 
                    <span className="font-semibold">IHR persönlicher Betreuer</span> begleitet Sie vom ersten Anruf bis zur besenreinen Übergabe.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#C73E3A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#C73E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Als wäre es unser eigenes Zuhause</h4>
                  <p className="text-gray-700">
                    Wir räumen sorgfältig aus. Wir verstehen, dass jeder Gegenstand eine Geschichte hat. 
                    <span className="font-semibold">Mit Respekt und Würde</span> behandeln wir Ihr Hab und Gut – 
                    und vor allem Sie als Mensch.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#C73E3A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#C73E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Speziell geschult für Ihre Situation</h4>
                  <p className="text-gray-700">
                    Unsere Mitarbeiter sind einfühlsame Profis. Sie sind <span className="font-semibold">ausgebildete Begleiter</span> für 
                    schwierige Lebenssituationen: Trauerfälle, Demenz, Messie-Syndrom, Scheidungen. 
                    Wir verstehen, dass eine Entrümpelung oft mehr ist als nur das Ausräumen von Gegenständen.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#C73E3A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#C73E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Wir bleiben an Ihrer Seite</h4>
                  <p className="text-gray-700">
                    Nach der Entrümpelung ist vor dem Neuanfang. <span className="font-semibold">Wir bleiben an Ihrer Seite</span>: 
                    Hilfe bei Behördengängen, Koordination mit Handwerkern, Unterstützung bei der Wohnungsübergabe. 
                    So lange Sie uns brauchen.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#2C4F5E] text-white p-8 rounded-2xl mt-12">
              <blockquote className="text-xl italic text-center">
                "Wir schmieden mehr als Ordnung aus Chaos – wir schmieden Vertrauen, 
                Hoffnung und neue Anfänge. Mit <span className="font-bold text-[#C73E3A]">Ehrlichkeit, 
                Nächstenliebe und echtem Mitgefühl</span>."
              </blockquote>
              <p className="text-center mt-4 font-semibold">
                – Das Versprechen der Rümpel Schmiede
              </p>
            </div>

            {/* CTA nach der Geschichte */}
            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                Erleben Sie den Unterschied einer Entrümpelungsfirma, die sich wirklich kümmert.
              </p>
              <a
                href="/kontakt"
                className="inline-block bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Kostenlose Erstberatung vereinbaren
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Was uns auszeichnet */}
      <section className="py-16 md:py-24 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C4F5E] mb-4">
              Das macht uns zur Premium-Entrümpelungsfirma
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gelebte Werte – authentisch und spürbar in jeder Begegnung.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-[#C73E3A] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={32} color="white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2C4F5E] mb-3">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA nach den Vorteilen */}
          <div className="text-center mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
              <p className="text-lg text-gray-700 mb-6">
                <span className="font-bold text-[#C73E3A]">Ihre Vorteile auf einen Blick:</span> Kostenlose Besichtigung, 
                Festpreisgarantie, 100% Diskretion
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/preise"
                  className="inline-block bg-[#2C4F5E] hover:bg-[#1E3A47] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Preise berechnen
                </a>
                <a
                  href="/kontakt"
                  className="inline-block bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Beratungstermin vereinbaren
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unser Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C4F5E] mb-4">
              Die Menschen hinter der <span className="text-[#C73E3A]">Rümpel Schmiede</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unser Führungsteam: Vier Experten, eine gemeinsame Vision für bessere Entrümpelung.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#F5F5F0] rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className={`w-full h-full object-cover ${member.name === 'Markus Knaub' ? 'object-[center_10%]' : ''}`}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-sm text-gray-500">Kein Bild</span>
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-[#2C4F5E] mb-1">{member.name}</h3>
                <p className="text-[#C73E3A] font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 italic mb-4">{member.specialty}</p>
                <p className="text-gray-700 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-[#2C4F5E] text-white p-8 rounded-2xl">
            <p className="text-lg mb-6">
              <span className="font-bold">Über 60 Jahre kombinierte Erfahrung</span> – aber was noch wichtiger ist: 
              Ein gemeinsames Herz für Menschen in schwierigen Situationen.
            </p>
            <a
              href="tel:+4908000060970"
              className="inline-block bg-white hover:bg-gray-100 text-[#2C4F5E] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Persönliches Gespräch vereinbaren
            </a>
          </div>
        </div>
      </section>

      {/* Unsere Werte */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#2C4F5E] to-[#1E3A47] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Die Werte, die uns jeden Tag antreiben
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Das ist unsere Unternehmenskultur – das ist unser tägliches Handeln.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur p-8 rounded-xl text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon.startsWith('/') ? (
                    <img src={value.icon} alt={`${value.title} - Entrümpelung Werte Bielefeld & OWL`} className="w-8 h-8 filter brightness-0 invert" />
                  ) : (
                    <Icon name={value.icon} size={32} color="white" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="opacity-90 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finaler CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C4F5E] mb-6">
            Bereit für eine Entrümpelung, die anders ist?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Erleben Sie, wie Entrümpelung sein sollte: Menschlich, professionell, vertrauenswürdig. 
            Lassen Sie uns gemeinsam Raum für Neues schaffen.
          </p>

          {/* Trust Badges */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { 
                icon: (
                  <svg className="w-6 h-6 text-[#C73E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ),
                title: 'Festpreisgarantie',
                desc: 'Transparente Preisgestaltung'
              },
              { 
                icon: (
                  <svg className="w-6 h-6 text-[#C73E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: '24h Erreichbarkeit',
                desc: 'Immer für Sie da'
              },
              { 
                icon: (
                  <svg className="w-6 h-6 text-[#C73E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Voll versichert',
                desc: 'Ihre Sicherheit garantiert'
              },
              { 
                icon: (
                  <svg className="w-6 h-6 text-[#C73E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
                title: '100% Diskret',
                desc: 'Absolute Verschwiegenheit'
              }
            ].map((badge, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <div className="w-12 h-12 bg-[#C73E3A]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  {badge.icon}
                </div>
                <h4 className="font-bold text-[#2C4F5E]">{badge.title}</h4>
                <p className="text-sm text-gray-600">{badge.desc}</p>
              </div>
            ))}
          </div>

          {/* Multiple CTA Options */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-[#C73E3A]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-[#C73E3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#2C4F5E] mb-3">Sofort-Beratung</h3>
              <p className="text-gray-600 mb-4 text-sm">Rufen Sie uns jetzt an</p>
              <a
                href="tel:+4908000060970"
                className="inline-block bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                0800 0060970
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-[#2C4F5E]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-[#2C4F5E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#2C4F5E] mb-3">Online-Anfrage</h3>
              <p className="text-gray-600 mb-4 text-sm">Kostenloses Angebot</p>
              <a
                href="/kontakt"
                className="inline-block bg-[#2C4F5E] hover:bg-[#1E3A47] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Anfrage starten
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <h3 className="font-bold text-[#2C4F5E] mb-3">WhatsApp</h3>
              <p className="text-gray-600 mb-4 text-sm">Schnell & unkompliziert</p>
              <a
                href="https://wa.me/4952199999900"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Chat starten
              </a>
            </div>
          </div>

          <p className="mt-8 text-gray-600">
            <span className="font-semibold">Völlig unverbindlich.</span> Kostenlose Besichtigung. 
            Festpreisgarantie. Das ist unser Versprechen an Sie.
          </p>
        </div>
      </section>
    </div>
  )
}