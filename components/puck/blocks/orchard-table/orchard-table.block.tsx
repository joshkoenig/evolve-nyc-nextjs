import type { ComponentConfig } from "@puckeditor/core";
import { defineMeta } from "@/lib/define-meta";
import { OrchardTableRender, type OrchardTableProps } from "./orchard-table";
export type { OrchardTableProps };

export const OrchardTableBlock: ComponentConfig<OrchardTableProps> = {
  fields: {
    caption: {
      type: "text" as const,
      ai: { instructions: "Optional table caption." },
    },
    headers: {
      type: "array" as const,
      label: "Columns",
      arrayFields: {
        label: {
          type: "text" as const,
          ai: { instructions: "Column heading." },
        },
      },
      defaultItemProps: { label: "Column" },
      getItemSummary: (item: { label: string }) => item.label || "Column",
      ai: { instructions: "2–5 column headings." },
    },
    rows: {
      type: "array" as const,
      arrayFields: {
        cells: {
          type: "array" as const,
          label: "Cells (one per column, in order)",
          arrayFields: {
            value: { type: "text" as const },
          },
          defaultItemProps: { value: "" },
          getItemSummary: (item: { value: string }) => item.value || "Cell",
        },
      },
      defaultItemProps: {
        cells: [{ value: "" }, { value: "" }, { value: "" }],
      },
      getItemSummary: (item: { cells?: { value: string }[] }) =>
        item.cells?.[0]?.value || "Row",
      ai: {
        instructions:
          "Table rows. Each row needs one cell per column, in column order.",
      },
    },
  },
  defaultProps: {
    caption: "Service center hours",
    headers: [
      { label: "Location" },
      { label: "Weekdays" },
      { label: "Saturday" },
    ],
    rows: [
      {
        cells: [
          { value: "Downtown" },
          { value: "8:00 am – 5:00 pm" },
          { value: "Closed" },
        ],
      },
      {
        cells: [
          { value: "Northside" },
          { value: "8:30 am – 4:30 pm" },
          { value: "9:00 am – 1:00 pm" },
        ],
      },
      {
        cells: [
          { value: "Riverside" },
          { value: "9:00 am – 6:00 pm" },
          { value: "Closed" },
        ],
      },
    ],
  },
  render: OrchardTableRender,
};

export const meta = defineMeta({
  title: "Orchard Table",
  description:
    "Orchard data table with a caption, editable column headings and rows.",
  categories: ["orchard"],
  published: false,
});
