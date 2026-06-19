import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10 text-xs">
        <div>
          <p className="font-bold uppercase tracking-widest mb-5 text-ink">Mijaune Shop</p>
          <p className="text-ink/60 leading-relaxed">
            Fotografie, boeke en kuns —<br />direk van die kunstenaar.
          </p>
        </div>
        <div>
          <p className="font-bold uppercase tracking-widest mb-5 text-ink">Versamelings</p>
          <ul className="space-y-3 text-ink/60">
            <li><Link href="/art" className="hover:text-mustard transition-colors uppercase tracking-wide">Kuns</Link></li>
            <li><Link href="/books" className="hover:text-mustard transition-colors uppercase tracking-wide">Boeke & Woorde</Link></li>
            <li><Link href="/videos" className="hover:text-mustard transition-colors uppercase tracking-wide">Video's</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold uppercase tracking-widest mb-5 text-ink">Info</p>
          <ul className="space-y-3 text-ink/60">
            <li><Link href="/contact" className="hover:text-mustard transition-colors uppercase tracking-wide">Kontak</Link></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-mustard transition-colors uppercase tracking-wide">Instagram</a></li>
          </ul>
        </div>
        <div>
          <p className="font-bold uppercase tracking-widest mb-5 text-ink">Betaling</p>
          <p className="text-ink/60 leading-relaxed uppercase tracking-wide">
            EFT — besonderhede by afrekening.
          </p>
        </div>
      </div>
      <div className="border-t border-ink/10 py-5 px-6 text-center text-[10px] uppercase tracking-widest text-ink/40">
        © {new Date().getFullYear()} Mijaune — Alle regte voorbehou
      </div>
    </footer>
  );
}
