"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart";

export default function Navbar() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/books", label: "Boeke" },
    { href: "/videos", label: "Video's" },
    { href: "/art", label: "Kuns" },
  ];

  return (
    <header className="bg-paper border-b border-ink/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Left nav */}
        <nav className="hidden md:flex items-center gap-10 w-1/3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[10px] uppercase tracking-[0.2em] text-ink/60 hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Center logo */}
        <Link href="/" className="font-display text-2xl font-light italic tracking-wide text-ink mx-auto md:mx-0 md:absolute md:left-1/2 md:-translate-x-1/2">
          Mijaune
        </Link>

        {/* Right */}
        <div className="flex items-center gap-6 w-1/3 justify-end">
          <Link href="/cart" className="relative text-[10px] uppercase tracking-[0.2em] text-ink/60 hover:text-ink transition-colors hidden md:block">
            Mandjie
            {count > 0 && (
              <span className="absolute -top-2 -right-4 bg-ink text-paper text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>

          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            <span className={`block w-5 h-px bg-ink transition-all ${open ? "rotate-45 translate-y-px" : "mb-1.5"}`}></span>
            {!open && <span className="block w-5 h-px bg-ink mb-1.5"></span>}
            <span className={`block w-5 h-px bg-ink transition-all ${open ? "-rotate-45 -translate-y-px" : ""}`}></span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-paper px-6 pb-6 pt-2 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[10px] uppercase tracking-[0.2em] text-ink/60 hover:text-ink py-2 border-b border-ink/10">
              {l.label}
            </Link>
          ))}
          <Link href="/cart" onClick={() => setOpen(false)} className="text-[10px] uppercase tracking-[0.2em] text-ink/60 hover:text-ink py-2">
            Mandjie {count > 0 && `(${count})`}
          </Link>
        </div>
      )}
    </header>
  );
}
