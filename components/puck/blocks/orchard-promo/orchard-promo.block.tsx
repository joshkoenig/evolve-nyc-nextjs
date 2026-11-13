import type { ComponentConfig } from "@puckeditor/core";
import { defineMeta } from "@/lib/define-meta";
import { OrchardPromoRender, type OrchardPromoProps } from "./orchard-promo";
export type { OrchardPromoProps };

export const OrchardPromoBlock: ComponentConfig<OrchardPromoProps> = {
  fields: {
    title: {
      type: "text" as const,
      label: "Headline",
      ai: { instructions: "Promo headline, a short phrase." },
    },
    description: {
      type: "textarea" as const,
      ai: { instructions: "Optional description, up to 350 characters." },
    },
    linkLabel: {
      type: "text" as const,
      label: "Link text",
      ai: { instructions: "Call-to-action link text, 2–4 words." },
    },
    href: {
      type: "text" as const,
      label: "Link (https:// or /path)",
      ai: { exclude: true },
    },
    imageSrc: {
      type: "text" as const,
      label: "Image URL (https:// or /path; optional)",
      ai: { exclude: true },
    },
    imageAlt: {
      type: "text" as const,
      label: "Image description",
      ai: { exclude: true },
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
    description:
      "Skip the line. Most renewals are completed in under five minutes and your new card arrives by mail.",
    linkLabel: "Start renewal",
    href: "/",
    imageSrc: "",
    imageAlt: "",
    dark: "off",
  },
  render: OrchardPromoRender,
};

export const meta = defineMeta({
  title: "Orchard Promo",
  description:
    "Orchard promo: a large headline with a short description and a link, optionally with an image beside it.",
  categories: ["orchard"],
  published: false,
});
