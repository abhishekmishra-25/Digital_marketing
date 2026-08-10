import { portfolio } from "../data/content";

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-20 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="eyebrow">Our portfolio</span>
        <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl">
          Transforming brands into <span className="gradient-text">growth stories</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {portfolio.map((p) => (
          <div
            key={p.title}
            className="aspect-[4/3] rounded-2xl bg-surface2 border border-white/5 flex flex-col justify-end p-5 bg-gradient-to-br from-violet/20 to-magenta/10"
          >
            <h3 className="font-display font-semibold">{p.title}</h3>
            <p className="text-xs text-mist mt-1">{p.tag}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
