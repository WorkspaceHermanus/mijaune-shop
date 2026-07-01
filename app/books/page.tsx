import Link from "next/link";
import { getByCategory } from "@/lib/products";

export const metadata = { title: "Boeke & Woorde — Mijaune Shop" };

export default function BooksPage() {
  const books = getByCategory("books");

  return (
    <div className="bg-[#080808] min-h-screen pt-16">

      {/* Header */}
      <div className="px-6 md:px-10 pt-16 pb-10 md:pt-20 md:pb-14
        border-b border-white/[0.06]">
        <p className="text-[9px] tracking-[0.35em] uppercase text-[#1a6fff] mb-4">Mijaune</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem,7vw,6.5rem)", color: "#ede8dd", lineHeight: 1 }}>
          Boeke en Woorde
        </h1>
      </div>

      {/* Books list */}
      <div className="px-5 md:px-10 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/[0.05]">
          {books.map(b => (
            <Link key={b.id} href={`/product/${b.slug}`}
              className="group bg-[#080808] p-6 md:p-10 hover:bg-[#0e0e0e] transition-colors duration-300">
              {/* Cover placeholder */}
              <div className="aspect-[3/4] bg-[#0d0d0d] border border-white/[0.04]
                flex items-center justify-center mb-8 overflow-hidden
                group-hover:border-[#1a6fff]/20 transition-colors duration-300">
                <span className="text-8xl font-bold select-none"
                  style={{ fontFamily: "var(--font-display)", color: "#1a2a4a" }}>
                  {b.name[0]}
                </span>
              </div>

              <p className="text-[9px] tracking-[0.28em] uppercase text-[#ede8dd]/20 mb-3">
                Boeke en Woorde
              </p>
              <h3 className="text-2xl mb-3 leading-tight"
                style={{ fontFamily: "var(--font-display)", color: "#ede8dd" }}>
                {b.name}
              </h3>
              <p className="text-xs text-[#ede8dd]/35 mb-6 leading-relaxed">
                {b.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold" style={{ color: "#1a6fff" }}>R{b.price}</span>
                <span className="text-[9px] tracking-[0.25em] uppercase text-[#ede8dd]/20
                  group-hover:text-[#ede8dd]/50 transition-colors duration-300">
                  Voeg by →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
