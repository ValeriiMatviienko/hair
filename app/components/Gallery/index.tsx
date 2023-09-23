"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { GalleryImage } from "./GalleryImage";

const Gallery = () => {
  return (
    <div id="gallery-section">
      <div className="max-w-2xl mx-auto mt-20 lg:max-w-7xl sm:py-4 lg:px-8 md:pt-24">
        <div className="text-center">
          <Fade
            direction={"up"}
            delay={100}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h2 className="mb-3 text-lg font-normal tracking-widest text-black uppercase ls-51">
              Gallery
            </h2>
          </Fade>
          <Fade
            direction={"up"}
            delay={100}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h3 className="text-3xl font-semibold text-black lg:text-5xl">
              Gallery of my latest works.
            </h3>
          </Fade>
        </div>

        <div className="grid grid-cols-1 px-6 my-16 space-y-6 sm:grid-cols-2 md:grid-cols-3 sm:space-x-6 md:space-y-0">
          {GalleryImage.map((image, index) => (
            <div
              key={index}
              className="flex justify-center overflow-hidden rounded-3xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={image.className || "inner-img"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
