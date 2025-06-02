'use client'
import { useState, useEffect } from 'react';

interface ArticleEntry {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  slug: string;
  readingTime: string;
  icon: string;
}

const allArticles: ArticleEntry[] = [
  {
    id: 'artikel-nrw-profi',
    title: 'Der ultimative Ratgeber zur professionellen Entrümpelung in NRW',
    category: 'Allgemeine Entrümpelung',
    excerpt: 'Alles was Sie über Entrümpelung, Haushaltsauflösung und Wohnungsräumung in Nordrhein-Westfalen wissen müssen, von den Arten bis zum Ablauf und den Kosten.',
    slug: 'entruempelung-nrw-ratgeber',
    readingTime: '12 Min. Lesezeit',
    icon: '🏗️'
  },
  {
    id: 'artikel-todesfall',
    title: 'Entrümpelung bei Todesfällen: Ein sensibler Leitfaden für Angehörige',
    category: 'Nachlass & Trauerfall',
    excerpt: 'Ein Leitfaden, der die emotionalen und praktischen Aspekte der Haushaltsauflösung nach einem Todesfall beleuchtet und Unterstützung bietet.',
    slug: 'entruempelung-todesfall-leitfaden',
    readingTime: '15 Min. Lesezeit',
    icon: '🕊️'
  },
  {
    id: 'checkliste-haushaltsaufloesung',
    title: 'Die ultimative Checkliste für Ihre Haushaltsauflösung mit der Rümpelschmiede',
    category: 'Haushaltsauflösung',
    excerpt: 'Eine detaillierte Schritt-für-Schritt-Anleitung, die Ihnen hilft, Ihre Haushaltsauflösung stressfrei zu organisieren und nichts zu vergessen.',
    slug: 'checkliste-haushaltsaufloesung',
    readingTime: '10 Min. Lesezeit',
    icon: '✅'
  },
  {
    id: 'messie-hilfe-verstehen',
    title: 'Messie-Syndrom: Verstehen, einfühlsam helfen und professionell entrümpeln',
    category: 'Messie-Hilfe',
    excerpt: 'Informationen zum Messie-Syndrom, wie Angehörige unterstützen können und was bei der sensiblen Räumung einer Messie-Wohnung zu beachten ist.',
    slug: 'messie-syndrom-hilfe-entruempelung',
    readingTime: '8 Min. Lesezeit',
    icon: '🤝'
  },
  {
    id: 'wertanrechnung-entruempelung-sparen',
    title: 'Wertanrechnung bei der Entrümpelung: So sparen Sie bares Geld mit der Rümpelschmiede',
    category: 'Kosten & Finanzen',
    excerpt: 'Erfahren Sie, welche Gegenstände bei einer Entrümpelung noch Wert haben können und wie das Prinzip der Wertanrechnung bei der Rümpelschmiede funktioniert.',
    slug: 'wertanrechnung-entruempelung-sparen',
    readingTime: '7 Min. Lesezeit',
    icon: '💰'
  },
  {
    id: 'nach-der-entruempelung-neuanfang',
    title: 'Nach der Entrümpelung: Die wichtigsten Schritte für Ihren Neuanfang',
    category: 'Nach der Entrümpelung',
    excerpt: 'Von Ummeldungen über Behördengänge bis zur Wohnungsübergabe – dieser Ratgeber der Rümpelschmiede zeigt Ihnen, was nach einer erfolgreichen Räumung zu tun ist.',
    slug: 'nach-der-entruempelung-neuanfang',
    readingTime: '9 Min. Lesezeit',
    icon: '🌟'
  },
  {
    id: 'erbschaft-entruempelung-ablauf',
    title: 'Erbschaft & Entrümpelung: Der genaue Ablauf bei einem Nachlass – ein Rümpelschmiede Spezial',
    category: 'Nachlass & Trauerfall',
    excerpt: 'Was passiert mit dem Hausrat, wenn jemand stirbt? Ein detaillierter Blick auf den Ablauf von Erbschaft, Testament und der anstehenden Entrümpelung.',
    slug: 'erbschaft-entruempelung-ablauf',
    readingTime: '11 Min. Lesezeit',
    icon: '⚖️'
  },
  {
    id: 'ki-entruempelung-zukunft',
    title: 'KI und die Zukunft der Entrümpelung: Smarte Helfer für mehr Effizienz?',
    category: 'Moderne Themen',
    excerpt: 'Künstliche Intelligenz im Vormarsch: Wie KI-Tools bei der Inventarisierung, Bewertung und Planung von Entrümpelungen helfen könnten. Ein Ausblick der Rümpelschmiede.',
    slug: 'ki-entruempelung-zukunft',
    readingTime: '6 Min. Lesezeit',
    icon: '🤖'
  },
  {
    id: 'kostenfaktoren-entruempelung',
    title: 'Was kostet eine Entrümpelung wirklich? Detaillierte Kostenfaktoren aufgeschlüsselt',
    category: 'Kosten & Finanzen',
    excerpt: 'Die Rümpelschmiede erklärt transparent, welche Faktoren den Preis einer Entrümpelung beeinflussen und wie Sie Kostenfallen vermeiden.',
    slug: 'kostenfaktoren-entruempelung-details',
    readingTime: '8 Min. Lesezeit',
    icon: '📊'
  },
  {
    id: 'umgang-emotionale-gegenstaende',
    title: 'Emotionale Gegenstände bei der Entrümpelung: Loslassen und Erinnerungen bewahren',
    category: 'Tipps & Tricks',
    excerpt: 'Ein sensibler Ratgeber der Rümpelschmiede zum Umgang mit Erinnerungsstücken und emotional wertvollen Dingen während einer Haushaltsauflösung.',
    slug: 'emotionale-gegenstaende-entruempelung',
    readingTime: '7 Min. Lesezeit',
    icon: '❤️'
  },
  {
    id: 'rechtliche-aspekte-entruempelung',
    title: 'Rechtliche Fallstricke bei Entrümpelung und Haushaltsauflösung vermeiden',
    category: 'Rechtliches & Bürokratie',
    excerpt: 'Mietrecht, Entsorgungsvorschriften, Betretungsrechte: Die Rümpelschmiede informiert über wichtige rechtliche Aspekte, die Sie kennen sollten.',
    slug: 'rechtliche-aspekte-entruempelung',
    readingTime: '10 Min. Lesezeit',
    icon: '📜'
  },
  {
    id: 'diy-vs-profi-entruempelung',
    title: 'Entrümpelung: Selber machen oder Profi beauftragen? Eine Entscheidungshilfe',
    category: 'Allgemeine Entrümpelung',
    excerpt: 'Vor- und Nachteile der DIY-Entrümpelung im Vergleich zur Beauftragung eines Fachbetriebs wie der Rümpelschmiede. Wann lohnt sich was?',
    slug: 'diy-vs-profi-entruempelung',
    readingTime: '6 Min. Lesezeit',
    icon: '🔨'
  },
  {
    id: 'entrümpelung-seniorenheim',
    title: 'Umzug ins Seniorenheim: So gelingt die Entrümpelung der alten Wohnung',
    category: 'Haushaltsauflösung',
    excerpt: 'Ein praktischer Leitfaden für den oft emotionalen Schritt des Umzugs in ein Seniorenheim und die damit verbundene Haushaltsauflösung.',
    slug: 'entruempelung-umzug-seniorenheim',
    readingTime: '9 Min. Lesezeit',
    icon: '👴'
  },
  {
    id: 'nachhaltige-entsorgung',
    title: 'Nachhaltigkeit bei der Entrümpelung: Umweltgerechte Entsorgung mit der Rümpelschmiede',
    category: 'Tipps & Tricks',
    excerpt: 'Mehr als nur wegwerfen: Erfahren Sie, wie die Rümpelschmiede auf Recycling, Wiederverwertung und umweltschonende Entsorgungswege achtet.',
    slug: 'nachhaltige-entsorgung-entruempelung',
    readingTime: '5 Min. Lesezeit',
    icon: '♻️'
  },
  {
    id: 'entruempelung-scheidung-trennung',
    title: 'Entrümpelung nach Scheidung oder Trennung: Gemeinsamen Hausrat fair aufteilen und neu starten',
    category: 'Haushaltsauflösung',
    excerpt: 'Die Auflösung eines gemeinsamen Haushalts nach einer Trennung ist oft schwierig. Die Rümpelschmiede gibt Tipps für einen fairen und organisierten Prozess.',
    slug: 'entruempelung-scheidung-trennung',
    readingTime: '8 Min. Lesezeit',
    icon: '💔'
  }
];

const articleCategories = [
    { id: 'all', name: 'Alle Artikel', icon: '📚', color: 'bg-gray-100' },
    { id: 'Allgemeine Entrümpelung', name: 'Allgemeine Entrümpelung', icon: '🧹', color: 'bg-blue-100' },
    { id: 'Haushaltsauflösung', name: 'Haushaltsauflösung', icon: '🏠', color: 'bg-green-100' },
    { id: 'Nachlass & Trauerfall', name: 'Nachlass & Trauerfall', icon: '🕊️', color: 'bg-purple-100' },
    { id: 'Messie-Hilfe', name: 'Messie-Hilfe', icon: '🤝', color: 'bg-yellow-100' },
    { id: 'Kosten & Finanzen', name: 'Kosten & Finanzen', icon: '💰', color: 'bg-red-100' },
    { id: 'Nach der Entrümpelung', name: 'Nach der Entrümpelung', icon: '🌟', color: 'bg-indigo-100' },
    { id: 'Moderne Themen', name: 'Moderne Themen & KI', icon: '🤖', color: 'bg-pink-100' },
    { id: 'Rechtliches & Bürokratie', name: 'Rechtliches & Bürokratie', icon: '⚖️', color: 'bg-orange-100' },
    { id: 'Tipps & Tricks', name: 'Tipps & Tricks', icon: '💡', color: 'bg-teal-100' },
];

export default function ArtikelPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const filteredArticles = allArticles.filter(article => {
    const categoryMatch = selectedCategory === 'all' || article.category === selectedCategory;
    const searchTermMatch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            article.category.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchTermMatch;
  });

  const renderArticleContent = (articleId: string) => {
    switch (articleId) {
      case 'artikel-nrw-profi':
        return (
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <h3 className="text-2xl font-bold text-[#2C4F5E] mt-8 mb-4">
              Einleitung: Warum professionelle Entrümpelung durch die Rümpelschmiede wichtig ist
            </h3>
            <p className="mb-4">
              Eine Entrümpelung steht oft in Verbindung mit einschneidenden Lebensereignissen. 
              Ob Todesfall, Umzug ins Pflegeheim, Trennung oder einfach der Wunsch nach einem 
              Neuanfang – die Räumung einer Wohnung oder eines Hauses ist emotional und 
              organisatorisch eine große Herausforderung. Gerade in Nordrhein-Westfalen, einem Bundesland voller Dynamik und Wandel, stehen jährlich tausende Menschen 
              vor dieser Aufgabe. Wir von der **Rümpelschmiede** verstehen diese Momente und wissen, dass es um mehr als nur das Beseitigen von Gegenständen geht.
            </p>
            <p className="mb-4">
              Die professionelle Entrümpelung durch einen erfahrenen Fachbetrieb wie die **Rümpelschmiede** bietet 
              dabei entscheidende Vorteile: Sie sparen wertvolle Zeit und Kraft, die Sie für sich und Ihre Familie nutzen können. Sie vermeiden rechtliche 
              Fallstricke bei der umweltgerechten Entsorgung – ein Thema, das wir sehr ernst nehmen. Vor allem aber können Sie sich auf die emotionalen Aspekte 
              konzentrieren oder sich unbelastet neuen Aufgaben widmen, während unsere Profis die praktische Arbeit mit Diskretion und Effizienz übernehmen. Wir sind nicht nur Dienstleister, wir sind Ihre verständnisvollen Partner in dieser Phase. Unser Ziel ist es, Ihnen die <strong className="text-[#C73E3A]">beste Entrümpelungserfahrung</strong> zu ermöglichen, die Sie je hatten – stressfrei, fair und gründlich.
            </p>

            <h3 className="text-2xl font-bold text-[#2C4F5E] mt-8 mb-4">
              Die verschiedenen Arten der Entrümpelung – Ein Überblick der Rümpelschmiede
            </h3>
            <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Haushaltsauflösung: Wenn ein ganzes Leben neu geordnet wird</h4>
            <p className="mb-4">Die komplette Auflösung eines Haushalts ist die umfassendste Form der Entrümpelung. Hierbei wird die gesamte Wohnung oder das Haus von uns, der **Rümpelschmiede**, geräumt. Alle Möbel und Gegenstände werden sorgfältig gesichtet, sortiert und anschließend fachgerecht entsorgt oder, wenn möglich und gewünscht, einer Wertanrechnung zugeführt oder gespendet. In NRW, von den Metropolen im Ruhrgebiet bis zu den Städten in Ostwestfalen-Lippe wie Bielefeld, ist dies eine unserer Kernkompetenzen. Wir gehen dabei mit größter Sorgfalt und dem nötigen Respekt vor persönlichen Erinnerungen vor.</p>
            <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Teilentrümpelung: Gezielt Platz schaffen</h4>
            <p className="mb-4">Nicht immer muss die ganze Wohnung geräumt werden. Oft reicht es, einzelne Räume wie Keller, Dachboden, Garage oder auch nur bestimmte Bereiche eines Zimmers zu entrümpeln. Die **Rümpelschmiede** hilft Ihnen schnell und unkompliziert, ungenutzte Flächen wieder nutzbar zu machen.</p>
            <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Messie-Entrümpelung: Hilfe mit Fingerspitzengefühl</h4>
            <p className="mb-4">Die Räumung von Messie-Wohnungen erfordert besondere Sensibilität, Diskretion und Fachkenntnis. Das Team der **Rümpelschmiede** ist speziell für solche herausfordernden Situationen geschult.</p>
            <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Gewerbeentrümpelung & Betriebsauflösung</h4>
            <p className="mb-4">Büros, Praxen, Läden – die **Rümpelschmiede** versteht die besonderen Anforderungen an Gewerbeentrümpelungen: Datenschutz, fachgerechte Entsorgung und oft enge Zeitfenster.</p>
            <h3 className="text-2xl font-bold text-[#2C4F5E] mt-8 mb-4">Der Ablauf einer professionellen Entrümpelung durch die Rümpelschmiede</h3>
            {[
                { title: "Schritt 1: Ihre Kontaktaufnahme – Der erste Dialog", text: "Alles beginnt mit Ihrer unverbindlichen Anfrage bei der Rümpelschmiede – per Telefon, E-Mail oder über unsere Webseite. Wir hören Ihnen genau zu, verstehen Ihr Anliegen und bieten eine erste kostenlose Beratung." },
                { title: "Schritt 2: Kostenlose Besichtigung vor Ort – Die Basis für ein faires Angebot", text: "Ein seriöser Anbieter wie die Rümpelschmiede wird immer eine kostenlose und unverbindliche Besichtigung durchführen. Einer unserer erfahrenen Projektleiter kommt zu Ihnen, erfasst den genauen Umfang der Arbeiten und berät Sie." },
                { title: "Schritt 3: Transparentes Festpreisangebot – Keine versteckten Kosten", text: "Auf Basis der Besichtigung erstellen wir Ihnen ein detailliertes und schriftliches Festpreisangebot. Dieses listet alle vereinbarten Leistungen transparent auf." },
                { title: "Schritt 4: Die Durchführung – Effizient, sauber, diskret", text: "Zum vereinbarten Termin rückt unser geschultes und freundliches Entrümpelungsteam an. Wir arbeiten systematisch, zügig und hinterlassen die Baustelle stets ordentlich." },
                { title: "Schritt 5: Besenreine Übergabe & mehr – Ihr Abschluss mit der Rümpelschmiede", text: "Nach Abschluss aller Räumungsarbeiten erfolgt die besenreine Übergabe. Auf Wunsch bietet die Rümpelschmiede auch Zusatzleistungen wie Grundreinigung oder Desinfektion an." }
            ].map(step => (
                <div key={step.title} className="bg-blue-50 rounded-lg p-6 my-4 shadow hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-semibold text-[#2C4F5E] mb-2">{step.title}</h4>
                    <p>{step.text}</p>
                </div>
            ))}
            <h3 className="text-2xl font-bold text-[#2C4F5E] mt-8 mb-4">Kosten einer Entrümpelung in NRW – Ein Richtwert von der Rümpelschmiede</h3>
            <p className="mb-4">Die Kosten variieren stark. Die **Rümpelschmiede** erstellt nach kostenloser Besichtigung ein individuelles Festpreisangebot. Richtwerte für NRW:</p>
            <div className="bg-gray-100 rounded-lg p-6 my-6"><ul className="space-y-2"><li><strong>Kleine Wohnung (ca. 30-50 qm):</strong> Oft ab 800 - 1.800 Euro</li><li><strong>Mittlere Wohnung (ca. 60-90 qm):</strong> Oft ab 1.500 - 3.500 Euro</li><li><strong>Großes Haus / stark vermüllte Objekte:</strong> Ab 3.000 Euro</li></ul><p className="text-sm text-gray-500 mt-3">Hinweis: Wertanrechnung kann Kosten senken!</p></div>
            <h3 className="text-2xl font-bold text-[#2C4F5E] mt-8 mb-4">Tipps von der Rümpelschmiede: Optimale Vorbereitung</h3>
            <ol className="list-decimal list-inside space-y-3 ml-4"><li> <strong>Persönliches Sichern:</strong> Dokumente, Wertsachen, Erinnerungsstücke. Markieren Sie klar, was NICHT entsorgt werden soll.</li><li> <strong>Verkaufen oder Verschenken:</strong> Klären Sie dies vor dem Termin. Die Rümpelschmiede berät zu Wertanrechnung.</li><li> <strong>Zugänglichkeit gewährleisten:</strong> Freie Wege, Nachbarn informieren.</li><li> <strong>Behördliches & Verträge:</strong> Kündigungen (Miete, Strom etc.). Die Rümpelschmiede berät hierzu.</li><li> <strong>Schlüsselübergabe planen.</strong></li></ol>
          </div>
        );
      case 'artikel-todesfall':
        return (
            <div className="prose max-w-none text-gray-700 leading-relaxed">
                <h3 className="text-2xl font-bold text-[#2C4F5E] mt-8 mb-4">Die emotionale Herausforderung: Abschied nehmen und loslassen</h3>
                <p className="mb-4">Der Verlust eines geliebten Menschen ist eine der schmerzhaftesten Erfahrungen. Neben tiefer Trauer stehen Angehörige oft vor der schwierigen Aufgabe, den Haushalt des Verstorbenen aufzulösen. Jeder Gegenstand kann eine Flut von Erinnerungen auslösen. Die Entrümpelung nach einem Todesfall ist daher weit mehr als ein logistischer Akt; sie ist ein tief emotionaler Prozess. Die **Rümpelschmiede** versteht diese Zerreißprobe und steht Ihnen mit Einfühlungsvermögen, Respekt und Würde zur Seite.</p>
                <h3 className="text-2xl font-bold text-[#2C4F5E] mt-8 mb-4">Der genaue Ablauf: Schritt für Schritt durch die Nachlass-Entrümpelung mit der Rümpelschmiede</h3>
                <p className="mb-4">Eine strukturierte Vorgehensweise hilft. Die **Rümpelschmiede** begleitet Sie:</p>
                <ol className="list-decimal list-inside space-y-4 ml-4">
                    <li><strong className="text-[#2C4F5E]">Klärung der Rechtslage (Vorab durch Erben):</strong> Erbschein, Testament, Erbengemeinschaft, Mietvertrag, laufende Verträge (Strom, Gas etc. kündigen). Die Rümpelschmiede kann hier oft mit Erfahrungswerten unterstützen.</li>
                    <li><strong className="text-[#2C4F5E]">Unverbindliche Erstberatung & Besichtigung:</strong> Wir besprechen Ihre Situation diskret, schätzen den Umfang ein und beraten zu Wertgegenständen.</li>
                    <li><strong className="text-[#2C4F5E]">Sorgfältige Sichtung und Entscheidung:</strong> Wichtige Dokumente, Wertsachen und persönliche Erinnerungsstücke sichern. Klare Kennzeichnung, was bleiben soll.</li>
                    <li><strong className="text-[#2C4F5E]">Transparentes Festpreisangebot:</strong> Detailliert, ohne versteckte Kosten, inklusive Wertanrechnung.</li>
                    <li><strong className="text-[#2C4F5E]">Professionelle Durchführung:</strong> Effizient, diskret, respektvoll, umweltfreundliche Entsorgung.</li>
                    <li><strong className="text-[#2C4F5E]">Besenreine Übergabe & Zusatzleistungen:</strong> Auf Wunsch Endreinigung, Desinfektion, kleine Reparaturen.</li>
                    <li><strong className="text-[#2C4F5E]">Unterstützung auch danach: Ummeldungen & Co.:</strong> Hilfe bei Ummeldung (Einwohnermeldeamt), Abmeldung (Fahrzeuge), Information an Institutionen (Rentenversicherung). Die Rümpelschmiede sagt Ihnen, welche Stellen typischerweise informiert werden müssen.</li>
                </ol>
                <h3 className="text-2xl font-bold text-[#2C4F5E] mt-8 mb-4">Was passiert mit den Gegenständen? Wertanrechnung, Spende, Recycling</h3>
                <p className="mb-4">Die **Rümpelschmiede** verfolgt einen nachhaltigen Ansatz: Wertanrechnung, Spenden an karitative Einrichtungen, fachgerechtes Recycling und Sondermüllentsorgung.</p>
                <h3 className="text-2xl font-bold text-[#2C4F5E] mt-8 mb-4">FAQ: Häufige Fragen zur Entrümpelung nach einem Todesfall</h3>
                <div className="space-y-6"><div><h4 className="text-xl font-semibold text-gray-800 mb-2">Frage: Wie schnell kann die Rümpelschmiede eine Wohnung nach einem Todesfall räumen?</h4><p>Antwort: Sehr zeitnah, oft innerhalb weniger Tage. Sprechen Sie uns auf dringende Termine an.</p></div><div><h4 className="text-xl font-semibold text-gray-800 mb-2">Frage: Muss ich bei der Entrümpelung anwesend sein?</h4><p>Antwort: Nicht zwingend. Nach Absprache und Schlüsselübergabe arbeiten wir selbstständig.</p></div><div><h4 className="text-xl font-semibold text-gray-800 mb-2">Frage: Was ist, wenn ich nicht in NRW wohne, die Wohnung aber hier ist?</h4><p>Antwort: Die Rümpelschmiede betreut Kunden deutschlandweit. Organisation per Telefon, E-Mail, Fotos/Videos ist möglich.</p></div></div>
                <div className="bg-[#2C4F5E] text-white rounded-lg p-6 my-8 shadow-xl"><h3 className="text-xl font-bold mb-3 text-center">Die Rümpelschmiede: Ihr einfühlsamer Partner</h3><p className="opacity-90 text-center">Die Auflösung eines Haushalts nach einem Todesfall ist eine Aufgabe, die niemand gerne angeht. Wir stehen Ihnen mit Professionalität, Diskretion und tiefem menschlichen Verständnis zur Seite. Kontaktieren Sie uns.</p></div>
            </div>
        );
    
      case 'checkliste-haushaltsaufloesung':
        return (
            <div className="prose max-w-none text-gray-700 leading-relaxed">
                <h3 className="text-2xl font-bold text-[#2C4F5E] mt-8 mb-4">Einleitung: Stressfrei durch die Haushaltsauflösung mit der Rümpelschmiede-Checkliste</h3>
                <p className="mb-4">Eine Haushaltsauflösung kann überwältigend sein. Damit Sie den Überblick behalten und nichts Wichtiges vergessen, hat die **Rümpelschmiede** eine umfassende Checkliste für Sie zusammengestellt. Dieser Leitfaden begleitet Sie von den ersten Überlegungen bis zur finalen Übergabe der geräumten Immobilie.</p>
                <p className="mb-4">Unser Ziel ist es, Ihnen den Prozess so einfach und strukturiert wie möglich zu gestalten. Denn eine gute Planung ist der Schlüssel zu einer erfolgreichen und möglichst stressarmen Entrümpelung. Denken Sie daran: Sie müssen das nicht alleine schaffen, die **Rümpelschmiede** ist an Ihrer Seite!</p>
                
                <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Phase 1: Vorbereitung und Planung (ca. 4-8 Wochen vor dem Räumtermin)</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li><strong className="text-gray-700">Grund für die Auflösung klären:</strong> Umzug, Todesfall, Auswanderung? Dies beeinflusst Fristen und Vorgehen.</li>
                    <li><strong className="text-gray-700">Termine festlegen:</strong> Bis wann muss die Wohnung/das Haus leer sein? Kündigungsfristen beachten.</li>
                    <li><strong className="text-gray-700">Rechtliche Situation prüfen:</strong> Bei Nachlass: Erbschein, Testament, Erbengemeinschaft involvieren. Bei Mietobjekt: Gespräch mit Vermieter.</li>
                    <li><strong className="text-gray-700">Budget festlegen:</strong> Welche Kosten können/wollen Sie tragen? Holen Sie frühzeitig Angebote ein (z.B. von der Rümpelschmiede).</li>
                    <li><strong className="text-gray-700">Helfer organisieren:</strong> Familie, Freunde oder direkt Profis wie die Rümpelschmiede kontaktieren.</li>
                </ul>

                <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Phase 2: Sichten, Sortieren, Entscheiden (ca. 2-4 Wochen vor dem Räumtermin)</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li><strong className="text-gray-700">Systematisch vorgehen:</strong> Raum für Raum oder nach Kategorien (Kleidung, Bücher, Geschirr).</li>
                    <li><strong className="text-gray-700">Kategorien bilden:</strong> Behalten, Verkaufen, Verschenken/Spenden, Entsorgen. Nutzen Sie verschiedenfarbige Aufkleber.</li>
                    <li><strong className="text-gray-700">Dokumente sichern:</strong> Wichtige Unterlagen (Verträge, Zeugnisse, Urkunden) separat und sicher aufbewahren.</li>
                    <li><strong className="text-gray-700">Wertsachen und Erinnerungsstücke:</strong> Identifizieren und entscheiden, was damit geschehen soll.</li>
                    <li><strong className="text-gray-700">Verkauf starten:</strong> Online-Plattformen, Flohmarkt, Antiquitätenhändler. Die Rümpelschmiede berät zur Wertanrechnung.</li>
                    <li><strong className="text-gray-700">Spenden organisieren:</strong> Termine mit karitativen Einrichtungen absprechen.</li>
                </ul>
                
                <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Phase 3: Administrative Aufgaben (laufend und bis zum Räumtermin)</h4>
                <p className="mb-4">Ummeldungen (Einwohnermeldeamt), Kündigungen (Versicherungen, Abos), Nachsendeauftrag, etc. Die **Rümpelschmiede** erinnert Sie an die wichtigsten Punkte.</p>

                <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Phase 4: Die eigentliche Entrümpelung (am Räumtag/en)</h4>
                <p className="mb-4">Koordination der Helfer oder des Profi-Teams der **Rümpelschmiede**. Sicherstellung der Zugangswege. Entsorgung organisieren.</p>
                
                <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Phase 5: Nachbereitung und Übergabe</h4>
                <p className="mb-4">Endreinigung (besenrein oder Grundreinigung). Wohnungsübergabe mit Protokoll. Letzte administrative Schritte.</p>

                <div className="bg-blue-50 p-4 rounded-lg mt-6">
                    <p className="font-semibold text-[#2C4F5E]">Die Rümpelschmiede unterstützt Sie gerne bei jedem Schritt dieser Checkliste. Fordern Sie Ihr individuelles Angebot an!</p>
                </div>
            </div>
        );

      case 'nach-der-entruempelung-neuanfang':
        return (
            <div className="prose max-w-none text-gray-700 leading-relaxed">
                <h3 className="text-2xl font-bold text-[#2C4F5E] mt-8 mb-4">Einleitung: Die Entrümpelung ist geschafft – was nun? Ihr Wegweiser von der Rümpelschmiede</h3>
                <p className="mb-4">Herzlichen Glückwunsch! Die Entrümpelung ist abgeschlossen, und Sie haben erfolgreich Platz für Neues geschaffen. Doch oft endet die Arbeit hier nicht. Viele administrative und organisatorische Aufgaben stehen noch an. Die **Rümpelschmiede** lässt Sie auch nach der Räumung nicht allein und hat die wichtigsten Schritte für Sie zusammengefasst, die Ihnen den Übergang erleichtern.</p>
                
                <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Wohnungsübergabe und Mietvertragsende</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li><strong className="text-gray-700">Zustand prüfen:</strong> Ist die Wohnung/das Haus im vereinbarten Zustand (meist besenrein)?</li>
                    <li><strong className="text-gray-700">Übergabeprotokoll:</strong> Führen Sie ein detailliertes Protokoll mit dem Vermieter/Nachmieter. Zählerstände (Strom, Wasser, Gas) notieren! Die **Rümpelschmiede** kann Ihnen eine Vorlage geben.</li>
                    <li><strong className="text-gray-700">Schlüsselübergabe:</strong> Alle Schlüssel übergeben und dies quittieren lassen.</li>
                    <li><strong className="text-gray-700">Kaution:</strong> Klären Sie die Rückzahlung der Mietkaution.</li>
                </ul>

                <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Ummeldungen und Adressänderungen – Das A und O</h4>
                <p className="mb-2"><strong className="text-gray-700">Einwohnermeldeamt (Bürgerbüro):</strong></p>
                <ul className="list-disc pl-10 space-y-1 mb-4 text-sm">
                    <li>Innerhalb von zwei Wochen nach Umzug müssen Sie sich am neuen Wohnort anmelden bzw. am alten abmelden (falls Umzug ins Ausland).</li>
                    <li>Benötigt: Personalausweis/Reisepass, Wohnungsgeberbestätigung.</li>
                    <li>Die **Rümpelschmiede** empfiehlt, Termine online zu buchen, um Wartezeiten zu vermeiden.</li>
                </ul>
                <p className="mb-2"><strong className="text-gray-700">Post:</strong></p>
                <ul className="list-disc pl-10 space-y-1 mb-4 text-sm">
                    <li>Richten Sie einen Nachsendeauftrag ein (mind. 6 Monate, besser 12).</li>
                    <li>Informieren Sie wichtige Kontakte über Ihre neue Adresse: Banken, Versicherungen, Arbeitgeber, Ärzte, Freunde, Familie, Abonnements (Zeitungen, Streamingdienste), Online-Shops.</li>
                </ul>

                <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Verträge kündigen oder ummelden</h4>
                <p className="mb-4">Denken Sie an: Strom, Gas, Wasser (oft über Vermieter), Telefon/Internet, Mobilfunk, Rundfunkbeitrag (GEZ), Versicherungen (Hausrat, Haftpflicht anpassen), Abonnements, Mitgliedschaften (Vereine, Fitnessstudio).</p>
                
                <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Finanzielle und steuerliche Aspekte</h4>
                <p className="mb-4">Informieren Sie Finanzamt, Banken. Entrümpelungskosten können ggf. als haushaltsnahe Dienstleistungen oder außergewöhnliche Belastungen steuerlich geltend gemacht werden – fragen Sie Ihren Steuerberater! Die **Rümpelschmiede** stellt Ihnen eine ordnungsgemäße Rechnung aus.</p>

                <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5. Der emotionale Neuanfang</h4>
                <p className="mb-4">Eine Entrümpelung ist oft auch ein emotionaler Prozess. Nehmen Sie sich Zeit, das Erlebte zu verarbeiten und den neuen Freiraum zu genießen. Gestalten Sie Ihr neues Zuhause oder den gewonnenen Platz nach Ihren Wünschen.</p>
                
                <div className="bg-blue-50 p-4 rounded-lg mt-6">
                    <p className="font-semibold text-[#2C4F5E]">Die **Rümpelschmiede** wünscht Ihnen alles Gute für Ihren Neuanfang! Bei Fragen stehen wir Ihnen auch nach der Räumung zur Verfügung.</p>
                </div>
            </div>
        );

      case 'ki-entruempelung-zukunft':
        return (
            <div className="prose max-w-none text-gray-700 leading-relaxed">
                <h3 className="text-2xl font-bold text-[#2C4F5E] mt-8 mb-4">Einleitung: Künstliche Intelligenz und die Entrümpelungsbranche – ein Blick in die Zukunft mit der Rümpelschmiede</h3>
                <p className="mb-4">Künstliche Intelligenz (KI) revolutioniert bereits viele Branchen. Doch welche Rolle kann sie im Bereich Entrümpelung, Haushaltsauflösung und Nachlassverwaltung spielen? Die **Rümpelschmiede** wirft einen Blick auf aktuelle Entwicklungen und zukünftige Möglichkeiten, wie KI uns und Ihnen die Arbeit erleichtern könnte.</p>
                <p className="mb-4">Noch sind viele Anwendungen Zukunftsmusik, aber das Potenzial ist enorm – von der ersten Einschätzung bis zur optimalen Verwertung von Gegenständen.</p>

                <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. KI-gestützte Inventarisierung und Kubikmeter-Schätzung</h4>
                <p className="mb-4">Stellen Sie sich vor, Sie machen Fotos von den zu entrümpelnden Räumen, und eine KI analysiert die Bilder, erkennt Möbelstücke, schätzt deren Volumen und erstellt eine erste Inventarliste. Dies könnte die Erstbesichtigung ergänzen oder für eine erste grobe Kostenschätzung dienen. Die **Rümpelschmiede** beobachtet solche Technologien aufmerksam.</p>

                <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Automatische Wertermittlung durch KI</h4>
                <p className="mb-4">KI-Systeme könnten trainiert werden, den potenziellen Wert von Gegenständen (Antiquitäten, Designermöbel, Elektronik) anhand von Bilderkennung und dem Abgleich mit aktuellen Marktdaten auf Verkaufsplattformen zu schätzen. Das würde den Prozess der Wertanrechnung beschleunigen und transparenter machen.</p>

                <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Optimierung von Logistik und Routenplanung</h4>
                <p className="mb-4">Für Entrümpelungsfirmen wie die **Rümpelschmiede** könnte KI helfen, die Routen der Transportfahrzeuge zu optimieren, die Auslastung zu verbessern und somit Kosten und Umweltbelastung zu reduzieren.</p>

                <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Digitale Nachlassverwaltung mit KI-Unterstützung</h4>
                <p className="mb-4">Gerade im digitalen Zeitalter wird der "digitale Nachlass" immer wichtiger. KI könnte Erben helfen, Online-Konten, Abonnements oder digitale Vermögenswerte des Verstorbenen zu identifizieren und zu verwalten.</p>
                
                <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Herausforderungen und ethische Aspekte</h4>
                <p className="mb-4">Trotz aller Chancen dürfen Datenschutz, die Notwendigkeit menschlicher Empathie (besonders bei sensiblen Fällen) und die Grenzen der KI nicht außer Acht gelassen werden. Die **Rümpelschmiede** ist überzeugt: Technologie kann unterstützen, aber der Mensch mit seiner Erfahrung und seinem Einfühlungsvermögen bleibt im Mittelpunkt.</p>

                <div className="bg-blue-50 p-4 rounded-lg mt-6">
                    <p className="font-semibold text-[#2C4F5E]">Die **Rümpelschmiede** bleibt am Puls der Zeit und prüft innovative Technologien, um Ihnen den bestmöglichen Service zu bieten – heute und in Zukunft.</p>
                </div>
            </div>
        );

      default:
        return (
            <div className="p-6 text-center">
                <p className="text-xl text-gray-500">💡 Dieser Artikel ist in Vorbereitung.</p>
                <p className="mt-2 text-gray-600">Wir arbeiten mit Hochdruck daran, Ihnen auch zu diesem Thema bald wertvolle Informationen von der Rümpelschmiede zur Verfügung zu stellen. Schauen Sie bald wieder vorbei!</p>
            </div>
        );
    }
  };

  return (
    <div className="bg-gray-50 text-gray-700 overflow-x-hidden">
      <style jsx>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
        
        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }
      `}</style>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#C73E3A] to-[#2C4F5E] transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#1a2b36] via-[#2C4F5E] to-[#1E3A47]">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-6 py-2 mb-6 text-sm font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            WISSENSPORTAL DER RÜMPELSCHMIEDE
          </span>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight">
            <span className="block">Ratgeber</span>
            <span className="block text-[#C73E3A]">Entrümpelung</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
            Ihr Wissensportal für einen stressfreien Neuanfang: Wertvolle Tipps, detaillierte Anleitungen 
            und empathische Unterstützung rund um Haushaltsauflösung, Entrümpelung und Nachlass.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#C73E3A] mb-1">{allArticles.length}</div>
              <div className="text-white/70 text-sm">Fachartikel</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#C73E3A] mb-1">{articleCategories.length - 1}</div>
              <div className="text-white/70 text-sm">Kategorien</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#C73E3A] mb-1">15+</div>
              <div className="text-white/70 text-sm">Jahre Erfahrung</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter und Suchleiste - Modern Sticky */}
      <section className="py-4 sticky top-0 bg-white/95 backdrop-blur-md z-40 shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 flex-1">
              {articleCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setExpandedArticle(null);
                  }}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#C73E3A] text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                  }`}
                >
                  <span className="mr-2">{cat.icon}</span>
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <input 
                type="text"
                placeholder="Artikel suchen..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setExpandedArticle(null);
                }}
                className="w-full lg:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent transition-all"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section id="articles-section" className="animate-section py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <article 
                  key={article.id} 
                  id={article.slug}
                  className={`fade-in-up delay-${(index % 3) + 1}00 ${
                    visibleSections.has('articles-section') ? 'visible' : ''
                  } bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all group cursor-pointer overflow-hidden`}
                  onClick={() => setExpandedArticle(expandedArticle === article.id ? null : article.id)}
                >
                  {/* Article Preview */}
                  <div className="relative h-48 bg-gradient-to-br from-[#2C4F5E] to-[#C73E3A] overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="h-full w-full" style={{
                        backgroundImage: `linear-gradient(45deg, transparent 25%, rgba(255,255,255,.1) 25%, rgba(255,255,255,.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,.1) 75%, rgba(255,255,255,.1))`,
                        backgroundSize: '30px 30px'
                      }}></div>
                    </div>
                    <div className="relative h-full flex items-center justify-center">
                      <span className="text-6xl filter drop-shadow-lg">{article.icon}</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                        {article.readingTime}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-semibold text-[#C73E3A] mb-2 uppercase tracking-wider">
                      {article.category}
                    </p>
                    <h3 className="text-xl font-bold text-[#2C4F5E] mb-3 group-hover:text-[#C73E3A] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#C73E3A] font-semibold group-hover:underline">
                        Artikel lesen →
                      </span>
                      <span className={`transform transition-transform ${
                        expandedArticle === article.id ? 'rotate-180' : ''
                      }`}>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl text-gray-300 mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">Keine Artikel gefunden</h3>
              <p className="text-gray-500 mb-6">
                Versuchen Sie es mit anderen Suchbegriffen oder wählen Sie eine andere Kategorie.
              </p>
              <button 
                onClick={() => { 
                  setSearchTerm(''); 
                  setSelectedCategory('all'); 
                }}
                className="bg-[#C73E3A] hover:bg-[#B02E2A] text-white font-semibold px-6 py-3 rounded-lg transition-all transform hover:scale-105"
              >
                Filter zurücksetzen
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Expanded Article Modal/Overlay */}
      {expandedArticle && (
        <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
          <div className="min-h-screen py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl animate-fadeIn">
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setExpandedArticle(null)}
                  className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Article Header */}
                <div className="relative h-64 bg-gradient-to-br from-[#2C4F5E] to-[#C73E3A] rounded-t-3xl overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full" style={{
                      backgroundImage: `linear-gradient(45deg, transparent 25%, rgba(255,255,255,.1) 25%, rgba(255,255,255,.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,.1) 75%, rgba(255,255,255,.1))`,
                      backgroundSize: '30px 30px'
                    }}></div>
                  </div>
                  <div className="relative h-full flex items-center justify-center text-white text-center p-8">
                    <div>
                      <span className="text-7xl mb-4 block filter drop-shadow-2xl">
                        {allArticles.find(a => a.id === expandedArticle)?.icon}
                      </span>
                      <h2 className="text-3xl font-bold">
                        {allArticles.find(a => a.id === expandedArticle)?.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-8 md:p-12">
                  <div className="mb-6 flex items-center gap-4 text-sm text-gray-600">
                    <span className="px-3 py-1 bg-[#C73E3A]/10 text-[#C73E3A] rounded-full font-medium">
                      {allArticles.find(a => a.id === expandedArticle)?.category}
                    </span>
                    <span>•</span>
                    <span>{allArticles.find(a => a.id === expandedArticle)?.readingTime}</span>
                  </div>

                  {renderArticleContent(expandedArticle)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 mb-6 text-sm font-semibold text-[#2C4F5E] bg-[#2C4F5E]/10 rounded-full">
              HÄUFIGE FRAGEN
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2C4F5E] mb-6">
              Weitere <span className="text-[#C73E3A]">Wissensbeiträge</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Entdecken Sie weitere hilfreiche Artikel und Antworten auf häufig gestellte Fragen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Was kostet eine Entrümpelung wirklich?', 
                category: 'Kosten & Finanzen',
                icon: '💰'
              },
              { 
                title: 'Wie lange dauert eine Haushaltsauflösung?', 
                category: 'Allgemeine Entrümpelung',
                icon: '⏱️'
              },
              { 
                title: 'Entsorgung von Sondermüll richtig gemacht', 
                category: 'Rechtliches & Bürokratie',
                icon: '⚠️'
              },
              { 
                title: 'Ummeldung nach dem Umzug', 
                category: 'Nach der Entrümpelung',
                icon: '📋'
              },
              { 
                title: 'KI in der Nachlassverwaltung', 
                category: 'Moderne Themen',
                icon: '🤖'
              },
              { 
                title: 'Umgang mit persönlichen Erinnerungen', 
                category: 'Tipps & Tricks',
                icon: '📸'
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="text-4xl mb-4">{faq.icon}</div>
                <p className="text-xs font-medium text-[#C73E3A] mb-2">{faq.category}</p>
                <h3 className="text-xl font-bold text-[#2C4F5E] mb-3 group-hover:text-[#C73E3A] transition-colors">
                  {faq.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  Lesen Sie unseren ausführlichen Beitrag zu diesem Thema →
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#C73E3A] to-[#B02E2A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Sie benötigen professionelle Unterstützung?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Wir stehen Ihnen mit Erfahrung, Empathie und fairen Preisen zur Seite. 
            Kontaktieren Sie uns für eine kostenlose und unverbindliche Beratung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+4952199999900"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#C73E3A] rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Jetzt anrufen: 0521 / 999 999 00
            </a>
            <a
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-[#C73E3A] transition-all transform hover:scale-105"
            >
              Kostenloses Angebot anfordern
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}