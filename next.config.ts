/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"], // <-- dodaj host Unsplash
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig;
