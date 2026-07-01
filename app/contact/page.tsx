export const metadata = { title: "Kontak — Mijaune Shop" };

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "#faf8f2" }} className="min-h-screen pt-14">
      <div className="max-w-2xl mx-auto px-6 md:px-10 py-14 md:py-24">

        <p className="text-[9px] tracking-[0.35em] uppercase mb-4" style={{ color: "#bbb" }}>Kom praat</p>
        <h1 className="font-light leading-none mb-14"
          style={{ fontFamily: "var(--font-body)", fontSize: "clamp(2.5rem,6vw,5rem)", color: "#1c1c1c", letterSpacing: "-0.02em" }}>
          Kontak
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { title: "Winkel Navrae", body: "Vrae oor bestellings, aflewering of produkte:", email: "winkel@mijaune.co.za" },
            { title: "Samewerking", body: "Opvoerings, onderhoude en projekte:", email: "samewerking@mijaune.co.za" },
          ].map(block => (
            <div key={block.title}>
              <p className="text-[9px] tracking-[0.28em] uppercase mb-4" style={{ color: "#bbb" }}>{block.title}</p>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#999" }}>{block.body}</p>
              <a href={`mailto:${block.email}`}
                className="text-sm transition-colors"
                style={{ color: "#1a6fff" }}>
                {block.email}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 text-center" style={{ borderTop: "1px solid #e4dfd4" }}>
          <p className="text-[9px] tracking-[0.3em] uppercase mb-5" style={{ color: "#bbb" }}>Volg my</p>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"
            className="text-[9px] font-medium tracking-[0.3em] uppercase transition-colors"
            style={{ color: "#999" }}>
            Instagram →
          </a>
        </div>
      </div>
    </div>
  );
}
