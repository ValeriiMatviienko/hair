export const analyticsConsentCookie = "analytics-consent";

export type AnalyticsConsent = "unknown" | "granted" | "denied";

export function normalizeAnalyticsConsent(
  value: string | null | undefined,
): AnalyticsConsent {
  return value === "granted" || value === "denied" ? value : "unknown";
}
