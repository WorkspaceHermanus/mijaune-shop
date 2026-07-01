import ProductCard from "@/components/ProductCard";
import { getByCategory } from "@/lib/products";

export const metadata = { title: "Boeke & Woorde — Mijaune Shop" };

export default function BooksPage() {
  const books = getByCategory("books");
  return (
    <div className="max-w-7xl mx-auto px-8 md:px-16 py-14">
      <h1 className="text-5xl font-bold mb-12" style={{ fontFamily: "var(--font-display)", color: "#1a6fff" }}>
        Boeke & Woorde
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {books.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
