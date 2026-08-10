import { team } from "../data/content";

export default function Team() {
  return (
    <section id="team" className="px-6 py-20 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="eyebrow">Founders' vision</span>
        <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl">
          Meet the team
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {team.map((t) => (
          <div key={t.name} className="text-center">
            <div className="w-24 h-24 rounded-full bg-brand-gradient mx-auto mb-3" />
            <p className="font-medium">{t.name}</p>
            <p className="text-sm text-mist">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
