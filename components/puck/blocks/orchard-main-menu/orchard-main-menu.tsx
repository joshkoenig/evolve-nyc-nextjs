"use client";

import { useEffect, useId, useState } from "react";
import "@/lib/orchard";
import { safeUrl } from "@/lib/orchard";
import "./orchard-main-menu.css";

export interface OrchardMainMenuProps {
  items: {
    label: string;
    href: string;
    active?: "off" | "on";
    children?: { label: string; href: string }[];
  }[];
}

const DESKTOP = "(min-width: 960px)";

export function OrchardMainMenuRender({ items }: OrchardMainMenuProps) {
  const id = useId().replace(/:/g, "");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("js");
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenIndex(null);
        setMobileOpen(false);
      }
    }
    function onResize() {
      if (window.matchMedia(DESKTOP).matches) setMobileOpen(false);
    }
    window.addEventListener("keyup", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keyup", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("is-overlay-active", mobileOpen);
    document.body.classList.toggle("is-fixed", mobileOpen);
    return () => {
      document.body.classList.remove("is-overlay-active", "is-fixed");
    };
  }, [mobileOpen]);

  const isDesktop = () =>
    typeof window !== "undefined" && window.matchMedia(DESKTOP).matches;

  return (
    <div
      className="orchard-header-site-nav-bar site-nav-bar-processed"
      data-orchard-main-menu
    >
      <div className="orchard-header-site-nav-bar__inner">
        <nav aria-label="Main">
          <div
            id={`${id}-nav`}
            className={`orchard-header-nav${mobileOpen ? " is-active" : ""}`}
          >
            <ul className="orchard-menu orchard-primary-nav__menu orchard-primary-nav__menu--level-1">
              {(items ?? []).map((item, index) => {
                const kids = (item.children ?? []).filter(
                  (child) => child.label,
                );
                const hasChildren = kids.length > 0;
                const open = openIndex === index;
                return (
                  <li
                    key={`${item.label}-${index}`}
                    className={[
                      "orchard-primary-nav__menu-item orchard-primary-nav__menu-item--link orchard-primary-nav__menu-item--level-1",
                      hasChildren
                        ? "orchard-primary-nav__menu-item--has-children"
                        : "",
                      item.active === "on" ? "is-active" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onMouseEnter={() => {
                      if (hasChildren && isDesktop()) setOpenIndex(index);
                    }}
                    onMouseLeave={() => {
                      if (hasChildren && isDesktop())
                        setOpenIndex((cur) => (cur === index ? null : cur));
                    }}
                    onBlur={(event) => {
                      if (
                        hasChildren &&
                        !event.currentTarget.contains(
                          event.relatedTarget as Node,
                        )
                      ) {
                        setOpenIndex((cur) => (cur === index ? null : cur));
                      }
                    }}
                  >
                    <a
                      href={safeUrl(item.href) || "#"}
                      className={[
                        "orchard-primary-nav__menu-link orchard-primary-nav__menu-link--link orchard-primary-nav__menu-link--level-1",
                        hasChildren
                          ? "orchard-primary-nav__menu-link--has-children"
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      <span className="orchard-primary-nav__menu-link-inner orchard-primary-nav__menu-link-inner--level-1">
                        {item.label}
                      </span>
                    </a>
                    {hasChildren ? (
                      <>
                        <button
                          type="button"
                          className="orchard-primary-nav__button-toggle"
                          aria-controls={`${id}-sub-${index}`}
                          aria-expanded={open}
                          onClick={() => setOpenIndex(open ? null : index)}
                        >
                          <span className="visually-hidden">
                            {item.label} sub-navigation
                          </span>
                          <span className="orchard-icon--menu-toggle" />
                        </button>
                        <span
                          className={`orchard-primary-nav__menu-🥕${open ? " is-active-menu-parent" : ""}`}
                        />
                        <ul
                          id={`${id}-sub-${index}`}
                          className={`orchard-menu orchard-primary-nav__menu orchard-primary-nav__menu--level-2${open ? " is-active-menu-parent" : ""}`}
                          data-menu-items={kids.length}
                        >
                          {kids.map((child, childIndex) => (
                            <li
                              key={`${child.label}-${childIndex}`}
                              className="orchard-primary-nav__menu-item orchard-primary-nav__menu-item--link orchard-primary-nav__menu-item--level-2"
                            >
                              <a
                                href={safeUrl(child.href) || "#"}
                                className="orchard-primary-nav__menu-link orchard-primary-nav__menu-link--link orchard-primary-nav__menu-link--level-2"
                              >
                                <span className="orchard-primary-nav__menu-link-inner--level-2">
                                  {child.label}
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
      <div className="orchard-mobile-buttons">
        <button
          type="button"
          className="orchard-mobile-nav-button"
          aria-label="Main Menu"
          aria-controls={`${id}-nav`}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
        >
          <span className="orchard-mobile-nav-button__icon" />
          <span className="orchard-mobile-nav-button__label">Menu</span>
        </button>
      </div>
    </div>
  );
}
