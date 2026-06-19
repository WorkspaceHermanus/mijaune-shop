"use client";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const { add } = useCart();

  const categoryLabel: Record<string, string> = { books: "Boeke & Woorde", videos: "Video's", art: "Kuns" };
  const categoryHref: Record<string, string> = { books: "/books", videos: "/videos", art: "/art" };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <p className="text-[9px] uppercase tracking-[0.2em] text-dust mb-12">
        <Link href={categoryHref[product.category]} className="hover:text-ink transition-colors">
          {categoryLabel[product.category]}
        </Link>
        <span className="mx-3 text-dust/40">/</span>
        {product.name}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="relative aspect-[3/4] bg-warm">
          {product.image && !product.image.includes("placeholder") ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-display text-8xl font-light italic text-dust">M</span>
            </div>
          )}
        </div>

        <div className="md:pt-8 flex flex-col">
          <p className="text-[9px] uppercase tracking-[0.25em] text-dust mb-4">{categoryLabel[product.category]}</p>
          <h1 className="font-display text-5xl font-light italic mb-6 leading-tight">{product.name}</h1>
          <p className="text-[13px] text-dust leading-relaxed mb-10">{product.description}</p>
          <p className="font-display text-3xl font-light mb-10">R{product.price}</p>

          <button
            onClick={() => add(product)}
            className="w-full border border-ink py-4 text-[9px] uppercase tracking-[0.25em] hover:bg-ink hover:text-paper transition-colors"
          >
            Voeg by Mandjie
          </button>

          <p className="text-[9px] text-dust/60 mt-5 text-center tracking-wide">
            Betaling via EFT — besonderhede word by afrekening verskaf
          </p>
        </div>
      </div>
    </div>
  );
}
