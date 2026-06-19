"use client";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <div className="group flex flex-col">
      <Link href={`/product/${product.slug}`} className="block overflow-hidden bg-warm relative aspect-[3/4] mb-5">
        {product.image && !product.image.includes("placeholder") ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-display text-6xl font-light italic text-dust">M</span>
          </div>
        )}
      </Link>
      <div className="flex flex-col gap-1">
        <Link href={`/product/${product.slug}`} className="font-display text-xl font-light italic hover:text-dust transition-colors">
          {product.name}
        </Link>
        <div className="flex items-center justify-between mt-3">
          <span className="text-[11px] text-dust tracking-wide">R{product.price}</span>
          <button
            onClick={() => add(product)}
            className="text-[9px] uppercase tracking-[0.2em] text-ink/50 hover:text-ink border-b border-ink/20 hover:border-ink pb-px transition-colors"
          >
            In Mandjie
          </button>
        </div>
      </div>
    </div>
  );
}
