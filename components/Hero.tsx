"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    title: "Woorde wat bly",
    subtitle: "Nuwe digbundels beskikbaar",
    cta: "Bekyk Boeke",
    href: "/books",
    bg: "bg-[#e8e0d5]",
  },
  {
    title: "Kuns wat praat",
    subtitle: "Oorspronklike werke en beperkte drukke",
    cta: "Bekyk Kuns",
    href: "/art",
    bg: "bg-[#dde4ed]",
  },
  {
    title: "Beelde in beweging",
    subtitle: "Video's, dokumentêrs en musiek",
    cta: "Bekyk Video's",
    href: "/videos",
    bg: "bg-[#e4ded8]",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <section className={`${slide.bg} transition-colors duration-700`}>
      <div className="max-w-6xl mx-auto px-4 py-32 md:py-48 flex flex-col items-center text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">Mijaune Shop</p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-ink mb-6 leading-tight">
          {slide.title}
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-md">{slide.subtitle}</p>
        <Link
          href={slide.href}
          className="inline-block border border-ink text-ink px-8 py-3 text-sm uppercase tracking-widest hover:bg-ink hover:text-cream transition-colors duration-200"
        >
          {slide.cta}
        </Link>

        {/* Dots */}
        <div className="flex gap-2 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-ink" : "bg-gray-400"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
