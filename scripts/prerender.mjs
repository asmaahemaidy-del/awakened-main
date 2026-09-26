// Runs after `vite build` + `vite build --ssr`: writes static HTML for every public page,
// a 404 page, an unrendered app shell (for /checkout/*), and sitemap.xml.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const serverDir = path.join(root, "dist-server");

const { render, PRERENDER_PAGES, SITE_URL, DEFAULT_TITLE } = await import(
  pathToFileURL(path.join(serverDir, "entry-server.js")).href
);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
if (!template.includes("<!--app-head-->") || !template.includes("<!--app-html-->"))
  throw new Error("index.html is missing the <!--app-head--> / <!--app-html--> placeholders");

const page = (head, html) => {
  // React emits resource hints (image preloads) ahead of the markup; they belong in <head>.
  const hints = html.match(/^(?:<link [^>]*\/>)+/)?.[0] ?? "";
  const body = html.slice(hints.length);
  const headTags = [head, ...(hints.match(/<link [^>]*\/>/g) ?? [])].filter(Boolean).join("\n    ");
  return template.replace("<!--app-head-->", headTags).replace("<!--app-html-->", body);
};
const write = (file, content) => {
  const out = path.join(dist, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, content);
};

// Client-rendered shell for pages that depend on the query string (checkout results).
write("_app.html", page(`<title>${DEFAULT_TITLE}</title>\n    <meta name="robots" content="noindex">`, ""));

for (const { path: route } of PRERENDER_PAGES) {
  const { html, head } = await render(route);
  write(route === "/" ? "index.html" : `${route.slice(1)}.html`, page(head, html));
  console.log(`prerendered ${route}`);
}

const notFound = await render("/404");
write("404.html", page(notFound.head, notFound.html));
console.log("prerendered 404");

const today = new Date().toISOString().slice(0, 10);
const urls = PRERENDER_PAGES.map(
  ({ path: p, priority, changefreq }) =>
    `  <url>\n    <loc>${p === "/" ? SITE_URL + "/" : SITE_URL + p}</loc>\n    <lastmod>${today}</lastmod>\n` +
    `    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
);
write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
);
console.log(`sitemap.xml: ${urls.length} URLs`);

fs.rmSync(serverDir, { recursive: true, force: true });
