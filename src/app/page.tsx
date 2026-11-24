"use client";

import { useEffect, useState } from "react";
import { ContactSection } from "@/components/ContactSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectModal } from "@/components/ProjectModal";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { Lang, PROFILE, ProjectItem, UI_COPY } from "@/data/portfolio";

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("fr");
  const [isDark, setIsDark] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    root.lang = lang;
  }, [isDark, lang]);

  return (
    <div className="min-h-screen">
      <Navbar
        lang={lang}
        onToggleLang={setLang}
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
      />

      <main>
        <Hero lang={lang} />
        <ExperienceSection lang={lang} />
        <ProjectsSection
          lang={lang}
          onSelectProject={(project) => setSelectedProject(project)}
        />
        <SkillsSection lang={lang} />
        <EducationSection lang={lang} />
        <ContactSection lang={lang} />
      </main>

      <footer className="border-t border-slate-200/80 py-8 text-center text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {PROFILE.name} — {UI_COPY[lang].footer.rights}
          </p>
          <p className="font-mono">{UI_COPY[lang].footer.builtWith}</p>
        </div>
      </footer>

      <ProjectModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
