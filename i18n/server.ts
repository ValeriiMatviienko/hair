import { cookies } from "next/headers";
import {
  defaultLocale,
  localeCookieName,
  normalizeLocale,
  type Locale,
} from "./config";

export async function getRequestLocale(): Promise<Locale> {
  const cookieStore = await cookies();

  return normalizeLocale(cookieStore.get(localeCookieName)?.value) ?? defaultLocale;
}

export async function getMessages(locale: Locale) {
  return (await import(`../messages/${locale}.json`)).default;
}
