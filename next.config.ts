import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/d8web" : "",
  assetPrefix: isProd ? "/d8web" : "",
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    basePath: isProd ? '/d8web' : '',
  },
};

export default nextConfig;
