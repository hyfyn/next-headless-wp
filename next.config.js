/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.IMAGE_HOST,
        port: "",
        pathname: "/**",
      },
    ],
  },
};
module.exports = nextConfig;
