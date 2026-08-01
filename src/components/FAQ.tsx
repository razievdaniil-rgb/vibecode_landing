import { useState } from 'react'
import { faq } from '../data/content'
import { Reveal } from './ui/Reveal'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="border-t border-graphite-800 bg-graphite-900">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28 lg:px-10">
        <Reveal>
          <p className="eyebrow mb-4">Straight answers</p>
          <h2 className="display-tight text-[clamp(2.2rem,5vw,3.8rem)]">
            Questions, answered
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-graphite-700">
          {faq.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className="border-b border-graphite-700">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg font-bold uppercase tracking-tight text-bone md:text-xl">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className={`grid h-8 w-8 shrink-0 place-items-center border border-graphite-600 text-volt transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 leading-relaxed text-bone-dim">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
