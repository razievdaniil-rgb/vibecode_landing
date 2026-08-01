import { testimonials } from '../data/content'
import { Reveal } from './ui/Reveal'

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-volt" aria-label={`${n} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden className={i < n ? 'opacity-100' : 'opacity-25'}>
          ★
        </span>
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="reviews" className="border-t border-graphite-800 bg-graphite-900">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:px-10">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-4">Field reports</p>
              <h2 className="display-tight text-[clamp(2.2rem,5vw,3.8rem)]">
                Coaches, competitors,
                <br />
                <span className="text-volt">clinicians.</span>
              </h2>
            </div>
            <p className="font-mono text-sm text-bone-mute">
              4.9 / 5 average · 12,000+ verified reviews
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-graphite-800 bg-graphite-800 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <figure className="flex h-full flex-col bg-graphite-950 p-8">
                <Stars n={t.rating} />
                <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-bone">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-graphite-800 pt-5">
                  <span className="grid h-10 w-10 place-items-center bg-graphite-800 font-display font-black text-volt">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold text-bone">{t.name}</span>
                    <span className="block font-mono text-xs text-bone-mute">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
