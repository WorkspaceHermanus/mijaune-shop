const quotes = [
  {
    text: "Mijaune se lens vang wat taal soms nie kan sê nie — stilte met gewig.",
    source: "Die Burger",
  },
  {
    text: "Haar beelde is onvergeetlik. ʼn Stem wat die Suid-Afrikaanse kunswêreld nodig het.",
    source: "Vrye Weekblad",
  },
  {
    text: "Elke foto is ʼn uitnodiging om te bly staan. Om te kyk. Om te voel.",
    source: "LitNet",
  },
];

export default function Testimonials() {
  return (
    <section className="border-t border-ink/10 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {quotes.map((q, i) => (
            <div key={i} className="flex flex-col gap-5">
              <p className="font-display text-2xl font-light italic leading-snug text-ink">
                &ldquo;{q.text}&rdquo;
              </p>
              <span className="text-[9px] uppercase tracking-[0.25em] text-dust">{q.source}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
