"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    image: "/images/outside-stanford.jpg",
    title: "Buite Stanford",
    sub: "Kuns",
    href: "/art",
  },
  {
    image: "/images/house-on-the-hill.jpg",
    title: "Huis op die Heuwel",
    sub: "Kuns",
    href: "/art",
  },
  {
    image: "/images/blanket-in-the-sky.jpg",
    title: "Blanket in the Sky",
    sub: "Kuns",
    href: "/art",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-[92vh] overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={s.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/20" />
        </div>
      ))}

      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col items-start justify-end p-10 md:p-16">
        <p className="text-[10px] uppercase tracking-[0.25em] text-paper/70 mb-3">{slide.sub}</p>
        <h1 className="font-display text-5xl md:text-7xl font-light italic text-paper leading-none mb-8">
          {slide.title}
        </h1>
        <Link
          href={slide.href}
          className="text-[10px] uppercase tracking-[0.25em] text-paper border-b border-paper/50 pb-0.5 hover:border-paper transition-colors"
        >
          Sien Versameling
        </Link>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-10 right-10 md:right-16 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-paper" : "bg-paper/40"}`}
          />
        ))}
      </div>
    </section>
  );
}
