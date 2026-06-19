import Image from "next/image";

export default function ContactSection() {
  return (
    <div className="relative w-full overflow-hidden" style={{ minHeight: 320 }}>
      <div className="flex flex-col md:flex-row h-full">
        {/* Text overlay — left side */}
        <div className="relative z-10 md:w-2/5 p-10 md:p-14 flex flex-col justify-center"
          style={{ backgroundColor: "#fffdf5" }}>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "#444" }}>
            KONTAK ONS
          </h4>
          <div className="text-sm leading-loose" style={{ color: "#444" }}>
            <p><strong>Winkel navrae:</strong></p>
            <p>winkel@mijaune.co.za</p>
            <br />
            <p><strong>Samewerking & Besprekings:</strong></p>
            <p>samewerking@mijaune.co.za</p>
          </div>
        </div>

        {/* Background image — right side */}
        <div className="relative md:w-3/5 h-64 md:h-auto">
          <Image
            src="/images/outside-stanford.jpg"
            alt="Kontak"
            fill
            className="object-cover object-bottom-right"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>
      </div>
    </div>
  );
}
