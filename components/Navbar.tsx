"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart";

const links = [
  { href: "/art",     label: "Kuns" },
  { href: "/books",   label: "Boeke" },
  { href: "/contact", label: "Kontak" },
];

export default function Navbar() {
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] flex">
          <div className="w-72 h-full bg-[#080808] border-r border-white/5 flex flex-col p-8">
            <button onClick={() => setOpen(false)} className="self-end mb-10 text-[#ede8dd]/40 hover:text-[#ede8dd] transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2 2l16 16M18 2L2 18" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </button>
            <nav className="flex flex-col gap-8">
              {links.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="text-2xl text-[#ede8dd]/60 hover:text-[#ede8dd] transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}>
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto">
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#ede8dd]/20">Mijaune Shop</p>
            </div>
          </div>
          <div className="flex-1 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
        </div>
      )}

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#080808]/90 backdrop-blur-md border-b border-white/5" : ""
      }`}>
        <div className="px-6 md:px-10 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Mijaune"
              width={110}
              height={44}
              className="object-contain"
              style={{ maxHeight: 38, filter: "brightness(0) invert(1)" }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#ede8dd]/45 hover:text-[#ede8dd] transition-colors duration-200">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <Link href="/cart" className="relative text-[#ede8dd]/50 hover:text-[#ede8dd] transition-colors">
              <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-white text-[9px] font-bold flex items-center justify-center"
                  style={{ backgroundColor: "#1a6fff" }}>
                  {count}
                </span>
              )}
            </Link>

            <button onClick={() => setOpen(true)} className="md:hidden text-[#ede8dd]/50 hover:text-[#ede8dd] transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.4"/>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
