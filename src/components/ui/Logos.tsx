import type { ReactElement } from 'react'

/**
 * Embedded partner logo lockups — a distinct geometric SVG mark + wordmark for
 * each fictional partner. Inline SVG, currentColor, no external assets.
 */

type MarkProps = { className?: string }

const wrap = (className = '') => ({
  className,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  width: 22,
  height: 22,
})

// Anvil / bar — IRONHALL
const MarkIron = ({ className }: MarkProps) => (
  <svg {...wrap(className)}>
    <path d="M4 8h16M8 8v3a4 4 0 0 0 8 0V8M10 15h4M9 19h6" />
  </svg>
)
// Apex chevron — APEXFIT
const MarkApex = ({ className }: MarkProps) => (
  <svg {...wrap(className)}>
    <path d="M12 4 4 18h16L12 4Z M12 10l-3 5h6l-3-5Z" />
  </svg>
)
// Twin peaks — NORDSTRENGTH
const MarkNord = ({ className }: MarkProps) => (
  <svg {...wrap(className)}>
    <path d="M3 19 9 7l3 5 2-3 5 10H3Z" />
  </svg>
)
// Speed chevrons — VELOCITY LAB
const MarkVelocity = ({ className }: MarkProps) => (
  <svg {...wrap(className)}>
    <path d="M4 6l6 6-6 6M12 6l6 6-6 6" />
  </svg>
)
// Tent — BASECAMP
const MarkBase = ({ className }: MarkProps) => (
  <svg {...wrap(className)}>
    <path d="M12 4 3 20h18L12 4ZM12 4v16M12 20l5-6" />
  </svg>
)

const marks: Record<string, (p: MarkProps) => ReactElement> = {
  IRONHALL: MarkIron,
  APEXFIT: MarkApex,
  NORDSTRENGTH: MarkNord,
  'VELOCITY LAB': MarkVelocity,
  BASECAMP: MarkBase,
}

export function PartnerLogo({ name }: { name: string }) {
  const Mark = marks[name] ?? MarkApex
  return (
    <span className="flex items-center gap-2 text-bone-mute transition-colors hover:text-bone-dim">
      <Mark className="shrink-0" />
      <span className="font-display text-lg font-black uppercase tracking-tight">{name}</span>
    </span>
  )
}
