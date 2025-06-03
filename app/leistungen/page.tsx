'use client'
import { useState, useEffect } from 'react'

interface Service {
    id: string;
    title: string;
    iconPlaceholder: string;
    shortDescription: string;
    fullDescription: string;
    keyBenefits: string[];
    processSteps: string[];
    priceInfo: string;
}

const servicesData: Service[] = [
    {
        id: 'haushaltsaufloesung',
        title: 'Haushaltsauflösungen',
        iconPlaceholder: 'Haus Icon',
        shortDescription: 'Komplette Räumung mit Wertanrechnung.',
        fullDescription: `Wir räumen Ihre Wohnung oder Ihr Haus professionell und stressfrei. Von der kostenlosen Besichtigung bis zur besenreinen Übergabe - alles aus einer Hand.

Bei uns erhalten Sie ein transparentes Festpreisangebot ohne versteckte Kosten. Wertvolle Gegenstände rechnen wir direkt an oder spenden sie auf Wunsch.`,
        keyBenefits: [
            'Kostenlose Besichtigung & Festpreis',
            'Komplettservice inkl. Keller & Dachboden',
            'Wertanrechnung möglich',
            'Besenreine Übergabe'
        ],
        processSteps: [
            'Besichtigung innerhalb 24-48h',
            'Festpreisangebot',
            'Durchführung zum Wunschtermin',
            'Besenreine Übergabe'
        ],
        priceInfo: 'Ab 890€ für 2-Zimmer-Wohnung'
    },
    {
        id: 'gewerbeaufloesung',
        title: 'Gewerbeauflösungen',
        iconPlaceholder: 'Büro Icon',
        shortDescription: 'Büros, Praxen & Läden professionell räumen.',
        fullDescription: `Betriebsauflösungen erfordern Erfahrung und Diskretion. Wir räumen Ihre Geschäftsräume termingerecht - auch außerhalb der Geschäftszeiten.

DSGVO-konforme Aktenvernichtung inklusive Nachweis. Verwertbare Inventare und Maschinen kaufen wir an oder führen sie dem Recycling zu.`,
        keyBenefits: [
            'Flexible Termine (auch nachts/Wochenende)',
            'DSGVO-konforme Aktenvernichtung',
            'Ankauf von Inventar möglich',
            'Minimale Betriebsunterbrechung'
        ],
        processSteps: [
            'Bestandsaufnahme vor Ort',
            'Maßgeschneidertes Konzept',
            'Durchführung zum Wunschtermin',
            'Übergabe mit Dokumentation'
        ],
        priceInfo: 'Individuelles Angebot nach Besichtigung'
    },
    {
        id: 'messie-entruempelung',
        title: 'Messie-Wohnungen',
        iconPlaceholder: 'Besen Icon',
        shortDescription: 'Diskrete Hilfe bei besonderen Herausforderungen.',
        fullDescription: `Wir helfen diskret und professionell bei stark vermüllten Wohnungen. Unser spezialisiertes Team arbeitet respektvoll und vertraulich.

Inklusive Grundreinigung, Desinfektion und Geruchsneutralisation. Wichtige Dokumente und Wertgegenstände werden gesichert.`,
        keyBenefits: [
            'Absolute Diskretion',
            'Spezialisiertes Team',
            'Desinfektion & Geruchsbeseitigung',
            'Wiederherstellung der Bewohnbarkeit'
        ],
        processSteps: [
            'Vertrauliche Erstberatung',
            'Diskrete Einschätzung',
            'Professionelle Räumung',
            'Desinfektion & Reinigung'
        ],
        priceInfo: 'Nach Aufwand - Angebot nach Besichtigung'
    },
    {
        id: 'keller-dachboden',
        title: 'Keller & Dachböden',
        iconPlaceholder: 'Kiste Icon',
        shortDescription: 'Schnelle Räumung von Nebenräumen.',
        fullDescription: `Keller und Dachböden werden oft zur Rumpelkammer. Wir schaffen wieder Platz und Ordnung - schnell und gründlich.

Auch schwer zugängliche Bereiche sind kein Problem. Brauchbare Gegenstände werden angerechnet.`,
        keyBenefits: [
            'Schnelle Durchführung',
            'Auch schwer zugängliche Bereiche',
            'Sortierung & Verwertung',
            'Faire Wertanrechnung'
        ],
        processSteps: [
            'Kostenlose Besichtigung',
            'Festpreisangebot',
            'Räumung oft innerhalb 48h',
            'Besenreine Übergabe'
        ],
        priceInfo: 'Ab 390€ für Standard-Keller'
    },
    {
        id: 'express-service',
        title: 'Express-Service 48h',
        iconPlaceholder: 'Blitz Icon',
        shortDescription: 'Garantierte Räumung in 48 Stunden.',
        fullDescription: `Wenn es schnell gehen muss: Unser Express-Service garantiert die Räumung innerhalb von 48 Stunden nach Beauftragung.

Ideal bei kurzfristigen Umzügen oder Notfällen. Trotz Zeitdruck arbeiten wir gründlich und professionell.`,
        keyBenefits: [
            'Garantiert innerhalb 48h',
            'Sofort-Besichtigung möglich',
            'Priorisierte Bearbeitung',
            'Volle Servicequalität'
        ],
        processSteps: [
            'Sofortkontakt',
            'Express-Besichtigung',
            'Sofortangebot',
            'Fertigstellung in 48h'
        ],
        priceInfo: '20% Express-Zuschlag'
    }
];

export default function LeistungenPage() {
    const [activeService, setActiveService] = useState<string>('haushaltsaufloesung');
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => new Set(prev).add(entry.target.id));
                        if (entry.target.id.startsWith('detail-')) {
                            setActiveService(entry.target.id.replace('detail-', ''));
                        }
                    }
                });
            },
            { threshold: 0.3 }
        );

        const sections = document.querySelectorAll('.animate-section');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const scrollToService = (serviceId: string) => {
        const element = document.getElementById(`detail-${serviceId}`);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const whyChooseUs = [
        { icon: 'Check', title: 'Festpreisgarantie', text: 'Transparente Preise ohne versteckte Kosten' },
        { icon: 'Award', title: '15 Jahre Erfahrung', text: 'Über 50.000 erfolgreiche Entrümpelungen' },
        { icon: 'Leaf', title: 'Umweltgerecht', text: 'Zertifizierte Entsorgung mit Recycling' },
        { icon: 'Star', title: '4,9/5 Sterne', text: 'Top-Bewertungen bei Google & Co.' },
        { icon: 'Shield', title: 'Voll versichert', text: 'Betriebshaftpflicht bis 5 Mio. Euro' },
        { icon: 'Phone', title: '24/7 Service', text: 'Immer für Sie erreichbar' }
    ];

    return (
        <div className="bg-gray-50 text-gray-700">
            <style jsx>{`
                .fade-in-up {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s ease-out;
                }
                
                .fade-in-up.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .delay-100 { transition-delay: 100ms; }
                .delay-200 { transition-delay: 200ms; }
                .delay-300 { transition-delay: 300ms; }
                
                .service-nav {
                    position: sticky;
                    top: 80px;
                    z-index: 40;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }
                
                .icon-placeholder {
                    width: 48px;
                    height: 48px;
                    background: #E5E7EB;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #9CA3AF;
                    font-size: 12px;
                    text-align: center;
                    padding: 4px;
                }
                
                .icon-placeholder-large {
                    width: 80px;
                    height: 80px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 20px;
                }
                
                @media (max-width: 768px) {
                    .service-nav {
                        top: 60px;
                    }
                }
            `}</style>

            {/* Hero Section */}
            <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#1a2b36] via-[#2C4F5E] to-[#1E3A47]">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                        Unsere <span className="text-[#C73E3A]">Leistungen</span>
                    </h1>
                    
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                        Professionelle Entrümpelungen für jeden Bedarf - schnell, sauber, zuverlässig.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+4952199999900"
                            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-[#C73E3A] rounded-lg shadow-lg hover:bg-[#B02E2A] transition-all"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            0521 / 1200 510
                        </a>
                        
                        <a
                            href="#leistungen-navigation"
                            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-all"
                        >
                            Leistungen ansehen
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Sticky Navigation */}
            <nav id="leistungen-navigation" className="service-nav py-3">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-2">
                        {servicesData.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => scrollToService(service.id)}
                                className={`px-3 py-2 rounded-lg font-medium text-sm transition-all ${
                                    activeService === service.id
                                        ? 'bg-[#C73E3A] text-white shadow-lg'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                                }`}
                            >
                                {service.title}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Services Content */}
            <section className="py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Quick Overview Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {servicesData.map((service, index) => (
                            <div
                                key={service.id}
                                className={`animate-section fade-in-up delay-${(index % 3) + 1}00 ${
                                    visibleSections.has('overview') ? 'visible' : ''
                                } bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer`}
                                onClick={() => scrollToService(service.id)}
                                id={index === 0 ? 'overview' : undefined}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="icon-placeholder flex-shrink-0">
                                        {service.iconPlaceholder}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg text-[#2C4F5E] mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-2">
                                            {service.shortDescription}
                                        </p>
                                        <p className="text-[#C73E3A] font-semibold text-sm">
                                            {service.priceInfo}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Detailed Service Descriptions */}
                    <div className="space-y-12">
                        {servicesData.map((service) => (
                            <div
                                key={service.id}
                                id={`detail-${service.id}`}
                                className={`animate-section fade-in-up ${
                                    visibleSections.has(`detail-${service.id}`) ? 'visible' : ''
                                }`}
                            >
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                                    {/* Service Header */}
                                    <div className="bg-gradient-to-br from-[#2C4F5E] to-[#C73E3A] p-8 md:p-12">
                                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                                            <div className="icon-placeholder-large flex-shrink-0">
                                                <div className="w-full h-full flex items-center justify-center text-white/60 text-sm">
                                                    {service.iconPlaceholder}
                                                </div>
                                            </div>
                                            <div className="text-center md:text-left">
                                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                                    {service.title}
                                                </h2>
                                                <p className="text-white/80 text-lg">
                                                    {service.shortDescription}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Service Content */}
                                    <div className="p-6 md:p-10">
                                        {/* Description */}
                                        <div className="prose max-w-none mb-8">
                                            {service.fullDescription.split('\n\n').map((paragraph, idx) => (
                                                <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>

                                        {/* Two Column Layout */}
                                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                                            {/* Benefits */}
                                            <div className="bg-gray-50 rounded-xl p-6">
                                                <h3 className="text-xl font-bold text-[#2C4F5E] mb-4">
                                                    Ihre Vorteile
                                                </h3>
                                                <ul className="space-y-3">
                                                    {service.keyBenefits.map((benefit, idx) => (
                                                        <li key={idx} className="flex items-start">
                                                            <svg className="w-5 h-5 text-[#C73E3A] mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-gray-700">{benefit}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Process */}
                                            <div className="bg-[#2C4F5E] text-white rounded-xl p-6">
                                                <h3 className="text-xl font-bold mb-4">
                                                    So läuft's ab
                                                </h3>
                                                <ol className="space-y-3">
                                                    {service.processSteps.map((step, idx) => (
                                                        <li key={idx} className="flex items-start">
                                                            <span className="bg-[#C73E3A] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                                                                {idx + 1}
                                                            </span>
                                                            <span className="text-white/90">{step}</span>
                                                        </li>
                                                    ))}
                                                </ol>
                                            </div>
                                        </div>

                                        {/* Price Box */}
                                        <div className="bg-[#C73E3A] text-white rounded-xl p-6 mb-8">
                                            <h3 className="text-xl font-bold mb-2">Preise</h3>
                                            <p className="text-2xl font-bold mb-2">{service.priceInfo}</p>
                                            <p className="text-white/80 text-sm">
                                                Festpreise inkl. aller Nebenkosten - keine versteckten Gebühren!
                                            </p>
                                        </div>

                                        {/* CTA Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <a
                                                href="tel:+4952199999900"
                                                className="inline-flex items-center justify-center px-6 py-3 bg-[#C73E3A] text-white rounded-lg font-semibold hover:bg-[#B02E2A] transition-all shadow-lg"
                                            >
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                Jetzt anrufen
                                            </a>
                                            <a
                                                href="/kontakt"
                                                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#2C4F5E] text-[#2C4F5E] rounded-lg font-semibold hover:bg-[#2C4F5E] hover:text-white transition-all"
                                            >
                                                Angebot anfordern
                                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-[#2C4F5E] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Warum <span className="text-[#C73E3A]">Rümpelschmiede</span>?
                        </h2>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            6 gute Gründe für uns
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyChooseUs.map((reason, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all"
                            >
                                <div className="icon-placeholder bg-white/20 mb-4">
                                    {reason.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                                <p className="text-white/80 text-sm">{reason.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#2C4F5E] mb-8 text-center">
                        Häufige Fragen
                    </h2>

                    <div className="space-y-4">
                        {[
                            {
                                q: "Wie schnell können Sie starten?",
                                a: "Normalerweise innerhalb von 2-3 Tagen. Express-Service in 48h möglich."
                            },
                            {
                                q: "Was kostet eine Entrümpelung?",
                                a: "Nach kostenloser Besichtigung erhalten Sie ein verbindliches Festpreisangebot."
                            },
                            {
                                q: "Was passiert mit brauchbaren Sachen?",
                                a: "Ankauf mit Verrechnung oder Spende an karitative Einrichtungen möglich."
                            },
                            {
                                q: "Muss ich dabei sein?",
                                a: "Nur zur Einweisung und Abnahme. Wir arbeiten selbstständig."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg shadow p-6">
                                <h3 className="font-bold text-[#2C4F5E] mb-2">
                                    {faq.q}
                                </h3>
                                <p className="text-gray-600">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-gradient-to-r from-[#C73E3A] to-[#B02E2A] text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                        Jetzt unverbindlich anfragen!
                    </h2>
                    <p className="text-lg mb-8 opacity-90">
                        Kostenlose Beratung und Festpreisangebot
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+4952199999900"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#C73E3A] rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            0521 / 999 999 00
                        </a>
                        <a
                            href="https://wa.me/4952199999900"
                            className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-all shadow-lg"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}