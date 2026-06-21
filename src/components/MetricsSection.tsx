"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function MetricsSection() {
  const { t } = useLanguage();

  return (
    <section id="metrics" className="py-20 print-avoid-break">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
          {t.metrics.title}
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.metrics.items.map((item, index) => (
            <article
              key={item.label}
              className="glass-card group rounded-xl p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 print-avoid-break"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-4xl font-bold text-gradient">{item.value}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{item.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
