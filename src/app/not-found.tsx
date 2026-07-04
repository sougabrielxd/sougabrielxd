import Link from "next/link"
import styles from "./not-found.module.css"

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

      <div className={styles.piece} aria-hidden="true">
        <span className={styles.fourofour}>404</span>
        <span className={`${styles.drip} ${styles.dripA}`} />
        <span className={`${styles.drip} ${styles.dripB}`} />
        <span className={`${styles.drip} ${styles.dripC}`} />
      </div>

      <h1 className={styles.note}>página não encontrada</h1>
      <Link href="/" className={styles.back}>
        ← voltar pra home
      </Link>
    </main>
  )
}
