"use client";

import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { GalleryImage } from "./GalleryImage";
import { useEffect, useState } from "react";

export default function Slider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-xs">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {GalleryImage.map((image, index) => (
            <CarouselItem key={image.src ?? index}>
              <Card>
                <CardContent className="relative h-150 p-0">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative h-full cursor-pointer">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                    </DialogTrigger>

                    <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
                      <div className="relative w-full h-[80vh]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-contain rounded-md"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mt-4 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
}
