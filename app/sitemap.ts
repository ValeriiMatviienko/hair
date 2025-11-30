import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  return [
    {
      url: "https://hairbyhanna.eu",
      lastModified: currentDate,
    },
  ];
}
