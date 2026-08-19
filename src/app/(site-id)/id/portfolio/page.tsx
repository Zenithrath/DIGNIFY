import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { projects as staticProjects } from "@/content/projects";
import { fetchProjectsFromDb } from "@/lib/cms-store";
import { seo } from "@/content/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: seo.portfolioId.title,
  description: seo.portfolioId.description,
  alternates: {
    canonical: "/id/portfolio",
    languages: { id: "/id/portfolio", "x-default": "/id/portfolio" },
  },
  openGraph: {
    title: `${seo.portfolioId.title} | Dignify`,
    description: seo.portfolioId.description,
    url: "/id/portfolio",
    locale: "id_ID",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Portfolio Dignify" }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.portfolioId.title,
    description: seo.portfolioId.description,
    images: ["/opengraph-image"],
  },
};

export default async function IndonesianPortfolioPage() {
  const allProjects = await fetchProjectsFromDb().catch(() => staticProjects);
  return (
    <div lang="id">
      <section aria-labelledby="id-portfolio-heading" className="border-b border-line bg-paper py-24 sm:py-32">
        <Container>
          <Reveal>
            <p className="meta-label text-emerald-deep">
              / PORTFOLIO / {String(allProjects.length).padStart(2, "0")} SISTEM
            </p>
            <h1 id="id-portfolio-heading" className="display mt-6 max-w-5xl text-[clamp(2.75rem,7vw,7rem)]">
              Karya yang pernah kami kerjakan.
            </h1>
          </Reveal>
          <Reveal delay={0.08} className="mt-10 max-w-2xl">
            <p className="text-base leading-relaxed text-muted">
              Tiap proyek ada tandanya: kerja klien, kerja internal, atau konsep. Percobaan studio
              nggak pernah ditampilin seolah hasil kerja klien. Filter di bawah biar kamu nggak
              nyasar di daftar yang panjang.
            </p>
          </Reveal>
        </Container>
      </section>

      <PortfolioGrid lang="id" initialProjects={allProjects} />
    </div>
  );
}