'use client'
import { useState, useEffect } from 'react';

interface B2BService {
    id: string;
    title: string;
    iconPlaceholder: string;
    image: string;
    excerpt: string;
    seoText: string;
    details: string[];
    keywords: string[];
}

const b2bServicesData: B2BService[] = [
    {
        id: 'gewerbeaufloesung',
        title: 'Gewerbeauflösung & Betriebsauflösung deutschlandweit',
        iconPlaceholder: 'Büro Icon',
        image: "/images/Gewerbe.jpg",
        excerpt: 'Professionelle Betriebsauflösung in ganz Deutschland. Komplettservice für Büros, Praxen und Produktionsstätten.',
        seoText: 'Gewerbeauflösung Deutschland: Komplette Räumung von Bürokomplexen, Produktionsstätten und Geschäftsräumen bundesweit. Über 15 Jahre Erfahrung, Festpreisgarantie, diskrete Abwicklung. Regionale Teams in allen Bundesländern.',
        details: [
            "Bundesweite Komplettauflösung von Geschäftsräumen",
            "Demontage von Maschinen und Betriebseinrichtungen",
            "Zusammenarbeit mit Insolvenzverwaltern deutschlandweit",
            "Besenreine Übergabe zum Fixtermin",
            "Festpreis ohne versteckte Kosten"
        ],
        keywords: ['Gewerbeauflösung', 'Betriebsauflösung', 'Büroauflösung', 'Deutschland', 'bundesweit']
    },
    {
        id: 'bueroentruempelung',
        title: 'Büroauflösung & DSGVO-konforme Aktenvernichtung bundesweit',
        iconPlaceholder: 'Akten Icon',
        image: '/images/b2b-buero.jpg',
        excerpt: 'Büroräumung mit zertifizierter Aktenvernichtung nach DIN 66399. Deutschlandweit verfügbar.',
        seoText: 'Büroauflösung mit DSGVO-konformer Aktenvernichtung in ganz Deutschland. Sichere Vernichtung sensibler Daten nach DIN 66399 mit Zertifikat. Express-Service bundesweit möglich.',
        details: [
            "DSGVO-konforme Aktenvernichtung mit Zertifikat",
            "Sichere Datenträgervernichtung nach DIN 66399",
            "Verwertung hochwertiger Büromöbel",
            "Flexible Termine auch am Wochenende",
            "Express-Service innerhalb 48 Stunden bundesweit"
        ],
        keywords: ['Büroauflösung', 'Aktenvernichtung', 'DSGVO', 'DIN 66399', 'Deutschland']
    },
    {
        id: 'lagerraeumung',
        title: 'Lagerräumung & Hallenräumung Deutschland',
        iconPlaceholder: 'Lager Icon',
        image: '/images/b2b-lager.jpg',
        excerpt: 'Professionelle Räumung von Lagerhallen und Logistikzentren deutschlandweit.',
        seoText: 'Lagerräumung Deutschland: Komplette Hallenräumung mit Schwerlasttransporten bis 40t. Bundesweites Netzwerk, Sortierung nach Materialfraktionen, umweltgerechte Entsorgung.',
        details: [
            "Räumung von Lagerhallen jeder Größe bundesweit",
            "Demontage von Regalsystemen",
            "Schwerlasttransporte bis 40 Tonnen",
            "Sortierung und Recycling von Materialien",
            "Containerstellung und Abfallmanagement"
        ],
        keywords: ['Lagerräumung', 'Hallenräumung', 'Industrieräumung', 'Deutschland', 'bundesweit']
    },
    {
        id: 'praxisaufloesung',
        title: 'Praxisauflösung für Ärzte & Zahnärzte deutschlandweit',
        iconPlaceholder: 'Medizin Icon',
        image: '/images/b2b-praxis.jpg',
        excerpt: 'Diskrete Auflösung von Arztpraxen mit fachgerechter Entsorgung medizinischer Geräte.',
        seoText: 'Praxisauflösung Deutschland: Spezialisiert auf Arzt- und Zahnarztpraxen bundesweit. Fachgerechte Entsorgung medizinischer Geräte, sichere Patientenakten-Vernichtung.',
        details: [
            "Spezialentsorgung medizinischer Geräte",
            "Sichere Vernichtung von Patientenakten",
            "Demontage von Behandlungseinheiten",
            "Verwertung hochwertiger Praxisausstattung",
            "Diskrete und termingerechte Abwicklung"
        ],
        keywords: ['Praxisauflösung', 'Arztpraxis', 'Zahnarztpraxis', 'Medizinische Entsorgung', 'Deutschland']
    },
    {
        id: 'einzelhandel',
        title: 'Ladenauflösung & Geschäftsauflösung bundesweit',
        iconPlaceholder: 'Laden Icon',
        image: '/images/b2b-laden.jpg',
        excerpt: 'Komplettauflösung von Einzelhandelsgeschäften und Verkaufsflächen deutschlandweit.',
        seoText: 'Ladenauflösung Deutschland: Professionelle Geschäftsauflösung für Einzelhandel, Boutiquen und Verkaufsflächen bundesweit. Demontage von Ladeneinrichtung, besenreine Übergabe.',
        details: [
            "Räumung von Verkaufs- und Lagerflächen",
            "Demontage von Ladeneinrichtung",
            "Entsorgung von Warenbeständen",
            "Rückbau von Schaufensteranlagen",
            "Termingerechte Übergabe an Vermieter"
        ],
        keywords: ['Ladenauflösung', 'Geschäftsauflösung', 'Einzelhandel', 'Deutschland']
    },
    {
        id: 'gastronomie',
        title: 'Gastronomie & Hotelauflösung deutschlandweit',
        iconPlaceholder: 'Gastro Icon',
        image: '/images/b2b-gastro.jpg',
        excerpt: 'Komplettauflösung von Restaurants, Hotels und Großküchen in ganz Deutschland.',
        seoText: 'Gastronomieauflösung bundesweit: Professionelle Räumung von Restaurants und Hotels. Fachgerechte Entsorgung von Küchengeräten, Kühlmittel-Entsorgung nach Umweltvorschriften.',
        details: [
            "Demontage von Großküchengeräten",
            "Umweltgerechte Kühlmittel-Entsorgung",
            "Verwertung von Edelstahl-Inventar",
            "Räumung von Gästebereichen",
            "Besenreine Übergabe"
        ],
        keywords: ['Gastronomieauflösung', 'Hotelauflösung', 'Restaurant', 'Großküche', 'Deutschland']
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
            iconPlaceholder: 'Zeit Icon',
            title: 'Termintreue garantiert',
            text: 'Fixtermine ohne Verzögerung. Pünktliche Projektabwicklung seit über 15 Jahren.'
        },
        {
            iconPlaceholder: 'Schloss Icon',
            title: 'Absolute Diskretion',
            text: 'Verschwiegenheitspflicht für alle Mitarbeiter. Neutrale Fahrzeuge, diskrete Abwicklung.'
        },
        {
            iconPlaceholder: 'Zertifikat Icon',
            title: 'Zertifizierte Entsorgung',
            text: 'Alle Nachweise für Compliance. DSGVO-konforme Aktenvernichtung mit Zertifikat.'
        },
        {
            iconPlaceholder: 'Person Icon',
            title: 'Fester Ansprechpartner',
            text: 'Ein Projektleiter für Ihr gesamtes Projekt. Direkte Kommunikation garantiert.'
        },
        {
            iconPlaceholder: 'Euro Icon',
            title: 'Transparente Festpreise',
            text: 'Verbindliche Angebote ohne versteckte Kosten. Faire, transparente Kalkulation.'
        },
        {
            iconPlaceholder: 'Schild Icon',
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

            {/* Services Section - Kompakt mit SEO */}
            <section id="services-section" className="animate-section py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center mb-12 fade-in-up ${visibleSections.has('services-section') ? 'visible' : ''}`}>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#2C4F5E] mb-4">
                            Unsere B2B-Dienstleistungen für Gewerbekunden
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Professionelle Entrümpelungslösungen für jede Branche - 
                            von der kleinen Büroauflösung bis zur kompletten Werksräumung
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {b2bServicesData.map((service, index) => (
                            <div
                                key={service.id}
                                className={`fade-in-up delay-${(index % 3) + 1}00 ${
                                    visibleSections.has('services-section') ? 'visible' : ''
                                } bg-white rounded-xl shadow-lg hover:shadow-xl transition-all`}
                            >
                                <div className="relative h-48 bg-gradient-to-br from-[#2C4F5E] to-[#C73E3A] rounded-t-xl">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="icon-placeholder icon-placeholder-large bg-white/20">
                                            {service.iconPlaceholder}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#2C4F5E] mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {service.seoText}
                                    </p>
                                    <ul className="space-y-2 mb-6">
                                        {service.details.slice(0, 3).map((detail, idx) => (
                                            <li key={idx} className="flex items-start text-sm">
                                                <svg className="w-5 h-5 text-[#C73E3A] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-700">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href="#b2b-kontakt"
                                        className="inline-flex items-center text-[#C73E3A] font-semibold hover:text-[#B02E2A] transition-colors"
                                    >
                                        Jetzt anfragen
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Service Keywords für SEO */}
                    <div className="mt-12 text-center text-sm text-gray-500">
                        <p>
                            Weitere Suchbegriffe: Firmenauflösung Deutschland | Geschäftsauflösung bundesweit | 
                            Industrieentrümpelung Berlin | Büroräumung Hamburg | Praxisauflösung München | 
                            Lagerauflösung Frankfurt | Betriebsräumung Köln | Gewerberäumung Stuttgart
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-[#2C4F5E] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Warum Unternehmen uns vertrauen
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
                                <div className="icon-placeholder bg-white/20 mb-4">
                                    {benefit.iconPlaceholder}
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
                                project: 'Mehrere Wohnungsauflösungen'
                            },
                            {
                                company: 'TechSolutions GmbH',
                                text: 'Die DSGVO-konforme Aktenvernichtung war perfekt. Alle Dokumente wurden sicher vernichtet.',
                                person: 'Sarah K., Head of Operations',
                                project: 'Büroumzug 500qm'
                            },
                            {
                                company: 'Logistik Nordwest AG',
                                text: '2000qm Lagerhalle in nur 3 Tagen geräumt. Sehr zuverlässig und professionell.',
                                person: 'Michael B., Facility Manager',
                                project: 'Lagerhallenräumung'
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
                        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 space-y-6">
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
                                type="submit"
                                className="w-full bg-[#C73E3A] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#B02E2A] transition-all"
                            >
                                Kostenloses Angebot anfordern
                            </button>
                            
                            <p className="text-xs text-gray-500 text-center">
                                Mit dem Absenden stimmen Sie unserer <a href="/datenschutz" className="text-[#C73E3A] hover:underline">Datenschutzerklärung</a> zu.
                            </p>
                        </form>
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

            {/* SEO Footer Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-sm text-gray-600 max-w-none">
                        <h3 className="text-xl font-bold text-[#2C4F5E] mb-4">
                            Ihr Partner für gewerbliche Entrümpelungen in ganz Deutschland
                        </h3>
                        <p className="mb-4">
                            Die Rümpelschmiede ist Ihr zuverlässiger Partner für gewerbliche Entrümpelungen, 
                            Betriebsauflösungen und Büroräumungen deutschlandweit. Von Hamburg bis München, 
                            von Berlin bis Köln - mit unserem bundesweiten Netzwerk und regionalen Teams 
                            sind wir in allen Bundesländern für Sie da. Über 15 Jahre Erfahrung und mehr als 
                            5.000 erfolgreich abgeschlossene B2B-Projekte sprechen für sich.
                        </p>
                        <p className="mb-4">
                            Unser deutschlandweiter Service umfasst die komplette Abwicklung Ihrer gewerblichen 
                            Räumung: Von der Büroauflösung in Berlin über die Praxisauflösung in München bis 
                            zur Industrieentrümpelung in Hamburg. Wir garantieren DSGVO-konforme Aktenvernichtung 
                            nach DIN 66399, fachgerechte Entsorgung von Sondermüll und eine termingerechte, 
                            besenreine Übergabe - egal wo in Deutschland.
                        </p>
                        <p>
                            Vertrauen Sie auf unsere bundesweite Expertise bei Ihrer nächsten Betriebsauflösung 
                            oder Geschäftsauflösung. Festpreisgarantie, persönlicher Ansprechpartner und 
                            vollständige Dokumentation inklusive. Kontaktieren Sie uns für eine kostenlose 
                            Beratung und ein unverbindliches Angebot - deutschlandweit, schnell und zuverlässig.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}