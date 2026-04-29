import { contactEmail } from "../data";

export default function buildMailto(formElement) {
  const form = new FormData(formElement);
  const projectDetails = [
    `Nom: ${form.get("name") || ""}`,
    `Email: ${form.get("email") || ""}`,
    `Type de projet: ${form.get("projectType") || ""}`,
    `Budget estime: ${form.get("budget") || ""}`,
    `Delai souhaite: ${form.get("timeline") || ""}`,
    "",
    "Brief:",
    form.get("message") || "",
  ].join("\n");

  return `mailto:${contactEmail}?subject=${encodeURIComponent(
    "Demande de devis - Site web / application",
  )}&body=${encodeURIComponent(projectDetails)}`;
}

