"use client";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const MAX_BOX_H = 76; // px — tallest illustration (A2)
const LONGEST_CM = 59; // A2 long edge

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);
  if (!product) notFound();

  const { add } = useCart();
  const isArt = product.category === "art";
  const hasImage = product.image && !product.image.includes("placeholder");
  const catLabel = isArt ? "Kuns" : "Boeke & Woorde";
  const catHref  = isArt ? "/art" : "/books";

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]);
  const displayPrice = selectedSize ? selectedSize.price : product.price;

  const handleAdd = () => {
    if (selectedSize) {
      add({
        ...product,
        id: `${product.id}-${selectedSize.label}`,
        name: `${product.name} (${selectedSize.label})`,
        price: selectedSize.price,
      });
    } else {
      add(product);
    }
  };

  return (
    <div style={{ backgroundColor: "#faf8f2" }} className="min-h-screen pt-14">

      {/* Breadcrumb */}
      <div className="px-6 md:px-12 pt-8">
        <p className="text-[9px] tracking-[0.28em] uppercase" style={{ color: "#bbb" }}>
          <Link href={catHref} className="hover:text-[#1c1c1c] transition-colors">{catLabel}</Link>
          <span className="mx-2">/</span>
          {product.name}
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 py-10 md:py-16
        grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">

        {/* Image */}
        {hasImage ? (
          <div className={`relative aspect-[4/5] ${isArt ? "watermarked" : ""} img-wrap`}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={92}
              priority
            />
          </div>
        ) : (
          <div className="aspect-[4/5] flex items-center justify-center"
            style={{ backgroundColor: "#ede9e0" }}>
            <span className="text-9xl font-light select-none"
              style={{ fontFamily: "var(--font-display)", color: "#c8c2b5" }}>
              {product.name[0]}
            </span>
          </div>
        )}

        {/* Details */}
        <div className="flex flex-col md:pt-2">
          <p className="text-[9px] tracking-[0.3em] uppercase mb-5" style={{ color: "#bbb" }}>
            {catLabel}
          </p>
          <h1 className="font-light leading-tight mb-5"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              color: "#1c1c1c",
              letterSpacing: "-0.02em",
            }}>
            {product.name}
          </h1>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "#999" }}>
            {product.description}
          </p>

          {isArt && product.sizes && (
            <div className="mb-10">
              <p className="text-[9px] tracking-[0.28em] uppercase mb-5" style={{ color: "#bbb" }}>
                Kies grootte
              </p>
              <div className="flex items-end gap-6 md:gap-8">
                {product.sizes.map(s => {
                  const [w, , h] = s.cm.split(" ");
                  const hCm = parseFloat(h);
                  const wCm = parseFloat(w);
                  const boxH = Math.round((hCm / LONGEST_CM) * MAX_BOX_H);
                  const boxW = Math.round((wCm / LONGEST_CM) * MAX_BOX_H);
                  const active = selectedSize?.label === s.label;
                  return (
                    <button
                      key={s.label}
                      onClick={() => setSelectedSize(s)}
                      className="flex flex-col items-center gap-3 transition-opacity"
                      style={{ opacity: active ? 1 : 0.45 }}
                    >
                      <div className="flex items-end justify-center" style={{ height: MAX_BOX_H }}>
                        <div
                          style={{
                            width: boxW,
                            height: boxH,
                            border: active ? "2px solid #1a6fff" : "1.5px solid #1c1c1c",
                            backgroundColor: active ? "rgba(26,111,255,0.06)" : "transparent",
                            transition: "all 0.25s ease",
                          }}
                        />
                      </div>
                      <p className="text-xs font-medium" style={{ color: active ? "#1a6fff" : "#1c1c1c" }}>
                        {s.label}
                      </p>
                      <p className="text-[9px] tracking-[0.1em]" style={{ color: "#bbb" }}>
                        {s.cm}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <p className="text-2xl font-medium mb-10" style={{ color: "#1c1c1c" }}>
            R{displayPrice}
          </p>

          <button onClick={handleAdd}
            className="w-full py-4 text-[9px] font-semibold tracking-[0.35em] uppercase
              transition-all duration-300 mb-4"
            style={{ backgroundColor: "#1c1c1c", color: "#faf8f2" }}
            onMouseEnter={e => {
              (e.target as HTMLButtonElement).style.backgroundColor = "#1a6fff";
            }}
            onMouseLeave={e => {
              (e.target as HTMLButtonElement).style.backgroundColor = "#1c1c1c";
            }}>
            Voeg by Mandjie
          </button>

          <p className="text-[9px] tracking-[0.2em] uppercase text-center" style={{ color: "#bbb" }}>
            Betaling via EFT · Besonderhede by afrekening
          </p>

          {isArt && (
            <div className="mt-10 pt-8 grid grid-cols-3 gap-4 text-center"
              style={{ borderTop: "1px solid #e4dfd4" }}>
              {["Beperkte Oplaag", "Gesigneer", "Genommer"].map(tag => (
                <p key={tag} className="text-[9px] tracking-[0.2em] uppercase" style={{ color: "#bbb" }}>
                  {tag}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
