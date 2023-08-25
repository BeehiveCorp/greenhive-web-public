/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [{ hostname: 'avatars.githubusercontent.com' }],
  },
}

module.exports = nextConfig
