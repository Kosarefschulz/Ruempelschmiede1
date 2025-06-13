'use client'
import { useEffect } from 'react'

// gtag is declared globally in GoogleAnalytics component

export default function SearchConsole() {
  useEffect(() => {
    // Track search-relevant events for Search Console insights
    const trackSearchBehavior = () => {
      // Track internal site searches
      const handleSearchSubmit = (query: string, resultCount?: number) => {
        if ((window as any).gtag) {
          (window as any).gtag('event', 'search', {
            search_term: query,
            content_category: 'site_search',
            custom_parameters: {
              search_results_count: resultCount || 0,
              search_location: 'header'
            }
          })
        }
      }

      // Track user interactions that indicate search intent
      const trackSearchIntent = (intent: string, element: string) => {
        if ((window as any).gtag) {
          (window as any).gtag('event', 'search_intent', {
            event_category: 'Search Behavior',
            event_label: intent,
            custom_parameters: {
              interaction_element: element,
              page_path: window.location.pathname
            }
          })
        }
      }

      // Track filter usage (indicates user search behavior)
      const handleFilterChange = (filterType: string, filterValue: string) => {
        if ((window as any).gtag) {
          (window as any).gtag('event', 'filter_used', {
            event_category: 'Search Behavior',
            event_label: `${filterType}: ${filterValue}`,
            custom_parameters: {
              filter_type: filterType,
              filter_value: filterValue
            }
          })
        }
      }

      // Monitor for common search-related interactions
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement
        
        // Track category filter clicks (indicates search behavior)
        if (target.closest('[data-category-filter]')) {
          const category = target.textContent || 'unknown'
          handleFilterChange('category', category)
        }
        
        // Track service interest (search intent)
        if (target.closest('[data-service-link]')) {
          const service = target.getAttribute('data-service') || 'unknown'
          trackSearchIntent('service_interest', service)
        }
        
        // Track location-based searches
        if (target.closest('[data-location-link]')) {
          const location = target.getAttribute('data-location') || 'unknown'
          trackSearchIntent('location_interest', location)
        }
      })

      // Track form submissions that indicate lead generation
      document.addEventListener('submit', (event) => {
        const form = event.target as HTMLFormElement
        if (form.matches('[data-contact-form]')) {
          const formType = form.getAttribute('data-form-type') || 'general'
          if ((window as any).gtag) {
            (window as any).gtag('event', 'conversion', {
              send_to: `${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}/form_submit`,
              event_category: 'Lead Generation',
              event_label: formType
            })
          }
        }
      })
    }

    // Track page performance metrics for Search Console
    const trackCoreWebVitals = () => {
      if ('web-vital' in window) return // Already tracked elsewhere
      
      // Track page load performance
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
          
          if (navigation && (window as any).gtag) {
            // Track key metrics for Search Console
            const metrics = {
              dns_time: navigation.domainLookupEnd - navigation.domainLookupStart,
              connect_time: navigation.connectEnd - navigation.connectStart,
              response_time: navigation.responseEnd - navigation.requestStart,
              dom_load_time: navigation.domContentLoadedEventEnd - navigation.responseEnd,
              page_load_time: navigation.loadEventEnd - navigation.fetchStart
            }
            
            // Send performance data to Analytics
            Object.entries(metrics).forEach(([metric, value]) => {
              if (value > 0) {
                (window as any).gtag!('event', 'page_performance', {
                  event_category: 'Core Web Vitals',
                  event_label: metric,
                  value: Math.round(value),
                  custom_parameters: {
                    metric_name: metric,
                    metric_value: Math.round(value),
                    page_type: getPageType()
                  }
                })
              }
            })
          }
        }, 1000)
      })
    }

    // Enhanced click tracking for Search Console insights
    const trackUserEngagement = () => {
      let clickDepth = 0
      
      document.addEventListener('click', (event) => {
        clickDepth++
        const target = event.target as HTMLElement
        
        // Track deep engagement (indicates content quality)
        if (clickDepth >= 3 && (window as any).gtag) {
          (window as any).gtag('event', 'deep_engagement', {
            event_category: 'User Engagement',
            event_label: 'High Click Depth',
            value: clickDepth,
            custom_parameters: {
              click_depth: clickDepth,
              page_path: window.location.pathname
            }
          })
        }
        
        // Track outbound link clicks
        const link = target.closest('a') as HTMLAnchorElement
        if (link && link.href && !link.href.includes(window.location.hostname)) {
          if ((window as any).gtag) {
            (window as any).gtag('event', 'click', {
              event_category: 'Outbound Link',
              event_label: link.href,
              transport_type: 'beacon'
            })
          }
        }
      })
    }

    const getPageType = (): string => {
      const path = window.location.pathname
      if (path === '/') return 'homepage'
      if (path.startsWith('/artikel')) return 'blog_post'
      if (path.startsWith('/leistungen')) return 'service_page'
      if (path === '/kontakt') return 'contact_page'
      if (path === '/preise') return 'pricing_page'
      return 'other'
    }

    // Initialize tracking only in production
    if (process.env.NODE_ENV === 'production') {
      trackSearchBehavior()
      trackCoreWebVitals()
      trackUserEngagement()
    }
  }, [])

  return null
}

// Helper functions for manual tracking
export const trackSiteSearch = (query: string, resultCount: number = 0) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'search', {
      search_term: query,
      custom_parameters: {
        search_results: resultCount,
        search_source: 'site_search'
      }
    })
  }
}

export const trackConversion = (conversionType: string, value?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      send_to: `${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}/${conversionType}`,
      value: value
    })
  }
}

export const trackLocalBusinessAction = (action: string, location?: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: 'Local Business',
      event_label: location || 'Bielefeld',
      custom_parameters: {
        business_action: action,
        service_area: location || 'Bielefeld'
      }
    })
  }
}