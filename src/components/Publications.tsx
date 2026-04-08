import { publications, type Publication } from "@/data/content"

const titleLinkClass =
  "border-b border-line pb-px text-inherit transition-colors duration-150 hover:border-line-hover"

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
    <li className="rounded border border-line/90 px-4 py-4 sm:px-5 sm:py-5">
      <h3 className="mb-1 text-lg font-medium leading-snug tracking-tight text-ink sm:text-xl">
        {titleEl}
      </h3>
      <p className="text-sm leading-relaxed text-sub sm:text-base">
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
      className="pt-4 max-[480px]:pt-3"
      aria-labelledby="publications-heading"
    >
      <h2
        id="publications-heading"
        className="mb-2 text-xl font-medium tracking-tight text-ink sm:mb-2.5 sm:text-2xl"
      >
        Publicações e produções
      </h2>
      <ul className="grid list-none gap-3 p-0 sm:grid-cols-2 sm:gap-4">
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
