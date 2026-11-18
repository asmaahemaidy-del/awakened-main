export function LeafSilhouette({
  variant = "ginkgo",
  size = 28,
  color,
  className = "",
  style = {},
}) {
  const leafPaths = {
    ginkgo:
      "M 49 95 C 49 84 49.5 77 50 72 C 40 64 22 54 12 40 C 6 30 11 18 24 13 C 34 9 44 14 50 24 C 56 14 66 9 76 13 C 89 18 94 30 88 40 C 78 54 60 64 50 72 C 50.5 77 51 84 51 95 Z",
    olive:
      "M 50 95 C 49.5 82 49 72 48 64 C 40 50 35 34 38 18 C 40 10 47 5 50 5 C 53 5 60 10 62 18 C 65 34 60 50 52 64 C 51 72 50.5 82 50 95 Z",
    eucalyptus:
      "M 50 95 C 49.5 84 49 76 48 68 C 30 64 16 48 16 32 C 16 16 31 8 50 8 C 69 8 84 16 84 32 C 84 48 70 64 52 68 C 51 76 50.5 84 50 95 Z",
    laurel:
      "M 42 95 C 44 80 47 70 51 60 C 62 48 68 32 64 14 C 62 7 55 5 50 6 C 42 16 36 32 38 48 C 39 58 41 72 40 95 Z",
  };

  const variantList = ["ginkgo", "olive", "eucalyptus", "laurel"];
  const key =
    typeof variant === "number"
      ? variantList[Math.abs(variant) % variantList.length]
      : leafPaths[variant]
      ? variant
      : "ginkgo";

  const pathD = leafPaths[key];
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
