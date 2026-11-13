/**
 * Orchard (the State of Georgia design system, @georgiagov/orchard, MIT) base
 * styles. Every Orchard block imports this module so the stylesheet and the
 * Foundation palette load whenever an Orchard block is on the page.
 *
 * To switch palettes, replace the palette import below with another file from
 * node_modules/@georgiagov/orchard/palettes (for example blue-ridge.css).
 */
import "@georgiagov/orchard/orchard.min.css";
import "@georgiagov/orchard/palettes/foundation.css";

export { safeUrl } from "@/lib/safe-url";
