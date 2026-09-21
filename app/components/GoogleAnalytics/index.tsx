"use client";

import { GoogleAnalytics as NextGoogleAnalytics } from "@next/third-parties/google";
import { useAnalyticsConsent } from "@/app/context/AnalyticsConsentContext";

const GoogleAnalytics = () => {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  const { consent } = useAnalyticsConsent();

  return gaId && consent === "granted" ? (
    <NextGoogleAnalytics gaId={gaId} />
  ) : null;
};

export default GoogleAnalytics;
