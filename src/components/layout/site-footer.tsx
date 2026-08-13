import Link from "next/link";
import { BrandLogo } from "./brand";
import { Container } from "@/components/ui/container";
import { site, navLinks, navLinksId } from "@/content/site";
import { services } from "@/content/services";
import { LanguageSwitcher } from "./language-switcher";
import type { Locale } from "@/lib/locale";

const footerServicesId = [
  { href: "/id/jasa-pembuatan-website", label: "Jasa Pembuatan Website" },
  { href: "/id/services/ui-ux-design", label: "UI/UX Design" },
  { href: "/id/services/ai-solutions", label: "Solusi AI" },
  { href: "/id/services/n8n-automation", label: "Otomasi n8n" },
  { href: "/id/services/api-integration", label: "Integrasi API" },
] as const;

export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const year = new Date().getFullYear();
  const isIndonesian = locale === "id";
  const description = isIndonesian ? site.descriptionId : site.description;
  const nav = isIndonesian ? navLinksId : navLinks;
  const servicesTitle = isIndonesian ? "LAYANAN" : "SERVICES";
  const contactTitle = isIndonesian ? "KONTAK" : "CONTACT";

  return (
    <footer className="border-t border-line-dark bg-ink text-paper">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-12 gap-x-4 gap-y-12">
          <div className="col-span-12 lg:col-span-5">
            <BrandLogo tone="paper" />
            <p className="meta-label mt-3 text-muted-dark">Creative Digital Studio</p>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-dark">{description}</p>
          </div>

          <nav aria-label="Footer" className="col-span-6 sm:col-span-4 lg:col-span-2">
            <p className="meta-label text-muted-dark">MENU</p>
            <ul className="mt-4 space-y-1">
              {nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-1.5 text-sm text-paper transition-colors hover:text-emerald"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services" className="col-span-6 sm:col-span-4 lg:col-span-3">
            <p className="meta-label text-muted-dark">{servicesTitle}</p>
            <ul className="mt-4 space-y-1">
              {isIndonesian
                ? footerServicesId.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-block py-1.5 text-sm text-paper transition-colors hover:text-emerald"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))
                : services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={
                          service.slug === "website-development"
                            ? "/web-development"
                            : `/services/${service.slug}`
                        }
                        className="inline-block py-1.5 text-sm text-paper transition-colors hover:text-emerald"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
            </ul>
          </nav>

          <div className="col-span-12 sm:col-span-4 lg:col-span-2">
            <p className="meta-label text-muted-dark">{contactTitle}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-paper underline decoration-paper/40 underline-offset-4 transition-colors hover:text-emerald hover:decoration-emerald"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper underline decoration-paper/40 underline-offset-4 transition-colors hover:text-emerald hover:decoration-emerald"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line-dark pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="meta-label text-muted-dark">
            © {year} {site.wordmark}. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-4">
            <LanguageSwitcher tone="dark" />
            <p className="meta-label text-muted-dark">DESIGNED & BUILT BY {site.wordmark}</p>
            <a
              href="#top"
              className="inline-flex items-center gap-2 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-paper transition-colors hover:text-emerald"
            >
              Top
              <span aria-hidden className="inline-block text-emerald">↑</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}