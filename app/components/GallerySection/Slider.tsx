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

export default function Slider() {
  const t = useTranslations("Index");
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbApi, setThumbApi] = useState<CarouselApi>();
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
      thumbApi?.scrollTo(selected);
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
  }, [mainApi, thumbApi]);

  const handleThumbClick = useCallback(
    (index: number) => {
      mainApi?.scrollTo(index);
      thumbApi?.scrollTo(index);
      currentRef.current = index;
      setCurrent(index);
    },
    [mainApi, thumbApi],
  );

  return (
    <div className="mx-auto">
      <Carousel className="w-full" setApi={setMainApi}>
        <CarouselContent>
          {GalleryImage.map((image, index) => (
            <CarouselItem key={image.src ?? index}>
              <div className="relative h-150 w-full lg:h-300">
                <Image
                  src={image.src}
                  alt={t("gallery_image_alt", { number: index + 1 })}
                  fill
                  sizes="(min-width: 1280px) 80rem, 100vw"
                  className="rounded-xl object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Carousel
        className="mt-4 w-full"
        setApi={setThumbApi}
        opts={{ align: "start" }}
      >
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
                    "relative block aspect-square w-full cursor-pointer rounded-xl transition-opacity focus-visible:ring-2 focus-visible:ring-darkgreen",
                    current === index ? "opacity-100" : "opacity-50",
                  )}
                >
                  <Image
                    src={image.src}
                    alt={t("gallery_image_alt", { number: index + 1 })}
                    fill
                    sizes="25vw"
                    className="rounded-xl object-cover"
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
      <div className="mt-4 text-center text-sm text-muted-foreground">
        {current + 1}/{GalleryImage.length}
      </div>
    </div>
  );
}
