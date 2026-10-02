// The "All versions" page, linked from the version selector. It reads the
// starlight-versions config, so astro.config.mjs only adds it while
// DOC_VERSIONS is non-empty (the plugin is not loaded otherwise).
export const ALL_VERSIONS_PATH = "/docs/versions/";

export default function allVersionsPage() {
  return {
    name: "dittofs-all-versions-page",
    hooks: {
      "astro:config:setup": ({ injectRoute }) => {
        injectRoute({
          pattern: ALL_VERSIONS_PATH,
          entrypoint: "./src/components/docs/AllVersions.astro",
          prerender: true,
        });
      },
    },
  };
}
