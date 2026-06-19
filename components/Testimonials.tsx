const quotes = [
  {
    text: "Mijaune se woorde het iets in my wakker gemaak wat lank al geslaap het.",
    source: "— Die Burger",
  },
  {
    text: "Haar kuns is eerlik, rou en onvergeetlik. ʼn Stem wat die Afrikaanse letterkunde nodig het.",
    source: "— Vrye Weekblad",
  },
  {
    text: "Elke bladsy is ʼn uitnodiging om te voel. Sy skryf soos sy asemhaal — natuurlik en diep.",
    source: "— LitNet",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-ink text-cream py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold text-center mb-14 text-cream">Wat mense sê</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {quotes.map((q, i) => (
            <div key={i} className="flex flex-col gap-4">
              <p className="font-serif text-lg leading-relaxed text-gray-200">"{q.text}"</p>
              <span className="text-xs uppercase tracking-widest text-gray-400">{q.source}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
