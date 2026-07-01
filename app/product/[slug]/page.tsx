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
    <div className="max-w-6xl mx-auto px-6 py-14">
      <p className="text-[10px] uppercase tracking-widest text-ink/40 mb-10">
        <Link href={categoryHref[product.category]} className="hover:text-mustard transition-colors">
          {categoryLabel[product.category]}
        </Link>
        <span className="mx-2">/</span>
        {product.name}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className={`relative aspect-[3/4] bg-stone-200 ${product.category === "art" && product.image && !product.image.includes("placeholder") ? "watermarked" : ""}`}>
          {product.image && !product.image.includes("placeholder") ? (
            <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-6xl font-bold uppercase text-stone-400">M</span>
            </div>
          )}
        </div>

        <div className="flex flex-col md:pt-6">
          <p className="text-[10px] uppercase tracking-widest text-mustard font-semibold mb-3">{categoryLabel[product.category]}</p>
          <h1 className="text-5xl font-bold mb-5 leading-tight" style={{ fontFamily: "var(--font-display)", color: "#1a6fff" }}>{product.name}</h1>
          <p className="text-sm text-ink/60 leading-relaxed mb-8">{product.description}</p>
          <p className="text-2xl font-bold text-ink mb-8">R{product.price}</p>

          <button
            onClick={() => add(product)}
            className="w-full bg-ink text-cream text-xs uppercase tracking-widest font-semibold py-4 hover:bg-mustard hover:text-ink transition-colors"
          >
            Voeg by Mandjie
          </button>
          <p className="text-[10px] text-ink/40 mt-4 text-center uppercase tracking-widest">
            Betaling via EFT — besonderhede by afrekening
          </p>
        </div>
      </div>
    </div>
  );
}
