import { Suspense, lazy, useEffect, useState } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { CookieBannerErrorBoundary } from "./components/CookieBannerErrorBoundary";
import { routes } from "./routes";

const CookieBanner = lazy(() =>
  import("./components/CookieBanner").catch((error) => {
    console.warn("Failed to load CookieBanner:", error);
    return {
      default: () => null,
    };
  }),
);

const router = createBrowserRouter(routes);

export function App() {
  // The cookie banner depends on localStorage, so it is only mounted in the browser after hydration.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <>
      <RouterProvider router={router} />
      {mounted && (
        <CookieBannerErrorBoundary>
          <Suspense fallback={null}>
            <CookieBanner />
          </Suspense>
        </CookieBannerErrorBoundary>
      )}
    </>
  );
}
