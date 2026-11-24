"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Layers, Sparkles } from "lucide-react";
import {
  Lang,
  ProjectCategory,
  ProjectItem,
  PROJECTS,
  UI_COPY,
} from "@/data/portfolio";

interface ProjectsSectionProps {
  lang: Lang;
  onSelectProject: (project: ProjectItem) => void;
}

const CATEGORIES: ProjectCategory[] = [
  "all",
  "ai-data",
  "fullstack",
];

export function ProjectsSection({
  lang,
  onSelectProject,
}: ProjectsSectionProps) {
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const t = UI_COPY[lang].projects;

  const filtered =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="border-b border-slate-200/80 bg-slate-100/50 py-20 dark:border-white/10 dark:bg-white/[0.015]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
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

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                  filter === category
                    ? "bg-slate-900 text-white shadow-sm dark:bg-sky-500 dark:text-slate-950"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-sky-500/40 hover:text-sky-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-sky-400"
                }`}
              >
                {t.filters[category]}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, idx) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-lg dark:border-white/10 dark:bg-[#111827] dark:hover:border-sky-400/40"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    {project.date}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-sky-700 dark:text-sky-300">
                      <Sparkles className="h-3 w-3" />
                      {t.featuredBadge}
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">
                  {project.title[lang]}
                </h3>

                <p className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-400">
                  {project.subtitle[lang]}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.summary[lang]}
                </p>
              </div>

              <div className="mt-5">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[11px] text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 5 && (
                    <span className="rounded-md px-1.5 py-0.5 font-mono text-[11px] text-slate-400">
                      +{project.stack.length - 5}
                    </span>
                  )}
                </div>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 dark:border-white/5">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 transition-colors hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
                  >
                    <Layers className="h-3.5 w-3.5" />
                    <span>{t.viewDetails}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 font-mono text-[11px] font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>{t.viewCode}</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
