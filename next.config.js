/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: false,
    target: "serverless",
    images: {
      domains: [
        "images.unsplash.com",
        "storage.googleapis.com", // Dominio de Firebase para imágenes en la nube.
      ],
    },
},

}

module.exports = nextConfig
