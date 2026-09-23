"use client";

import { getFAQs } from "./FAQItem";
import { useTranslations } from "next-intl";

import CustomAccordion from "./Accordion";

const FAQSection = () => {
  const t = useTranslations("Index");
  const faqs = getFAQs(t);

  return (
    <section className="scroll-mt-[5.5rem] bg-sage/70" id="faq-section">
      <div className="section-shell">
        <div className="mb-10 max-w-xl sm:mb-14">
          <p className="section-label">{t("section_faq")}</p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
            {t("faq_title")}
          </h2>
          <p className="mt-3 text-base text-ink/65 sm:text-lg">
            {t("faq_subtitle")}
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <CustomAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
