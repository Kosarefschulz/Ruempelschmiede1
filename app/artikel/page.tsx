'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { articlesData, Article } from './data';
import Breadcrumb from '../components/Breadcrumb';

const categories = [
    'Alle Artikel',
    'Kosten & Preise',
    'Ratgeber',
    'Tipps & Tricks',
    'Spezialthemen',
    'Erbschaft',
    'B2B',
    'Nachhaltigkeit'
];

export default function ArtikelPage() {
    const [selectedCategory, setSelectedCategory] = useState('Alle Artikel');
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

    const filteredArticles = selectedCategory === 'Alle Artikel' 
        ? articlesData 
        : articlesData.filter(article => article.category === selectedCategory);

    return (
        <div className="bg-gray-50 text-gray-700">
            {/* Breadcrumb Navigation */}
            <Breadcrumb currentPage="Ratgeber" />
            
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
            `}</style>

            {/* Mobile-First Hero Section */}
            <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#1a2b36] via-[#2C4F5E] to-[#1E3A47]">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-2 mb-4 sm:mb-6 text-xs sm:text-sm font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                            RATGEBER & TIPPS
                        </span>
                        
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight px-2">
                            Entrümpelung Ratgeber
                            <span className="block text-[#C73E3A] mt-1 sm:mt-2">Tipps & Wissen</span>
                        </h1>
                        
                        <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                            Professionelle Tipps und Anleitungen für Ihre Entrümpelung. Von Kostensparen 
                            bis zur umweltgerechten Entsorgung - hier finden Sie alles Wissenswerte.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mobile-First Category Filter */}
            <section className="py-4 sm:py-6 lg:py-8 bg-white sticky top-16 sm:top-20 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
                    <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-2.5 py-1.5 sm:px-3 sm:py-2 lg:px-4 lg:py-2 rounded-full font-medium text-xs sm:text-sm transition-all ${
                                    selectedCategory === category
                                        ? 'bg-[#C73E3A] text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mobile-First Articles Grid */}
            <section id="articles-grid" className="animate-section py-8 sm:py-12 lg:py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-4 sm:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredArticles.map((article, index) => (
                            <Link
                                key={article.id}
                                href={`/artikel/${article.id}`}
                                className={`fade-in-up delay-${(index % 3) + 1}00 ${
                                    visibleSections.has('articles-grid') ? 'visible' : ''
                                } bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group cursor-pointer block`}
                            >
                                {/* Mobile-First Article Image */}
                                <div className="relative h-40 sm:h-44 lg:h-48 bg-gradient-to-br from-[#2C4F5E] to-[#C73E3A]">
                                    <div className="absolute inset-0 bg-black/20"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                            <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    {/* Category Badge */}
                                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                                        <span className="bg-white/90 text-[#2C4F5E] px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-semibold">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Mobile-First Article Content */}
                                <div className="p-4 sm:p-5 lg:p-6">
                                    <div className="flex flex-col sm:flex-row sm:items-center text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3 space-y-1 sm:space-y-0">
                                        <div className="flex items-center">
                                            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {article.date}
                                        </div>
                                        <span className="hidden sm:inline mx-2">•</span>
                                        <div className="flex items-center">
                                            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {article.readTime}
                                        </div>
                                    </div>
                                    
                                    <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#2C4F5E] mb-2 sm:mb-3 group-hover:text-[#C73E3A] transition-colors line-clamp-2 leading-tight">
                                        {article.title}
                                    </h2>
                                    
                                    <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base leading-relaxed">
                                        {article.excerpt}
                                    </p>
                                    
                                    <div className="flex items-center text-[#C73E3A] font-semibold group-hover:text-[#B02E2A] transition-colors text-sm sm:text-base">
                                        <span className="hidden sm:inline">Artikel lesen</span>
                                        <span className="sm:hidden">Lesen</span>
                                        <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Load More Button */}
                    {filteredArticles.length > 6 && (
                        <div className="text-center mt-12">
                            <button className="px-8 py-3 bg-[#C73E3A] text-white rounded-lg font-semibold hover:bg-[#B02E2A] transition-all">
                                Weitere Artikel laden
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 bg-[#2C4F5E] text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Bleiben Sie informiert
                    </h2>
                    <p className="text-lg text-white/80 mb-8">
                        Erhalten Sie regelmäßig neue Tipps und Ratgeber rund um das Thema Entrümpelung
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Ihre E-Mail-Adresse"
                            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#C73E3A] focus:outline-none"
                        />
                        <button className="px-6 py-3 bg-[#C73E3A] text-white rounded-lg font-semibold hover:bg-[#B02E2A] transition-all whitespace-nowrap">
                            Anmelden
                        </button>
                    </div>
                    
                    <p className="text-sm text-white/60 mt-4">
                        Kostenlos und jederzeit kündbar. Ihre Daten sind bei uns sicher.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-[#2C4F5E] mb-8 text-center">
                        Häufige Fragen zur Entrümpelung
                    </h2>

                    <div className="space-y-4">
                        {[
                            {
                                q: "Wie viel kostet eine professionelle Entrümpelung?",
                                a: "Die Kosten variieren je nach Größe und Zustand der Immobilie. Eine 3-Zimmer-Wohnung kostet durchschnittlich 1.200-2.500€. Wir bieten kostenlose Besichtigungen mit Festpreisangeboten an."
                            },
                            {
                                q: "Wie lange dauert eine Haushaltsauflösung?",
                                a: "Je nach Umfang dauert eine Entrümpelung zwischen einem halben Tag (kleine Wohnung) und mehreren Tagen (großes Haus). Wir planen realistische Zeitrahmen und halten Termine ein."
                            },
                            {
                                q: "Was passiert mit wertvollen Gegenständen?",
                                a: "Wertvolle Gegenstände werden fair bewertet und angerechnet. Antiquitäten, Schmuck oder Sammlerobjekte können den Preis Ihrer Entrümpelung erheblich reduzieren."
                            },
                            {
                                q: "Ist eine Entrümpelung umweltfreundlich?",
                                a: "Ja, wir arbeiten nach nachhaltigen Prinzipien: Recycling, Spenden an soziale Einrichtungen und fachgerechte Entsorgung nach den neuesten Umweltstandards."
                            },
                            {
                                q: "Brauche ich einen Termin für eine Besichtigung?",
                                a: "Ja, eine Terminvereinbarung ist sinnvoll. So können wir uns ausreichend Zeit nehmen und Ihnen vor Ort ein genaues, verbindliches Angebot erstellen."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-6">
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

            {/* Enhanced CTA Section */}
            <section className="py-16 bg-gradient-to-r from-[#C73E3A] to-[#B02E2A] text-white relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-black/10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}></div>
                </div>
                
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <div className="mb-6">
                        <div className="inline-block p-3 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Professionelle Entrümpelung gefällig?
                    </h2>
                    <p className="text-lg md:text-xl mb-2 opacity-90">
                        ✓ Kostenlose Besichtigung & Beratung
                    </p>
                    <p className="text-lg md:text-xl mb-8 opacity-90">
                        ✓ Festpreis-Garantie mit transparenter Kalkulation
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <a
                            href="tel:+4915755854945"
                            className="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#C73E3A] rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
                        >
                            <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Sofort anrufen
                        </a>
                        <a
                            href="/kontakt"
                            className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-[#C73E3A] transition-all hover:scale-105 transform"
                        >
                            Angebot anfordern
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                    
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm opacity-80">
                        <div className="flex items-center justify-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Über 500 Kunden
                        </div>
                        <div className="flex items-center justify-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            24h Antwortzeit
                        </div>
                        <div className="flex items-center justify-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Regional aktiv
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}