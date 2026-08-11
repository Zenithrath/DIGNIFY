import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { processSteps, processStepsId } from "@/content/process";
import { formatYearIndex } from "@/lib/utils";

const copy = {
  en: {
    label: "HOW WE WORK",
    title: "A sequence we actually follow.",
    body: "Five phases, in order, with explicit outputs between them. The sequence exists so that surprises happen during discovery, not late in production.",
    seq: "SEQ / 05 STEPS",
  },
  id: {
    label: "CARA KAMI BEKERJA",
    title: "Urutan yang benar-benar kami jalankan.",
    body: "Lima tahap berurutan, dengan output yang jelas di antara tahap-tahapnya. Urutannya dibuat supaya kejutan terjadi di tahap discovery, bukan di akhir produksi.",
    seq: "SEQ / 05 TAHAP",
  },
} as const;

export function ProcessGrid({ lang = "en" }: { lang?: "en" | "id" }) {
  const steps = lang === "id" ? processStepsId : processSteps;
  const t = copy[lang];
  return (
    <section
      aria-labelledby="process-heading"
      className="bg-paper py-20 sm:py-28"
      style={{ clipPath: "polygon(0 4%, 100% 0, 100% 100%, 0 100%)" }}
    >
      <Container>
        <SectionHeader index="05" label={t.label} title={t.title} id="process-heading" />

        <div className="mt-14 grid grid-cols-12 gap-x-4 gap-y-0">
          <Reveal className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <p className="max-w-sm text-base leading-relaxed text-muted">
                {t.body}
              </p>
              <p className="meta-label mt-8 text-emerald-deep">{t.seq}</p>
            </div>
          </Reveal>

          <div className="col-span-12 mt-10 lg:col-span-7 lg:col-start-6 lg:mt-0">
            <ol className="border-t border-line">
              {steps.map((step, i) => (
                <li key={step.index} className="border-b border-line">
                  <Reveal delay={i * 0.05}>
                    <div className="group grid grid-cols-12 items-baseline gap-x-4 py-7 transition-colors hover:bg-pure">
                      <span className="col-span-2 sm:col-span-1">
                        <span className="meta-label text-muted transition-colors group-hover:text-emerald-deep">
                          /{step.index}
                        </span>
                      </span>
                      <span className="col-span-10 sm:col-span-6">
                        <span className="display text-2xl sm:text-3xl">{step.name}</span>
                      </span>
                      <span className="col-span-12 mt-3 text-sm leading-relaxed text-muted sm:col-span-5 sm:mt-0">
                        {step.detail}
                      </span>
                      <span className="meta-label col-span-2 hidden text-right text-muted sm:col-span-1 sm:block">
                        {formatYearIndex(i + 1)}
                      </span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
