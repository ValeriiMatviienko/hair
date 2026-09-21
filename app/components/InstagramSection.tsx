"use client";

import { InstagramEmbed } from "./InstagramEmbed";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/site-config";

export function InstagramSection() {
  const t = useTranslations("Index");

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            {t("instagram_label")}
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-neutral-900">
            {t("instagram_title")}
          </h2>
        </div>

        <a
          href={siteConfig.instagram.profileUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
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
