/**
 * Embedded decorative "molecular lattice" — a tiling hex/node mesh drawn as
 * inline SVG. Purely ornamental; sits behind content at low opacity. No assets.
 */
export function HexMesh({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id="hexmesh"
          width="56"
          height="48"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(1.4)"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M14 0 L42 0 L56 24 L42 48 L14 48 L0 24 Z" />
            <circle cx="14" cy="0" r="1.6" fill="currentColor" stroke="none" />
            <circle cx="42" cy="0" r="1.6" fill="currentColor" stroke="none" />
            <circle cx="0" cy="24" r="1.6" fill="currentColor" stroke="none" />
            <circle cx="56" cy="24" r="1.6" fill="currentColor" stroke="none" />
            <circle cx="14" cy="48" r="1.6" fill="currentColor" stroke="none" />
            <circle cx="42" cy="48" r="1.6" fill="currentColor" stroke="none" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexmesh)" />
    </svg>
  )
}
