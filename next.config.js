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
    domains: ['cms.wyomingchemical.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'cms.wyomingchemical.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cms.wyomingchemical.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;