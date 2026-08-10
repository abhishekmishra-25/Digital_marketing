import { stats } from "../data/content";

export default function Stats() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="eyebrow">Results</span>
        <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl">
          The results speak louder
        </h2>
        <p className="mt-2 text-mist">Real data. Real brands. Real growth.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stats.map((s) => (
          <div key={s.title} className="card">
            <p className="text-sm text-violet font-medium mb-2">{s.title}</p>
            <p className="font-mono text-3xl font-semibold mb-2">{s.value}</p>
            <p className="text-sm text-mist">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
