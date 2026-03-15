import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "/iractis",
  assetPrefix: "/iractis/",
  images: { unoptimized: true },
};

export default nextConfig;
