import { safeUrl } from "@/lib/orchard";
import "./orchard-header.css";

export interface OrchardHeaderProps {
  wordmark: string;
  logoSrc?: string;
  logoAlt?: string;
  homeHref: string;
  navItems: { label: string; href: string }[];
}

export function OrchardHeaderRender({
  wordmark,
  logoSrc,
  logoAlt,
  homeHref,
  navItems,
}: OrchardHeaderProps) {
  const logo = safeUrl(logoSrc);
  return (
    <header className="orchard-header__wrapper">
      <div className="orchard-header-branding-bar">
        <div className="orchard-header-branding-bar__inner">
          <div className="orchard-header-branding-lockup">
            <a
              className="orchard-header-branding-lockup__link"
              href={safeUrl(homeHref) || "/"}
            >
              {logo ? (
                <span className="orchard-header-branding-lockup__agency-logo">
                  <img src={logo} alt={logoAlt ?? ""} />
                </span>
              ) : null}
              <span className="orchard-header-branding-lockup__wordmark">
                {wordmark}
              </span>
            </a>
          </div>
          <nav className="orchard-header-nav" aria-label="Main">
            <ul className="orchard-primary-nav__menu">
              {(navItems ?? []).map((item, index) => (
                <li
                  className="orchard-primary-nav__menu-item"
                  key={`${item.label}-${index}`}
                >
                  <a
                    className="orchard-primary-nav__menu-link"
                    href={safeUrl(item.href) || "#"}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
