import type { ComponentConfig } from "@puckeditor/core";
import { defineMeta } from "@/lib/define-meta";
import { OrchardTeaserRender, type OrchardTeaserProps } from "./orchard-teaser";
export type { OrchardTeaserProps };

export const OrchardTeaserBlock: ComponentConfig<OrchardTeaserProps> = {
  fields: {
    title: { type: "text" as const, ai: { instructions: "Teaser headline, under 10 words." } },
    summary: { type: "textarea" as const, ai: { instructions: "One or two sentences." } },
    href: { type: "text" as const, label: "Link URL (https:// or /path; makes the teaser a link)", ai: { exclude: true } },
    imageSrc: { type: "text" as const, label: "Image URL (https:// or /path; optional)", ai: { exclude: true } },
    imageAlt: { type: "text" as const, label: "Image description", ai: { instructions: "Alt text for the image. Empty if decorative." } },
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
    title: "Find a service center near you",
    summary: "Look up locations, hours and the documents to bring with you.",
    href: "",
    imageSrc: "",
    imageAlt: "",
    dark: "off",
  },
  render: OrchardTeaserRender,
};

export const meta = defineMeta({
  title: "Orchard Teaser",
  description: "Orchard teaser: a headline and summary in a tinted bar with an arrow, optional image, linkable, with a light or dark background.",
  categories: ["orchard"],
  published: false,
});
