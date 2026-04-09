// ─────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH
// Edit only this file to update the portfolio.
// ─────────────────────────────────────────────

/** Trecho de texto, negrito ou link institucional (sublinhado roxo no Hero). */
export type IntroSegment =
  | string
  | { text: string; href: string }
  | { strong: string }

export const meta = {
  name: "gabriel",
  /** Mostrado no lugar do nome ao passar o mouse (identidade no topo). */
  nameHover: "gabriel_lucas ~$",
  role: "software engineer",
  /** Parágrafos do resumo (após a saudação): strings, `{ strong }` ou `{ text, href }`. */
  introParagraphs: [
    [
      "Sou ",
      { strong: "Software Engineer" },
      " no sertão do Nordeste, construindo sistemas em produção para indústria, saúde ocupacional e IA aplicada. Atualmente na ",
      {
        text: "Starke Vision",
        href: "https://starkevision.com.br/",
      },
      ". Antes, estágio na ",
      {
        text: "Receita Federal",
        href: "https://www.gov.br/receitafederal/pt-br/canais_atendimento/fale-conosco/presencial/ce/juazeiro-do-norte",
      },
      ". Interesse crescente em pesquisa e sistemas inteligentes.",
    ],
  ] satisfies IntroSegment[][],
  links: {
    github: "https://github.com/sougabrielxd",
    linkedin: "https://linkedin.com/in/gabriellucasafb",
    resume: "/resume.pdf",
    lattes: "https://lattes.cnpq.br/8033615391408980",
  },
  seo: {
    title: "Gabriel Lucas — Engenheiro de software",
    description:
      "Sistemas em produção no sertão do Nordeste — indústria, saúde ocupacional e IA. Starke Vision. Brasil.",
    url: "https://gabriellucasafb.com.br",
  },
}

export type ProjectImageOrientation = "landscape" | "portrait"

export type Project = {
  slug: string
  title: string
  /** Papel no projeto (ex.: Desenvolvedor, Colaborador técnico). */
  role: string
  /** Frase principal (ideal 8–16 palavras). */
  lead: string
  /** Linha opcional (ideal 6–12 palavras), só se agregar contexto. */
  hint?: string
  period: string
  /** Opcional: `/public/projects/...` */
  image?: string
  /**
   * Orientação da imagem principal.
   * "landscape" (padrão) → aspect-[16/10], full-width
   * "portrait"           → aspect-[3/4], centralizado com max-w menor
   */
  imageOrientation?: ProjectImageOrientation
  /** Capturas ou fotos extras abaixo da imagem principal. */
  gallery?: string[]
  /**
   * Orientação das imagens da gallery, por índice.
   * "portrait" → aspect-[3/4] | "landscape" → aspect-[16/10]
   */
  galleryOrientation?: ProjectImageOrientation[]
  /** CSS object-position da imagem principal. Ex: "center", "top", "bottom". */
  imagePosition?: string
  /** CSS object-position por índice de gallery. Ex: ["top", "bottom"]. */
  galleryPosition?: string[]
  links?: {
    demo?: string
    github?: string
    npm?: string
  }
}

export type MinorProject = {
  title: string
  /** Opcional: papel (ex. Desenvolvedor, Colaborador). */
  role?: string
  description: string
  /** Link público (demo, landing, etc.). */
  href?: string
  github?: string
}

export type Publication = {
  title: string
  /** Revista, congresso, evento, relatório, etc. */
  venue: string
  year: string
  url?: string
}

export const projects: Project[] = [
  {
    slug: "vitawork-upe",
    title: "VitaWork UPE",
    role: "Desenvolvedor",
    lead: "Plataforma de saúde ocupacional para o complexo hospitalar da UPE.",
    period: "2026",
    image: "/projects/vitawork-login-sala.png",
    imageOrientation: "portrait",
    imagePosition: "bottom",          // mostra a tela do VitaWork, não o teto
    gallery: [
      "/projects/vitawork-seciti-pernambuco.png",
      "/projects/vitawork-equipe.png",
    ],
    galleryOrientation: ["portrait", "portrait"],
    galleryPosition: ["top", "top"],
  },
  {
    slug: "delegacia-5-0",
    title: "Delegacia 5.0",
    role: "Colaborador técnico",
    lead: "Apoio técnico a iniciativa digital da Polícia Civil de Pernambuco.",
    hint: "Ocorrências e validação da assistente Aurora.",
    period: "2025",
    image: "/projects/delegacia-pernambuco-digital.png",
    imageOrientation: "landscape",
    imagePosition: "center",
  },
  {
    slug: "digigesso-araripe",
    title: "DigiGesso Araripe",
    role: "Desenvolvedor",
    lead: "Sistema para gestão de produção e custos em ambiente industrial.",
    hint: "Ambiente industrial com conectividade instável, polo gesseiro do Araripe.",
    period: "2026",
    image: "/projects/digigesso-painel-produtos.png",
    imageOrientation: "portrait",
    imagePosition: "top",
    gallery: [
      "/projects/digigesso-login-mobile.png",
      "/projects/digigesso-equipe-sistema.png",
      "/projects/digigesso-visita-industrial.png",
    ],
    galleryOrientation: ["portrait", "portrait", "portrait"],
    galleryPosition: ["top", "top", "top"],
  },
]

/** Projetos de menor escopo — `href` (link) e `github` opcionais. */
export const minorProjects: MinorProject[] = [
  {
    title: "Manivis",
    role: "Desenvolvedor",
    description:
      "Landing institucional para startup de soluções com manipueira e valor da proposta.",
    href: "https://manivis-ureg.vercel.app/",
    github: "https://github.com/manivispe/manivis",
  },
  {
    title: "Resumos operacionais (IA)",
    role: "Desenvolvedor",
    description:
      "Automação com LLMs e n8n para gerar e distribuir resumos operacionais diários.",
  },
  {
    title: "Conecc",
    role: "Desenvolvedor",
    description:
      "Landing do congresso de especialidades clínicas e cirúrgicas: conversão e SEO.",
    href: "https://www.conecc.com.br/",
    github: "https://github.com/sougabrielxd/conecc",
  },
  {
    title: "MyraBot",
    role: "Colaborador",
    description:
      "Site de documentação do bot Discord: páginas, conteúdo técnico e interface.",
    href: "https://myrasite.vercel.app/",
    github: "https://github.com/empt1xz/myra",
  },
  {
    title: "Cartório Alto Longá",
    role: "Desenvolvedor",
    description:
      "Site institucional da serventia extrajudicial: serviços públicos e acessibilidade.",
    href: "https://www.cartorioaltolonga.com.br/",
    github: "https://github.com/sougabrielxd/cartorio-lcm",
  },
  {
    title: "VitaTrack",
    role: "Desenvolvedor",
    description: "Projeto final do CS50 (Harvard): finanças pessoais na web.",
    github: "https://github.com/sougabrielxd/vitatrack",
  },
]

/** Artigos, relatórios, apresentações — seção só aparece com pelo menos um item. */
export const publications: Publication[] = []
