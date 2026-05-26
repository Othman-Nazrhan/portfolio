# Web Engineer Portfolio

Portfolio commercial pour presenter les services de Web Engineer : sites vitrines, WordPress, applications web, interfaces mobiles, maintenance et refonte. Le site est construit avec Next.js, React, Tailwind CSS et Framer Motion, puis exporte en statique pour un deploiement simple.

## Apercu

- Landing page orientee conversion avec hero, services, process, offres, realisations, avis, CTA et formulaire de contact.
- Page portfolio disponible sur `/portfolio` avec filtres, fiches projets, galerie, zoom image et badges de technologies.
- Contenus principaux centralises dans `src/data` pour modifier textes, navigation, offres, projets et informations de contact.
- SEO configure avec les Metadata API de Next.js, un JSON-LD Organization, un sitemap et un fichier robots.
- Export statique active avec `output: "export"` et images non optimisees pour compatibilite hebergement statique.
- Animations Framer Motion adaptees aux preferences `prefers-reduced-motion`.

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- Framer Motion 12
- ESLint 10

## Prerequis

- Node.js recent compatible avec Next.js 16
- npm

## Installation

```bash
npm install
```

## Scripts

```bash
npm run dev
```

Lance le serveur de developpement Next.js.

```bash
npm run build
```

Genere le site statique de production dans `out/`.

```bash
npm run preview
```

Sert localement le build statique depuis `out/`. A lancer apres `npm run build`.

```bash
npm run lint
```

Verifie le code avec ESLint.

## Structure

```text
src/
  app/          Routes Next.js, metadata SEO et wrappers client
  components/   Composants UI reutilisables
  data/         Contenus, marque, navigation, styles, icones et technologies
  hooks/        Hooks React partages
  sections/     Sections principales de la landing et du portfolio
  utils/        Helpers utilitaires
public/
  project-images/  Images du catalogue de projets
  fav.png
  hero-image.png
  logo.png
  robots.txt
  sitemap.xml
```

## Modifier le contenu

- Marque, URL publique, email, telephone, Instagram et endpoint du formulaire : `src/data/brand.js`
- Navigation : `src/data/navigation.js` et `src/data/landing.js`
- Contenu de la landing page : `src/data/landing.js`
- Catalogue portfolio : `src/data/sections.js`
- Logos et badges de technologies : `src/data/technologies.js`
- Images de projets : `public/project-images/`
- Metadata SEO globales et JSON-LD : `src/app/layout.jsx`
- Metadata SEO portfolio : `src/app/portfolio/page.jsx`
- Sitemap et robots : `public/sitemap.xml`, `public/robots.txt`

Apres une modification de contenu ou d'interface, lancer :

```bash
npm run lint
npm run build
```

## Routes

- `/` affiche la landing page.
- `/portfolio` affiche la page detaillee des projets.
- Les ancres internes sont definies dans `src/data/landing.js` et `src/data/navigation.js`.

## Formulaire

Le formulaire de contact utilise FormSubmit via `contactFormEndpoint` dans `src/data/brand.js`.

Avant la mise en ligne, verifier :

- l'adresse email de reception ;
- le message de reponse automatique ;
- les liens de contact et reseaux sociaux ;
- les URLs publiques utilisees par le SEO.

## SEO

- Metadata globale : `src/app/layout.jsx`
- Metadata portfolio : `src/app/portfolio/page.jsx`
- JSON-LD Organization : `src/app/layout.jsx`
- Open Graph image : `public/hero-image.png`
- Favicon : `public/fav.png`
- Sitemap : `public/sitemap.xml`
- Robots : `public/robots.txt`

## Deploiement

Le projet genere un site statique. Apres :

```bash
npm run build
```

deployer le contenu du dossier `out/` sur l'hebergeur choisi.

Avant publication, mettre a jour les URLs publiques dans :

- `src/data/brand.js`
- `src/app/layout.jsx`
- `src/app/portfolio/page.jsx`
- `public/sitemap.xml`
- `public/robots.txt`
