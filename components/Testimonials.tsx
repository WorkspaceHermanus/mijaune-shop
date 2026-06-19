const quotes = [
  {
    source: "Vrye Weekblad",
    text: "\"Mijaune se lens vang wat taal soms nie kan sê nie. Haar beelde bly lank ná jy dit gesien het.\"",
  },
  {
    source: "Vrye Weekblad",
    text: "\"Dit is asof die stilte sy smart deel. Mense wat nog te jonk is om te weet hoe dit voel as jou hart breek, staan tranerig.\"",
  },
  {
    source: "Klyntji",
    text: "\"ʼn Stem wat die Afrikaanse kunswêreld nodig het — rou, eerlik en onvergeetlik in elke raam.\"",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {quotes.map((q, i) => (
          <div key={i} className="text-center flex flex-col gap-4">
            <p className="text-sm font-bold uppercase tracking-widest text-ink">{q.source}</p>
            <p className="text-sm leading-relaxed text-ink/70">{q.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
