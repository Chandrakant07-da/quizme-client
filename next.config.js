/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  buildExcludes: [/app-build-manifest.json$/],
  disable: process.env.NODE_ENV==='development'
})

const nextConfig = {
experimental: {
  appDir: true,
},
}

module.exports = withPWA(nextConfig)
