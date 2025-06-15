'use client'
import { useState } from 'react'
import Link from 'next/link'

interface City {
  name: string
  x: number
  y: number
  population?: string
  href: string
  region?: 'major' | 'bielefeld'
}

export default function GermanyMapSVG() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)
  const [showBielefeldRegion, setShowBielefeldRegion] = useState(false)

  // Cities with positions relative to SVG viewBox (0-350 x 0-440)
  const cities: City[] = [
    // Major cities
    { name: 'Berlin', x: 275, y: 110, population: '3,7 Mio.', href: '/entruempelung-berlin', region: 'major' },
    { name: 'Hamburg', x: 200, y: 70, population: '1,9 Mio.', href: '/entruempelung-hamburg', region: 'major' },
    { name: 'München', x: 230, y: 350, population: '1,5 Mio.', href: '/entruempelung-muenchen', region: 'major' },
    { name: 'Köln', x: 110, y: 200, population: '1,1 Mio.', href: '/entruempelung-koeln', region: 'major' },
    { name: 'Frankfurt', x: 155, y: 220, population: '750.000', href: '/entruempelung-frankfurt', region: 'major' },
    { name: 'Stuttgart', x: 175, y: 315, population: '630.000', href: '/entruempelung-stuttgart', region: 'major' },
    { name: 'Düsseldorf', x: 105, y: 195, population: '620.000', href: '/entruempelung-duesseldorf', region: 'major' },
    { name: 'Leipzig', x: 250, y: 185, population: '600.000', href: '/entruempelung-leipzig', region: 'major' },
    { name: 'Dortmund', x: 120, y: 180, population: '590.000', href: '/entruempelung-dortmund', region: 'major' },
    { name: 'Essen', x: 110, y: 185, population: '580.000', href: '/entruempelung-essen', region: 'major' },
    { name: 'Bremen', x: 165, y: 90, population: '570.000', href: '/entruempelung-bremen', region: 'major' },
    { name: 'Dresden', x: 280, y: 200, population: '560.000', href: '/entruempelung-dresden', region: 'major' },
    { name: 'Hannover', x: 185, y: 115, population: '540.000', href: '/entruempelung-hannover', region: 'major' },
    { name: 'Nürnberg', x: 220, y: 280, population: '520.000', href: '/entruempelung-nuernberg', region: 'major' },
    { name: 'Duisburg', x: 105, y: 185, population: '500.000', href: '/entruempelung-duisburg', region: 'major' },
    { name: 'Bochum', x: 115, y: 180, population: '365.000', href: '/entruempelung-bochum', region: 'major' },
    { name: 'Wuppertal', x: 115, y: 190, population: '355.000', href: '/entruempelung-wuppertal', region: 'major' },
    { name: 'Bielefeld', x: 160, y: 150, population: '340.000', href: '/entruempelung-bielefeld', region: 'major' },
    { name: 'Bonn', x: 110, y: 210, population: '330.000', href: '/entruempelung-bonn', region: 'major' },
    { name: 'Münster', x: 135, y: 145, population: '320.000', href: '/entruempelung-muenster', region: 'major' },
    
    // Bielefeld region cities
    { name: 'Gütersloh', x: 155, y: 155, href: '/entruempelung-guetersloh', region: 'bielefeld' },
    { name: 'Herford', x: 165, y: 148, href: '/entruempelung-herford', region: 'bielefeld' },
    { name: 'Paderborn', x: 170, y: 175, href: '/entruempelung-paderborn', region: 'bielefeld' },
    { name: 'Bad Salzuflen', x: 168, y: 152, href: '/entruempelung-bad-salzuflen', region: 'bielefeld' },
    { name: 'Osnabrück', x: 140, y: 130, href: '/entruempelung-osnabrueck', region: 'bielefeld' },
    { name: 'Steinhagen', x: 158, y: 152, href: '/entruempelung-steinhagen', region: 'bielefeld' },
    { name: 'Spenge', x: 162, y: 146, href: '/entruempelung-spenge', region: 'bielefeld' },
    { name: 'Halle', x: 156, y: 154, href: '/entruempelung-halle-westfalen', region: 'bielefeld' },
    { name: 'Lage', x: 172, y: 153, href: '/entruempelung-lage', region: 'bielefeld' },
    { name: 'Melle', x: 150, y: 135, href: '/entruempelung-melle', region: 'bielefeld' },
    { name: 'Detmold', x: 175, y: 155, href: '/entruempelung-detmold', region: 'bielefeld' },
    { name: 'Lemgo', x: 173, y: 150, href: '/entruempelung-lemgo', region: 'bielefeld' },
  ]

  const visibleCities = showBielefeldRegion 
    ? cities 
    : cities.filter(city => city.region === 'major')

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <svg
        viewBox="0 0 350 440"
        className="w-full h-auto"
        style={{ backgroundColor: '#f5f5f0' }}
      >
        {/* Realistic Germany outline */}
        <path
          d="M 175,10
             L 190,8
             Q 210,10 220,15
             L 235,20
             Q 250,25 260,35
             L 270,45
             Q 280,55 285,65
             L 290,80
             Q 295,90 295,100
             L 290,115
             Q 285,125 280,135
             L 275,150
             Q 270,165 270,175
             L 275,185
             Q 280,195 280,205
             L 275,220
             Q 270,235 265,250
             L 260,265
             Q 255,280 250,295
             L 245,310
             Q 240,325 235,340
             L 230,355
             Q 225,365 220,375
             L 210,385
             Q 200,395 190,400
             L 175,405
             Q 160,410 145,405
             L 130,400
             Q 115,395 105,385
             L 95,375
             Q 85,365 80,355
             L 75,340
             Q 70,325 65,310
             L 60,295
             Q 55,280 50,265
             L 45,250
             Q 40,235 40,220
             L 35,205
             Q 30,195 30,185
             L 35,175
             Q 40,165 40,155
             L 45,140
             Q 50,125 55,115
             L 60,100
             Q 65,90 70,80
             L 75,65
             Q 80,55 90,45
             L 100,35
             Q 110,25 125,20
             L 140,15
             Q 155,10 170,10
             Z"
          fill="#2C4F5E"
          stroke="#1E3A47"
          strokeWidth="2"
        />
        
        {/* Simple state borders */}
        <g stroke="#ffffff" strokeWidth="1" strokeDasharray="3,2" fill="none" opacity="0.3">
          <line x1="100" y1="100" x2="250" y2="100" />
          <line x1="90" y1="160" x2="260" y2="160" />
          <line x1="100" y1="220" x2="250" y2="220" />
          <line x1="110" y1="280" x2="240" y2="280" />
          <line x1="175" y1="60" x2="175" y2="380" />
          <line x1="130" y1="80" x2="130" y2="360" />
          <line x1="220" y1="80" x2="220" y2="360" />
        </g>

        {/* Cities */}
        {visibleCities.map((city) => (
          <Link href={city.href} key={city.name}>
            <g
              className="cursor-pointer transform transition-all duration-200 hover:scale-110"
              onMouseEnter={() => setHoveredCity(city.name)}
              onMouseLeave={() => setHoveredCity(null)}
            >
              {city.region === 'major' ? (
                <>
                  {/* Major city pin */}
                  <circle
                    cx={city.x}
                    cy={city.y + 12}
                    r="2"
                    fill="rgba(0,0,0,0.2)"
                  />
                  <path
                    d={`M ${city.x} ${city.y}
                        c -8,-8 -8,-12 0,-20
                        s 8,-8 8,0
                        s 8,12 0,20
                        l -4,8
                        z`}
                    fill="#ffffff"
                    stroke="#C73E3A"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx={city.x}
                    cy={city.y - 8}
                    r="4"
                    fill="#C73E3A"
                  />
                </>
              ) : (
                <>
                  {/* Regional city dot */}
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="4"
                    fill="#ffffff"
                    stroke="#2C4F5E"
                    strokeWidth="1"
                  />
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="2"
                    fill="#2C4F5E"
                  />
                </>
              )}

              {/* City label on hover */}
              {hoveredCity === city.name && (
                <g>
                  <rect
                    x={city.x - city.name.length * 4 - 10}
                    y={city.y - 30}
                    width={city.name.length * 8 + 20}
                    height="24"
                    fill="white"
                    stroke="#2C4F5E"
                    strokeWidth="1"
                    rx="4"
                    filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                  />
                  <text
                    x={city.x}
                    y={city.y - 18}
                    textAnchor="middle"
                    fontSize="12"
                    fill="#2C4F5E"
                    fontWeight="bold"
                  >
                    {city.name}
                  </text>
                  {city.population && (
                    <text
                      x={city.x}
                      y={city.y - 6}
                      textAnchor="middle"
                      fontSize="10"
                      fill="#666"
                    >
                      {city.population}
                    </text>
                  )}
                </g>
              )}
            </g>
          </Link>
        ))}

        {/* Bielefeld region highlight circle when active */}
        {showBielefeldRegion && (
          <circle
            cx="160"
            cy="150"
            r="35"
            fill="none"
            stroke="#C73E3A"
            strokeWidth="1.5"
            strokeDasharray="4,2"
            opacity="0.3"
          />
        )}
      </svg>

      {/* Toggle button */}
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