"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    image: "/images/outside-stanford.jpg",
    title: "BUITE\nSTANFORD",
    sub: "fotografie",
    href: "/art",
  },
  {
    image: "/images/house-on-the-hill.jpg",
    title: "HUIS OP\nDIE HEUWEL",
    sub: "fotografie",
    href: "/art",
  },
  {
    image: "/images/blanket-in-the-sky.jpg",
    title: "BLANKET\nIN THE SKY",
    sub: "fotografie",
    href: "/art",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "75vh" }}>
      {/* Images */}
      {slides.map((s, i) => (
        <div key={s.image} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}>
          <Image src={s.image} alt={s.title} fill className="object-cover" priority={i === 0} sizes="100vw" />
          <div className="absolute inset-0 bg-black/25" />
        </div>
      ))}

      {/* Big text bottom-left */}
      <div className="absolute bottom-0 left-0 p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-2">{slide.sub}</p>
        <h1 className="text-5xl md:text-8xl font-bold uppercase text-white leading-none whitespace-pre-line mb-6">
          {slide.title}
        </h1>
        <Link
          href={slide.href}
          className="inline-flex items-center gap-3 bg-cream text-ink text-xs uppercase tracking-widest font-semibold px-5 py-2.5 hover:bg-white transition-colors"
        >
          Sien alle produkte →
        </Link>
      </div>

      {/* Controls bottom-left below text — like Reenwolf */}
      <div className="absolute bottom-8 right-8 md:right-12 flex items-center gap-2">
        <span className="text-white/60 text-xs">{current + 1}/{slides.length}</span>
        <button onClick={() => setPaused(!paused)} className="w-7 h-7 border border-white/40 flex items-center justify-center text-white/70 hover:border-white hover:text-white transition-colors text-xs">
          {paused ? "▶" : "⏸"}
        </button>
        <button onClick={prev} className="w-7 h-7 border border-white/40 flex items-center justify-center text-white/70 hover:border-white hover:text-white transition-colors text-xs">‹</button>
        <button onClick={next} className="w-7 h-7 border border-white/40 flex items-center justify-center text-white/70 hover:border-white hover:text-white transition-colors text-xs">›</button>
      </div>
    </section>
  );
}
