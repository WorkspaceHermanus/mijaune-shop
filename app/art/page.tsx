import ProductCard from "@/components/ProductCard";
import { getByCategory } from "@/lib/products";

export const metadata = { title: "Kuns — Mijaune Shop" };

export default function ArtPage() {
  const art = getByCategory("art");
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">Versameling</p>
        <h1 className="font-serif text-5xl font-bold">Kuns</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {art.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
