// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, 
  },
  basePath: process.env.NODE_ENV === "production" ? "/d8web" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/d8web/" : "",
};

module.exports = nextConfig;
