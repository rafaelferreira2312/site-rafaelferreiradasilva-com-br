"use client";

import { ExternalLink, Github, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const { t, locale } = useLanguage();

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  const renderProject = (project: (typeof projects)[0]) => {
    const content = project.translations[locale];
    const isComingSoon = project.status === "coming-soon";

    return (
      <article
        key={project.id}
        className="glass-card group flex flex-col overflow-hidden rounded-xl transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 print-avoid-break"
      >
        <div className="border-b border-border bg-surface/80 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-3 font-mono text-xs text-muted">{project.slug}</span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex items-center justify-between gap-2">
            <h3 className="text-xl font-bold text-white">{content.name}</h3>
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${
                isComingSoon
                  ? "border border-yellow-500/30 bg-yellow-500/10 text-yellow-400"
                  : "border border-emerald/30 bg-emerald/10 text-emerald"
              }`}
            >
              {isComingSoon ? (
                <>
                  <Clock className="h-3 w-3" />
                  {t.projects.comingSoon}
                </>
              ) : (
                <>● {t.projects.openSource}</>
              )}
            </span>
          </div>

          <p className="mb-4 font-mono text-xs text-accentLight">{project.stack}</p>

          <div className="mb-4 space-y-3 text-sm">
            <div>
              <span className="font-semibold text-white">{t.projects.challenge}: </span>
              <span className="text-muted">{content.challenge}</span>
            </div>
            <div>
              <span className="font-semibold text-white">{t.projects.architecture}: </span>
              <span className="text-muted">{content.architecture}</span>
            </div>
            <div>
              <span className="font-semibold text-emerald">{t.projects.result}: </span>
              <span className="text-muted">{content.result}</span>
            </div>
          </div>

          {(project.demo || project.github) && !isComingSoon && (
            <div className="mt-auto flex flex-wrap gap-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald transition-colors hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t.projects.viewDemo}
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accentLight transition-colors hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  {t.projects.viewRepo}
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    );
  };

  return (
    <section id="projects" className="py-20 print-avoid-break">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t.projects.title}</h2>
          <p className="mt-3 text-muted">{t.projects.subtitle}</p>
        </div>

        <div className="mb-8 grid gap-6 lg:grid-cols-3">{featured.map(renderProject)}</div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map(renderProject)}
        </div>
      </div>
    </section>
  );
}
