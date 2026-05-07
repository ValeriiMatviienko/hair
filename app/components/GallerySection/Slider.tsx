"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { GalleryImage } from "./GalleryImage";

export default function Slider() {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbApi, setThumbApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!mainApi) return;

    const handleSelect = () => {
      const selected = mainApi.selectedScrollSnap();

      setCurrent(selected);
      thumbApi?.scrollTo(selected);
    };

    setCount(mainApi.scrollSnapList().length);
    handleSelect();

    mainApi.on("select", handleSelect);

    return () => {
      mainApi.off("select", handleSelect);
    };
  }, [mainApi, thumbApi]);

  const handleThumbClick = useCallback(
    (index: number) => {
      mainApi?.scrollTo(index);
      thumbApi?.scrollTo(index);
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
                  alt={image.alt}
                  fill
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
                onClick={() => handleThumbClick(index)}
                className={cn(
                  "basis-1/4 cursor-pointer transition-opacity",
                  current === index ? "opacity-100" : "opacity-50",
                )}
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
      <div className="mt-4 text-center text-sm text-muted-foreground">
        {current + 1} / {count}
      </div>
    </div>
  );
}
