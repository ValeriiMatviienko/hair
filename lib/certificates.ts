import type { TranslationFunction } from "@/app/types/types";

export type CertificateImage = {
  src: string;
  alt: string;
  number: number;
};

export type CertificateSection = {
  type?: "grid";
  images: CertificateImage[];
};

const layout = [
  { type: undefined, numbers: [10] },
  { type: "grid" as const, numbers: [9, 8, 7, 6] },
  { type: "grid" as const, numbers: [4, 3, 2, 1] },
  { type: undefined, numbers: [5] },
];

export const getCertificateSections = (
  t: TranslationFunction,
): CertificateSection[] =>
  layout.map((section) => ({
    type: section.type,
    images: section.numbers.map((number) => ({
      src: `/images/certificates/cert-${String(number).padStart(2, "0")}.png`,
      alt: t("certificate_image_alt", { number: String(number) }),
      number,
    })),
  }));
