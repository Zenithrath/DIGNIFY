import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { enHomeCopy } from "@/content/home-copy";
import type { HeroCopy } from "@/content/home-copy";

export function Hero({ copy = enHomeCopy.hero }: { copy?: HeroCopy }) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-ink text-paper"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Container className="relative z-10 flex min-w-0 flex-1 flex-col items-center justify-center gap-8 py-16 sm:gap-10 sm:py-24">
        <div className="flex w-full max-w-4xl flex-col items-center text-center">
          <h1
            id="hero-heading"
            className="hero-item display text-[clamp(2.25rem,8vw,5.5rem)] leading-[0.95]"
            style={{ animationDelay: "0.2s" }}
          >
            {copy.heading.line1}
            <br />
            {copy.heading.line2}{" "}
            <span className="relative mt-2 inline-block bg-emerald px-3 text-ink sm:ml-3 sm:mt-0">
              {copy.heading.highlight}
            </span>
          </h1>

          <p
            className="hero-item mt-6 max-w-xl px-3 text-sm leading-relaxed text-muted-dark sm:mt-8 sm:px-0 sm:text-base"
            style={{ animationDelay: "0.36s" }}
          >
            {copy.sub}
          </p>
        </div>

        <div
          className="hero-item flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center"
          style={{ animationDelay: "0.46s" }}
        >
          <Button href={copy.primaryCta.href} variant="emerald" size="lg" className="w-full sm:w-auto" arrow>
            {copy.primaryCta.label}
          </Button>
          <Button href={copy.secondaryCta.href} variant="outlineLight" size="lg" className="w-full sm:w-auto" arrow>
            {copy.secondaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}