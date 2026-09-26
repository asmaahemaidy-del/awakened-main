// Build-time renderer used by scripts/prerender.mjs (never shipped to the browser).
import { prerenderToNodeStream } from "react-dom/static";
import { StaticRouterProvider, createStaticHandler, createStaticRouter } from "react-router";
import { SeoContext, renderHeadTags } from "./components/Seo";
import { Providers } from "./Providers";
import { SITE_URL } from "./lib/site";
import { routes } from "./routes";

export { PRERENDER_PAGES } from "./routes";
export { SITE_URL, DEFAULT_TITLE } from "./lib/site";

export async function render(path) {
  const handler = createStaticHandler(routes);
  const context = await handler.query(new Request(`${SITE_URL}${path}`));
  if (context instanceof Response) throw new Error(`${path} returned a redirect`);
  const router = createStaticRouter(handler.dataRoutes, context);

  const seo = {};
  const { prelude } = await prerenderToNodeStream(
    <SeoContext.Provider value={seo}>
      <Providers>
        <StaticRouterProvider router={router} context={context} hydrate={false} />
      </Providers>
    </SeoContext.Provider>,
  );
  let html = "";
  for await (const chunk of prelude) html += chunk;
  return { html, head: seo.head ? renderHeadTags(seo.head) : "" };
}
