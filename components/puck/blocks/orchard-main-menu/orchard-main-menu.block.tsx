import type { ComponentConfig } from "@puckeditor/core";
import { defineMeta } from "@/lib/define-meta";
import {
  OrchardMainMenuRender,
  type OrchardMainMenuProps,
} from "./orchard-main-menu";
export type { OrchardMainMenuProps };

export const OrchardMainMenuBlock: ComponentConfig<OrchardMainMenuProps> = {
  fields: {
    items: {
      type: "array" as const,
      label: "Menu items",
      arrayFields: {
        label: {
          type: "text" as const,
          ai: { instructions: "Menu link text, 1–3 words." },
        },
        href: {
          type: "text" as const,
          label: "URL (https:// or /path)",
          ai: { exclude: true },
        },
        active: {
          type: "radio" as const,
          label: "Current section",
          options: [
            { label: "No", value: "off" },
            { label: "Yes", value: "on" },
          ],
        },
        children: {
          type: "array" as const,
          label: "Dropdown links",
          arrayFields: {
            label: {
              type: "text" as const,
              ai: { instructions: "Dropdown link text, 1–4 words." },
            },
            href: {
              type: "text" as const,
              label: "URL (https:// or /path)",
              ai: { exclude: true },
            },
          },
          defaultItemProps: { label: "Link", href: "/" },
          getItemSummary: (item: { label: string }) => item.label || "Link",
          ai: { instructions: "Optional 1–8 dropdown links for this item." },
        },
      },
      defaultItemProps: {
        label: "Menu item",
        href: "/",
        active: "off",
        children: [],
      },
      getItemSummary: (item: { label: string }) => item.label || "Menu item",
      ai: {
        instructions: "4–7 top-level menu items, some with dropdown links.",
      },
    },
  },
  defaultProps: {
    items: [
      {
        label: "Services",
        href: "/services",
        active: "off",
        children: [
          { label: "Driver services", href: "/services" },
          { label: "Business licenses", href: "/services" },
          { label: "Vital records", href: "/services" },
        ],
      },
      {
        label: "Locations",
        href: "/locations",
        active: "off",
        children: [
          { label: "Find an office", href: "/locations" },
          { label: "Hours", href: "/locations" },
        ],
      },
      { label: "News", href: "/news", active: "off", children: [] },
      { label: "About us", href: "/about", active: "on", children: [] },
    ],
  },
  render: OrchardMainMenuRender,
};

export const meta = defineMeta({
  title: "Orchard Main Menu",
  description:
    "Orchard main menu: the site navigation bar with top-level links, optional dropdown links and a mobile Menu button.",
  categories: ["orchard"],
  published: false,
});
