import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  return [
    {
      url: "https://hairbyhanna.eu",
      lastModified: currentDate,
    },
    {
      url: "https://hairbyhanna.eu/en",
      lastModified: currentDate,
    },
    {
      url: "https://hairbyhanna.eu/pl",
      lastModified: currentDate,
    },
    {
      url: "https://hairbyhanna.eu/ua",
      lastModified: currentDate,
    },
  ];
}
