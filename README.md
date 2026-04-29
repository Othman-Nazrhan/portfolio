# DevStudio Portfolio

Portfolio freelance pour presenter des services de creation de sites web, WordPress, applications web, interfaces mobiles, maintenance et refonte. Le site est construit avec React, Vite, Tailwind CSS et Framer Motion.

## Apercu

- Page d'accueil orientee conversion avec hero, services, tarifs, projets, CTA et contact.
- Page portfolio accessible via `/portfolio`.
- Catalogue de projets centralise dans `src/data/sections.js`.
- Animations adaptees aux preferences `prefers-reduced-motion`.
- Metadonnees SEO, Open Graph, Twitter Card et JSON-LD dans `index.html`.
- Assets publics pour favicon, sitemap, robots.txt et images de projets.

## Stack

- React 19
- Vite 8
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

Lance le serveur de developpement Vite.

```bash
npm run build
```

Genere la version de production dans `dist/`.

```bash
npm run preview
```

Sert localement le build de production.

```bash
npm run lint
```

Verifie le code avec ESLint.

## Structure

```text
src/
  components/   Composants UI reutilisables
  data/         Contenus, navigation, styles, icones et configuration
  hooks/        Hooks React partages
  sections/     Sections principales des pages
  utils/        Helpers utilitaires
public/
  project-images/  Images utilisees par le catalogue de projets
  favicon.svg
  robots.txt
  sitemap.xml
```

## Modifier le contenu

- Nom de marque et email: `src/data/brand.js`
- Navigation: `src/data/navigation.js`
- Services, tarifs, projets, FAQ et textes de page: `src/data/sections.js`
- Images de projets: `public/project-images/`
- Metadonnees SEO globales: `index.html`

Apres une modification de contenu ou d'interface, lancer:

```bash
npm run lint
npm run build
```

## Routes

- `/` affiche la page d'accueil.
- `/portfolio` affiche la page detaillee des projets.
- Les ancres internes utilisent les liens de navigation definis dans `src/data/navigation.js`.

## Deploiement

Le projet genere un site statique. Apres `npm run build`, deployer le contenu du dossier `dist/` sur l'hebergeur choisi.

Avant mise en ligne, mettre a jour les URLs publiques dans:

- `index.html`
- `public/sitemap.xml`
- `public/robots.txt`

