/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Removing static export configuration
  // output: 'export',
  trailingSlash: true,
  images: {
    domains: ['localhost'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    // Change to false since we're not using static export
    unoptimized: false,
  },
  // Removing i18n config as it's incompatible with static export
  eslint: {
    dirs: ['src/pages', 'src/components', 'src/utils', 'src/styles'],
  },
  poweredByHeader: false,
  compress: true,
  // Explicitly define page extensions
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // Headers configuration will be ignored in static export mode
  webpack(config) {
    // Configuring SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
