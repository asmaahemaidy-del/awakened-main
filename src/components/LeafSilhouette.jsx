export function LeafSilhouette({
  size = 28,
  color,
  className = "",
  style = {},
}) {
  /* Authentic ginkgo biloba leaf — wide fan, central V-notch, tapered stem */
  const pathD =
    "M 50 97 C 49.5 90 49 82 48 74 C 38 58 16 42 6 30 C 0 22 2 12 12 7 C 22 2 36 3 46 10 C 49 13 50 18 50 24 C 50 18 51 13 54 10 C 64 3 78 2 88 7 C 98 12 100 22 94 30 C 84 42 62 58 52 74 C 51 82 50.5 90 50 97 Z";

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
