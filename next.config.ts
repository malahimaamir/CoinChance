/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cryptologos.cc",
      "miro.medium.com",
      'media.istockphoto.com',
      'plus.unsplash.com',
      "s3-alpha-sig.figma.com",
      'github.com',
      "images.pexels.com" // Added the Pexels domain here
    ],
  },
};

module.exports = nextConfig;
