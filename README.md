# Web Engineer Portfolio

Site startup pour présenter des services de création de sites web, WordPress, applications web, interfaces mobiles, maintenance et refonte. Le projet est construit avec React, Vite, Tailwind CSS et Framer Motion.

## Aperçu

- Page d'accueil orientée conversion avec hero, services, process, offres, réalisations, avis, CTA et formulaire de brief.
- Page portfolio accessible via `/portfolio`, avec filtres, fiches projets, galerie, zoom image et badges de technologies.
- Catalogue de projets centralisé dans `src/data/sections.js`.
- Contenus de landing centralisés dans `src/data/landing.js`.
- Logos/badges de technologies configurés dans `src/data/technologies.js`.
- Navigation interne gérée côté client dans `src/App.jsx`.
- Animations adaptées à `prefers-reduced-motion`.
- Métadonnées SEO, Open Graph, Twitter Card et JSON-LD dans `index.html`.

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

Lance le serveur de développement Vite.

```bash
npm run build
```

Génère la version de production dans `dist/`.

```bash
npm run preview
```

Sert localement le build de production.

```bash
npm run lint
```

Vérifie le code avec ESLint.

## Structure

```text
src/
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

## Optimisations

- La home et la page portfolio sont lazy-loadées pour séparer les chunks principaux.
- Le bouton de brief est séparé de la modale pour éviter de charger le formulaire complet dans les navigations.
- Les badges de technologies sont configurés une seule fois dans `src/data/technologies.js`.
- Les images externes compatibles passent par `src/utils/projectImages.js` pour générer des variantes de largeur.
- Les animations utilisent `src/hooks/useMotionSettings.js` pour respecter les préférences de réduction de mouvement.

## Modifier le contenu

- Nom de marque et email : `src/data/brand.js`
- Navigation : `src/data/navigation.js`
- Landing page : `src/data/landing.js`
- Catalogue portfolio : `src/data/sections.js`
- Badges technologies : `src/data/technologies.js`
- Images de projets : `public/project-images/`
- Métadonnées SEO globales : `index.html`

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

Le projet génère un site statique. Après `npm run build`, déployer le contenu du dossier `dist/` sur l'hébergeur choisi.

Avant mise en ligne, mettre à jour les URLs publiques dans :

- `index.html`
- `public/sitemap.xml`
- `public/robots.txt`
