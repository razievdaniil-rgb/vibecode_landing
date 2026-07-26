import { science } from '../data/content'
import { Reveal } from './ui/Reveal'
import { SupplementFacts } from './SupplementFacts'

export function Science() {
  return (
    <section id="science" className="border-t border-graphite-800 bg-graphite-900">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
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
              {science.features.map((f, i) => (
                <Reveal key={f.k} delay={i * 0.07}>
                  <div className="h-full bg-graphite-900 p-7">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-volt">
                      {f.k}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-black uppercase tracking-tight">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-bone-dim">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
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
