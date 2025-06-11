'use client'
import Icon from '../components/Icon';

export default function UeberUnsPage() {
  const teamMembers = [
    {
      name: 'Michael Michalowski',
      role: 'Geschäftsführer & Gründer',
      specialty: 'Der Mann mit der Vision – seit über 20 Jahren kämpft er gegen unseriöse Praktiken in der Branche.',
      imagePlaceholder: 'Bild Michael',
      bio: 'Michael gründete die Rümpelschmiede aus einem einfachen Grund: Er wollte beweisen, dass Entrümpelung auch mit Herz und Verstand funktioniert. Seine Vision von Ehrlichkeit und Menschlichkeit prägt jeden Tag unsere Arbeit.'
    },
    {
      name: 'Markus Knaub',
      role: 'Geschäftsführer',
      specialty: 'Der Organisator – er macht aus dem Chaos Ordnung und behält dabei immer den Menschen im Blick.',
      imagePlaceholder: 'Bild Markus',
      bio: 'Markus kennt die Sorgen von Unternehmern. Wenn eine Firma schließen muss, ist er der ruhende Pol, der alles regelt – diskret, professionell und immer mit einem offenen Ohr.'
    },
    {
      name: 'Sergej Schulz',
      role: 'Geschäftsführer',
      specialty: 'Der Seelentröster – spezialisiert auf die schwierigsten Momente im Leben unserer Kunden.',
      imagePlaceholder: 'Bild Sergej',
      bio: 'Sergej hat ein besonderes Talent: Er spürt, wenn Menschen mehr brauchen als nur eine Entrümpelung. Mit unendlicher Geduld und Verständnis begleitet er Sie durch emotionale Ausnahmesituationen.'
    },
  ];

  const coreValues = [
    {
      icon: 'heart',
      title: 'Menschlichkeit & Empathie',
      description: 'Wir sehen nicht nur Gegenstände – wir sehen die Geschichten dahinter und behandeln sie mit dem Respekt, den sie verdienen.',
    },
    {
      icon: '/icons/handshake-icon.png',
      title: 'Ehrlichkeit & Vertrauen',
      description: 'Ein Wort ist ein Wort. Bei uns gibt es keine versteckten Kosten, keine bösen Überraschungen – nur klare Absprachen.',
    },
    {
      icon: 'shield',
      title: 'Diskretion & Schutz',
      description: 'Ihre Geschichte bleibt bei uns. Absolute Verschwiegenheit ist für uns selbstverständlich, besonders in schwierigen Situationen.',
    },
    {
      icon: 'recycle',
      title: 'Nachhaltigkeit & Verantwortung',
      description: 'Wir entsorgen nicht einfach – wir geben Dingen ein zweites Leben und schützen dabei unsere Umwelt.',
    },
  ];

  const differentiators = [
    { 
      title: 'Ein Gesicht, ein Versprechen', 
      description: 'Bei uns haben Sie EINEN Ansprechpartner von Anfang bis Ende. Keine Call-Center, keine Vermittlung an Subunternehmer – nur Ihr persönlicher Betreuer.', 
      icon: 'heart' 
    },
    { 
      title: 'Geschulte Herzensmenschen', 
      description: 'Unser Team ist speziell ausgebildet für den Umgang mit Trauer, Demenz, Messie-Syndrom und anderen sensiblen Situationen. Wir verstehen, dass hinter jeder Entrümpelung ein Schicksal steht.', 
      icon: 'award'
    },
    { 
      title: 'Begleitung über den Auftrag hinaus', 
      description: 'Nach der Entrümpelung lassen wir Sie nicht allein. Wir helfen bei Behördengängen, koordinieren Handwerker und sind für Sie da – so lange Sie uns brauchen.', 
      icon: 'heart'
    },
    { 
      title: 'Premium-Service aus Überzeugung', 
      description: 'Keine Billig-Tricks, keine falschen Versprechen. Wir arbeiten zu fairen Preisen mit höchster Qualität – weil Ihre Zufriedenheit unser Antrieb ist.', 
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
              Die <span className="text-[#C73E3A]">Rümpelschmiede</span>
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
                href="tel:+4952199999900"
                className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2 border-white/50"
              >
                <span className="inline-block w-5 h-5 bg-white/30 rounded mr-2"></span>
                Direkt anrufen: 0521 / 999 999 00
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
                ausnutzen und Sie in schwierigen Zeiten allein lassen. Von Firmen, die versprechen und nicht halten.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                <span className="font-bold text-[#2C4F5E]">Wir haben genug davon gesehen.</span> Weinende Senioren, die betrogen wurden. 
                Hinterbliebene, die in ihrer Trauer auch noch kämpfen mussten. Menschen in Krisensituationen, 
                die statt Hilfe nur weitere Probleme bekamen.
              </p>
              
              <p className="text-lg leading-relaxed">
                <span className="font-bold text-[#C73E3A]">Deshalb gibt es die Rümpelschmiede.</span> Wir haben uns geschworen, 
                es anders zu machen. Besser. Menschlicher. Ehrlicher.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-[#2C4F5E] mb-6">
              Unsere Vision: Ein Versprechen an Sie
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#C73E3A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-gray-500">Check Icon</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Ein Ansprechpartner – Ein Wort</h4>
                  <p className="text-gray-700">
                    Bei uns werden Sie nicht weitergereicht. Kein Call-Center, keine Subunternehmer. 
                    <span className="font-semibold">IHR persönlicher Betreuer</span> begleitet Sie vom ersten Anruf bis zur besenreinen Übergabe.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#C73E3A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-gray-500">Herz Icon</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Als wäre es unser eigenes Zuhause</h4>
                  <p className="text-gray-700">
                    Wir räumen nicht einfach aus. Wir verstehen, dass jeder Gegenstand eine Geschichte hat. 
                    <span className="font-semibold">Mit Respekt und Würde</span> behandeln wir Ihr Hab und Gut – 
                    und vor allem Sie als Mensch.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#C73E3A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-gray-500">Menschen Icon</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Speziell geschult für Ihre Situation</h4>
                  <p className="text-gray-700">
                    Unsere Mitarbeiter sind keine Möbelpacker. Sie sind <span className="font-semibold">ausgebildete Begleiter</span> für 
                    schwierige Lebenssituationen: Trauerfälle, Demenz, Messie-Syndrom, Scheidungen. 
                    Wir verstehen, dass eine Entrümpelung oft mehr ist als nur das Ausräumen von Gegenständen.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#C73E3A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-gray-500">Begleitung Icon</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Wir lassen Sie nicht allein</h4>
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
                "Wir schmieden nicht nur Ordnung aus Chaos – wir schmieden Vertrauen, 
                Hoffnung und neue Anfänge. Mit <span className="font-bold text-[#C73E3A]">Ehrlichkeit, 
                Nächstenliebe und echtem Mitgefühl</span>."
              </blockquote>
              <p className="text-center mt-4 font-semibold">
                – Das Versprechen der Rümpelschmiede
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
              Keine leeren Versprechen – sondern gelebte Werte, die Sie spüren werden.
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
                <span className="font-bold text-[#C73E3A]">Keine Risiken, nur Vorteile:</span> Kostenlose Besichtigung, 
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
              Die Menschen hinter der <span className="text-[#C73E3A]">Rümpelschmiede</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Drei Geschäftsführer, eine Mission: Entrümpelung mit Herz und Verstand.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#F5F5F0] rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-sm text-gray-500">{member.imagePlaceholder}</span>
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
              href="tel:+4952199999900"
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
              Das ist kein Marketing-Sprech – das ist unser tägliches Handeln.
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
                    <img src={value.icon} alt="Value Icon" className="w-8 h-8 filter brightness-0 invert" />
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
              { icon: 'Check Icon', title: 'Festpreisgarantie', desc: 'Keine versteckten Kosten' },
              { icon: 'Clock Icon', title: '24h Erreichbarkeit', desc: 'Immer für Sie da' },
              { icon: 'Shield Icon', title: 'Voll versichert', desc: 'Ihre Sicherheit garantiert' },
              { icon: 'Star Icon', title: '100% Diskret', desc: 'Absolute Verschwiegenheit' }
            ].map((badge, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <div className="w-12 h-12 bg-[#C73E3A]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-xs text-gray-500">{badge.icon}</span>
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
                <span className="text-xs">Telefon Icon</span>
              </div>
              <h3 className="font-bold text-[#2C4F5E] mb-3">Sofort-Beratung</h3>
              <p className="text-gray-600 mb-4 text-sm">Rufen Sie uns jetzt an</p>
              <a
                href="tel:+4952199999900"
                className="inline-block bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                0521 / 999 999 00
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-[#2C4F5E]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-xs">Email Icon</span>
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
                <span className="text-xs">WhatsApp Icon</span>
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
            <span className="font-semibold">Keine Verpflichtungen.</span> Kostenlose Besichtigung. 
            Festpreisgarantie. Das ist unser Versprechen an Sie.
          </p>
        </div>
      </section>
    </div>
  )
}