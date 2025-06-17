import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Über uns */}
          <div>
            <h3 className="text-xl font-bold mb-4">Über Rümpel Schmiede</h3>
            <p className="text-gray-400">
              Ihr zuverlässiger Partner für professionelle Entrümpelung und Haushaltsauflösung in ganz Deutschland.
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-xl font-bold mb-4">Unsere Leistungen</h3>
            <ul className="space-y-2">
              <li><Link href="/leistungen#haushaltsaufloesung" className="text-gray-400 hover:text-white">Haushaltsauflösung</Link></li>
              <li><Link href="/leistungen#gewerbeaufloesung" className="text-gray-400 hover:text-white">Gewerbeauflösung</Link></li>
              <li><Link href="/leistungen#messie-entruempelung" className="text-gray-400 hover:text-white">Messiewohnung</Link></li>
              <li><Link href="/leistungen#keller-dachboden" className="text-gray-400 hover:text-white">Keller/Dachboden</Link></li>
              <li><Link href="/leistungen#express-service" className="text-gray-400 hover:text-white">Express-Service</Link></li>
            </ul>
          </div>

          {/* Rechtliches & Karriere */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mehr</h3>
            <ul className="space-y-2">
              <li><Link href="/impressum" className="text-gray-400 hover:text-white">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-gray-400 hover:text-white">Datenschutz</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link href="/karriere" className="text-gray-400 hover:text-white">💼 Karriere</Link></li>
              <li><Link href="/franchise" className="text-gray-400 hover:text-white">🚀 Unternehmer werden</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <p className="text-gray-400 mb-2">Zentrale Bielefeld</p>
            <p className="text-gray-400 mb-2">Tel: 0800 0060970</p>
            <p className="text-gray-400 mb-2">E-Mail: info@ruempelschmiede.de</p>
            <p className="text-gray-400">Mo-Sa: 07:00 - 20:00 Uhr</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Rümpel Schmiede. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
