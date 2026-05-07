"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { GalleryImage } from "./GalleryImage";

export default function Slider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleThumbClick = useCallback(
    (index: number) => api?.scrollTo(index),
    [api],
  );

  return (
    <div className="mx-auto ">
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {GalleryImage.map((image, index) => (
            <CarouselItem key={image.src ?? index}>
              <div className="relative h-150 lg:h-300 w-full">
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

      <Carousel className="mt-4 w-full ">
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

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
