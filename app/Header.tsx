'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Schließe Menü beim Klick außerhalb
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('header')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);
  
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
          {/* Mobile Header - Logo zentriert */}
          <div className="flex lg:hidden items-center justify-between h-20 relative">
            {/* Platzhalter links für Balance */}
            <div className="w-11"></div>
            
            {/* Logo - Zentriert und größer auf Mobile */}
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
              <img 
                src="/Logo.png" 
                alt="Rümpel Schmiede" 
                className="h-14 w-auto"
              />
            </Link>
            
            {/* Mobile Menu Button - Rechts */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 z-10"
              aria-label="Menü"
            >
              <svg className="w-7 h-7 text-[#2C4F5E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Header - Normal */}
          <div className="hidden lg:flex items-center justify-between h-24 md:h-28">
            
            {/* Logo - Links auf Desktop */}
            <Link href="/" className="flex-shrink-0">
              <img 
                src="/Logo.png" 
                alt="Rümpel Schmiede" 
                className="h-16 md:h-20 w-auto"
              />
            </Link>

            {/* Desktop Navigation - ÜBER DIE GESAMTE BREITE VERTEILT */}
            <nav className="flex-1 flex items-center justify-center px-8">
              <ul className="flex items-center justify-between w-full max-w-4xl">
                <li>
                  <Link 
                    href="/" 
                    className="text-[#2C4F5E] hover:text-[#C73E3A] font-semibold transition-colors text-lg px-4 py-2"
                  >
                    Start
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/leistungen" 
                    className="text-[#2C4F5E] hover:text-[#C73E3A] font-semibold transition-colors text-lg px-4 py-2"
                  >
                    Leistungen
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/preise" 
                    className="text-[#2C4F5E] hover:text-[#C73E3A] font-semibold transition-colors text-lg px-4 py-2"
                  >
                    Preisrechner
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
          <div className="lg:hidden bg-white border-t border-gray-100 absolute top-full left-0 right-0 shadow-lg">
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
                  <Link 
                    href="/leistungen" 
                    className="block text-[#2C4F5E] hover:text-[#C73E3A] font-semibold text-lg py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Leistungen
                  </Link>
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