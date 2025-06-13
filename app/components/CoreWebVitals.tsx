'use client'
import { useEffect } from 'react'

// gtag is declared globally in GoogleAnalytics component

interface VitalMetric {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
}

export default function CoreWebVitals() {
  useEffect(() => {
    // Only run in production and when gtag is available
    if (process.env.NODE_ENV !== 'production' || !(window as any).gtag) return

    // Core Web Vitals thresholds
    const thresholds = {
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      inp: { good: 200, poor: 500 },
      ttfb: { good: 800, poor: 1800 }
    }

    // Rating function
    const getRating = (value: number, metric: keyof typeof thresholds): 'good' | 'needs-improvement' | 'poor' => {
      const threshold = thresholds[metric]
      if (value <= threshold.good) return 'good'
      if (value <= threshold.poor) return 'needs-improvement'
      return 'poor'
    }

    // Track metric to GA4
    const trackVital = (metric: VitalMetric) => {
      if ((window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: metric.name,
          value: Math.round(metric.value),
          custom_parameters: {
            metric_name: metric.name,
            metric_value: Math.round(metric.value),
            metric_rating: metric.rating,
            page_path: window.location.pathname
          }
        })
      }
    }

    // LCP Observer (Largest Contentful Paint)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1] as PerformanceEntry & { startTime: number }
          
          if (lastEntry) {
            const metric: VitalMetric = {
              name: 'LCP',
              value: lastEntry.startTime,
              rating: getRating(lastEntry.startTime, 'lcp')
            }
            trackVital(metric)
            
            // Console logging for development insights
            if (process.env.NODE_ENV !== 'production') {
              console.log(`🎯 LCP: ${Math.round(metric.value)}ms (${metric.rating})`)
            }
          }
        })
        
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })

        // FID Observer (First Input Delay)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            if (entry.processingStart && entry.startTime) {
              const fid = entry.processingStart - entry.startTime
              const metric: VitalMetric = {
                name: 'FID',
                value: fid,
                rating: getRating(fid, 'fid')
              }
              trackVital(metric)
              
              if (process.env.NODE_ENV !== 'production') {
                console.log(`⚡ FID: ${Math.round(metric.value)}ms (${metric.rating})`)
              }
            }
          })
        })
        
        fidObserver.observe({ type: 'first-input', buffered: true })

        // CLS Observer (Cumulative Layout Shift)
        let clsValue = 0
        let clsEntryCount = 0
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
              clsEntryCount++
            }
          })
          
          // Track CLS after meaningful shifts
          if (clsEntryCount >= 3 || clsValue > 0.05) {
            const metric: VitalMetric = {
              name: 'CLS',
              value: clsValue,
              rating: getRating(clsValue, 'cls')
            }
            trackVital(metric)
            
            if (process.env.NODE_ENV !== 'production') {
              console.log(`📏 CLS: ${metric.value.toFixed(3)} (${metric.rating})`)
            }
          }
        })
        
        clsObserver.observe({ type: 'layout-shift', buffered: true })

        // INP Observer (Interaction to Next Paint) - New Core Web Vital
        const inpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            if (entry.interactionId) {
              const metric: VitalMetric = {
                name: 'INP',
                value: entry.duration,
                rating: getRating(entry.duration, 'inp')
              }
              trackVital(metric)
              
              if (process.env.NODE_ENV !== 'production') {
                console.log(`🔄 INP: ${Math.round(metric.value)}ms (${metric.rating})`)
              }
            }
          })
        })
        
        inpObserver.observe({ type: 'event', buffered: true } as any)

        // TTFB (Time to First Byte)
        const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[]
        if (navigationEntries.length > 0) {
          const navEntry = navigationEntries[0]
          const ttfb = navEntry.responseStart - navEntry.requestStart
          
          if (ttfb > 0) {
            const metric: VitalMetric = {
              name: 'TTFB',
              value: ttfb,
              rating: getRating(ttfb, 'ttfb')
            }
            trackVital(metric)
            
            if (process.env.NODE_ENV !== 'production') {
              console.log(`🌐 TTFB: ${Math.round(metric.value)}ms (${metric.rating})`)
            }
          }
        }

        // Page Load Performance Summary
        window.addEventListener('load', () => {
          setTimeout(() => {
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
            
            if (navigation && (window as any).gtag) {
              // Track overall page performance
              (window as any).gtag('event', 'page_performance_summary', {
                event_category: 'Performance',
                custom_parameters: {
                  page_load_time: Math.round(navigation.loadEventEnd - navigation.fetchStart),
                  dom_load_time: Math.round(navigation.domContentLoadedEventEnd - navigation.responseEnd),
                  server_response_time: Math.round(navigation.responseEnd - navigation.requestStart),
                  page_path: window.location.pathname
                }
              })
              
              if (process.env.NODE_ENV !== 'production') {
                console.log('📊 Page Performance Summary:', {
                  'Total Load Time': `${Math.round(navigation.loadEventEnd - navigation.fetchStart)}ms`,
                  'DOM Load Time': `${Math.round(navigation.domContentLoadedEventEnd - navigation.responseEnd)}ms`,
                  'Server Time': `${Math.round(navigation.responseEnd - navigation.requestStart)}ms`,
                  'DNS Time': `${Math.round(navigation.domainLookupEnd - navigation.domainLookupStart)}ms`,
                  'Connect Time': `${Math.round(navigation.connectEnd - navigation.connectStart)}ms`
                })
              }
            }
          }, 1000)
        })

        // Cleanup observers on unmount
        return () => {
          lcpObserver.disconnect()
          fidObserver.disconnect()
          clsObserver.disconnect()
          inpObserver.disconnect()
        }
      } catch (error) {
        console.warn('Core Web Vitals monitoring failed:', error)
      }
    }
  }, [])

  return null
}

// Helper function to manually track custom vitals
export const trackCustomVital = (name: string, value: number, context?: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'custom_vital', {
      event_category: 'Performance',
      event_label: name,
      value: Math.round(value),
      custom_parameters: {
        vital_name: name,
        vital_value: Math.round(value),
        vital_context: context || 'custom',
        page_path: window.location.pathname
      }
    })
  }
}

// Track form submission performance
export const trackFormPerformance = (formName: string, submissionTime: number) => {
  trackCustomVital('form_submission_time', submissionTime, formName)
}

// Track image loading performance
export const trackImageLoad = (imageName: string, loadTime: number) => {
  trackCustomVital('image_load_time', loadTime, imageName)
}