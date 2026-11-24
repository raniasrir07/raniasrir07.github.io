export type Lang = "fr" | "en";

export type ProjectCategory = "all" | "ai-data" | "fullstack";

export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  period: Record<Lang, string>;
  role: Record<Lang, string>;
  type: Record<Lang, string>;
  summary: Record<Lang, string>;
  highlights: Record<Lang, string[]>;
  stack: string[];
}

export interface ProjectItem {
  id: string;
  title: Record<Lang, string>;
  subtitle: Record<Lang, string>;
  date: string;
  category: Exclude<ProjectCategory, "all">;
  featured: boolean;
  summary: Record<Lang, string>;
  problem: Record<Lang, string>;
  solution: Record<Lang, string>;
  highlights: Record<Lang, string[]>;
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface SkillGroup {
  id: string;
  title: Record<Lang, string>;
  icon: "brain" | "database" | "code" | "terminal";
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: Record<Lang, string>;
  specialization?: Record<Lang, string>;
  period: Record<Lang, string>;
  distinction?: Record<Lang, string>;
}

export interface LeadershipItem {
  organization: string;
  role: Record<Lang, string>;
  period: Record<Lang, string>;
  description: Record<Lang, string>;
}

export const PROFILE = {
  name: "Rania SRIR",
  initials: "RS",
  location: {
    fr: "Kénitra, Maroc",
    en: "Kenitra, Morocco",
  },
  email: "raniasrir07@gmail.com",
  phone: "+212 637 873 816",
  github: "https://github.com/raniasrir07",
  linkedin: "https://www.linkedin.com/in/rania-srir-73a302311/",
  githubHandle: "raniasrir07",
  linkedinHandle: "rania-srir-73a302311",
};

export const UI_COPY: Record<
  Lang,
  {
    nav: {
      about: string;
      experience: string;
      projects: string;
      skills: string;
      education: string;
      contact: string;
    };
    hero: {
      badge: string;
      role: string;
      headline: string;
      bio: string;
      ctaProjects: string;
      ctaContact: string;
      ctaGithub: string;
      terminalTitle: string;
      focusLabel: string;
      focusItems: string[];
      stats: { value: string; label: string }[];
    };
    experience: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    projects: {
      eyebrow: string;
      title: string;
      subtitle: string;
      filters: Record<ProjectCategory, string>;
      viewDetails: string;
      viewCode: string;
      featuredBadge: string;
      modal: {
        problem: string;
        solution: string;
        highlights: string;
        stack: string;
        close: string;
      };
    };
    skills: {
      eyebrow: string;
      title: string;
      subtitle: string;
      languagesTitle: string;
      languages: { name: string; level: string }[];
    };
    education: {
      eyebrow: string;
      title: string;
      academicTitle: string;
      leadershipTitle: string;
    };
    contact: {
      eyebrow: string;
      title: string;
      subtitle: string;
      emailLabel: string;
      phoneLabel: string;
      locationLabel: string;
      copyEmail: string;
      copied: string;
      sendMail: string;
      availabilityNote: string;
    };
    footer: {
      builtWith: string;
      rights: string;
    };
  }
> = {
  fr: {
    nav: {
      about: "Profil",
      experience: "Expériences",
      projects: "Projets",
      skills: "Compétences",
      education: "Parcours",
      contact: "Contact",
    },
    hero: {
      badge: "Élève-Ingénieure • Big Data, Data Science & IA",
      role: "Data Science • Intelligence Artificielle • Data & Software Engineering",
      headline:
        "Transformer la donnée complexe en solutions intelligentes d'aide à la décision.",
      bio: "Étudiante en 2e année du cycle ingénieur en Génie Informatique à l'ENSA Kénitra (option Big Data, Data Science & IA). Forte de stages chez DXC Technology, ATLION TECH et la SNRT, j'allie Machine Learning, IA générative locale, écosystèmes ERP (SAP) et architectures temps réel.",
      ctaProjects: "Découvrir mes projets",
      ctaContact: "Me contacter",
      ctaGithub: "GitHub",
      terminalTitle: "rania@ensa-kenitra:~/profile",
      focusLabel: "Domaines d'impact",
      focusItems: [
        "Détection d'anomalies hybride (ML + MITRE ATT&CK)",
        "LLM local & RAG / Recherche sémantique",
        "Data Engineering, ERP SAP S/4HANA & Oracle DBA",
        "Architectures temps réel (FastAPI, WebSockets, React)",
      ],
      stats: [
        { value: "3", label: "Stages en entreprise" },
        { value: "4+", label: "Projets IA & Full-Stack" },
        { value: "2028", label: "Diplôme d'Ingénieure" },
      ],
    },
    experience: {
      eyebrow: "Expérience Professionnelle",
      title: "Des stages ancrés dans des enjeux industriels réels",
      subtitle:
        "Cybersécurité augmentée par l'IA, analytique ERP SAP S/4HANA et systèmes temps réel broadcast.",
    },
    projects: {
      eyebrow: "Réalisations & Open Source",
      title: "Projets sélectionnés",
      subtitle:
        "Combinaison de plateformes full-stack, moteurs de recherche sémantique et workflows d'automatisation IA.",
      filters: {
        all: "Tous",
        "ai-data": "IA & Data",
        fullstack: "Full-Stack",
      },
      viewDetails: "Architecture & détails",
      viewCode: "Code GitHub",
      featuredBadge: "Projet phare",
      modal: {
        problem: "Problématique",
        solution: "Architecture & Solution",
        highlights: "Points clés techniques",
        stack: "Technologies mobilisées",
        close: "Fermer",
      },
    },
    skills: {
      eyebrow: "Arsenal Technique",
      title: "Compétences & Technologies",
      subtitle:
        "Un socle polyvalent couvrant la Data Science, les bases de données, le génie logiciel et l'automatisation.",
      languagesTitle: "Langues",
      languages: [
        { name: "Arabe", level: "Langue maternelle" },
        { name: "Français", level: "B2 — Courant professionnel" },
        { name: "Anglais", level: "B2 — Technique & professionnel" },
        { name: "Espagnol", level: "Notions de base" },
      ],
    },
    education: {
      eyebrow: "Formation & Engagement",
      title: "Parcours académique & leadership",
      academicTitle: "Éducation",
      leadershipTitle: "Expérience bénévole & associative",
    },
    contact: {
      eyebrow: "Collaborons ensemble",
      title: "Discutons de vos projets Data, IA ou Software",
      subtitle:
        "Disponible pour échanger autour de stages, projets innovants en Data Science, IA appliquée ou développement Full-Stack.",
      emailLabel: "Email professionnel",
      phoneLabel: "Téléphone",
      locationLabel: "Localisation",
      copyEmail: "Copier l'email",
      copied: "Copié !",
      sendMail: "Envoyer un message",
      availabilityNote: "Réponse rapide par email ou LinkedIn.",
    },
    footer: {
      builtWith: "Conçu avec Next.js, TypeScript & Tailwind CSS",
      rights: "Tous droits réservés.",
    },
  },
  en: {
    nav: {
      about: "Profile",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      badge: "Engineering Student • Big Data, Data Science & AI",
      role: "Data Science • Artificial Intelligence • Data & Software Engineering",
      headline:
        "Turning complex data into intelligent decision-making systems.",
      bio: "2nd-year Computer Engineering student at ENSA Kenitra specializing in Big Data, Data Science & AI. Through internships at DXC Technology, ATLION TECH, and SNRT, I bridge Machine Learning, local LLMs, enterprise ERP analytics (SAP), and real-time software architectures.",
      ctaProjects: "Explore Projects",
      ctaContact: "Get in Touch",
      ctaGithub: "GitHub",
      terminalTitle: "rania@ensa-kenitra:~/profile",
      focusLabel: "Core Focus Areas",
      focusItems: [
        "Hybrid Anomaly Detection (ML + MITRE ATT&CK)",
        "Local LLMs & Semantic Search Pipelines",
        "Data Engineering, SAP S/4HANA & Oracle DBA",
        "Real-Time Systems (FastAPI, WebSockets, React)",
      ],
      stats: [
        { value: "3", label: "Industry Internships" },
        { value: "4+", label: "AI & Full-Stack Projects" },
        { value: "2028", label: "Engineering Graduation" },
      ],
    },
    experience: {
      eyebrow: "Work Experience",
      title: "Industry internships solving concrete engineering challenges",
      subtitle:
        "AI-augmented SOC cybersecurity, SAP S/4HANA business analytics, and real-time broadcast telemetry.",
    },
    projects: {
      eyebrow: "Selected Work & Open Source",
      title: "Featured Projects",
      subtitle:
        "A mix of full-stack platforms, semantic AI engines, and automated LLM workflows.",
      filters: {
        all: "All",
        "ai-data": "AI & Data",
        fullstack: "Full-Stack",
      },
      viewDetails: "Architecture & Details",
      viewCode: "GitHub Repo",
      featuredBadge: "Featured",
      modal: {
        problem: "Challenge",
        solution: "Architecture & Solution",
        highlights: "Key Technical Highlights",
        stack: "Tech Stack",
        close: "Close",
      },
    },
    skills: {
      eyebrow: "Technical Stack",
      title: "Skills & Engineering Toolkit",
      subtitle:
        "A versatile foundation spanning Data Science, database systems, full-stack software engineering, and automation.",
      languagesTitle: "Languages",
      languages: [
        { name: "Arabic", level: "Native" },
        { name: "French", level: "B2 — Professional working proficiency" },
        { name: "English", level: "B2 — Technical & professional" },
        { name: "Spanish", level: "Elementary" },
      ],
    },
    education: {
      eyebrow: "Background & Leadership",
      title: "Education & Community Involvement",
      academicTitle: "Academic Background",
      leadershipTitle: "Leadership & Volunteering",
    },
    contact: {
      eyebrow: "Let's Connect",
      title: "Open to AI, Data & Software Engineering Opportunities",
      subtitle:
        "Feel free to reach out regarding internships, collaborative research, or innovative Data & AI engineering projects.",
      emailLabel: "Direct Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      copyEmail: "Copy Email",
      copied: "Copied!",
      sendMail: "Send Email",
      availabilityNote: "Fast response via email or LinkedIn.",
    },
    footer: {
      builtWith: "Built with Next.js, TypeScript & Tailwind CSS",
      rights: "All rights reserved.",
    },
  },
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "dxc",
    company: "DXC Technology",
    location: "Rabat",
    period: { fr: "Août 2026", en: "August 2026" },
    role: {
      fr: "Stagiaire Cybersécurité (SOC) & IA",
      en: "Cybersecurity (SOC) & AI Intern",
    },
    type: { fr: "Stage Technique", en: "Engineering Internship" },
    summary: {
      fr: "Conception d'une plateforme hybride temps réel de détection d'anomalies combinant Machine Learning, règles MITRE ATT&CK et assistant d'investigation par LLM local.",
      en: "Designed and built a real-time hybrid anomaly detection platform combining Machine Learning, MITRE ATT&CK rules, and a local LLM investigation assistant.",
    },
    highlights: {
      fr: [
        "Conception et développement d'une plateforme hybride visant à réduire la fatigue des alertes en environnement SOC.",
        "Implémentation d'un moteur combinant Machine Learning (Isolation Forest) et règles déterministes (MITRE ATT&CK).",
        "Intégration d'un assistant d'investigation par IA locale (Llama 3.2 via Ollama) sur une architecture temps réel FastAPI, React, WebSockets et Docker.",
      ],
      en: [
        "Designed and developed a hybrid anomaly detection platform aimed at reducing SOC alert fatigue.",
        "Implemented a dual detection engine combining Machine Learning (Isolation Forest) and deterministic rules (MITRE ATT&CK).",
        "Integrated a local AI investigation assistant (Llama 3.2 via Ollama) on a real-time FastAPI, React, WebSockets, and Docker architecture.",
      ],
    },
    stack: [
      "Python",
      "Isolation Forest",
      "MITRE ATT&CK",
      "Llama 3.2 / Ollama",
      "FastAPI",
      "React",
      "WebSockets",
      "Docker",
    ],
  },
  {
    id: "atlion",
    company: "ATLION TECH",
    location: "Kénitra",
    period: { fr: "Juillet 2026", en: "July 2026" },
    role: {
      fr: "Stagiaire SAP S/4HANA & Data Analytics",
      en: "SAP S/4HANA & Data Analytics Intern",
    },
    type: { fr: "Stage ERP & Data", en: "ERP & Data Internship" },
    summary: {
      fr: "Analyse des processus métiers MM/SD (Procure-to-Pay) sous SAP S/4HANA et conception d'un prototype analytique inspiré de SAP Fiori.",
      en: "Analyzed MM & SD business workflows (Procure-to-Pay) in SAP S/4HANA and built a SAP Fiori-inspired procurement analytics prototype.",
    },
    highlights: {
      fr: [
        "Étude de l'écosystème SAP S/4HANA et des processus métiers MM et SD, avec approfondissement du flux Procure-to-Pay (P2P).",
        "Conception d'un prototype d'interface inspiré de SAP Fiori, structuration d'un jeu de données P2P et création d'un tableau de bord de suivi des achats.",
      ],
      en: [
        "Studied the SAP S/4HANA ecosystem and MM/SD business processes with a deep dive into the Procure-to-Pay (P2P) lifecycle.",
        "Designed a SAP Fiori-inspired UI prototype, curated a structured P2P dataset, and built a procurement KPI monitoring dashboard.",
      ],
    },
    stack: ["SAP S/4HANA", "MM / SD", "Procure-to-Pay", "SAP Fiori UX", "Data Analytics"],
  },
  {
    id: "snrt",
    company: "SNRT",
    location: "Rabat",
    period: { fr: "Juil 2024 – Août 2024", en: "Jul 2024 – Aug 2024" },
    role: {
      fr: "Stagiaire Développement Logiciel",
      en: "Software Development Intern",
    },
    type: { fr: "Stage Développement", en: "Software Internship" },
    summary: {
      fr: "Intégration du protocole broadcast Ember+ et développement d'un serveur Node.js / WebSocket temps réel avec API REST.",
      en: "Integrated the Ember+ broadcast protocol and engineered a real-time Node.js / WebSocket server with a REST API.",
    },
    highlights: {
      fr: [
        "Analyse de la communication entre une console AEQ FORUM IP Split et IPReplay, et intégration du protocole Ember+.",
        "Développement d'un serveur Node.js / WebSocket pour la transmission de données en temps réel et conception d'une API REST.",
      ],
      en: [
        "Analyzed hardware/software communication between an AEQ FORUM IP Split console and IPReplay, integrating the Ember+ protocol.",
        "Built a Node.js / WebSocket server for low-latency real-time data transmission alongside a clean REST API.",
      ],
    },
    stack: ["Node.js", "WebSockets", "REST API", "Ember+ Protocol", "AEQ FORUM IP"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "campusbaraka",
    title: {
      fr: "CampusBaraka — Plateforme d'entraide universitaire",
      en: "CampusBaraka — University Mutual Aid Platform",
    },
    subtitle: {
      fr: "Application web temps réel & matching intelligent",
      en: "Real-time web platform & smart matching",
    },
    date: "Juin 2026",
    category: "fullstack",
    featured: true,
    summary: {
      fr: "Plateforme web dédiée aux étudiants marocains intégrant annonces, messagerie temps réel via Laravel Reverb et moteur de matching intelligent.",
      en: "Full-stack platform tailored for Moroccan university students featuring listings, real-time messaging via Laravel Reverb, and smart matching.",
    },
    problem: {
      fr: "Centraliser l'entraide étudiante (logement, ressources, services) avec des échanges instantanés et des recommandations pertinentes.",
      en: "Centralizing student mutual aid (housing, study resources, peer services) with instant communication and relevant peer matching.",
    },
    solution: {
      fr: "Architecture modulaire Laravel + Livewire avec interface d'administration Filament, WebSockets natifs via Laravel Reverb et conteneurisation Docker.",
      en: "Modular Laravel + Livewire architecture backed by a Filament admin panel, native WebSockets via Laravel Reverb, and Docker containerization.",
    },
    highlights: {
      fr: [
        "Messagerie temps réel propulsée par Laravel Reverb",
        "Back-office complet sous Filament & UI responsive Tailwind CSS",
        "Algorithme de matching intelligent entre offres et demandes étudiantes",
      ],
      en: [
        "Real-time messaging powered by Laravel Reverb WebSockets",
        "Full Filament admin dashboard and responsive Tailwind CSS UI",
        "Smart matching logic connecting student needs and offers",
      ],
    },
    stack: [
      "Laravel",
      "PHP",
      "Livewire",
      "Laravel Reverb",
      "Filament",
      "MySQL",
      "Tailwind CSS",
      "Docker",
    ],
    githubUrl: "https://github.com/raniasrir07/campusbaraka",
  },
  {
    id: "cv-semantic-ai",
    title: {
      fr: "Système d'Analyse & Tri de CV par IA",
      en: "AI Semantic Resume Screening System",
    },
    subtitle: {
      fr: "Recherche sémantique & NLP appliqué au recrutement",
      en: "Semantic search & NLP recruitment pipeline",
    },
    date: "2025",
    category: "ai-data",
    featured: true,
    summary: {
      fr: "Système d'analyse automatisée et de classement de CV basé sur la recherche sémantique pour dépasser le simple filtrage par mots-clés.",
      en: "Automated resume parsing and candidate ranking system powered by semantic search to go beyond brittle keyword matching.",
    },
    problem: {
      fr: "Le tri manuel ou par mots-clés exacts passe à côté de profils pertinents dont la formulation diffère de l'offre.",
      en: "Manual screening and exact keyword filters miss qualified candidates who phrase equivalent skills differently.",
    },
    solution: {
      fr: "Pipeline hybride combinant moteur IA Python (embeddings & similarité sémantique), backend Laravel, stockage PostgreSQL et interface React.",
      en: "Hybrid pipeline combining a Python AI semantic matching service, Laravel API orchestration, PostgreSQL persistence, and a React frontend.",
    },
    highlights: {
      fr: [
        "Extraction structurée et indexation sémantique des profils",
        "Scoring de pertinence entre fiches de poste et CV",
        "Architecture découplée Python + Laravel + React + PostgreSQL",
      ],
      en: [
        "Structured resume extraction and semantic vector matching",
        "Candidate-to-job relevance scoring",
        "Decoupled Python + Laravel + React + PostgreSQL architecture",
      ],
    },
    stack: ["Python", "Semantic Search", "Laravel", "React", "PostgreSQL"],
  },
  {
    id: "edunext-digieduhack",
    title: {
      fr: "EduNext — Assistant de Révision par IA (DigiEduHack)",
      en: "EduNext — AI Study & Revision Assistant (DigiEduHack)",
    },
    subtitle: {
      fr: "Automatisation n8n & génération pédagogique par IA",
      en: "n8n workflow automation & AI content generation",
    },
    date: "Nov 2025",
    category: "ai-data",
    featured: true,
    summary: {
      fr: "Solution automatisée développée dans le cadre de DigiEduHack pour transformer des supports de cours en résumés et fiches de révision personnalisées.",
      en: "Automated solution built for DigiEduHack to transform raw course materials into structured study summaries and learning resources.",
    },
    problem: {
      fr: "Les étudiants perdent un temps précieux à synthétiser des cours volumineux avant de pouvoir s'entraîner efficacement.",
      en: "Students spend significant time condensing dense lecture materials before they can actively practice.",
    },
    solution: {
      fr: "Orchestration de workflows intelligents sous n8n connectés à des modèles d'IA générative pour produire des synthèses structurées automatiquement.",
      en: "Automated n8n orchestration pipelines integrating generative AI models to produce structured revision sheets on demand.",
    },
    highlights: {
      fr: [
        "Conception de workflows automatisés bout-en-bout avec n8n",
        "Génération dynamique de résumés et ressources pédagogiques",
        "Prototype livré en condition hackathon (DigiEduHack)",
      ],
      en: [
        "End-to-end automated pipelines orchestrated in n8n",
        "Dynamic generation of concise summaries and study materials",
        "Delivered under hackathon constraints (DigiEduHack)",
      ],
    },
    stack: ["n8n", "Generative AI", "Workflow Automation", "Prompt Engineering"],
  },
  {
    id: "ai-assistant",
    title: {
      fr: "AI Assistant — Chatbot Hugging Face",
      en: "AI Assistant — Hugging Face Chatbot",
    },
    subtitle: {
      fr: "Assistant conversationnel Node.js & API Hugging Face",
      en: "Conversational assistant powered by Node.js & Hugging Face",
    },
    date: "2026",
    category: "ai-data",
    featured: false,
    summary: {
      fr: "Chatbot intelligent connecté à l'API d'inférence Hugging Face via un backend Node.js et une interface web interactive.",
      en: "Intelligent web chatbot integrated with the Hugging Face Inference API via a Node.js backend and clean interactive UI.",
    },
    problem: {
      fr: "Mettre à disposition un assistant conversationnel léger connecté à des modèles open-source hébergés sur Hugging Face.",
      en: "Providing a lightweight conversational interface connected to open-source LLMs hosted on Hugging Face.",
    },
    solution: {
      fr: "Serveur Node.js gérant les appels sécurisés à l'API Hugging Face et interface web fluide pour les échanges en temps réel.",
      en: "Node.js server handling API inference requests securely paired with a responsive conversational web interface.",
    },
    highlights: {
      fr: [
        "Intégration directe de l'API Hugging Face",
        "Backend léger en Node.js",
        "Code source disponible publiquement sur GitHub",
      ],
      en: [
        "Direct integration with Hugging Face Inference API",
        "Lightweight Node.js backend service",
        "Open-source repository on GitHub",
      ],
    },
    stack: ["Node.js", "Hugging Face API", "JavaScript", "HTML/CSS"],
    githubUrl: "https://github.com/raniasrir07/ai-assistant",
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "ai-ml",
    title: {
      fr: "Data, IA & Machine Learning",
      en: "Data, AI & Machine Learning",
    },
    icon: "brain",
    skills: [
      "Python",
      "R",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Random Forest",
      "KNN / SVR",
      "Semantic Search",
    ],
  },
  {
    id: "db-erp",
    title: {
      fr: "Bases de Données",
      en: "Databases",
    },
    icon: "database",
    skills: [
      "SQL",
      "PostgreSQL",
      "MySQL",
      "Oracle SQL Developer",
      "Oracle APEX",
      "Oracle DBA & Audit",
    ],
  },
  {
    id: "dev-web",
    title: {
      fr: "Développement Logiciel & Web",
      en: "Software & Web Engineering",
    },
    icon: "code",
    skills: [
      "FastAPI",
      "React",
      "Node.js",
      "JavaScript / TypeScript",
      "PHP (Laravel)",
      "Livewire & Filament",
      "Tailwind CSS",
      "Java (POO)",
      "C / C++",
    ],
  },
  {
    id: "devops-tools",
    title: {
      fr: "Outils, Temps Réel & Automatisation",
      en: "DevOps, Real-Time & Automation",
    },
    icon: "terminal",
    skills: [
      "Docker",
      "Git & GitHub",
      "WebSockets",
      "Laravel Reverb",
      "n8n (Workflows IA)",
      "REST API",
      "Postman",
      "Jira",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "ENSA Kénitra — École Nationale des Sciences Appliquées",
    degree: {
      fr: "Cycle Ingénieur en Génie Informatique",
      en: "State Engineering Degree in Computer Engineering",
    },
    specialization: {
      fr: "Option : Big Data, Data Science & Intelligence Artificielle",
      en: "Major: Big Data, Data Science & Artificial Intelligence",
    },
    period: {
      fr: "Sept 2023 – Présent (diplôme prévu en 2028)",
      en: "Sep 2023 – Present (expected 2028)",
    },
  },
  {
    institution: "Lycée — Kénitra",
    degree: {
      fr: "Baccalauréat Sciences Physiques (BIOF)",
      en: "Baccalaureate in Physical Sciences (French International Option)",
    },
    period: {
      fr: "Sept 2022 – Juin 2023",
      en: "Sep 2022 – Jun 2023",
    },
    distinction: {
      fr: "Mention Très Bien",
      en: "Highest Honors (Mention Très Bien)",
    },
  },
];

export const LEADERSHIP: LeadershipItem[] = [
  {
    organization: "Club Green Invest — ENSA Kénitra",
    role: {
      fr: "Secrétaire Générale",
      en: "General Secretary",
    },
    period: { fr: "Sept 2026 – Présent", en: "Sep 2026 – Present" },
    description: {
      fr: "Gestion administrative, coordination organisationnelle et suivi stratégique des initiatives du club.",
      en: "Administrative governance, organizational coordination, and strategic tracking of club initiatives.",
    },
  },
  {
    organization: "ENSAK Informatics Club (EIC)",
    role: {
      fr: "Media Manager",
      en: "Media Manager",
    },
    period: { fr: "Sept 2026 – Présent", en: "Sep 2026 – Present" },
    description: {
      fr: "Pilotage de la communication digitale, création de contenu multimédia et contribution aux projets IA & Data.",
      en: "Digital communication strategy, multimedia content creation, and active contribution to AI & Data projects.",
    },
  },
  {
    organization: "Google Developer Groups (GDG) On Campus — ENSA Kénitra",
    role: {
      fr: "Membre Active",
      en: "Active Member",
    },
    period: { fr: "Sept 2024 – Présent", en: "Sep 2024 – Present" },
    description: {
      fr: "Participation à des ateliers techniques, formations et projets collaboratifs en développement web et Data Science.",
      en: "Participation in technical workshops, hands-on training, and collaborative web & Data Science projects.",
    },
  },
];
