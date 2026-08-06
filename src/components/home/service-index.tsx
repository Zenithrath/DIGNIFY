"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";

export function ServiceIndex() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section aria-labelledby="services-heading" id="services" className="bg-paper pt-24 pb-24 sm:pt-32 sm:pb-32">
      <Container>
        <SectionHeader
          index="02"
          label="SERVICES"
          title="What we do, and what we deliberately do not."
          id="services-heading"
        />

        <ul className="divide-y divide-line border-b border-line">
          {services.map((service, i) => {
            const expanded = open === i;
            return (
              <li key={service.slug}>
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`service-panel-${service.slug}`}
                  onClick={() => setOpen(expanded ? null : i)}
                  className={cn(
                    "group grid w-full grid-cols-12 items-center gap-x-4 py-6 text-left transition-colors duration-300 sm:py-7",
                    expanded ? "bg-pure" : "hover:bg-pure",
                  )}
                >
                  <span className="col-span-2 sm:col-span-1">
                    <span className="meta-label text-muted group-hover:text-emerald-deep">
                      /{service.index}
                    </span>
                  </span>
                  <span className="col-span-9 flex flex-col gap-2 sm:col-span-7">
                    <span className="display text-2xl sm:text-3xl lg:text-4xl">{service.title}</span>
                    <span className="text-sm text-muted">{service.tagline}</span>
                  </span>
                  <span className="col-span-12 mt-4 hidden gap-2 sm:col-span-3 sm:mt-0 sm:flex sm:justify-end">
                    {service.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="meta-label border border-line px-2 py-1 text-muted">
                        {tag}
                      </span>
                    ))}
                  </span>
                  <span className="col-span-1 flex items-center justify-end sm:col-span-1">
                    <Plus
                      aria-hidden
                      className={cn(
                        "size-4 transition-transform duration-300",
                        expanded ? "rotate-45 text-emerald-deep" : "text-muted",
                      )}
                    />
                  </span>
                </button>

                <div
                  id={`service-panel-${service.slug}`}
                  aria-hidden={!expanded}
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="grid grid-cols-12 gap-x-4 border-t border-line bg-pure py-8 sm:py-10">
                      <div className="col-span-12 md:col-span-6 lg:col-span-5">
                        <p className="text-base leading-relaxed text-muted">{service.description}</p>
                      </div>
                      <div className="col-span-12 mt-8 md:col-span-5 md:col-start-8 md:mt-0">
                        <p className="meta-label mb-4 text-muted">DELIVERABLES</p>
                        <ul className="space-y-3">
                          {service.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm text-ink-text">
                              <span aria-hidden className="mt-[7px] size-1.5 shrink-0 bg-emerald" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-8 flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="meta-label border border-line px-2 py-1 text-muted"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex items-center justify-between">
          <p className="meta-label hidden text-muted sm:block">FRONT END DEVELOPMENT IS PART OF EVERY BUILD.</p>
          <Button href="/services" variant="outline" arrow>
            All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
