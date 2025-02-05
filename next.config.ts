/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cryptologos.cc",
      "miro.medium.com",
      "s3-alpha-sig.figma.com",
      "images.pexels.com" // Added the Pexels domain here
    ],
  },
};

module.exports = nextConfig;
