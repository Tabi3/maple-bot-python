/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  domains: ["www6b3.wolframalpha.com"],
  images: ['image/avif', 'image/svg', 'image/webp']
}

const images = {
  domains: ['www6b3.wolframalpha.com']
}

module.exports = {nextConfig, images: images, distDir: 'build'}
