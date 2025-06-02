'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      {/* Oberer Header-Bereich */}
      <header className="bg-[#C73E3A]">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-end">
            {/* Kontakt - Rechte Seite aber weiter links */}
            <div className="flex flex-col items-end mr-8 md:mr-16">
              <div className="flex items-center gap-3">
                <span className="text-white text-2xl">📞</span>
                <div className="text-right">
                  <p className="text-xs text-white/80">Zentrale Bielefeld:</p>
                  <a href="tel:+4952199999999" className="text-xl font-bold text-white hover:text-white/80">
                    0521 / 1200 510
                  </a>
                </div>
              </div>
              <Link href="/kontakt" className="text-white hover:text-white/80 font-semibold text-xs mt-1">
                Jetzt kostenlos anfragen →
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      {/* Navigation */}
      <nav className="bg-gray-100 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center">
            {/* Logo in der Navigation - GRÖSSER */}
            <Link href="/" className="py-4 pr-8">
              <Image
                src="/Logo.png"
                alt="Rümpel Schmiedel Logo"
                width={320}
                height={100}
                className="h-28 md:h-32 w-auto"
                priority
              />
            </Link>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden ml-auto">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-gray-900 p-3"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <ul className={`${mobileMenuOpen ? 'absolute top-full left-0 right-0 bg-gray-100 shadow-lg' : 'hidden'} md:flex md:flex-1 md:justify-evenly md:items-center`}>
              <li><Link href="/" className="block py-4 px-4 text-gray-700 hover:text-red-600 font-semibold uppercase text-sm tracking-wide transition-colors">Start</Link></li>
              <li><Link href="/leistungen" className="block py-4 px-4 text-gray-700 hover:text-red-600 font-semibold uppercase text-sm tracking-wide transition-colors">Leistungen</Link></li>
              <li><Link href="/b2b" className="block py-4 px-4 text-gray-700 hover:text-red-600 font-semibold uppercase text-sm tracking-wide transition-colors">B2B</Link></li>
              <li><Link href="/ueber-uns" className="block py-4 px-4 text-gray-700 hover:text-red-600 font-semibold uppercase text-sm tracking-wide transition-colors">Über uns</Link></li>
              <li><Link href="/preise" className="block py-4 px-4 text-gray-700 hover:text-red-600 font-semibold uppercase text-sm tracking-wide transition-colors">Preisrechner</Link></li>
              <li><Link href="/artikel" className="block py-4 px-4 text-gray-700 hover:text-red-600 font-semibold uppercase text-sm tracking-wide transition-colors">Ratgeber</Link></li>
              <li><Link href="/kontakt" className="block py-4 px-4 text-gray-700 hover:text-red-600 font-semibold uppercase text-sm tracking-wide transition-colors">Kontakt</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
