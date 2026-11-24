"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Code2, Database, Globe, Terminal } from "lucide-react";
import { Lang, SKILL_GROUPS, UI_COPY } from "@/data/portfolio";

interface SkillsSectionProps {
  lang: Lang;
}

const ICONS = {
  brain: BrainCircuit,
  database: Database,
  code: Code2,
  terminal: Terminal,
};

export function SkillsSection({ lang }: SkillsSectionProps) {
  const t = UI_COPY[lang].skills;

  return (
    <section
      id="skills"
      className="border-b border-slate-200/80 py-20 dark:border-white/10"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            {t.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            {t.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SKILL_GROUPS.map((group, idx) => {
            const Icon = ICONS[group.icon];
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#111827]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {group.title[lang]}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-xs font-medium text-slate-700 transition-colors hover:border-sky-500/40 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-sky-400/40 dark:hover:text-sky-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Languages Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35 }}
          className="mt-8 rounded-2xl border border-slate-200/90 bg-slate-50/80 p-6 dark:border-white/10 dark:bg-white/[0.02]"
        >
          <div className="flex items-center gap-2.5">
            <Globe className="h-4 w-4 text-sky-500" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              {t.languagesTitle}
            </h3>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.languages.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-[#111827]"
              >
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {item.name}
                </div>
                <div className="mt-0.5 font-mono text-xs text-slate-500 dark:text-slate-400">
                  {item.level}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
