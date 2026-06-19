"use client";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <div className="group flex flex-col">
      <Link href={`/product/${product.slug}`} className="block overflow-hidden bg-stone-200 relative aspect-[3/4] mb-4">
        {product.image && !product.image.includes("placeholder") ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-stone-200">
            <span className="text-4xl font-bold uppercase text-stone-400">M</span>
          </div>
        )}
      </Link>
      <Link href={`/product/${product.slug}`} className="text-sm font-semibold uppercase tracking-wide text-ink hover:text-mustard transition-colors mb-1">
        {product.name}
      </Link>
      <div className="flex items-center justify-between mt-1">
        <span className="text-sm text-ink/60">R{product.price}</span>
        <button
          onClick={() => add(product)}
          className="text-[10px] uppercase tracking-widest text-mustard font-semibold hover:text-ink transition-colors"
        >
          + Mandjie
        </button>
      </div>
    </div>
  );
}
