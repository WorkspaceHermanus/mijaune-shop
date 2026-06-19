"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart";

export default function Navbar() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Tuis" },
    { href: "/books", label: "Boeke" },
    { href: "/videos", label: "Video's" },
    { href: "/art", label: "Kuns" },
  ];

  return (
    <header className="bg-cream border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-ink">
          Mijaune
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm uppercase tracking-widest hover:text-accent transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative text-sm uppercase tracking-widest hover:text-accent transition-colors">
            <span>Mandjie</span>
            {count > 0 && (
              <span className="absolute -top-2 -right-4 bg-accent text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>

          {/* Mobile burger */}
          <button className="md:hidden ml-4" onClick={() => setOpen(!open)} aria-label="Menu">
            <span className="block w-5 h-0.5 bg-ink mb-1"></span>
            <span className="block w-5 h-0.5 bg-ink mb-1"></span>
            <span className="block w-5 h-0.5 bg-ink"></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-gray-200 px-4 pb-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm uppercase tracking-widest border-b border-gray-100 hover:text-accent">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
