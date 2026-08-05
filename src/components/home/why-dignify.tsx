import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { differentiators } from "@/content/values";
import { testimonialsState } from "@/content/testimonials";

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

      <Container className="mt-20">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-4 border border-line bg-cream">
            <div className="col-span-12 p-8 sm:p-12 lg:col-span-8">
              <div className="flex items-center gap-3">
                <span aria-hidden className="size-2 bg-emerald" />
                <p className="meta-label text-muted">STATUS — NO PUBLIC TESTIMONIALS YET</p>
              </div>
              <p className="mt-8 max-w-2xl text-2xl leading-snug sm:text-3xl">
                {testimonialsState.note}
              </p>
              <Link
                href="/testimonials"
                className="group mt-8 inline-flex w-fit items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-text"
              >
                <span className="link-underline">See the full policy</span>
                <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="col-span-12 border-t border-line p-8 sm:p-12 lg:col-span-4 lg:border-l lg:border-t-0">
              <p className="meta-label text-emerald">WHAT WE WILL SHOW</p>
              <ul className="mt-6 space-y-4">
                {testimonialsState.whatWeWillShow.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted">
                    <span aria-hidden className="mt-[7px] size-1.5 shrink-0 bg-emerald" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
