import PortfolioPageClient from "./page-client.jsx";
import { brandOgImage, siteUrl } from "../../data";

const title = "Portfolio de créations web, WordPress et applications";
const description =
  "Découvrez les réalisations Web Engineer: sites vitrines, applications web, projets WordPress, maintenance et refontes orientées conversion.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/portfolio/",
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/portfolio/`,
    images: [
      {
        url: brandOgImage,
        width: 1536,
        height: 1024,
        alt: "Portfolio de créations web Web Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [brandOgImage],
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
