import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { aboutId, team } from "@/content/team";
import { seo } from "@/content/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: seo.aboutId.title,
  description: seo.aboutId.description,
  alternates: {
    canonical: "/about",
    languages: { id: "/about", "x-default": "/about" },
  },
  openGraph: {
    title: seo.aboutId.title,
    description: seo.aboutId.description,
    url: "/about",
    locale: "id_ID",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Tentang Dignify" }],
  },
};

export default function IndonesianAboutPage() {
  return (
    <div lang="id">
      <section
        aria-labelledby="id-about-heading"
        className="bg-ink py-24 text-paper sm:py-32"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 94%, 0 100%)" }}
      >
        <Container>
          <Reveal>
            <p className="meta-label text-emerald">/ TENTANG STUDIO</p>
            <h1 id="id-about-heading" className="display mt-6 max-w-5xl text-[clamp(2.75rem,7vw,7rem)]">
              {aboutId.heroTitle[0]}
              <br />
              {aboutId.heroTitle[1]}
            </h1>
          </Reveal>
          <Reveal delay={0.08} className="mt-12 max-w-2xl">
            <p className="text-base leading-relaxed text-muted-dark sm:text-lg">{aboutId.intro}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <dl className="mt-16 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
              {aboutId.stats.map((stat, i) => (
                <div key={stat.label} className={cn("border-t border-line-dark pt-6", i > 0 && "lg:border-l lg:pl-8")}>
                  <dt className="meta-label text-muted-dark">{stat.label.toUpperCase()}</dt>
                  <dd className="display mt-2 text-4xl text-paper sm:text-5xl">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="id-principles-heading" className="border-t border-line bg-cream py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="border-b border-line pb-6">
              <p className="meta-label text-emerald-deep">/ PRINSIP KERJA</p>
              <h2 id="id-principles-heading" className="display mt-6 text-4xl sm:text-5xl">
                {aboutId.principles.title}
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-12 gap-x-4">
            {aboutId.principles.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07} className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div className="h-full border border-line bg-pure p-8">
                  <p className="meta-label text-emerald-deep">/ {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="display mt-5 text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="id-story-heading" className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-x-4 gap-y-10">
            <Reveal className="col-span-12 lg:col-span-4">
              <div className="border-b border-line pb-6 lg:border-b-0">
                <p className="meta-label text-emerald-deep">/ CERITA KAMI</p>
                <h2 id="id-story-heading" className="display mt-6 text-4xl">
                  {aboutId.story.title}
                </h2>
              </div>
            </Reveal>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              {aboutId.story.paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p className="text-base leading-relaxed text-muted sm:text-lg">{paragraph}</p>
                </Reveal>
              ))}
              <Reveal delay={0.16}>
                <div aria-labelledby="id-testimonial-note-heading" className="mt-10">
                  <p id="id-testimonial-note-heading" className="meta-label text-emerald-deep">
                    / SOAL TESTIMONI
                  </p>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                    Kami nggak nerbitin testimoni sebelum beneran ada. Sampai sekarang belum ada satu
                    pun. Kalau udah ada klien yang kasih izin, testimoni aslinya bakal kami tampilkan di
                    <Link href="/testimonials" className="link-underline mx-1.5 inline text-ink-text hover:text-emerald-deep">
                      halaman testimoni
                    </Link>
                    , apa adanya.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="id-team-heading" className="border-t border-line bg-cream py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="border-b border-line pb-6">
              <p className="meta-label text-emerald-deep">/ TIM / {team.length} ORANG</p>
              <h2 id="id-team-heading" className="display mt-6 text-4xl">
                {aboutId.team.title}
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 border-t border-line">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.06}>
                <article className="grid grid-cols-12 gap-x-4 gap-y-4 border-b border-line py-10 last:border-b-0">
                  <div className="col-span-12 sm:col-span-4">
                    <h3 className="display text-3xl sm:text-4xl">{member.name}</h3>
                    <p className="meta-label mt-3 text-emerald-deep">{member.roleId.toUpperCase()}</p>
                  </div>
                  <div className="col-span-12 sm:col-span-8 sm:col-start-5">
                    <p className="text-sm leading-relaxed text-muted sm:text-base">
                      {aboutId.team.lines[member.name]}
                    </p>
                    <p className="meta-label mt-5 text-muted">
                      {member.focus.join(" · ")}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-5">
                      {member.portfolioUrl ? (
                        <a
                          href={member.portfolioUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-text transition-colors hover:text-emerald-deep"
                        >
                          <span className="link-underline">Portfolio</span>
                          <span aria-hidden>↗</span>
                        </a>
                      ) : null}
                      {member.githubUrl ? (
                        <a
                          href={member.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-text transition-colors hover:text-emerald-deep"
                        >
                          <span className="link-underline">GitHub</span>
                          <span aria-hidden>↗</span>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="id-about-cta" className="bg-cream pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 border border-line bg-ink p-8 text-paper sm:flex-row sm:items-center sm:p-12">
              <div>
                <p className="meta-label text-emerald">/ LANGKAH BERIKUTNYA</p>
                <h2 id="id-about-cta" className="display mt-4 text-4xl sm:text-5xl">
                  {aboutId.cta.title}
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-dark">{aboutId.cta.sub}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact" variant="emerald" size="lg" arrow>
                  {aboutId.cta.primary}
                </Button>
                <Button href="/portfolio" variant="outlineLight" size="lg">
                  {aboutId.cta.secondary}
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
