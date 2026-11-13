import type { ComponentConfig } from "@puckeditor/core";
import { defineMeta } from "@/lib/define-meta";
import { OrchardAccordionRender, type OrchardAccordionProps } from "./orchard-accordion";
export type { OrchardAccordionProps };

export const OrchardAccordionBlock: ComponentConfig<OrchardAccordionProps> = {
  fields: {
    items: {
      type: "array" as const,
      arrayFields: {
        title: { type: "text" as const, ai: { instructions: "Question or section heading." } },
        content: { type: "textarea" as const, ai: { instructions: "The answer or section body, one short paragraph." } },
      },
      defaultItemProps: { title: "Section title", content: "Section content." },
      getItemSummary: (item: { title: string }) => item.title || "Section",
      ai: { instructions: "3–6 collapsible sections." },
    },
    toggleAll: {
      type: "radio" as const,
      label: "Show / hide all button",
      options: [
        { label: "Off", value: "off" },
        { label: "On", value: "on" },
      ],
    },
  },
  defaultProps: {
    items: [
      { title: "What do I need to apply?", content: "A government-issued photo ID, proof of address, and your account number." },
      { title: "How long does it take?", content: "Most applications are reviewed within five business days." },
      { title: "Is there a fee?", content: "Fees vary by service. The fee is shown before you submit." },
    ],
    toggleAll: "on",
  },
  render: OrchardAccordionRender,
};

export const meta = defineMeta({
  title: "Orchard Accordion",
  description: "Orchard accordion of collapsible sections, with an optional show-all / hide-all button.",
  categories: ["orchard"],
  published: false,
});
