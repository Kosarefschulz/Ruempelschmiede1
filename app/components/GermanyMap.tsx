'use client'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

interface City {
  name: string
  lat: number
  lng: number
  population?: string
  href: string
  region?: 'major' | 'bielefeld'
}

export default function GermanyMap() {
  const [showBielefeldRegion, setShowBielefeldRegion] = useState(false)
  const [L, setL] = useState<any>(null)

  useEffect(() => {
    // Import Leaflet on client side only
    import('leaflet').then((leaflet) => {
      setL(leaflet.default)
    })
  }, [])

  // Major cities with accurate coordinates
  const cities: City[] = [
    { name: 'Berlin', lat: 52.520008, lng: 13.404954, population: '3,7 Mio.', href: '/entruempelung-berlin', region: 'major' },
    { name: 'Hamburg', lat: 53.551086, lng: 9.993682, population: '1,9 Mio.', href: '/entruempelung-hamburg', region: 'major' },
    { name: 'München', lat: 48.135124, lng: 11.581981, population: '1,5 Mio.', href: '/entruempelung-muenchen', region: 'major' },
    { name: 'Köln', lat: 50.937531, lng: 6.960279, population: '1,1 Mio.', href: '/entruempelung-koeln', region: 'major' },
    { name: 'Frankfurt', lat: 50.110924, lng: 8.682127, population: '750.000', href: '/entruempelung-frankfurt', region: 'major' },
    { name: 'Stuttgart', lat: 48.775845, lng: 9.182932, population: '630.000', href: '/entruempelung-stuttgart', region: 'major' },
    { name: 'Düsseldorf', lat: 51.227741, lng: 6.773456, population: '620.000', href: '/entruempelung-duesseldorf', region: 'major' },
    { name: 'Leipzig', lat: 51.339695, lng: 12.373075, population: '600.000', href: '/entruempelung-leipzig', region: 'major' },
    { name: 'Dortmund', lat: 51.513587, lng: 7.465298, population: '590.000', href: '/entruempelung-dortmund', region: 'major' },
    { name: 'Essen', lat: 51.455643, lng: 7.011555, population: '580.000', href: '/entruempelung-essen', region: 'major' },
    { name: 'Bremen', lat: 53.079296, lng: 8.801694, population: '570.000', href: '/entruempelung-bremen', region: 'major' },
    { name: 'Dresden', lat: 51.050407, lng: 13.737262, population: '560.000', href: '/entruempelung-dresden', region: 'major' },
    { name: 'Hannover', lat: 52.375892, lng: 9.732010, population: '540.000', href: '/entruempelung-hannover', region: 'major' },
    { name: 'Nürnberg', lat: 49.452030, lng: 11.076750, population: '520.000', href: '/entruempelung-nuernberg', region: 'major' },
    { name: 'Duisburg', lat: 51.434408, lng: 6.762329, population: '500.000', href: '/entruempelung-duisburg', region: 'major' },
    { name: 'Bochum', lat: 51.481846, lng: 7.216236, population: '365.000', href: '/entruempelung-bochum', region: 'major' },
    { name: 'Wuppertal', lat: 51.256213, lng: 7.150764, population: '355.000', href: '/entruempelung-wuppertal', region: 'major' },
    { name: 'Bielefeld', lat: 52.021854, lng: 8.534775, population: '340.000', href: '/entruempelung-bielefeld', region: 'major' },
    { name: 'Bonn', lat: 50.735851, lng: 7.100660, population: '330.000', href: '/entruempelung-bonn', region: 'major' },
    { name: 'Münster', lat: 51.960665, lng: 7.626135, population: '320.000', href: '/entruempelung-muenster', region: 'major' },
    
    // Bielefeld region cities
    { name: 'Gütersloh', lat: 51.906889, lng: 8.378889, href: '/entruempelung-guetersloh', region: 'bielefeld' },
    { name: 'Herford', lat: 52.115502, lng: 8.676780, href: '/entruempelung-herford', region: 'bielefeld' },
    { name: 'Paderborn', lat: 51.719053, lng: 8.754439, href: '/entruempelung-paderborn', region: 'bielefeld' },
    { name: 'Bad Salzuflen', lat: 52.085937, lng: 8.750644, href: '/entruempelung-bad-salzuflen', region: 'bielefeld' },
    { name: 'Osnabrück', lat: 52.279911, lng: 8.047179, href: '/entruempelung-osnabrueck', region: 'bielefeld' },
    { name: 'Steinhagen', lat: 52.040543, lng: 8.393974, href: '/entruempelung-steinhagen', region: 'bielefeld' },
    { name: 'Spenge', lat: 52.139702, lng: 8.483396, href: '/entruempelung-spenge', region: 'bielefeld' },
    { name: 'Halle (Westfalen)', lat: 52.062428, lng: 8.361083, href: '/entruempelung-halle-westfalen', region: 'bielefeld' },
    { name: 'Lage', lat: 51.993748, lng: 8.793964, href: '/entruempelung-lage', region: 'bielefeld' },
    { name: 'Melle', lat: 52.202644, lng: 8.337895, href: '/entruempelung-melle', region: 'bielefeld' },
    { name: 'Detmold', lat: 51.936700, lng: 8.878333, href: '/entruempelung-detmold', region: 'bielefeld' },
    { name: 'Lemgo', lat: 52.027736, lng: 8.899537, href: '/entruempelung-lemgo', region: 'bielefeld' },
  ]

  // Filter cities based on region toggle
  const visibleCities = showBielefeldRegion 
    ? cities 
    : cities.filter(city => city.region === 'major')

  if (!L) {
    return (
      <div className="flex items-center justify-center h-[600px] bg-gray-100 rounded-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C73E3A] mx-auto mb-4"></div>
          <p className="text-gray-600">Karte wird geladen...</p>
        </div>
      </div>
    )
  }

  // Custom icon for major cities
  const majorCityIcon = L.divIcon({
    className: 'custom-pin',
    html: `
      <div style="position: relative;">
        <svg width="30" height="40" viewBox="0 0 30 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 0C6.7 0 0 6.7 0 15c0 8.3 15 25 15 25s15-16.7 15-25C30 6.7 23.3 0 15 0z" fill="#C73E3A"/>
          <circle cx="15" cy="15" r="8" fill="white"/>
          <circle cx="15" cy="15" r="5" fill="#C73E3A"/>
        </svg>
      </div>
    `,
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -40]
  })

  // Smaller icon for Bielefeld region
  const regionalCityIcon = L.divIcon({
    className: 'custom-pin',
    html: `
      <div style="position: relative;">
        <svg width="20" height="28" viewBox="0 0 20 28" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 0C4.5 0 0 4.5 0 10c0 5.5 10 18 10 18s10-12.5 10-18C20 4.5 15.5 0 10 0z" fill="#2C4F5E"/>
          <circle cx="10" cy="10" r="5" fill="white"/>
          <circle cx="10" cy="10" r="3" fill="#2C4F5E"/>
        </svg>
      </div>
    `,
    iconSize: [20, 28],
    iconAnchor: [10, 28],
    popupAnchor: [0, -28]
  })

  return (
    <div className="relative">
      <style jsx global>{`
        @import url('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css');
        
        .leaflet-container {
          height: 600px;
          width: 100%;
          border-radius: 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        .custom-pin {
          background: none;
          border: none;
        }
        
        .leaflet-popup-content-wrapper {
          border-radius: 0.5rem;
          padding: 0;
        }
        
        .leaflet-popup-content {
          margin: 0;
          min-width: 200px;
        }
        
        .popup-content {
          padding: 1rem;
        }
        
        .popup-content h3 {
          font-size: 1.125rem;
          font-weight: 700;
          color: #2C4F5E;
          margin-bottom: 0.5rem;
        }
        
        .popup-content p {
          color: #666;
          margin-bottom: 0.75rem;
        }
        
        .popup-content a {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #C73E3A;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s;
        }
        
        .popup-content a:hover {
          color: #B02E2A;
        }
      `}</style>

      <MapContainer 
        center={[51.1657, 10.4515]} 
        zoom={6} 
        scrollWheelZoom={false}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {visibleCities.map((city) => (
          <Marker 
            key={city.name} 
            position={[city.lat, city.lng]}
            icon={city.region === 'bielefeld' ? regionalCityIcon : majorCityIcon}
          >
            <Popup>
              <div className="popup-content">
                <h3>{city.name}</h3>
                {city.population && <p>{city.population} Einwohner</p>}
                <Link href={city.href}>
                  Entrümpelung {city.name} →
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Toggle button for Bielefeld region */}
      <div className="mt-4 text-center">
        <button
          onClick={() => setShowBielefeldRegion(!showBielefeldRegion)}
          className="bg-[#2C4F5E] hover:bg-[#1E3A47] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
        >
          <span>{showBielefeldRegion ? 'Region Bielefeld ausblenden' : 'Region Bielefeld anzeigen'}</span>
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${showBielefeldRegion ? 'rotate-180' : ''}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Legend */}
      <div className="mt-6 flex items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#C73E3A] rounded-full"></div>
          <span className="text-gray-600">Großstädte</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#2C4F5E] rounded-full"></div>
          <span className="text-gray-600">Region Bielefeld</span>
        </div>
      </div>
    </div>
  )
}