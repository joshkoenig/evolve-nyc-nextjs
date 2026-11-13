import type { ComponentConfig } from "@puckeditor/core";
import { defineMeta } from "@/lib/define-meta";
import { OrchardHeaderRender, type OrchardHeaderProps } from "./orchard-header";
export type { OrchardHeaderProps };

export const OrchardHeaderBlock: ComponentConfig<OrchardHeaderProps> = {
  fields: {
    wordmark: { type: "text" as const, label: "Site name", ai: { instructions: "The site or agency name shown in the header." } },
    logoSrc: { type: "text" as const, label: "Logo URL (https:// or /path; optional)", ai: { exclude: true } },
    logoAlt: { type: "text" as const, label: "Logo description", ai: { exclude: true } },
    homeHref: { type: "text" as const, label: "Home link (https:// or /path)", ai: { exclude: true } },
    navItems: {
      type: "array" as const,
      label: "Navigation links",
      arrayFields: {
        label: { type: "text" as const, ai: { instructions: "Link text, 1–3 words." } },
        href: { type: "text" as const, label: "URL (https:// or /path)", ai: { exclude: true } },
      },
      defaultItemProps: { label: "Link", href: "/" },
      getItemSummary: (item: { label: string }) => item.label || "Link",
      ai: { instructions: "4–6 main navigation links." },
    },
  },
  defaultProps: {
    wordmark: "Orchard Demo",
    logoSrc: "",
    logoAlt: "",
    homeHref: "/",
    navItems: [
      { label: "Services", href: "/services" },
      { label: "Locations", href: "/locations" },
      { label: "News", href: "/news" },
      { label: "Contact", href: "/contact" },
    ],
  },
  render: OrchardHeaderRender,
};

export const meta = defineMeta({
  title: "Orchard Header",
  description: "Orchard site header: branding bar with a site name (and optional logo) and a row of main navigation links.",
  categories: ["orchard"],
  published: false,
});
