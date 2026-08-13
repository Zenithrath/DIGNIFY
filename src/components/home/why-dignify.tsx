import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { enHomeCopy } from "@/content/home-copy";
import type { WhyCopy } from "@/content/home-copy";

export function WhyDignify({ copy = enHomeCopy.why }: { copy?: WhyCopy }) {
  return (
    <section aria-labelledby="why-heading" className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeader index="03" label={copy.label} title={copy.title} id="why-heading" />

        <ul className="mt-10 divide-y divide-line sm:mt-12">
          {copy.items.map((item, i) => (
            <li key={item.index}>
              <Reveal delay={i * 0.05}>
                <div className="grid grid-cols-12 gap-x-4 gap-y-3 py-8 sm:py-9">
                  <span className="col-span-12 sm:col-span-1">
                    <span className="meta-label text-muted">/{item.index}</span>
                  </span>
                  <span className="col-span-12 sm:col-span-6">
                    <h3 className="display text-2xl sm:text-3xl lg:text-4xl">{item.title}</h3>
                  </span>
                  <span className="col-span-12 text-sm leading-relaxed text-muted sm:col-span-4 sm:col-start-8">
                    {item.detail}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}