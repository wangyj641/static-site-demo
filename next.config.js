/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  exportPathMap: async defaultMap => {
    return {
      ...defaultMap,
      '/repos/2': { page: '/repos', query: { page: 2 } }
    }
  }

}

module.exports = nextConfig
