'use client'
import dynamic from 'next/dynamic'

// Dynamically import the map component with no SSR
const GermanyMapSVG = dynamic(
  () => import('./GermanyMapSVG'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-[500px] bg-gray-100 rounded-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C73E3A] mx-auto mb-4"></div>
          <p className="text-gray-600">Karte wird geladen...</p>
        </div>
      </div>
    )
  }
)

export default function GermanyMapWrapper() {
  return <GermanyMapSVG />
}