"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
} from "lucide-react";
import { Lang, PROFILE, UI_COPY } from "@/data/portfolio";

interface HeroProps {
  lang: Lang;
}

export function Hero({ lang }: HeroProps) {
  const t = UI_COPY[lang].hero;

  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-slate-200/80 bg-grid-pattern py-16 sm:py-24 dark:border-white/10"
    >
      {/* Subtle atmospheric glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[44rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-500/15"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center">
        {/* Left Column: Narrative & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-7"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-medium text-sky-700 dark:text-sky-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{t.badge}</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12] dark:text-white">
            {PROFILE.name}
          </h1>

          <p className="mt-3 font-mono text-sm font-medium text-sky-600 sm:text-base dark:text-sky-400">
            {t.role}
          </p>

          <p className="mt-5 text-lg font-medium leading-relaxed text-slate-800 sm:text-xl dark:text-slate-100">
            {t.headline}
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
            {t.bio}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5 font-mono">
              <Cpu className="h-3.5 w-3.5 text-sky-500" />
              ENSA Kénitra • GI2
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
            >
              <span>{t.ctaProjects}</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-sky-500/50 hover:text-sky-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:border-sky-400/50 dark:hover:text-sky-300"
            >
              <Mail className="h-4 w-4" />
              <span>{t.ctaContact}</span>
            </a>

            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100/80 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-200/70 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
            >
              <Github className="h-4 w-4" />
              <span>{t.ctaGithub}</span>
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100/80 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-200/70 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Engineering Snapshot Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5"
        >
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-xl shadow-slate-900/5 backdrop-blur-sm dark:border-white/10 dark:bg-[#111827]/95 dark:shadow-black/40">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                <Terminal className="h-3 w-3" />
                <span>{t.terminalTitle}</span>
              </div>
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-sky-500/40 bg-slate-100 shadow-sm dark:bg-slate-800">
                  <Image
                    src="/images/rania-srir.jpg"
                    alt={PROFILE.name}
                    fill
                    sizes="64px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900 dark:text-white">
                    {PROFILE.name}
                  </h2>
                  <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    github.com/{PROFILE.githubHandle}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  {t.focusLabel}
                </p>
                <ul className="mt-3 space-y-2.5">
                  {t.focusItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-700 sm:text-sm dark:text-slate-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-200/80 pt-5 dark:border-white/10">
                {t.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-slate-200/70 bg-slate-50/80 p-3 text-center dark:border-white/5 dark:bg-white/[0.03]"
                  >
                    <div className="font-mono text-xl font-bold text-slate-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="mt-0.5 text-[11px] leading-tight text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
