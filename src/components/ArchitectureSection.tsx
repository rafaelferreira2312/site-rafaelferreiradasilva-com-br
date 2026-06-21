"use client";

import {
  ArrowRight,
  Cloud,
  Database,
  Layers,
  MessageSquare,
  Server,
  Shield,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const layerIcons = [Shield, Layers, MessageSquare, Server, Database];

export default function ArchitectureSection() {
  const { t } = useLanguage();

  return (
    <section id="architecture" className="py-20 print-avoid-break">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t.architecture.title}</h2>
          <p className="mt-3 text-muted">{t.architecture.subtitle}</p>
        </div>

        <div className="glass-card mx-auto max-w-4xl rounded-2xl p-8 sm:p-12">
          <div className="mb-8 flex justify-center">
            <Cloud className="h-10 w-10 text-accentLight" aria-hidden="true" />
          </div>

          <div className="space-y-4">
            {t.architecture.layers.map((layer, index) => {
              const Icon = layerIcons[index] ?? Server;
              return (
                <div key={layer.name}>
                  <div className="flex items-center gap-4 rounded-xl border border-border bg-surface/60 p-4 transition-all hover:border-accent/30">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Icon className="h-6 w-6 text-accentLight" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{layer.name}</h3>
                      <p className="text-sm text-muted">{layer.description}</p>
                    </div>
                  </div>
                  {index < t.architecture.layers.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowRight className="h-5 w-5 rotate-90 text-border" aria-hidden="true" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {t.architecture.patterns.map((pattern) => (
              <span
                key={pattern}
                className="rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 font-mono text-xs text-accentLight"
              >
                {pattern}
              </span>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accentLight"
            >
              {t.architecture.cta}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
