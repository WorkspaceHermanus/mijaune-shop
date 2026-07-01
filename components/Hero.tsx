"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  { image: "/images/outside-stanford.jpg", title: "BUITE STANFORD", href: "/art" },
  { image: "/images/house-on-the-hill.jpg", title: "HUIS OP DIE HEUWEL", href: "/art" },
  { image: "/images/blanket-in-the-sky.jpg", title: "BLANKET IN THE SKY", href: "/art" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), []);
  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <div className="hero-wrapper" role="region" aria-label="slideshow">
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9", maxHeight: "90vh" }}>
        {/* Slides */}
        {slides.map((s, i) => (
          <div key={s.image}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}>
            <Image src={s.image} alt={s.title} fill className="object-cover" priority={i === 0} sizes="100vw" />
          </div>
        ))}

        {/* Hero content overlay — bottom left, like Venture */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          {/* Big yellow title */}
          <h2 className="text-5xl md:text-8xl font-bold leading-none mb-5"
            style={{ fontFamily: "var(--font-display)", color: "#fff", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>
            {slides[current].title}
          </h2>

          {/* Controls row — exactly like Venture */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* Counter */}
            <span className="text-white text-sm font-medium">
              {current + 1}/{slides.length}
            </span>

            {/* Pause/Play */}
            <button
              onClick={() => setPaused(p => !p)}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              className="w-8 h-8 border border-white/60 flex items-center justify-center text-white hover:border-white transition-colors">
              {paused ? (
                <svg viewBox="0 0 18 32" width="10" height="10" fill="white"><path d="M.263 0l17.071 15.944L.264 31.89" fillRule="evenodd"/></svg>
              ) : (
                <svg viewBox="0 0 233 320" width="10" height="10" fill="white"><path d="M232.727 320h-58.182V0h58.182v320zm-174.545 0H0V0h58.182v320z"/></svg>
              )}
            </button>

            {/* Prev */}
            <button onClick={prev} aria-label="Previous slide"
              className="w-8 h-8 border border-white/60 flex items-center justify-center text-white hover:border-white transition-colors">
              <svg viewBox="0 0 32 32" width="12" height="12" fill="white"><path d="M24.333 28.205l-1.797 1.684L7.666 16l14.87-13.889 1.797 1.675L11.269 16z"/></svg>
            </button>

            {/* Next */}
            <button onClick={next} aria-label="Next slide"
              className="w-8 h-8 border border-white/60 flex items-center justify-center text-white hover:border-white transition-colors">
              <svg viewBox="0 0 32 32" width="12" height="12" fill="white"><path d="M7.667 3.795l1.797-1.684L24.334 16 9.464 29.889l-1.797-1.675L20.731 16z"/></svg>
            </button>

            {/* View all products link */}
            <Link href={slides[current].href}
              className="text-sm font-medium text-white border-b border-white/50 hover:border-white pb-px transition-colors ml-2">
              Sien alle produkte &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
