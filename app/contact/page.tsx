export const metadata = { title: "Kontak — Mijaune Shop" };

export default function ContactPage() {
  return (
    <div className="bg-[#080808] min-h-screen pt-16">
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-28">

        <p className="text-[9px] tracking-[0.35em] uppercase text-[#1a6fff] mb-4">Kom praat</p>
        <h1 className="mb-16"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem,7vw,6rem)", color: "#ede8dd", lineHeight: 1 }}>
          Kontak
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.05]">
          {[
            {
              title: "Winkel Navrae",
              body: "Vrae oor bestellings, aflewering of produkte:",
              email: "winkel@mijaune.co.za",
            },
            {
              title: "Samewerking & Besprekings",
              body: "Opvoerings, onderhoude en projekte:",
              email: "samewerking@mijaune.co.za",
            },
          ].map(block => (
            <div key={block.title} className="bg-[#080808] p-8 md:p-10">
              <p className="text-[9px] tracking-[0.28em] uppercase text-[#ede8dd]/25 mb-5">
                {block.title}
              </p>
              <p className="text-sm text-[#ede8dd]/40 leading-relaxed mb-4">{block.body}</p>
              <a href={`mailto:${block.email}`}
                className="text-sm text-[#1a6fff] hover:text-[#ede8dd] transition-colors">
                {block.email}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-white/[0.05] text-center">
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#ede8dd]/20 mb-6">Volg my</p>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"
            className="text-[10px] font-semibold tracking-[0.28em] uppercase
              text-[#ede8dd]/35 hover:text-[#ede8dd] transition-colors">
            Instagram →
          </a>
        </div>
      </div>
    </div>
  );
}
