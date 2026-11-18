export function LeafSilhouette({
  size = 28,
  color,
  className = "",
  style = {},
}) {
  /* Classic botanical leaf silhouette — single pointed apex at the top, smooth organic curves, tapered base, slender stem */
  const pathD =
    "M 50 4 C 64 16 78 32 78 50 C 78 68 66 78 52 82 C 51 86 49 91 46 96 L 44 95 C 47 91 49 86 50 82 C 34 78 22 68 22 50 C 22 32 36 16 50 4 Z";

  const fillColor = color || "currentColor";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill={fillColor}
      className={className}
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        flexShrink: 0,
        ...style,
      }}
      aria-hidden="true"
    >
      <path d={pathD} />
    </svg>
  );
}
