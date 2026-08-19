import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { testimonialsStateId } from "@/content/testimonials";
import { seo } from "@/content/seo";

export const metadata: Metadata = {
  title: seo.testimonialsId.title,
  description: seo.testimonialsId.description,
  alternates: {
    canonical: "/id/testimonials",
    languages: { id: "/id/testimonials", "x-default": "/id/testimonials" },
  },
  openGraph: {
    title: seo.testimonialsId.title,
    description: seo.testimonialsId.description,
    url: "/id/testimonials",
    locale: "id_ID",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Testimoni Dignify" }],
  },
};

export default function IndonesianTestimonialsPage() {
  return (
    <div lang="id">
      <section
        aria-labelledby="id-testimonials-heading"
        className="border-b border-line bg-paper py-24 sm:py-32"
      >
        <Container>
          <Reveal>
            <p className="meta-label text-emerald-deep">/ TESTIMONI</p>
            <h1 id="id-testimonials-heading" className="display mt-6 max-w-5xl text-[clamp(2.75rem,7vw,7rem)]">
              Kata klien, saat mereka siap membagikannya.
            </h1>
          </Reveal>
          <Reveal delay={0.08} className="mt-10 max-w-2xl">
            <p className="text-base leading-relaxed text-muted">
              Halaman ini ada supaya feedback klien yang beneran punya tempat ditaruh. Sampai ada,
              halaman ini cukup menyatakan kebenaran dengan terus terang, termasuk bahwa belum ada
              testimoni yang dipublikasikan.
            </p>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="id-empty-heading" className="bg-cream py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="grid grid-cols-12 border border-line bg-pure">
              <div className="col-span-12 p-8 sm:p-14 lg:col-span-8">
                <div className="flex items-center gap-3">
                  <span aria-hidden className="size-2 bg-emerald" />
                  <p className="meta-label text-muted">STATUS / BELUM ADA TESTIMONI PUBLIK</p>
                </div>
                <h2 id="id-empty-heading" className="display mt-10 text-3xl leading-tight sm:text-5xl">
                  Kami tidak akan mengisi halaman ini dengan pujian karangan.
                </h2>
                <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                  {testimonialsStateId.note}
                </p>
                <div className="mt-10">
                  <Button href="/id/contact" variant="solid" size="lg" arrow>
                    Jadilah klien pertama kami
                  </Button>
                </div>
              </div>
              <div className="col-span-12 border-t border-line bg-ink p-8 text-paper sm:p-14 lg:col-span-4 lg:border-l lg:border-t-0">
                <p className="meta-label text-emerald">YANG AKAN KAMI TAMPILKAN</p>
                <ul className="mt-6 space-y-4">
                  {testimonialsStateId.whatWeWillShow.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-dark">
                      <span aria-hidden className="mt-[7px] size-1.5 shrink-0 bg-emerald" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="meta-label mt-12 text-muted-dark">KEBIJAKAN / JUJUR DULU</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-dark">
                  Tidak ada kutipan karangan, tidak ada nilai review karangan, tidak ada bintang yang
                  tidak pernah diberikan.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="id-howto-heading" className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-12 gap-x-4 gap-y-8">
            <Reveal className="col-span-12 lg:col-span-4">
              <div className="border border-line p-8 lg:sticky lg:top-24">
                <p className="meta-label text-emerald-deep">/ SETELAH PROYEK</p>
                <h2 id="id-howto-heading" className="display mt-6 text-3xl">
                  Pernah kerja bareng kami?
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Kalau kami pernah membangun sesuatu bareng dan kamu mau bilang begitu, kirim
                  catatan ke kami, nanti kami tanya dua hal: persisnya mau ngomong apa, dan apakah
                  kamu nyaman disebut namanya.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="col-span-12 lg:col-span-7 lg:col-start-6">
              <ul className="border-t border-line">
                {[
                  ["01", "Kutipan apa adanya", "Dipublikasikan seperti aslinya, dengan namamu dan proyek yang kamu kerjakan."],
                  ["02", "Tanpa edit demi marketing", "Kami minta izin dulu sebelum memangkas atau mengklarifikasi apa pun."],
                  ["03", "Bisa ditarik kapan saja", "Kamu bisa minta testimoni dihapus tanpa syarat."],
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
    </div>
  );
}