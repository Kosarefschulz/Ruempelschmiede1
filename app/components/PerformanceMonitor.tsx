'use client'
import { useEffect } from 'react'

// gtag is declared globally in GoogleAnalytics component

// Core Web Vitals monitoring
export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    // Monitor Core Web Vitals
    const trackWebVitals = () => {
      // LCP - Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            const lastEntry = entries[entries.length - 1]
            
            if (lastEntry && (window as any).gtag) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'LCP',
                value: Math.round(lastEntry.startTime)
              })
            }
          })
          
          lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })
          
          // FID - First Input Delay
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            entries.forEach((entry: any) => {
              if (entry.processingStart && entry.startTime && (window as any).gtag) {
                (window as any).gtag('event', 'web_vitals', {
                  event_category: 'Performance',
                  event_label: 'FID',
                  value: Math.round(entry.processingStart - entry.startTime)
                })
              }
            })
          })
          
          fidObserver.observe({ type: 'first-input', buffered: true })
          
          // CLS - Cumulative Layout Shift
          let clsValue = 0
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value
              }
            })
            
            if ((window as any).gtag) {
              (window as any).gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'CLS',
                value: Math.round(clsValue * 1000)
              })
            }
          })
          
          clsObserver.observe({ type: 'layout-shift', buffered: true })
          
        } catch (error) {
          console.warn('Performance monitoring failed:', error)
        }
      }
    }

    // Track page load time
    const trackPageLoad = () => {
      if ('performance' in window && 'getEntriesByType' in performance) {
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        
        if (navigationEntry && (window as any).gtag) {
          // Track various loading metrics
          const metrics = {
            dns_time: navigationEntry.domainLookupEnd - navigationEntry.domainLookupStart,
            connect_time: navigationEntry.connectEnd - navigationEntry.connectStart,
            server_time: navigationEntry.responseEnd - navigationEntry.requestStart,
            dom_time: navigationEntry.domContentLoadedEventEnd - navigationEntry.responseEnd,
            load_time: navigationEntry.loadEventEnd - navigationEntry.fetchStart
          }
          
          Object.entries(metrics).forEach(([key, value]) => {
            if (value > 0) {
              (window as any).gtag('event', 'page_timing', {
                event_category: 'Performance',
                event_label: key,
                value: Math.round(value)
              })
            }
          })
        }
      }
    }

    // Initialize monitoring
    trackWebVitals()
    
    // Track page load after everything is loaded
    if (document.readyState === 'complete') {
      trackPageLoad()
    } else {
      window.addEventListener('load', trackPageLoad)
    }

    // Resource loading monitoring
    const trackResourceLoading = () => {
      if ('PerformanceObserver' in window) {
        try {
          const resourceObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            entries.forEach((entry: any) => {
              // Track slow loading resources
              if (entry.duration > 1000 && (window as any).gtag) {
                (window as any).gtag('event', 'slow_resource', {
                  event_category: 'Performance',
                  event_label: entry.name,
                  value: Math.round(entry.duration)
                })
              }
            })
          })
          
          resourceObserver.observe({ type: 'resource', buffered: true })
        } catch (error) {
          console.warn('Resource monitoring failed:', error)
        }
      }
    }

    trackResourceLoading()

    // Cleanup
    return () => {
      window.removeEventListener('load', trackPageLoad)
    }
  }, [])

  // Development performance hints
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('🚀 Performance Monitor loaded - monitoring Core Web Vitals')
      
      // Check for common performance issues
      const checkPerformance = () => {
        if ('performance' in window) {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
          
          if (navigation) {
            const loadTime = navigation.loadEventEnd - navigation.fetchStart
            const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart
            
            console.log(`📊 Page Load Time: ${Math.round(loadTime)}ms`)
            console.log(`📊 DOM Content Loaded: ${Math.round(domContentLoaded)}ms`)
            
            if (loadTime > 3000) {
              console.warn('⚠️ Page load time is over 3 seconds. Consider optimizing images, CSS, and JavaScript.')
            }
            
            if (domContentLoaded > 1500) {
              console.warn('⚠️ DOM content loaded time is over 1.5 seconds. Consider reducing HTML size and optimizing critical CSS.')
            }
          }
        }
      }
      
      if (document.readyState === 'complete') {
        checkPerformance()
      } else {
        window.addEventListener('load', checkPerformance)
      }
    }
  }, [])

  return null
}