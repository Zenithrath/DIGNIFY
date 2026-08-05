import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HeroTileLoader } from "@/components/home/hero-tile-loader";

const marqueeItems = [
  "WEB DEVELOPMENT",
  "UI/UX DESIGN",
  "AI SOLUTIONS",
  "N8N AUTOMATION",
  "API INTEGRATION",
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen flex-col bg-ink text-paper overflow-hidden"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)" }}
    >
      <HeroTileLoader />

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

      <div className="pointer-events-none absolute -right-20 top-20 h-[400px] w-[400px] rounded-full bg-emerald/5 blur-[100px]" />
      <div className="pointer-events-none absolute -left-20 bottom-40 h-[300px] w-[300px] rounded-full bg-emerald/5 blur-[80px]" />

      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="hero-item absolute left-[4%] top-[18%] hidden lg:block" style={{ animationDelay: "0.45s" }}>
          <div className="size-52 rounded-full border-[3px] border-line-dark/70" />
        </div>

        <div className="hero-item absolute right-[6%] top-[14%] hidden lg:block" style={{ animationDelay: "0.5s" }}>
          <div className="spin-slow size-32 rounded-full border-[3px] border-emerald/50" />
        </div>

        <div className="hero-item absolute right-[13%] bottom-[24%] hidden lg:block" style={{ animationDelay: "0.55s" }}>
          <div className="size-20 rounded-full border-[3px] border-line-dark/60" />
        </div>

        <div className="hero-item absolute left-[8%] bottom-[26%] hidden lg:block" style={{ animationDelay: "0.6s" }}>
          <div className="size-28 rounded-full border-[3px] border-line-dark/60" />
        </div>

        <div className="hero-item absolute right-[30%] top-[7%] hidden lg:block" style={{ animationDelay: "0.65s" }}>
          <svg viewBox="0 0 24 24" className="block h-8 w-8 text-line-dark/70" fill="none" stroke="currentColor" strokeWidth={3}>
            <path d="M4 4 L20 20 M20 4 L4 20" />
          </svg>
        </div>

        <div className="hero-item absolute left-[2%] top-[55%] hidden lg:block" style={{ animationDelay: "0.7s" }}>
          <svg viewBox="0 0 24 24" className="block h-6 w-6 text-emerald/60" fill="none" stroke="currentColor" strokeWidth={3}>
            <path d="M4 4 L20 20 M20 4 L4 20" />
          </svg>
        </div>

        <div className="hero-item absolute left-[46%] top-[16%] hidden lg:block" style={{ animationDelay: "0.75s" }}>
          <svg viewBox="0 0 24 24" className="block h-5 w-5 text-line-dark/60" fill="none" stroke="currentColor" strokeWidth={3}>
            <path d="M4 4 L20 20 M20 4 L4 20" />
          </svg>
        </div>

        <div className="hero-item absolute right-[38%] bottom-[16%] hidden lg:block" style={{ animationDelay: "0.8s" }}>
          <svg viewBox="0 0 24 24" className="block h-6 w-6 text-emerald/50" fill="none" stroke="currentColor" strokeWidth={3}>
            <path d="M4 4 L20 20 M20 4 L4 20" />
          </svg>
        </div>

        <div className="hero-item absolute left-[45%] bottom-[14%] hidden lg:block" style={{ animationDelay: "0.85s" }}>
          <div className="size-3 rounded-full border-2 border-emerald/70" />
        </div>
      </div>

      <Container className="relative z-10 flex flex-1 flex-col pt-8 sm:pt-10">
        <div className="flex flex-1 flex-col items-center justify-center py-8 sm:py-12">
          <div className="hero-item text-center" style={{ animationDelay: "0.12s" }}>
            <p className="meta-label mb-4 text-emerald sm:mb-6">CREATIVE AGENCY</p>
            <h1
              id="hero-heading"
              className="display text-[clamp(2.25rem,6vw,5rem)] leading-[0.95]"
            >
              <span className="word-reveal" style={{ animationDelay: "0.18s" }}>Digital</span>{" "}
              <span className="word-reveal" style={{ animationDelay: "0.24s" }}>Studio</span>
              <br />
              <span className="word-reveal" style={{ animationDelay: "0.32s" }}>Built</span>{" "}
              <span className="word-reveal" style={{ animationDelay: "0.38s" }}>with</span>{" "}
              <span className="word-reveal" style={{ animationDelay: "0.44s" }}>
                <span className="relative ml-2 inline-block bg-emerald px-3 text-ink sm:ml-4">Clarity</span>
              </span>
            </h1>
          </div>

          <p className="hero-item mt-8 max-w-md text-center text-sm leading-relaxed text-muted-dark sm:mt-10 sm:text-base" style={{ animationDelay: "0.5s" }}>
            We design interfaces, build websites, and automate workflows — with a working style that is modular, transparent, and deliberately un-hyped.
          </p>
        </div>

        <div className="hero-item flex flex-wrap items-center justify-center gap-3 pb-6 sm:pb-8" style={{ animationDelay: "0.56s" }}>
          <Button href="/contact" variant="emerald" size="lg" arrow>
            Start a Project
          </Button>
          <Button href="/portfolio" variant="outlineLight" size="lg" arrow>
            View Portfolio
          </Button>
        </div>
      </Container>

      <div className="hero-item border-t border-line-dark bg-surface py-3 overflow-hidden" style={{ animationDelay: "0.62s" }}>
        <div className="marquee-track flex items-center gap-6 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-6">
              <span className="display text-sm tracking-wider text-muted-dark">{item}</span>
              <span className="text-emerald" aria-hidden>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
