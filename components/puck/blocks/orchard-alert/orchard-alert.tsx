import { safeUrl } from "@/lib/orchard";
import {
  OrchardAlertEmergencyIcon,
  OrchardAlertNoticeIcon,
  OrchardAlertWarningIcon,
  OrchardArrowIcon,
} from "@/lib/orchard-icons";

export interface OrchardAlertProps {
  level: "notice" | "warning" | "emergency";
  heading: string;
  description: string;
  href?: string;
  puck?: { isEditing?: boolean };
}

const ICONS = {
  notice: OrchardAlertNoticeIcon,
  warning: OrchardAlertWarningIcon,
  emergency: OrchardAlertEmergencyIcon,
};

export function OrchardAlertRender({ level, heading, description, href, puck }: OrchardAlertProps) {
  const url = puck?.isEditing ? "" : safeUrl(href);
  const Icon = ICONS[level] ?? OrchardAlertNoticeIcon;
  const className = `orchard-alert${level === "notice" ? "" : ` orchard-alert--${level}`}`;
  const inner = (
    <>
      <span className="orchard-alert__icon">
        <Icon />
      </span>
      <strong className="orchard-alert__heading">{heading}</strong>
      {description ? <p className="orchard-alert__description">{description}</p> : null}
      {url ? (
        <span className="orchard-alert__arrow">
          <OrchardArrowIcon />
        </span>
      ) : null}
    </>
  );
  return (
    <div className="orchard-alert__wrapper">
      {url ? (
        <a className={className} href={url}>
          {inner}
        </a>
      ) : (
        <div className={className} role={level === "notice" ? undefined : "alert"}>
          {inner}
        </div>
      )}
    </div>
  );
}
