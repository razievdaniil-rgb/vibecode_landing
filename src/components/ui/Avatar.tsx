/**
 * Deterministic, generated avatar — an embedded SVG tile with a brand gradient,
 * a soft node pattern and the person's initials. No photos, no external assets.
 */

const palettes = [
  ['#ff3d14', '#cc2c07'],
  ['#4d63ff', '#2a3bbf'],
  ['#ff5a2e', '#7a1e08'],
  ['#3a3f47', '#16181c'],
]

function hash(str: string) {
  let h = 0
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0
  return Math.abs(h)
}

function initials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase()
}

export function Avatar({ name, size = 44 }: { name: string; size?: number }) {
  const h = hash(name)
  const [c1, c2] = palettes[h % palettes.length]
  const id = `av-${h}`
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      role="img"
      aria-label={name}
      className="shrink-0"
    >
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
      </defs>
      <rect width="44" height="44" fill={`url(#${id}-g)`} />
      {/* subtle node accents, position varied by hash */}
      <g fill="#ffffff" opacity="0.14">
        <circle cx={8 + (h % 6)} cy={10} r="2" />
        <circle cx={36 - (h % 5)} cy={34} r="3" />
        <circle cx={34} cy={9} r="1.5" />
      </g>
      <text
        x="22"
        y="23"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Archivo, sans-serif"
        fontWeight="900"
        fontSize="16"
        fill="#0b0c0e"
      >
        {initials(name)}
      </text>
    </svg>
  )
}
