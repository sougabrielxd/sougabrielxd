// ─────────────────────────────────────────────
// Conteúdo da landing "em construção" (/, /en).
// Reaproveita meta.name / meta.role / meta.links de content.ts — mesma
// identidade do portfólio completo, uma única fonte de verdade.
// ─────────────────────────────────────────────

import { meta } from "@/data/content"

export type Locale = "pt" | "en"

export const comingSoon = {
  pt: {
    htmlLang: "pt-BR",
    ogLocale: "pt_BR",
    path: "/",
    status: "em construção",
    thanks: "me acompanhe por aqui por enquanto 👨‍💻",
    langSwitchLabel: "Idioma",
    seo: {
      title: "Coming Soon",
      description:
        "O novo portfólio de Gabriel Lucas, engenheiro de software, está a caminho. Acompanhe atualizações no GitHub, LinkedIn, Lattes e Instagram.",
    },
  },
  en: {
    htmlLang: "en-US",
    ogLocale: "en_US",
    path: "/en",
    status: "coming soon",
    thanks: "in the meantime, find me here 👨‍💻",
    langSwitchLabel: "Language",
    seo: {
      title: "Coming Soon",
      description:
        "Gabriel Lucas's new portfolio, a software engineer, is on its way. Follow updates on GitHub, LinkedIn, Lattes and Instagram.",
    },
  },
} satisfies Record<Locale, unknown>

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: meta.name,
    url: meta.seo.url,
    jobTitle: meta.role,
    sameAs: [
      meta.links.github,
      meta.links.linkedin,
      meta.links.lattes,
      meta.links.instagram,
    ],
  }
}
