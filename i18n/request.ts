import { getRequestConfig } from "next-intl/server";
import { getMessages, getRequestLocale } from "./server";
import { siteConfig } from "@/lib/site-config";

export default getRequestConfig(async () => {
  const locale = await getRequestLocale();

  return {
    locale,
    messages: await getMessages(locale),
    timeZone: siteConfig.timeZone,
  };
});
