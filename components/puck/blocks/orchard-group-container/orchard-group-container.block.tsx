import type { ComponentConfig } from "@puckeditor/core";
import { defineMeta } from "@/lib/define-meta";
import {
  OrchardGroupContainerRender,
  type OrchardGroupContainerProps,
} from "./orchard-group-container";
export type { OrchardGroupContainerProps };

export const OrchardGroupContainerBlock: ComponentConfig<OrchardGroupContainerProps> =
  {
    fields: {
      headline: {
        type: "text" as const,
        ai: { instructions: "Heading for the group of related content." },
      },
      description: {
        type: "textarea" as const,
        ai: {
          instructions:
            "Optional one- or two-sentence description shown beside the content on wide screens.",
        },
      },
      moreLabel: {
        type: "text" as const,
        label: "More link text",
        ai: { instructions: "Link text such as 'View all services'." },
      },
      moreHref: {
        type: "text" as const,
        label: "More link (https:// or /path)",
        ai: { exclude: true },
      },
      content: { type: "slot" as const },
    },
    defaultProps: {
      headline: "Popular services",
      description:
        "The things Georgians look for most often, all in one place.",
      moreLabel: "View all services",
      moreHref: "/",
      content: [],
    },
    render:
      OrchardGroupContainerRender as unknown as ComponentConfig<OrchardGroupContainerProps>["render"],
  };

export const meta = defineMeta({
  title: "Orchard Group Container",
  description:
    "Orchard group container: a headline, optional description and more-link beside a slot for related blocks such as a Tileset or Cards.",
  categories: ["orchard"],
  published: false,
});
