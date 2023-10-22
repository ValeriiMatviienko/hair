import React, { useState } from "react";
import Image from "next/image";
import ArrowLeftIcon from "@heroicons/react/24/outline/ArrowLeftIcon";
import ArrowRightIcon from "@heroicons/react/24/outline/ArrowRightIcon";
import { SliderProps } from "@/app/types/types";

const Slider: React.FC<SliderProps> = ({ images }) => {
  const length = images.length - 1;
  const [index, setIndex] = useState<number>(0);

  const handlePrev = () => {
    index === 0 ? setIndex(length) : setIndex(index - 1);
  };

  const handleNext = () => {
    index === length ? setIndex(0) : setIndex(index + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-between w-full px-4">
        <ArrowLeftIcon
          className="flex-shrink-0 w-8 h-8 text-black cursor-pointer"
          onClick={handlePrev}
        />
        <Image
          src={images[index].src}
          alt={images[index].alt}
          width={images[index].width}
          height={images[index].height}
          className="max-w-full"
        />
        <ArrowRightIcon
          className="flex-shrink-0 w-8 h-8 text-black cursor-pointer"
          onClick={handleNext}
        />
      </div>
      <div className="flex mt-4 space-x-2">
        {images.map((_, i) => (
          <div
            onClick={() => setIndex(i)}
            key={i}
            className="w-2 h-2 rounded-full cursor-pointer"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
