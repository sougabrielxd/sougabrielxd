import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export", // static export — zero server needed
  trailingSlash: true, // exporta rotas como pasta/index.html — URLs estáveis em host estático
  images: {
    unoptimized: true, // required for static export
  },
}

export default nextConfig
