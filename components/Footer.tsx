import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <p className="font-serif text-xl font-bold mb-3">Mijaune Shop</p>
          <p className="text-gray-500 leading-relaxed">
            Boeke, video's en kuns — direk van die kunstenaar.
          </p>
        </div>

        <div>
          <p className="uppercase tracking-widest text-xs mb-4 text-gray-400">Navigasie</p>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="/books" className="hover:text-accent transition-colors">Boeke & Woorde</Link></li>
            <li><Link href="/videos" className="hover:text-accent transition-colors">Video's</Link></li>
            <li><Link href="/art" className="hover:text-accent transition-colors">Kuns</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Kontak</Link></li>
          </ul>
        </div>

        <div>
          <p className="uppercase tracking-widest text-xs mb-4 text-gray-400">Kontak</p>
          <ul className="space-y-2 text-gray-600">
            <li>winkel@mijaune.co.za</li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                Instagram
              </a>
            </li>
            <li className="text-xs text-gray-400 pt-2">Bestel via EFT — besonderhede by afrekening</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-10 pt-6 border-t border-gray-100 text-xs text-gray-400 text-center">
        © {new Date().getFullYear()} Mijaune. Alle regte voorbehou.
      </div>
    </footer>
  );
}
