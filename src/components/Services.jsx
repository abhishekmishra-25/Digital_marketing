import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="px-6 py-20 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="eyebrow">What we do</span>
        <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl">
          Advanced digital solutions <span className="gradient-text">for brands</span>
        </h2>
        <p className="mt-2 text-mist max-w-xl mx-auto">
          From high-converting websites to viral content and profitable ads — we handle
          everything you need to scale.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <div key={s.title} className="card hover:border-violet/40 transition-colors">
            <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-mist mb-4">{s.desc}</p>
            <ul className="space-y-1">
              {s.points.map((p) => (
                <li key={p} className="text-sm text-cyan">
                  → {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
