/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.IMAGE_HOST,
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "http",
        hostname: process.env.IMAGE_HOST,
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};
module.exports = nextConfig;
