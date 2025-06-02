'use client'
import { useState, useEffect } from 'react';

interface B2BService {
    id: string;
    title: string;
    icon: string;
    image: string;
    excerpt: string;
    details: string[];
    additionalInfo?: string;
}

const b2bServicesData: B2BService[] = [
    {
        id: 'gewerbeaufloesung',
        title: 'Gewerbe- & Betriebsauflösungen',
        icon: '🏢', // Icons bleiben als Emojis
        image: "/images/Gewerbe.jpg", // Dein tatsächliches Bild
        excerpt: 'Komplette Auflösung von Bürokomplexen, Produktionsstätten, Praxen und Einzelhandelsflächen. Wir managen den gesamten Prozess von der Planung bis zur besenreinen Übergabe.',
        details: [
            "Demontage von Maschinen, Anlagen und Inventar",
            "Fachgerechte Entsorgung aller Materialien inkl. Sondermüll",
            "Rückbau von Einbauten und Vorbereitung für Nachnutzung",
            "Enge Abstimmung mit Insolvenzverwaltern und Eigentümern",
            "Termingerechte Ausführung zur Minimierung von Ausfallzeiten"
        ],
        additionalInfo: "Unsere Expertise bei Betriebsauflösungen umfasst die komplette Abwicklung von der ersten Bestandsaufnahme bis zur finalen Übergabe. Mit über 15 Jahren Erfahrung in der Branche wissen wir, worauf es ankommt: Diskretion, Termintreue und absolute Zuverlässigkeit. Besonders bei Insolvenzfällen arbeiten wir eng mit Verwaltern zusammen und garantieren eine rechtssichere Dokumentation aller Vorgänge."
    },
    {
        id: 'bueroentruempelung',
        title: 'Büroentrümpelung & Aktenvernichtung',
        icon: '💼', // Ersetze mit: <img src="/icons/buero-icon.png" className="w-12 h-12" />
        image: '/images/b2b-buero.jpg',
        excerpt: 'Effiziente Räumung von Büroräumen aller Größen, inklusive datenschutzkonformer Akten- und Datenträgervernichtung nach DIN 66399.',
        details: [
            "Entsorgung von Büromöbeln, Computerschrott und Bürotechnik",
            "DSGVO-konforme Vernichtung von Akten und Datenträgern mit Zertifikat",
            "Teilräumungen bei Umstrukturierungen oder Umzügen",
            "Besenreine Übergabe, auf Wunsch mit Grundreinigung",
            "Flexible Terminplanung, auch außerhalb Ihrer Geschäftszeiten"
        ],
        additionalInfo: "Datenschutz hat bei uns oberste Priorität. Alle sensiblen Unterlagen werden nach DIN 66399 vernichtet - Sie erhalten selbstverständlich ein rechtssicheres Vernichtungszertifikat. Unsere Mitarbeiter sind zur absoluten Verschwiegenheit verpflichtet und speziell für den Umgang mit vertraulichen Dokumenten geschult. Auf Wunsch führen wir die Räumung auch am Wochenende oder nachts durch."
    },
    {
        id: 'lagerraeumung',
        title: 'Lager- & Hallenräumung',
        icon: '📦', // Ersetze mit: <img src="/icons/lager-icon.png" className="w-12 h-12" />
        image: '/images/b2b-lager.jpg',
        excerpt: 'Professionelle Räumung von Lagerhallen, Hochregallagern und Produktionsbereichen, inklusive Sortierung und Entsorgung von Warenbeständen.',
        details: [
            "Räumung von Überbeständen, Altwaren und defekten Gütern",
            "Demontage von Regalsystemen und Lagereinrichtungen",
            "Sortierung und Trennung verschiedener Materialfraktionen",
            "Umweltgerechte Entsorgung von Verpackungsmaterialien",
            "Schwerlasttransporte und Containerstellung"
        ],
        additionalInfo: "Von kleinen Lagerräumen bis zu großen Logistikhallen - wir haben die Kapazitäten und das Know-how für Projekte jeder Größenordnung. Unser Fuhrpark umfasst LKWs bis 40 Tonnen, und wir arbeiten mit zertifizierten Entsorgungsfachbetrieben zusammen. Besonders wichtig: Wir trennen verwertbare Materialien und führen sie dem Recycling zu - das schont Umwelt und Budget."
    },
    {
        id: 'entkernung',
        title: 'Entkernung & Sanierungsvorbereitung',
        icon: '🔨', // Ersetze mit: <img src="/icons/entkernung-icon.png" className="w-12 h-12" />
        image: '/images/b2b-entkernung.jpg',
        excerpt: 'Fachgerechte Entkernungsarbeiten zur Vorbereitung von Renovierungs-, Sanierungs- oder Umbaumaßnahmen in Gewerbeimmobilien.',
        details: [
            "Entfernung von nichttragenden Wänden und Bodenbelägen",
            "Rückbau von Sanitäranlagen und Heizkörpern",
            "Schadstofferkennung und -beseitigung",
            "Saubere Trennung des Bauschutts nach Fraktionen",
            "Vorbereitung für Handwerker und Neuausbau"
        ],
        additionalInfo: "Bei Entkernungen ist Präzision gefragt. Unsere Teams sind geschult im Umgang mit verschiedenen Baumaterialien und achten penibel auf die Trennung nach Fraktionen. Falls Schadstoffe wie Asbest entdeckt werden, arbeiten wir mit spezialisierten Partnerfirmen zusammen. Das Ergebnis: Ein perfekt vorbereiteter Rohbau für Ihre Sanierung."
    },
    {
        id: 'messebau',
        title: 'Messebau-Entsorgung & Event-Cleaning',
        icon: '🎪', // Ersetze mit: <img src="/icons/messe-icon.png" className="w-12 h-12" />
        image: '/images/b2b-messe.jpg',
        excerpt: 'Schnelle und zuverlässige Entsorgung von Messeständen, Event-Equipment und temporären Installationen nach Veranstaltungen.',
        details: [
            "Abbau und Entsorgung von Messeständen",
            "Räumung von Event-Locations",
            "Trennung von wiederverwendbaren Materialien",
            "Express-Service für zeitkritische Projekte",
            "Bundesweite Einsätze möglich"
        ],
        additionalInfo: "Zeit ist Geld - besonders nach Messen und Events. Unser Express-Service garantiert die pünktliche Räumung, damit keine Standmieten anfallen. Wir trennen wiederverwendbare Materialien und lagern diese auf Wunsch ein. Mit unserem bundesweiten Netzwerk sind wir auf allen großen Messegeländen präsent."
    },
    {
        id: 'gastronomie',
        title: 'Gastronomie & Hotelauflösungen',
        icon: '🍽️', // Ersetze mit: <img src="/icons/gastro-icon.png" className="w-12 h-12" />
        image: '/images/b2b-gastro.jpg',
        excerpt: 'Komplettauflösung von Restaurants, Hotels und Großküchen inklusive professioneller Küchengeräte und Inventar.',
        details: [
            "Demontage von Großküchengeräten",
            "Entsorgung von Kühlgeräten nach Umweltvorschriften",
            "Räumung von Gästebereichen und Lagerräumen",
            "Verwertung von Edelstahl und Metallen",
            "Besenreine Übergabe für Nachmieter"
        ],
        additionalInfo: "Die Auflösung von Gastronomiebetrieben erfordert Spezialwissen - von der fachgerechten Entsorgung von Kühlmitteln bis zur Demontage von Lüftungsanlagen. Wir arbeiten mit Fachbetrieben für Kältetechnik zusammen und garantieren die umweltgerechte Entsorgung. Hochwertige Geräte vermitteln wir auf Wunsch an Abnehmer weiter."
    }
];

// Anleitung für eigene Icons/Bilder
const IconGuide = () => (
    <div className="hidden">
        {/* 
        ANLEITUNG FÜR EIGENE ICONS:
        
        1. Für Icon-Fonts (z.B. Font Awesome):
           Installiere: npm install react-icons
           Import: import { FaBuilding, FaBriefcase } from 'react-icons/fa'
           Verwendung: <FaBuilding className="w-12 h-12" />
        
        2. Für eigene SVG-Icons:
           Speichere SVGs in: public/icons/
           Verwendung: <img src="/icons/mein-icon.svg" className="w-12 h-12" alt="Icon" />
        
        3. Für PNG/JPG Icons:
           Speichere in: public/icons/
           Verwendung: <img src="/icons/mein-icon.png" className="w-12 h-12" alt="Icon" />
           
        4. Inline SVG:
           <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
             <path d="..." />
           </svg>
        */}
    </div>
);

export default function B2BPage() {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        businessType: '',
        serviceRequired: '',
        projectDescription: '',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('B2B Formulardaten:', formData);
        setFormSubmitted(true);
    };

    const b2bBenefits = [
        { 
            icon: '⏱️', // Ersetze mit: <img src="/icons/zeit-icon.png" className="w-8 h-8" />
            title: 'Termintreue & Zuverlässigkeit', 
            text: 'Wir halten vereinbarte Termine strikt ein und garantieren eine verlässliche Projektabwicklung. Unser Projektmanagement-System stellt sicher, dass alle Arbeitsschritte optimal koordiniert werden. Bei uns gibt es keine bösen Überraschungen - wir kommunizieren transparent und halten Sie stets auf dem Laufenden.' 
        },
        { 
            icon: '🤫', 
            title: 'Diskrete & schnelle Ausführung', 
            text: 'Bei sensiblen Räumungen agieren wir diskret und zügig. Unsere Mitarbeiter sind zur Verschwiegenheit verpflichtet und tragen neutrale Arbeitskleidung. Auf Wunsch arbeiten wir auch außerhalb der regulären Geschäftszeiten, um Ihren Betrieb nicht zu stören.' 
        },
        { 
            icon: '♻️', 
            title: 'Zertifizierte Entsorgung', 
            text: 'Als zertifizierter Entsorgungsfachbetrieb garantieren wir die ordnungsgemäße Entsorgung aller Materialien. Sie erhalten detaillierte Entsorgungsnachweise für Ihre Unterlagen. Verwertbare Materialien führen wir dem Recycling zu - gut für die Umwelt und Ihr Budget.' 
        },
        { 
            icon: '🤝', 
            title: 'Ein fester Ansprechpartner', 
            text: 'Für Ihr Projekt steht Ihnen ein erfahrener Projektleiter zur Seite, der alle Arbeiten koordiniert und Ihre Fragen beantwortet. Keine Hotline, keine wechselnden Ansprechpartner - bei uns haben Sie einen direkten Draht zu Ihrem persönlichen Betreuer.' 
        },
        { 
            icon: '💡', 
            title: 'Maßgeschneiderte Lösungen', 
            text: 'Jedes Unternehmen hat individuelle Anforderungen. Wir entwickeln passgenaue Konzepte, die optimal auf Ihre Bedürfnisse zugeschnitten sind. Von der Expressräumung bis zum mehrstufigen Projekt - wir finden die beste Lösung für Sie.' 
        },
        { 
            icon: '🛡️', 
            title: 'Versicherter Fachbetrieb', 
            text: 'Als voll versicherter Fachbetrieb bieten wir Ihnen maximale Sicherheit. Unsere Betriebshaftpflicht deckt Schäden bis 5 Millionen Euro ab. Alle Mitarbeiter sind unfallversichert und professionell geschult - für einen reibungslosen Ablauf.' 
        },
    ];

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
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a2b36] via-[#2C4F5E] to-[#1E3A47]">
                <div className="absolute inset-0 opacity-5">
                    <div className="h-full w-full" style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-6 py-2 mb-6 text-sm font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                        ENTERPRISE SOLUTIONS SEIT 2017
                    </span>
                    
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight">
                        <span className="block">Professionelle</span>
                        <span className="block text-[#C73E3A]">Entrümpelungslösungen</span>
                        <span className="block">für Ihr Unternehmen</span>
                    </h1>
                    
                    <p className="text-xl sm:text-2xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
                        Die Rümpelschmiede ist Ihr zuverlässiger Partner für gewerbliche Entrümpelungen, 
                        Betriebsauflösungen und Entsorgungsdienstleistungen. Mit über 15 Jahren Erfahrung 
                        und einem Team von 50+ Spezialisten meistern wir Projekte jeder Größenordnung - 
                        diskret, termingerecht und zum Festpreis.
                    </p>

                    <p className="text-lg text-white/60 max-w-3xl mx-auto mb-12">
                        Von der kompletten Büroauflösung über die fachgerechte Aktenvernichtung bis zur 
                        Hallenräumung - wir bieten Ihnen Full-Service aus einer Hand. Vertrauen Sie auf 
                        unsere Expertise und lassen Sie uns die Arbeit machen, während Sie sich auf Ihr 
                        Kerngeschäft konzentrieren.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="#b2b-kontakt"
                            className="group inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-[#C73E3A] rounded-xl shadow-2xl transform transition-all duration-300 hover:bg-[#B02E2A] hover:scale-105"
                        >
                            Kostenloses Beratungsgespräch
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                        
                        <a
                            href="tel:+4952199999900"
                            className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white border-2 border-white/30 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            0521 / 999 999 00
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
                        {[
                            { value: '15+', label: 'Jahre Erfahrung', desc: 'seit 2009' },
                            { value: '5.000+', label: 'Projekte', desc: 'erfolgreich abgeschlossen' },
                            { value: '98%', label: 'Zufriedenheit', desc: 'Weiterempfehlung' },
                            { value: '24h', label: 'Reaktionszeit', desc: 'Notfall-Service' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold text-[#C73E3A] mb-1">{stat.value}</div>
                                <div className="text-white/90 font-semibold">{stat.label}</div>
                                <div className="text-white/60 text-sm">{stat.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section - Erweitert */}
            <section id="services-section" className="animate-section py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center mb-16 fade-in-up ${visibleSections.has('services-section') ? 'visible' : ''}`}>
                        <span className="inline-block px-6 py-2 mb-6 text-sm font-semibold text-[#2C4F5E] bg-[#2C4F5E]/10 rounded-full">
                            UNSER LEISTUNGSPORTFOLIO
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-bold text-[#2C4F5E] mb-6">
                            Spezialisierte B2B-Dienstleistungen
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            Von der kleinen Büroräumung bis zur kompletten Werksauflösung - wir bieten 
                            maßgeschneiderte Lösungen für jede Branche und Unternehmensgröße. Unsere 
                            erfahrenen Teams arbeiten schnell, gründlich und absolut zuverlässig.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {b2bServicesData.map((service, index) => (
                            <div 
                                key={service.id}
                                className={`fade-in-up ${visibleSections.has('services-section') ? 'visible' : ''} bg-gray-50 rounded-3xl overflow-hidden shadow-xl`}
                            >
                                <div className="grid lg:grid-cols-2 gap-0">
                                    {/* Bild */}
                                    <div className={`relative h-[400px] bg-gray-200 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#2C4F5E]/80 to-[#C73E3A]/80 flex items-center justify-center">
                                            <div className="text-center text-white p-8 w-full h-full">
                                                <img src={service.image} alt={service.title} className="w-full h-full object-cover rounded-2xl shadow-lg" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-10 lg:p-12">
                                        <h3 className="text-3xl font-bold text-[#2C4F5E] mb-4">{service.title}</h3>
                                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.excerpt}</p>
                                        
                                        {service.additionalInfo && (
                                            <p className="text-gray-600 mb-6 leading-relaxed">{service.additionalInfo}</p>
                                        )}

                                        <ul className="space-y-3 mb-8">
                                            {service.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <svg className="w-6 h-6 text-[#C73E3A] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-gray-700">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <a 
                                                href="#b2b-kontakt" 
                                                className="inline-flex items-center justify-center px-6 py-3 bg-[#C73E3A] text-white rounded-lg font-semibold hover:bg-[#B02E2A] transition-all"
                                            >
                                                Unverbindliche Anfrage
                                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </a>
                                            <a 
                                                href="tel:+4952199999900" 
                                                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#2C4F5E] text-[#2C4F5E] rounded-lg font-semibold hover:bg-[#2C4F5E] hover:text-white transition-all"
                                            >
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                Sofort anrufen
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section - Erweitert */}
            <section id="benefits-section" className="animate-section py-24 bg-[#2C4F5E] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center mb-16 fade-in-up ${visibleSections.has('benefits-section') ? 'visible' : ''}`}>
                        <span className="inline-block px-6 py-2 mb-6 text-sm font-semibold text-white bg-white/20 rounded-full">
                            IHRE VORTEILE
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            Warum Unternehmen der <span className="text-[#C73E3A]">Rümpelschmiede</span> vertrauen
                        </h2>
                        <p className="text-xl text-white/80 max-w-4xl mx-auto">
                            Wir sind mehr als nur ein Entrümpelungsunternehmen - wir sind Ihr strategischer 
                            Partner für effiziente Räumungslösungen. Diese Vorteile machen den Unterschied:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {b2bBenefits.map((benefit, index) => (
                            <div 
                                key={index} 
                                className={`fade-in-up delay-${(index % 2) + 1}00 ${visibleSections.has('benefits-section') ? 'visible' : ''} bg-white/10 backdrop-blur-sm rounded-2xl p-8`}
                            >
                                <div className="flex items-start space-x-6">
                                    <div className="flex-shrink-0 w-16 h-16 bg-[#C73E3A] rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                                        <p className="text-white/80 leading-relaxed">{benefit.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Zusätzliche USPs */}
                    <div className="mt-16 bg-white/5 rounded-3xl p-10">
                        <h3 className="text-2xl font-bold text-center mb-8">Weitere Gründe für die Rümpelschmiede</h3>
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-4xl mb-3">🏆</div>
                                <h4 className="font-semibold mb-2">Ausgezeichneter Service</h4>
                                <p className="text-white/70 text-sm">Mehrfach prämiert für Qualität und Kundenzufriedenheit</p>
                            </div>
                            <div>
                                <div className="text-4xl mb-3">💶</div>
                                <h4 className="font-semibold mb-2">Transparente Preise</h4>
                                <p className="text-white/70 text-sm">Festpreisgarantie ohne versteckte Kosten</p>
                            </div>
                            <div>
                                <div className="text-4xl mb-3">🌍</div>
                                <h4 className="font-semibold mb-2">Deutschlandweit</h4>
                                <p className="text-white/70 text-sm">Flächendeckendes Netzwerk für bundesweite Projekte</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section id="process-section" className="animate-section py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center mb-16 fade-in-up ${visibleSections.has('process-section') ? 'visible' : ''}`}>
                        <span className="inline-block px-6 py-2 mb-6 text-sm font-semibold text-[#C73E3A] bg-[#C73E3A]/10 rounded-full">
                            SO ARBEITEN WIR
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-bold text-[#2C4F5E] mb-6">
                            Ihr Weg zur <span className="text-[#C73E3A]">stressfreien Räumung</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            Unser bewährter 4-Schritte-Prozess garantiert eine reibungslose Abwicklung 
                            von der ersten Kontaktaufnahme bis zur besenreinen Übergabe. So läuft Ihr 
                            Projekt ab:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { 
                                num: '01', 
                                title: 'Erstkontakt & Analyse', 
                                text: 'Sie kontaktieren uns telefonisch oder per E-Mail. Wir besprechen Ihre Anforderungen und vereinbaren einen kostenlosen Besichtigungstermin.',
                                icon: '📞',
                                details: 'Innerhalb von 24 Stunden erhalten Sie eine Rückmeldung von Ihrem persönlichen Projektleiter.'
                            },
                            { 
                                num: '02', 
                                title: 'Besichtigung & Angebot', 
                                text: 'Vor Ort machen wir uns ein genaues Bild vom Umfang der Arbeiten. Sie erhalten ein detailliertes Festpreisangebot.',
                                icon: '📝',
                                details: 'Keine Überraschungen: Unser Angebot ist verbindlich und enthält alle Leistungen transparent aufgeschlüsselt.'
                            },
                            { 
                                num: '03', 
                                title: 'Professionelle Durchführung', 
                                text: 'Zum vereinbarten Termin rückt unser Team an und erledigt alle Arbeiten zügig und gründlich.',
                                icon: '🚚',
                                details: 'Sie können sich zurücklehnen - wir kümmern uns um alles, von der Demontage bis zur Entsorgung.'
                            },
                            { 
                                num: '04', 
                                title: 'Übergabe & Dokumentation', 
                                text: 'Nach Abschluss der Arbeiten übergeben wir Ihnen die Räume besenrein. Sie erhalten alle relevanten Nachweise.',
                                icon: '🧾',
                                details: 'Entsorgungsnachweise, Fotodokumentation und Abschlussbericht - alles für Ihre Unterlagen.'
                            }
                        ].map((step, index) => (
                            <div 
                                key={index} 
                                className={`fade-in-up delay-${index + 1}00 ${visibleSections.has('process-section') ? 'visible' : ''} bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow`}
                            >
                                <div className="relative inline-block mb-6">
                                    <span className="text-7xl font-bold text-gray-100">{step.num}</span>
                                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl">
                                        {step.icon.includes('.jpg') || step.icon.includes('.png') ? (
                                            <img src={step.icon} alt="" className="w-12 h-12 object-cover rounded-lg" />
                                        ) : (
                                            step.icon
                                        )}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-[#2C4F5E] mb-3">{step.title}</h3>
                                <p className="text-gray-600 mb-4">{step.text}</p>
                                <p className="text-sm text-gray-500 italic">{step.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials-section" className="animate-section py-24 bg-gradient-to-br from-[#2C4F5E] to-[#1E3A47] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center mb-16 fade-in-up ${visibleSections.has('testimonials-section') ? 'visible' : ''}`}>
                        <span className="inline-block px-6 py-2 mb-6 text-sm font-semibold text-white bg-white/20 rounded-full">
                            REFERENZEN
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            Das sagen unsere <span className="text-[#C73E3A]">Geschäftskunden</span>
                        </h2>
                        <p className="text-xl text-white/80 max-w-4xl mx-auto">
                            Über 5.000 Unternehmen haben bereits auf unsere Dienstleistungen vertraut. 
                            Lesen Sie, was unsere Kunden über ihre Erfahrungen mit der Rümpelschmiede berichten:
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            { 
                                company: 'Immobilienverwaltung Meier KG', 
                                person: 'Thomas Meier, Geschäftsführer',
                                project: 'Auflösung von 12 Mieteinheiten nach Eigentümerwechsel', 
                                quote: 'Die Rümpelschmiede hat innerhalb von nur 3 Tagen alle Wohnungen geräumt und besenrein übergeben. Die Koordination war perfekt, die Mitarbeiter professionell und die Preise fair. Absolute Empfehlung!',
                                rating: 5
                            },
                            { 
                                company: 'TechSolutions GmbH', 
                                person: 'Sarah Schmidt, Head of Operations',
                                project: 'Büroumzug mit Aktenvernichtung (500qm)', 
                                quote: 'Besonders beeindruckt hat uns die diskrete Abwicklung der Aktenvernichtung. Alle Dokumente wurden DSGVO-konform vernichtet und wir erhielten ein rechtssicheres Zertifikat. Der Umzug lief reibungslos.',
                                rating: 5
                            },
                            { 
                                company: 'Logistik Nordwest AG', 
                                person: 'Michael Bauer, Facility Manager',
                                project: 'Räumung einer 2.000qm Lagerhalle', 
                                quote: 'Trotz des enormen Umfangs mit alten Regalsystemen und tonnenweise Altbeständen wurde alles termingerecht erledigt. Die Trennung der Materialien war vorbildlich, die Entsorgung transparent dokumentiert.',
                                rating: 5
                            }
                        ].map((testimonial, index) => (
                            <div 
                                key={index} 
                                className={`fade-in-up delay-${index + 1}00 ${visibleSections.has('testimonials-section') ? 'visible' : ''} bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/15 transition-all`}
                            >
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-[#C73E3A]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                <p className="text-white/90 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                                
                                <div className="border-t border-white/20 pt-4">
                                    <p className="font-bold text-lg">{testimonial.company}</p>
                                    <p className="text-white/80">{testimonial.person}</p>
                                    <p className="text-sm text-white/60 mt-1">Projekt: {testimonial.project}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section id="b2b-kontakt" className="animate-section py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center mb-12 fade-in-up ${visibleSections.has('b2b-kontakt') ? 'visible' : ''}`}>
                        <span className="inline-block px-6 py-2 mb-6 text-sm font-semibold text-[#C73E3A] bg-[#C73E3A]/10 rounded-full">
                            JETZT ANFRAGEN
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-bold text-[#2C4F5E] mb-6">
                            Starten Sie Ihr Projekt <span className="text-[#C73E3A]">noch heute</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Nutzen Sie unser Kontaktformular für eine schnelle Anfrage oder rufen Sie 
                            uns direkt an. Wir melden uns innerhalb von 24 Stunden bei Ihnen und 
                            besprechen Ihr Projekt im Detail.
                        </p>
                    </div>

                    {formSubmitted ? (
                        <div className="bg-green-50 border-2 border-green-200 p-12 rounded-2xl text-center">
                            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Vielen Dank für Ihre Anfrage!</h3>
                            <p className="text-gray-600">Ein B2B-Berater wird sich innerhalb von 24 Stunden bei Ihnen melden.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Firmenname*
                                    </label>
                                    <input 
                                        type="text" 
                                        name="companyName" 
                                        id="companyName" 
                                        value={formData.companyName} 
                                        onChange={handleChange} 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent transition-all" 
                                        required 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">
                                        Ansprechpartner*
                                    </label>
                                    <input 
                                        type="text" 
                                        name="contactPerson" 
                                        id="contactPerson" 
                                        value={formData.contactPerson} 
                                        onChange={handleChange} 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent transition-all" 
                                        required 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        E-Mail-Adresse*
                                    </label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent transition-all" 
                                        required 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                        Telefonnummer*
                                    </label>
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        id="phone" 
                                        value={formData.phone} 
                                        onChange={handleChange} 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent transition-all" 
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="serviceRequired" className="block text-sm font-medium text-gray-700 mb-1">
                                    Benötigte Dienstleistung*
                                </label>
                                <select 
                                    name="serviceRequired" 
                                    id="serviceRequired" 
                                    value={formData.serviceRequired} 
                                    onChange={handleChange} 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent transition-all" 
                                    required
                                >
                                    <option value="">Bitte auswählen...</option>
                                    {b2bServicesData.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                                    <option value="Allgemeine Beratung">Allgemeine Beratung / Sonstiges</option>
                                </select>
                            </div>
                            
                            <div>
                                <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-1">
                                    Projektbeschreibung*
                                </label>
                                <textarea 
                                    name="projectDescription" 
                                    id="projectDescription" 
                                    value={formData.projectDescription} 
                                    onChange={handleChange} 
                                    rows={5} 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent transition-all" 
                                    required 
                                    placeholder="Bitte beschreiben Sie Ihr Projekt möglichst detailliert: Art und Größe des Objekts, gewünschter Zeitrahmen, besondere Anforderungen..."
                                ></textarea>
                            </div>
                            
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#C73E3A] text-white py-4 px-6 rounded-lg font-semibold text-lg shadow-lg hover:bg-[#B02E2A] transform hover:scale-[1.02] transition-all duration-300"
                                >
                                    Kostenlose Beratung anfordern
                                </button>
                            </div>
                            
                            <p className="text-xs text-gray-500 text-center">
                                Mit dem Absenden stimmen Sie unserer <a href="/datenschutz" className="text-[#C73E3A] hover:underline">Datenschutzerklärung</a> zu.
                                Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                            </p>
                        </form>
                    )}

                    {/* Direct Contact Info */}
                    <div className="mt-12 bg-[#2C4F5E] rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-2 text-center">Direkter Draht zu unseren B2B-Experten</h3>
                        <p className="text-white/80 text-center mb-8">
                            Sie haben es eilig? Kontaktieren Sie uns direkt - wir sind für Sie da!
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <a href="tel:+4952199999900" className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-all text-center">
                                <div className="text-3xl mb-2">📞</div>
                                <p className="text-sm opacity-80 mb-1">B2B-Hotline (Mo-Fr 7-19 Uhr)</p>
                                <p className="text-xl font-semibold">0521 / 999 999 00</p>
                            </a>
                            <a href="mailto:b2b@ruempelschmiede.de" className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-all text-center">
                                <div className="text-3xl mb-2">📧</div>
                                <p className="text-sm opacity-80 mb-1">E-Mail (Antwort innerhalb 24h)</p>
                                <p className="text-xl font-semibold">b2b@ruempelschmiede.de</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}