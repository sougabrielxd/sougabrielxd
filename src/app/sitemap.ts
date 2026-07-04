import type { MetadataRoute } from "next"
import { meta, projects } from "@/data/content"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: meta.seo.url },
    ...projects
      .filter((project) => project.caseStudy)
      .map((project) => ({
        url: `${meta.seo.url}/projects/${project.slug}/`,
      })),
  ]
}
