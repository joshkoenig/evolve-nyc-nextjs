import { safeUrl } from "@/lib/orchard";
import {
  OrchardFacebookIcon,
  OrchardInstagramIcon,
  OrchardLinkedinIcon,
  OrchardMailIcon,
  OrchardPhoneIcon,
  OrchardYoutubeIcon,
} from "@/lib/orchard-icons";

type FooterLink = { label: string; href: string };

export interface OrchardFooterProps {
  wordmark: string;
  contactTitle: string;
  phone: string;
  email: string;
  primaryTitle: string;
  primaryLinks: FooterLink[];
  secondaryTitle: string;
  secondaryLinks: FooterLink[];
  facebook: string;
  youtube: string;
  instagram: string;
  linkedin: string;
  copyright: string;
}

function LinkGroup({
  variant,
  title,
  links,
}: {
  variant: "primary" | "secondary";
  title: string;
  links: FooterLink[];
}) {
  return (
    <div
      className={`orchard-footer-link-group orchard-footer-link-group--${variant}`}
    >
      <h2 className="orchard-footer-link-group__title">{title}</h2>
      <ul className="orchard-footer-link-group__list">
        {links.map((link, index) => (
          <li
            className="orchard-footer-link-group__list-item"
            key={`${link.label}-${index}`}
          >
            <a href={safeUrl(link.href) || "#"}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function OrchardFooterRender(props: OrchardFooterProps) {
  const {
    wordmark,
    contactTitle,
    phone,
    email,
    primaryTitle,
    secondaryTitle,
    copyright,
  } = props;
  const primaryLinks = props.primaryLinks ?? [];
  const secondaryLinks = props.secondaryLinks ?? [];
  const showSecondary = secondaryLinks.length > 0;
  const social = [
    {
      key: "facebook",
      label: "Facebook",
      url: safeUrl(props.facebook),
      Icon: OrchardFacebookIcon,
    },
    {
      key: "youtube",
      label: "YouTube",
      url: safeUrl(props.youtube),
      Icon: OrchardYoutubeIcon,
    },
    {
      key: "instagram",
      label: "Instagram",
      url: safeUrl(props.instagram),
      Icon: OrchardInstagramIcon,
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      url: safeUrl(props.linkedin),
      Icon: OrchardLinkedinIcon,
    },
  ].filter((item) => item.url);

  return (
    <footer className="orchard-footer">
      <div className="orchard-footer-top">
        <div className="orchard-footer-brand">
          <span className="orchard-footer-brand__text">{wordmark}</span>
        </div>
        {social.length > 0 ? (
          <ul
            className="orchard-footer-social"
            style={{
              listStyle: "none",
              display: "flex",
              gap: "0.75rem",
              margin: 0,
              padding: 0,
            }}
          >
            {social.map(({ key, label, url, Icon }) => (
              <li className="orchard-footer-social__item" key={key}>
                <a
                  className="orchard-footer-social__icon-link"
                  href={url}
                  aria-label={label}
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div
        className={`orchard-footer-mid${showSecondary ? " orchard-show-secondary" : ""}`}
      >
        <div className="orchard-footer-contact">
          <h2 className="orchard-footer-contact__title">{contactTitle}</h2>
          <div className="orchard-footer-contact-info__wrapper">
            <ul className="orchard-footer-contact-info__list">
              {phone ? (
                <li className="orchard-footer-contact-info__item">
                  <div className="orchard-footer-contact-info__icon-wrapper">
                    <OrchardPhoneIcon />
                  </div>
                  <div>
                    <h3 className="orchard-footer-contact-info__title">
                      Phone
                    </h3>
                    <p className="orchard-footer-contact-info__phone-number">
                      <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>
                        {phone}
                      </a>
                    </p>
                  </div>
                </li>
              ) : null}
              {email ? (
                <li className="orchard-footer-contact-info__item">
                  <div className="orchard-footer-contact-info__icon-wrapper">
                    <OrchardMailIcon />
                  </div>
                  <div>
                    <h3 className="orchard-footer-contact-info__title">
                      Email
                    </h3>
                    <p>
                      <a href={`mailto:${email}`}>{email}</a>
                    </p>
                  </div>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
        <div className="orchard-footer-mid__menus">
          <LinkGroup
            variant="primary"
            title={primaryTitle}
            links={primaryLinks}
          />
          {showSecondary ? (
            <LinkGroup
              variant="secondary"
              title={secondaryTitle}
              links={secondaryLinks}
            />
          ) : null}
        </div>
      </div>
      <div className="orchard-footer-bottom">
        <div className="orchard-footer-bottom__item orchard-footer-bottom__item--copyright">
          <small>{copyright}</small>
        </div>
      </div>
    </footer>
  );
}
