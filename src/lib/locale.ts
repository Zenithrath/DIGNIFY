export type Locale = "en" | "id";

const localePairs: ReadonlyArray<{ en: string; id: string }> = [
  { en: "/", id: "/" },
  { en: "/web-development", id: "/jasa-pembuatan-website" },
  { en: "/services", id: "/services" },
  { en: "/portfolio", id: "/portfolio" },
  { en: "/about", id: "/about" },
  { en: "/testimonials", id: "/testimonials" },
  { en: "/contact", id: "/contact" },
];

const slugPairs: ReadonlyArray<{ enPrefix: string; idPrefix: string }> = [
  { enPrefix: "/portfolio/", idPrefix: "/portfolio/" },
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

  for (const pair of slugPairs) {
    if (normalized.startsWith(pair.enPrefix) && pair.enPrefix !== normalized) {
      const rest = normalized.slice(pair.enPrefix.length);
      return target === "id" ? `/id${pair.idPrefix}${rest}` : `${pair.enPrefix}${rest}`;
    }
    if (normalized.startsWith(pair.idPrefix) && pair.idPrefix !== normalized) {
      const rest = normalized.slice(pair.idPrefix.length);
      return target === "en" ? `${pair.enPrefix}${rest}` : `/id${pair.idPrefix}${rest}`;
    }
  }

  const match = localePairs.find((pair) => pair.en === normalized || pair.id === normalized);
  if (!match) return target === "id" ? "/id" : "/";
  if (target === "en") return match.en === "/" ? "/" : match.en;
  return match.id === "/" ? "/id" : `/id${match.id}`;
}