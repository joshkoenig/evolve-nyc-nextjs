import "@/lib/orchard";

export interface OrchardCalloutProps {
  style: "standard" | "quote";
  content: string;
}

export function OrchardCalloutRender({ style, content }: OrchardCalloutProps) {
  return (
    <blockquote className={`orchard-callout orchard-callout--${style === "quote" ? "quote" : "standard"}`}>
      <p>{content}</p>
    </blockquote>
  );
}
