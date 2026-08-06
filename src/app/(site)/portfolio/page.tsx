import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { projects } from "@/content/projects";
import { seo } from "@/content/seo";

export const metadata: Metadata = {
  title: seo.portfolio.title,
  description: seo.portfolio.description,
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: `${seo.portfolio.title} | Dignify`,
    description: seo.portfolio.description,
    url: "/portfolio",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Dignify portfolio" }],
  },
};

export default function PortfolioPage() {
  return (
    <>
      <section aria-labelledby="portfolio-heading" className="border-b border-line bg-paper py-24 sm:py-32">
        <Container>
          <Reveal>
            <p className="meta-label text-emerald-deep">/ PORTFOLIO / {String(projects.length).padStart(2, "0")} SYSTEMS</p>
            <h1 id="portfolio-heading" className="display mt-6 max-w-5xl text-[clamp(2.75rem,7vw,7rem)]">
              Work, indexed and labeled honestly.
            </h1>
          </Reveal>
          <Reveal delay={0.08} className="mt-10 max-w-2xl">
            <p className="text-base leading-relaxed text-muted">
              Every entry is labeled clearly as client work, internal work, or a concept
              exploration. Studio experiments are never presented as client results.
            </p>
          </Reveal>
        </Container>
      </section>

      <section aria-label="Portfolio index" className="bg-paper py-16 sm:py-20">
        <Container>
          <h2 className="sr-only">All projects</h2>
          <PortfolioGrid />
        </Container>
      </section>
    </>
  );
}
