"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { alternateHref, currentLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const pathname = usePathname();
  const locale = currentLocale(pathname);

  const itemClass = (active: boolean) =>
    cn(
      "inline-flex size-9 items-center justify-center font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] transition-colors duration-300",
      active
        ? "bg-emerald text-ink"
        : tone === "dark"
          ? "text-muted-dark hover:text-emerald"
          : "text-muted hover:text-ink-text",
    );

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn("flex items-center border", tone === "dark" ? "border-line-dark" : "border-line", className)}
    >
      <Link href={alternateHref(pathname, "en")} aria-current={locale === "en" ? "true" : undefined} className={itemClass(locale === "en")}>
        EN
      </Link>
      <span aria-hidden className={cn("h-4 w-px", tone === "dark" ? "bg-line-dark" : "bg-line")} />
      <Link href={alternateHref(pathname, "id")} aria-current={locale === "id" ? "true" : undefined} className={itemClass(locale === "id")}>
        ID
      </Link>
    </div>
  );
}
