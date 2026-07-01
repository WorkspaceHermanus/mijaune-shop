import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

const art   = products.filter(p => p.category === "art");
const books = products.filter(p => p.category === "books");

const TICKER = "KUNS  ·  FOTOGRAFIE  ·  BOEKE EN WOORDE  ·  HERMANUS  ·  BEPERKTE OPLAAG  ·  GESIGNEER  ·  ";

export default function Home() {
  return (
    <div className="bg-[#080808] min-h-screen">

      {/* ─────────── HERO ─────────── */}
      <section className="relative flex flex-col md:flex-row min-h-screen">

        {/* Left — text panel */}
        <div className="relative z-10 flex flex-col justify-center
          px-8 md:px-16 pt-28 pb-16 md:py-0
          md:w-[42%] bg-[#080808]">

          <p className="text-[9px] tracking-[0.35em] uppercase mb-8"
            style={{ color: "#1a6fff" }}>
            Mijaune Shop
          </p>

          <h1 className="font-display font-bold leading-[0.88] mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(4.5rem, 10vw, 8.5rem)",
              color: "#ede8dd",
            }}>
            Kuns<br />wat bly
          </h1>

          <p className="text-[10px] tracking-[0.3em] uppercase mb-12"
            style={{ color: "rgba(237,232,221,0.35)" }}>
            Fotografie · Boeke · Woorde
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/art"
              className="inline-block text-[10px] font-semibold tracking-[0.28em] uppercase
                px-8 py-4 bg-[#1a6fff] text-white
                hover:bg-[#ede8dd] hover:text-[#080808]
                transition-all duration-300">
              Sien Werke
            </Link>
            <Link href="/books"
              className="text-[10px] font-semibold tracking-[0.28em] uppercase
                text-[#ede8dd]/35 hover:text-[#ede8dd] transition-colors duration-200">
              Boeke →
            </Link>
          </div>
        </div>

        {/* Right — hero image */}
        <div className="relative md:w-[58%] h-[62vh] md:h-screen overflow-hidden">
          <Image
            src="/images/outside-stanford.jpg"
            alt="Mijaune — Outside Stanford"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 58vw"
            quality={92}
            priority
          />
          {/* Gradient bleed into left panel on desktop */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-32
            bg-gradient-to-r from-[#080808] to-transparent pointer-events-none" />
          {/* Bottom vignette */}
          <div className="absolute inset-x-0 bottom-0 h-24
            bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
        </div>

        {/* Scroll hint */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2
          flex-col items-center gap-2 z-10">
          <div className="w-px h-12 bg-[#ede8dd]/15 animate-pulse" />
        </div>
      </section>

      {/* ─────────── TICKER ─────────── */}
      <div className="marquee-track border-t border-b border-white/[0.06] py-3.5 bg-[#080808]">
        <div className="marquee-inner select-none">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-[9px] tracking-[0.35em] uppercase px-6"
              style={{ color: "rgba(237,232,221,0.2)" }}>
              {TICKER}
            </span>
          ))}
        </div>
      </div>

      {/* ─────────── ART ─────────── */}
      <section className="px-5 md:px-10 pt-20 md:pt-28 pb-12">
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem,6vw,5rem)", color: "#ede8dd" }}>
            Kuns
          </h2>
          <Link href="/art"
            className="text-[9px] font-semibold tracking-[0.28em] uppercase
              text-[#ede8dd]/30 hover:text-[#1a6fff] transition-colors pb-1">
            Sien alles →
          </Link>
        </div>

        {/* Mobile: 2-col even grid */}
        <div className="grid grid-cols-2 gap-[2px] md:hidden">
          {art.map(p => (
            <Link key={p.id} href={`/product/${p.slug}`}
              className="relative watermarked overflow-hidden group aspect-square">
              <Image src={p.image} alt={p.name} fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="50vw" quality={85} />
              <div className="reveal-overlay" />
              <div className="reveal-info">
                <p className="text-[9px] tracking-[0.2em] uppercase text-white/50 mb-0.5">R{p.price}</p>
                <p className="text-sm text-white" style={{ fontFamily: "var(--font-display)" }}>{p.name}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop: editorial grid */}
        <div className="hidden md:block">
          {/* Row A — tall left + 2 stacked right */}
          <div className="grid gap-[3px]"
            style={{ gridTemplateColumns: "1.15fr 0.85fr", gridTemplateRows: "310px 310px" }}>
            {/* Item 0 — spans 2 rows */}
            <Link href={`/product/${art[0].slug}`}
              className="relative watermarked overflow-hidden group"
              style={{ gridRow: "1 / 3" }}>
              <Image src={art[0].image} alt={art[0].name} fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1280px) 57vw, 700px" quality={90} />
              <div className="reveal-overlay" />
              <div className="reveal-info">
                <p className="text-[9px] tracking-[0.2em] uppercase text-white/50 mb-1">R{art[0].price}</p>
                <p className="text-xl text-white" style={{ fontFamily: "var(--font-display)" }}>{art[0].name}</p>
              </div>
            </Link>

            {/* Items 1 & 2 — stacked in right col */}
            {art.slice(1, 3).map(p => (
              <Link key={p.id} href={`/product/${p.slug}`}
                className="relative watermarked overflow-hidden group">
                <Image src={p.image} alt={p.name} fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1280px) 43vw, 540px" quality={90} />
                <div className="reveal-overlay" />
                <div className="reveal-info">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-white/50 mb-0.5">R{p.price}</p>
                  <p className="text-base text-white" style={{ fontFamily: "var(--font-display)" }}>{p.name}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Row B — 2 wide landscape */}
          <div className="grid grid-cols-2 gap-[3px] mt-[3px]">
            {art.slice(3, 5).map(p => (
              <Link key={p.id} href={`/product/${p.slug}`}
                className="relative watermarked overflow-hidden group aspect-[16/9]">
                <Image src={p.image} alt={p.name} fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="50vw" quality={90} />
                <div className="reveal-overlay" />
                <div className="reveal-info">
                  <p className="text-[9px] tracking-[0.2em] uppercase text-white/50 mb-0.5">R{p.price}</p>
                  <p className="text-base text-white" style={{ fontFamily: "var(--font-display)" }}>{p.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── PULL QUOTE ─────────── */}
      <div className="px-8 md:px-24 py-24 md:py-36 text-center border-t border-white/[0.05]">
        <p className="leading-snug text-[#ede8dd]/18"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.6rem, 4.5vw, 3.5rem)",
          }}>
          "Kuns is die taal wat almal verstaan<br />maar min kan praat."
        </p>
      </div>

      {/* ─────────── BOOKS ─────────── */}
      <section className="border-t border-white/[0.05] px-5 md:px-10 pt-16 pb-28">
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem,6vw,5rem)", color: "#ede8dd" }}>
            Boeke en Woorde
          </h2>
          <Link href="/books"
            className="text-[9px] font-semibold tracking-[0.28em] uppercase
              text-[#ede8dd]/30 hover:text-[#1a6fff] transition-colors pb-1">
            Sien alles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
          {books.map((b, i) => (
            <Link key={b.id} href={`/product/${b.slug}`}
              className="group flex md:flex-col gap-5 md:gap-0 px-0 md:px-8 py-6 md:py-10
                hover:bg-white/[0.02] transition-colors duration-300
                first:md:pl-0 last:md:pr-0">
              {/* Book placeholder cover */}
              <div className="flex-shrink-0 w-20 md:w-full md:aspect-[3/4]
                bg-[#111] flex items-center justify-center overflow-hidden mb-0 md:mb-7">
                <span className="text-4xl md:text-6xl font-bold select-none"
                  style={{ fontFamily: "var(--font-display)", color: "#1a2a4a" }}>
                  {b.name[0]}
                </span>
              </div>
              <div className="flex flex-col justify-center md:justify-start">
                <p className="text-[9px] tracking-[0.25em] uppercase text-[#ede8dd]/25 mb-2">
                  Boeke en Woorde
                </p>
                <h3 className="text-lg mb-2 leading-tight"
                  style={{ fontFamily: "var(--font-display)", color: "#ede8dd" }}>
                  {b.name}
                </h3>
                <p className="text-xs text-[#ede8dd]/35 mb-4 leading-relaxed hidden md:block">
                  {b.description}
                </p>
                <p className="text-sm font-semibold" style={{ color: "#1a6fff" }}>R{b.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
