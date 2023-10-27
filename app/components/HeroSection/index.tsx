"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <div id="home-section">
      <div className="px-4 pt-10 mx-auto sm:px-6 sm:pt-20 max-w-7xl sm:pb-24">
        <div className="grid grid-cols-1 space-x-0 sm:space-x-1 lg:grid-cols-12">
          <div className="flex flex-col justify-center col-span-12 pb-8 sm:pb-0 lg:col-span-6">
            <Fade
              direction={"up"}
              delay={100}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h1 className="mb-4 text-3xl font-semibold text-center text-black sm:mb-5 sm:text-4xl lg:text-7xl lg:text-start">
                Welcome to my world
              </h1>
            </Fade>
            <Fade
              direction={"up"}
              delay={100}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="mb-6 font-normal text-center text-black sm:mb-10 lg:text-lg lg:text-start">
                Lorem ipsum dolor sit amet consectetur.
                <br /> Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </Fade>
          </div>

          <div className="relative flex justify-center col-span-12 lg:col-span-6">
            <div className="absolute flex items-center gap-5 p-2 bg-white bottom-10 left-10 rounded-xl"></div>
            <Image
              src="/images/5908.jpg"
              alt="nothing"
              width={1000}
              height={805}
              className="object-cover w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
