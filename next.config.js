/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: false,
    target: "serverless",
    images: {
      domains: [
        "https://images.unsplash.com",
        "https://storage.googleapis.com", // Dominio de Firebase para imágenes en la nube.
        "https://firebaseapp.com",
        "console.firebase.google.com/project/blog-images-a9cef/storage/blog-images-a9cef.appspot.com/files",
      ],
    },
},

}

module.exports = nextConfig
