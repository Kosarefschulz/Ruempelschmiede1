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
    const [isMitmachenOpen, setIsMitmachenOpen] = useState(false);
    const [isMobileMitmachenOpen, setIsMobileMitmachenOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
            if (isMitmachenOpen && !target.closest('.mitmachen-dropdown')) {
                setIsMitmachenOpen(false);
            }
        };
        
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMenuOpen, isLeistungenOpen, isB2BOpen, isMitmachenOpen]);

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
                    <div className="flex xl:hidden items-center justify-between h-24 max-[380px]:h-20 relative">
                        {/* Platzhalter links für Balance */}
                        <div className="w-11"></div>
                        
                        {/* Logo - Zentriert und optimierte Größe für mobile */}
                        <Link href="/" className="logo-container relative h-20 max-[380px]:h-[70px] w-auto">
                            <Image
                                src="/Logo.png"
                                alt="Rümpel Schmiede"
                                width={220}
                                height={70}
                                className="logo-image"
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
                    <div className="hidden xl:flex items-center justify-between h-20 md:h-24">
                        {/* Logo - Links auf Desktop - Optimiert für bessere Darstellung */}
                        <Link href="/" className="logo-container flex-shrink-0">
                            <Image
                                src="/Logo.png"
                                alt="Rümpel Schmiede"
                                width={220}
                                height={70}
                                className="logo-image"
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
                                <li className="relative leistungen-dropdown"
                                    onMouseEnter={() => {
                                        setActiveDropdown('leistungen');
                                        setIsLeistungenOpen(true);
                                        setIsMitmachenOpen(false);
                                    }}
                                    onMouseLeave={(e) => {
                                        const relatedTarget = e.relatedTarget as HTMLElement;
                                        if (!relatedTarget || !e.currentTarget.contains(relatedTarget)) {
                                            setIsLeistungenOpen(false);
                                            setActiveDropdown(null);
                                        }
                                    }}
                                >
                                    <button
                                        onClick={() => setIsLeistungenOpen(!isLeistungenOpen)}
                                        className="text-[#2C4F5E] hover:text-[#C73E3A] font-semibold transition-colors text-lg px-4 py-2 flex items-center"
                                    >
                                        Leistungen
                                        <svg className={`w-4 h-4 ml-1 transition-transform ${isLeistungenOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    
                                    {/* Erweitertes Dropdown Menu mit Privat & Gewerbe */}
                                    {isLeistungenOpen && (
                                        <div className="absolute top-full left-0 w-[800px] bg-white shadow-xl rounded-lg mt-0 py-4 z-50">
                                            <div className="grid grid-cols-2 gap-6 px-6">
                                                {/* Private Leistungen */}
                                                <div>
                                                    <h3 className="text-lg font-bold text-[#2C4F5E] mb-4 pb-2 border-b border-gray-200">
                                                        Private Leistungen
                                                    </h3>
                                                    <div className="space-y-1">
                                                        <Link
                                                            href="/leistungen#haushaltsaufloesung"
                                                            className="block px-3 py-2 hover:bg-gray-50 text-[#2C4F5E] hover:text-[#C73E3A] transition-colors rounded"
                                                            onClick={() => setIsLeistungenOpen(false)}
                                                        >
                                                            <div className="font-semibold">Haushaltsauflösungen</div>
                                                            <div className="text-sm text-gray-600">Komplette Räumung mit Wertanrechnung</div>
                                                        </Link>
                                                        <Link
                                                            href="/leistungen#messie-entruempelung"
                                                            className="block px-3 py-2 hover:bg-gray-50 text-[#2C4F5E] hover:text-[#C73E3A] transition-colors rounded"
                                                            onClick={() => setIsLeistungenOpen(false)}
                                                        >
                                                            <div className="font-semibold">Messie-Wohnungen</div>
                                                            <div className="text-sm text-gray-600">Diskrete Hilfe & Desinfektion</div>
                                                        </Link>
                                                        <Link
                                                            href="/leistungen#keller-dachboden"
                                                            className="block px-3 py-2 hover:bg-gray-50 text-[#2C4F5E] hover:text-[#C73E3A] transition-colors rounded"
                                                            onClick={() => setIsLeistungenOpen(false)}
                                                        >
                                                            <div className="font-semibold">Keller & Dachböden</div>
                                                            <div className="text-sm text-gray-600">Schnelle Räumung ab 390€</div>
                                                        </Link>
                                                        <Link
                                                            href="/leistungen#express-service"
                                                            className="block px-3 py-2 hover:bg-gray-50 text-[#C73E3A] hover:text-[#B02E2A] transition-colors rounded border-t mt-2 pt-3"
                                                            onClick={() => setIsLeistungenOpen(false)}
                                                        >
                                                            <div className="font-semibold">Express-Service 48h</div>
                                                            <div className="text-sm text-gray-600">Garantierte Räumung in 48 Stunden</div>
                                                        </Link>
                                                    </div>
                                                </div>

                                                {/* Gewerbliche Leistungen */}
                                                <div>
                                                    <h3 className="text-lg font-bold text-[#2C4F5E] mb-4 pb-2 border-b border-gray-200">
                                                        Gewerbliche Leistungen
                                                    </h3>
                                                    <div className="space-y-1">
                                                        <Link
                                                            href="/b2b#gewerbeaufloesung"
                                                            className="block px-3 py-2 hover:bg-gray-50 text-[#2C4F5E] hover:text-[#C73E3A] transition-colors rounded"
                                                            onClick={() => setIsLeistungenOpen(false)}
                                                        >
                                                            <div className="font-semibold">Gewerbeauflösung</div>
                                                            <div className="text-sm text-gray-600">Büros, Produktionsstätten & Betriebe</div>
                                                        </Link>
                                                        <Link
                                                            href="/b2b#bueroentruempelung"
                                                            className="block px-3 py-2 hover:bg-gray-50 text-[#2C4F5E] hover:text-[#C73E3A] transition-colors rounded"
                                                            onClick={() => setIsLeistungenOpen(false)}
                                                        >
                                                            <div className="font-semibold">Büroauflösung & Aktenvernichtung</div>
                                                            <div className="text-sm text-gray-600">DSGVO-konforme Entsorgung</div>
                                                        </Link>
                                                        <Link
                                                            href="/b2b#lagerraeumung"
                                                            className="block px-3 py-2 hover:bg-gray-50 text-[#2C4F5E] hover:text-[#C73E3A] transition-colors rounded"
                                                            onClick={() => setIsLeistungenOpen(false)}
                                                        >
                                                            <div className="font-semibold">Lager- & Hallenräumung</div>
                                                            <div className="text-sm text-gray-600">Industrielle Großprojekte</div>
                                                        </Link>
                                                        <Link
                                                            href="/b2b#praxisaufloesung"
                                                            className="block px-3 py-2 hover:bg-gray-50 text-[#2C4F5E] hover:text-[#C73E3A] transition-colors rounded"
                                                            onClick={() => setIsLeistungenOpen(false)}
                                                        >
                                                            <div className="font-semibold">Praxisauflösung</div>
                                                            <div className="text-sm text-gray-600">Ärzte, Zahnärzte & Therapeuten</div>
                                                        </Link>
                                                        <Link
                                                            href="/b2b#einzelhandel"
                                                            className="block px-3 py-2 hover:bg-gray-50 text-[#2C4F5E] hover:text-[#C73E3A] transition-colors rounded"
                                                            onClick={() => setIsLeistungenOpen(false)}
                                                        >
                                                            <div className="font-semibold">Ladenauflösung</div>
                                                            <div className="text-sm text-gray-600">Einzelhandel & Geschäfte</div>
                                                        </Link>
                                                        <Link
                                                            href="/b2b#behoerden"
                                                            className="block px-3 py-2 hover:bg-gray-50 text-[#2C4F5E] hover:text-[#C73E3A] transition-colors rounded"
                                                            onClick={() => setIsLeistungenOpen(false)}
                                                        >
                                                            <div className="font-semibold">Behörden & Institutionen</div>
                                                            <div className="text-sm text-gray-600">Sozialämter, Betreuer, Rechtsanwälte</div>
                                                        </Link>
                                                        <Link
                                                            href="/b2b#gastronomie"
                                                            className="block px-3 py-2 hover:bg-gray-50 text-[#C73E3A] hover:text-[#B02E2A] transition-colors rounded border-t mt-2 pt-3"
                                                            onClick={() => setIsLeistungenOpen(false)}
                                                        >
                                                            <div className="font-semibold">Express-Service für Gewerbe</div>
                                                            <div className="text-sm text-gray-600">Räumung innerhalb 48h</div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </li>
                                <li>
                                    <Link
                                        href="/nachhaltigkeit"
                                        className="text-[#2C4F5E] hover:text-[#C73E3A] font-semibold transition-colors text-lg px-4 py-2"
                                    >
                                        Nachhaltigkeit
                                    </Link>
                                </li>
                                <li className="relative mitmachen-dropdown"
                                    onMouseEnter={() => {
                                        setActiveDropdown('mitmachen');
                                        setIsMitmachenOpen(true);
                                        setIsLeistungenOpen(false);
                                    }}
                                    onMouseLeave={(e) => {
                                        const relatedTarget = e.relatedTarget as HTMLElement;
                                        if (!relatedTarget || !e.currentTarget.contains(relatedTarget)) {
                                            setIsMitmachenOpen(false);
                                            setActiveDropdown(null);
                                        }
                                    }}
                                >
                                    <button
                                        onClick={() => setIsMitmachenOpen(!isMitmachenOpen)}
                                        className="text-[#2C4F5E] hover:text-[#C73E3A] font-semibold transition-colors text-lg px-4 py-2 flex items-center"
                                    >
                                        Mach mit!
                                        <svg className={`w-4 h-4 ml-1 transition-transform ${isMitmachenOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    
                                    {/* Mitmachen Dropdown Menu */}
                                    {isMitmachenOpen && (
                                        <div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-lg mt-0 py-2 z-50">
                                            <Link
                                                href="/karriere"
                                                className="block px-4 py-3 hover:bg-gray-50 text-[#2C4F5E] hover:text-[#C73E3A] transition-colors"
                                                onClick={() => setIsMitmachenOpen(false)}
                                            >
                                                <div className="font-semibold">Karriere</div>
                                                <div className="text-sm text-gray-600">Stellenangebote & Benefits</div>
                                            </Link>
                                            <Link
                                                href="/franchise"
                                                className="block px-4 py-3 hover:bg-gray-50 text-[#C73E3A] hover:text-[#B02E2A] transition-colors border-t"
                                                onClick={() => setIsMitmachenOpen(false)}
                                            >
                                                <div className="font-semibold">Unternehmer werden</div>
                                                <div className="text-sm text-gray-600">Starten Sie Ihre Erfolgsgeschichte</div>
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

                        {/* Preisrechner Button - Rechts auf Desktop */}
                        <div className="flex-shrink-0">
                            <Link
                                href="/preise"
                                className="bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-6 py-3 rounded-lg font-semibold transition-all text-base"
                            >
                                Preisrechner
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="xl:hidden bg-white border-t border-gray-100 absolute top-full left-0 right-0 shadow-lg max-h-[80vh] overflow-y-auto">
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
                                    {/* Mobile Leistungen erweitert mit Privat & Gewerbe */}
                                    {isMobileLeistungenOpen && (
                                        <div className="ml-4 mt-2 space-y-3">
                                            {/* Private Leistungen */}
                                            <div>
                                                <div className="text-sm font-bold text-[#2C4F5E] mb-2 px-2 py-1 bg-gray-50 rounded">
                                                    Private Leistungen
                                                </div>
                                                <div className="space-y-1 ml-2">
                                                    <Link
                                                        href="/leistungen#haushaltsaufloesung"
                                                        className="block text-[#2C4F5E]/80 hover:text-[#C73E3A] text-base py-1"
                                                        onClick={() => {setIsMenuOpen(false); setIsMobileLeistungenOpen(false);}}
                                                    >
                                                        → Haushaltsauflösungen
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
                                            </div>
                                            
                                            {/* Gewerbliche Leistungen */}
                                            <div>
                                                <div className="text-sm font-bold text-[#2C4F5E] mb-2 px-2 py-1 bg-gray-50 rounded">
                                                    Gewerbliche Leistungen
                                                </div>
                                                <div className="space-y-1 ml-2">
                                                    <Link
                                                        href="/b2b#gewerbeaufloesung"
                                                        className="block text-[#2C4F5E]/80 hover:text-[#C73E3A] text-base py-1"
                                                        onClick={() => {setIsMenuOpen(false); setIsMobileLeistungenOpen(false);}}
                                                    >
                                                        → Gewerbeauflösung
                                                    </Link>
                                                    <Link
                                                        href="/b2b#bueroentruempelung"
                                                        className="block text-[#2C4F5E]/80 hover:text-[#C73E3A] text-base py-1"
                                                        onClick={() => {setIsMenuOpen(false); setIsMobileLeistungenOpen(false);}}
                                                    >
                                                        → Büroauflösung
                                                    </Link>
                                                    <Link
                                                        href="/b2b#lagerraeumung"
                                                        className="block text-[#2C4F5E]/80 hover:text-[#C73E3A] text-base py-1"
                                                        onClick={() => {setIsMenuOpen(false); setIsMobileLeistungenOpen(false);}}
                                                    >
                                                        → Lagerräumung
                                                    </Link>
                                                    <Link
                                                        href="/b2b#praxisaufloesung"
                                                        className="block text-[#2C4F5E]/80 hover:text-[#C73E3A] text-base py-1"
                                                        onClick={() => {setIsMenuOpen(false); setIsMobileLeistungenOpen(false);}}
                                                    >
                                                        → Praxisauflösung
                                                    </Link>
                                                    <Link
                                                        href="/b2b#einzelhandel"
                                                        className="block text-[#2C4F5E]/80 hover:text-[#C73E3A] text-base py-1"
                                                        onClick={() => {setIsMenuOpen(false); setIsMobileLeistungenOpen(false);}}
                                                    >
                                                        → Ladenauflösung
                                                    </Link>
                                                    <Link
                                                        href="/b2b#behoerden"
                                                        className="block text-[#2C4F5E]/80 hover:text-[#C73E3A] text-base py-1"
                                                        onClick={() => {setIsMenuOpen(false); setIsMobileLeistungenOpen(false);}}
                                                    >
                                                        → Behörden & Institutionen                                                    </Link>
                                                    <Link
                                                        href="/b2b#gastronomie"
                                                        className="block text-[#C73E3A] hover:text-[#B02E2A] text-base py-1 font-semibold"
                                                        onClick={() => {setIsMenuOpen(false); setIsMobileLeistungenOpen(false);}}
                                                    >
                                                        → Express-Service Gewerbe
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </li>
                                <li>
                                    <Link
                                        href="/nachhaltigkeit"
                                        className="block text-[#2C4F5E] hover:text-[#C73E3A] font-semibold text-lg py-2"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Nachhaltigkeit
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setIsMobileMitmachenOpen(!isMobileMitmachenOpen)}
                                        className="flex items-center justify-between w-full text-[#2C4F5E] hover:text-[#C73E3A] font-semibold text-lg py-2"
                                    >
                                        Mach mit!
                                        <svg className={`w-4 h-4 transition-transform ${isMobileMitmachenOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {/* Mobile Mach mit! Unterpunkte */}
                                    {isMobileMitmachenOpen && (
                                        <div className="ml-4 mt-2 space-y-2">
                                            <Link
                                                href="/karriere"
                                                className="block text-[#2C4F5E]/80 hover:text-[#C73E3A] text-base py-1"
                                                onClick={() => {setIsMenuOpen(false); setIsMobileMitmachenOpen(false);}}
                                            >
                                                → Karriere
                                            </Link>
                                            <Link
                                                href="/franchise"
                                                className="block text-[#C73E3A] hover:text-[#B02E2A] text-base py-1 font-semibold"
                                                onClick={() => {setIsMenuOpen(false); setIsMobileMitmachenOpen(false);}}
                                            >
                                                → Unternehmer werden
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
                                        href="/preise"
                                        className="block bg-[#C73E3A] hover:bg-[#B02E2A] text-white text-center px-6 py-3 rounded-lg font-semibold text-lg"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Preisrechner
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
                className="fixed bottom-6 right-6 xl:hidden bg-[#C73E3A] hover:bg-[#B02E2A] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-40"
                aria-label="Jetzt anrufen"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            </a>
        </>
    );
}