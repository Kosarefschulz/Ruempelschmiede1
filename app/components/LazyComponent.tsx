'use client'
import { Suspense, lazy } from 'react'

interface LazyComponentProps {
  component: React.ComponentType<any>
  fallback?: React.ReactNode
  props?: any
}

// Loading skeleton component
export const LoadingSkeleton = ({ height = '200px', className = '' }: { height?: string, className?: string }) => (
  <div className={`animate-pulse bg-gray-200 rounded-lg ${className}`} style={{ height }}>
    <div className="h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-gradient"></div>
  </div>
)

// Reusable lazy loading wrapper
export default function LazyComponent({ component: Component, fallback, props = {} }: LazyComponentProps) {
  return (
    <Suspense fallback={fallback || <LoadingSkeleton />}>
      <Component {...props} />
    </Suspense>
  )
}

// Pre-built lazy components for common sections
// TODO: Create these components when needed
// export const LazyFAQSection = lazy(() => import('./FAQSection'))
// export const LazyTestimonials = lazy(() => import('./Testimonials'))
// export const LazyNewsletter = lazy(() => import('./Newsletter'))
// export const LazyRelatedArticles = lazy(() => import('./RelatedArticles'))

// CSS for gradient animation
const gradientStyles = `
  @keyframes gradient {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  
  .animate-gradient {
    animation: gradient 2s ease-in-out infinite;
  }
`

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = gradientStyles
  document.head.appendChild(style)
}