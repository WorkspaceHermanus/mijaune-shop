import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-[#080808]">
      <div className="px-6 md:px-10 py-16 md:py-20 flex flex-col md:flex-row md:items-end justify-between gap-10">

        {/* Left — tagline */}
        <div>
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#ede8dd]/20 mb-4">Mijaune Shop</p>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3.5rem)", color: "#ede8dd" }}
            className="leading-tight">
            Gaan koop<br />iets mooi
          </h4>
        </div>

        {/* Right — links + social */}
        <div className="flex flex-col gap-6 md:items-end">
          <nav className="flex flex-col md:items-end gap-3">
            {[
              { href: "/art",     label: "Kuns" },
              { href: "/books",   label: "Boeke en Woorde" },
              { href: "/contact", label: "Kontak" },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="text-[10px] font-semibold tracking-[0.25em] uppercase
                  text-[#ede8dd]/30 hover:text-[#ede8dd] transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <a href="https://instagram.com" target="_blank" rel="noreferrer"
            className="text-[#ede8dd]/25 hover:text-[#ede8dd] transition-colors">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04] px-6 md:px-10 py-5
        flex flex-col md:flex-row md:justify-between gap-2
        text-[9px] tracking-[0.2em] uppercase text-[#ede8dd]/18">
        <span>&copy; {new Date().getFullYear()} Mijaune Shop</span>
        <span>Betaling via EFT · Hermanus, SA</span>
      </div>
    </footer>
  );
}
