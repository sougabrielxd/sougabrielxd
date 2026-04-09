"use client"

import Image from "next/image"
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react"
import type { Project, ProjectImageOrientation } from "@/data/content"

export type SlideOrientation = ProjectImageOrientation

export type ProjectSlide = {
  src: string
  alt: string
  orientation: SlideOrientation
  /** CSS object-position, e.g. "center", "top", "bottom". Defaults to "center". */
  position?: string
}

const SWIPE_THRESHOLD_PX = 40

function buildSlides(project: Project): ProjectSlide[] {
  const gallery = project.gallery ?? []
  const slides: ProjectSlide[] = []

  if (project.image) {
    slides.push({
      src: project.image,
      alt: project.title,
      orientation: project.imageOrientation ?? "landscape",
      position: project.imagePosition ?? "center",
    })
  }

  gallery.forEach((src, i) => {
    slides.push({
      src,
      alt: `${project.title} — ${i + 2}`,
      orientation: project.galleryOrientation?.[i] ?? "landscape",
      position: project.galleryPosition?.[i] ?? "top",
    })
  })

  return slides
}

function isInteractiveTarget(target: EventTarget | null) {
  return target instanceof HTMLElement && target.closest("button, a") !== null
}

export function ProjectCarousel({ project }: { project: Project }) {
  const slides = useMemo(() => buildSlides(project), [project])
  const [index, setIndex] = useState(0)
  const pointerStartX = useRef<number | null>(null)
  const surfaceRef = useRef<HTMLDivElement>(null)

  const count = slides.length

  useEffect(() => {
    setIndex((current) => (count === 0 ? 0 : Math.min(current, count - 1)))
  }, [count])

  const go = useCallback(
    (dir: -1 | 1) => {
      if (count <= 1) return
      setIndex((i) => (i + dir + count) % count)
    },
    [count],
  )

  const onPointerDown = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      if (count <= 1) return
      if (e.pointerType === "mouse" && e.button !== 0) return
      if (isInteractiveTarget(e.target)) return
      pointerStartX.current = e.clientX
    },
    [count],
  )

  const onPointerUp = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      const start = pointerStartX.current
      pointerStartX.current = null
      if (start == null || count <= 1) return
      const delta = e.clientX - start
      if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return
      e.stopPropagation()
      if (delta > 0) go(-1)
      else go(1)
    },
    [count, go],
  )

  if (count === 0) return null

  const activeSlide = slides[index]
  const isPortrait = activeSlide.orientation === "portrait"

  return (
    <div className="mx-auto w-full max-w-[40rem] select-none">
      {/* image stage */}
      <div className="group/carousel relative mx-auto w-full">
        <div
          ref={surfaceRef}
          className={[
            "relative overflow-hidden rounded border border-line bg-surface-muted",
            isPortrait ? "mx-auto aspect-[3/4] max-w-[18rem]" : "aspect-[16/10] w-full",
          ].join(" ")}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => { pointerStartX.current = null }}
        >
          {slides.map((slide, i) => (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              sizes={
                slide.orientation === "portrait"
                  ? "(max-width: 640px) 256px, 288px"
                  : "(max-width: 768px) 100vw, 640px"
              }
              className={[
                "object-cover transition-opacity duration-300",
                i === index ? "opacity-100" : "opacity-0",
              ].join(" ")}
              style={{ objectPosition: slide.position ?? "center" }}
              priority={i === 0}
              draggable={false}
            />
          ))}
        </div>

        {/* arrows */}
        {count > 1 && (
          <>
            <button
              type="button"
              aria-label="Slide anterior"
              className="absolute left-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(124,58,237,0.2)] bg-white/90 text-purple-700 shadow-sm backdrop-blur-sm transition-all duration-150 opacity-0 group-hover/carousel:opacity-100 focus-visible:opacity-100 hover:bg-white hover:shadow-md hover:border-[rgba(124,58,237,0.4)] focus-visible:outline-none"
              onClick={() => go(-1)}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M8.5 2.5 4 7l4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Próximo slide"
              className="absolute right-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(124,58,237,0.2)] bg-white/90 text-purple-700 shadow-sm backdrop-blur-sm transition-all duration-150 opacity-0 group-hover/carousel:opacity-100 focus-visible:opacity-100 hover:bg-white hover:shadow-md hover:border-[rgba(124,58,237,0.4)] focus-visible:outline-none"
              onClick={() => go(1)}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M5.5 2.5 10 7l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* dots */}
      {count > 1 && (
        <div
          className="mt-2.5 flex justify-center"
          role="tablist"
          aria-label={`Slides do projeto ${project.title}`}
        >
          <div className="inline-flex items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Ir para slide ${i + 1} de ${count}`}
                className={[
                  "h-1.5 rounded-full transition-all duration-200",
                  i === index ? "w-4 bg-purple-700" : "w-1.5 bg-purple-200 hover:bg-purple-300",
                ].join(" ")}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
