import { brand, heroStats } from "../data/content";

export default function Hero() {
  const waLink = `https://wa.me/${brand.whatsappNumber}`;

  return (
    <section id="home" className="relative overflow-hidden pt-40 pb-28 px-6">
      {/* signature element: a growth line drawing itself across the hero */}
      <svg
        className="absolute inset-x-0 bottom-0 w-full h-[60%] opacity-70 pointer-events-none"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        <path
          className="growth-path"
          d="M0,360 C150,340 220,300 320,280 C420,260 480,180 600,170 C720,160 760,90 900,70 C1020,55 1080,40 1200,10"
          stroke="url(#lineGrad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative max-w-4xl mx-auto text-center">
        <span className="eyebrow">Digital marketing agency</span>
        <h1 className="mt-4 font-display font-semibold text-4xl sm:text-6xl leading-tight">
          Scale smarter, grow faster
          <br />
          with{" "}
          <span className="gradient-text">{brand.name}</span>
        </h1>
        <p className="mt-6 text-mist text-lg max-w-xl mx-auto">{brand.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-brand-gradient px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="border border-white/20 px-6 py-3 rounded-full font-medium hover:bg-white/5 transition-colors"
          >
            WhatsApp Us
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 font-mono text-sm text-mist">
          {heroStats.map((s) => (
            <div key={s.label}>
              <span className="text-white font-semibold">{s.value}</span> {s.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
