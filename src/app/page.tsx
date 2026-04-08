import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { Publications } from "@/components/Publications"

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
