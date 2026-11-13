import type { ComponentConfig } from "@puckeditor/core";
import { defineMeta } from "@/lib/define-meta";
import "@/lib/orchard";
import {
  OrchardCalloutRender,
  type OrchardCalloutProps,
} from "./orchard-callout";
export type { OrchardCalloutProps };

export const OrchardCalloutBlock: ComponentConfig<OrchardCalloutProps> = {
  fields: {
    style: {
      type: "radio" as const,
      options: [
        { label: "Standard", value: "standard" },
        { label: "Quote", value: "quote" },
      ],
      ai: {
        instructions:
          "Standard highlights a key statement. Quote is for a pull quote.",
      },
    },
    content: {
      type: "textarea" as const,
      ai: {
        instructions:
          "One or two sentences. Keep it short enough to stand out.",
      },
    },
  },
  defaultProps: {
    style: "standard",
    content:
      "Most renewals take less than five minutes when you have your account number ready.",
  },
  render: OrchardCalloutRender,
};

export const meta = defineMeta({
  title: "Orchard Callout",
  description:
    "Orchard callout in a standard highlight style or a pull-quote style.",
  categories: ["orchard"],
  published: false,
});
