"use client";
import { Fade } from "react-awesome-reveal";
import { GalleryImage } from "./GalleryImage";
import Slider from "./Slider";

const Gallery: React.FC = () => {
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

        <div className="my-16">
          <Slider images={GalleryImage} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
