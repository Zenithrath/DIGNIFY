export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export const siteUrl = "https://dignify.studio";

export function formatYearIndex(index: number) {
  return String(index).padStart(2, "0");
}
