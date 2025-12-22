
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// URL base do site - ajuste conforme seu domínio
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gabriellucas.com.br";
const ogImageUrl = `${baseUrl}/api/og-image`;
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
  title: {
    default: "Gabriel Lucas | Desenvolvedor Full-Stack & Especialista em IA",
    template: "%s | Gabriel Lucas"
  },
  description: "Desenvolvedor Full-Stack com 2+ anos de experiência em React, Next.js, Python e automação. Especializado em criar soluções escaláveis e interfaces modernas. Disponível para projetos freelance e oportunidades.",
  keywords: ["desenvolvedor full-stack", "react developer", "next.js", "python", "automação", "IA", "front-end", "back-end", "gabriel lucas"],
  authors: [{ name: "Gabriel Lucas" }],
  creator: "Gabriel Lucas",
  icons: {
    icon: [
      { url: "/img/x-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/img/x-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/img/x-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/img/x-red-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    apple: [
      { url: "/img/x-red-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: baseUrl,
    title: "Gabriel Lucas | Desenvolvedor Full-Stack",
    description: "Desenvolvedor Full-Stack especializado em React, Next.js e automação",
    siteName: "Gabriel Lucas Portfolio",
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
    description: "Desenvolvedor Full-Stack especializado em React, Next.js e automação",
    images: [ogImageUrl],
    creator: "@gabriellucasafb",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        {/* Open Graph / Facebook / WhatsApp - Meta tags explícitas para garantir compatibilidade */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gabriellucas.com.br" />
        <meta property="og:title" content="Gabriel Lucas | Desenvolvedor Full-Stack & Especialista em IA" />
        <meta property="og:description" content="Desenvolvedor Full-Stack com 2+ anos de experiência em React, Next.js, Python e automação. Especializado em criar soluções escaláveis e interfaces modernas." />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Gabriel Lucas Portfolio" />
        {/* OG Image - Dimensões antes da URL para garantir processamento correto */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Gabriel Lucas - Desenvolvedor Full-Stack" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        {/* Facebook App ID */}
        {fbAppId && <meta property="fb:app_id" content={fbAppId} />}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://gabriellucas.com.br" />
        <meta name="twitter:title" content="Gabriel Lucas | Desenvolvedor Full-Stack" />
        <meta name="twitter:description" content="Desenvolvedor Full-Stack especializado em React, Next.js e automação" />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:creator" content="@gabriellucasafb" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Gabriel Lucas",
              "jobTitle": "Desenvolvedor Full-Stack",
              "url": "https://gabriellucas.com.br",
              "sameAs": [
                "https://www.linkedin.com/in/gabriellucasafb/",
                "https://github.com/sougabrielxd",
                "https://www.instagram.com/gabriellucasafb/"
              ],
              "email": "gabriellucasafb@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR"
              }
            })
          }}
        />
      </head>
      <body
        className={ `${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
