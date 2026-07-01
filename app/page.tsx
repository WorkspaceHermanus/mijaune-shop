import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

const art   = products.filter(p => p.category === "art");
const books = products.filter(p => p.category === "books");

export default function Home() {
  return (
    <div style={{ backgroundColor: "#faf8f2" }}>

      {/* ── HERO ── */}
      <section className="relative w-full" style={{ height: "100svh", minHeight: 500 }}>
        <Image
          src="/images/outside-stanford.jpg"
          alt="Mijaune"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={92}
          priority
        />
        {/* bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(250,248,242,0.85), transparent)" }} />

        {/* hero text */}
        <div className="absolute inset-x-0 bottom-0 px-6 md:px-14 pb-12 md:pb-16">
          <p className="text-[9px] tracking-[0.4em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>
            Kuns · Fotografie · Woorde
          </p>
          <h1 className="leading-none mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
              color: "#fff",
              textShadow: "0 2px 24px rgba(0,0,0,0.25)",
            }}>
            Mijaune
          </h1>
          <Link href="/art"
            className="inline-block text-[9px] font-medium tracking-[0.35em] uppercase
              px-7 py-3.5 border border-white/70 text-white
              hover:bg-white hover:text-[#1c1c1c]
              transition-all duration-300">
            Sien werke
          </Link>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-track py-3 border-b" style={{ borderColor: "#e4dfd4" }}>
        <div className="marquee-inner select-none">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-[9px] tracking-[0.35em] uppercase px-8"
              style={{ color: "#bbb" }}>
              KUNS  ·  FOTOGRAFIE  ·  BOEKE EN WOORDE  ·  HERMANUS  ·  GESIGNEER  ·
            </span>
          ))}
        </div>
      </div>

      {/* ── ART ── */}
      <section className="px-5 md:px-10 pt-16 md:pt-24 pb-8">
        <div className="flex items-end justify-between mb-8">
          <p className="text-[9px] font-medium tracking-[0.35em] uppercase" style={{ color: "#999" }}>Kuns</p>
          <Link href="/art" className="text-[9px] font-medium tracking-[0.3em] uppercase"
            style={{ color: "#1a6fff" }}>
            Sien alles
          </Link>
        </div>

        {/* 2+1 editorial layout on desktop, 2-col on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-2 md:gap-3">

          {/* Large feature — col 1-8 */}
          <Link href={`/product/${art[0].slug}`}
            className="col-span-2 md:col-span-8 img-wrap watermarked relative block"
            style={{ aspectRatio: "16/10" }}>
            <Image src={art[0].image} alt={art[0].name} fill
              className="object-cover" sizes="(max-width: 768px) 100vw, 67vw" quality={90} priority />
          </Link>

          {/* Right column — col 9-12, two stacked */}
          <div className="hidden md:flex md:col-span-4 flex-col gap-3">
            {art.slice(1, 3).map(p => (
              <Link key={p.id} href={`/product/${p.slug}`}
                className="img-wrap watermarked relative block flex-1"
                style={{ minHeight: 0 }}>
                <div className="relative" style={{ aspectRatio: "4/3" }}>
                  <Image src={p.image} alt={p.name} fill
                    className="object-cover" sizes="33vw" quality={88} />
                </div>
              </Link>
            ))}
          </div>

          {/* Items 2-3 on mobile (hidden on desktop in right col above, show as normal grid items) */}
          {art.slice(1, 3).map(p => (
            <Link key={p.id + "-m"} href={`/product/${p.slug}`}
              className="md:hidden img-wrap watermarked relative block aspect-square">
              <Image src={p.image} alt={p.name} fill
                className="object-cover" sizes="50vw" quality={85} />
            </Link>
          ))}

          {/* Bottom row — 3 across on desktop, 2-col on mobile */}
          {art.slice(3, 5).map(p => (
            <Link key={p.id} href={`/product/${p.slug}`}
              className="col-span-1 md:col-span-6 img-wrap watermarked relative block"
              style={{ aspectRatio: "3/2" }}>
              <Image src={p.image} alt={p.name} fill
                className="object-cover" sizes="(max-width: 768px) 50vw, 50vw" quality={88} />
            </Link>
          ))}
        </div>

        {/* Captions below grid */}
        <div className="mt-5 flex flex-col gap-1">
          <p className="text-[9px] tracking-[0.2em] uppercase" style={{ color: "#bbb" }}>
            {art[0].name} — R{art[0].price}
          </p>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <div className="px-8 md:px-24 py-20 md:py-32 text-center border-t border-b" style={{ borderColor: "#e4dfd4" }}>
        <p className="leading-snug"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
            color: "#c5bfb3",
          }}>
          "Kuns is die taal wat almal<br />verstaan maar min kan praat."
        </p>
      </div>

      {/* ── BOOKS ── */}
      <section className="px-5 md:px-10 pt-16 md:pt-24 pb-20 md:pb-32">
        <div className="flex items-end justify-between mb-8">
          <p className="text-[9px] font-medium tracking-[0.35em] uppercase" style={{ color: "#999" }}>Boeke en Woorde</p>
          <Link href="/books" className="text-[9px] font-medium tracking-[0.3em] uppercase"
            style={{ color: "#1a6fff" }}>
            Sien alles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {books.map(b => (
            <Link key={b.id} href={`/product/${b.slug}`} className="group">
              <div className="aspect-[3/4] mb-5 flex items-center justify-center"
                style={{ backgroundColor: "#f0ece3" }}>
                <span className="text-8xl font-light select-none"
                  style={{ fontFamily: "var(--font-display)", color: "#d5cfc5" }}>
                  {b.name[0]}
                </span>
              </div>
              <p className="text-[9px] tracking-[0.25em] uppercase mb-2" style={{ color: "#bbb" }}>
                Boeke en Woorde
              </p>
              <p className="text-sm mb-1 font-medium" style={{ color: "#1c1c1c" }}>{b.name}</p>
              <p className="text-sm" style={{ color: "#1a6fff" }}>R{b.price}</p>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
