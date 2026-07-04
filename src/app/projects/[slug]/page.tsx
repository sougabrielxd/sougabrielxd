import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { meta, projects } from "@/data/content"
import { ProjectCarousel } from "@/components/ProjectCarousel"

export const dynamicParams = false

export function generateStaticParams() {
  return projects
    .filter((project) => project.caseStudy)
    .map((project) => ({ slug: project.slug }))
}

function projectUrl(slug: string) {
  return `${meta.seo.url}/projects/${slug}/`
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project?.caseStudy) return {}

  const url = projectUrl(project.slug)
  return {
    title: project.title,
    description: project.lead,
    alternates: { canonical: url },
    openGraph: {
      title: project.title,
      description: project.lead,
      url,
      type: "article",
      images: [{ url: meta.seo.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.lead,
      images: [meta.seo.ogImage],
    },
  }
}

const sectionHeadingClass =
  "mb-2 font-sans text-xs font-medium uppercase tracking-[0.12em] text-hint sm:text-sm"

const bodyTextClass =
  "max-w-[60ch] text-base leading-relaxed text-sub sm:text-lg"

function Section({
  heading,
  children,
}: {
  heading: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className={sectionHeadingClass}>{heading}</h2>
      {children}
    </section>
  )
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  const caseStudy = project?.caseStudy
  if (!project || !caseStudy) notFound()

  const isPortrait = (project.imageOrientation ?? "landscape") === "portrait"
  const metaLine = [caseStudy.duration, caseStudy.team]
    .filter(Boolean)
    .join(" · ")

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.lead,
    url: projectUrl(project.slug),
    author: {
      "@type": "Person",
      name: meta.name,
      url: meta.seo.url,
    },
  }

  return (
    <main className="min-h-dvh px-[var(--padding-x)] pb-12 pt-8 max-[480px]:px-[var(--padding-x-mobile)] max-[480px]:pb-14 max-[480px]:pt-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto flex max-w-container flex-col gap-8 max-[480px]:gap-7">
        <div>
          <Link
            href="/"
            className="w-fit whitespace-nowrap border-b border-line pb-px text-sm text-sub transition-colors duration-150 ease-[ease] hover:border-line-hover hover:text-ink sm:text-base"
          >
            ← voltar
          </Link>
        </div>

        <header>
          <h1 className="mb-2 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            {project.title}
          </h1>
          <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.12em] text-hint sm:text-sm">
            {project.role} · {project.period}
          </p>
          <p className={bodyTextClass}>{project.lead}</p>
        </header>

        {project.image ? (
          <div
            className={[
              "relative overflow-hidden rounded border border-line bg-surface-muted",
              isPortrait
                ? "mx-auto aspect-[3/4] w-full max-w-[18rem]"
                : "aspect-[16/10] w-full",
            ].join(" ")}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes={
                isPortrait
                  ? "(max-width: 640px) 256px, 288px"
                  : "(max-width: 768px) 100vw, 760px"
              }
              className="object-cover"
              style={{ objectPosition: project.imagePosition ?? "center" }}
              priority
            />
          </div>
        ) : null}

        <Section heading="problema">
          <p className={bodyTextClass}>{caseStudy.problem}</p>
        </Section>

        {caseStudy.myRole ? (
          <Section heading="meu papel">
            <p className={bodyTextClass}>{caseStudy.myRole}</p>
          </Section>
        ) : null}

        {caseStudy.stack?.length ? (
          <Section heading="stack">
            <p className={bodyTextClass}>{caseStudy.stack.join(" · ")}</p>
          </Section>
        ) : null}

        {caseStudy.architecture ? (
          <Section heading="arquitetura">
            <p className={bodyTextClass}>{caseStudy.architecture}</p>
          </Section>
        ) : null}

        {caseStudy.keyDecisions?.length ? (
          <Section heading="decisões-chave">
            <ul className="flex list-disc flex-col gap-2 pl-5">
              {caseStudy.keyDecisions.map((item) => (
                <li key={item} className={bodyTextClass}>
                  {item}
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        {caseStudy.tradeoffs?.length ? (
          <Section heading="trade-offs">
            <ul className="flex list-disc flex-col gap-2 pl-5">
              {caseStudy.tradeoffs.map((item) => (
                <li key={item} className={bodyTextClass}>
                  {item}
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        <Section heading="resultado">
          <p className={bodyTextClass}>{caseStudy.result}</p>
        </Section>

        {metaLine ? (
          <p className="border-t border-line/80 pt-4 font-sans text-xs font-medium uppercase tracking-[0.12em] text-hint sm:text-sm">
            {metaLine}
          </p>
        ) : null}

        {project.gallery?.length ? (
          <ProjectCarousel project={{ ...project, image: undefined }} />
        ) : null}
      </div>
    </main>
  )
}
