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
      viewBox="0 0 110 140"
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
      {/* Delicate orbital geometric ring when shown as ambient backdrop (matching brand stationery artwork) */}
      {showRings && (
        <g stroke={fillColor} fill="none" opacity="0.32" strokeWidth="0.8">
          <ellipse cx="58" cy="68" rx="42" ry="46" transform="rotate(-15 58 68)" />
          <ellipse cx="68" cy="52" rx="28" ry="32" transform="rotate(20 68 52)" opacity="0.6" />
        </g>
      )}

      {/* Main Arching Botanical Stem */}
      <path
        d="M 28 132 C 34 112 43 82 56 52 C 63 36 71 22 78 10"
        stroke={fillColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Botanical Leaves along the stem (matching Awakened olive/laurel stem artwork) */}
      <g fill={fillColor}>
        {/* Apical / Terminal Leaf */}
        <path d="M 78 10 C 83 5 88 2 93 1 C 89 8 85 14 79 17 C 77 15 77 12 78 10 Z" />

        {/* Pair 1 (Top) */}
        <path d="M 72 22 C 81 18 91 19 97 18 C 92 25 83 28 73 25 Z" opacity="0.95" />
        <path d="M 67 27 C 58 20 46 18 38 18 C 44 26 53 31 64 30 Z" opacity="0.95" />

        {/* Pair 2 (Upper-mid) */}
        <path d="M 63 42 C 75 38 88 42 96 44 C 88 52 75 54 62 47 Z" opacity="0.92" />
        <path d="M 57 48 C 45 38 31 36 21 38 C 29 48 41 53 54 52 Z" opacity="0.92" />

        {/* Pair 3 (Center) */}
        <path d="M 52 66 C 67 62 82 68 90 72 C 80 80 65 80 50 72 Z" opacity="0.9" />
        <path d="M 45 72 C 31 62 18 63 10 67 C 18 78 32 82 43 76 Z" opacity="0.9" />

        {/* Pair 4 (Lower-mid) */}
        <path d="M 41 90 C 55 88 68 94 76 100 C 66 106 53 104 39 96 Z" opacity="0.88" />
        <path d="M 36 96 C 24 88 12 92 6 98 C 14 108 26 108 34 102 Z" opacity="0.88" />

        {/* Leaf 5 (Lowest Left) */}
        <path d="M 31 114 C 20 108 10 114 4 122 C 13 130 25 128 31 120 Z" opacity="0.85" />
      </g>
    </svg>
  );
}
