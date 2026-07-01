"use client";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);
  if (!product) notFound();

  const { add } = useCart();

  const catLabel: Record<string, string> = { books: "Boeke & Woorde", art: "Kuns" };
  const catHref:  Record<string, string> = { books: "/books", art: "/art" };
  const isArt = product.category === "art";
  const hasImage = product.image && !product.image.includes("placeholder");

  return (
    <div className="bg-[#080808] min-h-screen pt-16">

      {/* Breadcrumb */}
      <div className="px-6 md:px-12 pt-10 pb-0">
        <p className="text-[9px] tracking-[0.28em] uppercase text-[#ede8dd]/25">
          <Link href={catHref[product.category]}
            className="hover:text-[#ede8dd]/60 transition-colors">
            {catLabel[product.category]}
          </Link>
          <span className="mx-3 opacity-30">/</span>
          <span className="text-[#ede8dd]/40">{product.name}</span>
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-20
        grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">

        {/* Image */}
        <div className={`relative overflow-hidden ${isArt && hasImage ? "watermarked" : ""}`}>
          {hasImage ? (
            <div className="aspect-[4/5] relative">
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
            <div className="aspect-[4/5] bg-[#0e0e0e] border border-white/[0.05]
              flex items-center justify-center">
              <span className="text-9xl font-bold select-none"
                style={{ fontFamily: "var(--font-display)", color: "#1a2a4a" }}>
                {product.name[0]}
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col md:pt-4">
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#1a6fff] mb-5">
            {catLabel[product.category]}
          </p>
          <h1 className="leading-tight mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem,5vw,4rem)",
              color: "#ede8dd",
            }}>
            {product.name}
          </h1>
          <p className="text-sm text-[#ede8dd]/40 leading-relaxed mb-8">
            {product.description}
          </p>
          <p className="text-3xl font-semibold text-[#ede8dd] mb-10">R{product.price}</p>

          <button onClick={() => add(product)}
            className="w-full py-4 text-[10px] font-semibold tracking-[0.3em] uppercase
              bg-[#1a6fff] text-white
              hover:bg-[#ede8dd] hover:text-[#080808]
              transition-all duration-300 mb-4">
            Voeg by Mandjie
          </button>
          <p className="text-[9px] tracking-[0.2em] uppercase text-center text-[#ede8dd]/18">
            Betaling via EFT · Besonderhede by afrekening
          </p>

          {isArt && (
            <div className="mt-10 pt-8 border-t border-white/[0.06]
              grid grid-cols-3 gap-4 text-center">
              {["Beperkte Oplaag", "Gesigneer", "Genommer"].map(tag => (
                <div key={tag}>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[#ede8dd]/25">{tag}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
