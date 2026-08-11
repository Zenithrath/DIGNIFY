export type Locale = "en" | "id";

const localePairs: ReadonlyArray<{ en: string; id: string }> = [
  { en: "/", id: "/" },
  { en: "/web-development", id: "/jasa-pembuatan-website" },
];

export function currentLocale(pathname: string): Locale {
  return pathname === "/id" || pathname.startsWith("/id/") ? "id" : "en";
}

export function normalizePath(pathname: string) {
  const isId = pathname === "/id" || pathname.startsWith("/id/");
  return isId ? pathname.slice(3) || "/" : pathname;
}

export function alternateHref(pathname: string, target: Locale): string {
  const normalized = normalizePath(pathname);
  const match = localePairs.find((pair) => pair.en === normalized || pair.id === normalized);
  if (!match) return target === "id" ? "/id" : "/";
  if (target === "en") return match.en;
  return match.id === "/" ? "/id" : `/id${match.id}`;
}
