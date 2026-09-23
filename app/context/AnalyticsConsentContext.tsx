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
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl border border-ink/10 bg-paper/95 p-4 shadow-xl backdrop-blur-sm"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-lg font-medium text-ink">
                {t("cookie_consent_title")}
              </h2>
              <p className="mt-1 text-sm text-ink/70">
                {t("cookie_consent_description")}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={allowAnalytics}
                className="editorial-cta-solid"
              >
                {t("cookie_consent_allow")}
              </button>
              <button
                type="button"
                onClick={denyAnalytics}
                className="editorial-cta"
              >
                {t("cookie_consent_decline")}
              </button>
            </div>
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
