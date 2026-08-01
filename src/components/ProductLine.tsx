import type { ComponentType, SVGProps } from 'react'
import { products } from '../data/content'
import { Reveal } from './ui/Reveal'
import { JarFallback } from './JarFallback'
import { IconDumbbell, IconBolt, IconPulse } from './ui/Icons'

const accentHex: Record<string, string> = {
  volt: '#ff3d14',
  ion: '#4d63ff',
}

const lineIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  RECOVER: IconDumbbell,
  POWER: IconBolt,
  ENDURE: IconPulse,
}

export function ProductLine() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <div>
            <p className="eyebrow mb-4">The line-up</p>
            <h2 className="display-tight text-[clamp(2.5rem,6vw,4.5rem)]">
              Three tools.
              <br />
              <span className="text-volt">One system.</span>
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-sm text-bone-dim">
            Stack them or run them solo. Each does exactly one job, dosed to the number
            that matters.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-graphite-800 bg-graphite-800 md:grid-cols-3">
        {products.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}>
            <article className="group relative flex h-full flex-col bg-graphite-950 p-8 transition-colors duration-300 hover:bg-graphite-900">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-bone-mute">{p.index}</span>
                <span
                  className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest"
                  style={{ color: accentHex[p.accent] }}
                >
                  {(() => {
                    const Icon = lineIcons[p.line]
                    return Icon ? <Icon width={18} height={18} aria-hidden /> : null
                  })()}
                  {p.line}
                </span>
              </div>

              <div className="my-6 h-56">
                <JarFallback
                  accent={accentHex[p.accent]}
                  labelName="KINETIK"
                  labelLine={p.name.toUpperCase()}
                  macro={p.macro.toUpperCase()}
                />
              </div>

              <h3 className="font-display text-2xl font-black uppercase tracking-tight">
                {p.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-bone-dim">{p.blurb}</p>

              <a
                href="#pricing"
                className="mt-6 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-bone transition-colors group-hover:text-volt"
              >
                Add to stack
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
