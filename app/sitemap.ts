import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hairbyhanna.pl",
      lastModified: new Date(),
    },
  ];
}
