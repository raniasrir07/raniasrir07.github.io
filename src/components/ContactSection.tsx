"use client";

import { useState } from "react";
import { Check, Copy, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Lang, PROFILE, UI_COPY } from "@/data/portfolio";

interface ContactSectionProps {
  lang: Lang;
}

export function ContactSection({ lang }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const t = UI_COPY[lang].contact;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback ignored if clipboard permissions are restricted
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12 dark:border-white/10 dark:bg-[#111827]">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">
                {t.eyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                {t.title}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
                {t.subtitle}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
                >
                  <Send className="h-4 w-4" />
                  <span>{t.sendMail}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-sky-500/40 hover:text-sky-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:text-sky-300"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-500" />
                      <span>{t.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>{t.copyEmail}</span>
                    </>
                  )}
                </button>
              </div>

              <p className="mt-4 font-mono text-xs text-slate-500 dark:text-slate-400">
                {t.availabilityNote}
              </p>
            </div>

            <div className="space-y-3 lg:col-span-5">
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-colors hover:border-sky-500/40 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <Mail className="h-5 w-5 shrink-0 text-sky-500" />
                <div className="min-w-0">
                  <div className="text-[11px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {t.emailLabel}
                  </div>
                  <div className="truncate font-mono text-sm font-semibold text-slate-900 dark:text-white">
                    {PROFILE.email}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-colors hover:border-sky-500/40 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <Phone className="h-5 w-5 shrink-0 text-sky-500" />
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {t.phoneLabel}
                  </div>
                  <div className="font-mono text-sm font-semibold text-slate-900 dark:text-white">
                    {PROFILE.phone}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 dark:border-white/10 dark:bg-white/[0.03]">
                <MapPin className="h-5 w-5 shrink-0 text-sky-500" />
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {t.locationLabel}
                  </div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {PROFILE.location[lang]}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-700 transition-colors hover:border-sky-500/40 hover:text-sky-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-sky-300"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-700 transition-colors hover:border-sky-500/40 hover:text-sky-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-sky-300"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
