import { publications, type Publication } from "@/data/content"

const titleLinkClass =
  "border-b border-line pb-px text-inherit transition-colors duration-150 hover:border-line-hover"

const publicationHeadingClass =
  "mb-[8px] text-[length:var(--text-lg)] font-medium tracking-tight text-ink"

function PublicationCard({ item }: { item: Publication }) {
  const titleEl = item.url ? (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={titleLinkClass}
    >
      {item.title}
    </a>
  ) : (
    item.title
  )

  return (
    <li className="py-[16px]">
      <h3 className="mb-[4px] text-base font-medium leading-snug tracking-tight text-ink">
        {titleEl}
      </h3>
      <p className="text-[length:var(--text-sm)] leading-relaxed text-sub">
        <span className="text-hint">{item.venue}</span>
        <span className="text-hint"> · </span>
        {item.year}
      </p>
    </li>
  )
}

export function Publications() {
  if (publications.length === 0) return null

  return (
    <section
      className="pt-[48px] sm:pt-[64px]"
      aria-labelledby="publications-heading"
    >
      <h2
        id="publications-heading"
        className={publicationHeadingClass}
      >
        Publicações e produções
      </h2>
      <ul className="list-none divide-y divide-line p-0">
        {publications.map((item) => (
          <PublicationCard
            key={`${item.title}-${item.venue}-${item.year}`}
            item={item}
          />
        ))}
      </ul>
    </section>
  )
}
