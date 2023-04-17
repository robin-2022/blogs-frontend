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
        "firebaseapp.com",
        "console.firebase.google.com/project/blog-images-a9cef/storage/blog-images-a9cef.appspot.com/files",
      ],
    },
},

}

module.exports = nextConfig
