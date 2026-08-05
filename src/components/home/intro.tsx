import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function Intro() {
  return (
    <section aria-labelledby="intro-heading" className="border-t border-line bg-cream py-14 sm:py-32">
      <Container>
        <div className="grid grid-cols-12 gap-x-4 gap-y-10">
          <Reveal className="col-span-12 lg:col-span-3">
            <p className="meta-label text-emerald-deep">/ 02 — POSITIONING</p>
          </Reveal>
          <Reveal delay={0.08} className="col-span-12 lg:col-span-9">
            <h2
              id="intro-heading"
              className="display max-w-5xl text-4xl sm:text-5xl lg:text-6xl"
            >
              A small studio with a strict standard: structure before style, clarity before
              cleverness.
            </h2>
          </Reveal>
          <Reveal className="col-span-12 lg:col-span-4 lg:col-start-4">
            <p className="text-base leading-relaxed text-muted">
              Dignify is a two-person digital studio founded by Dije and Ignas. We design
              interfaces, build websites, and automate workflows — but we are defined by how we
              work: modular systems, honest estimates, and communication that never goes dark.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="col-span-12 lg:col-span-4 lg:col-start-8">
            <p className="text-base leading-relaxed text-muted">
              Every project is treated as a product decision, not a decoration exercise. If a
              feature does not make the system clearer or the work lighter, it gets cut before
              it is built.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
