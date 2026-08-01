import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { hero, brand } from '../data/content'
import { JarFallback } from './JarFallback'
import { useIsLowPower, useReducedMotion } from '../hooks/useReducedMotion'

const JarStage = lazy(() => import('../three/JarStage'))

export function Hero() {
  const reduced = useReducedMotion()
  const lowPower = useIsLowPower()
  const use3D = !reduced && !lowPower

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden py-28"
    >
      {/* Ambient volt glow + grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          background:
            'radial-gradient(60% 50% at 70% 40%, rgba(255,61,20,0.22), transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(70% 70% at 50% 40%, #000, transparent)',
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-12 lg:px-10">
        {/* Copy */}
        <div className="lg:col-span-6">
          <motion.p
            className="eyebrow mb-6 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block h-2 w-2 bg-volt" />
            {hero.eyebrow}
          </motion.p>

          <h1 className="display-tight text-[clamp(3rem,7.5vw,6.5rem)]">
            {hero.headline.map((word, i) => (
              <motion.span
                key={word}
                className={`block ${i === 1 ? 'pl-[0.12em] text-volt' : ''}`}
                initial={{ opacity: 0, y: 40, skewY: 4 }}
                animate={{ opacity: 1, y: 0, skewY: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-6 max-w-md text-lg leading-relaxed text-bone-dim"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {hero.sub}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-2 bg-volt px-7 py-4 font-bold uppercase tracking-wide text-graphite-950 transition-transform duration-200 hover:-translate-y-0.5"
            >
              {hero.primaryCta}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#science"
              className="inline-flex items-center gap-2 border border-graphite-600 px-7 py-4 font-bold uppercase tracking-wide text-bone transition-colors hover:border-bone hover:bg-graphite-850"
            >
              {hero.secondaryCta}
            </a>
          </motion.div>

          {/* Micro-stats */}
          <motion.dl
            className="mt-10 flex gap-6 border-t border-graphite-700 pt-6 sm:gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            {hero.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-black text-bone">{s.value}</dt>
                <dd className="mt-1 font-mono text-xs uppercase tracking-wider text-bone-mute">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* 3D jar */}
        <div className="relative h-[46vh] min-h-[340px] lg:col-span-6 lg:h-[76vh]">
          {use3D ? (
            <Suspense fallback={<JarFallback loading />}>
              <JarStage labelName="KINETIK" labelLine="WHEY ISOLATE" macro="27g PROTEIN" />
            </Suspense>
          ) : (
            <JarFallback />
          )}
          <span className="absolute bottom-2 right-2 font-mono text-[10px] uppercase tracking-widest text-bone-mute">
            {use3D ? 'drag · real-time 3D' : 'static preview'}
          </span>
        </div>
      </div>

      <span className="sr-only">{brand.disclaimer}</span>
    </section>
  )
}
