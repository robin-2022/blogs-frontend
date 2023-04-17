/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: false,
    target: "serverless",
    images: {
      domains: [
        'images.unsplash.com',
        'firebase.google.com',

      ],
    }
},

}

module.exports = nextConfig
