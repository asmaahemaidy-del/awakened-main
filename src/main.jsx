import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App";
import { Providers } from "./Providers";
import "./index.css";

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Root element not found");

const app = (
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);

// Prerendered pages arrive with HTML already in #app; hydrate those, render the rest from scratch.
if (rootElement.firstElementChild) hydrateRoot(rootElement, app);
else createRoot(rootElement).render(app);
