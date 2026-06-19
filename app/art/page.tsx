import ProductCard from "@/components/ProductCard";
import { getByCategory } from "@/lib/products";

export const metadata = { title: "Kuns — Mijaune Shop" };

export default function ArtPage() {
  const art = getByCategory("art");
  return (
    <div className="max-w-7xl mx-auto px-6 py-14">
      <h1 className="text-3xl font-bold uppercase tracking-widest mb-12 text-ink">Kuns</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {art.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
