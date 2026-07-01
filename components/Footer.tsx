import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#faf8f2", borderTop: "1px solid #e4dfd4" }}>
      <div className="px-6 md:px-10 py-14 md:py-20 flex flex-col md:flex-row md:items-end justify-between gap-10">

        {/* Tagline */}
        <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3rem)", color: "#1c1c1c" }}
          className="leading-tight">
          Gaan koop<br />iets mooi
        </p>

        {/* Links */}
        <div className="flex flex-col md:items-end gap-5">
          <nav className="flex flex-col md:items-end gap-3">
            {[
              { href: "/art",     label: "Kuns" },
              { href: "/books",   label: "Boeke en Woorde" },
              { href: "/contact", label: "Kontak" },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="text-[9px] font-medium tracking-[0.3em] uppercase transition-colors"
                style={{ color: "#bbb" }}>
                {l.label}
              </Link>
            ))}
          </nav>

          <a href="https://instagram.com" target="_blank" rel="noreferrer"
            className="transition-colors" style={{ color: "#bbb" }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.3">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
            </svg>
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>

      <div className="px-6 md:px-10 py-4 flex flex-col md:flex-row md:justify-between gap-1"
        style={{ borderTop: "1px solid #e4dfd4" }}>
        <small className="text-[9px] tracking-[0.2em] uppercase" style={{ color: "#ccc" }}>
          &copy; {new Date().getFullYear()} Mijaune Shop
        </small>
        <small className="text-[9px] tracking-[0.2em] uppercase" style={{ color: "#ccc" }}>
          Betaling via EFT · Hermanus
        </small>
      </div>
    </footer>
  );
}
