"use client";

import { useState } from "react";
import { Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { Lang, PROFILE, UI_COPY } from "@/data/portfolio";

interface NavbarProps {
  lang: Lang;
  onToggleLang: (lang: Lang) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export function Navbar({
  lang,
  onToggleLang,
  isDark,
  onToggleTheme,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = UI_COPY[lang].nav;

  const links = [
    { href: "#about", label: t.about },
    { href: "#experience", label: t.experience },
    { href: "#projects", label: t.projects },
    { href: "#skills", label: t.skills },
    { href: "#education", label: t.education },
    { href: "#contact", label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-[#0B0F19]/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <a
          href="#about"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 font-mono text-xs font-bold text-sky-600 transition-colors group-hover:bg-sky-500 group-hover:text-white dark:text-sky-400">
            {PROFILE.initials}
          </span>
          <span className="hidden sm:inline">{PROFILE.name}</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Bilingual FR / EN Switcher */}
          <div
            role="group"
            aria-label="Language switcher"
            className="flex items-center rounded-lg border border-slate-200 bg-slate-100 p-0.5 dark:border-white/10 dark:bg-white/5"
          >
            {(["fr", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => onToggleLang(code)}
                className={`rounded-md px-2.5 py-1 font-mono text-xs font-semibold uppercase transition-all ${
                  lang === code
                    ? "bg-white text-slate-900 shadow-sm dark:bg-sky-500 dark:text-slate-950"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {code}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:border-sky-500/40 hover:text-sky-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-sky-400"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:border-sky-500/40 hover:text-sky-600 sm:flex dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-sky-400"
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:border-sky-500/40 hover:text-sky-600 sm:flex dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-sky-400"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 md:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden dark:border-white/10 dark:bg-[#0B0F19]">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-2 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
