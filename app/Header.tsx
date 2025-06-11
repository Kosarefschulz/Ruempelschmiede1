'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLeistungenOpen, setIsLeistungenOpen] = useState(false);
    const [isMobileLeistungenOpen, setIsMobileLeistungenOpen] = useState(false);
    const [isB2BOpen, setIsB2BOpen] = useState(false);
    const [isMobileB2BOpen, setIsMobileB2BOpen] = useState(false);

    // Schließe Menü beim Klick außerhalb
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (isMenuOpen && !target.closest('header')) {
                setIsMenuOpen(false);
            }
            if (isLeistungenOpen && !target.closest('.leistungen-dropdown')) {
                setIsLeistungenOpen(false);
            }
            if (isB2BOpen && !target.closest('.b2b-dropdown')) {
                setIsB2BOpen(false);
            }
        };
        
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMenuOpen, isLeistungenOpen, isB2BOpen]);

    return (
        <>
            {/* Top Bar - Kompakt */}
            <div className="bg-[#C73E3A] text-white py-2">
                <div className="container mx-auto px-4 flex justify-between items-center text-sm">
                    <span>24/7 Notfall-Service verfügbar</span>
                    <div className="flex items-center gap-2">
                        <a href="tel:+4952112000510" className="hover:text-white/80 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="font-semibold">0521 / 1200 510</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    {/* Mobile Header - Höhe angepasst für größeres Logo */}
                    <div className="flex lg:hidden items-center justify-between h-20 relative">
                        {/* Platzhalter links für Balance */}
                        <div className="w-11"></div>
                        
                        {/* Logo - Zentriert und angepasste Größe */}
                        <Link href="/" className="relative h-16 w-auto">
                            <Image
                                src="/Logo.png"
                                alt="Rümpel Schmiede"
                                width={200}
                                height={64}
                                className="h-16 w-auto"
                                priority
                            />
                        </Link>

                        {/* Mobile Menu Button - Rechts */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-3 z-10"
                            aria-label="Menü"
                        >
                            <svg className="w-8 h-8 text-[#2C4F5E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Header - Höhe angepasst */}
                    <div className="hidden lg:flex items-center justify-between h-20 md:h-24">
                        {/* Logo - Links auf Desktop - Kleiner gemacht */}
                        <Link href="/" className="flex-shrink-0">
                            <Image
                                src="/Logo.png"
                                alt="Rümpel Schmiede"
                                width={250}
                                height={80}
                                className="h-16 md:h-20 w-auto"
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation - ÜBER DIE GESAMTE BREITE VERTEILT */}
                        <nav className="flex-1 flex items-center justify-center px-8">
                            <ul className="flex items-center justify-between w-full max-w-5xl">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-[#2C4F5E] hover:text-[#C73E3A] font-semibold transition-colors text-lg px-4 py-2"
                                    >
                                        Start
                                    </Link>
                                </li>
                                <li className="relative leistungen-dropdown">
                                    <button
                                        onClick={() => setIsLeistungenOpen(!isLeistungenOpen)}
                                        className="text-[#2C4F5E] hover:text-[#C73E3A] font-semibold transition-colors text-lg px-4 py-2 flex items-center"
                                    >
                                        Leistungen
                                        <svg className={`w-4 h-4 ml-1 transition-transform ${isLeistungenOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    
                                    {/* Dropdown Menu - KORRIGIERTE LINKS OHNE "detail-" */}
                                    {isLeistungenOpen && (
                                        <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg mt-2 py-2 z-50">
                                            <Link
                                                href="/leistungen#haushaltsaufloesung"
                                                className="block px-4 py-3 hover:bg-gray-50 text-[#2C4F5E] hover:text-[#C73E3A] transition-colors"
                                                onClick={() => setIsLeistungenOpen(false)}
                                            >
                                                <div className="font-semibold">Haushaltsauflösungen</div>
                                                <div className="text-sm text-gray-600">Komplette Räumung mit Wertanrechnung</div>
                                            </Link>
                                            <Link
                                                href="/leistungen#gewerbeaufloesung"
                                                className="block px-4 py-3 hover:bg-gray-50 text-[#2C4F5E] hover:text-[#C73E3A] transition-colors"
                                                onClick={() => setIsLeistungenOpen(false)}
                                            >
                                                <div className="font-semibold">Gewerbeauflösungen</div>
                                                <div className="text-sm text-gray-600">Büros, Praxen & Läden</div>
                                            </Link>
                                            <Link
                                                href="/leistungen#messie-entruempelung"
                                                className="block px-4 py-3 hover:bg-gray-50 text-[#2C4F5E] hover:text-[#C73E3A] transition-colors"
                                                onClick={() => setIsLeistungenOpen(false)}
                                            >
                                                <div className="font-semibold">Messie-Wohnungen</div>
                                                <div className="text-sm text-gray-600">Diskrete Hilfe & Desinfektion</div>
                                            </Link>
                                            <Link
                                                href="/leistungen#keller-dachboden"
                                                className="block px-4 py-3 hover:bg-gray-50 text-[#2C4F5E] hover:text-[#C73E3A] transition-colors"
                                                onClick={() => setIsLeistungenOpen(false)}
                                            >
                                                <div className="font-semibold">Keller & Dachböden</div>
                                                <div className="text-sm text-gray-600">Schnelle Räumung ab 390€</div>
                                            </Link>
                                            <Link
                                                href="/leistungen#express-service"
                                                className="block px-4 py-3 hover:bg-gray-50 text-[#2C4F5E] hover:text-[#C73E3A] transition-colors border-t"
                                                onClick={() => setIsLeistungenOpen(false)}
                                            >
                                                <div className="font-semibold text-[#C73E3A]">Express-Service 48h</div>
                                                <div className="text-sm text-gray-600">Garantierte Räumung in 48 Stunden</div>
                                            </Link>
                                        </div>
                                    )}
                                </li>
                                <li>
                                    <Link
                                        href="/preise"
                                        className="text-[#2C4F5E] hover:text-[#C73E3A] font-semibold transition-colors text-lg px-4 py-2"
                                    >
                                        Preisrechner
                                    </Link>
                                </li>
                                <li className="relative b2b-dropdown">
                                    <button
                                        onClick={() => setIsB2BOpen(!isB2BOpen)}
                                        className="text-[#2C4F5E] hover:text-[#C73E3A] font-semibold transition-colors text-lg px-4 py-2 flex items-center"
                                    >
                                        B2B
                                        <svg className={`w-4 h-4 ml-1 transition-transform ${isB2BOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    
                                    {/* B2B Dropdown Menu */}
                                    {isB2BOpen && (
                                        <div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-lg mt-2 py-2 z-50">
                                            <Link
                                                href="/b2b"
                                                className="block px-4 py-3 hover:bg-gray-50 text-[#2C4F5E] hover:text-[#C73E3A] transition-colors border-b"
                                                onClick={() => setIsB2BOpen(false)}
                                            >
                                                <div className="font-semibold">B2B Übersicht</div>
                                                <div className="text-sm text-gray-600">Alle gewerblichen Leistungen</div>
                                            </Link>
                                            <Link
                                                href="/b2b#gewerbeaufloesung"
                                                className="block px-4 py-3 hover:bg-gray-50 text-[#2C4F5E] hover:text-[#C73E3A] transition-colors"
                                                onClick={() => setIsB2BOpen(false)}
                                            >
                                                <div className="font-semibold">Gewerbeauflösung</div>
                                                <div className="text-sm text-gray-600">Büros, Produktionsstätten & Betriebe</div>
                                            </Link>
                                            <Link
                                                href="/b2b#bueroentruempelung"
                                                className="block px-4 py-3 hover:bg-gray-50 text-[#2C4F5E] hover:text-[#C73E3A] transition-colors"
                                                onClick={() => setIsB2BOpen(false)}
                                            >
                                                <div className="font-semibold">Büroauflösung & Aktenvernichtung</div>
                                                <div className="text-sm text-gray-600">DSGVO-konforme Entsorgung</div>
                                            </Link>
                                            <Link
                                                href="/b2b#lagerraeumung"
                                                className="block px-4 py-3 hover:bg-gray-50 text-[#2C4F5E] hover:text-[#C73E3A] transition-colors"
                                                onClick={() => setIsB2BOpen(false)}
                                            >
                                                <div className="font-semibold">Lager- & Hallenräumung</div>
                                                <div className="text-sm text-gray-600">Industrielle Großprojekte</div>
                                            </Link>
                                            <Link
                                                href="/b2b#praxisaufloesung"
                                                className="block px-4 py-3 hover:bg-gray-50 text-[#2C4F5E] hover:text-[#C73E3A] transition-colors"
                                                onClick={() => setIsB2BOpen(false)}
                                            >
                                                <div className="font-semibold">Praxisauflösung</div>
                                                <div className="text-sm text-gray-600">Ärzte, Zahnärzte & Therapeuten</div>
                                            </Link>
                                            <Link
                                                href="/b2b#einzelhandel"
                                                className="block px-4 py-3 hover:bg-gray-50 text-[#2C4F5E] hover:text-[#C73E3A] transition-colors"
                                                onClick={() => setIsB2BOpen(false)}
                                            >
                                                <div className="font-semibold">Ladenauflösung</div>
                                                <div className="text-sm text-gray-600">Einzelhandel & Geschäfte</div>
                                            </Link>
                                            <Link
                                                href="/b2b#gastronomie"
                                                className="block px-4 py-3 hover:bg-gray-50 text-[#2C4F5E] hover:text-[#C73E3A] transition-colors border-t"
                                                onClick={() => setIsB2BOpen(false)}
                                            >
                                                <div className="font-semibold text-[#C73E3A]">Express-Service für Gewerbe</div>
                                                <div className="text-sm text-gray-600">Räumung innerhalb 48h</div>
                                            </Link>
                                        </div>
                                    )}
                                </li>
                                <li>
                                    <Link
                                        href="/artikel"
                                        className="text-[#2C4F5E] hover:text-[#C73E3A] font-semibold transition-colors text-lg px-4 py-2"
                                    >
                                        Ratgeber
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/ueber-uns"
                                        className="text-[#2C4F5E] hover:text-[#C73E3A] font-semibold transition-colors text-lg px-4 py-2"
                                    >
                                        Über uns
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/kontakt"
                                        className="text-[#2C4F5E] hover:text-[#C73E3A] font-semibold transition-colors text-lg px-4 py-2"
                                    >
                                        Kontakt
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        {/* Kontakt Button - Rechts auf Desktop */}
                        <div className="flex-shrink-0">
                            <Link
                                href="/kontakt"
                                className="bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-6 py-3 rounded-lg font-semibold transition-all text-base"
                            >
                                Anfrage stellen
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-100 absolute top-full left-0 right-0 shadow-lg max-h-[80vh] overflow-y-auto">
                        <nav className="container mx-auto px-4 py-6">
                            <ul className="space-y-4">
                                <li>
                                    <Link
                                        href="/"
                                        className="block text-[#2C4F5E] hover:text-[#C73E3A] font-semibold text-lg py-2"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Start
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setIsMobileLeistungenOpen(!isMobileLeistungenOpen)}
                                        className="flex items-center justify-between w-full text-[#2C4F5E] hover:text-[#C73E3A] font-semibold text-lg py-2"
                                    >
                                        Leistungen
                                        <svg className={`w-4 h-4 transition-transform ${isMobileLeistungenOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {/* Mobile Unterpunkte - KORRIGIERTE LINKS */}
                                    {isMobileLeistungenOpen && (
                                        <div className="ml-4 mt-2 space-y-2">
                                            <Link
                                                href="/leistungen#haushaltsaufloesung"
                                                className="block text-[#2C4F5E]/80 hover:text-[#C73E3A] text-base py-1"
                                                onClick={() => {setIsMenuOpen(false); setIsMobileLeistungenOpen(false);}}
                                            >
                                                → Haushaltsauflösungen
                                            </Link>
                                            <Link
                                                href="/leistungen#gewerbeaufloesung"
                                                className="block text-[#2C4F5E]/80 hover:text-[#C73E3A] text-base py-1"
                                                onClick={() => {setIsMenuOpen(false); setIsMobileLeistungenOpen(false);}}
                                            >
                                                → Gewerbeauflösungen
                                            </Link>
                                            <Link
                                                href="/leistungen#messie-entruempelung"
                                                className="block text-[#2C4F5E]/80 hover:text-[#C73E3A] text-base py-1"
                                                onClick={() => {setIsMenuOpen(false); setIsMobileLeistungenOpen(false);}}
                                            >
                                                → Messie-Wohnungen
                                            </Link>
                                            <Link
                                                href="/leistungen#keller-dachboden"
                                                className="block text-[#2C4F5E]/80 hover:text-[#C73E3A] text-base py-1"
                                                onClick={() => {setIsMenuOpen(false); setIsMobileLeistungenOpen(false);}}
                                            >
                                                → Keller & Dachböden
                                            </Link>
                                            <Link
                                                href="/leistungen#express-service"
                                                className="block text-[#C73E3A] hover:text-[#B02E2A] text-base py-1 font-semibold"
                                                onClick={() => {setIsMenuOpen(false); setIsMobileLeistungenOpen(false);}}
                                            >
                                                → Express-Service 48h
                                            </Link>
                                        </div>
                                    )}
                                </li>
                                <li>
                                    <Link
                                        href="/preise"
                                        className="block text-[#2C4F5E] hover:text-[#C73E3A] font-semibold text-lg py-2"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Preisrechner
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setIsMobileB2BOpen(!isMobileB2BOpen)}
                                        className="flex items-center justify-between w-full text-[#2C4F5E] hover:text-[#C73E3A] font-semibold text-lg py-2"
                                    >
                                        B2B
                                        <svg className={`w-4 h-4 transition-transform ${isMobileB2BOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {/* Mobile B2B Unterpunkte */}
                                    {isMobileB2BOpen && (
                                        <div className="ml-4 mt-2 space-y-2">
                                            <Link
                                                href="/b2b"
                                                className="block text-[#2C4F5E]/80 hover:text-[#C73E3A] text-base py-1"
                                                onClick={() => {setIsMenuOpen(false); setIsMobileB2BOpen(false);}}
                                            >
                                                → B2B Übersicht
                                            </Link>
                                            <Link
                                                href="/b2b#gewerbeaufloesung"
                                                className="block text-[#2C4F5E]/80 hover:text-[#C73E3A] text-base py-1"
                                                onClick={() => {setIsMenuOpen(false); setIsMobileB2BOpen(false);}}
                                            >
                                                → Gewerbeauflösung
                                            </Link>
                                            <Link
                                                href="/b2b#bueroentruempelung"
                                                className="block text-[#2C4F5E]/80 hover:text-[#C73E3A] text-base py-1"
                                                onClick={() => {setIsMenuOpen(false); setIsMobileB2BOpen(false);}}
                                            >
                                                → Büroauflösung
                                            </Link>
                                            <Link
                                                href="/b2b#lagerraeumung"
                                                className="block text-[#2C4F5E]/80 hover:text-[#C73E3A] text-base py-1"
                                                onClick={() => {setIsMenuOpen(false); setIsMobileB2BOpen(false);}}
                                            >
                                                → Lagerräumung
                                            </Link>
                                            <Link
                                                href="/b2b#praxisaufloesung"
                                                className="block text-[#2C4F5E]/80 hover:text-[#C73E3A] text-base py-1"
                                                onClick={() => {setIsMenuOpen(false); setIsMobileB2BOpen(false);}}
                                            >
                                                → Praxisauflösung
                                            </Link>
                                            <Link
                                                href="/b2b#einzelhandel"
                                                className="block text-[#2C4F5E]/80 hover:text-[#C73E3A] text-base py-1"
                                                onClick={() => {setIsMenuOpen(false); setIsMobileB2BOpen(false);}}
                                            >
                                                → Ladenauflösung
                                            </Link>
                                            <Link
                                                href="/b2b#gastronomie"
                                                className="block text-[#C73E3A] hover:text-[#B02E2A] text-base py-1 font-semibold"
                                                onClick={() => {setIsMenuOpen(false); setIsMobileB2BOpen(false);}}
                                            >
                                                → Express-Service 48h
                                            </Link>
                                        </div>
                                    )}
                                </li>
                                <li>
                                    <Link
                                        href="/artikel"
                                        className="block text-[#2C4F5E] hover:text-[#C73E3A] font-semibold text-lg py-2"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Ratgeber
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/ueber-uns"
                                        className="block text-[#2C4F5E] hover:text-[#C73E3A] font-semibold text-lg py-2"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Über uns
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/kontakt"
                                        className="block text-[#2C4F5E] hover:text-[#C73E3A] font-semibold text-lg py-2"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Kontakt
                                    </Link>
                                </li>
                                <li className="pt-4">
                                    <Link
                                        href="/kontakt"
                                        className="block bg-[#C73E3A] hover:bg-[#B02E2A] text-white text-center px-6 py-3 rounded-lg font-semibold text-lg"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Jetzt anfragen
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </header>

            {/* Mobile Call Button */}
            <a
                href="tel:+4952112000510"
                className="fixed bottom-6 right-6 lg:hidden bg-[#C73E3A] hover:bg-[#B02E2A] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-40"
                aria-label="Jetzt anrufen"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            </a>
        </>
    );
}