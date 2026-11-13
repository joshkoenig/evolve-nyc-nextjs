import type { ComponentConfig } from "@puckeditor/core";
import { defineMeta } from "@/lib/define-meta";
import { OrchardAlertRender, type OrchardAlertProps } from "./orchard-alert";
export type { OrchardAlertProps };

export const OrchardAlertBlock: ComponentConfig<OrchardAlertProps> = {
  fields: {
    level: {
      type: "select" as const,
      options: [
        { label: "Notice (yellow)", value: "notice" },
        { label: "Warning (orange)", value: "warning" },
        { label: "Emergency (red)", value: "emergency" },
      ],
      ai: { instructions: "Severity. Notice for general news, warning for service impacts, emergency for urgent safety information." },
    },
    heading: {
      type: "text" as const,
      ai: { instructions: "Short alert headline, under 10 words." },
    },
    description: {
      type: "text" as const,
      ai: { instructions: "One sentence of detail. Leave blank to omit." },
    },
    href: {
      type: "text" as const,
      label: "Link URL (https:// or /path; makes the whole alert a link)",
      ai: { exclude: true },
    },
  },
  defaultProps: {
    level: "notice",
    heading: "Service notice",
    description: "Office hours may change during the holiday week.",
    href: "",
  },
  render: OrchardAlertRender,
};

export const meta = defineMeta({
  title: "Orchard Alert",
  description: "Orchard alert banner in notice, warning or emergency level, with an optional link that turns the whole banner into a link.",
  categories: ["orchard"],
  published: false,
});
