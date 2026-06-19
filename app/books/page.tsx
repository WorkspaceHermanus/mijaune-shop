import ProductCard from "@/components/ProductCard";
import { getByCategory } from "@/lib/products";

export const metadata = { title: "Boeke & Woorde — Mijaune" };

export default function BooksPage() {
  const books = getByCategory("books");
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-16">
        <p className="text-[9px] uppercase tracking-[0.25em] text-dust mb-3">Versameling</p>
        <h1 className="font-display text-6xl font-light italic">Boeke & Woorde</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {books.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
