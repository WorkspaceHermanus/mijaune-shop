"use client";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const isArt = product.category === "art";
  const hasImage = product.image && !product.image.includes("placeholder");

  return (
    <div className="group flex flex-col">
      {/* Image — smaller with generous margin, watermarked if art */}
      <Link
        href={`/product/${product.slug}`}
        className={`block relative overflow-hidden bg-gray-100 mb-5 mx-2 ${isArt && hasImage ? "watermarked" : ""}`}
        style={{ aspectRatio: "3/4" }}
      >
        {hasImage ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <span className="text-3xl font-bold text-gray-300" style={{ fontFamily: "var(--font-display)", color: "#1a6fff", opacity: 0.3 }}>M</span>
          </div>
        )}
      </Link>

      {/* Text info */}
      <div className="px-2">
        <Link href={`/product/${product.slug}`}
          className="block text-sm font-semibold tracking-wide text-ink hover:opacity-60 transition-opacity mb-1">
          {product.name}
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">R{product.price}</span>
          <button
            onClick={() => add(product)}
            className="text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-60"
            style={{ color: "#1a6fff" }}
          >
            + Mandjie
          </button>
        </div>
      </div>
    </div>
  );
}
