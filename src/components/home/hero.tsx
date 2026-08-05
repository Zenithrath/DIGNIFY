import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

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
      className="relative flex min-h-[31rem] flex-col overflow-hidden bg-ink text-paper sm:min-h-[calc(100svh-4rem)] lg:min-h-screen"
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

        <div className="hero-item absolute right-[4%] top-[12%] sm:right-[6%] sm:top-[14%]" style={{ animationDelay: "0.5s" }}>
          <div className="spin-slow size-16 rounded-full border-2 border-emerald/50 sm:size-24 lg:size-32 lg:border-[3px]" />
        </div>

        <div className="hero-item absolute right-[2%] bottom-[24%] sm:right-[13%]" style={{ animationDelay: "0.55s" }}>
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

      <Container className="relative z-10 flex min-w-0 flex-1 flex-col pt-5 sm:pt-10">
        <div className="flex flex-none flex-col items-center justify-start py-7 sm:flex-1 sm:justify-center sm:py-12">
          <div className="hero-item text-center" style={{ animationDelay: "0.12s" }}>
            <p className="meta-label mb-4 text-emerald sm:mb-6">CREATIVE AGENCY</p>
            <h1
              id="hero-heading"
              className="display max-w-full px-3 text-[clamp(2rem,9vw,5rem)] leading-[0.95] sm:px-0"
            >
              <span className="word-reveal" style={{ animationDelay: "0.18s" }}>Digital</span>{" "}
              <span className="word-reveal" style={{ animationDelay: "0.24s" }}>Studio</span>
              <br />
              <span className="word-reveal" style={{ animationDelay: "0.32s" }}>Built</span>{" "}
              <span className="word-reveal" style={{ animationDelay: "0.38s" }}>with</span>{" "}
              <span className="word-reveal word-reveal--break-mobile" style={{ animationDelay: "0.44s" }}>
                <span className="relative mt-2 inline-block bg-emerald px-3 text-ink sm:ml-4 sm:mt-0">Clarity</span>
              </span>
            </h1>
          </div>

          <p className="hero-item mt-5 max-w-[21rem] px-3 text-center text-sm leading-relaxed text-muted-dark sm:mt-10 sm:max-w-md sm:px-0 sm:text-base" style={{ animationDelay: "0.5s" }}>
            We design interfaces, build websites, and automate workflows with a working style that is modular, transparent, and deliberately free of hype.
          </p>
        </div>

        <div className="hero-item flex w-full min-w-0 flex-col items-stretch justify-center gap-3 pb-5 sm:flex-row sm:items-center sm:pb-8" style={{ animationDelay: "0.56s" }}>
          <Button href="/contact" variant="emerald" size="lg" className="w-full max-w-full sm:w-auto" arrow>
            Start a Project
          </Button>
          <Button href="/portfolio" variant="outlineLight" size="lg" className="w-full max-w-full sm:w-auto" arrow>
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
