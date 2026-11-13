"use client";

import { useId, useState } from "react";
import { safeUrl } from "@/lib/orchard";
import { OrchardSearchIcon } from "@/lib/orchard-icons";
import "./orchard-header.css";

export interface OrchardHeaderProps {
  wordmark: string;
  logoSrc?: string;
  logoAlt?: string;
  homeHref: string;
  navItems: { label: string; href: string }[];
  showSearch?: "on" | "off";
  searchAction?: string;
}

export function OrchardHeaderRender({
  wordmark,
  logoSrc,
  logoAlt,
  homeHref,
  navItems,
  showSearch = "off",
  searchAction,
}: OrchardHeaderProps) {
  const logo = safeUrl(logoSrc);
  const id = useId().replace(/:/g, "");
  const [searchOpen, setSearchOpen] = useState(false);
  const links = navItems ?? [];
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
          {links.length > 0 ? (
            <nav className="orchard-header-nav" aria-label="Main">
              <ul className="orchard-primary-nav__menu">
                {links.map((item, index) => (
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
          ) : null}
          {showSearch === "on" ? (
            <div className="orchard-header-search-trigger">
              <button
                type="button"
                className="orchard-header-search-trigger__button"
                aria-expanded={searchOpen}
                aria-controls={`${id}-search`}
                onClick={() => setSearchOpen((value) => !value)}
              >
                <span className="orchard-header-search-trigger__button-icon">
                  <OrchardSearchIcon />
                </span>
                <span className="orchard-header-search-trigger__button-text">
                  <span className="orchard-header-search-trigger__button-text--show">
                    Search
                  </span>
                  <span className="orchard-header-search-trigger__button-text--hide">
                    Close
                  </span>
                </span>
              </button>
            </div>
          ) : null}
        </div>
      </div>
      {showSearch === "on" ? (
        <div
          id={`${id}-search`}
          className="orchard-header-search-bar"
          data-is-active={searchOpen}
          role="search"
        >
          <div className="orchard-header-search-bar__inner">
            <div className="orchard-header-search-form">
              <h2 className="orchard-header-search-form__header">
                Search this site
              </h2>
              <form
                className="orchard-header-search-form__form"
                action={safeUrl(searchAction) || "/search"}
                method="GET"
              >
                <label htmlFor={`${id}-q`} className="visually-hidden">
                  Search
                </label>
                <input
                  id={`${id}-q`}
                  className="orchard-header-search-form__text-input"
                  name="q"
                  type="search"
                />
                <input
                  className="orchard-header-search-form__submit"
                  type="submit"
                  value="Search"
                />
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
