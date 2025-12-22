import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// URL base do site
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://gabriellucas.com.br";

// OG Image (URL ABSOLUTA)
const ogImageUrl = `${baseUrl}/og-image.png`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: "Gabriel Lucas | Desenvolvedor Full-Stack & Especialista em IA",
    template: "%s | Gabriel Lucas",
  },

  description:
    "Desenvolvedor Full-Stack com 2+ anos de experiência em React, Next.js, Python e automação. Especializado em criar soluções escaláveis e interfaces modernas.",

  keywords: [
    "desenvolvedor full-stack",
    "react developer",
    "next.js",
    "python",
    "automação",
    "IA",
    "front-end",
    "back-end",
    "gabriel lucas",
  ],

  authors: [{ name: "Gabriel Lucas" }],
  creator: "Gabriel Lucas",

  icons: {
    icon: [
      { url: "/img/x-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/img/x-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/img/x-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/img/x-red-180x180.png", sizes: "180x180" }],
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: baseUrl,
    siteName: "Gabriel Lucas Portfolio",
    title: "Gabriel Lucas | Desenvolvedor Full-Stack",
    description:
      "Desenvolvedor Full-Stack especializado em React, Next.js e automação",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Gabriel Lucas - Desenvolvedor Full-Stack",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gabriel Lucas | Desenvolvedor Full-Stack",
    description:
      "Desenvolvedor Full-Stack especializado em React, Next.js e automação",
    images: [ogImageUrl],
    creator: "@gabriellucasafb",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gabriel Lucas",
              jobTitle: "Desenvolvedor Full-Stack",
              url: baseUrl,
              sameAs: [
                "https://www.linkedin.com/in/gabriellucasafb/",
                "https://github.com/sougabrielxd",
                "https://www.instagram.com/gabriellucasafb/",
              ],
              email: "gabriellucasafb@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
              },
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
