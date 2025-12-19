import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['ik.imagekit.io'],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
