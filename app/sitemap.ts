import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteUrl();

  return [
    {
      url: origin,
    },
    {
      url: `${origin}/certificates`,
    },
  ];
}
