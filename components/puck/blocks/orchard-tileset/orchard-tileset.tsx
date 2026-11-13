import { safeUrl } from "@/lib/orchard";
import { OrchardCircleArrowIcon } from "@/lib/orchard-icons";

export interface OrchardTileProps {
  imageSrc: string;
  imageAlt: string;
  text: string;
  href: string;
}

export interface OrchardTilesetProps {
  showText: "on" | "off";
  tiles: OrchardTileProps[];
  puck?: { isEditing?: boolean };
}

export function OrchardTilesetRender({
  showText,
  tiles,
  puck,
}: OrchardTilesetProps) {
  const hasText = showText !== "off";
  const items = tiles ?? [];
  return (
    <div className="orchard-block">
      <div
        className={`orchard-tileset-wrapper ${hasText ? "orchard-tile--has-text" : "orchard-tile--without-text"}`}
      >
        <div
          className={`orchard-tileset${items.length > 2 ? " orchard-tileset--more-than-two" : ""}`}
        >
          {items.map((tile, index) => {
            const url = puck?.isEditing ? "" : safeUrl(tile.href);
            const image = safeUrl(tile.imageSrc);
            const Link = url ? "a" : "div";
            return (
              <figure
                className={[
                  "orchard-tile",
                  hasText ? "orchard-tile--has-text" : "",
                  image ? "orchard-tile--has-image" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                key={`${tile.text}-${index}`}
              >
                <Link
                  className="orchard-tile__link"
                  {...(url ? { href: url } : {})}
                >
                  {image ? (
                    <span className="orchard-tile__image">
                      <span className="orchard-tile__image-overlay" />
                      <img
                        loading="lazy"
                        src={image}
                        alt={tile.imageAlt ?? ""}
                        width={200}
                        height={150}
                      />
                    </span>
                  ) : null}
                  {hasText ? (
                    <figcaption className="orchard-tile__text">
                      <span className="orchard-tile__text--text">
                        {tile.text}
                      </span>
                      <OrchardCircleArrowIcon />
                    </figcaption>
                  ) : (
                    <figcaption className="orchard-icon-arrow">
                      <OrchardCircleArrowIcon />
                    </figcaption>
                  )}
                </Link>
              </figure>
            );
          })}
        </div>
      </div>
    </div>
  );
}
