import { safeUrl } from "@/lib/orchard";
import { OrchardCircleArrowIcon } from "@/lib/orchard-icons";

export interface OrchardTeaserProps {
  title: string;
  summary: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  dark: "off" | "on";
  puck?: { isEditing?: boolean };
}

export function OrchardTeaserRender({ title, summary, href, imageSrc, imageAlt, dark, puck }: OrchardTeaserProps) {
  const url = puck?.isEditing ? "" : safeUrl(href);
  const image = safeUrl(imageSrc);
  const Container = url ? "a" : "div";
  const wrapperClass = ["orchard-teaser", image ? "orchard-teaser--with-image" : ""].filter(Boolean).join(" ");
  // Orchard puts the dark modifier on the container, the element that carries the background.
  const containerClass = ["orchard-teaser__container", dark === "on" ? "orchard-teaser--dark" : ""].filter(Boolean).join(" ");
  return (
    <div className={wrapperClass}>
      {image ? (
        <div className="orchard-teaser--image">
          <img src={image} alt={imageAlt ?? ""} />
        </div>
      ) : null}
      <Container className={containerClass} {...(url ? { href: url } : {})}>
        <div className="orchard-teaser__content">
          <h3 className="orchard-teaser__title">{title}</h3>
          {summary ? <p className="orchard-teaser__summary">{summary}</p> : null}
        </div>
        {url ? (
          <span className="orchard-teaser__arrow">
            <OrchardCircleArrowIcon />
          </span>
        ) : null}
      </Container>
    </div>
  );
}
