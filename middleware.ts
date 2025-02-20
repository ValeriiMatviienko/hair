import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "pl", "ua"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "pl",
  localePrefix: "always",
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ["/((?!api|_next|_vercel|.*\\..*|sitemap.xml).*)"],
};
