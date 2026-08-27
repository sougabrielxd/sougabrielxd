import { Inter } from "next/font/google"

/*
 * Substituta de SF Pro para quem não está em dispositivo Apple — a pilha
 * de fontes (ver macos.css: --ms-font) usa -apple-system/BlinkMacSystemFont
 * primeiro, então em Mac/iOS/Safari o próprio SF Pro do sistema é usado
 * (nenhum arquivo de fonte da Apple é baixado, embutido ou distribuído por
 * este projeto). Fora do ecossistema Apple, cai para o Inter abaixo:
 * licença aberta (SIL Open Font License), auto-hospedado via next/font
 * (baixado em build, servido pelo próprio domínio, sem request à Google
 * em runtime).
 */
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
})
