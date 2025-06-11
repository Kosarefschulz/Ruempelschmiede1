'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Icon from '../components/Icon';

interface Service {
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

const servicesData: Service[] = [
    {
        id: 'haushaltsaufloesung',
        title: 'Haushaltsauflösung deutschlandweit - Professionelle Wohnungsauflösung',
        icon: 'haus',
        image: '/images/Gewerbe.png',
        excerpt: 'Komplette Räumung mit Wertanrechnung - schnell, sauber & günstig.',
        seoText: 'Haushaltsauflösung Deutschland: Professionelle Wohnungsauflösung deutschlandweit. Von der kostenlosen Besichtigung bis zur besenreinen Übergabe. Faire Wertanrechnung, Festpreise ab 890€.',
        details: [
            "Deutschlandweiter Service - alle Städte & Regionen",
            "Kostenlose Besichtigung & verbindlicher Festpreis", 
            "Komplettservice inkl. Keller, Dachboden & Garage",
            "Faire Wertanrechnung für verwertbare Gegenstände",
            "Besenreine Übergabe inkl. Endreinigung"
        ],
        keywords: ['Haushaltsauflösung', 'Wohnungsauflösung', 'Entrümpelung', 'Deutschland', 'bundesweit'],
        cities: ['Berlin', 'Hamburg', 'München', 'Köln', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Bremen']
    },
    {
        id: 'gewerbeaufloesung',
        title: 'Gewerbeauflösung deutschlandweit - Büroauflösung & Betriebsauflösung',
        icon: 'buero',
        image: '/images/Gewerbe.png',
        excerpt: 'Büros, Praxen, Läden & Lagerhallen professionell räumen.',
        seoText: 'Gewerbeauflösung Deutschland: Betriebsauflösungen und Büroräumungen deutschlandweit. DSGVO-konforme Aktenvernichtung, flexible Termine, auch außerhalb der Geschäftszeiten.',
        details: [
            "Deutschlandweiter 24/7 Service - flexible Termine",
            "DSGVO-konforme Aktenvernichtung mit Zertifikat",
            "Ankauf von Inventar, Möbeln & Maschinen", 
            "Minimale Betriebsunterbrechung garantiert",
            "Termingerechte, besenreine Übergabe"
        ],
        keywords: ['Gewerbeauflösung', 'Büroauflösung', 'Betriebsauflösung', 'Deutschland', 'DSGVO'],
        cities: ['Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dresden', 'Leipzig', 'Hannover', 'Dortmund', 'Essen']
    },
    {
        id: 'messie-entruempelung',
        title: 'Messie Wohnung Entrümpelung deutschlandweit - Diskret & Professionell',
        icon: 'besen',
        image: '/images/Gewerbe.png',
        excerpt: 'Diskrete Hilfe bei Messie-Syndrom - ohne Vorurteile.',
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
        id: 'express-service',
        title: 'Express Entrümpelung 48h deutschlandweit - 24/7 Notfall-Service',
        icon: 'blitz',
        image: '/images/Gewerbe.png',
        excerpt: 'Garantierte Entrümpelung in 48 Stunden - bundesweit.',
        seoText: 'Express-Entrümpelung Deutschland: Garantierte Räumung innerhalb 48 Stunden deutschlandweit. 24/7 Notfall-Service für dringende Fälle, Räumungsklagen oder plötzliche Todesfälle.',
        details: [
            "Deutschlandweit garantiert in 48 Stunden",
            "Sofort-Besichtigung noch am gleichen Tag",
            "Bundesweites Express-Team im Dauereinsatz",
            "Volle Servicequalität trotz Zeitdruck",
            "24/7 deutschlandweit erreichbar"
        ],
        keywords: ['Express-Entrümpelung', 'Notfall-Service', '48h', 'Deutschland', 'schnell'],
        cities: ['Mannheim', 'Karlsruhe', 'Freiburg', 'Heidelberg', 'Pforzheim', 'Ulm', 'Heilbronn', 'Reutlingen']
    }
];

export default function LeistungenPage() {
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

    // Simplified navigation
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.substring(1);
            if (hash && servicesData.find(s => s.id === hash)) {
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
            icon: '/icons/euro-icon.svg',
            title: 'Deutschlandweiter Service',
            text: 'Von Hamburg bis München - wir sind überall für Sie da.'
        },
        {
            icon: '/icons/euro-icon.svg',
            title: 'Festpreisgarantie',
            text: 'Transparente Preise ohne versteckte Kosten bundesweit.'
        },
        {
            icon: '/icons/award-icon.svg',
            title: '15 Jahre Erfahrung',
            text: 'Über 50.000 erfolgreiche Entrümpelungen deutschlandweit.'
        },
        {
            icon: '/icons/leaf-icon.svg',
            title: 'Umweltgerecht',
            text: 'Zertifizierte Entsorgung mit Recycling in ganz Deutschland.'
        },
        {
            icon: '/icons/star-icon.svg',
            title: '4,9/5 Sterne',
            text: 'Top-Bewertungen von Kunden aus ganz Deutschland.'
        },
        {
            icon: '/icons/shield-icon.svg',
            title: 'Voll versichert',
            text: 'Betriebshaftpflicht bis 5 Mio. Euro deutschlandweit.'
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
                                href="tel:+4952199999900"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#C73E3A] rounded-xl shadow-lg hover:bg-[#B02E2A] transition-all"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                0521 / 1200 510
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
                        <div className="prose prose-lg text-gray-700">
                            <p className="mb-4">
                                Die Rümpelschmiede ist Ihr spezialisierter Partner für professionelle Entrümpelungen 
                                in ganz Deutschland. Mit über 15 Jahren Erfahrung und einem bundesweiten Netzwerk 
                                bieten wir Lösungen für Haushaltsauflösungen, Gewerbeentrümpelungen, Messie-Wohnungen 
                                und Express-Services - von Hamburg bis München, von Berlin bis Stuttgart.
                            </p>
                            <p className="mb-4">
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
            {servicesData.map((service, index) => (
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
                                <div className="prose prose-lg text-gray-700 mb-8">
                                    {service.id === 'haushaltsaufloesung' && (
                                        <>
                                            <p className="mb-4">
                                                <strong>Haushaltsauflösung deutschlandweit</strong> - Wir räumen Ihre Wohnung oder 
                                                Ihr Haus professionell und stressfrei in ganz Deutschland. Von der kostenlosen 
                                                Besichtigung bis zur besenreinen Übergabe erhalten Sie alles aus einer Hand. 
                                                Ob in Berlin, Hamburg, München, Köln oder kleineren Städten - unser bundesweites 
                                                Netzwerk ist überall für Sie da.
                                            </p>
                                            <p className="mb-4">
                                                Bei der <strong>professionellen Wohnungsauflösung</strong> erhalten Sie ein 
                                                transparentes Festpreisangebot ohne versteckte Kosten. Wertvolle Gegenstände wie 
                                                Antiquitäten, Möbel oder Elektrogeräte rechnen wir direkt an oder spenden sie 
                                                auf Wunsch an gemeinnützige Organisationen. Das reduziert Ihre Kosten erheblich.
                                            </p>
                                            <p>
                                                Profitieren Sie von über 15 Jahren Erfahrung und mehr als 50.000 erfolgreichen 
                                                Haushaltsauflösungen deutschlandweit. Unser Service umfasst auch Keller, Dachboden 
                                                und Garage - alles besenrein und termingerecht.
                                            </p>
                                        </>
                                    )}

                                    {service.id === 'gewerbeaufloesung' && (
                                        <>
                                            <p className="mb-4">
                                                <strong>Gewerbeauflösung deutschlandweit</strong> - Betriebsauflösungen erfordern 
                                                Erfahrung und absolute Diskretion. Wir räumen Ihre Geschäftsräume, Büros, Praxen 
                                                oder Produktionsstätten termingerecht in ganz Deutschland. Ob Frankfurt, Stuttgart, 
                                                Düsseldorf oder Dresden - wir sind flexibel im Einsatz, auch außerhalb der 
                                                Geschäftszeiten.
                                            </p>
                                            <p className="mb-4">
                                                <strong>DSGVO-konforme Aktenvernichtung</strong> mit Zertifikat inklusive. Verwertbare 
                                                Büromöbel, Inventare und Maschinen kaufen wir bundesweit an oder führen sie dem 
                                                fachgerechten Recycling zu. Das minimiert Ihre Entsorgungskosten und schont die Umwelt.
                                            </p>
                                            <p>
                                                Vertrauen Sie auf unsere Erfahrung aus über 10.000 Gewerbeauflösungen deutschlandweit. 
                                                Minimale Betriebsunterbrechung und diskrete Abwicklung garantiert.
                                            </p>
                                        </>
                                    )}

                                    {service.id === 'messie-entruempelung' && (
                                        <>
                                            <p className="mb-4">
                                                <strong>Messie-Entrümpelung deutschlandweit</strong> - Wir helfen diskret und 
                                                professionell bei stark vermüllten Wohnungen und Messie-Haushalten in ganz 
                                                Deutschland. Unser spezialisiertes Team arbeitet respektvoll, vertraulich und 
                                                absolut diskret. Von Nord nach Süd, von Ost nach West - wir sind deutschlandweit 
                                                für Sie da.
                                            </p>
                                            <p className="mb-4">
                                                <strong>Professionelle Messie-Sanierung</strong> inklusive Grundreinigung, 
                                                Desinfektion und Geruchsneutralisation. Wichtige Dokumente, Erinnerungsstücke 
                                                und Wertgegenstände werden selbstverständlich gesichert. Nach unserer Arbeit 
                                                ist die Wohnung wieder vollständig bewohnbar.
                                            </p>
                                            <p>
                                                Über 15 Jahre Erfahrung in der sensiblen Messie-Entrümpelung deutschlandweit. 
                                                Wir arbeiten ohne Vorurteile und mit größtem Respekt für Ihre Situation.
                                            </p>
                                        </>
                                    )}

                                    {service.id === 'keller-dachboden' && (
                                        <>
                                            <p className="mb-4">
                                                <strong>Keller- und Dachboden-Entrümpelung deutschlandweit</strong> - Keller und 
                                                Dachböden werden über die Jahre oft zur Rumpelkammer. Wir schaffen wieder Platz 
                                                und Ordnung - schnell, gründlich und zu fairen Preisen. Egal ob in Leipzig, 
                                                Nürnberg, Bremen oder Hannover - unser deutschlandweites Netzwerk ist für Sie da.
                                            </p>
                                            <p className="mb-4">
                                                <strong>Auch schwer zugängliche Bereiche</strong>, enge Treppen oder feuchte Keller 
                                                sind für unser erfahrenes Team kein Problem. Brauchbare Gegenstände, Werkzeuge 
                                                oder Sammlerstücke werden fair angerechnet und reduzieren so Ihre Kosten.
                                            </p>
                                            <p>
                                                Profitieren Sie von unserer Erfahrung aus zehntausenden Kellerentrümpelungen 
                                                deutschlandweit. Schnelle Durchführung oft innerhalb 48 Stunden möglich.
                                            </p>
                                        </>
                                    )}

                                    {service.id === 'express-service' && (
                                        <>
                                            <p className="mb-4">
                                                <strong>Express-Entrümpelung deutschlandweit</strong> - Wenn es schnell gehen muss: 
                                                Unser Express-Service garantiert die komplette Entrümpelung innerhalb von 48 Stunden 
                                                nach Beauftragung in ganz Deutschland. Egal ob in Berlin, München, Hamburg oder 
                                                im ländlichen Raum - unser Express-Team ist bundesweit im Einsatz.
                                            </p>
                                            <p className="mb-4">
                                                <strong>Ideal bei kurzfristigen Situationen</strong> wie Wohnungsübergaben, 
                                                drohenden Räumungsklagen oder plötzlichen Todesfällen. Trotz Zeitdruck arbeiten 
                                                wir gründlich, professionell und mit der gewohnten Sorgfalt deutschlandweit.
                                            </p>
                                            <p>
                                                Unser Express-Team ist 24/7 deutschlandweit für Sie erreichbar. Sofort-Besichtigung 
                                                noch am gleichen Tag in ganz Deutschland möglich.
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
                                        href="#kontakt-formular"
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
                                    <div className="absolute inset-0 bg-black/20"></div>
                                    
                                    {/* Icon overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                            <Icon name={service.icon} size={64} color="white" />
                                        </div>
                                    </div>
                                    
                                    {/* Overlay mit Städten */}
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
                        Deutschlandweite Entrümpelung - Wir sind in Ihrer Nähe
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
                            href="#kontakt-formular"
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
                            Warum Kunden uns deutschlandweit vertrauen
                        </h2>
                        <p className="text-lg text-white/80 max-w-3xl mx-auto">
                            6 gute Gründe für die Rümpelschmiede als Ihren Partner 
                            für Entrümpelungen deutschlandweit
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                            >
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                                    {benefit.iconPlaceholder.endsWith('.svg') ? (
                                        <img 
                                            src={benefit.iconPlaceholder} 
                                            alt="Benefit Icon"
                                            className="w-8 h-8 filter brightness-0 invert"
                                        />
                                    ) : (
                                        <span className="text-white text-xs text-center">
                                            {benefit.iconPlaceholder}
                                        </span>
                                    )}
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
                    <div className={`text-center mb-12 fade-in-up ${visibleSections.has('kontakt-formular') ? 'visible' : ''}`}>
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
                                        {servicesData.map(s => (
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
                        <a href="tel:+4952199999900" className="bg-[#2C4F5E] text-white p-6 rounded-xl text-center hover:bg-[#1E3A47] transition-all">
                            <div className="icon-placeholder bg-white/20 mx-auto mb-3">
                                Telefon
                            </div>
                            <p className="text-sm mb-1">Deutschlandweite Hotline (Mo-Fr 7-19 Uhr)</p>
                            <p className="text-xl font-bold">0521 / 1200 510</p>
                        </a>
                        
                        <a href="mailto:info@ruempelschmiede-bielefeld.de" className="bg-[#2C4F5E] text-white p-6 rounded-xl text-center hover:bg-[#1E3A47] transition-all">
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
                            Entrümpelung deutschlandweit - Ihr Partner in allen Bundesländern
                        </h3>
                        <p className="mb-4">
                            Die Rümpelschmiede ist Ihr zuverlässiger Partner für professionelle Entrümpelungen 
                            in ganz Deutschland. Von Hamburg über Berlin bis München, von Köln über Frankfurt 
                            bis Stuttgart - mit unserem bundesweiten Netzwerk und regionalen Teams sind wir 
                            in allen 16 Bundesländern für Sie da. Über 15 Jahre Erfahrung und mehr als 50.000 
                            erfolgreich abgeschlossene Entrümpelungen sprechen für sich.
                        </p>
                        <p className="mb-4">
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