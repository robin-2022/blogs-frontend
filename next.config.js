/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // eslint: {
  //   ignoreDuringBuilds: false,
  //   target: "serverless",
  // },
  images: {
    domains: ['firebasestorage.googleapis.com'],   
  },

}

module.exports = nextConfig
