"use client";

import { useEffect, useRef } from "react";

const QUERIES = {
  desktop: "(min-width: 1024px)",
  reduceMotion: "(prefers-reduced-motion: reduce)",
  coarsePointer: "(pointer: coarse)",
  noHover: "(hover: none)",
} as const;

function isAtmosphereEnabled() {
  return (
    window.matchMedia(QUERIES.desktop).matches &&
    window.innerWidth >= 1024 &&
    !window.matchMedia(QUERIES.reduceMotion).matches &&
    !window.matchMedia(QUERIES.coarsePointer).matches &&
    !window.matchMedia(QUERIES.noHover).matches
  );
}

export default function HeroAtmosphere() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let cancelled = false;
    let starting = false;
    let canvas: HTMLCanvasElement | undefined;
    let disposeField: (() => void) | undefined;

    const media = Object.values(QUERIES).map((query) =>
      window.matchMedia(query),
    );

    const stop = () => {
      disposeField?.();
      disposeField = undefined;
      canvas?.remove();
      canvas = undefined;
    };

    const sync = async () => {
      if (cancelled) return;

      if (!isAtmosphereEnabled()) {
        stop();
        return;
      }

      if (disposeField || starting) return;

      starting = true;
      try {
        const { createHairField } = await import("./hairField");

        // A cancelled effect must not touch a newer instance after this import.
        if (cancelled || !isAtmosphereEnabled()) return;

        // Disposing the old field loses its context. Only a new canvas can
        // supply a fresh one when returning from mobile or restarting effects.
        canvas = document.createElement("canvas");
        canvas.className = "pointer-events-none h-full w-full";
        host.appendChild(canvas);

        const field = createHairField(canvas, host);
        disposeField = field?.dispose;
        if (!field) stop();
      } catch {
        // This optional decoration must not cause an unhandled import failure.
        stop();
      } finally {
        starting = false;
      }
    };

    const onChange = () => {
      void sync();
    };

    media.forEach((query) => query.addEventListener("change", onChange));
    window.addEventListener("resize", onChange, { passive: true });
    void sync();

    return () => {
      cancelled = true;
      media.forEach((query) => query.removeEventListener("change", onChange));
      window.removeEventListener("resize", onChange);
      stop();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    />
  );
}
