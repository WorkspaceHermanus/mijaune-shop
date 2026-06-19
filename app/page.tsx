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
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-lg font-bold uppercase tracking-widest text-ink">Uitgesoekte Werke</h2>
          <Link href="/art" className="text-[10px] uppercase tracking-widest text-mustard font-semibold hover:text-ink transition-colors">
            View All
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
      <section className="border-t border-ink/10 py-16 text-center px-6">
        <p className="text-[10px] uppercase tracking-widest text-mustard font-semibold mb-4">Meer as net ʼn winkel</p>
        <h2 className="text-2xl font-bold uppercase tracking-wide text-ink mb-4">Samewerking & Besprekings</h2>
        <p className="text-sm text-ink/60 max-w-sm mx-auto mb-8 leading-relaxed">
          Opvoerings, onderhoude of projekte — kontak my direk.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-ink text-cream text-xs uppercase tracking-widest font-semibold px-8 py-3 hover:bg-mustard hover:text-ink transition-colors"
        >
          Kontak My
        </Link>
      </section>
    </>
  );
}
