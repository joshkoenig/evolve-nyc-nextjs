"use client";

import { useRef, useState } from "react";
import "@/lib/orchard";
import { OrchardPlusMinusIcon } from "@/lib/orchard-icons";

export interface OrchardAccordionProps {
  items: { title: string; content: string }[];
  toggleAll: "off" | "on";
}

export function OrchardAccordionRender({ items, toggleAll }: OrchardAccordionProps) {
  const root = useRef<HTMLDivElement>(null);
  const [allOpen, setAllOpen] = useState(false);

  function onToggleAll() {
    const next = !allOpen;
    setAllOpen(next);
    root.current?.querySelectorAll("details.orchard-accordion").forEach((el) => {
      (el as HTMLDetailsElement).open = next;
    });
  }

  return (
    <div ref={root}>
      {toggleAll === "on" ? (
        <button type="button" className="orchard-accordion-toggle" aria-expanded={allOpen} onClick={onToggleAll}>
          <OrchardPlusMinusIcon />
          <span className="orchard-accordion-toggle__text">{allOpen ? "Hide all sections" : "Show all sections"}</span>
        </button>
      ) : null}
      {(items ?? []).map((item, index) => (
        <details className="orchard-accordion" key={`${item.title}-${index}`}>
          <summary className="orchard-accordion__summary">
            <h3 className="orchard-accordion__title">{item.title}</h3>
            <span className="orchard-accordion__icon">
              <OrchardPlusMinusIcon />
            </span>
          </summary>
          <div className="orchard-accordion__content">
            <p>{item.content}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
