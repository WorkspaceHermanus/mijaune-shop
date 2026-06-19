import Link from "next/link";

const collections = [
  {
    title: "Boeke & Woorde",
    description: "Digbundels, verhale en woorde wat bly.",
    href: "/books",
    bg: "bg-[#e8e0d5]",
  },
  {
    title: "Video's",
    description: "Dokumentêrs, musiekvideo's en visuele essays.",
    href: "/videos",
    bg: "bg-[#dde4ed]",
  },
  {
    title: "Kuns",
    description: "Oorspronklike skilderye, drukke en gemengde media.",
    href: "/art",
    bg: "bg-[#e4ded8]",
  },
];

export default function CollectionGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="font-serif text-3xl font-bold text-center mb-12">Versamelings</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map((c) => (
          <Link key={c.href} href={c.href} className="group block">
            <div className={`${c.bg} aspect-[4/3] flex flex-col items-center justify-center p-8 text-center transition-opacity group-hover:opacity-90`}>
              <h3 className="font-serif text-2xl font-bold mb-2">{c.title}</h3>
              <p className="text-sm text-gray-600 mb-6">{c.description}</p>
              <span className="text-xs uppercase tracking-widest border-b border-ink pb-0.5 group-hover:border-accent group-hover:text-accent transition-colors">
                Sien alles →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
