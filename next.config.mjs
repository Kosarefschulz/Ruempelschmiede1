import nextMDX from '@next/mdx'

const withMDX = nextMDX({
  extension: /\.mdx?$/
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['tsx', 'mdx'],
  webpack: (config) => {
    config.cache = false
    return config
  }
}

export default withMDX(nextConfig)
