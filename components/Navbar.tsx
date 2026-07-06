"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart";

export default function Navbar() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] flex">
          <div className="w-64 h-full flex flex-col p-8" style={{ backgroundColor: "#faf8f2" }}>
            <button onClick={() => setOpen(false)}
              className="self-end mb-12 text-[#999] hover:text-[#1c1c1c] transition-colors">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.2"/>
              </svg>
            </button>
            <nav className="flex flex-col gap-7">
              {[
                { href: "/art",     label: "Art" },
                { href: "/books",   label: "Books" },
                { href: "/contact", label: "Contact" },
              ].map(l => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#999] hover:text-[#1c1c1c] transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-1 bg-black/20" onClick={() => setOpen(false)} />
        </div>
      )}

      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(250,248,242,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #e4dfd4" : "1px solid transparent",
        }}
      >
        <div className="h-14 px-6 md:px-10 flex items-center">

          {/* Left links — desktop */}
          <nav className="hidden md:flex items-center gap-8 flex-1">
            <Link href="/art"
              className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#999] hover:text-[#1c1c1c] transition-colors">
              Art
            </Link>
            <Link href="/books"
              className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#999] hover:text-[#1c1c1c] transition-colors">
              Books
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(true)} className="md:hidden flex-1 flex">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 5h16M2 10h16M2 15h16" stroke="#999" strokeWidth="1.3"/>
            </svg>
          </button>

          {/* Center — logo */}
          <div className="flex justify-center flex-1">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Mijaune"
                width={100}
                height={40}
                className="object-contain"
                style={{ maxHeight: 34 }}
                priority
              />
            </Link>
          </div>

          {/* Right — contact + cart */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
            <Link href="/contact"
              className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#999] hover:text-[#1c1c1c] transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex items-center justify-end flex-1 md:flex-none md:ml-8">
            <Link href="/cart" className="relative text-[#999] hover:text-[#1c1c1c] transition-colors">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-white text-[8px] font-bold flex items-center justify-center"
                  style={{ backgroundColor: "#1a6fff" }}>
                  {count}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
