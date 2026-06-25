"use client";

import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { educationItems } from "@/data/education";

export default function EducationSection() {
  const { t, locale } = useLanguage();

  return (
    <section id="education" className="py-20 print-avoid-break">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t.education.title}</h2>
          <p className="mt-3 text-muted">{t.education.subtitle}</p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6">
          {educationItems.map((item) => {
            const edu = item.translations[locale];
            return (
              <article key={item.id} className="glass-card rounded-xl p-6 print-avoid-break">
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <GraduationCap className="h-6 w-6 text-accentLight" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                        <p className="text-sm font-medium text-accentLight">{edu.institution}</p>
                        <p className="text-xs text-muted">{edu.location}</p>
                      </div>
                      <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
                        {edu.period}
                      </span>
                    </div>
                    {edu.detail ? (
                      <p className="mt-3 text-sm leading-relaxed text-muted">{edu.detail}</p>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
