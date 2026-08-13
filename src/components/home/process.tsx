import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { enHomeCopy } from "@/content/home-copy";
import type { ProcessCopy } from "@/content/home-copy";

export function Process({ copy = enHomeCopy.process }: { copy?: ProcessCopy }) {
  return (
    <section
      aria-labelledby="process-heading"
      className="bg-surface py-24 text-paper sm:py-32"
      style={{ clipPath: "polygon(0 3%, 100% 0, 100% 100%, 0 100%)" }}
    >
      <Container>
        <SectionHeader index="04" label={copy.label} title={copy.title} tone="dark" id="process-heading" />

        <ol className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {copy.steps.map((step, i) => (
            <li
              key={step.index}
              className={cn(
                "border-t border-line-dark pt-6",
                i % 2 === 1 && "sm:border-l sm:pl-8",
                i > 0 && "lg:border-t-0 lg:border-l lg:pl-8",
              )}
            >
              <Reveal delay={i * 0.06}>
                <span className="meta-label text-emerald">/{step.index}</span>
                <h3 className="display mt-4 text-2xl sm:text-3xl">{step.name}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-dark">{step.detail}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}