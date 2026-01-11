/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "vps-e1257184.vps.ovh.net",
        port: "80", // jeśli Twój WP działa na porcie 80
        pathname: "/wordpress/wp-content/uploads/**",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
