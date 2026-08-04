import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { differentiators } from "@/content/values";

export function WhyDignify() {
  return (
    <section aria-labelledby="why-heading" className="bg-paper pb-24 sm:pb-32">
      <Container>
        <SectionHeader index="06" label="WHY DIGNIFY" title="What a small studio can offer that big ones cannot." id="why-heading" />
      </Container>

      <Container className="mt-14">
        <div className="grid grid-cols-12 gap-x-4">
          <Reveal className="col-span-12 lg:col-span-4">
            <div className="border border-line p-8 lg:sticky lg:top-24">
              <p className="meta-label text-muted">DIFFERENTIATORS</p>
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
                Every engagement is designed and built by the same two people who answer the
                emails. Nothing is lost between hand-offs, because there are no hand-offs.
              </p>
            </div>
          </Reveal>

          <div className="col-span-12 mt-10 lg:col-span-7 lg:col-start-6 lg:mt-0">
            <ul className="border-t border-line">
              {differentiators.map((item, i) => (
                <li key={item.index} className="border-b border-line">
                  <Reveal delay={i * 0.05}>
                    <div className="group grid grid-cols-12 gap-x-4 py-8 transition-colors hover:bg-pure">
                      <span className="col-span-2 sm:col-span-1">
                        <span className="meta-label text-muted transition-colors group-hover:text-gold">
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