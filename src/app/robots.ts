import type { MetadataRoute } from "next"
import { meta } from "@/data/content"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${meta.seo.url}/sitemap.xml`,
  }
}
