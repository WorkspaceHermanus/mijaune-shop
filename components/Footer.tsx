import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 py-16 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-[11px]">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-2xl font-light italic mb-4">Mijaune</p>
          <p className="text-dust leading-relaxed">
            Fotografie, boeke en kuns —<br />direk van die kunstenaar.
          </p>
        </div>

        <div>
          <p className="uppercase tracking-[0.2em] text-[9px] text-dust mb-5">Winkel</p>
          <ul className="space-y-3 text-ink/60">
            <li><Link href="/art" className="hover:text-ink transition-colors">Kuns</Link></li>
            <li><Link href="/books" className="hover:text-ink transition-colors">Boeke & Woorde</Link></li>
            <li><Link href="/videos" className="hover:text-ink transition-colors">Video's</Link></li>
          </ul>
        </div>

        <div>
          <p className="uppercase tracking-[0.2em] text-[9px] text-dust mb-5">Kontak</p>
          <ul className="space-y-3 text-ink/60">
            <li><Link href="/contact" className="hover:text-ink transition-colors">Kontak My</Link></li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-ink transition-colors">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="uppercase tracking-[0.2em] text-[9px] text-dust mb-5">Betaling</p>
          <p className="text-ink/60 leading-relaxed">EFT — besonderhede word by afrekening verskaf.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-14 pt-6 border-t border-ink/10 text-[9px] text-dust tracking-[0.15em] uppercase">
        © {new Date().getFullYear()} Mijaune — Alle regte voorbehou
      </div>
    </footer>
  );
}
