export const metrics = [
  { value: "100 EUR", label: "prix de depart pour lancer votre site" },
  { value: "24h", label: "pour recevoir une reponse claire" },
  { value: "21j", label: "pour lancer une version premium" },
];

export const heroOffers = [
  "Site vitrine professionnel",
  "Site WordPress",
  "Application web sur mesure",
  "Maintenance et support",
];

export const freelancerHighlights = [
  {
    icon: "message",
    title: "Un contact direct",
    text: "Vous parlez avec la personne qui conçoit, developpe et livre votre site. Les decisions avancent vite, sans couche inutile.",
  },
  {
    icon: "bolt",
    title: "Execution rapide",
    text: "Je travaille en sprint court avec des validations simples pour transformer une idee floue en page claire et utilisable.",
  },
  {
    icon: "shield",
    title: "Accompagnement propre",
    text: "Chaque choix est explique: structure, design, responsive, contenu, mise en ligne et prochaines ameliorations possibles.",
  },
];

export const services = [
  {
    icon: "layout",
    title: "Sites web professionnels",
    description:
      "Sites vitrines, portfolios et pages de vente modernes pour presenter votre activite, rassurer vos clients et generer des demandes.",
  },
  {
    icon: "layout",
    title: "Sites WordPress",
    description:
      "Creation, personnalisation et amelioration de sites WordPress pour avoir une solution simple a gerer et facile a faire evoluer.",
  },
  {
    icon: "code",
    title: "Applications web sur mesure",
    description:
      "Dashboards, plateformes SaaS, espaces clients et outils metier construits avec React, propres, rapides et evolutifs.",
  },
  {
    icon: "phone",
    title: "Applications et interfaces mobiles",
    description:
      "Experiences mobile-first, prototypes d'apps et interfaces responsive pour offrir une navigation fluide sur tous les ecrans.",
  },
  {
    icon: "wrench",
    title: "Maintenance de sites existants",
    description:
      "Mises a jour, corrections, securite, contenu, optimisation et support pour garder votre site propre, rapide et fonctionnel.",
  },
  {
    icon: "spark",
    title: "Refonte et optimisation",
    description:
      "Amelioration du design, de la performance, du responsive et des parcours pour rendre votre site plus professionnel.",
  },
];

export const expertise = [
  "React",
  "WordPress",
  "TailwindCSS",
  "Framer Motion",
  "Sites vitrines",
  "Apps web",
  "Apps mobiles",
  "Maintenance",
  "Design systems",
  "Performance",
];

export const pricing = [
  {
    name: "Starter Web",
    price: "A partir de 100 EUR",
    description: "Pour lancer une presence simple, propre et responsive sans perdre de temps.",
    features: ["1 page professionnelle", "Design responsive", "Section services + contact", "Mise en ligne guidee"],
    highlight: false,
  },
  {
    name: "Business Premium",
    price: "A partir de 450 EUR",
    description: "Pour une activite qui veut une image plus forte et une page qui convertit mieux.",
    features: ["Site multi-sections", "Copywriting commercial", "Animations premium", "SEO technique de base"],
    highlight: true,
  },
  {
    name: "WordPress",
    price: "Sur devis",
    description: "Pour creer, personnaliser ou ameliorer un site WordPress professionnel et facile a administrer.",
    features: ["Installation WordPress", "Theme personnalise", "Pages essentielles", "Formation rapide"],
    highlight: false,
  },
  {
    name: "Web App / Mobile",
    price: "Sur devis",
    description: "Pour creer un outil, une plateforme, un dashboard ou une interface mobile sur mesure.",
    features: ["Architecture React", "Parcours utilisateur", "Interface admin ou client", "Base scalable"],
    highlight: false,
  },
  {
    name: "Maintenance",
    price: "Forfait mensuel",
    description: "Pour garder votre site a jour, corriger les problemes et ameliorer sa performance dans le temps.",
    features: ["Mises a jour", "Corrections techniques", "Securite et sauvegarde", "Support continu"],
    highlight: false,
  },
];

export const projectCatalog = [
  {
    title: "Site vitrine pour restaurant",
    type: "Creation site web",
    category: "Site web",
    result: "+62% reservations",
    budget: "A partir de 450 EUR",
    timeline: "2 a 3 semaines",
    status: "Exemple service",
    brand: {
      name: "Maison Verde",
      initials: "MV",
      industry: "Restaurant mediterraneen",
      accent: "from-emerald-300 to-lime-200",
      assets: ["Logo", "Palette", "Maquette PSD"],
    },
    description:
      "Exemple de site vitrine pour un restaurant: ambiance, menu, horaires, galerie photo, carte Google Maps et bouton de reservation visible.",
    image: "/project-images/creation-site-web-restaurant.png",
    gallery: [
      "/project-images/creation-site-web-restaurant.png",
      "/project-images/creation-site-web-restaurant-menu.png",
      "/project-images/creation-site-web-restaurant-responsive.png",
    ],
    imageAlt: "Restaurant chaleureux avec tables preparees pour illustrer un site vitrine",
    imagePosition: "center",
    challenge: "Donner envie de venir sur place et rendre la reservation simple depuis mobile.",
    solution: "Page d'accueil immersive, menu clair, photos du lieu, avis clients, carte et CTA de reservation.",
    stack: ["React", "TailwindCSS", "Framer Motion"],
    features: ["Menu en ligne", "Galerie photo", "Avis clients", "Reservation"],
    deliverables: ["Maquette responsive", "Developpement frontend", "SEO local de base", "Mise en ligne guidee"],
  },
  {
    title: "Dashboard pour agence immobiliere",
    type: "Application web",
    category: "App web",
    result: "2.4x plus rapide",
    budget: "Sur devis",
    timeline: "4 a 8 semaines",
    status: "Exemple service",
    brand: {
      name: "Nova Habitat",
      initials: "NH",
      industry: "Agence immobiliere",
      accent: "from-sky-300 to-cyan-200",
      assets: ["Logo", "Dashboard", "Maquette PSD"],
    },
    description:
      "Exemple d'application web pour une agence immobiliere: biens, demandes clients, visites, statuts et suivi commercial dans un seul espace.",
    image: "/project-images/application-web-immobilier.png",
    gallery: [
      "/project-images/application-web-immobilier.png",
      "/project-images/application-web-immobilier-biens.png",
      "/project-images/application-web-immobilier-visites.png",
    ],
    imageAlt: "Maison moderne representant une application web pour agence immobiliere",
    imagePosition: "center",
    challenge: "Centraliser les biens, les prospects et les rendez-vous sans multiplier les fichiers manuels.",
    solution: "Dashboard React avec fiches biens, suivi prospects, demandes entrantes et formulaires rapides.",
    stack: ["React", "TailwindCSS", "API-ready"],
    features: ["Liste de biens", "Suivi prospects", "Planning visites", "Pages internes"],
    deliverables: ["Architecture frontend", "UI kit", "Parcours utilisateur", "Documentation de base"],
  },
  {
    title: "App mobile pour salon de beaute",
    type: "Interface app mobile",
    category: "Mobile",
    result: "-31% friction",
    budget: "Sur devis",
    timeline: "2 a 5 semaines",
    status: "Exemple service",
    brand: {
      name: "Luna Studio",
      initials: "LS",
      industry: "Salon de beaute",
      accent: "from-pink-300 to-rose-200",
      assets: ["Logo", "App mobile", "Maquette PSD"],
    },
    description:
      "Exemple d'interface mobile pour un salon de beaute: choix du service, disponibilites, reservation et rappel de rendez-vous.",
    image: "/project-images/mobile-salon-beaute.png",
    gallery: [
      "/project-images/mobile-salon-beaute.png",
      "/project-images/mobile-salon-beaute-services.png",
      "/project-images/mobile-salon-beaute-rdv.png",
    ],
    imageAlt: "Salon de beaute moderne pour illustrer une application mobile de reservation",
    imagePosition: "center",
    challenge: "Permettre aux clientes de reserver vite depuis leur telephone sans appeler le salon.",
    solution: "Parcours mobile-first, choix de prestation, calendrier clair, CTA fixe et confirmation simple.",
    stack: ["React", "Responsive UI", "Motion"],
    features: ["Catalogue services", "Reservation", "CTA fixe", "Rappel rendez-vous"],
    deliverables: ["Prototype responsive", "Composants UI", "Guide d'integration", "Optimisation mobile"],
  },
  {
    title: "WordPress pour cafe shop",
    type: "Creation WordPress",
    category: "WordPress",
    result: "Administration simple",
    budget: "Sur devis",
    timeline: "1 a 4 semaines",
    status: "Exemple service",
    brand: {
      name: "Cafe Nori",
      initials: "CN",
      industry: "Cafe shop",
      accent: "from-amber-300 to-orange-200",
      assets: ["Logo", "WordPress", "Maquette PSD"],
    },
    description:
      "Exemple de site WordPress pour un cafe shop: menu, photos, horaires, adresse, evenements et contenus modifiables par le gerant.",
    image: "/project-images/wordpress-cafe-shop.png",
    gallery: [
      "/project-images/wordpress-cafe-shop.png",
      "/project-images/wordpress-cafe-shop-menu.png",
      "/project-images/wordpress-cafe-shop-admin.png",
    ],
    imageAlt: "Cafe shop chaleureux avec comptoir et tables pour illustrer un site WordPress",
    imagePosition: "center",
    challenge: "Avoir un site joli et facile a mettre a jour pour changer le menu, les horaires ou annoncer un evenement.",
    solution: "WordPress propre, theme personnalise, pages essentielles, blocs simples et configuration SEO locale.",
    stack: ["WordPress", "Theme custom", "SEO base"],
    features: ["Menu cafe", "Galerie", "Horaires", "Blog evenements"],
    deliverables: ["Site administrable", "Configuration plugins", "Formation rapide", "Mise en ligne"],
  },
  {
    title: "Maintenance pour boutique en ligne",
    type: "Maintenance",
    category: "Maintenance",
    result: "Site plus stable",
    budget: "Forfait mensuel",
    timeline: "Continu",
    status: "Exemple service",
    brand: {
      name: "Urban Cart",
      initials: "UC",
      industry: "Boutique en ligne",
      accent: "from-blue-300 to-teal-200",
      assets: ["Logo", "Audit", "Maquette PSD"],
    },
    description:
      "Exemple de maintenance pour une boutique en ligne: mises a jour, corrections, sauvegardes, vitesse et verification du parcours d'achat.",
    image: "/project-images/maintenance-boutique-en-ligne.png",
    gallery: [
      "/project-images/maintenance-boutique-en-ligne.png",
      "/project-images/maintenance-boutique-performance.png",
      "/project-images/maintenance-boutique-checkout.png",
    ],
    imageAlt: "Client utilisant un ordinateur pour acheter en ligne dans une boutique e-commerce",
    imagePosition: "center",
    challenge: "Eviter les bugs, les lenteurs, les plugins obsoletes et les interruptions qui coutent des ventes.",
    solution: "Mises a jour controlees, sauvegardes, corrections, optimisation responsive et support regulier.",
    stack: ["WordPress", "React", "HTML/CSS", "Hosting"],
    features: ["Mises a jour", "Corrections panier", "Sauvegardes", "Optimisation"],
    deliverables: ["Rapport simple", "Corrections techniques", "Support", "Suivi mensuel"],
  },
  {
    title: "Refonte pour cabinet dentaire",
    type: "Refonte et optimisation",
    category: "Refonte",
    result: "Image plus premium",
    budget: "A partir de 300 EUR",
    timeline: "1 a 3 semaines",
    status: "Exemple service",
    brand: {
      name: "Clinique Nova",
      initials: "CN",
      industry: "Cabinet dentaire",
      accent: "from-cyan-200 to-blue-200",
      assets: ["Logo", "Refonte", "Maquette PSD"],
    },
    description:
      "Exemple de refonte pour un cabinet dentaire: design plus rassurant, prestations claires, prise de rendez-vous et informations pratiques.",
    image: "/project-images/refonte-cabinet-dentaire.png",
    gallery: [
      "/project-images/refonte-cabinet-dentaire.png",
      "/project-images/refonte-cabinet-dentaire-before-after.png",
      "/project-images/refonte-cabinet-dentaire-responsive.png",
    ],
    imageAlt: "Cabinet dentaire moderne pour illustrer une refonte de site professionnel",
    imagePosition: "center",
    challenge: "Un site deja en ligne mais trop ancien, peu rassurant ou difficile a utiliser sur mobile.",
    solution: "Nouvelle hierarchie, textes plus directs, design rassurant et responsive complet.",
    stack: ["UX", "TailwindCSS", "WordPress ou React"],
    features: ["Audit rapide", "Nouveau design", "RDV visible", "Performance"],
    deliverables: ["Recommandations", "Refonte UI", "Integration", "Optimisations"],
  },
];

export const featuredProjects = projectCatalog.slice(0, 3);

export const outcomes = [
  {
    value: "Plus clair",
    title: "Votre offre se comprend vite",
    text: "Le visiteur sait ce que vous faites, pour qui, pourquoi vous faire confiance et comment vous contacter.",
  },
  {
    value: "Plus premium",
    title: "Votre image gagne en valeur",
    text: "Le design donne une impression professionnelle des les premieres secondes, surtout sur mobile.",
  },
  {
    value: "Plus utile",
    title: "Votre site aide vraiment votre business",
    text: "Chaque section sert un objectif: rassurer, expliquer, qualifier ou declencher une demande.",
  },
];

export const qualification = [
  {
    title: "Vous voulez un site professionnel",
    text: "Votre activite merite une presence claire, moderne et credible qui donne envie de vous contacter.",
  },
  {
    title: "Vous avez besoin d'une application web",
    text: "Votre business demande un outil sur mesure pour gerer, vendre, automatiser ou simplifier vos operations.",
  },
  {
    title: "Vous ciblez les utilisateurs mobiles",
    text: "Votre experience doit rester fluide, rapide et convaincante sur smartphone comme sur desktop.",
  },
  {
    title: "Vous voulez maintenir un site existant",
    text: "Votre site a besoin de mises a jour, corrections, securite, optimisation ou ameliorations regulieres.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Comprendre",
    text: "On definit vos objectifs, votre audience, les fonctionnalites utiles et le niveau de conversion attendu.",
  },
  {
    step: "02",
    title: "Concevoir",
    text: "Je cree une interface premium, lisible et responsive avec un parcours simple pour vos futurs clients.",
  },
  {
    step: "03",
    title: "Developper",
    text: "Je livre un site ou une application React rapide, propre, maintenable et pret a etre mis en ligne.",
  },
];

export const communication = [
  {
    icon: "message",
    title: "Brief clair des le depart",
    text: "On pose les objectifs, les pages, les fonctionnalites, les contenus et les priorites avant de coder.",
  },
  {
    icon: "clock",
    title: "Suivi simple et regulier",
    text: "Vous savez toujours ce qui est fait, ce qui arrive ensuite et ce qui bloque eventuellement l'avancement.",
  },
  {
    icon: "shield",
    title: "Validation sans confusion",
    text: "Chaque etape importante est presentee clairement pour prendre des decisions rapides et eviter les malentendus.",
  },
];

export const clientSteps = [
  "Vous expliquez votre besoin",
  "Je propose une direction claire",
  "On valide le scope et le devis",
  "Je design et developpe votre solution",
];

export const faqs = [
  {
    question: "Est-ce que le prix a 100 EUR inclut tout?",
    answer:
      "Le prix de depart concerne un site simple d'une page. Le tarif exact depend du nombre de sections, du contenu, des animations, des fonctionnalites et de la mise en ligne.",
  },
  {
    question: "Pouvez-vous creer une application web complete?",
    answer:
      "Oui. Je peux creer une application web React avec dashboard, espace client, formulaires, pages internes et structure evolutive. Le budget se fait sur devis.",
  },
  {
    question: "Faites-vous aussi des sites WordPress?",
    answer:
      "Oui. Je peux creer un site WordPress, personnaliser un theme, corriger un site existant, ajouter des pages, optimiser les performances ou mettre en place les bases SEO.",
  },
  {
    question: "Proposez-vous la maintenance de sites existants?",
    answer:
      "Oui. La maintenance peut inclure les mises a jour, corrections, sauvegardes, securite, changements de contenu, optimisation mobile et support technique.",
  },
  {
    question: "Le site sera-t-il responsive sur mobile?",
    answer:
      "Oui. Chaque projet est pense mobile-first pour offrir une experience propre sur telephone, tablette et desktop.",
  },
  {
    question: "Comment se passe la communication?",
    answer:
      "Vous recevez une direction claire, des etapes simples et des points de validation. L'objectif est d'avancer vite sans confusion.",
  },
];

export const projectTypes = ["Site web", "Site WordPress", "Application web", "Application mobile", "Maintenance", "Refonte"];
export const budgets = ["100 - 450 EUR", "1 000 - 3 000 EUR", "3 000 - 7 000 EUR", "7 000 EUR et plus"];
export const timelines = ["Le plus vite possible", "2 a 4 semaines", "1 a 2 mois", "Planning flexible"];

