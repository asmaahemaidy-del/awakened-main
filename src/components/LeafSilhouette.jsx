/**
 * LeafSilhouette — Ginkgo biloba leaf with brand gradient fill
 * Fan-shaped bilobed leaf with radiating veins, filled with gold→sage gradient.
 * Props: size, color, className, style, withRings, variant
 */
export function LeafSilhouette({
  size = 28,
  color,
  className = "",
  style = {},
  withRings,
  variant = 1,
}) {
  // Use a unique gradient id per variant so multiple on the same page don't clash
  const gradientId = `leaf-grad-${variant}-${Math.round(size)}`;
  const isAmbient = typeof size === "number" ? size >= 100 : false;
  const showRings = withRings !== undefined ? withRings : isAmbient;

  // If a solid color is explicitly passed, use it; otherwise use the gradient
  const fillValue = color ? color : `url(#${gradientId})`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 240"
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
      <defs>
        {/* Gold → Sage → Forest gradient — brand palette, no hardcoded overrides */}
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#C9A84C" stopOpacity="0.92" />
          <stop offset="50%"  stopColor="#8DAF8A" stopOpacity="0.88" />
          <stop offset="100%" stopColor="#3D5C42" stopOpacity="0.96" />
        </linearGradient>
      </defs>

      {/* Subtle ambient orbital ring (large ambient displays only) */}
      {showRings && (
        <ellipse
          cx="100"
          cy="115"
          rx="72"
          ry="80"
          transform="rotate(-12 100 115)"
          stroke="#C9A84C"
          strokeWidth="0.9"
          fill="none"
          opacity="0.22"
        />
      )}

      {/* ── Ginkgo Biloba Fan Leaf ── */}
      {/* Outer fan silhouette — classic bilobed ginkgo shape */}
      <path
        d="
          M 100 195
          C 100 190 100 185 100 180
          C 90 174 80 166 70 155
          C 54 138 42 118 36 98
          C 28 72 30 50 38 34
          C 44 22 54 14 64 10
          C 72 7  80 7  86 10
          C 90 12 93 15 95 18
          C 96 15 98 11 100 8
          C 102 11 104 15 105 18
          C 107 15 110 12 114 10
          C 120 7  128 7  136 10
          C 146 14 156 22 162 34
          C 170 50 172 72 164 98
          C 158 118 146 138 130 155
          C 120 166 110 174 100 180
          C 100 185 100 190 100 195
          Z
        "
        fill={fillValue}
      />

      {/* White vein lines — radiating from base, matching ginkgo style */}
      {/* Center vein: creates the two-lobe split */}
      <path
        d="M 100 178 C 100 160 100 130 100 55"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />

      {/* Left lobe veins */}
      <path d="M 97 170 C 88 148 72 118 50 88"  stroke="white" strokeWidth="2.3" strokeLinecap="round" fill="none" opacity="0.65" />
      <path d="M 95 165 C 80 140 60 108 42 76"  stroke="white" strokeWidth="2.0" strokeLinecap="round" fill="none" opacity="0.6"  />
      <path d="M 93 160 C 72 132 50 98  36 62"  stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.55" />
      <path d="M 90 155 C 68 125 46 90  36 50"  stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"  />
      <path d="M 87 150 C 68 120 50 85  42 44"  stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4"  />

      {/* Right lobe veins — mirror */}
      <path d="M 103 170 C 112 148 128 118 150 88" stroke="white" strokeWidth="2.3" strokeLinecap="round" fill="none" opacity="0.65" />
      <path d="M 105 165 C 120 140 140 108 158 76" stroke="white" strokeWidth="2.0" strokeLinecap="round" fill="none" opacity="0.6"  />
      <path d="M 107 160 C 128 132 150 98  164 62" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.55" />
      <path d="M 110 155 C 132 125 154 90  164 50" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"  />
      <path d="M 113 150 C 132 120 150 85  158 44" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4"  />

      {/* Petiole / stem */}
      <path
        d="M 100 195 C 98 210 94 220 90 232"
        stroke={color || "#8DAF8A"}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
    </svg>
  );
}
