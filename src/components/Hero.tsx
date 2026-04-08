import { Fragment } from "react"
import Image from "next/image"
import { meta, type IntroSegment } from "@/data/content"

const introLinkClass =
  "text-sub underline decoration-[#7c3aed] decoration-1 underline-offset-[3px] transition-[text-decoration-color,color] duration-150 ease-[ease] hover:text-ink hover:decoration-[#6d28d9]"

function IntroPieces({ segments }: { segments: IntroSegment[] }) {
  return (
    <>
      {segments.map((segment, i) =>
        typeof segment === "string" ? (
          <Fragment key={i}>{segment}</Fragment>
        ) : "strong" in segment ? (
          <strong key={i} className="font-bold text-sub">
            {segment.strong}
          </strong>
        ) : (
          <a
            key={i}
            href={segment.href}
            target="_blank"
            rel="noopener noreferrer"
            className={introLinkClass}
          >
            {segment.text}
          </a>
        ),
      )}
    </>
  )
}

export function Hero() {
  const { name, nameHover, role, introParagraphs, links } = meta
  const firstName = name.split(" ")[0] ?? name
  const navLinks = [
    {
      label: "LinkedIn",
      href: links.linkedin,
    },
    {
      label: "Resume",
      href: links.resume,
      download: links.resume.startsWith("/"),
    },
    {
      label: "Lattes",
      href: links.lattes,
    },
    {
      label: "GitHub",
      href: links.github,
    },
  ]

  return (
    <section className="mb-8 sm:mb-10">
      <div className="mb-1 flex flex-col gap-4 sm:mb-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="flex items-start gap-3.5">
          <div
            className="group/logo inline-flex shrink-0 cursor-default overflow-visible p-0.5"
            aria-hidden="true"
          >
            <Image
              src="/img/x-dark.svg"
              alt=""
              width={100}
              height={117}
              className="h-12 w-auto shrink-0 origin-center motion-reduce:group-hover/logo:animate-none group-hover/logo:animate-spin group-hover/logo:[animation-duration:2.2s] group-hover/logo:[animation-timing-function:linear] sm:h-14"
              priority
            />
          </div>

          <div className="max-w-[min(100%,22rem)] pt-[0.1rem]">
            <p className="mb-0 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl">
              <span className="group relative inline-block cursor-default">
                <span className="text-purple-700 transition-opacity duration-150 group-hover:opacity-0">
                  {name}
                </span>
                <span
                  className="pointer-events-none absolute left-0 top-0 whitespace-nowrap text-purple-700 opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  {nameHover}
                </span>
              </span>
            </p>
            <p className="mt-0 text-xs font-medium leading-tight tracking-wide text-sub sm:text-sm">
              {role}
            </p>
          </div>
        </div>

        <nav
          className="flex w-full shrink-0 flex-col items-end gap-0.5 sm:w-auto"
          aria-label="Links externos"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto block w-fit max-w-full py-0 text-right font-sans text-base font-normal leading-tight tracking-normal text-sub transition-colors duration-150 ease-[ease] hover:text-ink"
              download={link.download}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="max-w-[42rem]">
        <h1 className="mb-4 max-w-[60ch] font-sans text-base font-normal leading-relaxed tracking-tight text-ink sm:text-lg">
          Olá! Meu nome é{" "}
          <span className="text-ink underline decoration-purple-700 decoration-1 underline-offset-[3px]">
            {firstName}
          </span>
          .
        </h1>
        {introParagraphs.map((segments, index) => (
          <p
            key={index}
            className="mb-4 max-w-[60ch] text-base leading-relaxed tracking-tight text-sub last:mb-0 sm:text-lg"
          >
            <IntroPieces segments={segments} />
          </p>
        ))}
      </div>
    </section>
  )
}
