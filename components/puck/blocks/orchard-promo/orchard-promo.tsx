import { safeUrl } from "@/lib/orchard";

export interface OrchardPromoProps {
  title: string;
  description: string;
  linkLabel: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  dark: "off" | "on";
  puck?: { isEditing?: boolean };
}

export function OrchardPromoRender({
  title,
  description,
  linkLabel,
  href,
  imageSrc,
  imageAlt,
  dark,
  puck,
}: OrchardPromoProps) {
  const url = puck?.isEditing ? "" : safeUrl(href);
  const image = safeUrl(imageSrc);
  const variant = image ? "with-image" : "without-image";
  const wrapperClass = [
    "orchard-promo-wrapper",
    `orchard-promo-wrapper--${variant}`,
    dark === "on" ? "orchard-background--dark" : "",
  ]
    .filter(Boolean)
    .join(" ");
  const heading = (
    <header className="orchard-page-title-lockup">
      <h2 className="orchard-page-title-lockup__title orchard-page-title-lockup__title--very-large orchard-page-title-lockup__title--has-line">
        {url ? <a href={url}>{title}</a> : title}
      </h2>
    </header>
  );
  const body = (
    <>
      {description ? (
        <div
          className={`orchard-promo__content orchard-promo__content--${variant}`}
        >
          <p>{description}</p>
        </div>
      ) : null}
      {url && linkLabel ? (
        <div className="orchard-promo__link">
          <a className={`orchard-promo__link--${variant}`} href={url}>
            {linkLabel}
          </a>
        </div>
      ) : null}
    </>
  );
  const content = (
    <div className="orchard-block">
      <div className={wrapperClass}>
        <div className={`orchard-promo orchard-promo--${variant}`}>
          {image ? (
            <>
              <span className="orchard-promo__image-wrapper">
                <img
                  className="orchard-promo__image"
                  src={image}
                  alt={imageAlt ?? ""}
                />
              </span>
              <div className="orchard-promo__content-wrapper">
                {heading}
                {body}
              </div>
            </>
          ) : (
            <>
              {heading}
              {body}
            </>
          )}
        </div>
      </div>
    </div>
  );
  return dark === "on" ? (
    <div className="orchard-band--dark">{content}</div>
  ) : (
    content
  );
}
