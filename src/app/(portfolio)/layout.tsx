import type { Metadata } from "next"
import { meta } from "@/data/content"

/*
 * Layout aninhado (não-root) do grupo (portfolio) — html/body, fontes e
 * globals.css vêm do root layout compartilhado em src/app/layout.tsx.
 * Mantém aqui só o que é específico do portfólio completo: metadata,
 * JSON-LD de pessoa e o rodapé com a faixa marquee.
 */

export const metadata: Metadata = {
  title: {
    default: meta.seo.title,
    template: "%s · gabriel lucas",
  },
  description: meta.seo.description,
  metadataBase: new URL(meta.seo.url),
  icons: {
    icon: [{ url: "/img/x-dark.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: meta.seo.title,
    description: meta.seo.description,
    url: meta.seo.url,
    type: "website",
    images: [{ url: meta.seo.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.seo.title,
    description: meta.seo.description,
    images: [meta.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const personJsonLd = {
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

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {children}
      <footer className="relative overflow-hidden pb-[32px]">
        {/* textura de concreto do rodapé */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.04]"
        >
          <filter id="footer-concrete">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#footer-concrete)" />
        </svg>

        {/* faixa marquee de assinatura */}
        <div
          aria-hidden="true"
          className="overflow-hidden border-y border-line py-[8px]"
        >
          <div className="marquee-track">
            {[0, 1].map((group) => (
              <div key={group} className="flex shrink-0 items-center">
                {Array.from({ length: 4 }).map((_, i) => (
                  <span
                    key={i}
                    className="whitespace-nowrap px-[16px] font-[family-name:var(--font-display)] text-[length:var(--text-md)] leading-none text-mark"
                  >
                    {meta.name}{" "}
                    <span className="font-mono text-[length:var(--text-sm)] text-hint">
                      *
                    </span>{" "}
                    {meta.role}{" "}
                    <span className="font-mono text-[length:var(--text-sm)] text-hint">
                      *
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-[16px] flex max-w-container items-baseline justify-between gap-[16px] px-[var(--padding-x)] max-[480px]:px-[var(--padding-x-mobile)]">
          <span className="font-[family-name:var(--font-display)] text-[length:var(--text-md)] leading-none text-mark">
            {meta.name}
          </span>
          <span className="font-mono text-[length:var(--text-xs)] uppercase tracking-[0.12em] text-hint">
            {meta.role}
          </span>
        </div>
      </footer>
    </>
  )
}
