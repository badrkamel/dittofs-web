import { getCollection } from "astro:content";

async function loadRoutes() {
  const entries = await getCollection("docs", ({ data }) => !data.draft);
  return new Set(entries.map(({ id }) => `/${id.replace(/\/$/, "")}`));
}

let buildRoutes: ReturnType<typeof loadRoutes> | undefined;

export function getDocsRoutes() {
  // Build all archives against one inventory; dev reloads must see edits.
  return import.meta.env.PROD ? (buildRoutes ??= loadRoutes()) : loadRoutes();
}
