/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  async rewrites() {
    return [
      {
        source: '/api/intake/:path*',
        destination: 'https://intake-production-060e.up.railway.app/api/v1/intake/:path*',
      },
      {
        source: '/api/trident/:path*',
        destination: 'https://poseidon-core-production.up.railway.app/api/v1/trident/:path*',
      },
    ]
  },
}

module.exports = nextConfig
