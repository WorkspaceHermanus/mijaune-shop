import Hero from "@/components/Hero";
import CollectionGrid from "@/components/CollectionGrid";
import Testimonials from "@/components/Testimonials";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import Link from "next/link";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      <Hero />
      <CollectionGrid />

      {/* Featured products */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-serif text-3xl font-bold">Uitgesoekte Werke</h2>
          <Link href="/books" className="text-xs uppercase tracking-widest text-gray-500 hover:text-accent transition-colors">
            Sien alles →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <Testimonials />

      {/* Contact strip */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Meer as net ʼn winkel</p>
        <h2 className="font-serif text-3xl font-bold mb-4">Samewerking & Besprekings</h2>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          Belangstel in ʼn opvoering, onderhoud of samewerkingsprojek? Kontak my direk.
        </p>
        <Link
          href="/contact"
          className="inline-block border border-ink px-8 py-3 text-sm uppercase tracking-widest hover:bg-ink hover:text-cream transition-colors"
        >
          Kontak My
        </Link>
      </section>
    </>
  );
}
