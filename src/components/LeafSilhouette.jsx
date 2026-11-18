export function LeafSilhouette({ size = 28, variant = 1, className = "", style = {} }) {
  const gradientId = `leaf-grad-${variant}`;

  // 3 smooth leaf silhouette variants without veins
  const paths = {
    1: "M12 2C12 2 4 8 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 8 12 2 12 2Z",
    2: "M19.5 4.5C14.5 4 6 8.5 4.5 17C6 19 9 20 12 19.5C18 18.5 20 10.5 19.5 4.5Z",
    3: "M5 19C7 19.5 16 19 19.5 7C17 4.5 9 6 6 12C4.5 15 4.5 17.5 5 19Z",
  };

  const pathD = paths[variant] || paths[1];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={`url(#${gradientId})`}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#8DAF8A" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#3D5C42" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <path d={pathD} />
    </svg>
  );
}
