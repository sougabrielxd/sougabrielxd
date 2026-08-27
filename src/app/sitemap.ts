import type { MetadataRoute } from "next"
import { meta } from "@/data/content"

export const dynamic = "force-static"

/*
 * Enquanto a landing "em construção" estiver no ar em / e /en, o sitemap
 * reflete só essas duas rotas — o portfólio completo (Hero/Projects/
 * Publications, em src/app/(portfolio)/) segue no repositório, mas
 * destroteado, e não deve ser indexado até voltar a ser público.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    "pt-BR": meta.seo.url,
    "en-US": `${meta.seo.url}/en/`,
  }

  return [
    { url: meta.seo.url, alternates: { languages } },
    { url: `${meta.seo.url}/en/`, alternates: { languages } },
  ]
}
