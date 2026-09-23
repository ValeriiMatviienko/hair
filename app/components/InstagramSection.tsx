"use client";

import { InstagramEmbed } from "./InstagramEmbed";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/site-config";

export function InstagramSection() {
  const t = useTranslations("Index");

  return (
    <section className="section-shell">
      <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-label">{t("instagram_label")}</p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
            {t("instagram_title")}
          </h2>
        </div>

        <a
          href={siteConfig.instagram.profileUrl}
          target="_blank"
          rel="noreferrer"
          className="editorial-cta"
        >
          {t("instagram_follow", { handle: siteConfig.instagram.handle })}
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.instagram.posts.map((url) => (
          <InstagramEmbed
            key={url}
            url={url}
            fallbackLabel={t("instagram_post_fallback")}
          />
        ))}
      </div>
    </section>
  );
}
