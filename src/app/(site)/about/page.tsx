import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/layout/brand";
import { about, team } from "@/content/team";
import { studioValues } from "@/content/values";
import dijeImg from "@/dije.png";
import ignasImg from "@/ignas.png";

const memberPhotos = [dijeImg, ignasImg] as const;

export const metadata: Metadata = {
  title: "About",
  description:
    "Dignify is a digital studio founded by two people, Dije and Ignas. We combine design, development, and automation in one small team.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About · Dignify", url: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section
        aria-labelledby="about-heading"
        className="bg-ink py-24 text-paper sm:py-32"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)" }}
      >
        <Container>
          <Reveal>
            <p className="meta-label text-emerald">/ ABOUT THE STUDIO</p>
            <h1 id="about-heading" className="display mt-6 max-w-5xl text-[clamp(2.75rem,7vw,7rem)]">
              Two people. One standard.
            </h1>
          </Reveal>
          <Reveal delay={0.08} className="mt-12 max-w-2xl">
            <p className="text-base leading-relaxed text-muted-dark sm:text-lg">
              Dignify is a small digital studio founded by Dije and Ignas. We design interfaces,
              build websites, and automate workflows with a working style that is modular,
              transparent, and deliberately free of hype.
            </p>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="origin-heading" className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-x-4 gap-y-10">
            <Reveal className="col-span-12 lg:col-span-3">
              <p className="meta-label text-emerald-deep">/ ORIGIN</p>
            </Reveal>
            <Reveal delay={0.06} className="col-span-12 lg:col-span-8 lg:col-start-5">
              <h2 id="origin-heading" className="display text-3xl sm:text-4xl">
                Why the studio exists.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {about.origin}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="mission-heading"
        className="bg-cream py-20 sm:py-28"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 94%, 0 100%)" }}
      >
        <Container>
          <Reveal>
            <div className="grid grid-cols-12 gap-x-4">
              <div className="col-span-12 lg:col-span-8">
                <p className="meta-label text-emerald-deep">/ MISSION</p>
                <h2 id="mission-heading" className="display mt-6 text-3xl leading-tight sm:text-5xl">
                  {about.mission}
                </h2>
              </div>
              <div className="col-span-12 mt-10 lg:col-span-3 lg:col-start-10 lg:mt-0">
                <div className="border border-line p-6">
                  <p className="meta-label text-muted">FOUNDED BY</p>
                  <p className="mt-3 text-2xl">{team.map((m) => m.name).join(" + ")}</p>
                  <p className="meta-label mt-4 text-muted">ESTABLISHED AS A STUDIO</p>
                  <p className="mt-1 text-sm text-ink-text">Working as an independent studio</p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="values-heading" className="bg-paper py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="border-b border-line pb-6">
              <p className="meta-label text-emerald-deep">/ VALUES</p>
              <h2 id="values-heading" className="display mt-6 text-4xl">
                The rules we work by.
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-12 gap-x-4 gap-y-0">
            {studioValues.map((value, i) => (
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

      <section
        aria-labelledby="name-heading"
        className="bg-ink py-20 text-paper sm:py-28"
        style={{ clipPath: "polygon(0 4%, 100% 0, 100% 100%, 0 100%)" }}
      >
        <Container>
          <div className="grid grid-cols-12 gap-x-4 gap-y-10">
            <Reveal className="col-span-12 lg:col-span-4">
              <BrandLogo tone="paper" className="h-24" />
            </Reveal>
            <Reveal delay={0.08} className="col-span-12 lg:col-span-8">
              <p className="meta-label text-emerald">/ THE NAME</p>
              <h2 id="name-heading" className="display mt-6 text-4xl sm:text-5xl">
                Why &ldquo;Dignify&rdquo;
              </h2>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-dark">
                {about.nameMeaning}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-labelledby="team-heading" className="bg-paper py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="border-b border-line pb-6">
              <p className="meta-label text-emerald-deep">/ TEAM / 02 PEOPLE</p>
              <h2 id="team-heading" className="display mt-6 text-4xl">
                The people who answer the emails.
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 flex flex-col items-center justify-center gap-12 md:flex-row md:items-start md:gap-14 lg:gap-20">
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
                      alt={`Portrait of ${member.name}`}
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
                      <a
                        href={member.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-text transition-colors hover:text-emerald-deep"
                      >
                        <span className="link-underline">Portfolio</span>
                        <span aria-hidden>↗</span>
                      </a>
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
              These are the roles we actually handle. If you want to know more about a specific
              area of experience, ask us directly.
            </p>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="about-cta" className="bg-paper pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 border border-line bg-ink p-8 text-paper sm:flex-row sm:items-center sm:p-12">
              <div>
                <p className="meta-label text-emerald">TWO PEOPLE, ONE STANDARD</p>
                <h2 id="about-cta" className="display mt-4 text-4xl sm:text-5xl">
                  Talk to us directly.
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/portfolio" variant="outlineLight" size="lg" arrow>
                  View Portfolio
                </Button>
                <Button href="/contact" variant="emerald" size="lg" arrow>
                  Start a Project
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
