"use client";

import Image from "next/image";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CV_PDF_EN, CV_PDF_PT, PROFILE_IMAGE } from "@/data/experience";

export default function HeroSection() {
  const { t, locale } = useLanguage();
  const cvPdf = locale === "en" ? CV_PDF_EN : CV_PDF_PT;

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden pt-16 print-avoid-break"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-emerald/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div className="fade-in-up">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accentLight">
            {t.hero.badge}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">{t.hero.title}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{t.hero.subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accentLight hover:shadow-accent/40"
            >
              {t.hero.ctaPrimary}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </button>
            <a
              href={cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/50 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-accent/50 hover:bg-surface"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end fade-in">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent/20 to-emerald/20 blur-2xl" />
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-border shadow-2xl shadow-black/50 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <Image
                src={PROFILE_IMAGE}
                alt="Rafael Ferreira da Silva"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 288px, 384px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-8 no-print">
        <button
          type="button"
          onClick={() => document.getElementById("metrics")?.scrollIntoView({ behavior: "smooth" })}
          className="animate-bounce text-muted transition-colors hover:text-white"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
