export function LeafSilhouette({
  size = 28,
  color,
  className = "",
  style = {},
  withRings,
}) {
  const fillColor = color || "currentColor";
  const isAmbient = typeof size === "number" ? size >= 100 : false;
  const showRings = withRings !== undefined ? withRings : isAmbient;

  return (
    <svg
      width={size}
      height={size}
      viewBox="-15 0 115 135"
      fill="none"
      className={className}
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        flexShrink: 0,
        ...style,
      }}
      aria-hidden="true"
    >
      {/* Subtle ambient orbital curve (only on large ambient displays) */}
      {showRings && (
        <g stroke={fillColor} fill="none" opacity="0.28" strokeWidth="0.8">
          <ellipse cx="48" cy="62" rx="40" ry="46" transform="rotate(-18 48 62)" />
        </g>
      )}

      {/* ── Official Awakened Logo Stem ── */}
      {/* Main graceful arching stem */}
      <path
        d="M 38 122 C 20 95 24 58 44 26 C 48 20 53 14 57 8"
        stroke={fillColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Petioles (leaf stalks) branching from the main stem */}
      <g stroke={fillColor} strokeWidth="1.3" strokeLinecap="round">
        {/* Top petioles */}
        <path d="M 52 15 L 43 14" />
        <path d="M 50 20 L 59 19" />
        <path d="M 45 28 L 33 24" />
        <path d="M 42 34 L 52 33" />

        {/* Upper-mid petioles */}
        <path d="M 37 42 L 23 38" />
        <path d="M 34 50 L 45 49" />
        <path d="M 30 58 L 15 54" />
        <path d="M 28 66 L 39 65" />

        {/* Mid-lower petioles */}
        <path d="M 26 76 L 11 73" />
        <path d="M 26 84 L 37 83" />
        <path d="M 28 94 L 14 93" />
        <path d="M 30 102 L 41 102" />

        {/* Lower petiole */}
        <path d="M 34 112 L 22 113" />
      </g>

      {/* Teardrop leaves with pointed tips (matching the logo leaves) */}
      <g fill={fillColor} stroke="none">
        {/* Terminal double apex leaves at the tip */}
        <path d="M 57 8 C 55 4 54 1 56 0 C 58 2 60 5 58 8 Z" />
        <path d="M 58 8 C 61 5 64 2 66 1 C 65 4 63 7 59 9 Z" />

        {/* Upper leaves */}
        <path d="M 43 14 C 36 10 32 10 27 12 C 32 16 38 17 43 15 Z" />
        <path d="M 59 19 C 66 16 71 17 76 20 C 70 23 64 23 58 20 Z" />
        <path d="M 33 24 C 25 19 19 20 13 23 C 19 28 26 28 33 25 Z" />
        <path d="M 52 33 C 60 30 67 32 73 36 C 66 38 59 37 51 34 Z" />

        {/* Upper-mid leaves */}
        <path d="M 23 38 C 14 32 7 34 0 38 C 7 44 15 44 23 39 Z" />
        <path d="M 45 49 C 54 46 62 48 69 53 C 61 55 53 54 44 50 Z" />
        <path d="M 15 54 C 6 48 -1 51 -7 56 C 1 61 9 61 16 55 Z" />
        <path d="M 39 65 C 49 62 57 65 64 70 C 56 72 47 70 38 66 Z" />

        {/* Mid-lower leaves */}
        <path d="M 11 73 C 2 68 -5 72 -10 77 C -2 82 6 81 12 74 Z" />
        <path d="M 37 83 C 47 81 55 84 61 90 C 53 91 44 89 36 84 Z" />
        <path d="M 14 93 C 5 89 -1 94 -6 100 C 2 104 10 102 15 94 Z" />
        <path d="M 41 102 C 50 102 57 106 62 112 C 54 112 47 109 40 103 Z" />

        {/* Lower leaf */}
        <path d="M 22 113 C 14 111 8 116 3 122 C 11 125 18 122 23 114 Z" />

        {/* Two small floating / drifting leaves at the base (as seen in the logo) */}
        <path d="M 46 122 C 49 119 53 119 56 121 C 53 124 50 124 46 123 Z" opacity="0.85" />
        <path d="M 54 127 C 57 125 61 126 64 128 C 61 130 58 130 54 128 Z" opacity="0.8" />
      </g>
    </svg>
  );
}
