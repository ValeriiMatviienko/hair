"use client";
import { Fade } from "react-awesome-reveal";
import { serviceData } from "./ServiceData";

const Service = () => {
  return (
    <div>
      <div
        className="px-4 py-20 mx-auto sm:px-6 sm:py-40 max-w-7xl"
        id="service-section"
      >
        <div className="mb-10 text-center sm:mb-14">
          <Fade
            direction={"up"}
            delay={100}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h3 className="mb-3 text-lg font-normal text-black uppercase ls-51">
              Services
            </h3>
          </Fade>
          <Fade
            direction={"up"}
            delay={100}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <p className="text-3xl font-semibold text-black lg:text-5xl">
              Discover services I have.
            </p>
          </Fade>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-20 gap-x-3 sm:gap-x-5">
          <Fade
            direction={"up"}
            delay={100}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            {serviceData.map((items, i) => (
              <div className="relative p-8 rounded-3xl" key={i}>
                <h3 className="mt-16 text-2xl font-semibold text-center text-black">
                  {items.serviceTitle}
                </h3>
                <p className="mt-2 text-lg font-normal text-center text-black text-opacity-50">
                  {items.serviceDescription}
                </p>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Service;
