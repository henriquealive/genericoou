import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // full SSG → zero server JS at runtime
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
