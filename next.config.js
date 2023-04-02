/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    AUTH_SECRET: "0B5z6BqhwTWnamUmvXWzNwD8hekotJms",
    NEXTAUTH_URL: "https://hztl-social.vercel.app",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "imgur.com",
      },
    ],
  },
};

module.exports = nextConfig;
