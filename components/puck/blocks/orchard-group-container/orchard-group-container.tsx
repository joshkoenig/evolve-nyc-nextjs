import * as React from "react";
import { type Slot } from "@puckeditor/core";
import { safeUrl } from "@/lib/orchard";
import { OrchardArrowIcon } from "@/lib/orchard-icons";

export interface OrchardGroupContainerProps {
  headline: string;
  description: string;
  moreLabel: string;
  moreHref: string;
  content: Slot;
  puck?: { isEditing?: boolean };
}

export function OrchardGroupContainerRender({
  headline,
  description,
  moreLabel,
  moreHref,
  content,
  puck,
}: OrchardGroupContainerProps) {
  const url = puck?.isEditing ? "" : safeUrl(moreHref);
  const Content = content as unknown;
  const hasMore = Boolean(url && moreLabel);
  const moreLink = (className: string) => (
    <p className={`${className} orchard-more-link`}>
      <a className="orchard-link" href={url}>
        {moreLabel}
      </a>
      <span className="orchard-more-link__icon">
        <OrchardArrowIcon />
      </span>
    </p>
  );
  return (
    <div className="orchard-block">
      <div className="orchard-group-container-wrapper">
        <div
          className={`orchard-group-container${description ? " orchard-group-container--has-description" : ""}`}
        >
          <div className="orchard-group-container__summary">
            <h2 className="orchard-group-container__headline">{headline}</h2>
            {description ? (
              <p className="orchard-group-container__description">
                {description}
              </p>
            ) : null}
            {hasMore
              ? moreLink("orchard-group-container__summary-more-link")
              : null}
          </div>
          <div className="orchard-group-container__content">
            {typeof Content === "function"
              ? (() => {
                  const Comp = Content as React.ComponentType;
                  return <Comp />;
                })()
              : null}
          </div>
          {hasMore
            ? moreLink("orchard-group-container__below-more-link")
            : null}
        </div>
      </div>
    </div>
  );
}
