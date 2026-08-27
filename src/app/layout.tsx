import { Dosis, Sedgwick_Ave_Display } from "next/font/google"
import "./globals.css"

/*
 * Root layout de nível superior — existe só para o Next.js ter uma âncora
 * inequívoca para a rota especial /_not-found (usada como out/404.html na
 * exportação estática). As rotas reais do site (/, /en, /projects/*) vivem
 * em grupos com seus próprios root layouts — (coming-soon-pt),
 * (coming-soon-en) e (portfolio) — e nunca renderizam este arquivo.
 */

const dosis = Dosis({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-sans",
  display: "swap",
})

const sedgwick = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
})

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
        {children}
      </body>
    </html>
  )
}
