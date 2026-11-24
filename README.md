# Portfolio Professionnel — Rania SRIR

Portfolio bilingue (**FR / EN**) conçu avec **Next.js (App Router)**, **TypeScript**, **Tailwind CSS** et **Framer Motion**.

## Démarrage local

```bash
npm install
npm run dev
```

Puis ouvrez [http://localhost:3000](http://localhost:3000).

## Build de production & Export statique

```bash
npm run build
```

Le projet est configuré avec `output: "export"` dans `next.config.ts`, ce qui génère un dossier `out/` prêt à être déployé gratuitement sur :
- **Vercel** (recommandé : importez le dépôt GitHub `raniasrir07/portfolio` et cliquez sur *Deploy*)
- **GitHub Pages** (déploiement du dossier `out/`)
- **Netlify** / **Cloudflare Pages**

## Personnalisation rapide

Toutes les données bilingues (expériences, projets, compétences, formation, liens) sont centralisées dans [`src/data/portfolio.ts`](src/data/portfolio.ts).
