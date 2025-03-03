// File: /next.config.js
// Description: Next.js configuration file for GS-MVP project
// Author: GitHub Copilot
// Created: 2023-10-10

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: ['localhost'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    unoptimized: false,
  },
  eslint: {
    dirs: ['src/pages', 'src/components', 'src/utils', 'src/styles'],
  },
  poweredByHeader: false,
  compress: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
