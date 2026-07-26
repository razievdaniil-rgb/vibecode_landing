import { useEffect, useState } from 'react'
import { brand, nav } from '../data/content'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-graphite-700 bg-graphite-950/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center bg-volt font-display text-sm font-black text-graphite-950">
            K
          </span>
          <span className="font-display text-lg font-black tracking-tight text-bone">
            {brand.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-bone-dim transition-colors hover:text-bone"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#pricing"
          className="group relative inline-flex items-center gap-2 bg-volt px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-graphite-950 transition-transform duration-200 hover:-translate-y-0.5"
        >
          Shop now
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>
    </header>
  )
}
