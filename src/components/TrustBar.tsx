import { trust } from '../data/content'
import { Reveal } from './ui/Reveal'
import { PartnerLogo } from './ui/Logos'

export function TrustBar() {
  return (
    <section className="border-y border-graphite-800 bg-graphite-900">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <Reveal>
          <p className="eyebrow text-center">{trust.line}</p>
        </Reveal>

        {/* Fictional partner logo lockups */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {trust.logos.map((logo) => (
            <PartnerLogo key={logo} name={logo} />
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 divide-y divide-graphite-800 border-t border-graphite-800 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {trust.stats.map((s) => (
            <div key={s.label} className="px-6 py-6 text-center">
              <div className="font-display text-4xl font-black text-bone">{s.value}</div>
              <div className="mt-2 font-mono text-xs uppercase tracking-wider text-bone-mute">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
