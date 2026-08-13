import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { enHomeCopy } from "@/content/home-copy";
import type { ServicesCopy } from "@/content/home-copy";

export function Services({ copy = enHomeCopy.services }: { copy?: ServicesCopy }) {
  return (
    <section
      aria-labelledby="services-heading"
      id="services"
      className="border-t border-line-dark bg-surface py-24 text-paper sm:py-32"
    >
      <Container>
        <SectionHeader index="01" label={copy.label} title={copy.title} tone="dark" id="services-heading" />

        <ul className="mt-10 divide-y divide-line-dark border-b border-line-dark sm:mt-12">
          {copy.rows.map((row) => (
            <li key={row.index}>
              <Link href={row.href} className="group grid grid-cols-12 items-baseline gap-x-4 gap-y-3 py-7 sm:py-8">
                <span className="col-span-12 sm:col-span-1">
                  <span className="meta-label text-muted-dark transition-colors group-hover:text-emerald">
                    /{row.index}
                  </span>
                </span>
                <span className="col-span-12 sm:col-span-5">
                  <span className="display text-2xl transition-colors group-hover:text-emerald sm:text-3xl lg:text-4xl">
                    {row.title}
                  </span>
                </span>
                <span className="col-span-12 text-sm leading-relaxed text-muted-dark sm:col-span-5 sm:col-start-7">
                  {row.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 border-t border-line-dark pt-8">
          <Button href={copy.allServicesLink.href} variant="outlineLight" arrow>
            {copy.allServicesLink.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}