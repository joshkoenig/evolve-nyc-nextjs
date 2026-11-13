import { safeUrl } from "@/lib/orchard";

export interface OrchardCardProps {
  title: string;
  body: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  linkLabel?: string;
  dark: "off" | "on";
  puck?: { isEditing?: boolean };
}

export function OrchardCardRender({
  title,
  body,
  imageSrc,
  imageAlt,
  href,
  linkLabel,
  dark,
  puck,
}: OrchardCardProps) {
  const url = puck?.isEditing ? "" : safeUrl(href);
  const image = safeUrl(imageSrc);
  const hasMoreLink = Boolean(url && linkLabel);
  const className = [
    "orchard-card",
    dark === "on" ? "orchard-card--dark" : "",
    image ? "orchard-card--has-image" : "",
    hasMoreLink ? "orchard-card--has-more-link" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className="orchard-block">
      <div className="orchard-card-wrapper">
        <div className={className}>
          {image ? (
            <div className="orchard-card__image-wrapper">
              <img
                className="orchard-card__image"
                src={image}
                alt={imageAlt ?? ""}
              />
            </div>
          ) : null}
          <div className="orchard-card__content">
            <h2>{title}</h2>
            {body ? <p>{body}</p> : null}
            {hasMoreLink ? (
              <p>
                <a href={url}>{linkLabel}</a>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
