import { useEffect, useRef, useState } from 'react'
import { scrollStory } from '../data/content'
import { JarFallback } from './JarFallback'
import { HexMesh } from './ui/HexMesh'

/**
 * Sticky "inside the tub" narrative. The jar pins while the reader scrolls
 * through each layer; the active step lights up via IntersectionObserver.
 * Kept to the single SVG jar (no second WebGL canvas) for performance.
 */
export function ScrollStory() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.idx)
            setActive(idx)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    stepRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
      <div className="mb-16">
        <p className="eyebrow mb-4">{scrollStory.eyebrow}</p>
        <h2 className="display-tight text-[clamp(2.2rem,5vw,3.8rem)]">
          {scrollStory.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Sticky jar */}
        <div className="hidden lg:block">
          <div className="sticky top-24 flex h-[70vh] items-center justify-center">
            {/* faint molecular lattice behind the tub */}
            <HexMesh className="pointer-events-none absolute inset-0 text-graphite-700 opacity-30 [mask-image:radial-gradient(50%_50%_at_50%_50%,#000,transparent)]" />
            <div className="relative h-full w-full [animation:bob_5s_ease-in-out_infinite]">
              <JarFallback macro={`0${active + 1} / 0${scrollStory.steps.length}`} />
            </div>
            {/* progress rail */}
            <div className="absolute right-0 top-1/2 flex -translate-y-1/2 flex-col gap-2">
              {scrollStory.steps.map((_, i) => (
                <span
                  key={i}
                  className={`h-8 w-1 transition-colors duration-300 ${
                    i === active ? 'bg-volt' : 'bg-graphite-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Steps */}
        <div>
          {scrollStory.steps.map((step, i) => (
            <div
              key={step.k}
              data-idx={i}
              ref={(el) => {
                stepRefs.current[i] = el
              }}
              className={`border-l-2 py-10 pl-8 transition-all duration-500 ${
                i === active
                  ? 'border-volt opacity-100'
                  : 'border-graphite-700 opacity-40'
              }`}
            >
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-volt">
                {step.k}
              </span>
              <h3 className="mt-3 font-display text-2xl font-black uppercase tracking-tight md:text-3xl">
                {step.title}
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-bone-dim">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
