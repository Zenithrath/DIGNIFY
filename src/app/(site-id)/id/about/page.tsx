import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/layout/brand";
import { ProcessGrid } from "@/components/about/process-grid";
import { Differentiators } from "@/components/about/differentiators";
import { aboutId, team } from "@/content/team";
import { studioValuesId } from "@/content/values";
import { seo } from "@/content/seo";
import dijeImg from "@/dije.png";
import ignasImg from "@/ignas.png";
import danielImg from "@/daniel.png";

const memberPhotos = [dijeImg, ignasImg, danielImg] as const;

export const metadata: Metadata = {
  title: seo.aboutId.title,
  description: seo.aboutId.description,
  alternates: {
    canonical: "/id/about",
    languages: { en: "/about", id: "/id/about", "x-default": "/about" },
  },
  openGraph: {
    title: seo.aboutId.title,
    description: seo.aboutId.description,
    url: "/id/about",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Tentang Dignify" }],
  },
};

export default function IndonesianAboutPage() {
  return (
    <div lang="id">
      <section
        aria-labelledby="id-about-heading"
        className="bg-ink py-24 text-paper sm:py-32"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)" }}
      >
        <Container>
          <Reveal>
            <p className="meta-label text-emerald">/ TENTANG STUDIO</p>
            <h1 id="id-about-heading" className="display mt-6 max-w-5xl text-[clamp(2.75rem,7vw,7rem)]">
              Three people. One standard.
            </h1>
          </Reveal>
          <Reveal delay={0.08} className="mt-12 max-w-2xl">
            <p className="text-base leading-relaxed text-muted-dark sm:text-lg">
              Dignify adalah studio digital kecil yang dibangun Dije, Ignas, dan Daniel. Kami mendesain
              antarmuka, membangun website, dan mengotomasi alur kerja dengan gaya kerja yang
              modular, transparan, dan sengaja jauh dari gimmick.
            </p>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="id-positioning-heading" className="border-b border-line bg-cream py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-x-4 gap-y-10">
            <Reveal className="col-span-12 lg:col-span-3">
              <p className="meta-label text-emerald-deep">/ POSISI</p>
            </Reveal>
            <Reveal delay={0.06} className="col-span-12 lg:col-span-9">
              <h2 id="id-positioning-heading" className="display max-w-5xl text-3xl leading-tight sm:text-5xl">
                A small studio with a strict standard: structure before style, clarity before cleverness.
              </h2>
            </Reveal>
            <Reveal className="col-span-12 lg:col-span-4 lg:col-start-4">
              <p className="text-base leading-relaxed text-muted">
                Dignify adalah studio digital yang dibangun oleh Dije, Ignas, dan Daniel. Dije pegang
                front end, otomasi, dan media sosial. Daniel pegang back end dan database. Ignas
                pegang SEO dan perencanaan. Bareng-bareng kami membangun sistem yang modular dan
                komunikasi yang jelas selama proses kerja.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="col-span-12 lg:col-span-4 lg:col-start-8">
              <p className="text-base leading-relaxed text-muted">
                Setiap proyek diperlakukan sebagai keputusan produk, bukan ajang dekorasi. Kalau
                sebuah fitur tidak membuat sistemnya lebih jelas atau kerjanya lebih ringan, fitur
                itu dipangkas sebelum dibangun.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-labelledby="id-origin-heading" className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-x-4 gap-y-10">
            <Reveal className="col-span-12 lg:col-span-3">
              <p className="meta-label text-emerald-deep">/ ASAL-USUL</p>
            </Reveal>
            <Reveal delay={0.06} className="col-span-12 lg:col-span-8 lg:col-start-5">
              <h2 id="id-origin-heading" className="display text-3xl sm:text-4xl">
                Kenapa studio ini ada.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {aboutId.origin}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="id-mission-heading"
        className="bg-cream py-20 sm:py-28"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 94%, 0 100%)" }}
      >
        <Container>
          <Reveal>
            <div className="grid grid-cols-12 gap-x-4">
              <div className="col-span-12 lg:col-span-8">
                <p className="meta-label text-emerald-deep">/ MISI</p>
                <h2 id="id-mission-heading" className="display mt-6 text-3xl leading-tight sm:text-5xl">
                  To build digital systems that respect the people who use them and the people who
                  maintain them.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
                  {aboutId.mission}
                </p>
              </div>
              <div className="col-span-12 mt-10 lg:col-span-3 lg:col-start-10 lg:mt-0">
                <div className="border border-line p-6">
                  <p className="meta-label text-muted">DIGAGAS OLEH</p>
                  <p className="mt-3 text-2xl">
                    {team.filter((m) => m.founder).map((m) => m.name).join(" + ")}
                  </p>
                  <p className="meta-label mt-4 text-muted">BERDIRI SEBAGAI STUDIO</p>
                  <p className="mt-1 text-sm text-ink-text">Bekerja sebagai studio independen</p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <ProcessGrid lang="id" />

      <section aria-labelledby="id-values-heading" className="bg-paper py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="border-b border-line pb-6">
              <p className="meta-label text-emerald-deep">/ NILAI</p>
              <h2 id="id-values-heading" className="display mt-6 text-4xl">
                Aturan yang kami pegang.
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-12 gap-x-4 gap-y-0">
            {studioValuesId.map((value, i) => (
              <Reveal key={value.index} delay={i * 0.06} className="col-span-12 sm:col-span-6 lg:col-span-3">
                <div className="border border-line p-8 h-full">
                  <div className="flex items-baseline justify-between">
                    <span className="meta-label text-muted">/ {value.index}</span>
                    <span aria-hidden className="size-2 bg-emerald" />
                  </div>
                  <h3 className="display mt-8 text-2xl">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{value.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Differentiators lang="id" />

      <section
        aria-labelledby="id-name-heading"
        className="bg-ink py-20 text-paper sm:py-28"
        style={{ clipPath: "polygon(0 4%, 100% 0, 100% 100%, 0 100%)" }}
      >
        <Container>
          <div className="grid grid-cols-12 gap-x-4 gap-y-10">
            <Reveal className="col-span-12 lg:col-span-4">
              <BrandLogo tone="paper" className="h-24" />
            </Reveal>
            <Reveal delay={0.08} className="col-span-12 lg:col-span-8">
              <p className="meta-label text-emerald">/ TENTANG NAMA</p>
              <h2 id="id-name-heading" className="display mt-6 text-4xl sm:text-5xl">
                Kenapa &ldquo;Dignify&rdquo;
              </h2>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-dark">
                {aboutId.nameMeaning}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-labelledby="id-team-heading" className="bg-paper py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="border-b border-line pb-6">
              <p className="meta-label text-emerald-deep">/ TIM / 03 ORANG</p>
              <h2 id="id-team-heading" className="display mt-6 text-4xl">
                Orang-orang yang membalas email.
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 flex flex-col items-center justify-center gap-16 md:flex-row md:items-start md:gap-24 lg:gap-32">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1} className="w-full max-w-[300px]">
                <div className="relative">
                  <div className="relative aspect-[3/4] w-full max-w-[300px] overflow-hidden bg-ink shadow-[0_24px_60px_-24px_rgba(11,11,11,0.45)]">
                    <div className="absolute inset-5 border border-line-dark/40 z-10 pointer-events-none" />
                    <div className="absolute top-5 left-5 h-3 w-3 border-t-2 border-l-2 border-emerald z-10" />
                    <div className="absolute bottom-5 right-5 h-3 w-3 border-b-2 border-r-2 border-emerald z-10" />
                    <div className="absolute top-5 right-5 h-10 w-px bg-line-dark/40 z-10" />
                    <div className="absolute bottom-5 left-5 h-10 w-px bg-line-dark/40 z-10" />
                    <Image
                      src={memberPhotos[i]}
                      alt={`Potret ${member.name}`}
                      fill
                      sizes="(min-width: 768px) 30vw, 60vw"
                      className="object-cover object-top scale-[1.02]"
                    />
                    <span className="absolute bottom-5 left-5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-emerald z-10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="display text-3xl">{member.name}</h3>
                    <p className="meta-label mt-2 text-emerald-deep">{member.role.toUpperCase()}</p>
                    <ul className="mt-5 space-y-2">
                      {member.focus.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-muted">
                          <span aria-hidden className="mt-[7px] size-1.5 shrink-0 bg-emerald" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap items-center gap-5">
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
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14">
            <p className="max-w-2xl text-sm leading-relaxed text-muted">
              Ini peran yang benar-benar kami pegang. Kalau mau tahu lebih dalam soal salah satu
              bidangnya, tanya langsung saja.
            </p>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="id-about-cta" className="bg-paper pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 border border-line bg-ink p-8 text-paper sm:flex-row sm:items-center sm:p-12">
              <div>
                <p className="meta-label text-emerald">THREE PEOPLE, ONE STANDARD</p>
                <h2 id="id-about-cta" className="display mt-4 text-4xl sm:text-5xl">
                  Ngobrol langsung dengan kami.
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/id/portfolio" variant="outlineLight" size="lg" arrow>
                  Lihat Portfolio
                </Button>
                <Button href="/id/contact" variant="emerald" size="lg" arrow>
                  Mulai Proyek
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}