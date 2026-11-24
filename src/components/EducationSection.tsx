"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Users } from "lucide-react";
import { EDUCATION, Lang, LEADERSHIP, UI_COPY } from "@/data/portfolio";

interface EducationSectionProps {
  lang: Lang;
}

export function EducationSection({ lang }: EducationSectionProps) {
  const t = UI_COPY[lang].education;

  return (
    <section
      id="education"
      className="border-b border-slate-200/80 bg-slate-100/50 py-20 dark:border-white/10 dark:bg-white/[0.015]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            {t.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            {t.title}
          </h2>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Academic Background */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <GraduationCap className="h-4 w-4 text-sky-500" />
              <span>{t.academicTitle}</span>
            </div>

            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.institution}
                  className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#111827]"
                >
                  <div className="font-mono text-xs font-medium text-sky-600 dark:text-sky-400">
                    {edu.period[lang]}
                  </div>
                  <h3 className="mt-1.5 text-base font-bold text-slate-900 dark:text-white">
                    {edu.degree[lang]}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                    {edu.institution}
                  </p>
                  {edu.specialization && (
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                      {edu.specialization[lang]}
                    </p>
                  )}
                  {edu.distinction && (
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-emerald-700 dark:text-emerald-300">
                      <Award className="h-3 w-3" />
                      <span>{edu.distinction[lang]}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Leadership & Volunteering */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            <div className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <Users className="h-4 w-4 text-sky-500" />
              <span>{t.leadershipTitle}</span>
            </div>

            <div className="space-y-4">
              {LEADERSHIP.map((item) => (
                <div
                  key={item.organization}
                  className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#111827]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.role[lang]}
                    </h3>
                    <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                      {item.period[lang]}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-xs font-medium text-sky-600 dark:text-sky-400">
                    {item.organization}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-400">
                    {item.description[lang]}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
