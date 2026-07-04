import {
  minorProjects,
  projects,
  type MinorProject,
  type Project,
} from "@/data/content"
import Link from "next/link"
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
    <article className="flex flex-col gap-[16px]">
      <ProjectMedia project={project} />

      <div className="mx-auto w-full max-w-[40rem] text-left">
        <div className="mb-[4px] flex items-baseline justify-between gap-[16px]">
          <h2 className="text-[length:var(--text-md)] font-medium leading-snug tracking-tight text-ink">
            {project.title}
          </h2>
          <span className="shrink-0 font-mono text-[length:var(--text-sm)] text-hint">
            {project.period}
          </span>
        </div>
        <p className="mb-[8px] font-sans text-[length:var(--text-sm)] font-medium text-hint">
          {project.role}
        </p>
        <p className="max-w-[52ch] text-base leading-relaxed text-sub">
          {project.lead}
        </p>
        {project.hint ? (
          <p className="mt-[8px] max-w-[48ch] text-[length:var(--text-sm)] leading-relaxed text-hint">
            {project.hint}
          </p>
        ) : null}

        {(primaryLink && linkLabel) || project.caseStudy ? (
          <div className="mt-[16px] flex flex-wrap gap-x-5 gap-y-[8px] border-t border-line/80 pt-[16px]">
            {project.caseStudy ? (
              <Link
                href={`/projects/${project.slug}`}
                className="spray-hover w-fit whitespace-nowrap border-b border-line pb-px text-[length:var(--text-sm)] text-sub transition-colors duration-150 ease-[ease] hover:border-transparent hover:text-ink"
              >
                → case study
              </Link>
            ) : null}
            {primaryLink && linkLabel ? (
              <a
                href={primaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="spray-hover w-fit whitespace-nowrap border-b border-line pb-px text-[length:var(--text-sm)] text-sub transition-colors duration-150 ease-[ease] hover:border-transparent hover:text-ink"
              >
                {linkLabel}
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  )
}

const minorLinkClass =
  "spray-hover border-b border-line pb-px text-[length:var(--text-sm)] text-sub transition-colors duration-150 hover:border-transparent hover:text-ink"

function MinorProjectCard({ item }: { item: MinorProject }) {
  const hasOutbound = Boolean(item.href || item.github)

  return (
    <li className="py-[16px]">
      <h3 className="mb-[4px] text-base font-medium leading-snug tracking-tight text-ink">
        {item.title}
      </h3>
      {item.role ? (
        <p className="mb-[4px] font-sans text-[length:var(--text-sm)] font-medium text-hint">{item.role}</p>
      ) : null}
      <p className="max-w-[60ch] text-[length:var(--text-sm)] leading-relaxed text-sub">
        {item.description}
      </p>
      {hasOutbound ? (
        <div className="mt-[8px] flex flex-wrap gap-x-5 gap-y-[8px]">
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
            className="mb-[16px] text-[length:var(--text-lg)] font-medium tracking-tight text-ink"
          >
            <span
              aria-hidden="true"
              className="mr-[8px] font-mono text-[length:var(--text-sm)] font-normal tracking-normal text-hint"
            >
              *01
            </span>
            Projetos
          </h2>

          <div className="flex flex-col gap-[40px] max-[480px]:gap-[32px]">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      ) : null}

      {hasMinor ? (
        <section
          className={hasMain ? "pt-[48px] sm:pt-[64px]" : "pt-0"}
          aria-labelledby="minor-projects-heading"
        >
          <h2
            id="minor-projects-heading"
            className="mb-[8px] text-[length:var(--text-lg)] font-medium tracking-tight text-ink"
          >
            <span
              aria-hidden="true"
              className="mr-[8px] font-mono text-[length:var(--text-sm)] font-normal tracking-normal text-hint"
            >
              *02
            </span>
            Outros projetos
          </h2>
          <ul className="list-none divide-y divide-line p-0">
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
