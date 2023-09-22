"use client";
import { cardDataType } from "@/app/types/types";
import { Fade } from "react-awesome-reveal";

const cardData: cardDataType[] = [
  {
    heading: "Service",
    subheading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed harum ut doloribus quibusdam consequatur dolores ab esse fuga voluptates porro est, officiis iusto. Illo iure obcaecati maxime fugit quo adipisci.",
  },
  {
    heading: "Service",
    subheading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed harum ut doloribus quibusdam consequatur dolores ab esse fuga voluptates porro est, officiis iusto. Illo iure obcaecati maxime fugit quo adipisci.",
  },
  {
    heading: "Service",
    subheading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed harum ut doloribus quibusdam consequatur dolores ab esse fuga voluptates porro est, officiis iusto. Illo iure obcaecati maxime fugit quo adipisci.",
  },
  {
    heading: "Service",
    subheading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed harum ut doloribus quibusdam consequatur dolores ab esse fuga voluptates porro est, officiis iusto. Illo iure obcaecati maxime fugit quo adipisci.",
  },
];

const Service = () => {
  return (
    <div>
      <div className="px-6 py-40 mx-auto max-w-7xl" id="service-section">
        <div className="text-center mb-14">
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h3 className="mb-3 text-lg font-normal uppercase text-black ls-51">
              Features
            </h3>
          </Fade>
          <Fade
            direction={"up"}
            delay={800}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <p className="text-3xl font-semibold lg:text-5xl text-black">
              Get a many of interesting <br /> features.
            </p>
          </Fade>
        </div>

        <div className="grid mt-32 sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5">
          <Fade
            direction={"up"}
            delay={1000}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            {cardData.map((items, i) => (
              <div className="relative p-8 card-b rounded-3xl" key={i}>
                <div className="work-img-bg rounded-full flex justify-center absolute top-[-50%] sm:top-[-40%] md:top-[-55%] lg:top-[-45%] left-[0%]"></div>
                <h3 className="mt-16 text-2xl font-semibold text-center text-black">
                  {items.heading}
                </h3>
                <p className="mt-2 text-lg font-normal text-center text-black text-opacity-50">
                  {items.subheading}
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
