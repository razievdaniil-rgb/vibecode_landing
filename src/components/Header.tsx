import { useEffect, useState } from 'react'
import { brand, nav } from '../data/content'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu when the viewport grows to desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => mq.matches && setMenuOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const opaque = scrolled || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        opaque
          ? 'border-b border-graphite-700 bg-graphite-950/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="group flex items-center gap-2" onClick={() => setMenuOpen(false)}>
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
          className="group relative hidden items-center gap-2 bg-volt px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-graphite-950 transition-transform duration-200 hover:-translate-y-0.5 md:inline-flex"
        >
          Shop now
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="relative grid h-10 w-10 place-items-center md:hidden"
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden className="flex flex-col items-end gap-[5px]">
            <span
              className={`block h-0.5 w-6 bg-bone transition-all duration-300 ${
                menuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-bone transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-bone transition-all duration-300 ${
                menuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile dropdown panel — conditionally rendered plain block */}
      {menuOpen && (
        <nav className="flex flex-col gap-1 border-b border-graphite-700 px-6 py-4 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-graphite-800 py-3 font-display text-lg font-bold uppercase tracking-tight text-bone"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 bg-volt px-5 py-4 font-bold uppercase tracking-wide text-graphite-950"
          >
            Shop now →
          </a>
        </nav>
      )}
    </header>
  )
}
