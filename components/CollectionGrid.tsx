import Link from "next/link";
import Image from "next/image";

const collections = [
  { title: "VIDEO VIR MY", href: "/videos", image: "/images/blanket-in-the-sky.jpg" },
  { title: "BOEKE EN WOORDE", href: "/books", image: "/images/no-motor-boats.jpg" },
  { title: "KUNS", href: "/art", image: "/images/zamalekker.jpg" },
];

export default function CollectionGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3" id="collection-list-grid">
      {collections.map((c) => (
        <Link
          key={c.href}
          href={c.href}
          title={`Browse our ${c.title} collection`}
          className="featured-card group relative block overflow-hidden"
          style={{ minHeight: 380 }}
        >
          {/* Background image */}
          <Image
            src={c.image}
            alt={c.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          {/* White card header — top left, exactly like Venture */}
          <div className="featured-card__header featured-card__header--background absolute top-0 left-0 z-10">
            <p className="text-lg font-black uppercase leading-tight tracking-wide text-ink"
               style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
              {c.title}
            </p>
            <span className="featured-card__action block text-xs font-semibold tracking-widest uppercase mt-1.5"
                  style={{ color: "#c9a227" }}>
              View all
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
