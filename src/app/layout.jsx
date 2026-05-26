import "../index.css";
import ClientProviders from "./providers.jsx";
import { brandName, brandOgImage, contactEmail, contactPhoneHref, instagramUrl, siteUrl } from "../data";

const siteName = brandName;
const title = `${siteName} | Création de sites web, WordPress et applications`;
const description =
  "Création de sites web, sites WordPress et applications web rapides pour présenter votre activité, rassurer vos visiteurs et recevoir plus de demandes.";
const services = [
  "Création de site web",
  "Création de site WordPress",
  "Application web",
  "Interface mobile",
  "Maintenance de site web",
  "Refonte de site web",
];

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "Web development",
  keywords: [
    "création site web",
    "création site WordPress",
    "développeur web",
    "application web",
    "site vitrine",
    "refonte site web",
    "maintenance site web",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    locale: "fr_FR",
    type: "website",
    siteName,
    title,
    description,
    url: siteUrl,
    images: [
      {
        url: brandOgImage,
        width: 1536,
        height: 1024,
        alt: "Aperçu de création web Web Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [brandOgImage],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/fav.png",
    apple: "/fav.png",
  },
};

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}${brandOgImage}`,
    email: contactEmail,
    telephone: contactPhoneHref,
    sameAs: [instagramUrl],
    description,
    areaServed: "FR",
    priceRange: "À partir de 100 EUR",
    serviceType: services,
    offers: {
      "@type": "Offer",
      price: "100",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      description: "Site web professionnel à partir de 100 EUR.",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: contactEmail,
      telephone: contactPhoneHref,
      contactType: "customer service",
      availableLanguage: ["fr"],
    },
  };

  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
