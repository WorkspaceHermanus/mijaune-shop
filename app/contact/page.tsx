export const metadata = { title: "Kontak — Mijaune Shop" };

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24">
      <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">Kom praat</p>
        <h1 className="font-serif text-5xl font-bold">Kontak</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm">
        <div>
          <p className="uppercase tracking-widest text-xs text-gray-400 mb-4">Winkel Navrae</p>
          <p className="text-gray-600 leading-relaxed">
            Vrae oor bestellings, aflewering of produkte:<br />
            <a href="mailto:winkel@mijaune.co.za" className="text-accent hover:underline">
              winkel@mijaune.co.za
            </a>
          </p>
        </div>
        <div>
          <p className="uppercase tracking-widest text-xs text-gray-400 mb-4">Samewerking & Besprekings</p>
          <p className="text-gray-600 leading-relaxed">
            Opvoerings, onderhoude en projekte:<br />
            <a href="mailto:samewerking@mijaune.co.za" className="text-accent hover:underline">
              samewerking@mijaune.co.za
            </a>
          </p>
        </div>
      </div>

      <div className="mt-14 border-t border-gray-200 pt-10 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Volg my</p>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="text-sm uppercase tracking-widest hover:text-accent transition-colors"
        >
          Instagram →
        </a>
      </div>
    </div>
  );
}
