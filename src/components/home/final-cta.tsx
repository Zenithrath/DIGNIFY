import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/content/site";
import { enHomeCopy } from "@/content/home-copy";
import type { FinalCtaCopy } from "@/content/home-copy";

export function FinalCta({ copy = enHomeCopy.finalCta }: { copy?: FinalCtaCopy }) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="border-t border-line bg-cream py-28 text-ink-text sm:py-36"
    >
      <Container>
        <Reveal>
          <h2 id="cta-heading" className="display max-w-5xl text-[clamp(2.75rem,7.5vw,7.5rem)] leading-[0.95]">
            {copy.heading}
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{copy.sub}</p>
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
            <Button href={copy.primaryCta.href} variant="emerald" size="lg" arrow>
              {copy.primaryCta.label}
            </Button>
            <a
              href={`mailto:${site.email}`}
              className="font-mono text-xs uppercase tracking-[0.14em] text-ink-text underline decoration-ink-text/40 underline-offset-4 transition-colors hover:text-emerald-deep hover:decoration-emerald-deep"
            >
              {site.email}
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-[0.14em] text-ink-text underline decoration-ink-text/40 underline-offset-4 transition-colors hover:text-emerald-deep hover:decoration-emerald-deep"
            >
              WhatsApp
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}