import type { Metadata } from "next"
import { meta } from "@/data/content"
import { comingSoon, personJsonLd } from "@/data/comingSoon"
import { ComingSoon } from "@/components/ComingSoon"

const content = comingSoon.pt

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  metadataBase: new URL(meta.seo.url),
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      "en-US": "/en/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    url: "/",
    siteName: meta.name,
    locale: content.ogLocale,
    type: "website",
    images: [{ url: meta.seo.ogImage, width: 1080, height: 1080 }],
  },
  twitter: {
    card: "summary_large_image",
    title: content.seo.title,
    description: content.seo.description,
    images: [meta.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/img/x-dark.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />
      <ComingSoon locale="pt" />
    </>
  )
}
