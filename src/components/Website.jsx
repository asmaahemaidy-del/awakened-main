import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export function Website({ children, config = {}, className }) {
  const {
    layout = {
      maxWidth: "full",
      padding: "md",
      background: "default",
      minHeight: true,
    },
  } = config;
  const [dir, setDir] = useState("ltr");
  useEffect(() => {
    const update = () => setDir(document.documentElement.dir || "ltr");
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir"],
    });
    return () => observer.disconnect();
  }, []);
  const getBackgroundClass = () => {
    switch (layout.background) {
      case "muted":
        return "bg-muted";
      case "gradient":
        return "bg-gradient-to-b from-background to-muted/20";
      default:
        return "bg-background";
    }
  };
  return (
    <div
      dir={dir}
      className={cn(
        layout.minHeight !== false && "min-h-screen",
        getBackgroundClass(),
        "flex flex-col",
        className,
      )}
    >
      {children}
    </div>
  );
}
