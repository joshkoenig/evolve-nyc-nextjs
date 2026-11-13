import type { ComponentConfig } from "@puckeditor/core";
import { defineMeta } from "@/lib/define-meta";
import {
  OrchardLinkButtonRender,
  type OrchardLinkButtonProps,
} from "./orchard-link-button";
export type { OrchardLinkButtonProps };

export const OrchardLinkButtonBlock: ComponentConfig<OrchardLinkButtonProps> = {
  fields: {
    label: {
      type: "text" as const,
      ai: { instructions: "Button text, 2–4 words." },
    },
    href: {
      type: "text" as const,
      label: "URL (https:// or /path)",
      ai: { exclude: true },
    },
    target: {
      type: "radio" as const,
      options: [
        { label: "Same tab", value: "_self" },
        { label: "New tab", value: "_blank" },
      ],
      ai: { exclude: true },
    },
  },
  defaultProps: { label: "Get started", href: "/", target: "_self" },
  render: OrchardLinkButtonRender,
};

export const meta = defineMeta({
  title: "Orchard Link Button",
  description: "Orchard link styled as a button, with a circled arrow.",
  categories: ["orchard"],
  published: false,
});
