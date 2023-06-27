/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net', 'cdn.shopify.com'],
  },
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
