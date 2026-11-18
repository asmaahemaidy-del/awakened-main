export function LeafSilhouette({
  variant = "ginkgo",
  size = 28,
  color,
  className = "",
  style = {},
}) {
  const pathD =
    "M 49 95 C 49 84 49.5 77 50 72 C 40 64 22 54 12 40 C 6 30 11 18 24 13 C 34 9 44 14 50 24 C 56 14 66 9 76 13 C 89 18 94 30 88 40 C 78 54 60 64 50 72 C 50.5 77 51 84 51 95 Z";

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
