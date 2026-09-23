import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.17"],
  experimental: {
    // Restored build caches can ship stale Tailwind CSS alongside fresh HTML.
    turbopackFileSystemCacheForBuild: false,
  },
  // output: "export",
  // trailingSlash: true,
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
