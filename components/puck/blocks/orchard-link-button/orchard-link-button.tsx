import { safeUrl } from "@/lib/orchard";
import { OrchardCircleArrowIcon } from "@/lib/orchard-icons";

export interface OrchardLinkButtonProps {
  label: string;
  href: string;
  target: "_self" | "_blank";
}

export function OrchardLinkButtonRender({ label, href, target }: OrchardLinkButtonProps) {
  const url = safeUrl(href);
  return (
    <a
      className="orchard-link orchard-link--button"
      href={url || "#"}
      {...(target === "_blank" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
      <OrchardCircleArrowIcon />
    </a>
  );
}
