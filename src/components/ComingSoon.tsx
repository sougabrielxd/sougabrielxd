import Link from "next/link"
import { meta } from "@/data/content"
import { comingSoon, type Locale } from "@/data/comingSoon"
import { inter } from "@/styles/fonts"
import "@/styles/macos.css"

const socialLinks = (links: typeof meta.links) => [
  { label: "GitHub", href: links.github },
  { label: "LinkedIn", href: links.linkedin },
  { label: "Lattes", href: links.lattes },
  { label: "Instagram", href: links.instagram },
]

export function ComingSoon({ locale }: { locale: Locale }) {
  const content = comingSoon[locale]

  return (
    <main className={`${inter.variable} ms-root ms-page`}>
      <nav className="ms-lang-switch" aria-label={content.langSwitchLabel}>
        {locale === "pt" ? (
          <span aria-current="true">PT</span>
        ) : (
          <Link href="/" hrefLang="pt-BR">
            PT
          </Link>
        )}
        <span aria-hidden="true">·</span>
        {locale === "en" ? (
          <span aria-current="true">EN</span>
        ) : (
          <Link href="/en/" hrefLang="en-US">
            EN
          </Link>
        )}
      </nav>

      <p className="ms-status">{content.status}</p>
      <p className="ms-thanks">{content.thanks}</p>

      <div className="ms-links">
        {socialLinks(meta.links).map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.label}
          </a>
        ))}
      </div>
    </main>
  )
}
