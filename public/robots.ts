import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/private/"],
      },
    ],
    sitemap: "https://hair-by-hanna.vercel.app/pl",
  };
}
