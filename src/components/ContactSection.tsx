"use client";

import { FormEvent, useState } from "react";
import { Linkedin, Mail, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { EMAIL, LINKEDIN_URL } from "@/data/seo";

export default function ContactSection() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Portfolio Contact — ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20 print-avoid-break">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t.contact.title}</h2>
          <p className="mt-3 text-muted">{t.contact.subtitle}</p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-5">
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-xl p-6 lg:col-span-3"
            noValidate
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-muted">
                  {t.contact.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-lg border border-border bg-deep px-4 py-3 text-sm text-white outline-none transition-colors focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-muted">
                  {t.contact.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-lg border border-border bg-deep px-4 py-3 text-sm text-white outline-none transition-colors focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-muted">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-border bg-deep px-4 py-3 text-sm text-white outline-none transition-colors focus:border-accent"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accentLight sm:w-auto"
            >
              <Send className="h-4 w-4" />
              {sent ? t.contact.success : t.contact.send}
            </button>
          </form>

          <div className="flex flex-col justify-center gap-6 lg:col-span-2">
            <p className="text-sm text-muted">{t.contact.orConnect}</p>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer me"
              className="glass-card flex items-center gap-4 rounded-xl p-5 transition-all hover:border-accent/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0A66C2]/20">
                <Linkedin className="h-6 w-6 text-[#0A66C2]" />
              </div>
              <div>
                <p className="font-semibold text-white">{t.contact.linkedin}</p>
                <p className="text-xs text-muted">linkedin.com/in/rafael-ferreira-dev</p>
              </div>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="glass-card flex items-center gap-4 rounded-xl p-5 transition-all hover:border-accent/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Mail className="h-6 w-6 text-accentLight" />
              </div>
              <div>
                <p className="font-semibold text-white">E-mail</p>
                <p className="text-xs text-muted">rafaelferreira2312@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
