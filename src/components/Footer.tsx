"use client";

import { Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { GITHUB_URL, LINKEDIN_URL } from "@/data/seo";

const lighthouseScores = [
  { key: "performance", value: 100 },
  { key: "accessibility", value: 100 },
  { key: "bestPractices", value: 100 },
  { key: "seo", value: 100 },
] as const;

export default function Footer() {
  const { t } = useLanguage();

  const scoreLabels: Record<(typeof lighthouseScores)[number]["key"], string> = {
    performance: t.footer.performance,
    accessibility: t.footer.accessibility,
    bestPractices: t.footer.bestPractices,
    seo: t.footer.seo,
  };

  return (
    <footer className="border-t border-border bg-deep">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold tracking-wide text-white">
              Rafael Ferreira da Silva
            </p>
            <p className="mt-1 text-sm text-muted">Tech Lead · Senior Fullstack Engineer</p>
            <div className="mt-4 flex gap-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer me"
                className="rounded-lg border border-border p-2.5 text-muted transition-all hover:border-accent hover:text-accentLight"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer me"
                className="rounded-lg border border-border p-2.5 text-muted transition-all hover:border-accent hover:text-accentLight"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="glass-card rounded-xl p-5 print-avoid-break">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
              {t.footer.lighthouse}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {lighthouseScores.map(({ key, value }) => (
                <div key={key} className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald/15 text-sm font-bold text-emerald">
                    {value}
                  </span>
                  <span className="text-xs text-muted">{scoreLabels[key]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-mono text-xs text-muted">{t.footer.architecture}</p>
            <p className="mt-2 text-xs text-muted/70">{t.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
