import type { ComponentConfig } from "@puckeditor/core";
import { defineMeta } from "@/lib/define-meta";
import { OrchardHeaderRender, type OrchardHeaderProps } from "./orchard-header";
export type { OrchardHeaderProps };

export const OrchardHeaderBlock: ComponentConfig<OrchardHeaderProps> = {
  fields: {
    wordmark: {
      type: "text" as const,
      label: "Site name",
      ai: { instructions: "The site or agency name shown in the header." },
    },
    logoSrc: {
      type: "text" as const,
      label: "Logo URL (https:// or /path; optional)",
      ai: { exclude: true },
    },
    logoAlt: {
      type: "text" as const,
      label: "Logo description",
      ai: { exclude: true },
    },
    homeHref: {
      type: "text" as const,
      label: "Home link (https:// or /path)",
      ai: { exclude: true },
    },
    showSearch: {
      type: "radio" as const,
      label: "Search",
      options: [
        { label: "Off", value: "off" },
        { label: "On", value: "on" },
      ],
    },
    searchAction: {
      type: "text" as const,
      label: "Search page (https:// or /path)",
      ai: { exclude: true },
    },
    navItems: {
      type: "array" as const,
      label: "Simple links (optional; use Main Menu instead)",
      arrayFields: {
        label: {
          type: "text" as const,
          ai: { instructions: "Link text, 1–3 words." },
        },
        href: {
          type: "text" as const,
          label: "URL (https:// or /path)",
          ai: { exclude: true },
        },
      },
      defaultItemProps: { label: "Link", href: "/" },
      getItemSummary: (item: { label: string }) => item.label || "Link",
      ai: {
        instructions:
          "Leave empty and use the Orchard Main Menu block for navigation; only add simple links here for small sites.",
      },
    },
  },
  defaultProps: {
    wordmark: "Orchard Demo",
    logoSrc: "",
    logoAlt: "",
    homeHref: "/",
    showSearch: "on",
    searchAction: "/search",
    navItems: [],
  },
  render: OrchardHeaderRender,
};

export const meta = defineMeta({
  title: "Orchard Header",
  description:
    "Orchard site header: branding bar with the site name (and optional logo) and an optional search toggle. Pair with Orchard Main Menu for site navigation.",
  categories: ["orchard"],
  published: false,
});
