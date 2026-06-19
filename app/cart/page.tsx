"use client";
import { useCart } from "@/lib/cart";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const { items, remove, total, clear } = useCart();
  const [ordered, setOrdered] = useState(false);

  if (ordered) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="font-serif text-4xl font-bold mb-6">Bestelling Ontvang!</h1>
        <p className="text-gray-600 mb-4">
          Dankie vir jou bestelling. Maak asseblief jou EFT-betaling oor na:
        </p>
        <div className="bg-[#e8e0d5] rounded p-6 text-left max-w-sm mx-auto text-sm mb-8 space-y-2">
          <p><strong>Bank:</strong> [Bank Naam]</p>
          <p><strong>Rekeninghouer:</strong> Mijaune [Van]</p>
          <p><strong>Rekeningnommer:</strong> [000 000 0000]</p>
          <p><strong>Takkode:</strong> [000000]</p>
          <p><strong>Verwysing:</strong> Jou naam</p>
          <p><strong>Bedrag:</strong> R{total}</p>
        </div>
        <p className="text-xs text-gray-400 mb-8">
          Stuur betalingsbewys na winkel@mijaune.co.za. Bestelling word verwerk na bevestiging.
        </p>
        <Link href="/" className="border border-ink px-8 py-3 text-sm uppercase tracking-widest hover:bg-ink hover:text-cream transition-colors">
          Terug na Tuis
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="font-serif text-4xl font-bold mb-6">Jou Mandjie</h1>
        <p className="text-gray-500 mb-8">Jou mandjie is leeg.</p>
        <Link href="/" className="border border-ink px-8 py-3 text-sm uppercase tracking-widest hover:bg-ink hover:text-cream transition-colors">
          Gaan Koop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="font-serif text-4xl font-bold mb-10">Jou Mandjie</h1>

      <div className="divide-y divide-gray-200">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-5 gap-4">
            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">Hoeveelheid: {item.qty}</p>
            </div>
            <p className="font-medium">R{item.price * item.qty}</p>
            <button
              onClick={() => remove(item.id)}
              className="text-xs text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest"
            >
              Verwyder
            </button>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-6 mt-6 flex items-center justify-between">
        <span className="font-serif text-xl font-bold">Totaal</span>
        <span className="font-serif text-xl font-bold">R{total}</span>
      </div>

      <div className="mt-8 bg-[#e8e0d5] p-6 text-sm text-gray-700 rounded">
        <p className="font-medium mb-2">Betaalmetode: EFT</p>
        <p>Klik "Bevestig Bestelling" hieronder. Bankbesonderhede sal op die volgende bladsy verskyn.</p>
      </div>

      <button
        onClick={() => setOrdered(true)}
        className="w-full mt-6 bg-ink text-cream py-4 text-sm uppercase tracking-widest hover:bg-accent transition-colors"
      >
        Bevestig Bestelling
      </button>
    </div>
  );
}
