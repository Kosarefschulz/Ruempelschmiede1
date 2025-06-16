'use client'
import { useState } from 'react';

export default function CitiesSection() {
  const [showBielefeld, setShowBielefeld] = useState(false);

  return (
    <section className="py-16 bg-[#2C4F5E] text-white">
      <div className="max-w-7xl mx-auto px-4">
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
          <a href="/entruempelung-leipzig" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
            <h3 className="font-bold text-lg">Leipzig</h3>
            <p className="text-sm opacity-80">600.000 Einwohner</p>
          </a>
          <a href="/entruempelung-dortmund" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
            <h3 className="font-bold text-lg">Dortmund</h3>
            <p className="text-sm opacity-80">590.000 Einwohner</p>
          </a>
          <a href="/entruempelung-essen" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
            <h3 className="font-bold text-lg">Essen</h3>
            <p className="text-sm opacity-80">580.000 Einwohner</p>
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
            <p className="text-sm opacity-80">320.000 Einwohner</p>
          </a>
        </div>

        {/* Region Bielefeld Button */}
        <div className="text-center mb-8">
          <button 
            onClick={() => setShowBielefeld(!showBielefeld)}
            className="inline-flex items-center bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Region Bielefeld & Umgebung
            <svg 
              className={`w-5 h-5 ml-2 transition-transform ${showBielefeld ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Region Bielefeld Cities */}
        {showBielefeld && (
          <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8 animate-fadeIn">
            <a href="/entruempelung-werther" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Werther</h3>
              <p className="text-sm opacity-80">3 km</p>
            </a>
            <a href="/entruempelung-halle-westfalen" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Halle (Westfalen)</h3>
              <p className="text-sm opacity-80">12 km</p>
            </a>
            <a href="/entruempelung-guetersloh" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Gütersloh</h3>
              <p className="text-sm opacity-80">15 km</p>
            </a>
            <a href="/entruempelung-herford" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Herford</h3>
              <p className="text-sm opacity-80">20 km</p>
            </a>
            <a href="/entruempelung-paderborn" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Paderborn</h3>
              <p className="text-sm opacity-80">45 km</p>
            </a>
            <a href="/entruempelung-bad-salzuflen" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Bad Salzuflen</h3>
              <p className="text-sm opacity-80">25 km</p>
            </a>
            <a href="/entruempelung-osnabrueck" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Osnabrück</h3>
              <p className="text-sm opacity-80">50 km</p>
            </a>
            <a href="/entruempelung-steinhagen" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Steinhagen</h3>
              <p className="text-sm opacity-80">8 km</p>
            </a>
            <a href="/entruempelung-spenge" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Spenge</h3>
              <p className="text-sm opacity-80">15 km</p>
            </a>
            <a href="/entruempelung-lage" className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg">Lage</h3>
              <p className="text-sm opacity-80">30 km</p>
            </a>
          </div>
        )}

        <div className="text-center">
          <p className="text-lg mb-4 opacity-90">
            Ihre Stadt fehlt noch? Wir kommen trotzdem zu Ihnen!
          </p>
          <p className="text-sm opacity-80 max-w-2xl mx-auto mb-6">
            Wir sind deutschlandweit im Einsatz und kommen auch in kleinere Städte und Gemeinden. 
            Kontaktieren Sie uns einfach - wir finden eine Lösung für Sie!
          </p>
          <a href="/kontakt" className="inline-flex items-center bg-[#C73E3A] hover:bg-[#B02E2A] text-white px-8 py-3 rounded-lg font-semibold transition-all">
            Jetzt anfragen
            <span className="ml-2 text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}