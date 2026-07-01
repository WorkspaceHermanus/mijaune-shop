"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/books", label: "BOEKE EN WOORDE" },
  { href: "/videos", label: "VIDEO" },
  { href: "/art", label: "KUNS" },
];

export default function Navbar() {
  const { count } = useCart();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-72 h-full shadow-xl flex flex-col p-6 overflow-y-auto" style={{ backgroundColor: "#fffdf5" }}>
            <button onClick={() => setDrawerOpen(false)} className="self-end mb-6">
              <svg viewBox="0 0 32 32" width="20" height="20" fill="#444"><path d="M25.313 8.55l-1.862-1.862-7.45 7.45-7.45-7.45L6.689 8.55l7.45 7.45-7.45 7.45 1.862 1.862 7.45-7.45 7.45 7.45 1.862-1.862-7.45-7.45z"/></svg>
            </button>
            <ul className="flex flex-col gap-5">
              {navLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} onClick={() => setDrawerOpen(false)}
                    className="text-sm font-semibold tracking-widest text-ink hover:opacity-60 transition-opacity">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 bg-black/40" onClick={() => setDrawerOpen(false)} />
        </div>
      )}

      <header role="banner" className="sticky top-0 z-40 border-b border-gray-200" style={{ backgroundColor: "#fffdf5" }}>
        {/* Upper row — logo + icons */}
        <div className="px-4 md:px-8 py-2 flex items-center">
          {/* Mobile hamburger */}
          <button onClick={() => setDrawerOpen(true)} className="md:hidden mr-4">
            <svg viewBox="0 0 32 32" width="20" height="20" fill="#444"><path d="M4.889 14.958h22.222v2.222H4.889v-2.222zM4.889 8.292h22.222v2.222H4.889V8.292zM4.889 21.625h22.222v2.222H4.889v-2.222z"/></svg>
          </button>

          {/* Logo image */}
          <div className="flex-1">
            <Link href="/">
              <Image
                src="/images/logo.jpeg"
                alt="Mijaune Shop"
                width={160}
                height={70}
                className="object-contain"
                style={{ maxHeight: 56 }}
                priority
              />
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button aria-label="Search" className="hidden md:block hover:opacity-60 transition-opacity">
              <svg viewBox="0 0 32 32" width="18" height="18" fill="#444"><path d="M21.839 18.771a10.012 10.012 0 0 0 1.57-5.39c0-5.548-4.493-10.048-10.034-10.048-5.548 0-10.041 4.499-10.041 10.048s4.493 10.048 10.034 10.048c2.012 0 3.886-.594 5.456-1.61l.455-.317 7.165 7.165 2.223-2.263-7.158-7.165.33-.468zM18.995 7.767c1.498 1.498 2.322 3.49 2.322 5.608s-.825 4.11-2.322 5.608c-1.498 1.498-3.49 2.322-5.608 2.322s-4.11-.825-5.608-2.322c-1.498-1.498-2.322-3.49-2.322-5.608s.825-4.11 2.322-5.608c1.498-1.498 3.49-2.322 5.608-2.322s4.11.825 5.608 2.322z"/></svg>
            </button>
            <Link href="/cart" aria-label="Cart" className="relative hover:opacity-60 transition-opacity">
              <svg viewBox="0 0 31 32" width="18" height="18" fill="#444"><path d="M14.568 25.629c-1.222 0-2.111.889-2.111 2.111 0 1.111 1 2.111 2.111 2.111 1.222 0 2.111-.889 2.111-2.111s-.889-2.111-2.111-2.111zm10.22 0c-1.222 0-2.111.889-2.111 2.111 0 1.111 1 2.111 2.111 2.111 1.222 0 2.111-.889 2.111-2.111s-.889-2.111-2.111-2.111zm2.555-3.777H12.457L7.347 7.078c-.222-.333-.555-.667-1-.667H1.792c-.667 0-1.111.444-1.111 1s.444 1 1.111 1h3.777l5.11 14.885c.111.444.555.666 1 .666h15.663c.555 0 1.111-.444 1.111-1 0-.666-.555-1.111-1.111-1.111zm2.333-11.442l-18.44-1.555h-.111c-.555 0-.777.333-.667.889l3.222 9.22c.222.555.889 1 1.444 1h13.441c.555 0 1.111-.444 1.222-1l.778-7.443c.111-.555-.333-1.111-.889-1.111zm-2 7.443H15.568l-2.333-6.776 15.108 1.222-.666 5.554z"/></svg>
              {count > 0 && (
                <span className="absolute -top-2 -right-2 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: "#1a6fff" }}>
                  {count}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Nav links row — desktop */}
        <nav className="hidden md:block border-t border-gray-100 px-8">
          <div className="flex items-center justify-between">
            <ul className="flex items-center gap-8 h-9">
              {navLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-xs font-semibold tracking-widest text-ink hover:opacity-60 transition-opacity">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="text-xs tracking-widest text-gray-400 hover:text-ink transition-colors">
              Kontak
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
