import type { SVGProps } from 'react'

/**
 * Embedded, self-contained SVG icon set — grounded in the sports-nutrition /
 * lab world. Stroke-based, inherit `currentColor`, no external assets.
 */

type IconProps = SVGProps<SVGSVGElement>

const base = (props: IconProps) => ({
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  width: 28,
  height: 28,
  ...props,
})

/** Cross-flow filtration — purity */
export const IconFilter = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 5h18l-7 8v6l-4 2v-8L3 5Z" />
  </svg>
)

/** Measuring scoop — clinical dosing */
export const IconScoop = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14 4a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6Z" />
    <path d="M8 10 4.5 18.5a1.8 1.8 0 0 0 1.7 2.5H9" />
    <path d="M8 10h6" />
  </svg>
)

/** Shield + check — third-party tested */
export const IconShieldCheck = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3 5 6v5c0 4.4 3 7.8 7 9 4-1.2 7-4.6 7-9V6l-7-3Z" />
    <path d="m9 11.5 2.2 2.2L15.5 9.5" />
  </svg>
)

/** Droplet — mixes clean / taste */
export const IconDroplet = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3.5c3 3.6 5.5 6.4 5.5 9.5a5.5 5.5 0 0 1-11 0c0-3.1 2.5-5.9 5.5-9.5Z" />
    <path d="M9.5 13.5a2.5 2.5 0 0 0 2.5 2.5" />
  </svg>
)

/** Molecule — the science motif */
export const IconMolecule = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="6" cy="7" r="2.2" />
    <circle cx="18" cy="7" r="2.2" />
    <circle cx="12" cy="17" r="2.2" />
    <path d="M7.6 8.7 10.4 15M16.4 8.7 13.6 15M8.2 7h7.6" />
  </svg>
)

/** Lightning bolt — power / energy */
export const IconBolt = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M13 2 5 13h6l-1 9 8-11h-6l1-9Z" />
  </svg>
)

/** Dumbbell — recover / strength */
export const IconDumbbell = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 9v6M6 7v10M18 7v10M21 9v6M6 12h12" />
  </svg>
)

/** Heart pulse — endurance */
export const IconPulse = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20.5 8.5a4.2 4.2 0 0 0-7.3-2.8L12 6.9l-1.2-1.2A4.2 4.2 0 0 0 3.5 8.5c0 1.6.8 3 2 4.2" />
    <path d="M4 15h4l1.5-3 2.5 6 2-4 1.5 2H20" />
  </svg>
)
