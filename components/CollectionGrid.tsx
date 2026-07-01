import Link from "next/link";
import Image from "next/image";

const collections = [
  { title: "BOEKE EN WOORDE", href: "/books", image: "/images/no-motor-boats.jpg" },
  { title: "KUNS", href: "/art", image: "/images/zamalekker.jpg" },
];

export default function CollectionGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
      {collections.map((c) => (
        <Link
          key={c.href}
          href={c.href}
          className="featured-card group relative block overflow-hidden"
          style={{ minHeight: 320 }}
        >
          <Image
            src={c.image}
            alt={c.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          {/* White card top-left — exactly like Venture theme */}
          <div className="featured-card__header featured-card__header--background absolute top-0 left-0 z-10">
            <p className="text-lg font-black uppercase leading-tight tracking-wide" style={{ color: "#444" }}>
              {c.title}
            </p>
            <span className="featured-card__action block text-xs font-semibold tracking-widest uppercase mt-1.5">
              View all
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
