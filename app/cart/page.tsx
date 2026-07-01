"use client";
import { useCart } from "@/lib/cart";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const { items, remove, total, clear } = useCart();
  const [ordered, setOrdered] = useState(false);

  if (ordered) {
    return (
      <div className="bg-[#080808] min-h-screen pt-16 flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center py-20">
          <div className="w-12 h-12 rounded-full border border-[#1a6fff]/40 flex items-center justify-center mx-auto mb-8">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9l4.5 4.5L15 4.5" stroke="#1a6fff" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#1a6fff] mb-4">Bestelling Ontvang</p>
          <h1 className="mb-8 leading-tight"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,6vw,4rem)", color: "#ede8dd" }}>
            Dankie!
          </h1>
          <p className="text-sm text-[#ede8dd]/40 leading-relaxed mb-8">
            Maak asseblief jou EFT-betaling oor na:
          </p>
          <div className="bg-[#0e0e0e] border border-white/[0.06] p-6 text-left text-sm space-y-3 mb-8">
            {[
              ["Bank", "[Bank Naam]"],
              ["Rekeninghouer", "Mijaune [Van]"],
              ["Rekeningnommer", "[000 000 0000]"],
              ["Takkode", "[000000]"],
              ["Verwysing", "Jou naam"],
              ["Bedrag", `R${total}`],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between">
                <span className="text-[#ede8dd]/30 text-[9px] tracking-[0.2em] uppercase pt-0.5">{k}</span>
                <span className="text-[#ede8dd]/80 font-medium">{v}</span>
              </div>
            ))}
          </div>
          <p className="text-[9px] text-[#ede8dd]/20 tracking-[0.15em] uppercase mb-10">
            Stuur betalingsbewys na winkel@mijaune.co.za
          </p>
          <Link href="/"
            className="inline-block text-[10px] font-semibold tracking-[0.28em] uppercase
              px-8 py-4 border border-white/10 text-[#ede8dd]/50
              hover:border-[#ede8dd]/30 hover:text-[#ede8dd] transition-all duration-300">
            Terug na Tuis
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="bg-[#080808] min-h-screen pt-16 flex items-center justify-center px-6">
        <div className="text-center py-24">
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#ede8dd]/20 mb-6">Mandjie</p>
          <h1 className="mb-8"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,6vw,4rem)", color: "#ede8dd" }}>
            Jou Mandjie is Leeg
          </h1>
          <Link href="/art"
            className="inline-block text-[10px] font-semibold tracking-[0.28em] uppercase
              px-8 py-4 bg-[#1a6fff] text-white
              hover:bg-[#ede8dd] hover:text-[#080808] transition-all duration-300">
            Sien Werke
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#080808] min-h-screen pt-16">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">

        <p className="text-[9px] tracking-[0.3em] uppercase text-[#ede8dd]/20 mb-6">Mandjie</p>
        <h1 className="mb-12"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,6vw,4rem)", color: "#ede8dd" }}>
          Jou Mandjie
        </h1>

        <div className="divide-y divide-white/[0.06]">
          {items.map(item => (
            <div key={item.id} className="flex items-center justify-between py-5 gap-4">
              <div className="flex-1">
                <p className="text-sm font-medium text-[#ede8dd]/80">{item.name}</p>
                <p className="text-[10px] tracking-[0.15em] uppercase text-[#ede8dd]/25 mt-1">
                  Hoeveelheid: {item.qty}
                </p>
              </div>
              <p className="text-sm font-semibold text-[#ede8dd]/70">R{item.price * item.qty}</p>
              <button onClick={() => remove(item.id)}
                className="text-[9px] tracking-[0.2em] uppercase text-[#ede8dd]/20
                  hover:text-red-400 transition-colors">
                Verwyder
              </button>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-6 mt-2 flex items-center justify-between mb-10">
          <span className="text-sm tracking-[0.2em] uppercase text-[#ede8dd]/40">Totaal</span>
          <span className="text-2xl font-semibold text-[#ede8dd]">R{total}</span>
        </div>

        <div className="bg-[#0e0e0e] border border-white/[0.05] p-5 mb-6">
          <p className="text-[9px] tracking-[0.25em] uppercase text-[#ede8dd]/30 mb-2">Betaalmetode: EFT</p>
          <p className="text-xs text-[#ede8dd]/35 leading-relaxed">
            Klik "Bevestig Bestelling". Bankbesonderhede verskyn op die volgende bladsy.
          </p>
        </div>

        <button onClick={() => { setOrdered(true); clear(); }}
          className="w-full py-4 text-[10px] font-semibold tracking-[0.3em] uppercase
            bg-[#1a6fff] text-white
            hover:bg-[#ede8dd] hover:text-[#080808]
            transition-all duration-300">
          Bevestig Bestelling
        </button>
      </div>
    </div>
  );
}
