"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div id="home-section" className="bg-lightpink">
      <div className="px-6 pt-20 mx-auto max-w-7xl sm:pb-24">
        <div className="grid grid-cols-1 space-x-1 lg:grid-cols-12">
          <div className="flex flex-col justify-center col-span-6">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h1 className="mb-5 text-4xl font-semibold text-center lg:text-7xl text-lightgrey md:4px lg:text-start">
                Welcome to my world
              </h1>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="mb-10 font-normal text-center text-grey lg:text-lg lg:text-start">
                Lorem ipsum dolor sit amet consectetur.
                <br /> Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </Fade>
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            ></Fade>
          </div>

          <div className="relative flex justify-center col-span-6">
            <div className="absolute flex items-center gap-5 p-2 bg-white bottom-10 left-10 rounded-xl"></div>
            <Image
              src="/images/5908.jpg"
              alt="nothing"
              width={1000}
              height={805}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
