/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, 
  },
  basePath: "/d8web",      
  assetPrefix: "/d8web/",     
  eslint: {
    ignoreDuringBuilds: true,  
  },
};

module.exports = nextConfig;
