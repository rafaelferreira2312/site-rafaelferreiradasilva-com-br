"use client";

import { Briefcase } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { experienceItems } from "@/data/experience";

export default function ExperienceSection() {
  const { t, locale } = useLanguage();

  return (
    <section id="experience" className="py-20 print-avoid-break">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t.experience.title}</h2>
          <p className="mt-3 text-muted">{t.experience.subtitle}</p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-accent via-border to-transparent sm:left-1/2 sm:-translate-x-px" />

          {experienceItems.map((item, index) => {
            const exp = item.translations[locale];
            return (
              <article
                key={item.id}
                className="relative mb-12 pl-16 sm:pl-0 print-avoid-break"
              >
                <div className="absolute left-3 top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-accent bg-deep sm:left-1/2 sm:-translate-x-1/2">
                  <Briefcase className="h-3.5 w-3.5 text-accentLight" aria-hidden="true" />
                </div>

                <div
                  className={`glass-card rounded-xl p-6 sm:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
                  }`}
                >
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      <p className="text-sm font-medium text-accentLight">{exp.company}</p>
                    </div>
                    <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mb-4 font-mono text-xs text-emerald">{exp.stack}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
