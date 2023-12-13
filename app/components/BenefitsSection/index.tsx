"use client";
import { Fade } from "react-awesome-reveal";
import { getBenefitItems } from "./BenefitItems";
import { useTranslations } from "next-intl";

const BenefitsSection = () => {
  const t = useTranslations("Index");
  const benefits = getBenefitItems(t);

  return (
    <section
      className="px-4 py-12 mx-auto md:py-18 lg:px-8 max-w-7xl"
      id="benefits-section"
    >
      <Fade direction="up" delay={40} cascade damping={0.1} triggerOnce={true}>
        <div className="text-center">
          <h2 className="mx-auto mb-3 text-2xl text-center text-black uppercase title-line ls-51">
            {t("benefits_section_title")}
          </h2>
        </div>
        <p className="text-3xl font-semibold text-center text-black lg:text-5xl">
          {t("benefits_section_subtitle")}
        </p>
      </Fade>

      <div className="mt-10 space-y-8">
        {benefits.map((benefitSection, idx) => (
          <Fade
            key={idx}
            direction="up"
            delay={50 + idx * 50}
            damping={0.1}
            triggerOnce={true}
          >
            <div>
              <h3 className="mb-4 text-2xl text-center text-black uppercase">
                {benefitSection.title}
              </h3>
              <ul className="space-y-4">
                {benefitSection.benefits.map((benefit, subIdx) => (
                  <li key={subIdx} className="flex flex-col space-y-2">
                    <h4 className="text-lg font-semibold text-center uppercase md:text-xl md:text-left">
                      {benefit.subtitle}
                    </h4>
                    <p className="text-lg text-center text-black md:text-xl text-opacity-80 md:text-left">
                      {benefit.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Fade>
        ))}
      </div>
      <Fade direction="up" delay={40} damping={0.1} triggerOnce={true}>
        <p className="mt-10 text-lg text-center text-black sm:text-xl">
          {t("benefits_conclusion")}
        </p>
      </Fade>
    </section>
  );
};

export default BenefitsSection;
