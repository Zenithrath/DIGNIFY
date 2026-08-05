import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/content/site";

export function FinalCta() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-ink py-28 text-paper sm:py-36"
      style={{ clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)" }}
    >
      <Container>
        <div className="grid grid-cols-12 gap-x-4">
          <Reveal className="col-span-12 lg:col-span-9">
            <p className="meta-label text-emerald">/ 07 / NEXT STEP</p>
            <h2 id="cta-heading" className="display mt-8 text-[clamp(3rem,8.5vw,8.5rem)]">
              Let&apos;s build something
              <br />
              clear.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 mt-10 lg:col-span-3 lg:col-start-10 lg:mt-0">
            <div className="border border-line-dark p-8">
              <p className="text-sm leading-relaxed text-muted-dark">
                A focused conversation about your project, its scope, and its constraints. We will
                tell you clearly whether we are the right fit.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <Button href="/contact" variant="emerald" size="lg" arrow>
                  Start a Project
                </Button>
                <Button href={`mailto:${site.email}`} variant="outlineLight" size="lg">
                  {site.email}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
