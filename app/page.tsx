import Hero from "@/components/Hero";
import CollectionGrid from "@/components/CollectionGrid";
import Testimonials from "@/components/Testimonials";
import ProductCard from "@/components/ProductCard";
import { getByCategory } from "@/lib/products";
import Link from "next/link";

export default function Home() {
  const art = getByCategory("art").slice(0, 4);

  return (
    <>
      <Hero />
      <CollectionGrid />

      {/* Featured art */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[9px] uppercase tracking-[0.25em] text-dust mb-2">Nuut</p>
            <h2 className="font-display text-4xl font-light italic">Uitgesoekte Werke</h2>
          </div>
          <Link href="/art" className="text-[9px] uppercase tracking-[0.2em] text-dust hover:text-ink border-b border-dust/40 hover:border-ink pb-px transition-colors">
            Sien alles
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {art.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <Testimonials />

      {/* Contact strip */}
      <section className="border-t border-ink/10 py-24 text-center">
        <p className="text-[9px] uppercase tracking-[0.25em] text-dust mb-5">Meer as net ʼn winkel</p>
        <h2 className="font-display text-4xl md:text-5xl font-light italic mb-6">
          Samewerking & Besprekings
        </h2>
        <p className="text-[13px] text-dust max-w-sm mx-auto mb-10 leading-relaxed">
          Opvoerings, onderhoude of projekte — kontak my direk.
        </p>
        <Link
          href="/contact"
          className="text-[9px] uppercase tracking-[0.25em] border-b border-ink/40 pb-0.5 hover:border-ink transition-colors"
        >
          Kontak My
        </Link>
      </section>
    </>
  );
}
