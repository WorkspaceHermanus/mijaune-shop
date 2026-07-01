import Image from "next/image";
import Link from "next/link";
import { getByCategory } from "@/lib/products";

export const metadata = { title: "Kuns — Mijaune Shop" };

export default function ArtPage() {
  const art = getByCategory("art");

  return (
    <div style={{ backgroundColor: "#faf8f2" }} className="min-h-screen pt-14">

      <div className="px-6 md:px-10 pt-12 pb-10 border-b" style={{ borderColor: "#e4dfd4" }}>
        <p className="text-[9px] tracking-[0.35em] uppercase mb-4" style={{ color: "#bbb" }}>Mijaune</p>
        <h1 className="font-light leading-none"
          style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2.5rem,6vw,5rem)", color: "#1c1c1c", letterSpacing: "-0.02em" }}>
          Kuns
        </h1>
        <p className="mt-4 text-xs leading-relaxed max-w-sm" style={{ color: "#999" }}>
          Beperkte oplaag fotografie-drukke. Elke stuk word deur Mijaune gesigneer en genommer.
        </p>
      </div>

      <div className="px-5 md:px-10 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {art.map((p, i) => (
            <Link key={p.id} href={`/product/${p.slug}`}
              className={`group block ${i === 0 ? "col-span-2 md:col-span-2" : ""}`}>
              <div className={`img-wrap watermarked relative block mb-3
                ${i === 0 ? "aspect-[16/10] md:aspect-[16/9]" : "aspect-square"}`}>
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes={i === 0
                    ? "(max-width: 768px) 100vw, 66vw"
                    : "(max-width: 768px) 50vw, 33vw"}
                  quality={90}
                  priority={i < 2}
                />
              </div>
              <p className="text-[10px] font-medium" style={{ color: "#1c1c1c" }}>{p.name}</p>
              <p className="text-[10px] mt-0.5" style={{ color: "#1a6fff" }}>R{p.price}</p>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
