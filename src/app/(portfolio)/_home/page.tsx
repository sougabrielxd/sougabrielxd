import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { Publications } from "@/components/Publications"

/*
 * Portfólio completo, temporariamente destroteado enquanto a landing "em
 * construção" (macOS, / e /en) está no ar: "_home" é pasta privada do
 * Next.js (prefixo "_"), então este page.tsx nunca vira rota. Para
 * republicar, mova este arquivo de volta para src/app/(portfolio)/page.tsx.
 */
export default function Home() {
  return (
    <main className="min-h-dvh px-[var(--padding-x)] pb-12 pt-8 max-[480px]:px-[var(--padding-x-mobile)] max-[480px]:pb-14 max-[480px]:pt-6">
      <div className="mx-auto max-w-container">
        <Hero />
        <Projects />
        <Publications />
      </div>
    </main>
  )
}
