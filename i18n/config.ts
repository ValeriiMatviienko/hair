export const locales = ["pl", "en", "uk"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pl";
export const localeCookieName = "locale";

export const localeLanguageTags: Record<Locale, string> = {
  pl: "pl",
  en: "en",
  uk: "uk",
};

export function normalizeLocale(value: string | null | undefined): Locale | null {
  const normalized = value === "ua" ? "uk" : value;

  return locales.includes(normalized as Locale) ? (normalized as Locale) : null;
}
