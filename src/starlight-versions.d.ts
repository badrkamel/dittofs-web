// The starlight-versions plugin serves its config as a virtual module, but its
// declaration (node_modules/starlight-versions/virtual.d.ts) is not part of this
// project's TypeScript program. Read by src/components/docs/VersionSelect.astro
// and src/components/docs/AllVersions.astro.
declare module 'virtual:starlight-versions-config' {
  const config: import('starlight-versions').StarlightVersionsConfig
  export default config
}
