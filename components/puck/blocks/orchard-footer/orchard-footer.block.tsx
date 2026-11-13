import type { ComponentConfig } from "@puckeditor/core";
import { defineMeta } from "@/lib/define-meta";
import { OrchardFooterRender, type OrchardFooterProps } from "./orchard-footer";
export type { OrchardFooterProps };

const linkFields = {
  label: { type: "text" as const, ai: { instructions: "Link text, 1–4 words." } },
  href: { type: "text" as const, label: "URL (https:// or /path)", ai: { exclude: true } },
};

export const OrchardFooterBlock: ComponentConfig<OrchardFooterProps> = {
  fields: {
    wordmark: { type: "text" as const, label: "Site name", ai: { instructions: "Site or agency name shown in the footer." } },
    contactTitle: { type: "text" as const, label: "Contact heading" },
    phone: { type: "text" as const, label: "Phone (leave blank to omit)" },
    email: { type: "text" as const, label: "Email (leave blank to omit)" },
    primaryTitle: { type: "text" as const, label: "Primary links heading" },
    primaryLinks: {
      type: "array" as const,
      label: "Primary links",
      arrayFields: linkFields,
      defaultItemProps: { label: "Link", href: "/" },
      getItemSummary: (item: { label: string }) => item.label || "Link",
    },
    secondaryTitle: { type: "text" as const, label: "Secondary links heading" },
    secondaryLinks: {
      type: "array" as const,
      label: "Secondary links (leave empty to hide the column)",
      arrayFields: linkFields,
      defaultItemProps: { label: "Link", href: "/" },
      getItemSummary: (item: { label: string }) => item.label || "Link",
    },
    facebook: { type: "text" as const, label: "Facebook URL (optional)", ai: { exclude: true } },
    youtube: { type: "text" as const, label: "YouTube URL (optional)", ai: { exclude: true } },
    instagram: { type: "text" as const, label: "Instagram URL (optional)", ai: { exclude: true } },
    linkedin: { type: "text" as const, label: "LinkedIn URL (optional)", ai: { exclude: true } },
    copyright: { type: "text" as const },
  },
  defaultProps: {
    wordmark: "Orchard Demo",
    contactTitle: "Contact us",
    phone: "(555) 010-0199",
    email: "hello@example.com",
    primaryTitle: "Quick links",
    primaryLinks: [
      { label: "Services", href: "/services" },
      { label: "Locations", href: "/locations" },
      { label: "News", href: "/news" },
    ],
    secondaryTitle: "About",
    secondaryLinks: [
      { label: "Accessibility", href: "/accessibility" },
      { label: "Privacy policy", href: "/privacy" },
    ],
    facebook: "https://www.facebook.com/",
    youtube: "https://www.youtube.com/",
    instagram: "",
    linkedin: "https://www.linkedin.com/",
    copyright: "© 2026 Orchard Demo. Built with the Orchard design system.",
  },
  render: OrchardFooterRender,
};

export const meta = defineMeta({
  title: "Orchard Footer",
  description: "Orchard site footer: site name, social links, contact details, one or two link columns and a copyright line.",
  categories: ["orchard"],
  published: false,
});
