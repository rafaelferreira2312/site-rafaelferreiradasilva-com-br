"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { localeLabels, locales } from "@/data/i18n";
import { CV_PDF } from "@/data/experience";

const navIds = ["about", "experience", "projects", "architecture", "contact"] as const;

export default function Header() {
  const { t, locale, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "projects", label: t.nav.projects },
    { id: "architecture", label: t.nav.architecture },
    { id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => scrollTo("about")}
          className="text-sm font-bold tracking-widest text-white transition-colors hover:text-accentLight sm:text-base"
          aria-label="Rafael Ferreira - Home"
        >
          RAFAEL FERREIRA
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div
            className="flex items-center gap-0.5 rounded-lg border border-border bg-surface/50 p-0.5"
            role="group"
            aria-label="Language selector"
          >
            {locales.map((loc) => (
              <button
                key={loc}
                type="button"
                onClick={() => setLocale(loc)}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                  locale === loc
                    ? "bg-accent text-white shadow-sm"
                    : "text-muted hover:text-white"
                }`}
                aria-pressed={locale === loc}
              >
                {localeLabels[loc]}
              </button>
            ))}
          </div>

          <a
            href={CV_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-accent/50 px-4 py-2 text-sm font-medium text-accentLight transition-all hover:bg-accent hover:text-white"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            {t.nav.downloadCv}
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-muted transition-colors hover:bg-white/5 hover:text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="glass border-t border-border md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className="rounded-lg px-4 py-3 text-left text-sm text-muted transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-2 flex flex-wrap gap-1 border-t border-border pt-4">
              {locales.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => setLocale(loc)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium ${
                    locale === loc ? "bg-accent text-white" : "text-muted"
                  }`}
                >
                  {localeLabels[loc]}
                </button>
              ))}
            </div>
            <a
              href={CV_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-medium text-white"
            >
              <Download className="h-4 w-4" />
              {t.nav.downloadCv}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
