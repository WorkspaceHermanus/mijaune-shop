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

      <div className="px-5 md:px-10 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {art.map((p, i) => (
            <Link key={p.id} href={`/product/${p.slug}`} className="group">
              <div className="img-wrap watermarked relative aspect-[3/4] mb-4">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  quality={90}
                  priority={i < 3}
                />
              </div>
              <p className="text-[9px] tracking-[0.25em] uppercase mb-2" style={{ color: "#bbb" }}>Kuns</p>
              <p className="text-sm font-medium mb-1" style={{ color: "#1c1c1c" }}>{p.name}</p>
              <p className="text-sm" style={{ color: "#1a6fff" }}>R{p.price}</p>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
