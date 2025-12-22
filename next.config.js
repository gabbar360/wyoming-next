/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'cms.wyomingchemical.com',
      },
      {
        protocol: 'https',
        hostname: 'cms.wyomingchemical.com',
      },
    ],
  },
  output: 'standalone',
};

module.exports = nextConfig;