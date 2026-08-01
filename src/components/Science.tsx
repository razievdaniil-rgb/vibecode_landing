import type { ComponentType, SVGProps } from 'react'
import { science } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SupplementFacts } from './SupplementFacts'
import { HexMesh } from './ui/HexMesh'
import { IconFilter, IconScoop, IconShieldCheck, IconDroplet } from './ui/Icons'

const featureIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  PURITY: IconFilter,
  DOSING: IconScoop,
  PROOF: IconShieldCheck,
  TASTE: IconDroplet,
}

export function Science() {
  return (
    <section
      id="science"
      className="relative overflow-hidden border-t border-graphite-800 bg-graphite-900"
    >
      {/* Embedded molecular lattice backdrop */}
      <HexMesh className="pointer-events-none absolute inset-0 text-graphite-700 opacity-[0.35] [mask-image:radial-gradient(80%_60%_at_70%_20%,#000,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left: narrative + features */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-4">{science.eyebrow}</p>
              <h2 className="display-tight max-w-xl text-[clamp(2.2rem,5vw,3.8rem)]">
                {science.title}
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-bone-dim">
                {science.body}
              </p>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-graphite-700 bg-graphite-700 sm:grid-cols-2">
              {science.features.map((f, i) => {
                const Icon = featureIcons[f.k]
                return (
                  <Reveal key={f.k} delay={i * 0.07}>
                    <div className="h-full bg-graphite-900 p-7">
                      <div className="flex items-center justify-between">
                        {Icon && <Icon className="text-volt" aria-hidden />}
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-bone-mute">
                          {f.k}
                        </span>
                      </div>
                      <h3 className="mt-5 font-display text-xl font-black uppercase tracking-tight">
                        {f.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-bone-dim">{f.desc}</p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>

          {/* Right: the Supplement Facts signature panel */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="lg:sticky lg:top-28">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-2 w-2 bg-ion" />
                  <span className="font-mono text-xs uppercase tracking-widest text-bone-mute">
                    Read the panel, not the pitch
                  </span>
                </div>
                <SupplementFacts />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
