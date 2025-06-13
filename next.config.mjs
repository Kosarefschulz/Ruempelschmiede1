/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Core Web Vitals optimizations
  experimental: {
    scrollRestoration: true,
  },
  
  // Image optimization for better LCP
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Preload critical images for LCP improvement
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ruempelschmiede-cdn.b-cdn.net',
        port: '',
        pathname: '/**',
      },
    ],
    // Enable image optimization for Core Web Vitals
    unoptimized: false
  },
  
  // Compression for smaller bundles
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // Bundle analyzer in development
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
          })
        )
      }
      return config
    },
  }),
  
  // Performance headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  
  webpack: (config, { isServer }) => {
    // Optimize bundle size for better FID
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: {
            chunks: 'all',
            minChunks: 2,
            maxAsyncRequests: 10,
            maxInitialRequests: 5,
            name: false,
            priority: 1
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 2
          },
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2,
            priority: 0
          }
        },
      }
      
      // Preload critical chunks
      config.optimization.runtimeChunk = {
        name: 'runtime'
      }
    }
    
    // Better tree shaking and dead code elimination (only in production)
    if (!isServer && process.env.NODE_ENV === 'production') {
      config.optimization.usedExports = true
      config.optimization.sideEffects = false
      config.optimization.providedExports = true
    }
    
    // Module concatenation for smaller bundles
    config.optimization.concatenateModules = true
    
    return config
  }
}

export default nextConfig