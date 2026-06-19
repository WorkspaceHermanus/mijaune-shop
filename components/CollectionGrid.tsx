import Link from "next/link";
import Image from "next/image";

const collections = [
  {
    title: "Kuns",
    sub: "Fotografie & Drukke",
    href: "/art",
    image: "/images/no-motor-boats.jpg",
  },
  {
    title: "Boeke & Woorde",
    sub: "Digbundels & Verhale",
    href: "/books",
    image: null,
  },
  {
    title: "Video's",
    sub: "Dokumentêrs & Kort Films",
    href: "/videos",
    image: null,
  },
];

export default function CollectionGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <p className="text-[10px] uppercase tracking-[0.25em] text-dust mb-14 text-center">Versamelings</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10">
        {collections.map((c) => (
          <Link key={c.href} href={c.href} className="group relative bg-paper overflow-hidden aspect-[3/4] flex flex-col">
            {c.image ? (
              <>
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/40 transition-colors" />
              </>
            ) : (
              <div className="absolute inset-0 bg-warm group-hover:bg-warm/80 transition-colors" />
            )}
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <p className="text-[9px] uppercase tracking-[0.25em] mb-2 text-paper/70">
                {c.sub}
              </p>
              <h3 className={`font-display text-3xl font-light italic leading-tight ${c.image ? "text-paper" : "text-ink"}`}>
                {c.title}
              </h3>
              <span className={`text-[9px] uppercase tracking-[0.2em] mt-4 border-b pb-0.5 w-fit transition-colors ${c.image ? "text-paper/60 border-paper/40 group-hover:border-paper group-hover:text-paper" : "text-dust border-dust/40 group-hover:border-ink group-hover:text-ink"}`}>
                Sien alles
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
