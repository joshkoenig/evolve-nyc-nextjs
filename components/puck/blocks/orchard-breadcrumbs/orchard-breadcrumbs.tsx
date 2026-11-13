import { safeUrl } from "@/lib/orchard";
import { OrchardCaretIcon } from "@/lib/orchard-icons";

export interface OrchardBreadcrumbsProps {
  items: { label: string; href: string }[];
  current: string;
}

export function OrchardBreadcrumbsRender({
  items,
  current,
}: OrchardBreadcrumbsProps) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb__items" style={{ listStyle: "none" }}>
        {(items ?? []).map((item, index) => (
          <li className="breadcrumb__item" key={`${item.label}-${index}`}>
            <a className="breadcrumb__link" href={safeUrl(item.href) || "#"}>
              {item.label}
            </a>
            <OrchardCaretIcon />
          </li>
        ))}
        <li className="breadcrumb__item" aria-current="page">
          {current}
        </li>
      </ol>
    </nav>
  );
}
