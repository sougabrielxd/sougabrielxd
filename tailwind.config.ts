import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-bg)",
        surface: "var(--color-surface)",
        "surface-muted": "var(--color-surface-muted)",
        ink: "var(--color-text-primary)",
        sub: "var(--color-text-secondary)",
        hint: "var(--color-text-tertiary)",
        line: "var(--color-border)",
        "line-hover": "var(--color-border-hover)",
        mark: "var(--color-accent)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "760px",
      },
    },
  },
  plugins: [],
}

export default config
