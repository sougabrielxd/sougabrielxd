import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// URL base do site
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://gabriellucas.com.br";

// OG Image (URL ABSOLUTA)
const ogImageUrl = `${baseUrl}/img/og-image.png`;
const fbAppId = process.env.NEXT_PUBLIC_FB_APP_ID || "";

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
        url: "/img/og-image.png",
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
    images: ["/img/og-image.png"],
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
        {/* Theme Detection Script - Prevents FOUC (Flash of Unstyled Content) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // 1. Check for manual user preference (localStorage)
                  const stored = localStorage.getItem('theme');
                  if (stored === 'light' || stored === 'dark') {
                    document.documentElement.classList.toggle('dark', stored === 'dark');
                    return;
                  }
                  
                  // 2. Fallback to system preference
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  document.documentElement.classList.toggle('dark', prefersDark);
                } catch (e) {
                  // Fallback to light theme if anything fails
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
        {/* Open Graph / Facebook Meta Tags - Todas explícitas */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gabriellucas.com.br" />
        <meta property="og:title" content="Gabriel Lucas | Desenvolvedor Full-Stack & Especialista em IA" />
        <meta property="og:description" content="Desenvolvedor Full-Stack com 2+ anos de experiência em React, Next.js, Python e automação. Especializado em criar soluções escaláveis e interfaces modernas." />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Gabriel Lucas Portfolio" />
        <meta property="og:image" content="https://gabriellucas.com.br/img/og-image.png" />
        <meta property="og:image:secure_url" content="https://gabriellucas.com.br/img/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Gabriel Lucas - Desenvolvedor Full-Stack" />
        {fbAppId && <meta property="fb:app_id" content={fbAppId} />}
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://gabriellucas.com.br" />
        <meta name="twitter:title" content="Gabriel Lucas | Desenvolvedor Full-Stack" />
        <meta name="twitter:description" content="Desenvolvedor Full-Stack especializado em React, Next.js e automação" />
        <meta name="twitter:image" content="https://gabriellucas.com.br/img/og-image.png" />
        <meta name="twitter:creator" content="@gabriellucasafb" />
        
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
