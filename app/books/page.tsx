import Link from "next/link";
import { getByCategory } from "@/lib/products";

export const metadata = { title: "Boeke & Woorde — Mijaune Shop" };

export default function BooksPage() {
  const books = getByCategory("books");

  return (
    <div style={{ backgroundColor: "#faf8f2" }} className="min-h-screen pt-14">

      <div className="px-6 md:px-10 pt-12 pb-10 border-b" style={{ borderColor: "#e4dfd4" }}>
        <p className="text-[9px] tracking-[0.35em] uppercase mb-4" style={{ color: "#bbb" }}>Mijaune</p>
        <h1 className="font-light leading-none"
          style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2.5rem,6vw,5rem)", color: "#1c1c1c", letterSpacing: "-0.02em" }}>
          Boeke en Woorde
        </h1>
      </div>

      <div className="px-5 md:px-10 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {books.map(b => (
            <Link key={b.id} href={`/product/${b.slug}`} className="group">
              <div className="aspect-[3/4] mb-4 flex items-center justify-center"
                style={{ backgroundColor: "#ede9e0" }}>
                <span className="text-7xl font-light select-none"
                  style={{ fontFamily: "var(--font-display)", color: "#c8c2b5" }}>
                  {b.name[0]}
                </span>
              </div>
              <p className="text-[9px] tracking-[0.25em] uppercase mb-2" style={{ color: "#bbb" }}>
                Boeke en Woorde
              </p>
              <p className="text-sm font-medium mb-1" style={{ color: "#1c1c1c" }}>{b.name}</p>
              <p className="text-sm" style={{ color: "#1a6fff" }}>R{b.price}</p>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
