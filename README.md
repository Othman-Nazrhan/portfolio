# Web Engineer Portfolio

Site startup pour présenter des services de création de sites web, WordPress, applications web, interfaces mobiles, maintenance et refonte. Le projet est construit avec Next.js, React, Tailwind CSS et Framer Motion.

## Aperçu

- Page d'accueil orientée conversion avec hero, services, process, offres, réalisations, avis, CTA et formulaire de brief.
- Page portfolio accessible via `/portfolio`, avec filtres, fiches projets, galerie, zoom image et badges de technologies.
- SEO géré avec les Metadata API de Next.js dans `src/app/layout.jsx` et `src/app/portfolio/page.jsx`.
- Export statique activé avec `output: "export"` dans `next.config.js`.
- Catalogue de projets centralisé dans `src/data/sections.js`.
- Contenus de landing centralisés dans `src/data/landing.js`.
- Logos/badges de technologies configurés dans `src/data/technologies.js`.
- Animations adaptées à `prefers-reduced-motion`.

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- Framer Motion
- ESLint

## Installation

```bash
npm install
```

## Scripts

```bash
npm run dev
```

Lance le serveur de développement Next.js.

```bash
npm run build
```

Génère la version statique de production dans `out/`.

```bash
npm run preview
```

Sert localement le build statique depuis `out/`.

```bash
npm run lint
```

Vérifie le code avec ESLint.

## Structure

```text
src/
  app/          Routes Next.js, layout SEO et wrappers client
  components/   Composants UI réutilisables
  data/         Contenus, navigation, styles, icônes et technologies
  hooks/        Hooks React partagés
  sections/     Sections principales des pages
  utils/        Helpers utilitaires
public/
  project-images/  Images utilisées par le catalogue de projets
  fav.png
  robots.txt
  sitemap.xml
```

## SEO

- Metadata globale : `src/app/layout.jsx`
- Metadata portfolio : `src/app/portfolio/page.jsx`
- JSON-LD Organization : `src/app/layout.jsx`
- Sitemap et robots : `public/sitemap.xml`, `public/robots.txt`
- Export statique : `next.config.js`

## Modifier le contenu

- Nom de marque et email : `src/data/brand.js`
- Navigation : `src/data/navigation.js` et `src/data/landing.js`
- Landing page : `src/data/landing.js`
- Catalogue portfolio : `src/data/sections.js`
- Badges technologies : `src/data/technologies.js`
- Images de projets : `public/project-images/`
- Métadonnées SEO globales : `src/app/layout.jsx`
- Métadonnées SEO portfolio : `src/app/portfolio/page.jsx`

Après une modification de contenu ou d'interface, lancer :

```bash
npm run lint
npm run build
```

## Routes

- `/` affiche la page d'accueil.
- `/portfolio` affiche la page détaillée des projets.
- Les ancres internes utilisent les liens de navigation définis dans `src/data/landing.js` et `src/data/navigation.js`.

## Déploiement

Le projet génère un site statique. Après `npm run build`, déployer le contenu du dossier `out/` sur l'hébergeur choisi.

Avant mise en ligne, mettre à jour les URLs publiques dans :

- `src/app/layout.jsx`
- `src/app/portfolio/page.jsx`
- `public/sitemap.xml`
- `public/robots.txt`
