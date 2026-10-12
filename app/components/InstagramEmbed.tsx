"use client";

import Script from "next/script";
import { useEffect } from "react";

type InstagramEmbedProps = {
  url: string;
  showCaption?: boolean;
  fallbackLabel: string;
  newTabLabel: string;
};

const INSTAGRAM_SCRIPT_SRC = "https://www.instagram.com/embed.js";

export function InstagramEmbed({
  url,
  showCaption = false,
  fallbackLabel,
  newTabLabel,
}: InstagramEmbedProps) {
  useEffect(() => {
    window.instgrm?.Embeds.process();
  }, [url]);

  return (
    <div className="w-full overflow-hidden">
      <blockquote
        className="instagram-media w-full min-w-0"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        {...(showCaption ? { "data-instgrm-captioned": "" } : {})}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          {fallbackLabel}
          <span className="sr-only"> {newTabLabel}</span>
        </a>
      </blockquote>

      <Script
        src={INSTAGRAM_SCRIPT_SRC}
        strategy="lazyOnload"
        onReady={() => window.instgrm?.Embeds.process()}
      />
    </div>
  );
}
