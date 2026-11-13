import type { ComponentConfig } from "@puckeditor/core";
import { defineMeta } from "@/lib/define-meta";
import {
  OrchardTilesetRender,
  type OrchardTilesetProps,
} from "./orchard-tileset";
export type { OrchardTilesetProps };

export const OrchardTilesetBlock: ComponentConfig<OrchardTilesetProps> = {
  fields: {
    showText: {
      type: "radio" as const,
      label: "Link text under each image",
      options: [
        { label: "Show", value: "on" },
        { label: "Hide (image only)", value: "off" },
      ],
    },
    tiles: {
      type: "array" as const,
      arrayFields: {
        imageSrc: {
          type: "text" as const,
          label: "Image URL (https:// or /path)",
          ai: { exclude: true },
        },
        imageAlt: {
          type: "text" as const,
          label: "Image description",
          ai: {
            instructions: "Short description of the image for screen readers.",
          },
        },
        text: {
          type: "text" as const,
          label: "Link text",
          ai: { instructions: "Link text, max 40 characters." },
        },
        href: {
          type: "text" as const,
          label: "Link (https:// or /path)",
          ai: { exclude: true },
        },
      },
      defaultItemProps: {
        imageSrc: "",
        imageAlt: "",
        text: "Link text",
        href: "/",
      },
      getItemSummary: (item: { text: string }) => item.text || "Tile",
      ai: { instructions: "3–8 image tiles that each link to a page." },
    },
  },
  defaultProps: {
    showText: "on",
    tiles: [
      { imageSrc: "", imageAlt: "", text: "Driver services", href: "/" },
      { imageSrc: "", imageAlt: "", text: "Business licenses", href: "/" },
      { imageSrc: "", imageAlt: "", text: "Parks and recreation", href: "/" },
      { imageSrc: "", imageAlt: "", text: "Public safety", href: "/" },
    ],
  },
  render:
    OrchardTilesetRender as unknown as ComponentConfig<OrchardTilesetProps>["render"],
};

export const meta = defineMeta({
  title: "Orchard Tileset",
  description:
    "Orchard tileset: a responsive grid of image tiles that each link to a page, with or without link text.",
  categories: ["orchard"],
  published: false,
});
