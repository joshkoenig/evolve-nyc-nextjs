import type { ComponentConfig } from "@puckeditor/core";
import { defineMeta } from "@/lib/define-meta";
import { OrchardCardRender, type OrchardCardProps } from "./orchard-card";
export type { OrchardCardProps };

export const OrchardCardBlock: ComponentConfig<OrchardCardProps> = {
  fields: {
    title: { type: "text" as const, ai: { instructions: "Card heading, under 8 words." } },
    body: { type: "textarea" as const, ai: { instructions: "Two or three sentences." } },
    imageSrc: {
      type: "text" as const,
      label: "Image URL (https:// or /path; optional)",
      ai: { exclude: true },
    },
    imageAlt: { type: "text" as const, label: "Image description", ai: { instructions: "Alt text for the image. Empty if decorative." } },
    href: { type: "text" as const, label: "Link URL (https:// or /path)", ai: { exclude: true } },
    linkLabel: {
      type: "text" as const,
      label: "Link text (shows a more link when a URL is set)",
      ai: { instructions: "Link text such as Learn more. 2–4 words." },
    },
    dark: {
      type: "radio" as const,
      label: "Dark background",
      options: [
        { label: "Off", value: "off" },
        { label: "On", value: "on" },
      ],
    },
  },
  defaultProps: {
    title: "Renew your license online",
    body: "Skip the line. Renew from home in a few minutes with your account number and a payment method.",
    imageSrc: "",
    imageAlt: "",
    href: "",
    linkLabel: "Start renewal",
    dark: "off",
  },
  render: OrchardCardRender,
};

export const meta = defineMeta({
  title: "Orchard Card",
  description: "Orchard card with a title, body text, optional image, optional more link, and a light or dark background.",
  categories: ["orchard"],
  published: false,
});
