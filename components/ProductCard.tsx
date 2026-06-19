"use client";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <div className="group flex flex-col">
      <Link href={`/product/${product.slug}`}
        className="block relative overflow-hidden bg-gray-100 mb-3"
        style={{ aspectRatio: "3/4" }}>
        {product.image && !product.image.includes("placeholder") ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <span className="text-3xl font-black uppercase text-gray-300">M</span>
          </div>
        )}
      </Link>
      <Link href={`/product/${product.slug}`}
        className="text-sm font-semibold tracking-wide text-ink hover:text-mustard transition-colors mb-1">
        {product.name}
      </Link>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">R{product.price}</span>
        <button onClick={() => add(product)}
          className="text-xs font-semibold uppercase tracking-widest hover:text-mustard transition-colors"
          style={{ color: "#c9a227" }}>
          + Mandjie
        </button>
      </div>
    </div>
  );
}
