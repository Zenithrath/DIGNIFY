import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/layout/brand";
import { about, team } from "@/content/team";
import { studioValues } from "@/content/values";
import cameoOne from "@/app/craiyon_212833_image.png";
import cameoTwo from "@/app/craiyon_212915_image.png";

const cameoImages = [cameoOne, cameoTwo] as const;

export const metadata: Metadata = {
  title: "About",
  description:
    "Dignify is a two-person digital studio founded by Dije and Ignas — design, development, and automation under one honest standard.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About · Dignify", url: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-heading" className="bg-ink py-24 text-paper sm:py-32">
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
              build websites, and automate workflows — with a working style that is modular,
              transparent, and deliberately un-hyped.
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

      <section aria-labelledby="mission-heading" className="border-y border-line bg-cream py-20 sm:py-28">
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

      <section aria-labelledby="name-heading" className="border-t border-line bg-ink py-20 text-paper sm:py-28">
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
              <p className="meta-label text-emerald-deep">/ TEAM — 02 PEOPLE</p>
              <h2 id="team-heading" className="display mt-6 text-4xl">
                The people who answer the emails.
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-12 gap-x-4 gap-y-8">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.08} className="col-span-12 md:col-span-6">
                <div className="grid grid-cols-12 border border-line bg-pure">
                  <div className="relative col-span-12 flex min-h-[22rem] items-end justify-center overflow-hidden border-b border-line bg-ink p-6 sm:col-span-4 sm:min-h-[20rem] sm:border-b-0 sm:border-r">
                    <Image
                      src={cameoImages[i]}
                      alt=""
                      aria-hidden="true"
                      sizes="(min-width: 640px) 25vw, 100vw"
                      className="absolute inset-x-0 bottom-0 h-full w-full object-contain object-bottom px-6 pt-4"
                    />
                    <span className="relative z-10 self-start font-mono text-[0.625rem] uppercase tracking-[0.14em] text-emerald">
                      Cameo / {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="col-span-12 p-8 sm:col-span-8">
                    <p className="meta-label text-emerald-deep">MEMBER / {String(i + 1).padStart(2, "0")}</p>
                    <h3 className="display mt-4 text-3xl">{member.name}</h3>
                    <p className="meta-label mt-3 text-emerald-deep">{member.role.toUpperCase()}</p>
                    <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                      {member.focus.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-muted">
                          <span aria-hidden className="mt-[7px] size-1.5 shrink-0 bg-emerald" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={member.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-text transition-colors hover:text-emerald-deep"
                    >
                      <span className="link-underline">Portfolio</span>
                      <span aria-hidden>↗</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <p className="max-w-2xl text-sm leading-relaxed text-muted">
              No fictional biographies here — just the roles we actually do. If you want to know
              more about a specific area of experience, ask us directly.
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
