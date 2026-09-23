"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { GalleryImage } from "./GalleryImage";

const galleryTotal = GalleryImage.length;

export default function Slider() {
  const t = useTranslations("Index");
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const currentRef = useRef(0);

  useEffect(() => {
    if (!mainApi) return;

    const updateCurrent = () => {
      const progress = mainApi.scrollProgress();
      const snaps = mainApi.scrollSnapList();
      const selected = snaps.reduce(
        (closest, snap, index) =>
          Math.abs(snap - progress) < Math.abs(snaps[closest] - progress)
            ? index
            : closest,
        0,
      );

      if (selected === currentRef.current) return;

      currentRef.current = selected;
      setCurrent(selected);
    };

    updateCurrent();
    mainApi.on("scroll", updateCurrent);
    mainApi.on("select", updateCurrent);
    mainApi.on("settle", updateCurrent);
    mainApi.on("reInit", updateCurrent);

    return () => {
      mainApi.off("scroll", updateCurrent);
      mainApi.off("select", updateCurrent);
      mainApi.off("settle", updateCurrent);
      mainApi.off("reInit", updateCurrent);
    };
  }, [mainApi]);

  const handleThumbClick = useCallback(
    (index: number) => {
      mainApi?.scrollTo(index);
      currentRef.current = index;
      setCurrent(index);
    },
    [mainApi],
  );

  return (
    <div className="mx-auto">
      <div className="mb-4 flex items-end justify-between gap-4">
        <p className="font-display text-4xl tracking-tight text-ink tabular-nums md:text-5xl">
          {String(current + 1).padStart(2, "0")}
          <span className="text-ink/25">
            {" "}
            / {String(galleryTotal).padStart(2, "0")}
          </span>
        </p>
      </div>

      <Carousel
        className="w-full"
        setApi={setMainApi}
        opts={{ align: "start" }}
      >
        <CarouselContent>
          {GalleryImage.map((image, index) => (
            <CarouselItem
              key={image.src ?? index}
              className="basis-[86%] sm:basis-[70%] lg:basis-[62%]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={t("gallery_image_alt", { number: index + 1 })}
                  fill
                  sizes="(min-width: 1024px) 50vw, 86vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Carousel className="mt-4 w-full" opts={{ align: "start" }}>
        <div className="mask-x-from-90%">
          <CarouselContent className="my-1 flex">
            {GalleryImage.map((image, index) => (
              <CarouselItem
                key={image.src ?? index}
                className="basis-1/4"
              >
                <button
                  type="button"
                  onClick={() => handleThumbClick(index)}
                  aria-label={t("select_gallery_image", { number: index + 1 })}
                  aria-current={current === index ? "true" : undefined}
                  className={cn(
                    "relative block aspect-square w-full transition-opacity focus-visible:ring-2 focus-visible:ring-darkgreen",
                    current === index
                      ? "opacity-100 ring-1 ring-darkgreen"
                      : "opacity-45",
                  )}
                >
                  <Image
                    src={image.src}
                    alt={t("gallery_image_alt", { number: index + 1 })}
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </div>
  );
}
