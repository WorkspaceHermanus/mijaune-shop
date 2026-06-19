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

  const categoryLabel: Record<string, string> = {
    books: "Boeke & Woorde",
    videos: "Video's",
    art: "Kuns",
  };
  const categoryHref: Record<string, string> = {
    books: "/books",
    videos: "/videos",
    art: "/art",
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-8">
        <Link href={categoryHref[product.category]} className="hover:text-accent">
          {categoryLabel[product.category]}
        </Link>
        {" / "}
        {product.name}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative aspect-square bg-gray-100">
          {product.image.includes("placeholder") ? (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
              <span className="font-serif text-8xl text-gray-300">M</span>
            </div>
          ) : (
            <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          )}
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-serif text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
          <p className="text-2xl font-medium mb-8">R{product.price}</p>
          <button
            onClick={() => add(product)}
            className="w-full bg-ink text-cream py-4 text-sm uppercase tracking-widest hover:bg-accent transition-colors"
          >
            Voeg by Mandjie
          </button>
          <p className="text-xs text-gray-400 mt-4 text-center">
            Betaling via EFT — besonderhede word by afrekening verskaf
          </p>
        </div>
      </div>
    </div>
  );
}
