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
      { strong: "software engineer" },
      " no sertão do nordeste, construindo sistemas em produção para indústria, saúde ocupacional e IA aplicada. atualmente na ",
      {
        text: "Starke Vision",
        href: "https://starkevision.com.br/",
      },
      "; passagem anterior pela ",
      {
        text: "Receita Federal",
        href: "https://www.gov.br/receitafederal/pt-br",
      },
      ". projetos institucionais relevantes incluem delegacia 5.0 (IA para a Polícia Civil de PE) e vitawork (saúde pública, Desafios.Gov). no industrial, lidera iniciativas aprovadas pela FACEPE no polo gesseiro do araripe com automação e monitoramento em tempo real. interesse crescente em inteligência artificial, llms e pesquisas.",
    ],
  ] satisfies IntroSegment[][],
  links: {
    github: "https://github.com/gabriellucasafb",
    linkedin: "https://linkedin.com/in/gabriellucasafb",
    resume: "/resume.pdf",
    lattes: "https://lattes.cnpq.br/8033615391408980",
  },
  seo: {
    title: "Gabriel Lucas — Engenheiro de software",
    description:
      "Sistemas em produção no sertão do Nordeste — indústria, saúde ocupacional e IA. Starke Vision. Brasil.",
    url: "https://gabriellucasafb.com.br",
    ogImage: "https://gabriellucasafb.com.br/img/seo.png",
  },
}

export type ProjectImageOrientation = "landscape" | "portrait"

export type CaseStudy = {
  /** Contexto e problema que motivou o projeto. */
  problem: string
  /** Resultado observável. Case study sem resultado não publica. */
  result: string
  stack?: string[]
  architecture?: string
  tradeoffs?: string[]
  keyDecisions?: string[]
  myRole?: string
  duration?: string
  team?: string
}

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
  /** Presença deste objeto habilita a rota /projects/[slug]. */
  caseStudy?: CaseStudy
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
    lead: "Plataforma que unifica os sistemas de saúde ocupacional do complexo hospitalar da UPE.",
    hint: "Desenvolvimento solo, em produção incremental.",
    period: "2026",
    image: "/projects/vitawork-login-sala.png",
    imageOrientation: "portrait",
    imagePosition: "bottom",
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
    lead: "Testes, infraestrutura e validação da assistente de IA Aurora na Polícia Civil de PE.",
    hint: "Iniciativa de produtividade no registro e análise de ocorrências.",
    period: "2025",
    image: "/projects/delegacia-pernambuco-digital.png",
    imageOrientation: "landscape",
    imagePosition: "center",
  },
  {
    slug: "digigesso-araripe",
    title: "DigiGesso Araripe",
    role: "Desenvolvedor",
    lead: "Sistema de gestão de produção e custos operando com conectividade instável.",
    hint: "Desenvolvimento solo, polo gesseiro do Araripe.",
    period: "2026",
    image: "/projects/digigesso-painel-produtos.png",
    imageOrientation: "portrait",
    imagePosition: "bottom",
    gallery: [
      "/projects/digigesso-login-mobile.png",
      "/projects/digigesso-equipe-sistema.png",
      "/projects/digigesso-visita-industrial.png",
    ],
    galleryOrientation: ["portrait", "portrait", "portrait"],
    galleryPosition: ["top", "top", "top"],
    caseStudy: {
      problem:
        "O apontamento de produção era inteiramente manual: a quantidade produzida era anotada em um quadro no chão de fábrica e a conferência exigia contagem física das placas. Não havia rastreabilidade nem histórico confiável, e o ambiente industrial opera com conectividade instável.",
      result:
        "O registro passou a acontecer no momento da produção, em totem no chão de fábrica: cada placa produzida é apontada na hora, com histórico consultável. A contagem física deixou de ser o mecanismo de controle. Métricas quantitativas serão adicionadas após o relatório de operação.",
      myRole:
        "Desenvolvedor único do sistema, do levantamento com a operação ao deploy em produção.",
      team: "4 pessoas no projeto, 1 desenvolvedor",
    },
  },
  {
    slug: "smartgesso-controlgesso",
    title: "SmartGesso & ControlGesso",
    role: "Mapeamento de processos e deploy",
    lead: "Mapeamento de processos e deploy de dois sistemas de automação industrial com balança inteligente.",
    hint: "Rastreabilidade de insumos por lote, polo gesseiro do Araripe.",
    period: "2026",
    image: "/projects/mapeamento-control.jpeg",
    imageOrientation: "portrait",
    imagePosition: "bottom",
    gallery: [
      "/projects/mapeamento-control1.jpeg",
      "/projects/mapeamento-control2.jpeg",
      "/projects/mapeamento-control3.jpeg",
    ],
    galleryOrientation: ["portrait", "portrait", "portrait"],
    galleryPosition: ["top", "top", "top"],
  },
]

/** Projetos de menor escopo — `href` (link) e `github` opcionais. */
export const minorProjects: MinorProject[] = [
      {
    title: "Manihot",
    role: "Desenvolvedor",
    description:
      "Landing institucional apresentando a proposta de aproveitamento da manipueira.",
    href: "https://manihot-three.vercel.app/",
    github: "https://github.com/manihot1/manihot",
  },
  {
    title: "Manivis",
    role: "Desenvolvedor",
    description:
      "Landing da startup de soluções com manipueira, com aprofundamento técnico no conteúdo.",
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
