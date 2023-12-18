import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { SliderProps } from "@/app/types/types";

const Slider = ({ images }: SliderProps) => {
  const length = images.length - 1;
  const [index, setIndex] = useState<number>(0);
  const [startX, setStartX] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setDistance(e.touches[0].clientX - startX);
  };

  const handlePrev = () => {
    index === 0 ? setIndex(length) : setIndex(index - 1);
  };
  const handleNext = useCallback(() => {
    index === length ? setIndex(0) : setIndex(index + 1);
  }, [index, length]);

  const handleTouchEnd = () => {
    distance > 50 ? handlePrev() : distance < -50 && handleNext();
    /** Reset the distance for the next swipe */
    setDistance(0);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => {
      clearInterval(slideInterval);
    };
  }, [index, handleNext]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-between w-full px-4 ">
        <ArrowLeftIcon
          className="w-8 h-8 text-black cursor-pointer "
          onClick={handlePrev}
        />
        <Image
          src={images[index].src}
          alt={images[index].alt}
          width={500}
          height={500}
          style={{ width: "auto", height: "auto" }}
          className="max-w-full rounded-lg shadow-lg"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          loading="lazy"
        />
        <ArrowRightIcon
          className="w-8 h-8 text-black cursor-pointer"
          onClick={handleNext}
        />
      </div>
      <div className="flex items-center mt-4 space-x-3">
        {images.map((_, i) => (
          <div
            onClick={() => setIndex(i)}
            key={i}
            className={`${
              i === index ? "w-4 h-4" : "w-2 h-2"
            } rounded-full cursor-pointer bg-black`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
