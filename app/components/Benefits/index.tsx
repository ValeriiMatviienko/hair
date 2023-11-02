"use client";
import { Fade } from "react-awesome-reveal";
import { benefits } from "./BenefitItems";

const BenefitsSection = () => {
  return (
    <div
      className="px-4 mx-auto sm:px-6 sm:py-20 max-w-7xl"
      id="benefits-section"
    >
      <Fade
        direction="up"
        delay={100}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <h3 className="mb-3 text-lg text-center text-black uppercase ls-51">
          Benefits
        </h3>
        <p className="text-3xl font-semibold text-center text-black lg:text-5xl">
          Learn the advantages of various hair treatments
        </p>
      </Fade>

      <div className="mt-10 space-y-8">
        {benefits.map((benefitSection, idx) => (
          <Fade
            key={idx}
            direction="up"
            delay={100 + idx * 50}
            damping={1e-1}
            triggerOnce={true}
          >
            <div>
              <h4 className="mb-4 text-2xl text-center text-black uppercase">
                {benefitSection.title}
              </h4>
              <ul className="space-y-4">
                {benefitSection.benefits.map((benefit, subIdx) => (
                  <li key={subIdx} className="flex flex-col space-y-2">
                    <h5 className="text-lg font-semibold text-center uppercase md:text-left">
                      {benefit.subtitle}
                    </h5>
                    <p className="text-lg text-center text-black text-opacity-80 md:text-left">
                      {benefit.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Fade>
        ))}
      </div>
      <Fade direction="up" delay={400} damping={1e-1} triggerOnce={true}>
        <p className="mt-10 text-lg text-black">
          Each of these treatments offers unique benefits, and the best choice
          will depend on an individual&apos;s hair type, condition, and desired
          results. It&apos;s always advisable to consult with a professional
          hairstylist before undergoing any treatment to ensure it&apos;s
          suitable for one&apos;s specific hair needs.
        </p>
      </Fade>
    </div>
  );
};

export default BenefitsSection;
