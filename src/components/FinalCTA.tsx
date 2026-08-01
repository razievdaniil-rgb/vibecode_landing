import { useState, type FormEvent } from 'react'
import { Reveal } from './ui/Reveal'

export function FinalCTA() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'error' | 'done'>('idle')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    // Demo only — validate, no real submission.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState('error')
      return
    }
    setState('done')
  }

  return (
    <section className="relative overflow-hidden border-t border-graphite-800">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 80% at 50% 100%, rgba(255,61,20,0.25), transparent 70%)',
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-32 lg:px-10">
        <Reveal>
          <p className="eyebrow mb-6">Ready when you are</p>
          <h2 className="display-tight text-[clamp(3rem,9vw,7rem)]">
            Fuel the
            <br />
            <span className="text-volt">machine.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-md text-lg text-bone-dim">
            Drop your email for early access and the batch-testing breakdown. No spam —
            it&rsquo;s a demo brand, after all.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          {state === 'done' ? (
            <p className="mx-auto mt-10 max-w-md border border-volt bg-graphite-900 px-6 py-5 font-mono text-sm text-bone">
              ✓ You&rsquo;re on the list — {email}. (Nothing was actually sent; this is a
              portfolio demo.)
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
              noValidate
            >
              <label htmlFor="cta-email" className="sr-only">
                Email address
              </label>
              <input
                id="cta-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (state === 'error') setState('idle')
                }}
                placeholder="you@email.com"
                className="flex-1 border border-graphite-600 bg-graphite-950 px-5 py-4 text-bone placeholder:text-bone-mute focus:border-volt focus:outline-none"
                aria-invalid={state === 'error'}
              />
              <button
                type="submit"
                className="bg-volt px-7 py-4 font-bold uppercase tracking-wide text-graphite-950 transition-transform duration-200 hover:-translate-y-0.5"
              >
                Get access
              </button>
            </form>
          )}
          {state === 'error' && (
            <p className="mt-3 font-mono text-xs text-volt-bright">
              Enter a valid email address.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
