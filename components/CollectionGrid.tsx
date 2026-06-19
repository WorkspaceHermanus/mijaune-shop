import Link from "next/link";
import Image from "next/image";

const collections = [
  {
    title: "VIDEO\nVIR MY",
    href: "/videos",
    image: "/images/blanket-in-the-sky.jpg",
  },
  {
    title: "BOEKE EN\nWOORDE",
    href: "/books",
    image: null,
    bg: "bg-stone-300",
  },
  {
    title: "KUNS",
    href: "/art",
    image: "/images/zamalekker.jpg",
  },
];

export default function CollectionGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-0">
      {collections.map((c) => (
        <Link key={c.href} href={c.href} className="group relative block overflow-hidden" style={{ height: "380px" }}>
          {/* Background image or colour */}
          {c.image ? (
            <Image
              src={c.image}
              alt={c.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className={`absolute inset-0 ${c.bg}`} />
          )}

          {/* White card label — top left, like Reenwolf */}
          <div className="absolute top-6 left-6 bg-cream p-4 min-w-[140px]">
            <p className="text-base font-bold uppercase leading-tight whitespace-pre-line text-ink">
              {c.title}
            </p>
            <p className="text-[10px] uppercase tracking-widest text-mustard font-semibold mt-1.5">
              View All
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}
