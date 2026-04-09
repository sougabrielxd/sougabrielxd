import {
  minorProjects,
  projects,
  type MinorProject,
  type Project,
} from "@/data/content"
import { ProjectCarousel } from "@/components/ProjectCarousel"

function ProjectMedia({ project }: { project: Project }) {
  return <ProjectCarousel project={project} />
}

function ProjectCard({ project }: { project: Project }) {
  const primaryLink =
    project.links?.demo ??
    project.links?.github ??
    project.links?.npm ??
    null

  const linkLabel = project.links?.demo
    ? "↗ demo"
    : project.links?.npm
      ? "↗ npm"
      : project.links?.github
        ? "↗ github"
        : null

  return (
    <article className="flex flex-col gap-3">
      <ProjectMedia project={project} />

      <div className="mx-auto w-full max-w-[40rem] text-left">
        <p className="mb-2 font-sans text-xs font-medium uppercase tracking-[0.12em] text-hint sm:text-sm">
          {project.period}
        </p>
        <h2 className="mb-1 text-xl font-medium leading-snug tracking-tight text-ink sm:text-2xl">
          {project.title}
        </h2>
        <p className="mb-2 font-sans text-sm font-medium text-hint sm:text-base">
          {project.role}
        </p>
        <p className="max-w-[52ch] text-base leading-relaxed text-sub sm:text-lg">
          {project.lead}
        </p>
        {project.hint ? (
          <p className="mt-2 max-w-[48ch] text-sm leading-relaxed text-hint sm:text-base">
            {project.hint}
          </p>
        ) : null}

        {primaryLink && linkLabel ? (
          <div className="mt-5 border-t border-line/80 pt-4">
            <a
              href={primaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit whitespace-nowrap border-b border-line pb-px text-sm text-sub transition-colors duration-150 ease-[ease] hover:border-line-hover hover:text-ink sm:text-base"
            >
              {linkLabel}
            </a>
          </div>
        ) : null}
      </div>
    </article>
  )
}

const minorLinkClass =
  "border-b border-line pb-px text-xs text-sub transition-colors duration-150 hover:border-line-hover hover:text-ink sm:text-sm"

function MinorProjectCard({ item }: { item: MinorProject }) {
  const hasOutbound = Boolean(item.href || item.github)

  return (
    <li className="rounded border border-line/90 px-4 py-4 sm:px-5 sm:py-5">
      <h3 className="mb-1 text-lg font-medium leading-snug tracking-tight text-ink sm:text-xl">
        {item.title}
      </h3>
      {item.role ? (
        <p className="mb-1.5 font-sans text-sm font-medium text-hint">{item.role}</p>
      ) : null}
      <p className="max-w-[48ch] text-sm leading-relaxed text-sub sm:text-base">
        {item.description}
      </p>
      {hasOutbound ? (
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={minorLinkClass}
            >
              ↗ link
            </a>
          ) : null}
          {item.github ? (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className={minorLinkClass}
            >
              ↗ github
            </a>
          ) : null}
        </div>
      ) : null}
    </li>
  )
}

export function Projects() {
  const hasMain = projects.length > 0
  const hasMinor = minorProjects.length > 0

  if (!hasMain && !hasMinor) return null

  return (
    <>
      {hasMain ? (
        <section className="pt-0" aria-labelledby="projects-heading">
          <h2
            id="projects-heading"
            className="mb-2 text-2xl font-medium tracking-tight text-ink sm:mb-2.5 sm:text-3xl"
          >
            Projetos
          </h2>

          <div className="flex flex-col gap-8 max-[480px]:gap-7">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      ) : null}

      {hasMinor ? (
        <section
          className={hasMain ? "pt-4 max-[480px]:pt-3" : "pt-0"}
          aria-labelledby="minor-projects-heading"
        >
          <h2
            id="minor-projects-heading"
            className="mb-2 text-xl font-medium tracking-tight text-ink sm:mb-2.5 sm:text-2xl"
          >
            Projetos menores
          </h2>
          <ul className="grid list-none gap-3 p-0 sm:grid-cols-2 sm:gap-4">
            {minorProjects.map((item) => (
              <MinorProjectCard
                key={item.title}
                item={item}
              />
            ))}
          </ul>
        </section>
      ) : null}
    </>
  )
}
