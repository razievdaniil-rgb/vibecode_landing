type JarFallbackProps = {
  accent?: string
  labelName?: string
  labelLine?: string
  macro?: string
  loading?: boolean
}

/**
 * Pure-SVG protein tub. Used while the 3D chunk loads, and as the permanent
 * render for reduced-motion / low-power devices. No JS animation required.
 */
export function JarFallback({
  accent = '#ff3d14',
  labelName = 'KINETIK',
  labelLine = 'WHEY ISOLATE',
  macro = '27g PROTEIN',
  loading = false,
}: JarFallbackProps) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <svg
        viewBox="0 0 220 320"
        className="h-[70%] max-h-[420px] w-auto drop-shadow-2xl"
        role="img"
        aria-label={`${labelName} ${labelLine} tub`}
      >
        <defs>
          <linearGradient id="bodyG" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#16181c" />
            <stop offset="0.5" stopColor="#22262c" />
            <stop offset="1" stopColor="#0b0c0e" />
          </linearGradient>
          <linearGradient id="lidG" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor={accent} />
            <stop offset="1" stopColor="#cc2c07" />
          </linearGradient>
        </defs>

        {/* shadow */}
        <ellipse cx="110" cy="306" rx="72" ry="10" fill="#000" opacity="0.45" />

        {/* body */}
        <rect x="34" y="96" width="152" height="196" rx="14" fill="url(#bodyG)" />
        {/* accent front band */}
        <rect x="82" y="96" width="56" height="196" fill={accent} opacity="0.95" />

        {/* neck + lid */}
        <rect x="58" y="78" width="104" height="22" rx="6" fill="#0b0c0e" />
        <rect x="52" y="44" width="116" height="42" rx="10" fill="url(#lidG)" />

        {/* label text */}
        <text
          x="110"
          y="176"
          textAnchor="middle"
          fill="#0b0c0e"
          fontFamily="Archivo, sans-serif"
          fontWeight="900"
          fontSize="22"
          letterSpacing="-0.5"
        >
          {labelName}
        </text>
        <text
          x="110"
          y="196"
          textAnchor="middle"
          fill="#0b0c0e"
          fontFamily="'Space Mono', monospace"
          fontWeight="700"
          fontSize="9"
        >
          {labelLine}
        </text>
        <rect
          x="74"
          y="228"
          width="72"
          height="26"
          fill="none"
          stroke="#0b0c0e"
          strokeWidth="2"
        />
        <text
          x="110"
          y="245"
          textAnchor="middle"
          fill="#0b0c0e"
          fontFamily="Archivo, sans-serif"
          fontWeight="900"
          fontSize="12"
        >
          {macro}
        </text>

        {loading && (
          <text
            x="110"
            y="290"
            textAnchor="middle"
            fill="#7d7c76"
            fontFamily="'Space Mono', monospace"
            fontSize="8"
          >
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="1.2s"
              repeatCount="indefinite"
            />
            LOADING 3D…
          </text>
        )}
      </svg>
    </div>
  )
}
