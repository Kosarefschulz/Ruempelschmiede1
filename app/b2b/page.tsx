'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Icon from '../components/Icon';

interface B2BService {
    id: string;
    title: string;
    icon: string;
    image: string;
    images?: string[];
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
        image: '/images/Gewerbe.png',
        images: [
            '/images/services/b2b/gewerbe1.jpg',
            '/images/services/b2b/gewerbe2.jpg',
            '/images/services/b2b/gewerbe3.jpg',
            '/images/services/b2b/gewerbe4.jpg',
            '/images/services/b2b/gewerbe5.jpg'
        ],
        excerpt: 'Professionelle Betriebsauflösung in ganz Deutschland. Komplettservice für Büros, Praxen und Produktionsstätten.',
        seoText: 'Gewerbeauflösung Deutschland: Komplette Räumung von Bürokomplexen, Produktionsstätten und Geschäftsräumen bundesweit. Über 15 Jahre Erfahrung, Festpreisgarantie, diskrete Abwicklung. Regionale Teams in allen Bundesländern.',
        details: [
            "Bundesweite Komplettauflösung von Geschäftsräumen",
            "Demontage von Maschinen und Betriebseinrichtungen", 
            "Zusammenarbeit mit Insolvenzverwaltern deutschlandweit",
            "Besenreine Übergabe zum Fixtermin",
            "Festpreis mit garantierter Kostentransparenz"
        ],
        keywords: ['Gewerbeauflösung', 'Betriebsauflösung', 'Büroauflösung', 'Deutschland', 'bundesweit'],
        cities: ['Berlin', 'Hamburg', 'München', 'Köln', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dortmund']
    },
    {
        id: 'praxisaufloesung',
        title: 'Praxisauflösung für Ärzte & Zahnärzte',
        icon: 'buero',
        image: '/images/Gewerbe.png',
        images: [
            '/images/services/b2b/praxis1.jpg',
            '/images/services/b2b/praxis2.jpg',
            '/images/services/b2b/praxis3.jpg',
            '/images/services/b2b/praxis4.jpg',
            '/images/services/b2b/praxis5.jpg'
        ],
        excerpt: 'Diskrete Praxisauflösung mit Datenschutz nach DSGVO.',
        seoText: 'Praxisauflösung Deutschland: Spezialisiert auf Arztpraxen, Zahnarztpraxen und medizinische Einrichtungen. DSGVO-konforme Aktenvernichtung, diskrete Abwicklung.',
        details: [
            "Spezialisiert auf medizinische Einrichtungen",
            "DSGVO-konforme Patientenakten-Vernichtung",
            "Fachgerechte Entsorgung von Medizinprodukten", 
            "Ankauf von medizinischen Geräten",
            "Diskrete und schnelle Abwicklung"
        ],
        keywords: ['Praxisauflösung', 'Arztpraxis', 'Zahnarztpraxis', 'DSGVO', 'Deutschland'],
        cities: ['Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dresden', 'Leipzig', 'Hannover', 'Dortmund', 'Essen']
    },
    {
        id: 'messie-entruempelung',
        title: 'Messie Wohnung Entrümpelung deutschlandweit - Diskret & Professionell',
        icon: 'besen',
        image: '/images/Gewerbe.png',
        images: [
            '/images/services/messie-entruempelung_1.jpg',
            '/images/services/messie-entruempelung_2.jpg',
            '/images/services/messie-entruempelung_3.jpg',
            '/images/services/messie-entruempelung_4.jpg',
            '/images/services/messie-entruempelung_5.jpg'
        ],
        excerpt: 'Diskrete Hilfe bei Messie-Syndrom - mit Respekt und Verständnis.',
        seoText: 'Messie-Entrümpelung Deutschland: Diskrete, professionelle Hilfe bei stark vermüllten Wohnungen deutschlandweit. Inklusive Desinfektion, Geruchsneutralisation und Wiederherstellung der Bewohnbarkeit.',
        details: [
            "Deutschlandweiter Service mit lokalem Team",
            "Absolute Diskretion & respektvoller Umgang",
            "Professionelle Desinfektion & Geruchsbeseitigung",
            "Wiederherstellung der vollständigen Bewohnbarkeit",
            "Sicherung wichtiger Dokumente & Erinnerungsstücke"
        ],
        keywords: ['Messie-Entrümpelung', 'Messie-Wohnung', 'Desinfektion', 'Deutschland', 'diskret'],
        cities: ['Bielefeld', 'Münster', 'Osnabrück', 'Paderborn', 'Gütersloh', 'Detmold', 'Minden', 'Herford']
    },
    {
        id: 'keller-dachboden',
        title: 'Kellerentrümpelung & Dachbodenentrümpelung deutschlandweit',
        icon: 'kiste',
        image: '/images/Gewerbe.png',
        images: [
            '/images/services/keller-dachboden_1.jpg',
            '/images/services/keller-dachboden_2.jpg',
            '/images/services/keller-dachboden_3.jpg',
            '/images/services/keller-dachboden_4.jpg',
            '/images/services/keller-dachboden_5.jpg'
        ],
        excerpt: 'Keller & Dachboden entrümpeln - schnell und günstig.',
        seoText: 'Keller- und Dachboden-Entrümpelung Deutschland: Schnelle, gründliche Räumung deutschlandweit. Auch schwer zugängliche Bereiche. Faire Wertanrechnung, Festpreise ab 390€.',
        details: [
            "Deutschlandweiter Service - schnelle Teams vor Ort",
            "Schnelle Durchführung - oft innerhalb 48h",
            "Auch schwer zugängliche Bereiche möglich",
            "Faire Wertanrechnung für Brauchbares",
            "Besenreine, saubere Übergabe"
        ],
        keywords: ['Kellerentrümpelung', 'Dachbodenentrümpelung', 'Entrümpelung', 'Deutschland', 'schnell'],
        cities: ['Nürnberg', 'Augsburg', 'Würzburg', 'Regensburg', 'Ingolstadt', 'Fürth', 'Erlangen', 'Bamberg']
    },
    {
        id: 'lagerraeumung',
        title: 'Lagerräumung & Industriehallen-Entrümpelung deutschlandweit',
        icon: 'lager',
        image: '/images/Gewerbe.png',
        images: [
            '/images/services/b2b/industrie-neu1.jpg',
            '/images/services/b2b/industrie-neu2.jpg',
            '/images/services/b2b/industrie-neu3.jpg',
            '/images/services/b2b/industrie-neu4.jpg',
            '/images/services/b2b/industrie-neu5.jpg'
        ],
        excerpt: 'Professionelle Räumung von Lagerhallen und Industriegebäuden.',
        seoText: 'Lagerräumung Deutschland: Komplettservice für Lagerhallen, Industriegebäude und Produktionsstätten. Maschinendemontage, Schwerlasttransporte, fachgerechte Entsorgung bundesweit.',
        details: [
            "Räumung von Industrie- und Lagerhallen jeder Größe",
            "Professionelle Maschinendemontage und -transport",
            "Verwertung von Metallen und Industriegütern",
            "Spezialentsorgung für Gefahrstoffe",
            "Termingerechte Übergabe für Nachmieter"
        ],
        keywords: ['Lagerräumung', 'Industriehalle', 'Hallenräumung', 'Deutschland', 'Industrie'],
        cities: ['Mannheim', 'Karlsruhe', 'Freiburg', 'Heidelberg', 'Pforzheim', 'Ulm', 'Heilbronn', 'Reutlingen']
    }
];

export default function B2BPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        serviceRequired: '',
        projectSize: '',
        timeline: '',
        message: '',
    });
    
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
    const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});

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

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(() => {
            b2bServicesData.forEach(service => {
                if (service.images && service.images.length > 1) {
                    setCurrentImageIndex(prev => ({
                        ...prev,
                        [service.id]: ((prev[service.id] || 0) + 1) % service.images!.length
                    }));
                }
            });
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    // Simplified navigation
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        console.log('Formulardaten:', formData);
        setFormSubmitted(true);
    };

    const benefits = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Deutschlandweiter Service',
            text: 'Von Hamburg bis München - wir sind überall für Sie da.'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Festpreisgarantie',
            text: 'Transparente Preise mit garantierter Kostensicherheit bundesweit.'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
            title: '15 Jahre Erfahrung',
            text: 'Über 50.000 erfolgreiche Entrümpelungen deutschlandweit.'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
            title: 'Umweltgerecht',
            text: 'Zertifizierte Entsorgung mit Recycling in ganz Deutschland.'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
            ),
            title: '4,9/5 Sterne',
            text: 'Top-Bewertungen von Kunden aus ganz Deutschland.'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Voll versichert',
            text: 'Betriebshaftpflicht bis 5 Mio. Euro deutschlandweit.'
        },
    ];

    return (
        <div className="bg-gray-50 text-gray-700">

            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#1a2b36] via-[#2C4F5E] to-[#1E3A47]">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="inline-block px-6 py-2 mb-6 text-sm font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                            ENTRÜMPELUNG DEUTSCHLANDWEIT SEIT 2009
                        </span>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                            Entrümpelung & Haushaltsauflösung
                            <span className="block text-[#C73E3A] mt-2">deutschlandweit</span>
                        </h1>
                        
                        <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                            Professionelle Entrümpelungen in ganz Deutschland - Berlin, Hamburg, München, Köln 
                            und überall dazwischen. Schnell, sauber, zuverlässig mit Festpreisgarantie.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <a
                                href="tel:+4915755854945"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#C73E3A] rounded-xl shadow-lg hover:bg-[#B02E2A] transition-all"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                015 755854945
                            </a>
                            
                            <a
                                href="#kontakt-formular"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 transition-all"
                            >
                                Kostenloses Angebot anfordern
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {[
                                { value: '15+', label: 'Jahre Erfahrung' },
                                { value: '50.000+', label: 'Entrümpelungen' },
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
                            Professionelle Entrümpelung deutschlandweit - Ihr zuverlässiger Partner
                        </h2>
                        <div className="text-gray-700 space-y-4">
                            <p>
                                Die Rümpel Schmiede ist Ihr spezialisierter Partner für professionelle Entrümpelungen 
                                in ganz Deutschland. Mit über 15 Jahren Erfahrung und einem bundesweiten Netzwerk 
                                bieten wir Lösungen für Haushaltsauflösungen, Gewerbeentrümpelungen, Messie-Wohnungen 
                                und Express-Services - von Hamburg bis München, von Berlin bis Stuttgart.
                            </p>
                            <p>
                                Unser deutschlandweiter Service umfasst die komplette Projektabwicklung: Von der 
                                kostenlosen Erstbesichtigung über die fachgerechte Räumung bis zur besenreinen 
                                Übergabe. Mit regionalen Teams in allen Bundesländern garantieren wir kurze 
                                Reaktionszeiten und termingerechte Ausführung.
                            </p>
                            <p>
                                Besonders wichtig: Wir arbeiten bundesweit umweltgerecht mit zertifizierter Entsorgung 
                                und garantieren faire Wertanrechnung für verwertbare Gegenstände - egal wo in Deutschland.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service-Bereiche - Hauptbereiche */}
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

                                {/* SEO-Text für jeden Service */}
                                {service.id === 'haushaltsaufloesung' && (
                                    <div className="text-gray-700 mb-8 space-y-4">
                                        <div>
                                            <strong>Haushaltsauflösung deutschlandweit</strong> - Wir räumen Ihre Wohnung oder 
                                            Ihr Haus professionell und stressfrei in ganz Deutschland. Von der kostenlosen 
                                            Besichtigung bis zur besenreinen Übergabe erhalten Sie alles aus einer Hand. 
                                            Ob in Berlin, Hamburg, München, Köln oder kleineren Städten - unser bundesweites 
                                            Netzwerk ist überall für Sie da.
                                        </div>
                                        <div>
                                            Bei der <strong>professionellen Wohnungsauflösung</strong> erhalten Sie ein 
                                            transparentes Festpreisangebot mit garantierter Kostensicherheit. Wertvolle Gegenstände wie 
                                            Antiquitäten, Möbel oder Elektrogeräte rechnen wir direkt an oder spenden sie 
                                            auf Wunsch an gemeinnützige Organisationen. Das reduziert Ihre Kosten erheblich.
                                        </div>
                                        <div>
                                            Profitieren Sie von über 15 Jahren Erfahrung und mehr als 50.000 erfolgreichen 
                                            Haushaltsauflösungen deutschlandweit. Unser Service umfasst auch Keller, Dachboden 
                                            und Garage - alles besenrein und termingerecht.
                                        </div>
                                    </div>
                                )}

                                    {service.id === 'gewerbeaufloesung' && (
                                        <div className="text-gray-700 mb-8 space-y-4">
                                            <div>
                                                <strong>Gewerbeauflösung deutschlandweit</strong> - Betriebsauflösungen erfordern 
                                                Erfahrung und absolute Diskretion. Wir räumen Ihre Geschäftsräume, Büros, Praxen 
                                                oder Produktionsstätten termingerecht in ganz Deutschland. Ob Frankfurt, Stuttgart, 
                                                Düsseldorf oder Dresden - wir sind flexibel im Einsatz, auch außerhalb der 
                                                Geschäftszeiten.
                                            </div>
                                            <div>
                                                <strong>DSGVO-konforme Aktenvernichtung</strong> mit Zertifikat inklusive. Verwertbare 
                                                Büromöbel, Inventare und Maschinen kaufen wir bundesweit an oder führen sie dem 
                                                fachgerechten Recycling zu. Das minimiert Ihre Entsorgungskosten und schont die Umwelt.
                                            </div>
                                            <div>
                                                Vertrauen Sie auf unsere Erfahrung aus über 10.000 Gewerbeauflösungen deutschlandweit. 
                                                Minimale Betriebsunterbrechung und diskrete Abwicklung garantiert.
                                            </div>
                                        </div>
                                    )}

                                    {service.id === 'praxisaufloesung' && (
                                        <div className="text-gray-700 mb-8 space-y-4">
                                            <div>
                                                <strong>Praxisauflösung für Ärzte & Zahnärzte</strong> - Spezialisiert auf die 
                                                diskrete Auflösung von Arztpraxen, Zahnarztpraxen und medizinischen Einrichtungen 
                                                deutschlandweit. Wir verstehen die besonderen Anforderungen im Gesundheitswesen und 
                                                garantieren höchste Datenschutzstandards nach DSGVO.
                                            </div>
                                            <div>
                                                <strong>Sichere Patientenakten-Vernichtung</strong> mit Zertifikat und lückenloser 
                                                Dokumentation. Medizinische Geräte und Praxisinventar werden fachgerecht bewertet 
                                                und können angekauft werden. Spezialentsorgung für medizinische Abfälle und 
                                                Medikamente inklusive.
                                            </div>
                                            <div>
                                                Vertrauen Sie auf unsere Expertise bei über 5.000 Praxisauflösungen bundesweit. 
                                                Diskrete Abwicklung auch während der Praxiszeiten möglich.
                                            </div>
                                        </div>
                                    )}

                                    {service.id === 'messie-entruempelung' && (
                                        <div className="text-gray-700 mb-8 space-y-4">
                                            <div>
                                                <strong>Messie-Entrümpelung deutschlandweit</strong> - Wir helfen diskret und 
                                                professionell bei stark vermüllten Wohnungen und Messie-Haushalten in ganz 
                                                Deutschland. Unser spezialisiertes Team arbeitet respektvoll, vertraulich und 
                                                absolut diskret. Von Nord nach Süd, von Ost nach West - wir sind deutschlandweit 
                                                für Sie da.
                                            </div>
                                            <div>
                                                <strong>Professionelle Messie-Sanierung</strong> inklusive Grundreinigung, 
                                                Desinfektion und Geruchsneutralisation. Wichtige Dokumente, Erinnerungsstücke 
                                                und Wertgegenstände werden selbstverständlich gesichert. Nach unserer Arbeit 
                                                ist die Wohnung wieder vollständig bewohnbar.
                                            </div>
                                            <div>
                                                Über 15 Jahre Erfahrung in der sensiblen Messie-Entrümpelung deutschlandweit. 
                                                Wir arbeiten mit respektvollem Verständnis und größtem Respekt für Ihre Situation.
                                            </div>
                                        </div>
                                    )}

                                    {service.id === 'keller-dachboden' && (
                                        <div className="text-gray-700 mb-8 space-y-4">
                                            <div>
                                                <strong>Keller- und Dachboden-Entrümpelung deutschlandweit</strong> - Keller und 
                                                Dachböden werden über die Jahre oft zur Rumpelkammer. Wir schaffen wieder Platz 
                                                und Ordnung - schnell, gründlich und zu fairen Preisen. Egal ob in Leipzig, 
                                                Nürnberg, Bremen oder Hannover - unser deutschlandweites Netzwerk ist für Sie da.
                                            </div>
                                            <div>
                                                <strong>Auch schwer zugängliche Bereiche</strong>, enge Treppen oder feuchte Keller 
                                                sind für unser erfahrenes Team problemlos machbar. Brauchbare Gegenstände, Werkzeuge 
                                                oder Sammlerstücke werden fair angerechnet und reduzieren so Ihre Kosten.
                                            </div>
                                            <div>
                                                Profitieren Sie von unserer Erfahrung aus zehntausenden Kellerentrümpelungen 
                                                deutschlandweit. Schnelle Durchführung oft innerhalb 48 Stunden möglich.
                                            </div>
                                        </div>
                                    )}

                                    {service.id === 'lagerraeumung' && (
                                        <div className="text-gray-700 mb-8 space-y-4">
                                            <div>
                                                <strong>Lagerräumung & Industriehallen deutschlandweit</strong> - Professionelle 
                                                Räumung von Lagerhallen, Industriegebäuden und Produktionsstätten in ganz Deutschland. 
                                                Mit schwerem Gerät und erfahrenem Personal bewältigen wir auch große Projekte 
                                                termingerecht und effizient.
                                            </div>
                                            <div>
                                                <strong>Komplettservice inklusive Maschinendemontage</strong> und Schwerlasttransport. 
                                                Wertvolle Metalle, Maschinen und Industriegüter werden fachgerecht bewertet und 
                                                verwertet. Spezialentsorgung für Gefahrstoffe mit allen erforderlichen Nachweisen.
                                            </div>
                                            <div>
                                                Über 20 Jahre Erfahrung in der Industrieräumung deutschlandweit. Von der kleinen 
                                                Lagerhalle bis zum großen Industriekomplex - wir sind Ihr zuverlässiger Partner.
                                            </div>
                                        </div>
                                    )}

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
                                        href="#kontakt-formular"
                                        className="inline-flex items-center justify-center px-6 py-3 bg-[#C73E3A] text-white font-semibold rounded-lg hover:bg-[#B02E2A] transition-all"
                                    >
                                        Kostenvoranschlag anfordern
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </a>
                                    <a
                                        href="tel:+4915755854945"
                                        className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#C73E3A] text-[#C73E3A] font-semibold rounded-lg hover:bg-[#C73E3A] hover:text-white transition-all"
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        Sofort anrufen
                                    </a>
                                </div>
                            </div>

                            {/* Image Carousel */}
                            <div className={index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}>
                                <div className="relative h-[500px] rounded-xl overflow-hidden group" style={{ position: 'relative' }}>
                                    {/* Images */}
                                    {service.images && service.images.length > 0 ? (
                                        <>
                                            <Image 
                                                src={service.images[currentImageIndex[service.id] || 0]}
                                                alt={`${service.title} - Bild ${(currentImageIndex[service.id] || 0) + 1}`}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                                                onError={(e) => {
                                                    console.error(`Failed to load image: ${service.images![currentImageIndex[service.id] || 0]}`);
                                                    const imgElement = e.target as HTMLImageElement;
                                                    imgElement.src = '/images/placeholder.jpg';
                                                }}
                                            />
                                            
                                            {/* Navigation Arrows */}
                                            {service.images.length > 1 && (
                                                <>
                                                    <button
                                                        onClick={() => {
                                                            const currentIdx = currentImageIndex[service.id] || 0;
                                                            const newIdx = currentIdx === 0 ? service.images!.length - 1 : currentIdx - 1;
                                                            setCurrentImageIndex(prev => ({ ...prev, [service.id]: newIdx }));
                                                        }}
                                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                                        aria-label="Vorheriges Bild"
                                                    >
                                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                        </svg>
                                                    </button>
                                                    
                                                    <button
                                                        onClick={() => {
                                                            const currentIdx = currentImageIndex[service.id] || 0;
                                                            const newIdx = (currentIdx + 1) % service.images!.length;
                                                            setCurrentImageIndex(prev => ({ ...prev, [service.id]: newIdx }));
                                                        }}
                                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                                        aria-label="Nächstes Bild"
                                                    >
                                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                    
                                                    {/* Image Indicators */}
                                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                                        {service.images.map((_, idx) => (
                                                            <button
                                                                key={idx}
                                                                onClick={() => setCurrentImageIndex(prev => ({ ...prev, [service.id]: idx }))}
                                                                className={`w-2 h-2 rounded-full transition-all ${
                                                                    (currentImageIndex[service.id] || 0) === idx 
                                                                        ? 'w-8 bg-white' 
                                                                        : 'bg-white/50 hover:bg-white/70'
                                                                }`}
                                                                aria-label={`Bild ${idx + 1}`}
                                                            />
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            <Image 
                                                src={service.image}
                                                alt={`${service.title} - Service Bild`}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                                                onError={(e) => {
                                                    console.error(`Failed to load image: ${service.image}`);
                                                    const imgElement = e.target as HTMLImageElement;
                                                    imgElement.src = '/images/placeholder.jpg';
                                                }}
                                            />
                                            {/* Light overlay for better brightness */}
                                            <div className="absolute inset-0 bg-black/20"></div>
                                            
                                            {/* Icon overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                                    <Icon name={service.icon} size={64} color="white" />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    
                                    {/* Service Title Overlay */}
                                    <div className="absolute top-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-3">
                                        <h3 className="text-white font-bold text-lg">{service.title.split(' - ')[0]}</h3>
                                    </div>
                                    
                                    {/* Cities Overlay */}
                                    <div className="absolute bottom-16 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4">
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

            {/* Städte-Bereich */}
            <section className="py-16 bg-gradient-to-br from-[#1E3A47] to-[#2C4F5E] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">
                            Deutschlandweit für Sie da
                        </h2>
                        <p className="text-xl opacity-90 max-w-3xl mx-auto">
                            Von Hamburg bis München, von Berlin bis Köln - wir sind in allen großen Städten 
                            und deren Umgebung für Sie im Einsatz.
                        </p>
                    </div>

                    {/* Hauptstädte */}
                    <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
                        <a href="/entruempelung-berlin" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                            <h3 className="font-bold text-lg">Berlin</h3>
                            <p className="text-sm opacity-80">3,7 Mio. Einwohner</p>
                        </a>
                        <a href="/entruempelung-hamburg" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                            <h3 className="font-bold text-lg">Hamburg</h3>
                            <p className="text-sm opacity-80">1,9 Mio. Einwohner</p>
                        </a>
                        <a href="/entruempelung-muenchen" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                            <h3 className="font-bold text-lg">München</h3>
                            <p className="text-sm opacity-80">1,5 Mio. Einwohner</p>
                        </a>
                        <a href="/entruempelung-koeln" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                            <h3 className="font-bold text-lg">Köln</h3>
                            <p className="text-sm opacity-80">1,1 Mio. Einwohner</p>
                        </a>
                        <a href="/entruempelung-frankfurt" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                            <h3 className="font-bold text-lg">Frankfurt am Main</h3>
                            <p className="text-sm opacity-80">750.000 Einwohner</p>
                        </a>
                        <a href="/entruempelung-stuttgart" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                            <h3 className="font-bold text-lg">Stuttgart</h3>
                            <p className="text-sm opacity-80">630.000 Einwohner</p>
                        </a>
                        <a href="/entruempelung-duesseldorf" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                            <h3 className="font-bold text-lg">Düsseldorf</h3>
                            <p className="text-sm opacity-80">620.000 Einwohner</p>
                        </a>
                        <a href="/entruempelung-dortmund" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                            <h3 className="font-bold text-lg">Dortmund</h3>
                            <p className="text-sm opacity-80">590.000 Einwohner</p>
                        </a>
                        <a href="/entruempelung-essen" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                            <h3 className="font-bold text-lg">Essen</h3>
                            <p className="text-sm opacity-80">580.000 Einwohner</p>
                        </a>
                        <a href="/entruempelung-leipzig" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                            <h3 className="font-bold text-lg">Leipzig</h3>
                            <p className="text-sm opacity-80">600.000 Einwohner</p>
                        </a>
                        <a href="/entruempelung-bremen" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                            <h3 className="font-bold text-lg">Bremen</h3>
                            <p className="text-sm opacity-80">570.000 Einwohner</p>
                        </a>
                        <a href="/entruempelung-dresden" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                            <h3 className="font-bold text-lg">Dresden</h3>
                            <p className="text-sm opacity-80">560.000 Einwohner</p>
                        </a>
                        <a href="/entruempelung-hannover" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                            <h3 className="font-bold text-lg">Hannover</h3>
                            <p className="text-sm opacity-80">540.000 Einwohner</p>
                        </a>
                        <a href="/entruempelung-nuernberg" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                            <h3 className="font-bold text-lg">Nürnberg</h3>
                            <p className="text-sm opacity-80">520.000 Einwohner</p>
                        </a>
                        <a href="/entruempelung-duisburg" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                            <h3 className="font-bold text-lg">Duisburg</h3>
                            <p className="text-sm opacity-80">500.000 Einwohner</p>
                        </a>
                        <a href="/entruempelung-bochum" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                            <h3 className="font-bold text-lg">Bochum</h3>
                            <p className="text-sm opacity-80">365.000 Einwohner</p>
                        </a>
                        <a href="/entruempelung-wuppertal" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                            <h3 className="font-bold text-lg">Wuppertal</h3>
                            <p className="text-sm opacity-80">355.000 Einwohner</p>
                        </a>
                        <a href="/entruempelung-bielefeld" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                            <h3 className="font-bold text-lg">Bielefeld</h3>
                            <p className="text-sm opacity-80">340.000 Einwohner</p>
                        </a>
                        <a href="/entruempelung-bonn" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                            <h3 className="font-bold text-lg">Bonn</h3>
                            <p className="text-sm opacity-80">330.000 Einwohner</p>
                        </a>
                        <a href="/entruempelung-muenster" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
                            <h3 className="font-bold text-lg">Münster</h3>
                            <p className="text-sm opacity-80">315.000 Einwohner</p>
                        </a>
                    </div>

                    {/* Weitere Städte */}
                    <div className="text-center">
                        <p className="text-lg mb-4 opacity-90">
                            Sowie in vielen weiteren Städten:
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 text-sm">
                            {[
                                'Augsburg', 'Aachen', 'Braunschweig', 'Chemnitz', 'Kiel', 'Magdeburg', 
                                'Freiburg', 'Krefeld', 'Lübeck', 'Oberhausen', 'Erfurt', 'Mainz', 
                                'Rostock', 'Kassel', 'Hagen', 'Saarbrücken', 'Hamm', 'Potsdam',
                                'Ludwigshafen', 'Oldenburg', 'Mülheim', 'Osnabrück', 'Leverkusen',
                                'Heidelberg', 'Solingen', 'Darmstadt', 'Herne', 'Neuss', 'Regensburg',
                                'Paderborn', 'Ingolstadt', 'Würzburg', 'Wolfsburg', 'Ulm', 'Heilbronn'
                            ].map((city, index) => (
                                <span key={index} className="bg-white/10 px-3 py-1 rounded-full">
                                    {city}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#2C4F5E] mb-4">
                            Warum Kunden uns deutschlandweit vertrauen
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            6 gute Gründe für die Rümpel Schmiede als Ihren Partner 
                            für Entrümpelungen deutschlandweit
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-12 h-12 bg-[#C73E3A] rounded-xl flex items-center justify-center mb-4 text-white">
                                    {typeof benefit.icon === 'string' ? (
                                        <img 
                                            src={benefit.icon} 
                                            alt="Benefit Icon"
                                            className="w-8 h-8 filter brightness-0 invert"
                                        />
                                    ) : (
                                        benefit.icon
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-[#2C4F5E] mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-[#2C4F5E] text-center mb-12">
                        So läuft Ihre Entrümpelung deutschlandweit ab
                    </h2>
                    
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { 
                                step: '1', 
                                title: 'Anfrage & Beratung', 
                                text: 'Kostenlose Erstberatung innerhalb 24h deutschlandweit.' 
                            },
                            { 
                                step: '2', 
                                title: 'Besichtigung', 
                                text: 'Vor-Ort-Termin zur Bestandsaufnahme. Verbindliches Festpreisangebot.' 
                            },
                            { 
                                step: '3', 
                                title: 'Durchführung', 
                                text: 'Professionelle Räumung zum Wunschtermin. Auch am Wochenende.' 
                            },
                            { 
                                step: '4', 
                                title: 'Übergabe', 
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
                        Das sagen unsere Kunden deutschlandweit
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Familie Müller',
                                text: 'Sehr professionelle Haushaltsauflösung. Wertanrechnung war fair und die Übergabe pünktlich.',
                                person: 'Maria M., Berlin',
                                service: 'Haushaltsauflösung 4-Zimmer-Wohnung'
                            },
                            {
                                name: 'Schmidt GmbH',
                                text: 'Büroauflösung lief perfekt. DSGVO-konforme Aktenvernichtung war sehr wichtig für uns.',
                                person: 'Thomas S., München',
                                service: 'Gewerbeauflösung 300qm'
                            },
                            {
                                name: 'Familie Weber',
                                text: 'Express-Service war ein Lebensretter. In 48h war alles erledigt - deutschlandweit top!',
                                person: 'Anna W., Hamburg',
                                service: 'Express-Entrümpelung'
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
                                    <p className="font-semibold text-[#2C4F5E]">{testimonial.name}</p>
                                    <p className="text-sm text-gray-600">{testimonial.person}</p>
                                    <p className="text-xs text-gray-500 mt-1">Service: {testimonial.service}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section id="kontakt-formular" className="animate-section py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#2C4F5E] mb-4">
                            Jetzt unverbindliche Anfrage stellen
                        </h2>
                        <p className="text-lg text-gray-600">
                            Kostenlose Beratung für Ihre Entrümpelung deutschlandweit - 
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
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Name*
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
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
                                        placeholder="z.B. 3-Zimmer-Wohnung"
                                        value={formData.projectSize}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C73E3A] focus:border-transparent"
                                    />
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
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Nachricht*
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    value={formData.message}
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
                        <a href="tel:+4915755854945" className="bg-[#2C4F5E] text-white p-6 rounded-xl text-center hover:bg-[#1E3A47] transition-all">
                            <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <p className="text-sm mb-1">Deutschlandweite Hotline (Mo-Fr 7-19 Uhr)</p>
                            <p className="text-xl font-bold">015 755854945</p>
                        </a>
                        
                        <a href="mailto:info@ruempelschmiede-bielefeld.de" className="bg-[#2C4F5E] text-white p-6 rounded-xl text-center hover:bg-[#1E3A47] transition-all">
                            <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
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
                    <div className="text-gray-600 max-w-none space-y-4">
                        <h3 className="text-xl font-bold text-[#2C4F5E] mb-4">
                            Entrümpelung deutschlandweit - Ihr Partner in allen Bundesländern
                        </h3>
                        <p>
                            Die Rümpel Schmiede ist Ihr zuverlässiger Partner für professionelle Entrümpelungen 
                            in ganz Deutschland. Von Hamburg über Berlin bis München, von Köln über Frankfurt 
                            bis Stuttgart - mit unserem bundesweiten Netzwerk und regionalen Teams sind wir 
                            in allen 16 Bundesländern für Sie da. Über 15 Jahre Erfahrung und mehr als 50.000 
                            erfolgreich abgeschlossene Entrümpelungen sprechen für sich.
                        </p>
                        <p>
                            Unser deutschlandweiter Service umfasst die komplette Abwicklung Ihrer Entrümpelung: 
                            Von der Haushaltsauflösung in Berlin über die Messie-Sanierung in München bis zur 
                            Express-Entrümpelung in Hamburg. Auch in Düsseldorf, Bremen, Hannover, Dresden, 
                            Leipzig, Nürnberg und allen weiteren deutschen Städten garantieren wir 
                            umweltgerechte Entsorgung, faire Wertanrechnung und termingerechte, besenreine Übergabe.
                        </p>
                        <p>
                            Vertrauen Sie auf unsere bundesweite Expertise bei Ihrer nächsten Entrümpelung. 
                            Ob in Nordrhein-Westfalen, Bayern, Baden-Württemberg oder einem anderen Bundesland - 
                            Festpreisgarantie, persönlicher Ansprechpartner und vollständige Dokumentation 
                            inklusive. Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches 
                            Angebot - deutschlandweit, schnell und zuverlässig.
                        </p>
                        
                        {/* Versteckte SEO Keywords */}
                        <div className="mt-8 text-xs text-gray-400">
                            <p>
                                Suchbegriffe: Entrümpelung Deutschland, Haushaltsauflösung deutschlandweit, 
                                Wohnungsauflösung Hamburg Berlin München Köln Frankfurt Stuttgart Düsseldorf Bremen, 
                                Messie-Entrümpelung bundesweit, Kellerentrümpelung Deutschland, Express-Entrümpelung NRW Bayern BW, 
                                Gewerbeentrümpelung deutschlandweit, Dachbodenentrümpelung Deutschland
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}