import Link from "next/link"
import { projects } from "@/data/content"
import styles from "./not-found.module.css"

/*
 * 404 de nível superior: herda html/body/fontes de app/layout.tsx (o
 * único root layout "genérico" do projeto). É o que o Next.js usa para
 * gerar a rota especial /_not-found → out/404.html na exportação
 * estática, então precisa ficar fora dos grupos (coming-soon-pt),
 * (coming-soon-en) e (portfolio), que têm seus próprios root layouts.
 */

/* posições das tags de fundo — "outros writers" na parede */
const TAG_SPOTS: React.CSSProperties[] = [
  { top: "10%", left: "6%", transform: "rotate(-8deg)", fontSize: "1.5rem" },
  { top: "18%", right: "7%", transform: "rotate(5deg)", fontSize: "1.15rem" },
  { top: "72%", left: "9%", transform: "rotate(-4deg)", fontSize: "1.3rem" },
  { top: "80%", right: "10%", transform: "rotate(7deg)", fontSize: "1rem" },
]

export default function NotFound() {
  return (
    <main className={styles.wall}>
      <svg aria-hidden="true" className={styles.noise}>
        <filter id="wall-concrete">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="5"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#wall-concrete)" />
      </svg>

      <div aria-hidden="true">
        {projects.slice(0, TAG_SPOTS.length).map((project, i) => (
          <span key={project.slug} className={styles.wallTag} style={TAG_SPOTS[i]}>
            {project.slug}
          </span>
        ))}
      </div>

      <div className={styles.piece} aria-hidden="true">
        <span className={styles.fourofour}>404</span>
        <svg className={styles.drips} viewBox="0 0 240 90" aria-hidden="true">
          <path d="M28 0c1.5 14-2.5 22 0.5 38c1.2 6.5 4.8 6.5 6 0c2.4-13-0.6-24 1.5-38z" fill="currentColor" />
          <path d="M118 0c1 9-1.5 14 0.5 24c0.8 4.5 3.6 4.5 4.5 0c1.6-8-0.4-15 1-24z" fill="currentColor" opacity="0.9" />
          <path d="M196 0c2 18-3 30 1 52c1.1 7.5 5.2 7.5 6.5 0c3-18-1-34 1.5-52z" fill="currentColor" />
          <circle cx="34" cy="52" r="3" fill="currentColor" />
          <circle cx="121" cy="34" r="2.4" fill="currentColor" opacity="0.9" />
          <circle cx="201" cy="66" r="3.4" fill="currentColor" />
        </svg>
      </div>

      <h1 className={styles.note}>página não encontrada</h1>
      <Link href="/" className={styles.back}>
        ← voltar pra home
      </Link>
    </main>
  )
}
