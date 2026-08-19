import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import type { FaqCopy } from "@/content/home-copy";

export function Faq({ copy }: { copy: FaqCopy }) {
  return (
    <section aria-labelledby="faq-heading" className="border-t border-line bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeader index={copy.index} label={copy.label} title={copy.title} id="faq-heading" />
        <div className="mt-12 border border-line bg-pure sm:mt-16">
          {copy.items.map((item) => (
            <details key={item.question} className="group border-b border-line last:border-b-0">
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 px-6 py-6 sm:px-10">
                <span className="display text-xl sm:text-2xl">{item.question}</span>
                <span
                  aria-hidden
                  className="meta-label shrink-0 text-emerald-deep transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl px-6 pb-8 text-sm leading-relaxed text-muted sm:px-10 sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}