import type { ComponentConfig } from "@puckeditor/core";
import { defineMeta } from "@/lib/define-meta";
import { OrchardBreadcrumbsRender, type OrchardBreadcrumbsProps } from "./orchard-breadcrumbs";
export type { OrchardBreadcrumbsProps };

export const OrchardBreadcrumbsBlock: ComponentConfig<OrchardBreadcrumbsProps> = {
  fields: {
    items: {
      type: "array" as const,
      arrayFields: {
        label: { type: "text" as const, ai: { instructions: "Link text of an ancestor page." } },
        href: { type: "text" as const, label: "URL (https:// or /path)", ai: { exclude: true } },
      },
      defaultItemProps: { label: "Page", href: "/" },
      getItemSummary: (item: { label: string }) => item.label || "Crumb",
      ai: { instructions: "Ancestor pages from the home page down to the parent of the current page." },
    },
    current: {
      type: "text" as const,
      label: "Current page",
      ai: { instructions: "Title of the page being viewed. It is shown as plain text." },
    },
  },
  defaultProps: {
    items: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
    ],
    current: "Renew a license",
  },
  render: OrchardBreadcrumbsRender,
};

export const meta = defineMeta({
  title: "Orchard Breadcrumbs",
  description: "Orchard breadcrumb trail: ancestor links followed by the current page.",
  categories: ["orchard"],
  published: false,
});
