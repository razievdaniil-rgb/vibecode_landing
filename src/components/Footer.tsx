import { brand, footer } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-graphite-800 bg-graphite-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center bg-volt font-display text-sm font-black text-graphite-950">
                K
              </span>
              <span className="font-display text-lg font-black tracking-tight">
                {brand.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone-mute">
              {brand.tagline} Clinically dosed sports nutrition, engineered from the
              research up.
            </p>
            <div className="mt-6 flex gap-4">
              {footer.social.map((s) => (
                <a
                  key={s}
                  href="#top"
                  className="font-mono text-xs uppercase tracking-widest text-bone-mute transition-colors hover:text-volt"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-bone-mute">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-bone-dim transition-colors hover:text-bone"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-graphite-800 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs text-bone-mute">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p className="max-w-lg font-mono text-xs leading-relaxed text-bone-mute">
            {brand.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  )
}
