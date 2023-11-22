"use client";
import Accordion from "./Accordion";
import { Fade } from "react-awesome-reveal";
import { getFAQs } from "./FAQItem";
import { useTranslations } from "next-intl";

const FAQSection: React.FC = () => {
  const t = useTranslations("Index");
  const faqs = getFAQs(t);

  return (
    <div className="p-4" id="faq-section">
      <div className="px-4 pt-10 mx-auto sm:px-6 sm:pt-20 max-w-7xl sm:pb-24">
        <div className="mb-10 text-center sm:mb-14">
          <Fade
            direction={"up"}
            delay={100}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h3 className="mb-3 text-2xl text-black uppercase ls-51">
              {t("faq_title")}
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
              {t("faq_subtitle")}
            </p>
          </Fade>
        </div>
        <div className="grid grid-cols-1 space-x-0 sm:space-x-1 lg:grid-cols-12">
          <div className="col-span-12 lg:col-span-12">
            <Fade
              direction={"up"}
              delay={100}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <Accordion items={faqs} />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
