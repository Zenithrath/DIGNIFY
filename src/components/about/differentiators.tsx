import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { differentiators, differentiatorsId } from "@/content/values";

const copy = {
  en: {
    label: "/ WHY DIGNIFY",
    title: "What a small studio can offer that big ones cannot.",
    box: "DIFFERENTIATORS",
    body: "The same three people answer your emails, design the work, and build the product. That keeps decisions close to the people doing the work.",
  },
  id: {
    label: "/ MENGAPA DIGNIFY",
    title: "Yang bisa ditawarkan studio kecil, tapi studio besar tidak.",
    box: "PEMBEDA",
    body: "Orang yang sama yang membalas emailmu juga yang mendesain dan membangun produknya. Keputusan tetap dekat dengan orang yang mengerjakan.",
  },
} as const;

export function Differentiators({ lang = "en" }: { lang?: "en" | "id" }) {
  const items = lang === "id" ? differentiatorsId : differentiators;
  const t = copy[lang];
  return (
    <section aria-labelledby="differentiators-heading" className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="border-b border-line pb-6">
          <p className="meta-label text-emerald-deep">{t.label}</p>
          <h2 id="differentiators-heading" className="display mt-6 max-w-4xl text-4xl sm:text-5xl">
            {t.title}
          </h2>
        </div>
      </Container>

      <Container className="mt-12">
        <div className="grid grid-cols-12 gap-x-4">
          <Reveal className="col-span-12 lg:col-span-4">
            <div className="border border-line bg-pure p-8 lg:sticky lg:top-24">
              <p className="meta-label text-muted">{t.box}</p>
              <p className="display mt-6 text-4xl sm:text-5xl">
                Fewer
                <br />
                people.
                <br />
                More
                <br />
                <span className="text-emerald-deep">intent.</span>
              </p>
              <p className="mt-8 text-sm leading-relaxed text-muted">
                {t.body}
              </p>
            </div>
          </Reveal>

          <div className="col-span-12 mt-10 lg:col-span-7 lg:col-start-6 lg:mt-0">
            <ul className="border-t border-line">
              {items.map((item, i) => (
                <li key={item.index} className="border-b border-line">
                  <Reveal delay={i * 0.05}>
                    <div className="group grid grid-cols-12 gap-x-4 py-8 transition-colors hover:bg-pure">
                      <span className="col-span-2 sm:col-span-1">
                        <span className="meta-label text-muted transition-colors group-hover:text-emerald-deep">
                          /{item.index}
                        </span>
                      </span>
                      <div className="col-span-10 sm:col-span-11">
                        <h3 className="display text-2xl sm:text-3xl">{item.title}</h3>
                        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">{item.detail}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
