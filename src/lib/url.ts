/** Resolves a path inside `public/` against Vite's base, so it works on any GitHub Pages URL. */
export function publicUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path}`
}
