'use client'
import { useState, useEffect } from 'react';

export default function NachhaltigkeitPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="bg-gray-50 text-gray-700 min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#1a2b36] via-[#2C4F5E] to-[#1E3A47]">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                            Nachhaltigkeit & Soziales Engagement
                        </h1>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto">
                            Verantwortung für Umwelt und Gesellschaft
                        </p>
                    </div>
                </div>
            </section>

            {/* Soziale Projekte Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#2C4F5E] mb-8 text-center">
                            Unser soziales Engagement
                        </h2>
                        
                        <div className="space-y-8">
                            {/* FEG Werther */}
                            <div className="bg-gray-50 p-8 rounded-lg">
                                <h3 className="text-2xl font-bold text-[#2C4F5E] mb-4">
                                    Unterstützung der FEG Werther
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Wir unterstützen aktiv unsere Gemeinde, die Freie evangelische Gemeinde (FEG) in Werther. 
                                    Als lokal verwurzeltes Unternehmen liegt uns die Förderung unserer Heimatgemeinde besonders am Herzen.
                                </p>
                            </div>

                            {/* Afrika Projekte */}
                            <div className="bg-gray-50 p-8 rounded-lg">
                                <h3 className="text-2xl font-bold text-[#2C4F5E] mb-4">
                                    Hilfsprojekte in Afrika
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Unsere Mitarbeiter engagieren sich persönlich in Afrika. Regelmäßig fahren Teammitglieder 
                                    vor Ort, um direkte Hilfe zu leisten. Zusätzlich unterstützen wir diese wichtigen Projekte 
                                    auch finanziell durch Spenden.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="bg-[#2C4F5E] text-white p-8 rounded-lg">
                                <h3 className="text-2xl font-bold mb-4">
                                    Unsere Vision
                                </h3>
                                <p className="mb-6">
                                    Mit unseren Geldern möchten wir einen nachhaltigen Beitrag zur Gesellschaft leisten. 
                                    Unser Fokus liegt auf dem Ausbau und der Professionalisierung sozialer Einrichtungen:
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-[#C73E3A] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Kinderheime ausbauen und unterstützen</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-[#C73E3A] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Kindergärten fördern und professionalisieren</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-[#C73E3A] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Schulen und Bildungseinrichtungen unterstützen</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-[#C73E3A] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Soziale Projekte nachhaltig fördern</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Umwelt & Recycling Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#2C4F5E] mb-8 text-center">
                            Umweltschutz & Recycling
                        </h2>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Fachgerechte Sortierung */}
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <div className="text-[#C73E3A] mb-4">
                                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-[#2C4F5E] mb-3">
                                    Professionelle Sortierung
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Wir achten streng darauf, alle Materialien fachgerecht zu sortieren. 
                                    Als lizenziertes Unternehmen verfügen wir über alle notwendigen Scheine 
                                    und Zertifikate für die ordnungsgemäße Entsorgung.
                                </p>
                            </div>

                            {/* Wiederverkauf */}
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <div className="text-[#C73E3A] mb-4">
                                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                                        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-[#2C4F5E] mb-3">
                                    Wiederverkauf & Wertanrechnung
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Gut erhaltene Gegenstände verkaufen wir weiter. Unsere Kunden profitieren 
                                    durch eine faire Wertanrechnung. Interessierte können unseren Laden über 
                                    Kleinanzeigen entdecken.
                                </p>
                            </div>
                        </div>

                        {/* Kleinanzeigen Link */}
                        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-shrink-0">
                                    <img 
                                        src="https://img.kleinanzeigen.de/api/v1/prod-user/images/27/27232251-dd3d-4c9c-94b3-a4ac6bb0351a?rule=$_12.JPG"
                                        alt="Wertvoll Kleinanzeigen"
                                        width={200}
                                        height={200}
                                        className="rounded-lg shadow-md"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold text-[#2C4F5E] mb-4">
                                        Besuchen Sie uns auf Kleinanzeigen
                                    </h3>
                                    <p className="text-gray-700 mb-6">
                                        Entdecken Sie unser vielfältiges Angebot an gut erhaltenen Möbeln, 
                                        Haushaltsgegenständen und mehr. Durch den Wiederverkauf geben wir 
                                        Gegenständen ein zweites Leben und schonen gleichzeitig die Umwelt.
                                    </p>
                                    <a 
                                        href="https://www.kleinanzeigen.de/pro/Wertvoll?utm_source=copyToPasteboard&utm_campaign=socialbuttons&utm_medium=social&utm_content=app_ios"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-6 py-3 rounded-lg font-semibold transition-all"
                                    >
                                        Zu unserem Kleinanzeigen-Profil
                                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#2C4F5E] text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Gemeinsam für eine bessere Zukunft
                    </h2>
                    <p className="text-xl mb-8">
                        Mit jeder Entrümpelung leisten wir einen Beitrag für Umwelt und Gesellschaft
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/kontakt"
                            className="inline-flex items-center justify-center px-8 py-4 bg-[#C73E3A] text-white font-semibold rounded-lg hover:bg-[#B02E2A] transition-all"
                        >
                            Jetzt anfragen
                        </a>
                        <a
                            href="tel:+4908000060970"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2C4F5E] font-semibold rounded-lg hover:bg-gray-100 transition-all"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            0800 0060970
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}