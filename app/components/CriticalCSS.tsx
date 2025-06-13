'use client'
import { useEffect } from 'react'

export default function CriticalCSS() {
  useEffect(() => {
    // Preload critical CSS for better LCP
    const criticalStyles = `
      /* Critical CSS for above-the-fold content */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hiA.woff2') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hiA.woff2') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      
      /* Critical styles for header */
      header {
        background-color: #ffffff;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        position: sticky;
        top: 0;
        z-index: 50;
      }
      
      /* Critical styles for hero section */
      .hero-section {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: clamp(400px, 70vh, 800px);
        display: flex;
        align-items: center;
        background: linear-gradient(135deg, #2C4F5E 0%, #1a2b36 100%);
      }
      
      /* Critical button styles */
      .btn-primary {
        background-color: #C73E3A;
        color: #ffffff;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        font-weight: 600;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.2s ease-in-out;
      }
      
      .btn-primary:hover {
        background-color: #B02E2A;
      }
      
      /* Layout shift prevention */
      .logo-container {
        width: 280px;
        height: 90px;
        display: flex;
        align-items: center;
      }
      
      @media (max-width: 1024px) {
        .logo-container {
          width: 200px;
          height: 64px;
        }
      }
      
      /* Prevent layout shifts from images */
      img {
        max-width: 100%;
        height: auto;
      }
      
      .next-image {
        position: relative;
        display: block;
      }
      
      /* Video container to prevent CLS */
      .video-container {
        position: relative;
        width: 100%;
        height: 70vh;
        overflow: hidden;
        background-color: #2C4F5E;
      }
      
      .video-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(44, 79, 94, 0.4) 0%, rgba(26, 43, 54, 0.4) 100%);
        z-index: 1;
      }
      
      /* Skeleton loading for better perceived performance */
      .skeleton {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
      }
      
      @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      
      /* Critical text styles */
      h1 {
        font-size: clamp(1.5rem, 4vw, 4rem);
        font-weight: 700;
        line-height: 1.2;
        margin: 0 0 1.5rem 0;
      }
      
      h2 {
        font-size: clamp(1.25rem, 3vw, 2.5rem);
        font-weight: 600;
        line-height: 1.3;
        margin: 0 0 1rem 0;
      }
      
      /* Mobile-first responsive design */
      @media (max-width: 640px) {
        .hero-section {
          height: clamp(300px, 60vh, 600px);
          padding: 1rem;
        }
        
        h1 {
          font-size: clamp(1.25rem, 6vw, 2.5rem);
          margin-bottom: 1rem;
        }
        
        .btn-primary {
          padding: 0.75rem 1.5rem;
          width: 100%;
          text-align: center;
        }
      }
    `
    
    // Inject critical CSS immediately
    const styleElement = document.createElement('style')
    styleElement.textContent = criticalStyles
    styleElement.id = 'critical-css'
    
    // Insert at the beginning of head for high priority
    const firstLink = document.head.querySelector('link')
    if (firstLink) {
      document.head.insertBefore(styleElement, firstLink)
    } else {
      document.head.appendChild(styleElement)
    }
    
    // Preload important resources
    const preloadResources = [
      {
        href: '/Logo.png',
        as: 'image',
        type: 'image/png'
      },
      {
        href: 'https://ruempelschmiede-cdn.b-cdn.net/Mein%20Film.mp4',
        as: 'video',
        type: 'video/mp4'
      }
    ]
    
    preloadResources.forEach(resource => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = resource.href
      link.as = resource.as
      if (resource.type) {
        link.type = resource.type
      }
      document.head.appendChild(link)
    })
    
    // Cleanup on unmount
    return () => {
      const criticalStyleElement = document.getElementById('critical-css')
      if (criticalStyleElement) {
        criticalStyleElement.remove()
      }
    }
  }, [])
  
  return null
}

// Hook for measuring and preventing layout shifts
export const useLayoutShiftPrevention = () => {
  useEffect(() => {
    // Set explicit dimensions for dynamic content containers
    const preventLayoutShift = () => {
      // Logo containers
      const logoContainers = document.querySelectorAll('.logo-container')
      logoContainers.forEach((container: Element) => {
        const htmlContainer = container as HTMLElement
        if (!htmlContainer.style.minHeight) {
          const isMobile = window.innerWidth < 1024
          htmlContainer.style.minHeight = isMobile ? '64px' : '90px'
          htmlContainer.style.minWidth = isMobile ? '200px' : '280px'
        }
      })
      
      // Video containers
      const videoContainers = document.querySelectorAll('.video-container, video')
      videoContainers.forEach((container: Element) => {
        const htmlContainer = container as HTMLElement
        if (!htmlContainer.style.aspectRatio && !htmlContainer.style.height) {
          htmlContainer.style.aspectRatio = '16/9'
          htmlContainer.style.minHeight = '400px'
        }
      })
      
      // Image containers
      const imageContainers = document.querySelectorAll('[data-next-image-container]')
      imageContainers.forEach((container: Element) => {
        const htmlContainer = container as HTMLElement
        if (!htmlContainer.style.position) {
          htmlContainer.style.position = 'relative'
          htmlContainer.style.display = 'block'
        }
      })
    }
    
    // Apply immediately and on resize
    preventLayoutShift()
    window.addEventListener('resize', preventLayoutShift)
    
    // Observe layout shifts and fix them
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (entry.value > 0.1 && !entry.hadRecentInput) {
            console.warn('Layout shift detected:', {
              value: entry.value,
              sources: entry.sources?.map((source: any) => ({
                element: source.element?.tagName,
                previousRect: source.previousRect,
                currentRect: source.currentRect
              }))
            })
          }
        })
      })
      
      observer.observe({ type: 'layout-shift', buffered: true })
      
      return () => {
        observer.disconnect()
        window.removeEventListener('resize', preventLayoutShift)
      }
    }
    
    return () => {
      window.removeEventListener('resize', preventLayoutShift)
    }
  }, [])
}