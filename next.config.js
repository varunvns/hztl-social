/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    AUTH_SECRET: "0B5z6BqhwTWnamUmvXWzNwD8hekotJms",
    NEXTAUTH_URL : "http://localhost:3000"
  }
}

module.exports = nextConfig