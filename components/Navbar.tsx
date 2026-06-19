"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart";

export default function Navbar() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/books", label: "Boeke en Woorde" },
    { href: "/videos", label: "Video" },
    { href: "/art", label: "Kuns" },
  ];

  return (
    <header className="bg-cream sticky top-0 z-50">
      {/* Top row — brand + icons */}
      <div className="border-b border-ink/10 px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-sm font-bold uppercase tracking-widest text-ink">
          Mijaune Shop
        </Link>
        <div className="flex items-center gap-5">
          {/* Search icon */}
          <button aria-label="Soek" className="text-ink hover:opacity-60 transition-opacity">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
          {/* Cart icon */}
          <Link href="/cart" aria-label="Mandjie" className="relative text-ink hover:opacity-60 transition-opacity">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-ink text-cream text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {count}
              </span>
            )}
          </Link>
          {/* Mobile burger */}
          <button className="md:hidden text-ink" onClick={() => setOpen(!open)} aria-label="Menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></>}
            </svg>
          </button>
        </div>
      </div>

      {/* Nav links row */}
      <div className="hidden md:block border-b border-ink/10 px-6">
        <nav className="flex items-center gap-8 h-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-widest font-semibold text-ink hover:text-mustard transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="ml-auto text-xs uppercase tracking-widest text-ink/50 hover:text-ink transition-colors">
            Kontak
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-b border-ink/10 bg-cream px-6 pb-4">
          {[...links, { href: "/contact", label: "Kontak" }].map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-3 text-xs uppercase tracking-widest font-semibold border-b border-ink/10 last:border-0 hover:text-mustard transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
