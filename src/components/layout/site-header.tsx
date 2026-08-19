"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { BrandLockup } from "./brand";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { currentLocale } from "@/lib/locale";
import { primaryNav, site } from "@/content/site";
import { ThemeToggle } from "@/components/theme/theme-toggle";

function isActive(pathname: string, href: string) {
  if (href === "/" || href === "/id") return pathname === href;
  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const locale = currentLocale(pathname);
  const isIndonesian = locale === "id";
  const links = primaryNav(isIndonesian ? "id" : "en");
  const brandHref = isIndonesian ? "/id" : "/";
  const ctaLabel = isIndonesian ? "Mulai Project" : "Start a Project";
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <header id="top" className="site-header sticky top-0 z-40 border-b border-line-dark bg-ink text-paper">
        <div inert={open || undefined} className={cn(open && "invisible")}>
          <Container className="flex h-16 items-center justify-between gap-6">
          <Link
            href={brandHref}
            aria-label={`${site.name} ${isIndonesian ? "beranda" : "home"}`}
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald"
          >
            <BrandLockup tone="paper" />
          </Link>

          <nav aria-label={isIndonesian ? "Navigasi utama" : "Primary"} className="hidden items-center gap-7 lg:flex">
            {links.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] transition-colors duration-300",
                    active ? "text-emerald" : "text-muted-dark hover:text-paper",
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "mx-auto mb-1 block h-0.5 w-3 transition-colors",
                      active ? "bg-emerald" : "bg-transparent",
                    )}
                  />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle tone="dark" className="hidden md:flex" />
            <Button href={isIndonesian ? "/id/contact" : "/contact"} variant="emerald" size="md" className="hidden md:inline-flex">
              {ctaLabel}
            </Button>
            <button
              ref={triggerRef}
              type="button"
              aria-label={open ? (isIndonesian ? "Tutup menu" : "Close menu") : isIndonesian ? "Buka menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center border border-line-dark text-paper transition-colors hover:bg-surface lg:hidden"
            >
              {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
            </button>
          </div>
        </Container>
      </div>
      </header>

      {open ? (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="menu-enter fixed inset-0 z-50 flex flex-col bg-ink text-paper lg:hidden"
        >
          <Container className="flex h-16 items-center justify-between gap-4 border-b border-line-dark">
            <BrandLockup tone="paper" />
            <button
              ref={closeRef}
              type="button"
              aria-label={isIndonesian ? "Tutup menu" : "Close menu"}
              onClick={() => setOpen(false)}
              className="inline-flex size-10 items-center justify-center border border-line-dark text-paper transition-colors hover:border-emerald hover:text-emerald"
            >
              <X aria-hidden className="size-5" />
            </button>
          </Container>
          <nav aria-label={isIndonesian ? "Navigasi seluler" : "Mobile"} className="flex-1 overflow-y-auto">
            <ul className="divide-y divide-line-dark">
              {links.map((link, i) => {
                const active = isActive(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-baseline justify-between gap-4 px-5 py-4 transition-colors",
                        active ? "bg-surface" : "hover:bg-surface",
                      )}
                    >
                      <span className="display text-3xl sm:text-4xl">{link.label}</span>
                      <span
                        className={cn("meta-label", active ? "text-emerald" : "text-muted-dark")}
                      >
                        /{String(i + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="border-t border-line-dark px-5 py-5">
            <div className="mb-5 flex items-center gap-3">
              <ThemeToggle tone="dark" className="flex" />
            </div>
            <p className="meta-label text-muted-dark">{isIndonesian ? "TANYA SOAL PROYEK BARU" : "NEW PROJECT ENQUIRY"}</p>
            <div className="mt-2 flex flex-col gap-2">
              <a
                href={`mailto:${site.email}`}
                className="inline-block text-sm text-paper underline decoration-paper/40 underline-offset-4 transition-colors hover:text-emerald hover:decoration-emerald"
              >
                {site.email}
              </a>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-paper underline decoration-paper/40 underline-offset-4 transition-colors hover:text-emerald hover:decoration-emerald"
              >
                WhatsApp · {site.phone}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
