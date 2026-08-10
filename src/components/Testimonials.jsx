import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <div key={i} className="card">
            <p className="text-sm text-mist italic mb-4">"{t.quote}"</p>
            <p className="font-medium text-sm">{t.name}</p>
            <p className="text-xs text-violet">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
