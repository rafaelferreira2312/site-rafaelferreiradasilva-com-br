"use client";

import { Award, Download, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { certifications, categoryLabels } from "@/data/certifications";
import { CV_PDF_EN, CV_PDF_PT } from "@/data/experience";

export default function SkillsSection() {
  const { t, locale } = useLanguage();

  const grouped = certifications.reduce(
    (acc, cert) => {
      if (!acc[cert.category]) acc[cert.category] = [];
      acc[cert.category].push(cert);
      return acc;
    },
    {} as Record<string, typeof certifications>,
  );

  return (
    <section id="skills" className="py-20 print-avoid-break">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t.skills.title}</h2>
          <p className="mt-3 text-muted">{t.skills.subtitle}</p>
        </div>

        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.skills.categories.map((category) => (
            <div
              key={category.name}
              className="glass-card rounded-xl p-6 print-avoid-break"
            >
              <h3 className="mb-4 text-lg font-bold text-white">{category.name}</h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <span className="h-1 w-1 rounded-full bg-accentLight" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <a
            href={CV_PDF_PT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/50 px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-accent/50"
          >
            <Download className="h-4 w-4" />
            {t.skills.downloadCvPt}
          </a>
          <a
            href={CV_PDF_EN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/50 px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-accent/50"
          >
            <Download className="h-4 w-4" />
            {t.skills.downloadCvEn}
          </a>
        </div>

        <h3 className="mb-8 text-center text-2xl font-bold text-white">
          {t.skills.certificationsTitle}
        </h3>

        <div className="space-y-10">
          {(Object.keys(grouped) as Array<keyof typeof categoryLabels>).map((category) => (
            <div key={category}>
              <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accentLight">
                <Award className="h-4 w-4" />
                {categoryLabels[category][locale] ?? categoryLabels[category].pt}
              </h4>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {grouped[category].map((cert) => (
                  <a
                    key={cert.pdf}
                    href={`/assets/pdf/${encodeURIComponent(cert.pdf)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card group flex items-center justify-between rounded-lg px-4 py-3 transition-all hover:border-accent/30 print-avoid-break"
                  >
                    <div>
                      <p className="text-sm font-medium text-white group-hover:text-accentLight">
                        {cert.name}
                      </p>
                      <p className="text-xs text-muted">{cert.provider}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accentLight" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
