import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { testimonialsState } from "@/content/testimonials";
import { seo } from "@/content/seo";

export const metadata: Metadata = {
  title: seo.testimonials.title,
  description: seo.testimonials.description,
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: seo.testimonials.title,
    description: seo.testimonials.description,
    url: "/testimonials",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Dignify testimonials" }],
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <section aria-labelledby="testimonials-heading" className="border-b border-line bg-paper py-24 sm:py-32">
        <Container>
          <Reveal>
            <p className="meta-label text-emerald-deep">/ TESTIMONIALS</p>
            <h1 id="testimonials-heading" className="display mt-6 max-w-5xl text-[clamp(2.75rem,7vw,7rem)]">
              What clients say, when they are ready to share it.
            </h1>
          </Reveal>
          <Reveal delay={0.08} className="mt-10 max-w-2xl">
            <p className="text-base leading-relaxed text-muted">
              This page exists so that when client feedback is real, it has a place. Until then,
              it states the truth plainly, including the fact that there is no published feedback
              yet.
            </p>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="empty-heading" className="bg-cream py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="grid grid-cols-12 border border-line bg-pure">
              <div className="col-span-12 p-8 sm:p-14 lg:col-span-8">
                <div className="flex items-center gap-3">
                  <span aria-hidden className="size-2 bg-emerald" />
                  <p className="meta-label text-muted">STATUS / NO PUBLIC TESTIMONIALS</p>
                </div>
                <h2 id="empty-heading" className="display mt-10 text-3xl leading-tight sm:text-5xl">
                  We will not fill this page with invented praise.
                </h2>
                <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                  {testimonialsState.note}
                </p>
                <div className="mt-10">
                  <Button href="/contact" variant="solid" size="lg" arrow>
                    Be the first to work with us
                  </Button>
                </div>
              </div>
              <div className="col-span-12 border-t border-line bg-ink p-8 text-paper sm:p-14 lg:col-span-4 lg:border-l lg:border-t-0">
                <p className="meta-label text-emerald">WHAT WE WILL SHOW</p>
                <ul className="mt-6 space-y-4">
                  {testimonialsState.whatWeWillShow.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-dark">
                      <span aria-hidden className="mt-[7px] size-1.5 shrink-0 bg-emerald" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="meta-label mt-12 text-muted-dark">POLICY / HONESTY FIRST</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-dark">
                  No fabricated quotes, no invented review scores, no star ratings that were never
                  given.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="how-to-heading" className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-x-4 gap-y-8">
            <Reveal className="col-span-12 lg:col-span-4">
              <div className="border border-line p-8 lg:sticky lg:top-24">
                <p className="meta-label text-emerald-deep">/ AFTER A PROJECT</p>
                <h2 id="how-to-heading" className="display mt-6 text-3xl">
                  Have you worked with us?
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  If we have built something together and you would like to say so, send us a note
                  and we will ask two questions: exactly what you want to say, and whether you are
                  comfortable being named.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="col-span-12 lg:col-span-7 lg:col-start-6">
              <ul className="border-t border-line">
                {[
                  ["01", "Honest quotes only", "Published verbatim, with your name and the project you worked on."],
                  ["02", "No editing for marketing", "We will ask before trimming or clarifying anything."],
                  ["03", "Withdrawal on request", "You can ask us to remove a testimonial at any time."],
                ].map(([index, title, detail]) => (
                  <li key={index} className="grid grid-cols-12 gap-x-4 border-b border-line py-7">
                    <span className="col-span-2 sm:col-span-1">
                      <span className="meta-label text-emerald-deep">/{index}</span>
                    </span>
                    <div className="col-span-10 sm:col-span-11">
                      <h3 className="display text-2xl">{title}</h3>
                      <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">{detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
