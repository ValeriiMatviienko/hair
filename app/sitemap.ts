import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hairbyhanna.eu",
      lastModified: new Date(),
    },
  ];
}
