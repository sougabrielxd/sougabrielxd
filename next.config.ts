import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export", // static export — zero server needed
  images: {
    unoptimized: true, // required for static export
  },
}

export default nextConfig
