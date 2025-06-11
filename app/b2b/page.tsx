'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Icon from '../components/Icon';

interface B2BService {
    id: string;
    title: string;
    icon: string;
    image: string;
    excerpt: string;
    seoText: string;
    details: string[];
    keywords: string[];
    cities: string[];
}

const b2bServicesData: B2BService[] = [
    {
        id: 'gewerbeaufloesung',
        title: 'Gewerbeauflösung & Betriebsauflösung deutschlandweit',
        icon: 'buero',
        image: "/images/gewerbe-aufloesung.jpg",
        excerpt: 'Professionelle Betriebsauflösung in ganz Deutschland. Komplettservice für Büros, Praxen und Produktionsstätten.',
        seoText: 'Gewerbeauflösung Deutschland: Komplette Räumung von Bürokomplexen, Produktionsstätten und Geschäftsräumen bundesweit. Über 15 Jahre Erfahrung, Festpreisgarantie, diskrete Abwicklung. Regionale Teams in allen Bundesländern.',
        details: [
            "Bundesweite Komplettauflösung von Geschäftsräumen",
            "Demontage von Maschinen und Betriebseinrichtungen", 
            "Zusammenarbeit mit Insolvenzverwaltern deutschlandweit",
            "Besenreine Übergabe zum Fixtermin",
            "Festpreis ohne versteckte Kosten"
        ],
        keywords: ['Gewerbeauflösung', 'Betriebsauflösung', 'Büroauflösung', 'Deutschland', 'bundesweit'],
        cities: ['Berlin', 'Hamburg', 'München', 'Köln', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dortmund']
    },
    {
        id: 'bueroentruempelung',
        title: 'Büroauflösung & DSGVO-konforme Aktenvernichtung',
        icon: 'document',
        image: '/images/buero-aufloesung.jpg',
        excerpt: 'Büroräumung mit zertifizierter Aktenvernichtung nach DIN 66399. Deutschlandweit verfügbar.',
        seoText: 'Büroauflösung mit DSGVO-konformer Aktenvernichtung in ganz Deutschland. Sichere Vernichtung sensibler Daten nach DIN 66399 mit Zertifikat. Express-Service bundesweit möglich.',
        details: [
            "DSGVO-konforme Aktenvernichtung mit Zertifikat",
            "Sichere Datenträgervernichtung nach DIN 66399",
            "Verwertung hochwertiger Büromöbel",
            "Flexible Termine auch am Wochenende", 
            "Express-Service innerhalb 48 Stunden bundesweit"
        ],
        keywords: ['Büroauflösung', 'Aktenvernichtung', 'DSGVO', 'DIN 66399', 'Deutschland'],
        cities: ['Bielefeld', 'Hannover', 'Bremen', 'Leipzig', 'Dresden', 'Nürnberg', 'Mannheim', 'Karlsruhe']
    },
    {
        id: 'lagerraeumung',
        title: 'Lager- & Hallenräumung Deutschland',
        icon: 'lager',
        image: '/images/lager-raeumung.jpg',
        excerpt: 'Professionelle Räumung von Lagerhallen und Logistikzentren deutschlandweit.',
        seoText: 'Lagerräumung Deutschland: Komplette Hallenräumung mit Schwerlasttransporten bis 40t. Bundesweites Netzwerk, Sortierung nach Materialfraktionen, umweltgerechte Entsorgung.',
        details: [
            "Räumung von Lagerhallen jeder Größe bundesweit",
            "Demontage von Regalsystemen",
            "Schwerlasttransporte bis 40 Tonnen",
            "Sortierung und Recycling von Materialien",
            "Containerstellung und Abfallmanagement"
        ],
        keywords: ['Lagerräumung', 'Hallenräumung', 'Industrieräumung', 'Deutschland', 'bundesweit'],
        cities: ['Essen', 'Duisburg', 'Bochum', 'Wuppertal', 'Bonn', 'Münster', 'Augsburg', 'Mönchengladbach']
    },
    {
        id: 'praxisaufloesung',
        title: 'Praxisauflösung für Ärzte & Zahnärzte',
        icon: 'heart',
        image: '/images/praxis-aufloesung.jpg',
        excerpt: 'Diskrete Auflösung von Arztpraxen mit fachgerechter Entsorgung medizinischer Geräte.',
        seoText: 'Praxisauflösung Deutschland: Spezialisiert auf Arzt- und Zahnarztpraxen bundesweit. Fachgerechte Entsorgung medizinischer Geräte, sichere Patientenakten-Vernichtung.',
        details: [
            "Spezialentsorgung medizinischer Geräte",
            "Sichere Vernichtung von Patientenakten", 
            "Demontage von Behandlungseinheiten",
            "Verwertung hochwertiger Praxisausstattung",
            "Diskrete und termingerechte Abwicklung"
        ],
        keywords: ['Praxisauflösung', 'Arztpraxis', 'Zahnarztpraxis', 'Medizinische Entsorgung', 'Deutschland'],
        cities: ['Gelsenkirchen', 'Braunschweig', 'Chemnitz', 'Kiel', 'Aachen', 'Halle', 'Magdeburg', 'Freiburg']
    },
    {
        id: 'einzelhandel',
        title: 'Ladenauflösung & Geschäftsauflösung',
        icon: 'kiste',
        image: '/images/laden-aufloesung.jpg',
        excerpt: 'Komplettauflösung von Einzelhandelsgeschäften und Verkaufsflächen deutschlandweit.',
        seoText: 'Ladenauflösung Deutschland: Professionelle Geschäftsauflösung für Einzelhandel, Boutiquen und Verkaufsflächen bundesweit. Demontage von Ladeneinrichtung, besenreine Übergabe.',
        details: [
            "Räumung von Verkaufs- und Lagerflächen",
            "Demontage von Ladeneinrichtung",
            "Entsorgung von Warenbeständen",
            "Rückbau von Schaufensteranlagen",
            "Termingerechte Übergabe an Vermieter"
        ],
        keywords: ['Ladenauflösung', 'Geschäftsauflösung', 'Einzelhandel', 'Deutschland'],
        cities: ['Krefeld', 'Lübeck', 'Oberhausen', 'Erfurt', 'Mainz', 'Rostock', 'Kassel', 'Hagen']
    },
    {
        id: 'gastronomie',
        title: 'Gastronomie & Hotelauflösung',
        icon: 'kiste',
        image: '/images/gastronomie-aufloesung.jpg',
        excerpt: 'Komplettauflösung von Restaurants, Hotels und Großküchen in ganz Deutschland.',
        seoText: 'Gastronomieauflösung bundesweit: Professionelle Räumung von Restaurants und Hotels. Fachgerechte Entsorgung von Küchengeräten, Kühlmittel-Entsorgung nach Umweltvorschriften.',
        details: [
            "Demontage von Großküchengeräten",
            "Umweltgerechte Kühlmittel-Entsorgung",
            "Verwertung von Edelstahl-Inventar",
            "Räumung von Gästebereichen",
            "Besenreine Übergabe"
        ],
        keywords: ['Gastronomieauflösung', 'Hotelauflösung', 'Restaurant', 'Großküche', 'Deutschland'],
        cities: ['Hamm', 'Saarbrücken', 'Mülheim', 'Potsdam', 'Ludwigshafen', 'Oldenburg', 'Leverkusen', 'Osnabrück']
    }
];

export default function B2BPage() {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        serviceRequired: '',
        projectSize: '',
        timeline: '',
        projectDescription: '',
    });
    
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

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

    // Simplified navigation - no need for complex handling since we removed overview cards
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.substring(1);
            if (hash && b2bServicesData.find(s => s.id === hash)) {
                setTimeout(() => {
                    const element = document.getElementById(hash);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }
        };

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);
        
        // Handle initial load
        if (window.location.hash) {
            handleHashChange();
        }
        
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    // Handle direct clicks to service cards - scroll to detail
    const scrollToDetail = (serviceId: string) => {
        const detailElement = document.getElementById(serviceId);
        if (detailElement) {
            detailElement.scrollIntoView({ behavior: 'smooth' });
            // Update URL hash
            window.history.pushState(null, '', `#${serviceId}`);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        console.log('B2B Formulardaten:', formData);
        setFormSubmitted(true);
    };

    const b2bBenefits = [
        {
            icon: 'clock',
            title: 'Termintreue garantiert',
            text: 'Fixtermine ohne Verzögerung. Pünktliche Projektabwicklung seit über 15 Jahren.'
        },
        {
            icon: 'shield',
            title: 'Absolute Diskretion',
            text: 'Verschwiegenheitspflicht für alle Mitarbeiter. Neutrale Fahrzeuge, diskrete Abwicklung.'
        },
        {
            icon: 'award',
            title: 'Zertifizierte Entsorgung',
            text: 'Alle Nachweise für Compliance. DSGVO-konforme Aktenvernichtung mit Zertifikat.'
        },
        {
            icon: 'heart',
            title: 'Fester Ansprechpartner',
            text: 'Ein Projektleiter für Ihr gesamtes Projekt. Direkte Kommunikation garantiert.'
        },
        {
            icon: 'euro',
            title: 'Transparente Festpreise',
            text: 'Verbindliche Angebote ohne versteckte Kosten. Faire, transparente Kalkulation.'
        },
        {
            icon: 'shield',
            title: 'Versichert bis 5 Mio. €',
            text: 'Umfassender Versicherungsschutz. Betriebshaftpflicht für Ihre Sicherheit.'
        },
    ];

    return (
        <div className="bg-gray-50 text-gray-700">
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
                
                .icon-placeholder {
                    width: 48px;
                    height: 48px;
                    background: #E5E7EB;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #9CA3AF;
                    font-size: 10px;
                    text-align: center;
                    padding: 4px;
                }
                
                .icon-placeholder-large {
                    width: 64px;
                    height: 64px;
                    font-size: 12px;
                }

                .service-card {
                    scroll-margin-top: 120px;
                }
            `}</style>

            {/* Hero Section - SEO optimiert */}
            <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#1a2b36] via-[#2C4F5E] to-[#1E3A47]">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="inline-block px-6 py-2 mb-6 text-sm font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                            GEWERBLICHE ENTRÜMPELUNG SEIT 2009
                        </span>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                            Gewerbliche Entrümpelung Deutschland
                            <span className="block text-[#C73E3A] mt-2">Ihr B2B-Partner bundesweit</span>
                        </h1>
                        
                        <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                            Professionelle Betriebsauflösungen, Büroräumungen und Industrieentrümpelungen 
                            deutschlandweit. Von Hamburg bis München, von Köln bis Berlin - 15+ Jahre 
                            Erfahrung, über 5.000 zufriedene Geschäftskunden, Festpreis-Garantie.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <a
                                href="#b2b-kontakt"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#C73E3A] rounded-xl shadow-lg hover:bg-[#B02E2A] transition-all"
                            >
                                Kostenlose Beratung anfordern
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                            
                            <a
                                href="tel:+4952199999900"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                0521 / 1200 510
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {[
                                { value: '24h', label: 'Reaktionszeit' },
                                { value: '5.000+', label: 'B2B-Projekte' },
                                { value: '16', label: 'Bundesländer' },
                                { value: 'Festpreis', label: 'Garantie' }
                            ].map((stat, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                    <div className="text-2xl md:text-3xl font-bold text-[#C73E3A]">{stat.value}</div>
                                    <div className="text-white/80 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Intro Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#2C4F5E] mb-6">
                            Deutschlandweite gewerbliche Entrümpelung - Ihr zuverlässiger B2B-Partner
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p className="mb-4">
                                Die Rümpelschmiede ist Ihr spezialisierter Partner für gewerbliche Entrümpelungen 
                                in ganz Deutschland. Mit über 15 Jahren Erfahrung und einem bundesweiten Netzwerk 
                                bieten wir professionelle Lösungen für Büroauflösungen, Betriebsauflösungen, 
                                Praxisauflösungen und Lagerräumungen - von Hamburg bis München, von Frankfurt bis Berlin.
                            </p>
                            <p className="mb-4">
                                Unser deutschlandweiter Service umfasst die komplette Projektabwicklung: Von der 
                                kostenlosen Erstbesichtigung über die fachgerechte Demontage bis zur besenreinen 
                                Übergabe. Mit regionalen Teams in allen Bundesländern garantieren wir kurze 
                                Reaktionszeiten und termingerechte Ausführung.
                            </p>
                            <p>
                                Besonders wichtig: Wir sind bundesweit zertifiziert für die DSGVO-konforme 
                                Aktenvernichtung nach DIN 66399 und garantieren die umweltgerechte Entsorgung 
                                aller Materialien mit vollständiger Dokumentation - egal wo in Deutschland.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailbereiche für jeden Service - Jetzt die Hauptbereiche */}
            {/* Service-Bereiche - Jetzt die Hauptbereiche */}
            {b2bServicesData.map((service, index) => (
                <section 
                    key={service.id}
                    id={service.id}
                    className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                    style={{ scrollMarginTop: '120px' }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content */}
                            <div className={index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                                <div className="mb-6">
                                    <span className="inline-block px-4 py-2 bg-[#C73E3A]/10 text-[#C73E3A] rounded-full text-sm font-semibold mb-4">
                                        {service.keywords[0]}
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl font-bold text-[#2C4F5E] mb-6">
                                        {service.title}
                                    </h2>
                                </div>

                                {/* 300-Wort SEO-Text je nach Service */}
                                <div className="prose prose-lg text-gray-700 mb-8">
                                    {service.id === 'gewerbeaufloesung' && (
                                        <>
                                            <p className="mb-4">
                                                <strong>Gewerbeauflösung und Betriebsauflösung</strong> erfordern professionelle Entrümpelung 
                                                mit Expertise und Erfahrung. Die Rümpelschmiede ist Ihr deutschlandweiter Partner für die 
                                                komplette Auflösung von Gewerbeobjekten jeder Größe - von kleinen Büroräumen bis zu 
                                                großen Produktionsstätten und Industrieanlagen.
                                            </p>
                                            <p className="mb-4">
                                                Bei einer <strong>gewerblichen Entrümpelung</strong> stehen andere Anforderungen im 
                                                Vordergrund als bei privaten Haushaltsauflösungen. Termingenauigkeit, Diskretion und 
                                                rechtskonforme Entsorgung sind essentiell. Unser spezialisiertes Entrümpelung-Team 
                                                demontiert fachgerecht Maschinen, Anlagen und Betriebseinrichtungen. Wir koordinieren 
                                                komplexe Logistikprozesse und gewährleisten die ordnungsgemäße Trennung verwertbarer 
                                                Materialien von Abfällen.
                                            </p>
                                            <p className="mb-4">
                                                Die <strong>Entrümpelung von Gewerbeimmobilien</strong> umfasst die komplette Räumung 
                                                von Büros, Werkstätten, Lagerhallen und Verkaufsflächen. Besondere Aufmerksamkeit gilt 
                                                der umweltgerechten Entsorgung von Betriebsstoffen, IT-Equipment und Sondermüll. 
                                                Unsere Entrümpelung-Experten erstellen detaillierte Entsorgungsnachweise und 
                                                Verwertungsbelege für Ihre Compliance-Dokumentation.
                                            </p>
                                            <p>
                                                Von der Planung bis zur besenreinen Übergabe - unsere <strong>professionelle Entrümpelung</strong> 
                                                gewährleistet einen reibungslosen Ablauf Ihrer Betriebsauflösung. Deutschlandweit, 
                                                termingerecht und zu fairen Festpreisen.
                                            </p>
                                        </>
                                    )}

                                    {service.id === 'bueroentruempelung' && (
                                        <>
                                            <p className="mb-4">
                                                <strong>Büroauflösung und Entrümpelung</strong> von Verwaltungsgebäuden erfordert höchste 
                                                Sorgfalt beim Umgang mit sensiblen Daten und Geschäftsunterlagen. Die Rümpelschmiede 
                                                bietet deutschlandweit DSGVO-konforme Büro-Entrümpelung mit zertifizierter Aktenvernichtung 
                                                nach DIN 66399 - für absolute Datensicherheit bei Ihrer Büroauflösung.
                                            </p>
                                            <p className="mb-4">
                                                Unsere <strong>spezialisierte Büro-Entrümpelung</strong> umfasst die fachgerechte Demontage 
                                                und Entsorgung von Büromöbeln, IT-Ausstattung und Telekommunikationsanlagen. Besonders bei 
                                                der Entrümpelung von Büroräumen achten wir auf die Verwertung hochwertiger Einrichtungsgegenstände 
                                                und elektronischer Geräte. Wertvolle Büromöbel werden über unsere Partner-Netzwerke einer 
                                                Zweitnutzung zugeführt, was Ihre Entrümpelung-Kosten reduziert.
                                            </p>
                                            <p className="mb-4">
                                                Die <strong>professionelle Entrümpelung von Bürokomplexen</strong> beinhaltet auch die 
                                                sichere Vernichtung von Datenträgern wie Festplatten, USB-Sticks und optischen Medien. 
                                                Unser Entrümpelung-Service garantiert die vollständige Löschung aller Daten vor der 
                                                umweltgerechten Entsorgung. Alle Vernichtungsprozesse werden dokumentiert und zertifiziert.
                                            </p>
                                            <p>
                                                Express-Entrümpelung innerhalb 48 Stunden ist für dringende Büroauflösungen deutschlandweit 
                                                möglich. Flexible Termine, auch am Wochenende, ermöglichen eine Entrümpelung ohne 
                                                Betriebsunterbrechung.
                                            </p>
                                        </>
                                    )}

                                    {service.id === 'lagerraeumung' && (
                                        <>
                                            <p className="mb-4">
                                                <strong>Lagerräumung und Hallenräumung</strong> stellen besondere Anforderungen an die 
                                                Entrümpelung großer Gewerbeflächen. Die Rümpelschmiede verfügt über die notwendige 
                                                Ausstattung und Erfahrung für die komplette Entrümpelung von Lagerhallen, Logistikzentren 
                                                und Produktionsstätten bis 40.000 m² - deutschlandweit mit einheitlich hohen Standards.
                                            </p>
                                            <p className="mb-4">
                                                Bei der <strong>industriellen Entrümpelung</strong> von Lagerflächen kommen Schwerlast-Kräne, 
                                                Hubarbeitsbühnen und Spezialfahrzeuge zum Einsatz. Unsere Entrümpelung-Teams demontieren 
                                                mehrstöckige Regalsysteme, transportieren Schwergut bis 40 Tonnen und räumen selbst 
                                                schwer zugängliche Bereiche vollständig. Die systematische Sortierung von Materialien 
                                                optimiert Recycling-Quoten und minimiert Entsorgungskosten.
                                            </p>
                                            <p className="mb-4">
                                                <strong>Professionelle Lager-Entrümpelung</strong> beinhaltet auch die Containerstellung 
                                                für verschiedene Abfallfraktionen. Metalle, Kunststoffe, Papier und Elektroschrott werden 
                                                bereits vor Ort getrennt. Diese effiziente Entrümpelung-Methode reduziert Transportkosten 
                                                und maximiert Verwertungserlöse. Gefährliche Stoffe werden durch zertifizierte 
                                                Entsorgungspartner sicher entfernt.
                                            </p>
                                            <p>
                                                Zeitkritische Projekte wie Insolvenzverfahren oder Mieterwechsel erfordern schnelle 
                                                Entrümpelung. Unser bundesweites Netzwerk ermöglicht den Start Ihrer Lagerräumung 
                                                innerhalb 24 Stunden nach Auftragserteilung.
                                            </p>
                                        </>
                                    )}

                                    {service.id === 'praxisaufloesung' && (
                                        <>
                                            <p className="mb-4">
                                                <strong>Praxisauflösung und medizinische Entrümpelung</strong> erfordern Spezialkenntnisse 
                                                im Umgang mit medizinischen Geräten und hygienischen Anforderungen. Die Rümpelschmiede 
                                                ist deutschlandweit Ihr Partner für die diskrete und fachgerechte Entrümpelung von 
                                                Arztpraxen, Zahnarztpraxen, Kliniken und therapeutischen Einrichtungen.
                                            </p>
                                            <p className="mb-4">
                                                Die <strong>Entrümpelung medizinischer Einrichtungen</strong> umfasst die sichere Demontage 
                                                von Behandlungseinheiten, Röntgengeräten und medizintechnischen Anlagen. Besondere Sorgfalt 
                                                gilt der Entsorgung von Betäubungsmitteln, Medikamenten und kontaminierten Materialien. 
                                                Unsere zertifizierten Entrümpelung-Spezialisten arbeiten nach den Richtlinien des 
                                                Infektionsschutzgesetzes und gewährleisten die ordnungsgemäße Trennung verschiedener Abfallklassen.
                                            </p>
                                            <p className="mb-4">
                                                <strong>Patientenakten-Vernichtung</strong> erfolgt bei unserer Praxis-Entrümpelung 
                                                selbstverständlich DSGVO-konform mit vollständiger Dokumentation. Vertrauliche Unterlagen 
                                                werden vor Ort in versiegelten Behältern gesammelt und in zertifizierten Anlagen 
                                                vernichtet. Die Entrümpelung erfolgt diskret in neutralen Fahrzeugen ohne Firmenaufschrift.
                                            </p>
                                            <p>
                                                Hochwertige Praxiseinrichtungen und medizinische Geräte werden bei der Entrümpelung 
                                                fachgerecht bewertet. Funktionsfähige Ausstattung kann über spezialisierte Händler 
                                                verwertet werden, was die Kosten Ihrer Praxis-Entrümpelung erheblich reduziert.
                                            </p>
                                        </>
                                    )}

                                    {service.id === 'einzelhandel' && (
                                        <>
                                            <p className="mb-4">
                                                <strong>Ladenauflösung und Einzelhandel-Entrümpelung</strong> erfordern schnelle und 
                                                effiziente Abwicklung, besonders bei Mieterwechseln oder Insolvenzverfahren. Die 
                                                Rümpelschmiede ist deutschlandweit spezialisiert auf die komplette Entrümpelung von 
                                                Verkaufsflächen, Boutiquen, Supermärkten und Shopping-Centern.
                                            </p>
                                            <p className="mb-4">
                                                Bei der <strong>Geschäfts-Entrümpelung</strong> im Einzelhandel stehen oft kurze 
                                                Räumungsfristen im Vordergrund. Unsere erfahrenen Entrümpelung-Teams demontieren 
                                                Ladeneinrichtungen, Kassensysteme und Schaufensteranlagen termingerecht und besenrein. 
                                                Warenlager und Verkaufsbestände werden sortiert - verwertbare Waren über 
                                                Restposten-Händler vermarktet, defekte Ware fachgerecht entsorgt.
                                            </p>
                                            <p className="mb-4">
                                                <strong>Professionelle Laden-Entrümpelung</strong> beinhaltet auch den kompletten 
                                                Rückbau von Verkaufseinrichtungen auf den Rohbauzustand. Beleuchtungsanlagen, 
                                                Verkabelung und Böden werden bei Bedarf entfernt. Unsere Entrümpelung-Experten 
                                                koordinieren alle Gewerke und gewährleisten die termingerechte Übergabe an 
                                                Vermieter oder Nachmieter.
                                            </p>
                                            <p>
                                                Eilaufträge bei Räumungsklagen oder kurzfristigen Kündigungen werden durch unseren 
                                                Express-Entrümpelung-Service innerhalb 24-48 Stunden deutschlandweit realisiert. 
                                                Flexible Arbeitszeiten ermöglichen auch Entrümpelung außerhalb der Geschäftszeiten.
                                            </p>
                                        </>
                                    )}

                                    {service.id === 'gastronomie' && (
                                        <>
                                            <p className="mb-4">
                                                <strong>Gastronomie-Auflösung und Restaurant-Entrümpelung</strong> erfordern Expertise 
                                                im Umgang mit Großküchengeräten und lebensmittelhygienischen Vorschriften. Die 
                                                Rümpelschmiede ist deutschlandweit Ihr Partner für die komplette Entrümpelung von 
                                                Restaurants, Hotels, Kantinen und gastronomischen Betrieben aller Größenordnungen.
                                            </p>
                                            <p className="mb-4">
                                                Die <strong>Küchen-Entrümpelung</strong> in der Gastronomie umfasst die fachgerechte 
                                                Demontage von Großküchengeräten, Kühlsystemen und Lüftungsanlagen. Besondere Aufmerksamkeit 
                                                gilt der umweltgerechten Entsorgung von Kühlmitteln nach F-Gase-Verordnung. Unsere 
                                                zertifizierten Entrümpelung-Techniker arbeiten ausschließlich mit lizenzierten 
                                                Kältemittel-Entsorgern zusammen.
                                            </p>
                                            <p className="mb-4">
                                                <strong>Hotel-Entrümpelung</strong> erfordert die koordinierte Räumung von Gästebereichen, 
                                                Küchen und Verwaltungsräumen. Hochwertige Hotelausstattung wie Möbel, Textilien und 
                                                Küchengeräte wird bei unserer Entrümpelung fachgerecht bewertet. Verwertbare 
                                                Einrichtungsgegenstände können über spezialisierte Gastronomie-Händler vermarktet 
                                                werden, was Ihre Entrümpelung-Kosten deutlich reduziert.
                                            </p>
                                            <p>
                                                Express-Entrümpelung für zeitkritische Gastronomie-Projekte ist deutschlandweit 
                                                möglich. Renovierungsbedingte Räumungen oder saisonale Betriebsschließungen werden 
                                                flexibel und termingerecht abgewickelt.
                                            </p>
                                        </>
                                    )}
                                </div>

                                {/* Service Details Liste */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-[#2C4F5E] mb-4">Unsere Leistungen im Detail:</h3>
                                    <ul className="space-y-3">
                                        {service.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <svg className="w-6 h-6 text-[#C73E3A] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-700">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="#b2b-kontakt"
                                        className="inline-flex items-center justify-center px-6 py-3 bg-[#C73E3A] text-white font-semibold rounded-lg hover:bg-[#B02E2A] transition-all"
                                    >
                                        Kostenvoranschlag anfordern
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </a>
                                    <a
                                        href="tel:+4952199999900"
                                        className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#C73E3A] text-[#C73E3A] font-semibold rounded-lg hover:bg-[#C73E3A] hover:text-white transition-all"
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        Sofort anrufen
                                    </a>
                                </div>
                            </div>

                            {/* Image/Visual */}
                            <div className={index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}>
                                <div className="relative h-96 rounded-xl overflow-hidden">
                                    <Image 
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                                    />
                                    {/* Light overlay for better brightness */}
                                    <div className="absolute inset-0 bg-black/1"></div>
                                    
                                    {/* Icon overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                            <Icon name={service.icon} size={64} color="white" />
                                        </div>
                                    </div>
                                    
                                    {/* Overlay mit Städten - lighter background */}
                                    <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4">
                                        <p className="text-white text-sm font-semibold mb-2">Verfügbar in:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.cities.slice(0, 6).map((city, idx) => (
                                                <span key={idx} className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                                                    {city}
                                                </span>
                                            ))}
                                            <span className="text-white/80 text-xs px-2 py-1">+ weitere</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Deutschland-weite Abdeckung Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-[#2C4F5E] text-center mb-12">
                        Bundesweite Abdeckung - Wir sind in Ihrer Nähe
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                region: 'Nordrhein-Westfalen',
                                cities: ['Köln', 'Düsseldorf', 'Dortmund', 'Essen', 'Duisburg', 'Bochum', 'Wuppertal', 'Bielefeld'],
                                color: 'bg-blue-50 border-blue-200'
                            },
                            {
                                region: 'Bayern',
                                cities: ['München', 'Nürnberg', 'Augsburg', 'Würzburg', 'Regensburg', 'Ingolstadt', 'Fürth', 'Erlangen'],
                                color: 'bg-green-50 border-green-200'
                            },
                            {
                                region: 'Baden-Württemberg',
                                cities: ['Stuttgart', 'Mannheim', 'Karlsruhe', 'Freiburg', 'Heidelberg', 'Ulm', 'Heilbronn', 'Pforzheim'],
                                color: 'bg-yellow-50 border-yellow-200'
                            },
                            {
                                region: 'Norddeutschland',
                                cities: ['Hamburg', 'Bremen', 'Hannover', 'Braunschweig', 'Oldenburg', 'Osnabrück', 'Lübeck', 'Kiel'],
                                color: 'bg-purple-50 border-purple-200'
                            }
                        ].map((area, index) => (
                            <div key={index} className={`p-6 rounded-xl border ${area.color}`}>
                                <h3 className="font-bold text-[#2C4F5E] mb-3">{area.region}</h3>
                                <div className="space-y-1">
                                    {area.cities.map((city, idx) => (
                                        <div key={idx} className="text-sm text-gray-600 flex items-center">
                                            <svg className="w-3 h-3 text-[#C73E3A] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            {city}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-gray-600 mb-4">
                            Auch in Berlin, Dresden, Leipzig, Frankfurt, Mainz, Saarbrücken, Erfurt, Magdeburg, 
                            Schwerin, Potsdam und weiteren Städten deutschlandweit verfügbar.
                        </p>
                        <a
                            href="#b2b-kontakt"
                            className="inline-flex items-center text-[#C73E3A] font-semibold hover:text-[#B02E2A]"
                        >
                            Verfügbarkeit in Ihrer Stadt prüfen
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-[#2C4F5E] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Warum Unternehmen uns deutschlandweit vertrauen
                        </h2>
                        <p className="text-lg text-white/80 max-w-3xl mx-auto">
                            6 gute Gründe für die Rümpelschmiede als Ihren B2B-Partner 
                            für gewerbliche Entrümpelungen
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {b2bBenefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                            >
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                                    <Icon name={benefit.icon} size={32} color="white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                <p className="text-white/80">{benefit.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-[#2C4F5E] text-center mb-12">
                        Ihr Weg zur professionellen Gewerberäumung
                    </h2>
                    
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { 
                                step: '1', 
                                title: 'Anfrage & Beratung', 
                                text: 'Kostenlose Erstberatung innerhalb 24h. Analyse Ihrer Anforderungen.' 
                            },
                            { 
                                step: '2', 
                                title: 'Besichtigung', 
                                text: 'Vor-Ort-Termin zur Bestandsaufnahme. Verbindliches Festpreisangebot.' 
                            },
                            { 
                                step: '3', 
                                title: 'Durchführung', 
                                text: 'Professionelle Räumung zum Wunschtermin. Auch am Wochenende möglich.' 
                            },
                            { 
                                step: '4', 
                                title: 'Dokumentation', 
                                text: 'Besenreine Übergabe mit allen Nachweisen und Zertifikaten.' 
                            }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-[#C73E3A] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-lg text-[#2C4F5E] mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-[#2C4F5E] text-center mb-12">
                        Das sagen unsere Geschäftskunden
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                company: 'Immobilienverwaltung Meier KG',
                                text: 'Sehr professionelle Abwicklung bei der Räumung unserer Mietobjekte. Termintreu und fair im Preis.',
                                person: 'Thomas M., Geschäftsführer',
                                project: 'Mehrere Wohnungsauflösungen',
                                location: 'Hamburg'
                            },
                            {
                                company: 'TechSolutions GmbH',
                                text: 'Die DSGVO-konforme Aktenvernichtung war perfekt. Alle Dokumente wurden sicher vernichtet.',
                                person: 'Sarah K., Head of Operations',
                                project: 'Büroumzug 500qm',
                                location: 'München'
                            },
                            {
                                company: 'Logistik Nordwest AG',
                                text: '2000qm Lagerhalle in nur 3 Tagen geräumt. Sehr zuverlässig und professionell.',
                                person: 'Michael B., Facility Manager',
                                project: 'Lagerhallenräumung',
                                location: 'Bremen'
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="flex mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-[#C73E3A]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                                <div className="border-t pt-3">
                                    <p className="font-semibold text-[#2C4F5E]">{testimonial.company}</p>
                                    <p className="text-sm text-gray-600">{testimonial.person}</p>
                                    <p className="text-xs text-gray-500 mt-1">Projekt: {testimonial.project}</p>
                                    <p className="text-xs text-[#C73E3A] font-semibold">{testimonial.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section id="b2b-kontakt" className="animate-section py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center mb-12 fade-in-up ${visibleSections.has('b2b-kontakt') ? 'visible' : ''}`}>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#2C4F5E] mb-4">
                            Jetzt unverbindliche Anfrage stellen
                        </h2>
                        <p className="text-lg text-gray-600">
                            Kostenlose Beratung für Ihre gewerbliche Entrümpelung - 
                            Antwort innerhalb von 24 Stunden garantiert
                        </p>
                    </div>

                    {formSubmitted ? (
                        <div className="bg-green-50 border-2 border-green-200 p-12 rounded-xl text-center">
                            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Vielen Dank für Ihre Anfrage!</h3>
                            <p className="text-gray-600">Wir melden uns schnellstmöglich bei Ihnen.</p>
                        </div>
                    ) : (
                        <div className="bg-gray-50 rounded-xl p-8 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Firma*
                                    </label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        id="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        E-Mail*
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                        Telefon*
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="serviceRequired" className="block text-sm font-medium text-gray-700 mb-1">
                                        Gewünschte Leistung*
                                    </label>
                                    <select
                                        name="serviceRequired"
                                        id="serviceRequired"
                                        value={formData.serviceRequired}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent"
                                        required
                                    >
                                        <option value="">Bitte wählen...</option>
                                        {b2bServicesData.map(s => (
                                            <option key={s.id} value={s.title}>{s.title}</option>
                                        ))}
                                    </select>
                                </div>
                                
                                <div>
                                    <label htmlFor="projectSize" className="block text-sm font-medium text-gray-700 mb-1">
                                        Objektgröße
                                    </label>
                                    <input
                                        type="text"
                                        name="projectSize"
                                        id="projectSize"
                                        placeholder="z.B. 200 qm Bürofläche"
                                        value={formData.projectSize}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                                    Gewünschter Zeitraum
                                </label>
                                <input
                                    type="text"
                                    name="timeline"
                                    id="timeline"
                                    placeholder="z.B. innerhalb 2 Wochen"
                                    value={formData.timeline}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent"
                                />
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
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent"
                                    placeholder="Bitte beschreiben Sie kurz Ihr Projekt..."
                                    required
                                ></textarea>
                            </div>
                            
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="w-full bg-[#C73E3A] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#B02E2A] transition-all"
                            >
                                Kostenloses Angebot anfordern
                            </button>
                            
                            <p className="text-xs text-gray-500 text-center">
                                Mit dem Absenden stimmen Sie unserer <a href="/datenschutz" className="text-[#C73E3A] hover:underline">Datenschutzerklärung</a> zu.
                            </p>
                        </div>
                    )}

                    {/* Direkte Kontaktmöglichkeiten */}
                    <div className="mt-12 grid md:grid-cols-2 gap-6">
                        <a href="tel:+4952199999900" className="bg-[#2C4F5E] text-white p-6 rounded-xl text-center hover:bg-[#1E3A47] transition-all">
                            <div className="icon-placeholder bg-white/20 mx-auto mb-3">
                                Telefon
                            </div>
                            <p className="text-sm mb-1">B2B-Hotline (Mo-Fr 7-19 Uhr)</p>
                            <p className="text-xl font-bold">0521 / 1200 510</p>
                        </a>
                        
                        <a href="mailto:gewerbe@ruempelschmiede-bielefeld.de" className="bg-[#2C4F5E] text-white p-6 rounded-xl text-center hover:bg-[#1E3A47] transition-all">
                            <div className="icon-placeholder bg-white/20 mx-auto mb-3">
                                E-Mail
                            </div>
                            <p className="text-sm mb-1">Antwort innerhalb 24h</p>
                            <p className="text-xl font-bold">E-Mail senden</p>
                        </a>
                    </div>
                </div>
            </section>

            {/* SEO Footer Section mit Deutschland-Keywords */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-sm text-gray-600 max-w-none">
                        <h3 className="text-xl font-bold text-[#2C4F5E] mb-4">
                            Ihr Partner für gewerbliche Entrümpelungen in ganz Deutschland
                        </h3>
                        <p className="mb-4">
                            Die Rümpelschmiede ist Ihr zuverlässiger Partner für gewerbliche Entrümpelungen, 
                            Betriebsauflösungen und Büroräumungen deutschlandweit. Von Hamburg über Berlin bis München, 
                            von Köln über Frankfurt bis Stuttgart - mit unserem bundesweiten Netzwerk und regionalen Teams 
                            sind wir in allen 16 Bundesländern für Sie da. Über 15 Jahre Erfahrung und mehr als 
                            5.000 erfolgreich abgeschlossene B2B-Projekte sprechen für sich.
                        </p>
                        <p className="mb-4">
                            Unser deutschlandweiter Service umfasst die komplette Abwicklung Ihrer gewerblichen 
                            Räumung: Von der Büroauflösung in Berlin über die Praxisauflösung in München bis 
                            zur Industrieentrümpelung in Hamburg. Auch in Düsseldorf, Bremen, Hannover, Dresden, 
                            Leipzig, Nürnberg, Mannheim und allen weiteren deutschen Großstädten garantieren wir 
                            DSGVO-konforme Aktenvernichtung nach DIN 66399, fachgerechte Entsorgung von Sondermüll 
                            und eine termingerechte, besenreine Übergabe.
                        </p>
                        <p>
                            Vertrauen Sie auf unsere bundesweite Expertise bei Ihrer nächsten Betriebsauflösung 
                            oder Geschäftsauflösung. Ob in Nordrhein-Westfalen, Bayern, Baden-Württemberg oder 
                            einem anderen Bundesland - Festpreisgarantie, persönlicher Ansprechpartner und 
                            vollständige Dokumentation inklusive. Kontaktieren Sie uns für eine kostenlose 
                            Beratung und ein unverbindliches Angebot - deutschlandweit, schnell und zuverlässig.
                        </p>
                        
                        {/* Versteckte SEO Keywords */}
                        <div className="mt-8 text-xs text-gray-400">
                            <p>
                                Suchbegriffe: Gewerbliche Entrümpelung Deutschland, Betriebsauflösung bundesweit, 
                                Büroauflösung Hamburg Berlin München Köln Frankfurt Stuttgart Düsseldorf Bremen, 
                                Praxisauflösung deutschlandweit, Lagerräumung Deutschland, Geschäftsauflösung NRW Bayern BW, 
                                Industrieentrümpelung bundesweit, Firmenauflösung Deutschland
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}