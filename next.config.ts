import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static image imports without optimization
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: false,
};

export default nextConfig;
