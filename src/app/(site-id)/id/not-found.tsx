import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-heading" className="flex flex-1 flex-col justify-center bg-paper py-28 sm:py-40">
      <Container>
        <Reveal>
          <p className="meta-label text-emerald-deep">/ ERROR 404</p>
          <h1 id="not-found-heading" className="display mt-6 text-[clamp(6rem,18vw,16rem)]">
            404
          </h1>
          <p className="display mt-4 max-w-2xl text-3xl sm:text-4xl">
            Halaman tidak ditemukan.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            Halaman yang Anda cari dipindahkan, diganti nama, atau belum pernah dibuat. Sistem lainnya
            masih berfungsi normal.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/id" variant="solid" size="lg" arrow>
              Kembali ke beranda
            </Button>
            <Link
              href="/portfolio"
              className="inline-flex items-center px-7 py-4 font-mono text-xs uppercase tracking-[0.14em] text-ink-text underline decoration-line underline-offset-8 transition-colors hover:text-emerald-deep hover:decoration-emerald"
            >
              Lihat portfolio
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
