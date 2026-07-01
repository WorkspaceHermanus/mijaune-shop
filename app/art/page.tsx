import Image from "next/image";
import Link from "next/link";
import { getByCategory } from "@/lib/products";

export const metadata = { title: "Kuns — Mijaune Shop" };

export default function ArtPage() {
  const art = getByCategory("art");

  return (
    <div className="bg-[#080808] min-h-screen pt-16">

      {/* Header */}
      <div className="px-6 md:px-10 pt-16 pb-10 md:pt-20 md:pb-14
        flex flex-col md:flex-row md:items-end md:justify-between gap-4
        border-b border-white/[0.06]">
        <div>
          <p className="text-[9px] tracking-[0.35em] uppercase text-[#1a6fff] mb-4">Mijaune</p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem,8vw,7rem)", color: "#ede8dd", lineHeight: 1 }}>
            Kuns
          </h1>
        </div>
        <p className="text-xs text-[#ede8dd]/30 max-w-xs leading-relaxed pb-1">
          Beperkte oplaag drukke. Elke stuk word deur Mijaune gesigneer en genommer.
        </p>
      </div>

      {/* Grid */}
      <div className="px-5 md:px-10 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[3px]">
          {art.map((p, i) => (
            <Link key={p.id} href={`/product/${p.slug}`}
              className={`relative watermarked overflow-hidden group
                ${i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-square"}`}>
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={i === 0
                  ? "(max-width: 768px) 50vw, 66vw"
                  : "(max-width: 768px) 50vw, 33vw"}
                quality={90}
                priority={i === 0}
              />
              <div className="reveal-overlay" />
              <div className="reveal-info">
                <p className="text-[9px] tracking-[0.25em] uppercase text-white/45 mb-1">R{p.price}</p>
                <p className="text-white" style={{ fontFamily: "var(--font-display)", fontSize: i === 0 ? "1.5rem" : "1.1rem" }}>
                  {p.name}
                </p>
                <p className="text-[9px] tracking-[0.2em] uppercase text-[#1a6fff] mt-2">Kyk →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
