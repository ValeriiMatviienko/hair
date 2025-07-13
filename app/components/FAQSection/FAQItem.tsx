import { FAQItem, TranslationFunction } from "@/app/types/types";

export const getFAQs = (t: TranslationFunction): FAQItem[] => [
  {
    question: t("faq_question_1"),
    answer: t("faq_answer_1"),
  },
  {
    question: t("faq_question_2"),
    answer: t("faq_answer_2"),
  },
  {
    question: t("faq_question_3"),
    answer: t("faq_answer_3"),
  },
  {
    question: t("faq_question_4"),
    answer: t("faq_answer_4"),
  },
  {
    question: t("faq_question_5"),
    answer: t("faq_answer_5"),
  },
  {
    question: t("faq_question_6"),
    answer: t("faq_answer_6"),
  },
  {
    question: t("faq_question_7"),
    answer: t("faq_answer_7"),
  },
];
