import type { Metadata } from "next"
import { Dosis, Sedgwick_Ave_Display } from "next/font/google"
import { meta } from "@/data/content"
import "./globals.css"

const dosis = Dosis({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-sans",
  display: "swap",
})

/* Fonte display de rua — uso restrito ao nome no header e à página 404. */
const sedgwick = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
})

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
  sameAs: [meta.links.github, meta.links.linkedin, meta.links.lattes],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${dosis.variable} ${sedgwick.variable}`}>
      <body className="font-sans">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
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
      </body>
    </html>
  )
}
