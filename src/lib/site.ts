export const site = {
  name: "DitM",
  description:
    "Tworzymy oprogramowanie, integrujemy AI i automatyzujemy procesy. Praktyczne wdrożenia i szkolenia AI dla firm.",
  email: "marcin.buczakk@gmail.com",
  phone: "+48 798 380 737",
  phoneHref: "tel:+48798380737",
  contactName: "Marcin Buczak",
};

const deploymentHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ||
    (deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000"),
);
export const emailHref = `mailto:${site.email}?subject=${encodeURIComponent("Porozmawiajmy o projekcie — DitM")}`;
export const formatDate = (date: string) =>
  new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
