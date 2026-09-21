import { siteConfig } from "./site-config";

export function getSiteUrl() {
  const configuredUrl = process.env.BASE_URL?.trim() || siteConfig.siteUrl;

  return new URL(configuredUrl).origin;
}
