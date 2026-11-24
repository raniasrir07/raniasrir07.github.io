"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Github, X } from "lucide-react";
import { Lang, ProjectItem, UI_COPY } from "@/data/portfolio";

interface ProjectModalProps {
  project: ProjectItem | null;
  lang: Lang;
  onClose: () => void;
}

export function ProjectModal({ project, lang, onClose }: ProjectModalProps) {
  const t = UI_COPY[lang].projects;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-8 dark:border-white/15 dark:bg-[#111827]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-mono text-xs font-medium text-sky-600 dark:text-sky-400">
                  {project.date}
                </span>
                <h3 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
                  {project.title[lang]}
                </h3>
                <p className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-400">
                  {project.subtitle[lang]}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label={t.modal.close}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-white/10 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 space-y-5">
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 dark:border-white/10 dark:bg-white/[0.03]">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  {t.modal.problem}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {project.problem[lang]}
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 dark:border-white/10 dark:bg-white/[0.03]">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  {t.modal.solution}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {project.solution[lang]}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {t.modal.highlights}
                </h4>
                <ul className="mt-2.5 space-y-2">
                  {project.highlights[lang].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {t.modal.stack}
                </h4>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-end gap-3 border-t border-slate-200 pt-5 dark:border-white/10">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
                >
                  <Github className="h-4 w-4" />
                  <span>{t.viewCode}</span>
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-slate-300 px-4 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/5"
              >
                {t.modal.close}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
