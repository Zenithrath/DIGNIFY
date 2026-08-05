import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

function SystemMap({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 480"
      role="img"
      aria-label="Abstract system diagram — nodes, flows, and coordinates"
      className={className}
    >
      <g stroke="var(--color-line-dark)" strokeWidth={1} strokeOpacity={0.7} vectorEffect="non-scaling-stroke">
        {Array.from({ length: 6 }, (_, i) => 60 + i * 80).map((x) => (
          <line key={`v${x}`} x1={x} y1={0} x2={x} y2={480} />
        ))}
        {Array.from({ length: 5 }, (_, i) => 60 + i * 90).map((y) => (
          <line key={`h${y}`} x1={0} y1={y} x2={560} y2={y} />
        ))}
      </g>
      <path d="M0 300 L560 180 L560 480 L0 480 Z" fill="var(--color-paper)" opacity={0.04} />
      <g stroke="var(--color-text-soft)" strokeWidth={1.5} vectorEffect="non-scaling-stroke" fill="none">
        <rect x={40} y={40} width={190} height={110} />
        <rect x={330} y={40} width={190} height={110} />
        <rect x={185} y={250} width={190} height={110} />
      </g>
      <line x1={230} y1={95} x2={330} y2={95} stroke="var(--color-emerald)" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
      <line x1={280} y1={150} x2={280} y2={250} stroke="var(--color-text-soft)" strokeWidth={1} strokeDasharray="4 6" vectorEffect="non-scaling-stroke" />
      <line x1={230} y1={305} x2={330} y2={305} stroke="var(--color-text-soft)" strokeWidth={1} strokeDasharray="4 6" vectorEffect="non-scaling-stroke" />
      <rect x={235} y={92} width={6} height={6} fill="var(--color-emerald)" />
      <rect x={435} y={90} width={8} height={8} fill="var(--color-emerald)" />
      <circle cx={280} cy={305} r={4} fill="var(--color-text-soft)" />
      <text x={48} y={32} fill="var(--color-muted-dark)" fontSize={12} fontFamily="var(--font-mono)" letterSpacing="0.18em">
        NODE / INPUT
      </text>
      <text x={338} y={32} fill="var(--color-muted-dark)" fontSize={12} fontFamily="var(--font-mono)" letterSpacing="0.18em">
        NODE / PROCESS
      </text>
      <text x={193} y={242} fill="var(--color-muted-dark)" fontSize={12} fontFamily="var(--font-mono)" letterSpacing="0.18em">
        NODE / OUTPUT
      </text>
      <text x={252} y={92} fill="var(--color-emerald)" fontSize={12} fontFamily="var(--font-mono)" letterSpacing="0.18em">
        FLOW / 01
      </text>
      <text x={480} y={400} fill="var(--color-muted-dark)" fontSize={12} fontFamily="var(--font-mono)" letterSpacing="0.18em">
        SYS / GRID-08
      </text>
      <path d="M392 400 L392 440 M372 420 L412 420" stroke="var(--color-emerald)" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-ink text-paper"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 96%)" }}
    >
      <Container className="pt-10 sm:pt-14">
        <div className="hero-item flex items-center justify-between border-b border-line-dark pb-4" style={{ animationDelay: "0.1s" }}>
          <p className="meta-label text-muted-dark">/ 01 — DIGITAL STUDIO</p>
          <p className="meta-label hidden text-muted-dark sm:block">{site.location}</p>
        </div>

        <div className="grid grid-cols-12 gap-x-4">
          <div className="hero-item col-span-12 lg:col-span-8" style={{ animationDelay: "0.22s" }}>
            <h1
              id="hero-heading"
              className="display pt-10 text-[clamp(3.25rem,10.5vw,10.5rem)] sm:pt-14"
            >
              Digital Systems
              <br />
              Built with
              <span className="relative ml-2 inline-block bg-emerald px-3 text-ink sm:ml-4">
                Clarity.
              </span>
            </h1>
          </div>

          <div className="hero-item relative col-span-12 lg:col-span-4" style={{ animationDelay: "0.34s" }}>
            <div className="hidden lg:block">
              <SystemMap className="pointer-events-none absolute right-0 top-16 h-[430px] w-[520px] max-w-none" />
            </div>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-12 gap-x-4 pb-24 pt-12 sm:pb-32">
          <div className="hero-item col-span-12 md:col-span-6 lg:col-span-5" style={{ animationDelay: "0.46s" }}>
            <p className="max-w-md text-base leading-relaxed text-muted-dark sm:text-lg">
              {site.description}
            </p>
          </div>
          <div className="hero-item col-span-12 mt-10 md:col-span-6 md:mt-0 lg:col-span-5 lg:col-start-8" style={{ animationDelay: "0.58s" }}>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/contact" variant="emerald" size="lg" arrow>
                Start a Project
              </Button>
              <Button href="/portfolio" variant="outlineLight" size="lg" arrow>
                View Portfolio
              </Button>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-line-dark pt-6">
              {[
                ["SVC", "05"],
                ["FND", "BY DJ + IG"],
                ["MODE", "REMOTE"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="meta-label text-muted-dark">{k}</dt>
                  <dd className="meta-label mt-2 text-paper">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
