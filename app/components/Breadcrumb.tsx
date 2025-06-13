'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[]
  currentPage?: string
}

export default function Breadcrumb({ items, currentPage }: BreadcrumbProps) {
  const pathname = usePathname()
  
  // Auto-generate breadcrumb items based on current path if not provided
  const generateBreadcrumbItems = (): BreadcrumbItem[] => {
    const pathSegments = pathname.split('/').filter(segment => segment !== '')
    const breadcrumbItems: BreadcrumbItem[] = [{ label: 'Startseite', href: '/' }]
    
    let currentPath = ''
    
    for (const segment of pathSegments) {
      currentPath += `/${segment}`
      
      // Define custom labels for specific paths
      const labels: { [key: string]: string } = {
        'artikel': 'Ratgeber',
        'leistungen': 'Leistungen',
        'kontakt': 'Kontakt',
        'preise': 'Preise',
        'b2b': 'B2B Service',
        'ueber-uns': 'Über uns',
        'datenschutz': 'Datenschutz',
        'impressum': 'Impressum',
        'nachhaltigkeit': 'Nachhaltigkeit',
        'entruempelung-bielefeld': 'Entrümpelung Bielefeld',
        'entruempelung-steinhagen': 'Entrümpelung Steinhagen',
        'entruempelung-guetersloh': 'Entrümpelung Gütersloh',
        'entruempelung-paderborn': 'Entrümpelung Paderborn',
        'entruempelung-herford': 'Entrümpelung Herford',
        'entruempelung-detmold': 'Entrümpelung Detmold'
      }
      
      const label = labels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
      
      breadcrumbItems.push({
        label,
        href: currentPath
      })
    }
    
    return breadcrumbItems
  }
  
  const breadcrumbItems = items || generateBreadcrumbItems()
  
  // Don't show breadcrumbs on homepage
  if (pathname === '/') {
    return null
  }
  
  return (
    <nav className="bg-gray-50 border-b border-gray-200 py-3" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1
            const isCurrentPage = currentPage && isLast
            
            return (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <svg
                    className="w-4 h-4 text-gray-400 mx-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
                
                {isLast || isCurrentPage ? (
                  <span
                    className="text-gray-900 font-medium truncate max-w-xs"
                    aria-current="page"
                  >
                    {currentPage || item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-[#C73E3A] transition-colors truncate max-w-xs"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
        
        {/* Structured data for breadcrumbs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": breadcrumbItems.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": currentPage && index === breadcrumbItems.length - 1 ? currentPage : item.label,
                "item": `https://ruempelschmiede.de${item.href}`
              }))
            })
          }}
        />
      </div>
    </nav>
  )
}