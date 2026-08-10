import { useState } from "react";
import { faqs } from "../data/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="px-6 py-20 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <span className="eyebrow">FAQ</span>
        <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl">
          Frequently asked <span className="gradient-text">questions</span>
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={f.q} className="card">
              <button
                className="w-full flex items-center justify-between text-left"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="font-medium">{f.q}</span>
                <span className="text-violet text-xl leading-none">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && <p className="mt-3 text-sm text-mist">{f.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
