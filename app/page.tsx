import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

const art   = products.filter(p => p.category === "art");
const books = products.filter(p => p.category === "books");

const tilts = [-3, 2, -2, 3, -1.5];

export default function Home() {
  return (
    <div style={{ backgroundColor: "#faf8f2" }} className="overflow-x-clip">

      {/* ── HERO ── */}
      <section className="relative w-full" style={{ height: "100svh", minHeight: 560 }}>
        <Image
          src="/images/outside-stanford.jpg"
          alt="Mijaune"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={92}
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-56 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(250,248,242,0.9), transparent)" }} />

        {/* Spinning badge — playful, top right */}
        <div className="absolute top-6 right-6 md:top-10 md:right-10 w-24 h-24 md:w-32 md:h-32 z-10">
          <svg viewBox="0 0 100 100" className="w-full h-full spin-badge">
            <defs>
              <path id="circlePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text fontSize="8.6" fill="#fff" letterSpacing="2">
              <textPath href="#circlePath">
                BEPERKTE OPLAAG • GESIGNEER • MIJAUNE •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#1a6fff" }} />
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 px-6 md:px-14 pb-14 md:pb-20">
          <p className="text-[9px] tracking-[0.4em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>
            Kuns · Fotografie · Woorde
          </p>
          <h1 className="leading-none mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.5rem, 10vw, 8.5rem)",
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

      {/* ── ART TEASER ── */}
      <section className="px-6 md:px-14 pt-28 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-lg mx-auto text-center mb-16 md:mb-24">
          <p className="text-[9px] font-medium tracking-[0.4em] uppercase mb-4" style={{ color: "#1a6fff" }}>
            Galery
          </p>
          <h2 className="scribble leading-none"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem,6vw,4.5rem)", color: "#1c1c1c" }}>
            Kuns
          </h2>
        </div>

        {/* Playful tilted trio — generous gaps, staggered vertically */}
        <div className="flex flex-wrap justify-center items-start gap-x-8 gap-y-16 md:gap-x-14 max-w-4xl mx-auto">
          {art.slice(0, 3).map((p, i) => (
            <Link key={p.id} href={`/product/${p.slug}`}
              className="tilt-card tape relative bg-white p-3 pb-6 w-[42%] md:w-64"
              style={{
                transform: `rotate(${tilts[i]}deg) translateY(${i === 1 ? "-28px" : "0"})`,
              }}>
              <div className="img-wrap watermarked relative aspect-[4/5]">
                <Image src={p.image} alt={p.name} fill
                  className="object-cover"
                  sizes="(max-width: 768px) 45vw, 260px"
                  quality={90} />
              </div>
              <p className="mt-3 text-center text-sm" style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "#1c1c1c" }}>
                {p.name}
              </p>
              <p className="text-center text-[11px]" style={{ color: "#1a6fff" }}>R{p.price}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-20 md:mt-28">
          <Link href="/art"
            className="scribble inline-block text-sm font-medium"
            style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "#1c1c1c" }}>
            Sien al die kuns →
          </Link>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <div className="px-8 md:px-24 py-24 md:py-40 text-center border-t border-b" style={{ borderColor: "#e4dfd4" }}>
        <p className="leading-snug"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
            color: "#c5bfb3",
            transform: "rotate(-1deg)",
            display: "inline-block",
          }}>
          "Kuns is die taal wat almal<br />verstaan maar min kan praat."
        </p>
      </div>

      {/* ── BOOKS TEASER ── */}
      <section className="px-6 md:px-14 pt-24 md:pt-32 pb-28 md:pb-44">
        <div className="max-w-lg mx-auto text-center mb-16 md:mb-24">
          <p className="text-[9px] font-medium tracking-[0.4em] uppercase mb-4" style={{ color: "#1a6fff" }}>
            Lees & Beleef
          </p>
          <h2 className="scribble leading-none"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem,6vw,4.5rem)", color: "#1c1c1c" }}>
            Boeke en Woorde
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-start gap-x-8 gap-y-16 md:gap-x-14 max-w-4xl mx-auto">
          {books.map((b, i) => (
            <Link key={b.id} href={`/product/${b.slug}`}
              className="tilt-card relative w-[42%] md:w-64"
              style={{ transform: `rotate(${tilts[i + 2]}deg)` }}>
              <div className="blob aspect-[4/5] mb-5 flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: i % 2 === 0 ? "#f0ece3" : "#e8f0ff" }}>
                <span className="text-6xl md:text-7xl font-light select-none floaty"
                  style={{ fontFamily: "var(--font-display)", color: i % 2 === 0 ? "#d5cfc5" : "#a8c4f5" }}>
                  {b.name[0]}
                </span>
              </div>
              <p className="text-center" style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "#1c1c1c" }}>
                {b.name}
              </p>
              <p className="text-center text-[11px]" style={{ color: "#1a6fff" }}>R{b.price}</p>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
