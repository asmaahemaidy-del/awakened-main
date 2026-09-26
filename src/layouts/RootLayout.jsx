import { Suspense } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ScrollToTop } from "../components/ScrollToTop";
import { Spinner } from "../components/Spinner";
import { Website } from "../components/Website";

const PageFallback = () => (
  <div className="flex justify-center py-8 h-screen items-center">
    <Spinner />
  </div>
);

export function RootLayout({ children }) {
  return (
    <Website>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[2000] focus:px-4 focus:py-2 focus:rounded-md focus:bg-white focus:text-black"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Suspense fallback={<PageFallback />}>{children}</Suspense>
      </main>
      <Footer />
    </Website>
  );
}
