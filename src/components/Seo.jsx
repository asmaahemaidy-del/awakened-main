import { createContext, useContext, useEffect } from "react";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  OG_IMAGE,
  OG_IMAGE_ALT,
  SITE_NAME,
  SITE_URL,
} from "../lib/site";

// During prerendering the server passes a collector object here; the last <Seo> rendered wins.
export const SeoContext = createContext(null);

export function buildHead({ title, description, path, noindex = false, jsonLd, type = "website" }) {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const t = title || DEFAULT_TITLE;
  const d = description || DEFAULT_DESCRIPTION;
  return {
    title: t,
    meta: [
      ["name", "description", d],
      ["name", "robots", noindex ? "noindex, follow" : "index, follow, max-image-preview:large"],
      ["property", "og:site_name", SITE_NAME],
      ["property", "og:type", type],
      ["property", "og:title", t],
      ["property", "og:description", d],
      ["property", "og:url", url],
      ["property", "og:image", OG_IMAGE],
      ["property", "og:image:width", "1200"],
      ["property", "og:image:height", "630"],
      ["property", "og:image:alt", OG_IMAGE_ALT],
      ["property", "og:locale", "en_US"],
      ["property", "og:locale:alternate", "ar_QA"],
      ["name", "twitter:card", "summary_large_image"],
      ["name", "twitter:title", t],
      ["name", "twitter:description", d],
      ["name", "twitter:image", OG_IMAGE],
    ],
    canonical: noindex ? null : url,
    jsonLd: [jsonLd].flat().filter(Boolean),
  };
}

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// HTML for the <head> of a prerendered page.
export function renderHeadTags(head) {
  const tags = [`<title>${esc(head.title)}</title>`];
  for (const [attr, key, content] of head.meta)
    tags.push(`<meta ${attr}="${key}" content="${esc(content)}" data-seo>`);
  if (head.canonical) tags.push(`<link rel="canonical" href="${esc(head.canonical)}" data-seo>`);
  for (const data of head.jsonLd)
    tags.push(
      `<script type="application/ld+json" data-seo>${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`,
    );
  return tags.join("\n    ");
}

// Keep <head> in sync on client-side navigation and language switches.
function applyHead(head) {
  document.title = head.title;
  document.head.querySelectorAll("[data-seo]").forEach((el) => el.remove());
  const frag = document.createDocumentFragment();
  for (const [attr, key, content] of head.meta) {
    const el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.setAttribute("content", content);
    el.setAttribute("data-seo", "");
    frag.appendChild(el);
  }
  if (head.canonical) {
    const link = document.createElement("link");
    link.rel = "canonical";
    link.href = head.canonical;
    link.setAttribute("data-seo", "");
    frag.appendChild(link);
  }
  for (const data of head.jsonLd) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    script.setAttribute("data-seo", "");
    frag.appendChild(script);
  }
  document.head.appendChild(frag);
}

export function Seo(props) {
  const collector = useContext(SeoContext);
  const head = buildHead(props);
  if (collector) collector.head = head;
  const key = JSON.stringify(head);
  useEffect(() => {
    applyHead(JSON.parse(key));
  }, [key]);
  return null;
}
