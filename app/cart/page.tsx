"use client";
import { useCart } from "@/lib/cart";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const { items, remove, total, clear } = useCart();
  const [ordered, setOrdered] = useState(false);

  if (ordered) {
    return (
      <div style={{ backgroundColor: "#faf8f2" }} className="min-h-screen pt-14 flex items-center justify-center px-6">
        <div className="max-w-md w-full py-20 text-center">
          <div className="w-10 h-10 rounded-full border flex items-center justify-center mx-auto mb-8"
            style={{ borderColor: "#1a6fff" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7l3.5 3.5L12 3" stroke="#1a6fff" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-[9px] tracking-[0.35em] uppercase mb-4" style={{ color: "#bbb" }}>Order Received</p>
          <h1 className="font-light mb-8"
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,5vw,3.5rem)", color: "#1c1c1c", letterSpacing: "-0.02em" }}>
            Thank You!
          </h1>
          <p className="text-sm mb-8 leading-relaxed" style={{ color: "#999" }}>
            Please make your EFT payment to:
          </p>
          <div className="text-left p-6 mb-8 space-y-3" style={{ backgroundColor: "#f0ece3", border: "1px solid #e4dfd4" }}>
            {[
              ["Bank", "FNB"],
              ["Account Holder", "Mijaune"],
              ["Account Number", "62896300341"],
              ["Branch Code", "250655"],
              ["Reference", "Your name"],
              ["Amount", `R${total}`],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between text-sm">
                <span style={{ color: "#bbb" }}>{k}</span>
                <span style={{ color: "#1c1c1c" }}>{v}</span>
              </div>
            ))}
          </div>
          <p className="text-[9px] tracking-[0.2em] uppercase mb-10" style={{ color: "#bbb" }}>
            Send proof of payment to shop@mijaune.co.za
          </p>
          <Link href="/"
            className="text-[9px] font-medium tracking-[0.35em] uppercase px-8 py-3.5 inline-block transition-colors"
            style={{ border: "1px solid #d5cfc5", color: "#999" }}>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div style={{ backgroundColor: "#faf8f2" }} className="min-h-screen pt-14 flex items-center justify-center px-6">
        <div className="text-center py-24">
          <p className="text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: "#bbb" }}>Cart</p>
          <h1 className="font-light mb-8"
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,5vw,3.5rem)", color: "#1c1c1c", letterSpacing: "-0.02em" }}>
            Your Cart is Empty
          </h1>
          <Link href="/art"
            className="text-[9px] font-medium tracking-[0.35em] uppercase px-8 py-3.5 inline-block transition-colors"
            style={{ backgroundColor: "#1c1c1c", color: "#faf8f2" }}>
            View Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#faf8f2" }} className="min-h-screen pt-14">
      <div className="max-w-xl mx-auto px-6 py-14 md:py-20">

        <p className="text-[9px] tracking-[0.35em] uppercase mb-5" style={{ color: "#bbb" }}>Cart</p>
        <h1 className="font-light mb-12"
          style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2rem,5vw,3.5rem)", color: "#1c1c1c", letterSpacing: "-0.02em" }}>
          Your Cart
        </h1>

        <div style={{ borderTop: "1px solid #e4dfd4" }}>
          {items.map(item => (
            <div key={item.id} className="flex items-center justify-between py-5 gap-4"
              style={{ borderBottom: "1px solid #e4dfd4" }}>
              <div className="flex-1">
                <p className="text-sm font-medium" style={{ color: "#1c1c1c" }}>{item.name}</p>
                <p className="text-[9px] tracking-[0.15em] uppercase mt-1" style={{ color: "#bbb" }}>
                  Quantity: {item.qty}
                </p>
              </div>
              <p className="text-sm font-medium" style={{ color: "#1c1c1c" }}>R{item.price * item.qty}</p>
              <button onClick={() => remove(item.id)}
                className="text-[9px] tracking-[0.2em] uppercase transition-colors"
                style={{ color: "#ccc" }}>
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-6 pb-10">
          <span className="text-[9px] tracking-[0.25em] uppercase" style={{ color: "#999" }}>Total</span>
          <span className="text-xl font-medium" style={{ color: "#1c1c1c" }}>R{total}</span>
        </div>

        <div className="p-5 mb-6" style={{ backgroundColor: "#f0ece3", border: "1px solid #e4dfd4" }}>
          <p className="text-[9px] tracking-[0.25em] uppercase mb-2" style={{ color: "#bbb" }}>Payment Method: EFT</p>
          <p className="text-xs leading-relaxed" style={{ color: "#999" }}>
            Click "Confirm Order". Bank details will appear on the next page.
          </p>
        </div>

        <button onClick={() => { setOrdered(true); clear(); }}
          className="w-full py-4 text-[9px] font-semibold tracking-[0.35em] uppercase transition-colors"
          style={{ backgroundColor: "#1c1c1c", color: "#faf8f2" }}>
          Confirm Order
        </button>
      </div>
    </div>
  );
}
