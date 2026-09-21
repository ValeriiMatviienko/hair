"use client";

import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import { useTranslations } from "next-intl";
import {
  analyticsConsentCookie,
  type AnalyticsConsent,
} from "@/lib/analytics-consent";

type AnalyticsConsentContextValue = {
  consent: AnalyticsConsent;
  allowAnalytics: () => void;
  denyAnalytics: () => void;
};

const AnalyticsConsentContext =
  createContext<AnalyticsConsentContextValue | null>(null);

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

export function AnalyticsConsentProvider({
  children,
  initialConsent,
}: PropsWithChildren<{ initialConsent: AnalyticsConsent }>) {
  const t = useTranslations("Index");
  const [consent, setConsent] = useState<AnalyticsConsent>(initialConsent);

  const persistConsent = useCallback((nextConsent: AnalyticsConsent) => {
    document.cookie = `${analyticsConsentCookie}=${nextConsent}; path=/; max-age=${ONE_YEAR_IN_SECONDS}; samesite=lax`;
    setConsent(nextConsent);
  }, []);

  const allowAnalytics = useCallback(
    () => persistConsent("granted"),
    [persistConsent],
  );
  const denyAnalytics = useCallback(
    () => persistConsent("denied"),
    [persistConsent],
  );

  return (
    <AnalyticsConsentContext.Provider
      value={{ consent, allowAnalytics, denyAnalytics }}
    >
      {children}
      {consent === "unknown" && (
        <aside
          aria-label={t("cookie_consent_title")}
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-xl border bg-white p-5 shadow-xl"
        >
          <h2 className="font-semibold text-black">
            {t("cookie_consent_title")}
          </h2>
          <p className="mt-2 text-sm text-foreground/80">
            {t("cookie_consent_description")}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={allowAnalytics}
              className="rounded-md bg-darkgreen px-4 py-2 text-sm font-medium text-white"
            >
              {t("cookie_consent_allow")}
            </button>
            <button
              type="button"
              onClick={denyAnalytics}
              className="rounded-md border px-4 py-2 text-sm font-medium text-black"
            >
              {t("cookie_consent_decline")}
            </button>
          </div>
        </aside>
      )}
    </AnalyticsConsentContext.Provider>
  );
}

export function useAnalyticsConsent() {
  const context = useContext(AnalyticsConsentContext);

  if (!context) {
    throw new Error(
      "useAnalyticsConsent must be used within an AnalyticsConsentProvider",
    );
  }

  return context;
}
