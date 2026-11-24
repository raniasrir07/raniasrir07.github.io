import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rania SRIR | Data Science, AI & Software Engineering Portfolio",
  description:
    "Portfolio professionnel de Rania SRIR — Élève-ingénieure en Génie Informatique (ENSA Kénitra), spécialisée en Big Data, Data Science, Intelligence Artificielle et développement Full-Stack.",
  keywords: [
    "Rania SRIR",
    "Data Science",
    "Intelligence Artificielle",
    "Machine Learning",
    "ENSA Kénitra",
    "SAP S/4HANA",
    "FastAPI",
    "React",
    "Portfolio",
  ],
  openGraph: {
    title: "Rania SRIR | Data Science, AI & Software Engineering",
    description:
      "Big Data, Data Science, AI & Full-Stack Engineering Portfolio — ENSA Kénitra.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body className="font-sans selection:bg-sky-500/20">{children}</body>
    </html>
  );
}
