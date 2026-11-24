"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { EXPERIENCES, Lang, UI_COPY } from "@/data/portfolio";

interface ExperienceSectionProps {
  lang: Lang;
}

export function ExperienceSection({ lang }: ExperienceSectionProps) {
  const t = UI_COPY[lang].experience;

  return (
    <section
      id="experience"
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

        <div className="relative mt-12 space-y-6 before:absolute before:bottom-4 before:left-5 before:top-4 before:hidden before:w-px before:bg-slate-200 md:before:block dark:before:bg-white/10">
          {EXPERIENCES.map((exp, idx) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative md:pl-14"
            >
              {/* Timeline Dot */}
              <div className="absolute left-2.5 top-6 hidden h-5 w-5 items-center justify-center rounded-full border-2 border-sky-500 bg-white md:flex dark:bg-[#0B0F19]">
                <span className="h-2 w-2 rounded-full bg-sky-500" />
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all hover:border-sky-500/40 hover:shadow-md dark:border-white/10 dark:bg-[#111827] dark:hover:border-sky-400/30">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-sky-500/10 px-2.5 py-1 font-mono text-xs font-semibold text-sky-700 dark:text-sky-300">
                        <Briefcase className="h-3.5 w-3.5" />
                        {exp.company}
                      </span>
                      <span className="rounded-md border border-slate-200 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:border-white/10 dark:text-slate-400">
                        {exp.type[lang]}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
                      {exp.role[lang]}
                    </h3>
                  </div>

                  <div className="flex flex-col items-start gap-1 font-mono text-xs text-slate-500 sm:items-end dark:text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-sky-500" />
                      {exp.period[lang]}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                  {exp.summary[lang]}
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.highlights[lang].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500/80" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4 dark:border-white/5">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
