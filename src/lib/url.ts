// Prefix internal links/assets with the configured base path so the site works
// from a GitHub Pages project subpath (e.g. /phd-defense-website/) AND from root.
const BASE = import.meta.env.BASE_URL;

export function url(path = ''): string {
  const b = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${b}${p}` || '/';
}

// For images and other assets under /public.
export function asset(path: string): string {
  return url(path);
}
