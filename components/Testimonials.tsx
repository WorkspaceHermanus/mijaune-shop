const quotes = [
  {
    source: "Vrye Weekblad",
    text: "\"Mijaune se lens vang wat taal soms nie kan sê nie. Haar beelde bly lank ná jy dit gesien het — soos iemand wat weet wanneer om stil te bly.\"",
    credit: "— Bibi Slippers",
  },
  {
    source: "Vrye Weekblad",
    text: "\"Dit is asof die stilte haar smart deel. Mense staan tranerig. Sy skiet oor verlies. Sy skiet oor heiling. Die foto's bly teen jou vel.\"",
    credit: "— Karl Kemp",
  },
  {
    source: "Klyntji",
    text: "\"ʼn Stem wat die Afrikaanse kunswêreld nodig het — rou, eerlik en onvergeetlik in elke raam.\"",
    credit: "— Gert Coetzer",
  },
];

export default function Testimonials() {
  return (
    <div className="page-width px-4 md:px-8 py-16">
      <div className="section-block section-block--padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {quotes.map((q, i) => (
            <div key={i} className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#444" }}>
                {q.source}
              </p>
              <div className="text-sm leading-relaxed" style={{ color: "#444" }}>
                <p>{q.text}</p>
                <p className="mt-3 italic">{q.credit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
