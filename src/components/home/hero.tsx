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

      <div className="pointer-events-none absolute -right-20 top-20 h-[260px] w-[260px] rounded-full bg-emerald/5 blur-[70px] sm:h-[340px] sm:w-[340px] sm:blur-[90px] lg:h-[400px] lg:w-[400px] lg:blur-[100px]" />
      <div className="pointer-events-none absolute -left-20 bottom-40 h-[220px] w-[220px] rounded-full bg-emerald/5 blur-[60px] sm:h-[280px] sm:w-[280px] sm:blur-[80px] lg:h-[300px] lg:w-[300px]" />

      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="hero-item absolute left-[-12%] top-[18%] sm:left-[4%] sm:top-[18%]" style={{ animationDelay: "0.45s" }}>
          <div className="size-28 rounded-full border-2 border-line-dark/70 sm:size-40 lg:size-52 lg:border-[3px]" />
        </div>

        <div className="hero-item absolute right-[4%] bottom-[24%] sm:right-[13%]" style={{ animationDelay: "0.5s" }}>
          <div className="size-12 rounded-full border-2 border-line-dark/60 sm:size-16 lg:size-20 lg:border-[3px]" />
        </div>

        <div className="hero-item absolute left-[3%] bottom-[26%] sm:left-[8%]" style={{ animationDelay: "0.6s" }}>
          <div className="size-16 rounded-full border-2 border-line-dark/60 sm:size-24 lg:size-28 lg:border-[3px]" />
        </div>

        <div className="hero-item absolute right-[18%] top-[7%] sm:right-[30%]" style={{ animationDelay: "0.65s" }}>
          <svg viewBox="0 0 24 24" className="block h-5 w-5 text-line-dark/70 sm:h-6 sm:w-6 lg:h-8 lg:w-8" fill="none" stroke="currentColor" strokeWidth={3}>
            <path d="M4 4 L20 20 M20 4 L4 20" />
          </svg>
        </div>

        <div className="hero-item absolute left-[7%] top-[55%] sm:left-[2%]" style={{ animationDelay: "0.7s" }}>
          <svg viewBox="0 0 24 24" className="block h-5 w-5 text-emerald/60 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth={3}>
            <path d="M4 4 L20 20 M20 4 L4 20" />
          </svg>
        </div>

        <div className="hero-item absolute left-[46%] top-[16%]" style={{ animationDelay: "0.75s" }}>
          <svg viewBox="0 0 24 24" className="block h-4 w-4 text-line-dark/60 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth={3}>
            <path d="M4 4 L20 20 M20 4 L4 20" />
          </svg>
        </div>

        <div className="hero-item absolute right-[22%] bottom-[16%] sm:right-[38%]" style={{ animationDelay: "0.8s" }}>
          <svg viewBox="0 0 24 24" className="block h-5 w-5 text-emerald/50 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth={3}>
            <path d="M4 4 L20 20 M20 4 L4 20" />
          </svg>
        </div>

        <div className="hero-item absolute left-[45%] bottom-[14%]" style={{ animationDelay: "0.85s" }}>
          <div className="size-2 rounded-full border border-emerald/70 sm:size-3 sm:border-2" />
        </div>
      </div>

      <Container className="relative z-10 flex min-w-0 flex-1 flex-col items-center justify-center gap-6 py-10 sm:py-16">
        <div className="flex w-full max-w-3xl flex-col items-center text-center">
          <div className="hero-item text-center" style={{ animationDelay: "0.12s" }}>
            <p className="meta-label mb-4 text-emerald sm:mb-6">{copy.label}</p>
            <h1
              id="hero-heading"
              className="display max-w-full px-3 text-[clamp(2rem,9vw,5rem)] leading-[0.95] sm:px-0"
            >
              <span className="word-reveal" style={{ animationDelay: "0.18s" }}>{copy.heading.line1[0]}</span>{" "}
              <span className="word-reveal" style={{ animationDelay: "0.24s" }}>{copy.heading.line1[1]}</span>
              <br />
              <span className="word-reveal" style={{ animationDelay: "0.32s" }}>{copy.heading.line2[0]}</span>{" "}
              <span className="word-reveal" style={{ animationDelay: "0.38s" }}>{copy.heading.line2[1]}</span>{" "}
              <span className="word-reveal word-reveal--break-mobile" style={{ animationDelay: "0.44s" }}>
                <span className="relative mt-2 inline-block bg-emerald px-3 text-ink sm:ml-4 sm:mt-0">{copy.heading.highlight}</span>
              </span>
            </h1>
          </div>

          <p className="hero-item mt-5 max-w-[21rem] px-3 text-center text-sm leading-relaxed text-muted-dark sm:mt-10 sm:max-w-md sm:px-0 sm:text-base" style={{ animationDelay: "0.5s" }}>
            {copy.sub}
          </p>
        </div>

        <div className="hero-item flex w-full max-w-3xl min-w-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center" style={{ animationDelay: "0.56s" }}>
          <Button href={copy.primaryCta.href} variant="emerald" size="lg" className="w-full max-w-full sm:w-auto" arrow>
            {copy.primaryCta.label}
          </Button>
          <Button href={copy.secondaryCta.href} variant="outlineLight" size="lg" className="w-full max-w-full sm:w-auto" arrow>
            {copy.secondaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
