"use client";
import Link from "next/link";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <div className="group flex flex-col">
      <Link href={`/product/${product.slug}`} className="block overflow-hidden bg-gray-100 aspect-square mb-4">
        <div className="w-full h-full flex items-center justify-center text-gray-300 group-hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-gray-100 to-gray-200">
          <span className="font-serif text-4xl text-gray-300">M</span>
        </div>
      </Link>
      <div className="flex-1 flex flex-col">
        <Link href={`/product/${product.slug}`} className="font-serif text-lg font-medium hover:text-accent transition-colors">
          {product.name}
        </Link>
        <p className="text-sm text-gray-500 mt-1 mb-3 flex-1">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-medium">R{product.price}</span>
          <button
            onClick={() => add(product)}
            className="text-xs uppercase tracking-widest border border-ink px-4 py-2 hover:bg-ink hover:text-cream transition-colors"
          >
            In Mandjie
          </button>
        </div>
      </div>
    </div>
  );
}
