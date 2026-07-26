import { pricing } from '../data/content'
import { Reveal } from './ui/Reveal'

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <Reveal>
        <div className="text-center">
          <p className="eyebrow mb-4">Stacks &amp; subscriptions</p>
          <h2 className="display-tight text-[clamp(2.5rem,6vw,4.5rem)]">
            Build your stack
          </h2>
          <p className="mx-auto mt-5 max-w-md text-bone-dim">
            Subscribe and save, or grab a single tub. Skip or cancel anytime — no lock-in.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {pricing.map((plan, i) => (
          <Reveal key={plan.tier} delay={i * 0.08}>
            <div
              className={`relative flex h-full flex-col border p-8 ${
                plan.featured
                  ? 'border-volt bg-graphite-900'
                  : 'border-graphite-700 bg-graphite-950'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 bg-volt px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-graphite-950">
                  Most popular
                </span>
              )}

              <h3 className="font-display text-xl font-black uppercase tracking-tight">
                {plan.tier}
              </h3>
              <p className="mt-2 text-sm text-bone-dim">{plan.tagline}</p>

              <div className="mt-6 flex items-end gap-2">
                <span className="font-display text-5xl font-black text-bone">
                  {plan.price}
                </span>
                <span className="mb-1 font-mono text-xs text-bone-mute">
                  {plan.cadence}
                </span>
              </div>

              <ul className="mt-8 flex-1 space-y-3 border-t border-graphite-800 pt-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-bone-dim">
                    <span
                      aria-hidden
                      className={`mt-1 h-1.5 w-1.5 shrink-0 ${
                        plan.featured ? 'bg-volt' : 'bg-graphite-600'
                      }`}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`mt-8 w-full py-4 text-center font-bold uppercase tracking-wide transition-transform duration-200 hover:-translate-y-0.5 ${
                  plan.featured
                    ? 'bg-volt text-graphite-950'
                    : 'border border-graphite-600 text-bone hover:border-bone'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
