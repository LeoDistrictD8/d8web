// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // tells Next.js to export static HTML
  images: {
    unoptimized: true, // required, since GH Pages doesn't support Next Image optimization
  },
  basePath: process.env.NODE_ENV === "production" ? "/d8web" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/d8web/" : "",
};

module.exports = nextConfig;
